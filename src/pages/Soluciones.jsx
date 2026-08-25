import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import { Radar, LineChart, Store, Boxes, Check, ArrowRight } from 'lucide-react'

export default function Soluciones() {
  const { pick, t } = useLang()

  const items = [
    {
      icon: Radar,
      title: pick('Sensores de escaparate', 'Shopfront sensors'),
      body: pick(
        'Contadores de tráfico peatonal y de entrada, detección de tiempo de permanencia y zonas calientes del escaparate.',
        'Pedestrian and entry traffic counters, dwell-time detection and shopfront hot-zone mapping.'
      ),
      points: [
        pick('Instalación no invasiva', 'Non-invasive install'),
        pick('Sin cámaras que identifiquen personas', 'No people-identifying cameras'),
        pick('Datos en tiempo real', 'Real-time data')
      ]
    },
    {
      icon: LineChart,
      title: pick('Analítica de resultado', 'Outcome analytics'),
      body: pick(
        'Paneles que cruzan tráfico, conversión y ticket medio por tienda, franja horaria y campaña.',
        'Dashboards that cross footfall, conversion and average ticket by store, time slot and campaign.'
      ),
      points: [
        pick('Comparativa entre tiendas', 'Store-to-store comparison'),
        pick('Alertas de desviación', 'Deviation alerts'),
        pick('Exportación e informes automáticos', 'Automatic exports & reports')
      ]
    },
    {
      icon: Store,
      title: pick('Escaparate conectado', 'Connected shopfront'),
      body: pick(
        'Señalización digital que cambia de contenido según el tráfico detectado, la hora o el stock disponible.',
        'Digital signage that changes content based on detected traffic, time of day or available stock.'
      ),
      points: [
        pick('Gestión de contenidos remota', 'Remote content management'),
        pick('Programación por reglas', 'Rule-based scheduling'),
        pick('Integración con CMS de cliente', 'Integrates with client CMS')
      ]
    },
    {
      icon: Boxes,
      title: pick('Integración con Lumen', 'Lumen integration'),
      body: pick(
        'Los avisos de mantenimiento, el inventario de equipos y las órdenes de trabajo de campo, en el mismo sistema que ya usas.',
        'Maintenance alerts, equipment inventory and field work orders, in the same system you already use.'
      ),
      points: [
        pick('Ticketing automático por incidencia de hardware', 'Auto-ticketing on hardware incidents'),
        pick('Mapa de equipos geolocalizado', 'Geolocated equipment map'),
        pick('Un solo panel de operación', 'Single operations panel')
      ]
    }
  ]

  return (
    <div>
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.solutions}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Del escaparate al dato accionable', 'From the shopfront to actionable data')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Cuatro capacidades que se despliegan juntas o por separado, según el punto en el que esté tu operación.',
              'Four capabilities that deploy together or separately, depending on where your operation stands today.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[auto_1fr] gap-8 bg-white border border-as-stone rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-as-black flex items-center justify-center shrink-0">
                <it.icon size={26} className="text-as-lime" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-as-black">{it.title}</h2>
                <p className="mt-3 text-as-black/65 leading-relaxed max-w-2xl">{it.body}</p>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {it.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-as-black/70">
                      <Check size={15} className="text-as-moss shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-as-moss text-as-cream py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl max-w-xl">
            {pick('¿Empezamos por un piloto en una tienda?', 'Shall we start with a one-store pilot?')}
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
