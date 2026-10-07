import { supabase } from './supabaseClient.js'
import { attributionString } from './attribution.js'

// Guarda el mensaje en Supabase y avisa por email (el aviso es "best effort").
// Devuelve { ok: boolean }.
export async function submitLead(form, { lang, source = 'web' }) {
  source = (source + attributionString()).slice(0, 300)
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
