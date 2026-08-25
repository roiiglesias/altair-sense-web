import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Link, useRouter } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import Logo from './Logo.jsx'

const links = [
  { to: '/soluciones', key: 'solutions' },
  { to: '/sectores', key: 'sectors' },
  { to: '/noticias', key: 'news' },
  { to: '/knowledge-base', key: 'kb' },
  { to: '/partners', key: 'partners' },
  { to: '/nosotros', key: 'about' }
]

export default function Header() {
  const { path } = useRouter()
  const { t, toggleLang, lang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [path])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-as-black/95 backdrop-blur border-b border-white/5' : 'bg-as-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        <Link to="/" className="shrink-0">
          <Logo variant="onDark" size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                path === l.to ? 'text-as-lime' : 'text-as-cream/80 hover:text-as-cream'
              }`}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-as-cream/70 hover:text-as-lime transition-colors"
            aria-label="Cambiar idioma / Switch language"
          >
            <Globe size={14} />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/contacto"
            className="bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-95 transition"
          >
            {t.cta_contact}
          </Link>
        </div>

        <button
          className="lg:hidden text-as-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-as-black border-t border-white/10 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`py-3 text-base font-medium border-b border-white/5 ${
                  path === l.to ? 'text-as-lime' : 'text-as-cream/85'
                }`}
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-bold text-as-cream/70"
            >
              <Globe size={16} />
              {lang === 'es' ? 'English' : 'Español'}
            </button>
            <Link
              to="/contacto"
              className="bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full"
            >
              {t.cta_contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
