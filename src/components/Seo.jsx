import { useEffect } from 'react'
import { useRouter, buildUrl } from '../lib/router.jsx'

const SITE_NAME = 'Altair Sense'
const SITE_URL = 'https://www.altairsense.com'
const DEFAULT_IMAGE = `${SITE_URL}/brand/altair-sense-avatar.png`

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, extra = {}) {
  let el = document.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Componente de SEO por página. No renderiza nada visualmente: escribe en
 * <head> vía efecto. Cubre lo que sí es compatible con una SPA (Google,
 * previews sociales que sí ejecutan JS, GEO parcial). Ver README para el
 * límite conocido: crawlers que no ejecutan JS no verán estas etiquetas.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd = null,
  noindex = false
}) {
  const { lang } = useRouter()
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — ${lang === 'en' ? 'Digital Signage, Retail Media and Retail Tech' : 'Digital Signage, Retail Media y Retail Tech'}`
    const realPath = buildUrl(path, lang)
    const esUrl = `${SITE_URL}${buildUrl(path, 'es')}`
    const enUrl = `${SITE_URL}${buildUrl(path, 'en')}`
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', `${SITE_URL}${realPath}`)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:site_name', SITE_NAME)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    setLink('canonical', `${SITE_URL}${realPath}`)
    setMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'es_ES')
    setLink('alternate', esUrl, { hreflang: 'es' })
    setLink('alternate', enUrl, { hreflang: 'en' })
    setLink('alternate', esUrl, { hreflang: 'x-default' })

    // Limpia JSON-LD anterior de esta página antes de escribir el nuevo
    document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      items.forEach((item) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', 'true')
        script.textContent = JSON.stringify(item)
        document.head.appendChild(script)
      })
    }
  }, [title, description, path, image, type, jsonLd, noindex, lang])

  return null
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE }
