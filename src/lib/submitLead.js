import { supabase } from './supabaseClient.js'
import { attributionString } from './attribution.js'
import { CONSENT_VERSION } from '../data/legal.js'

// Guarda el mensaje en Supabase y avisa por email (el aviso es "best effort").
// Devuelve { ok: boolean }.
export async function submitLead(form, { lang, source = 'web', consent = false }) {
  // Sin consentimiento explícito no se envía nada. La versión del texto aceptado se
  // guarda al inicio de `source` como prueba del consentimiento (la fecha es created_at).
  if (!consent) return { ok: false }
  source = `consent=${CONSENT_VERSION} | ${source}${attributionString()}`.slice(0, 300)
  if (!supabase) {
    await new Promise((r) => setTimeout(r, 600))
    return { ok: true }
  }

  const { error } = await supabase.from('contact_messages').insert({
    name: form.name,
    email: form.email,
    company: form.company || null,
    phone: form.phone || null,
    sector: form.sector || null,
    message: form.message,
    locale: lang,
    source
  })

  if (error) {
    console.error(error)
    return { ok: false }
  }

  fetch('/api/notify-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, locale: lang, source })
  }).catch((err) => console.error('notify-lead failed', err))

  return { ok: true }
}
