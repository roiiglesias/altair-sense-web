// Mapa de URLs ES <-> EN, compartido por el router (navegador), el prerender y el sitemap (Node).
// Módulo puro: sin React ni dependencias.

// Primer segmento de la ruta lógica (español) -> slug en inglés
export const EN_SLUGS = {
  soluciones: 'solutions',
  sectores: 'sectors',
  servicios: 'services',
  nosotros: 'about',
  contacto: 'contact',
  noticias: 'news',
  'aviso-legal': 'legal-notice',
  privacidad: 'privacy'
}

// Slugs en inglés de los artículos de la Knowledge Base (slug en Supabase -> slug en /en/).
// Un artículo nuevo sin entrada aquí conserva su slug en /en/ hasta que se añada.
export const KB_EN_SLUGS = {
  'que-es-connected-retail-strategy': 'what-is-connected-retail-strategy',
  'carteleria-digital-salud-clinicas-parafarmacia-perfumeria': 'digital-signage-health-clinics-parapharmacy-perfumery',
  'retail-media-en-tienda-fisica-que-demostrar': 'in-store-retail-media-what-to-prove',
  'carteleria-digital-sala-espera-clinica': 'clinic-waiting-room-digital-signage',
  'carteleria-digital-perfumerias-belleza-2026': 'digital-signage-perfumeries-beauty-2026'
}

const ES_FROM_EN = Object.fromEntries(Object.entries(EN_SLUGS).map(([es, en]) => [en, es]))
const KB_ES_FROM_EN = Object.fromEntries(Object.entries(KB_EN_SLUGS).map(([es, en]) => [en, es]))

// Las URLs antiguas /hide/... redirigen a la raíz.
const LEGACY = '/hide'

function mapFirstSegment(path, table) {
  const parts = path.split('/')
  if (parts[1] && table[parts[1]]) parts[1] = table[parts[1]]
  return parts.join('/')
}

// URL real -> { lang, logical }  (logical = ruta en español sin prefijo)
export function parseUrl(pathname) {
  let p = pathname
  if (p === LEGACY || p === `${LEGACY}/`) p = '/'
  else if (p.startsWith(`${LEGACY}/`)) p = p.slice(LEGACY.length)
  if (p === '/en' || p === '/en/') return { lang: 'en', logical: '/' }
  if (p.startsWith('/en/')) {
    const parts = mapFirstSegment(p.slice(3), ES_FROM_EN).split('/')
    if (parts[1] === 'knowledge-base' && parts[2] && KB_ES_FROM_EN[parts[2]]) parts[2] = KB_ES_FROM_EN[parts[2]]
    return { lang: 'en', logical: parts.join('/') }
  }
  return { lang: 'es', logical: p }
}

// ruta lógica + idioma -> URL real
export function buildUrl(logical, lang) {
  if (lang !== 'en') return logical
  if (logical === '/') return '/en'
  const parts = mapFirstSegment(logical, EN_SLUGS).split('/')
  if (parts[1] === 'knowledge-base' && parts[2] && KB_EN_SLUGS[parts[2]]) parts[2] = KB_EN_SLUGS[parts[2]]
  return '/en' + parts.join('/')
}
