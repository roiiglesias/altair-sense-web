// Captura de origen del visitante (UTM, referrer, página de entrada) para saber
// de qué canal viene cada lead. SE GUARDA SOLO EN MEMORIA (no cookies, no
// localStorage ni sessionStorage): así la web no instala nada en el dispositivo
// del visitante y no requiere banner de cookies. Se envía únicamente si la
// persona envía un formulario (ver Política de Privacidad).
let data = null

export function captureAttribution() {
  if (data) return
  try {
    const q = new URLSearchParams(window.location.search)
    data = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'].forEach((k) => {
      if (q.get(k)) data[k] = q.get(k).slice(0, 60)
    })
    if (document.referrer) {
      try { data.ref = new URL(document.referrer).hostname } catch { /* ignore */ }
    }
    data.landing = window.location.pathname
  } catch { data = {} }
}

export function attributionString() {
  const parts = Object.entries(data || {}).map(([k, v]) => `${k}=${v}`)
  return parts.length ? ' | ' + parts.join(' ') : ''
}
