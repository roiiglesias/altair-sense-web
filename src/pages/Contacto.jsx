import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { submitLead } from '../lib/submitLead.js'
import Seo from '../components/Seo.jsx'
import Consent from '../components/Consent.jsx'
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const initialForm = { name: '', email: '', company: '', phone: '', sector: '', size: '', timing: '', message: '' }

export default function Contacto() {
  const { pick, t, lang } = useLang()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [consent, setConsent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    // Datos de cualificación: se añaden al inicio del mensaje (sin tocar el esquema de Supabase)
    const tags = [form.size && `Ubicaciones: ${form.size}`, form.timing && `Plazo: ${form.timing}`].filter(Boolean)
    const payload = { ...form, message: (tags.length ? `[${tags.join(' | ')}]\n` : '') + form.message }
    const { ok } = await submitLead(payload, { lang, source: 'web-contacto', consent })
    if (!ok) { setStatus('error'); return }
    setStatus('sent')
    setForm(initialForm)
    setConsent(false)
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

            <div className="mt-10 border-t border-as-stone pt-8">
              <h3 className="text-xs font-bold tracking-[0.2em] text-as-moss uppercase mb-3">
                {pick('Oficina', 'Office')}
              </h3>
              <a
                href="https://maps.google.com/?q=Calle+Los+Prados+166,+Edificio+Impulsa,+Gijón,+España"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-as-black/75 hover:text-as-moss transition"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  Altair Sense HQ<br />
                  Calle Los Prados 166, Edificio Impulsa<br />
                  Gijón, España
                </span>
              </a>
            </div>

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
                <Select label={pick('Nº de ubicaciones', 'Number of locations')} name="size" value={form.size} onChange={onChange}
                  options={['1-5', '6-25', '26-100', '100+']} placeholder={pick('Selecciona', 'Select')} />
                <Select label={pick('¿Para cuándo?', 'Timeline')} name="timing" value={form.timing} onChange={onChange}
                  options={[pick('Lo antes posible', 'As soon as possible'), pick('En 1-3 meses', 'In 1-3 months'), pick('Estoy explorando', 'Just exploring')]} placeholder={pick('Selecciona', 'Select')} />
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

                <div className="sm:col-span-2">
                  <Consent checked={consent} onChange={setConsent} />
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

function Select({ label, options, placeholder, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-as-black/70 mb-1.5">{label}</label>
      <select
        {...props}
        className="w-full rounded-lg border border-as-stone px-4 py-3 text-as-black bg-white focus:border-as-moss focus:ring-1 focus:ring-as-moss outline-none transition"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
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
