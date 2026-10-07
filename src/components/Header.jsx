import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, ChevronDown, ExternalLink, Wrench } from 'lucide-react'
import { Link, useRouter } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { getSectors } from '../data/sectors.js'
import { solutionSections } from '../data/solutions.js'
import Logo from './Logo.jsx'
import { LUMEN_URL, openQuickContact } from '../lib/links.js'

const simpleLinks = [
  { to: '/noticias', key: 'news' },
  { to: '/knowledge-base', key: 'kb' },
  { to: '/partners', key: 'partners' },
  { to: '/lumen', key: 'lumen' },
  { to: '/nosotros', key: 'about' }
]

export default function Header() {
  const { path } = useRouter()
  const { t, pick, toggleLang, lang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  const sectors = getSectors(pick)
  const solutions = solutionSections(pick)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setMobileSection(null) }, [path])

  const solutionsActive = path === '/soluciones'
  const sectorsActive = path === '/sectores' || path.startsWith('/sectores/')

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

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavDropdown label={t.nav.solutions} active={solutionsActive} viewAllTo="/soluciones" viewAllLabel={pick('Ver todas las soluciones', 'View all solutions')}>
            {solutions.map((s) => (
              <DropdownItem key={s.id} to={`/soluciones#${s.id}`} icon={s.icon} title={s.navLabel} />
            ))}
            <DropdownItem to="/servicios" icon={Wrench} title={pick('Líneas y niveles de servicio', 'Service lines and levels')} />
          </NavDropdown>

          <NavDropdown label={t.nav.sectors} active={sectorsActive} viewAllTo="/sectores" viewAllLabel={pick('Ver todos los sectores', 'View all sectors')}>
            {sectors.map((s) => (
              <DropdownItem key={s.slug} to={`/sectores/${s.slug}`} icon={s.icon} title={s.title} />
            ))}
          </NavDropdown>

          {simpleLinks.map((l) => (
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
          <a
            href={LUMEN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 border border-as-lime/60 text-as-lime text-sm font-bold px-4 py-2 rounded-full hover:bg-as-lime hover:text-as-black transition"
          >
            {pick('Acceso Lumen', 'Lumen access')} <ExternalLink size={13} />
          </a>
          <button
            onClick={openQuickContact}
            className="bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-95 transition"
          >
            {t.cta_contact}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a
            href={LUMEN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 border border-as-lime/60 text-as-lime text-xs font-bold px-3 py-1.5 rounded-full"
          >
            Lumen <ExternalLink size={12} />
          </a>
        <button
          className="text-as-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-as-black border-t border-white/10 px-5 pb-6 pt-2 max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col">
            <MobileAccordion
              label={t.nav.solutions}
              openState={mobileSection === 'solutions'}
              onToggle={() => setMobileSection((s) => (s === 'solutions' ? null : 'solutions'))}
              viewAllTo="/soluciones"
              viewAllLabel={pick('Ver todas', 'View all')}
            >
              {solutions.map((s) => (
                <Link key={s.id} to={`/soluciones#${s.id}`} className="block py-2 text-sm text-as-cream/75">
                  {s.navLabel}
                </Link>
              ))}
              <Link to="/servicios" className="block py-2 text-sm text-as-cream/75">{pick('Líneas y niveles de servicio', 'Service lines and levels')}</Link>
            </MobileAccordion>

            <MobileAccordion
              label={t.nav.sectors}
              openState={mobileSection === 'sectors'}
              onToggle={() => setMobileSection((s) => (s === 'sectors' ? null : 'sectors'))}
              viewAllTo="/sectores"
              viewAllLabel={pick('Ver todos', 'View all')}
            >
              {sectors.map((s) => (
                <Link key={s.slug} to={`/sectores/${s.slug}`} className="block py-2 text-sm text-as-cream/75">
                  {s.title}
                </Link>
              ))}
            </MobileAccordion>

            {simpleLinks.map((l) => (
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
            <button
              onClick={() => { setOpen(false); openQuickContact() }}
              className="bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full"
            >
              {t.cta_contact}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavDropdown({ label, active, children, viewAllTo, viewAllLabel }) {
  const [hover, setHover] = useState(false)
  const timer = useRef(null)

  const onEnter = () => { clearTimeout(timer.current); setHover(true) }
  const onLeave = () => { timer.current = setTimeout(() => setHover(false), 120) }

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          active ? 'text-as-lime' : 'text-as-cream/80 hover:text-as-cream'
        }`}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${hover ? 'rotate-180' : ''}`} />
      </button>

      {hover && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
          <div className="bg-as-black border border-white/10 rounded-2xl shadow-2xl p-2">
            {children}
            <Link
              to={viewAllTo}
              className="flex items-center justify-center gap-1.5 mt-1 text-xs font-bold text-as-lime px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              {viewAllLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function DropdownItem({ to, icon: Icon, title }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition group"
    >
      {Icon && <Icon size={17} className="text-as-lime/80 shrink-0" strokeWidth={1.75} />}
      <span className="text-sm text-as-cream/85 group-hover:text-as-cream">{title}</span>
    </Link>
  )
}

function MobileAccordion({ label, openState, onToggle, children, viewAllTo, viewAllLabel }) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-base font-medium text-as-cream/85"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${openState ? 'rotate-180' : ''}`} />
      </button>
      {openState && (
        <div className="pb-3 pl-3 border-l border-white/10 ml-1 mb-2">
          {children}
          <Link to={viewAllTo} className="block py-2 text-sm font-bold text-as-lime">
            {viewAllLabel}
          </Link>
        </div>
      )}
    </div>
  )
}
