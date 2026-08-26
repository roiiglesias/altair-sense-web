import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, PulseDot, Divider } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import { ArrowRight, Radar, LineChart, Store, Boxes } from 'lucide-react'

export default function Home() {
  const { pick, t } = useLang()

  const solutions = [
    {
      icon: Radar,
      title: pick('Digital Signage', 'Digital Signage'),
      body: pick(
        'Cartelería digital y CMS de gestión de contenidos para toda tu red de pantallas, en tiempo real.',
        'Digital signage and a content management system for your entire screen network, in real time.'
      )
    },
    {
      icon: LineChart,
      title: pick('Retail Media & Analytics', 'Retail Media & Analytics'),
      body: pick(
        'De la visita al ticket: campañas y paneles que conectan tráfico con venta real.',
        'From visit to ticket: campaigns and dashboards that connect footfall with real sales.'
      )
    },
    {
      icon: Store,
      title: pick('Inventario y stock', 'Inventory & stock'),
      body: pick(
        'Control de inventario en tiempo real por tienda, para que el staff nunca trabaje a ciegas.',
        'Real-time per-store inventory control, so staff never work blind.'
      )
    },
    {
      icon: Boxes,
      title: pick('Mantenimiento predictivo', 'Predictive maintenance'),
      body: pick(
        'Correctivo, preventivo y predictivo: una pantalla apagada nunca es motivo de venta perdida.',
        'Corrective, preventive and predictive: a screen going dark is never the reason a sale is lost.'
      )
    }
  ]

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

      {/* SOLUCIONES PREVIEW */}
      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-14">
            <Eyebrow tone="moss">{pick('Qué hacemos', 'What we do')}</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-as-black mt-3">
              {pick('Cuatro piezas, un mismo objetivo', 'Four pieces, one goal')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white border border-as-stone rounded-2xl p-8 hover:border-as-moss transition-colors">
                <s.icon size={28} className="text-as-moss mb-5" strokeWidth={1.75} />
                <h3 className="font-display font-extrabold text-xl text-as-black mb-2">{s.title}</h3>
                <p className="text-as-black/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/soluciones" className="inline-flex items-center gap-2 text-as-moss font-bold hover:text-as-black transition">
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
