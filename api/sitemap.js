// Sitemap dinámico bilingüe: cada página en español (raíz) y en inglés (/en/...),
// con alternates hreflang. Incluye noticias y artículos de Knowledge Base publicados.

const BASE = 'https://www.altairsense.com'
const EN_SLUGS = { soluciones: 'solutions', sectores: 'sectors', servicios: 'services', nosotros: 'about', contacto: 'contact', noticias: 'news', 'aviso-legal': 'legal-notice', privacidad: 'privacy' }

const enPath = (p) => {
  if (p === '/') return '/en'
  const parts = p.split('/')
  if (EN_SLUGS[parts[1]]) parts[1] = EN_SLUGS[parts[1]]
  return '/en' + parts.join('/')
}

const STATIC = [
  ['/', '1.0'], ['/soluciones', '0.9'], ['/sectores', '0.9'], ['/servicios', '0.9'], ['/lumen', '0.9'],
  ['/noticias', '0.7'], ['/knowledge-base', '0.7'], ['/partners', '0.7'], ['/nosotros', '0.7'], ['/contacto', '0.7'],
  ['/aviso-legal', '0.2'], ['/privacidad', '0.2'], ['/cookies', '0.2']
]

const SECTOR_SLUGS = [
  'fashion-retail', 'supermercados', 'sports-apparel', 'farmacias', 'clinicas',
  'hospitales', 'hoteles', 'automocion', 'comunicacion-corporativa', 'viajes',
  'restauracion', 'inmobiliarias'
]

async function fetchSlugs(table) {
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.VITE_SUPABASE_ANON_KEY
  if (!url || !key) return []
  try {
    const r = await fetch(`${url}/rest/v1/${table}?select=slug&is_published=eq.true`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` }
    })
    if (!r.ok) return []
    return (await r.json()).map((x) => x.slug).filter(Boolean)
  } catch {
    return []
  }
}

export default async function handler(req, res) {
  const [news, kb] = await Promise.all([fetchSlugs('news_posts'), fetchSlugs('kb_articles')])

  const urls = [
    ...STATIC,
    ...SECTOR_SLUGS.map((s) => [`/sectores/${s}`, '0.8']),
    ...news.map((s) => [`/noticias/${s}`, '0.6']),
    ...kb.map((s) => [`/knowledge-base/${s}`, '0.6'])
  ]

  const entry = (loc, p, pr) => `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${p === '/' ? '/' : p}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${enPath(p)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${p === '/' ? '/' : p}" />
    <priority>${pr}</priority>
  </url>`

  const body = urls.flatMap(([p, pr]) => [
    entry(`${BASE}${p === '/' ? '/' : p}`, p, pr),
    entry(`${BASE}${enPath(p)}`, p, pr)
  ]).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.status(200).send(xml)
}
