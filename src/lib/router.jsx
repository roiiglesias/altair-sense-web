import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const RouterCtx = createContext(null)

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    const [toPath, toHash] = to.split('#')
    const samePath = toPath === window.location.pathname

    if (!samePath) {
      window.history.pushState({}, '', to)
      setPath(toPath)
      if (!toHash) {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      }
    } else if (toHash) {
      window.history.pushState({}, '', to)
    }

    if (toHash) {
      // deja que la página monte antes de intentar el scroll a la ancla
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
  return (
    <a
      href={to}
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
