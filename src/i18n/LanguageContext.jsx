import { createContext, useContext, useState, useEffect } from 'react'

const common = {
  es: {
    nav: { home: 'Inicio', solutions: 'Soluciones', sectors: 'Sectores', news: 'Noticias', kb: 'Knowledge Base', partners: 'Partners', about: 'Nosotros', contact: 'Contacto' },
    cta_contact: 'Hablemos',
    cta_solutions: 'Ver soluciones',
    footer_rights: 'Todos los derechos reservados.',
    footer_brand_of: 'Una marca de',
    read_more: 'Leer más',
    download: 'Descargar',
    back: 'Volver',
    loading: 'Cargando…',
    empty_news: 'Todavía no hay noticias publicadas.',
    empty_kb: 'Todavía no hay artículos publicados.',
    empty_downloads: 'Todavía no hay descargables disponibles.',
    empty_partners: 'Próximamente. Estamos incorporando a nuestros partners tecnológicos.',
    lang_name: 'ES'
  },
  en: {
    nav: { home: 'Home', solutions: 'Solutions', sectors: 'Sectors', news: 'News', kb: 'Knowledge Base', partners: 'Partners', about: 'About', contact: 'Contact' },
    cta_contact: "Let's talk",
    cta_solutions: 'See solutions',
    footer_rights: 'All rights reserved.',
    footer_brand_of: 'A brand of',
    read_more: 'Read more',
    download: 'Download',
    back: 'Back',
    loading: 'Loading…',
    empty_news: 'No news published yet.',
    empty_kb: 'No articles published yet.',
    empty_downloads: 'No downloads available yet.',
    empty_partners: 'Coming soon. We are onboarding our technology partners.',
    lang_name: 'EN'
  }
}

const LangCtx = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('as_lang')
      if (saved === 'es' || saved === 'en') return saved
      return navigator.language?.startsWith('en') ? 'en' : 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    try { localStorage.setItem('as_lang', lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))
  const t = common[lang]
  const pick = (esVal, enVal) => (lang === 'es' ? esVal : enVal)

  return (
    <LangCtx.Provider value={{ lang, setLang, toggleLang, t, pick }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang() {
  return useContext(LangCtx)
}
