import { useState, useEffect } from 'react'
import { RouterProvider, useRouter, BASE } from './lib/router.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

import Home from './pages/Home.jsx'
import Soluciones from './pages/Soluciones.jsx'
import Sectores from './pages/Sectores.jsx'
import SectorDetalle from './pages/SectorDetalle.jsx'
import AcercaDe from './pages/AcercaDe.jsx'
import Contacto from './pages/Contacto.jsx'
import Noticias from './pages/Noticias.jsx'
import NoticiaDetalle from './pages/NoticiaDetalle.jsx'
import KnowledgeBase from './pages/KnowledgeBase.jsx'
import KBArticulo from './pages/KBArticulo.jsx'
import Partners from './pages/Partners.jsx'
import NotFound from './pages/NotFound.jsx'

function resolve(path) {
  const clean = path.replace(/\/+$/, '') || '/'

  if (clean === '/') return { Page: Home }
  if (clean === '/soluciones') return { Page: Soluciones }
  if (clean === '/sectores') return { Page: Sectores }
  if (clean === '/nosotros') return { Page: AcercaDe }
  if (clean === '/contacto') return { Page: Contacto }
  if (clean === '/noticias') return { Page: Noticias }
  if (clean === '/knowledge-base') return { Page: KnowledgeBase }
  if (clean === '/partners') return { Page: Partners }

  const newsMatch = clean.match(/^\/noticias\/([^/]+)$/)
  if (newsMatch) return { Page: NoticiaDetalle, props: { slug: newsMatch[1] } }

  const kbMatch = clean.match(/^\/knowledge-base\/([^/]+)$/)
  if (kbMatch) return { Page: KBArticulo, props: { slug: kbMatch[1] } }

  const sectorMatch = clean.match(/^\/sectores\/([^/]+)$/)
  if (sectorMatch) return { Page: SectorDetalle, props: { slug: sectorMatch[1] } }

  return { Page: NotFound }
}

function Shell() {
  const { path } = useRouter()
  const { Page, props } = resolve(path)

  return (
    <div className="min-h-screen flex flex-col bg-as-cream">
      <Header />
      <main className="flex-1">
        <Page {...(props || {})} />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [realPath, setRealPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setRealPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const inHiddenSite = realPath === BASE || realPath.startsWith(`${BASE}/`)

  return (
    <LanguageProvider>
      {inHiddenSite ? (
        <RouterProvider>
          <Shell />
        </RouterProvider>
      ) : (
        <ComingSoon />
      )}
    </LanguageProvider>
  )
}
