// Sitemap dinámico: páginas estáticas + noticias y artículos de Knowledge Base
// publicados en Supabase. Vercel lo sirve en /sitemap.xml (ver vercel.json).

const BASE = 'https://www.altairsense.com'

const STATIC = [
  ['/', '1.0'], ['/soluciones', '0.9'], ['/sectores', '0.9'], ['/servicios', '0.9']
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
    ...['/noticias', '/knowledge-base', '/partners', '/nosotros', '/contacto'].map((p) => [p, '0.7']),
    ...SECTOR_SLUGS.map((s) => [`/sectores/${s}`, '0.8']),
    ...news.map((s) => [`/noticias/${s}`, '0.6']),
    ...kb.map((s) => [`/knowledge-base/${s}`, '0.6'])
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([p, pr]) => `  <url><loc>${BASE}${p === '/' ? '/' : p}</loc><priority>${pr}</priority></url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.status(200).send(xml)
}
