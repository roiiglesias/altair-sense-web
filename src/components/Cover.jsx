import { SITE_URL } from './Seo.jsx'

// URL absoluta de una portada (para Open Graph y JSON-LD). Las portadas propias se
// guardan en Supabase como ruta relativa (/knowledge-base/<slug>.jpg).
export function absoluteImage(url) {
  if (!url) return undefined
  return url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

// Imagen de portada con versión WebP cuando existe (portadas propias en /public)
export default function Cover({ src, alt = '', className = '', eager = false }) {
  if (!src) return null
  const local = src.startsWith('/') && /\.jpe?g$/i.test(src)
  const img = (
    <img
      src={src}
      alt={alt}
      width="1600"
      height="900"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
  if (!local) return img
  return (
    <picture className="contents">
      <source srcSet={src.replace(/\.jpe?g$/i, '.webp')} type="image/webp" />
      {img}
    </picture>
  )
}
