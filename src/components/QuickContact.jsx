import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useRouter } from '../lib/router.jsx'
import { submitLead } from '../lib/submitLead.js'
import Consent from './Consent.jsx'

const empty = { name: '', email: '', message: '' }

// Botón flotante "Hablemos" visible en todas las páginas + formulario rápido
// (nombre, email, mensaje). Cualquier botón de la web puede abrirlo con
// openQuickContact() (src/lib/links.js).
export default function QuickContact() {
  const { pick, lang } = useLang()
  const { path } = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [consent, setConsent] = useState(false)
  const firstField = useRef(null)

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('as:open-contact', onOpen)
    return () => window.removeEventListener('as:open-contact', onOpen)
  }, [])

  useEffect(() => { setOpen(false) }, [path])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    setTimeout(() => firstField.current?.focus(), 50)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const { ok } = await submitLead(form, { lang, source: `web-rapido:${path}`, consent })
    if (!ok) { setStatus('error'); return }
    setStatus('sent')
    setForm(empty)
    setConsent(false)
  }

  const close = () => { setOpen(false); if (status === 'sent') setStatus('idle') }
  const hideFab = path === '/contacto'

  return (
    <>
      {!hideFab && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed z-40 bottom-5 right-5 flex items-center gap-2 bg-as-lime text-as-black font-bold text-sm pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:brightness-95 transition"
          aria-label={pick('Contactar con Altair Sense', 'Contact Altair Sense')}
        >
          <MessageCircle size={18} />
          {pick('Hablemos', "Let's talk")}
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:justify-end sm:p-6" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-as-black/60" onClick={close} />
          <div className="relative w-full sm:w-[400px] bg-as-black text-as-cream rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl p-6 max-h-[92vh] overflow-y-auto">
            <button onClick={close} className="absolute top-4 right-4 text-as-cream/60 hover:text-as-cream" aria-label="Cerrar / Close">
              <X size={20} />
            </button>

            {status === 'sent' ? (
              <div className="flex flex-col items-center text-center py-8">
                <CheckCircle2 size={44} className="text-as-lime mb-4" />
                <h3 className="font-display font-extrabold text-2xl mb-2">{pick('Mensaje enviado', 'Message sent')}</h3>
                <p className="text-as-cream/65 text-sm">{pick('Te respondemos en 24-48h laborables.', "We'll reply within 24-48 business hours.")}</p>
                <button onClick={close} className="mt-6 text-sm font-bold text-as-lime">{pick('Cerrar', 'Close')}</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl pr-8">{pick('Hablemos', "Let's talk")}</h3>
                <p className="text-sm text-as-cream/60 pb-1">
                  {pick('Déjanos tus datos y te respondemos.', 'Leave your details and we will get back to you.')}
                </p>
                <input ref={firstField} name="name" required value={form.name} onChange={onChange}
                  placeholder={pick('Nombre*', 'Name*')} className={inputCls} />
                <input name="email" type="email" required value={form.email} onChange={onChange}
                  placeholder="Email*" className={inputCls} />
                <textarea name="message" required rows={4} value={form.message} onChange={onChange}
                  placeholder={pick('¿En qué podemos ayudarte?*', 'How can we help?*')} className={`${inputCls} resize-none`} />

                <Consent checked={consent} onChange={setConsent} dark />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">
                    <AlertCircle size={16} />
                    {pick('No se ha podido enviar. Inténtalo de nuevo.', 'Could not send. Please try again.')}
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-as-lime text-as-black font-bold px-6 py-3 rounded-full hover:brightness-95 transition disabled:opacity-60">
                  {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                  {pick('Enviar', 'Send')}
                </button>

                <a href="mailto:info@altairsense.com" className="flex items-center justify-center gap-2 text-xs text-as-cream/55 hover:text-as-lime transition pt-1">
                  <Mail size={14} /> info@altairsense.com
                </a>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

const inputCls = 'w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-as-cream placeholder:text-as-cream/40 focus:border-as-lime outline-none transition'
