import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { pick, t } = useLang()
  return (
    <div className="bg-as-cream min-h-[60vh] flex flex-col items-center justify-center text-center px-5 py-28">
      <p className="font-display font-extrabold text-as-lime text-7xl mb-4" style={{ WebkitTextStroke: '1px #10150F' }}>404</p>
      <h1 className="font-display font-extrabold text-2xl text-as-black mb-3">
        {pick('Esta página no existe', "This page doesn't exist")}
      </h1>
      <Link to="/" className="text-as-moss font-bold">{t.nav.home}</Link>
    </div>
  )
}
