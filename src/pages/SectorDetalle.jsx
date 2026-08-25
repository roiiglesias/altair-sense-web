import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { getSectors } from '../data/sectors.js'
import { ArrowLeft, ArrowRight, Check, Monitor, Smartphone, RefreshCw } from 'lucide-react'
import NotFound from './NotFound.jsx'

const commonFeatures = (pick) => [
  { icon: Monitor, title: pick('Pantallas profesionales', 'Professional screens'), body: pick('Alto brillo y diseño pensado para escaparate e interior.', 'High brightness, designed for shopfront and interior use.') },
  { icon: Smartphone, title: pick('Gestión desde tu móvil', 'Manage from your phone'), body: pick('Actualiza contenidos y promociones desde cualquier lugar.', 'Update content and promotions from anywhere.') },
  { icon: RefreshCw, title: pick('Actualización instantánea', 'Instant updates'), body: pick('Cambia precios, imágenes o mensajes al momento.', 'Change prices, images or messages instantly.') }
]

export default function SectorDetalle({ slug }) {
  const { pick, t } = useLang()
  const sectors = getSectors(pick)
  const sector = sectors.find((s) => s.slug === slug)
  const features = commonFeatures(pick)

  if (!sector) return <NotFound />

  return (
    <div>
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link to="/sectores" className="inline-flex items-center gap-2 text-as-lime/80 font-bold text-sm mb-8 hover:text-as-lime transition">
            <ArrowLeft size={16} /> {t.nav.sectors}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <sector.icon size={28} className="text-as-lime" strokeWidth={1.75} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-as-lime">{sector.title}</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl max-w-3xl leading-tight">
            {sector.tagline}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {sector.hero}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-xs font-bold tracking-[0.22em] uppercase text-as-moss mb-6">
            {pick('Campañas que impulsan tu negocio', 'Campaigns that drive your business')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {sector.campaigns.map((c, i) => (
              <span key={i} className="bg-white border border-as-stone rounded-full px-4 py-2 text-sm text-as-black/75 font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-cream pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-xs font-bold tracking-[0.22em] uppercase text-as-moss mb-6">
            {pick('Beneficios para tu negocio', 'Benefits for your business')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sector.benefits.map((b, i) => (
              <div key={i} className="bg-white border border-as-stone rounded-2xl p-8">
                <Check size={20} className="text-as-moss mb-4" />
                <h3 className="font-display font-extrabold text-lg text-as-black mb-2">{b.title}</h3>
                <p className="text-as-black/60 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-y border-as-stone">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-xs font-bold tracking-[0.22em] uppercase text-as-moss mb-10">
            {pick('Todo lo que necesitas, en una solución integral', 'Everything you need, in one integrated solution')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i}>
                <f.icon size={24} className="text-as-moss mb-4" strokeWidth={1.75} />
                <h3 className="font-display font-extrabold text-base text-as-black mb-1.5">{f.title}</h3>
                <p className="text-as-black/60 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-moss text-as-cream py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl max-w-xl">
            {pick(`Empieza hoy a diseñar la solución para tu ${sector.title.toLowerCase()}.`, `Start designing the solution for your ${sector.title.toLowerCase()} today.`)}
          </h2>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-as-black text-as-lime font-bold px-7 py-3.5 rounded-full hover:brightness-110 transition shrink-0"
          >
            {t.cta_contact} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
