// Sitemap dinámico. Vercel lo sirve en /api/sitemap — lo mapeamos a
// /sitemap-dynamic.xml vía vercel.json para que incluya noticias y artículos
// de Knowledge Base publicados en Supabase, además de las páginas estáticas.

export default async function handler(req, res) {
  const base = 'https://www.altairsense.com'
  const staticUrls = [
    { loc: '/', priority: '1.0' },
    { loc: '/soluciones', priority: '0.9' },
    { loc: '/sectores', priority: '0.9' },
    { loc: '/sectores/moda', priority: '0.7' },
    { loc: '/sectores/deportes', priority: '0.7' },
    { loc: '/sectores/supermercados', priority: '0.7' },
    { loc: '/sectores/health', priority: '0.7' },
    { loc: '/sectores/viajes', priority: '0.7' },
    { loc: '/sectores/centros-deportivos', priority: '0.7' },
    { loc: '/noticias', priority: '0.6' },
    { loc: '/knowledge-base', priority: '0.6' },
    { loc: '/partners', priority: '0.5' },
    { loc: '/nosotros', priority: '0.6' },
    { loc: '/contacto', priority: '0.8' }
  ]

  let dynamicUrls = []

  try {
    const url = process.env.VITE_SUPABASE_URL
    const key = process.env.VITE_SUPABASE_ANON_KEY
    if (url && key) {
      const headers = { apikey: key, Authorization: `Bearer ${key}` }

      const [newsRes, kbRes] = await Promise.all([
        fetch(`${url}/rest/v1/news_posts?select=slug,published_at&is_published=eq.true`, { headers }),
        fetch(`${url}/rest/v1/kb_articles?select=slug,created_at&is_published=eq.true`, { headers })
      ])

      if (newsRes.ok) {
        const news = await newsRes.json()
        dynamicUrls.push(...news.map((n) => ({ loc: `/noticias/${n.slug}`, priority: '0.5', lastmod: n.published_at })))
      }
      if (kbRes.ok) {
        const kb = await kbRes.json()
        dynamicUrls.push(...kb.map((k) => ({ loc: `/knowledge-base/${k.slug}`, priority: '0.5', lastmod: k.created_at })))
      }
    }
  } catch (err) {
    console.error('sitemap dynamic fetch failed', err)
  }

  const all = [...staticUrls, ...dynamicUrls]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((u) => `  <url><loc>${base}${u.loc}</loc>${u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : ''}<priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.status(200).send(xml)
}
