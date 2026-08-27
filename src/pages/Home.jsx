import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, PulseDot, Divider } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import ConnectionDiagram from '../components/ConnectionDiagram.jsx'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const { pick, t } = useLang()

  const stats = [
    { n: '+40', l: pick('clientes retail activos', 'active retail clients') },
    { n: '24/7', l: pick('monitorización en tiempo real', 'real-time monitoring') },
    { n: '<48h', l: pick('instalación estándar', 'standard install time') }
  ]

  return (
    <div>
      <Seo
        title={pick(
          'Digital Signage, Retail Media y Retail Tech para tiendas físicas',
          'Digital Signage, Retail Media and Retail Tech for physical stores'
        )}
        description={pick(
          'Cartelería digital, CMS de gestión de contenidos, control de inventario y mantenimiento predictivo, preventivo y correctivo en una sola plataforma. Resultados en ventas y experiencia de cliente, en cualquier geografía.',
          'Digital signage, content management system, inventory control and predictive, preventive and corrective maintenance in one platform. Sales and customer experience results, in any geography.'
        )}
        path="/"
      />
      {/* HERO */}
      <section className="relative bg-as-black text-as-cream overflow-hidden">
        <HeroSlideshow />
        <div className="absolute -right-24 top-1/4 w-[420px] h-[420px] rounded-full bg-as-lime/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 relative">
          <div className="flex items-center gap-3 mb-6">
            <PulseDot />
            <Eyebrow>{pick('Soluciones de retail', 'Retail solutions')}</Eyebrow>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            {pick('Nos comprometemos con tu ', 'We are committed to your ')}
            <span className="text-as-lime">{pick('resultado de venta', 'sales result')}</span>.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-as-cream/70 max-w-2xl leading-relaxed">
            {pick(
              'Digital signage, retail media y retail tech en una sola plataforma: contenidos, inventario y mantenimiento conectados para que cada tienda venda más y comunique mejor, en cualquier país.',
              'Digital signage, retail media and retail tech in one platform: content, inventory and maintenance connected so every store sells more and communicates better, in any country.'
            )}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/soluciones"
              className="group inline-flex items-center gap-2 bg-as-lime text-as-black font-bold px-7 py-3.5 rounded-full hover:brightness-95 transition"
            >
              {t.cta_solutions}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border border-as-cream/25 text-as-cream font-semibold px-7 py-3.5 rounded-full hover:border-as-lime hover:text-as-lime transition"
            >
              {t.cta_contact}
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-display font-extrabold text-2xl md:text-4xl text-as-lime">{s.n}</p>
                <p className="text-xs md:text-sm text-as-cream/55 mt-1 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIONES PREVIEW — infografía de conexión */}
      <section className="bg-as-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-4">
            <Eyebrow>{pick('Qué hacemos', 'What we do')}</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-as-cream mt-3">
              {pick('Tecnología conectada, un mismo resultado', 'Connected technology, one outcome')}
            </h2>
            <p className="mt-4 text-as-cream/60 leading-relaxed">
              {pick(
                'Cada capacidad funciona sola, pero el resultado aparece cuando están conectadas en una sola plataforma.',
                'Each capability works on its own, but the result shows up when they run connected in one platform.'
              )}
            </p>
          </div>
          <ConnectionDiagram pick={pick} />
          <div className="mt-6">
            <Link to="/soluciones" className="inline-flex items-center gap-2 text-as-lime font-bold hover:text-white transition">
              {t.cta_solutions} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTORES TEASER */}
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>{pick('Sectores', 'Sectors')}</Eyebrow>
            <Divider className="my-5" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
              {pick('Pensado para retail físico, en cualquier vertical', 'Built for physical retail, across verticals')}
            </h2>
            <p className="mt-6 text-as-cream/65 leading-relaxed">
              {pick(
                'Moda, óptica, alimentación, concept stores… si tienes escaparate, tienes datos que hoy se pierden.',
                'Fashion, optics, food, concept stores… if you have a shopfront, you have data that is being lost today.'
              )}
            </p>
            <Link
              to="/sectores"
              className="mt-8 inline-flex items-center gap-2 text-as-lime font-bold hover:text-white transition"
            >
              {pick('Ver sectores', 'See sectors')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-as-cream">
              {pick(
                '“Antes intuíamos por qué bajaba una venta. Ahora lo sabemos el mismo día.”',
                '“Before, we guessed why sales dropped. Now we know the same day.”'
              )}
            </p>
            <p className="mt-6 text-sm text-as-cream/50">
              {pick('Director de retail, cadena de óptica', 'Retail director, optics chain')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
