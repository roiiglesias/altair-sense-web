import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import { Shirt, Glasses, UtensilsCrossed, Smartphone, Sparkles, ArrowRight } from 'lucide-react'

export default function Sectores() {
  const { pick, t } = useLang()

  const sectors = [
    {
      icon: Shirt,
      title: pick('Moda y complementos', 'Fashion & accessories'),
      body: pick(
        'Mide qué escaparate atrae más entradas y qué colección convierte mejor por tienda.',
        'Measure which shopfront drives more visits and which collection converts best per store.'
      )
    },
    {
      icon: Glasses,
      title: pick('Óptica y salud visual', 'Optics & eye health'),
      body: pick(
        'Relaciona campañas de captación con citas y ventas reales en centro.',
        'Connect acquisition campaigns with real in-store appointments and sales.'
      )
    },
    {
      icon: UtensilsCrossed,
      title: pick('Alimentación y conveniencia', 'Food & convenience'),
      body: pick(
        'Detecta horas punta reales para ajustar personal y reposición.',
        'Detect real peak hours to adjust staffing and restocking.'
      )
    },
    {
      icon: Smartphone,
      title: pick('Electrónica y telecomunicaciones', 'Electronics & telecom'),
      body: pick(
        'Escaparate conectado que promociona stock disponible en tiempo real.',
        'Connected shopfront promoting real-time available stock.'
      )
    },
    {
      icon: Sparkles,
      title: pick('Concept stores y flagship', 'Concept stores & flagship'),
      body: pick(
        'Experiencias de escaparate que se adaptan a eventos y lanzamientos.',
        'Shopfront experiences that adapt to events and launches.'
      )
    }
  ]

  return (
    <div>
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.sectors}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Si tienes escaparate, tenemos encaje', 'If you have a shopfront, we fit')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Cada vertical mide el éxito de forma distinta. Adaptamos sensores y paneles al indicador que de verdad te importa.',
              'Every vertical measures success differently. We adapt sensors and dashboards to the metric that actually matters to you.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="bg-white border border-as-stone rounded-2xl p-8 flex flex-col">
              <s.icon size={26} className="text-as-moss mb-5" strokeWidth={1.75} />
              <h3 className="font-display font-extrabold text-xl text-as-black mb-2">{s.title}</h3>
              <p className="text-as-black/60 leading-relaxed text-sm">{s.body}</p>
            </div>
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
