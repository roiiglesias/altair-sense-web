import { Link } from '../lib/router.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, PulseDot, Divider } from '../components/Bits.jsx'
import { ArrowRight, Radar, LineChart, Store, Boxes } from 'lucide-react'

export default function Home() {
  const { pick, t } = useLang()

  const solutions = [
    {
      icon: Radar,
      title: pick('Sensores de escaparate', 'Shopfront sensors'),
      body: pick(
        'Detección de tráfico e interacción en punto de venta, en tiempo real.',
        'Real-time footfall and interaction detection at the point of sale.'
      )
    },
    {
      icon: LineChart,
      title: pick('Analítica de resultado', 'Outcome analytics'),
      body: pick(
        'De la visita al ticket: paneles que conectan tráfico con venta real.',
        'From visit to ticket: dashboards that connect footfall with real sales.'
      )
    },
    {
      icon: Store,
      title: pick('Escaparate conectado', 'Connected shopfront'),
      body: pick(
        'Contenido y señalización digital que reacciona a lo que pasa en la calle.',
        'Content and digital signage that reacts to what happens on the street.'
      )
    },
    {
      icon: Boxes,
      title: pick('Integración con Lumen', 'Lumen integration'),
      body: pick(
        'Inventario, incidencias y field service conectados de punta a punta.',
        'Inventory, tickets and field service connected end to end.'
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
              'Altair Sense conecta el escaparate, el sensor y el dato: sabrás qué pasa en tu tienda antes de que termine el día.',
              'Altair Sense connects the shopfront, the sensor and the data: know what happens in your store before the day is over.'
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
