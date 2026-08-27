import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo from '../components/Seo.jsx'
import { Mail, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const initialForm = { name: '', email: '', company: '', phone: '', sector: '', message: '' }

export default function Contacto() {
  const { pick, t, lang } = useLang()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    if (!supabase) {
      // Sin Supabase configurado (desarrollo local sin .env): simula envío para no romper la UX.
      await new Promise((r) => setTimeout(r, 600))
      setStatus('sent')
      return
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      company: form.company || null,
      phone: form.phone || null,
      sector: form.sector || null,
      message: form.message,
      locale: lang,
      source: 'web'
    })

    if (error) {
      console.error(error)
      setStatus('error')
      return
    }

    setStatus('sent')
    setForm(initialForm)

    // Aviso por email al equipo — si falla, no afecta a la experiencia del
    // usuario: el lead ya está guardado en Supabase de todas formas.
    fetch('/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, locale: lang })
    }).catch((err) => console.error('notify-lead failed', err))
  }

  return (
    <div>
      <Seo
        title={t.nav.contact}
        description={pick(
          'Habla con Altair Sense sobre digital signage, retail media, control de inventario o mantenimiento predictivo, preventivo y correctivo para tu retail.',
          'Talk to Altair Sense about digital signage, retail media, inventory control or predictive, preventive and corrective maintenance for your retail business.'
        )}
        path="/contacto"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.contact}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {t.cta_contact}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Cuéntanos en qué punto está tu operación de escaparate y te proponemos el primer paso.',
              "Tell us where your shopfront operation stands and we'll propose the first step."
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-14">
          <div>
            <h2 className="font-display font-extrabold text-2xl text-as-black mb-6">
              {pick('Contacto directo', 'Direct contact')}
            </h2>
            <a href="mailto:info@altairsense.com" className="flex items-center gap-3 text-as-black/75 hover:text-as-moss transition mb-4">
              <Mail size={18} /> info@altairsense.com
            </a>
            <a href="tel:+34900000000" className="flex items-center gap-3 text-as-black/75 hover:text-as-moss transition">
              <Phone size={18} /> +34 900 000 000
            </a>

          </div>

          <form onSubmit={onSubmit} className="bg-white border border-as-stone rounded-2xl p-8 md:p-10">
            {status === 'sent' ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle2 size={44} className="text-as-moss mb-4" />
                <h3 className="font-display font-extrabold text-2xl text-as-black mb-2">
                  {pick('Mensaje enviado', 'Message sent')}
                </h3>
                <p className="text-as-black/60">
                  {pick('Te responderemos en menos de 24-48h laborables.', "We'll reply within 24-48 business hours.")}
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={pick('Nombre*', 'Name*')} name="name" value={form.name} onChange={onChange} required />
                <Field label="Email*" name="email" type="email" value={form.email} onChange={onChange} required />
                <Field label={pick('Empresa', 'Company')} name="company" value={form.company} onChange={onChange} />
                <Field label={pick('Teléfono', 'Phone')} name="phone" value={form.phone} onChange={onChange} />
                <Field
                  label={pick('Sector', 'Sector')}
                  name="sector"
                  value={form.sector}
                  onChange={onChange}
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-as-black/70 mb-1.5">
                    {pick('Mensaje*', 'Message*')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className="w-full rounded-lg border border-as-stone px-4 py-3 text-as-black focus:border-as-moss focus:ring-1 focus:ring-as-moss outline-none transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="sm:col-span-2 flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} />
                    {pick('No hemos podido enviar el mensaje. Inténtalo de nuevo.', "We couldn't send the message. Please try again.")}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-as-black text-as-lime font-bold px-7 py-3.5 rounded-full hover:brightness-125 transition disabled:opacity-60"
                >
                  {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                  {status === 'sending' ? t.loading : t.cta_contact}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

function Field({ label, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-as-black/70 mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-as-stone px-4 py-3 text-as-black focus:border-as-moss focus:ring-1 focus:ring-as-moss outline-none transition"
      />
    </div>
  )
}
