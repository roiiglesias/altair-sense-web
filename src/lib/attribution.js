// Captura de origen del visitante (UTM, referrer, página de entrada) para
// saber de qué canal viene cada lead. Se guarda en sessionStorage y se añade
// al campo "source" del mensaje de contacto. No requiere cambios en Supabase.
const KEY = 'as_attr'

export function captureAttribution() {
  try {
    if (sessionStorage.getItem(KEY)) return
    const q = new URLSearchParams(window.location.search)
    const data = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'].forEach((k) => {
      if (q.get(k)) data[k] = q.get(k).slice(0, 60)
    })
    if (document.referrer) {
      try { data.ref = new URL(document.referrer).hostname } catch { /* ignore */ }
    }
    data.landing = window.location.pathname
    sessionStorage.setItem(KEY, JSON.stringify(data))
  } catch { /* sin storage: no pasa nada */ }
}

export function attributionString() {
  try {
    const d = JSON.parse(sessionStorage.getItem(KEY) || '{}')
    const parts = Object.entries(d).map(([k, v]) => `${k}=${v}`)
    return parts.length ? ' | ' + parts.join(' ') : ''
  } catch { return '' }
}
