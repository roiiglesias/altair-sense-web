// Sitemap dinámico. Vercel lo sirve en /api/sitemap — lo mapeamos a
// /sitemap-dynamic.xml vía vercel.json para que incluya noticias y artículos
// de Knowledge Base publicados en Supabase, además de las páginas estáticas.

export default async function handler(req, res) {
  const base = 'https://www.altairsense.com'

  // La web completa vive temporalmente en /hide, sin publicar todavía.
  // Mientras tanto el sitemap solo expone la home provisional. Cuando se
  // publique de verdad, restaura aquí la lista completa de staticUrls +
  // dynamicUrls que había antes (ver historial del proyecto).
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><priority>1.0</priority></url>
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.status(200).send(xml)
}

