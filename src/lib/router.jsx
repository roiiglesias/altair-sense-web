import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const RouterCtx = createContext(null)

// La web se sirve en la raíz. BASE se mantiene exportado (vacío) por compatibilidad.
export const BASE = ''

// Las URLs antiguas /hide/... redirigen a la raíz.
const LEGACY = '/hide'
function normalize(pathname) {
  if (pathname === LEGACY || pathname === `${LEGACY}/`) return '/'
  if (pathname.startsWith(`${LEGACY}/`)) return pathname.slice(LEGACY.length)
  return pathname
}
const toLogical = normalize
const toReal = (p) => p

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => {
    const logical = toLogical(window.location.pathname)
    if (logical !== window.location.pathname) {
      window.history.replaceState({}, '', logical + window.location.search + window.location.hash)
    }
    return logical
  })

  useEffect(() => {
    const onPop = () => setPath(toLogical(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    const [toPath, toHash] = to.split('#')
    const realTarget = toReal(toPath)
    const samePath = realTarget === window.location.pathname

    if (!samePath) {
      window.history.pushState({}, '', realTarget + (toHash ? `#${toHash}` : ''))
      setPath(toPath)
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
  }, [])

  return (
    <RouterCtx.Provider value={{ path, navigate }}>
      {children}
    </RouterCtx.Provider>
  )
}

export function useRouter() {
  return useContext(RouterCtx)
}

export function Link({ to, className, children, onClick }) {
  const { navigate } = useRouter()
  const [toPath] = to.split('#')
  return (
    <a
      href={toReal(toPath)}
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
