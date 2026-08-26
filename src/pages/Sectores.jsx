import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import { getSectors } from '../data/sectors.js'
import Seo from '../components/Seo.jsx'
import { ArrowRight } from 'lucide-react'

export default function Sectores() {
  const { pick, t } = useLang()
  const sectors = getSectors(pick)

  return (
    <div>
      <Seo
        title={pick('Sectores: retail tech por vertical', 'Sectors: retail tech by vertical')}
        description={pick(
          'Digital signage, retail media y retail analytics adaptados a moda, deportes, supermercados, health, viajes y centros deportivos.',
          'Digital signage, retail media and retail analytics adapted to fashion, sports, supermarkets, health, travel and sports centers.'
        )}
        path="/sectores"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.sectors}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Si tienes escaparate, tenemos encaje', 'If you have a shopfront, we fit')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'En cada sector aplicamos las mismas tres capacidades: digital signage, retail analytics y retail tech, adaptadas a lo que de verdad importa en tu negocio.',
              'In every sector we apply the same three capabilities: digital signage, retail analytics and retail tech, adapted to what actually matters for your business.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              to={`/sectores/${s.slug}`}
              className="bg-white border border-as-stone rounded-2xl p-8 flex flex-col hover:border-as-moss transition-colors group"
            >
              <s.icon size={26} className="text-as-moss mb-5" strokeWidth={1.75} />
              <h3 className="font-display font-extrabold text-xl text-as-black mb-2">{s.title}</h3>
              <p className="text-as-black/60 leading-relaxed text-sm flex-1">{s.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-as-moss font-bold text-sm group-hover:gap-2.5 transition-all">
                {pick('Ver sector', 'View sector')} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
          <div className="bg-as-black text-as-cream rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-xl mb-2">
                {pick('¿Tu sector no está aquí?', "Don't see your sector?")}
              </h3>
              <p className="text-as-cream/60 text-sm leading-relaxed">
                {pick(
                  'Hablemos de tu operación concreta, sin plantillas.',
                  "Let's talk about your specific operation, no templates."
                )}
              </p>
            </div>
            <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 text-as-lime font-bold hover:text-white transition">
              {t.cta_contact} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
