import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import Logo from './Logo.jsx'
import { Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react'
import { LUMEN_URL, openQuickContact } from '../lib/links.js'

export default function Footer() {
  const { t, pick } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-as-black text-as-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Logo variant="onDark" size="sm" />
            <p className="mt-4 text-sm text-as-cream/60 leading-relaxed max-w-[24ch]">
              {pick(
                'Nos comprometemos con tu resultado de venta.',
                'Committed to your sales result.'
              )}
            </p>
          </div>

          <FooterCol title={t.nav.solutions} items={[
            { to: '/soluciones', label: pick('Digital Signage', 'Digital Signage') },
            { to: '/soluciones', label: pick('Retail Analytics', 'Retail Analytics') },
            { to: '/soluciones', label: pick('Retail Tech', 'Retail Tech') },
            { to: '/servicios', label: pick('Servicios técnicos', 'Technical services') }
          ]} />

          <FooterCol title={pick('Compañía', 'Company')} items={[
            { to: '/nosotros', label: t.nav.about },
            { to: '/sectores', label: t.nav.sectors },
            { to: '/partners', label: t.nav.partners },
            { to: '/lumen', label: 'Lumen' },
            { to: '/noticias', label: t.nav.news },
            { to: '/knowledge-base', label: t.nav.kb }
          ]} />

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-as-lime uppercase mb-4">
              {t.nav.contact}
            </h4>
            <a href="mailto:info@altairsense.com" className="flex items-center gap-2 text-sm text-as-cream/75 hover:text-as-lime transition mb-3">
              <Mail size={16} /> info@altairsense.com
            </a>
            <p className="flex items-start gap-2 text-sm text-as-cream/75 mb-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Calle Los Prados 166, Edificio Impulsa, Gijón</span>
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-as-cream/75 hover:text-as-lime transition">
              <Linkedin size={16} /> LinkedIn
            </a>
            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={openQuickContact}
                className="bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-95 transition"
              >
                {t.cta_contact}
              </button>
              <a
                href={LUMEN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 border border-as-lime/60 text-as-lime text-sm font-bold px-4 py-2.5 rounded-full hover:bg-as-lime hover:text-as-black transition"
              >
                {pick('Acceso Lumen', 'Lumen access')} <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-center text-xs text-as-cream/45">
          <p>© {year} Altair Sense · {t.footer_rights}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-[0.2em] text-as-lime uppercase mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i}>
            <Link to={it.to} className="text-sm text-as-cream/75 hover:text-as-lime transition">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
