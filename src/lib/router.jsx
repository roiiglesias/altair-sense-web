import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const RouterCtx = createContext(null)

// La web se sirve en la raíz. El español es el idioma principal (sin prefijo);
// el inglés vive bajo /en/... con sus propias URLs (y hreflang) para SEO.
export const BASE = ''

// Las URLs antiguas /hide/... redirigen a la raíz.
const LEGACY = '/hide'

// Primer segmento de la ruta lógica (español) -> slug en inglés
export const EN_SLUGS = {
  soluciones: 'solutions',
  sectores: 'sectors',
  servicios: 'services',
  nosotros: 'about',
  contacto: 'contact',
  noticias: 'news'
}
const ES_FROM_EN = Object.fromEntries(Object.entries(EN_SLUGS).map(([es, en]) => [en, es]))

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
  if (p.startsWith('/en/')) return { lang: 'en', logical: mapFirstSegment(p.slice(3), ES_FROM_EN) }
  return { lang: 'es', logical: p }
}

// ruta lógica + idioma -> URL real
export function buildUrl(logical, lang) {
  if (lang !== 'en') return logical
  return logical === '/' ? '/en' : '/en' + mapFirstSegment(logical, EN_SLUGS)
}

export function RouterProvider({ children }) {
  const [state, setState] = useState(() => {
    const { lang, logical } = parseUrl(window.location.pathname)
    const real = buildUrl(logical, lang)
    if (real !== window.location.pathname) {
      window.history.replaceState({}, '', real + window.location.search + window.location.hash)
    }
    return { path: logical, lang }
  })

  useEffect(() => {
    const onPop = () => {
      const { lang, logical } = parseUrl(window.location.pathname)
      setState({ path: logical, lang })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to, langOverride) => {
    const [toPath, toHash] = to.split('#')
    const lang = langOverride || state.lang
    const realTarget = buildUrl(toPath, lang)
    const samePath = realTarget === window.location.pathname

    if (!samePath) {
      window.history.pushState({}, '', realTarget + (toHash ? `#${toHash}` : ''))
      setState({ path: toPath, lang })
      if (!toHash) {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      }
    } else if (toHash) {
      window.history.pushState({}, '', realTarget + `#${toHash}`)
    }

    if (toHash) {
      setTimeout(() => {
        const el = document.getElementById(toHash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, samePath ? 0 : 120)
    }
  }, [state.lang])

  // Cambiar de idioma = ir a la misma página en el otro idioma (URL distinta)
  const setLang = useCallback((l) => {
    const hash = window.location.hash ? window.location.hash.slice(1) : ''
    navigate(state.path + (hash ? `#${hash}` : ''), l)
  }, [navigate, state.path])

  return (
    <RouterCtx.Provider value={{ path: state.path, lang: state.lang, navigate, setLang }}>
      {children}
    </RouterCtx.Provider>
  )
}

export function useRouter() {
  return useContext(RouterCtx)
}

export function Link({ to, className, children, onClick }) {
  const { navigate, lang } = useRouter()
  const [toPath, toHash] = to.split('#')
  return (
    <a
      href={buildUrl(toPath, lang) + (toHash ? `#${toHash}` : '')}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
