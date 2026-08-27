import { useLang } from '../i18n/LanguageContext.jsx'
import Logo from '../components/Logo.jsx'
import { Mail, ExternalLink } from 'lucide-react'

const LUMEN_URL = 'https://lumen-erp-three.vercel.app'

export default function ComingSoon() {
  const { pick, toggleLang, lang } = useLang()

  return (
    <div className="min-h-screen bg-as-black text-as-cream flex flex-col items-center justify-center px-6 text-center">
      <Logo variant="onDark" size="lg" className="mb-10" />

      <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl max-w-xl leading-snug">
        {pick('Nos comprometemos con tu resultado de venta.', 'We are committed to your sales result.')}
      </h1>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="mailto:info@altairsense.com"
          className="flex items-center gap-2 text-as-cream/80 hover:text-as-lime transition text-sm font-medium"
        >
          <Mail size={16} /> info@altairsense.com
        </a>
        <span className="hidden sm:inline text-as-cream/20">·</span>
        <a
          href={LUMEN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-as-lime text-as-black text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-95 transition"
        >
          {pick('Portal Lumen', 'Lumen Portal')} <ExternalLink size={14} />
        </a>
      </div>

      <button
        onClick={toggleLang}
        className="mt-14 text-xs font-bold tracking-wide text-as-cream/40 hover:text-as-cream/70 transition"
      >
        {lang === 'es' ? 'English' : 'Español'}
      </button>
    </div>
  )
}
