import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import {
  Monitor, Radar, LineChart, Boxes, Wrench, LayoutGrid,
  Check, ArrowRight, Globe2, Users, TrendingUp
} from 'lucide-react'

export default function Soluciones() {
  const { pick, t } = useLang()

  const items = [
    {
      icon: Monitor,
      title: pick('Digital Signage', 'Digital Signage'),
      body: pick(
        'Cartelería digital y pantallas profesionales para escaparate, punto de venta e interior de tienda, gestionadas de forma centralizada.',
        'Digital signage and professional screens for shopfront, point of sale and in-store, managed centrally.'
      ),
      points: [
        pick('Pantallas de escaparate e interior', 'Shopfront and interior screens'),
        pick('Contenido dinámico y programado', 'Dynamic, scheduled content'),
        pick('Alta luminosidad para exterior', 'High brightness for outdoor use')
      ]
    },
    {
      icon: LayoutGrid,
      title: pick('CMS de gestión de contenidos', 'Content management system (CMS)'),
      body: pick(
        'Una plataforma CMS propia para crear, programar y publicar contenido en toda tu red de pantallas desde un único panel.',
        'A proprietary CMS platform to create, schedule and publish content across your entire screen network from a single dashboard.'
      ),
      points: [
        pick('Gestión desde el móvil o el escritorio', 'Manage from mobile or desktop'),
        pick('Plantillas y programación por reglas', 'Templates and rule-based scheduling'),
        pick('Publicación multi-tienda en segundos', 'Multi-store publishing in seconds')
      ]
    },
    {
      icon: Radar,
      title: pick('Retail Media', 'Retail Media'),
      body: pick(
        'Convierte tu red de pantallas en un canal de comunicación propio: campañas, promociones y contenido de marca adaptado a cada contexto.',
        'Turn your screen network into your own media channel: campaigns, promotions and brand content adapted to each context.'
      ),
      points: [
        pick('Contenido adaptado por geografía y perfil de público', 'Content adapted by geography and audience profile'),
        pick('Programación por franja horaria y contexto', 'Scheduling by time slot and context'),
        pick('Medición de impacto e impresiones', 'Impact and impression measurement')
      ]
    },
    {
      icon: LineChart,
      title: pick('Retail Analytics', 'Retail Analytics'),
      body: pick(
        'Paneles que cruzan tráfico, conversión y ticket medio por tienda, franja horaria y campaña, para decidir con datos, no con intuición.',
        'Dashboards that cross footfall, conversion and average ticket by store, time slot and campaign, so you decide with data, not gut feeling.'
      ),
      points: [
        pick('Comparativa entre tiendas y mercados', 'Store and market comparison'),
        pick('Alertas de desviación', 'Deviation alerts'),
        pick('Informes automáticos', 'Automatic reports')
      ]
    },
    {
      icon: Boxes,
      title: pick('Control de inventario y stock', 'Inventory and stock control'),
      body: pick(
        'Inventario de equipos y mercancía en tiempo real, con trazabilidad por tienda, para que el staff nunca trabaje a ciegas.',
        'Real-time equipment and merchandise inventory, with per-store traceability, so staff never work blind.'
      ),
      points: [
        pick('Inventario geolocalizado por tienda', 'Geolocated per-store inventory'),
        pick('Alertas de stock y reposición', 'Stock and restocking alerts'),
        pick('Exportación e integración con tu ERP', 'Export and integration with your ERP')
      ]
    },
    {
      icon: Wrench,
      title: pick('Mantenimiento correctivo, predictivo y preventivo', 'Corrective, predictive and preventive maintenance'),
      body: pick(
        'Órdenes de trabajo de campo y detección temprana de incidencias de hardware, para que una pantalla apagada nunca sea el motivo de una venta perdida.',
        'Field work orders and early detection of hardware issues, so a screen going dark is never the reason a sale is lost.'
      ),
      points: [
        pick('Ticketing automático por incidencia', 'Automatic incident ticketing'),
        pick('Mantenimiento preventivo programado', 'Scheduled preventive maintenance'),
        pick('Detección predictiva de fallos', 'Predictive fault detection')
      ]
    }
  ]

  const outcomes = [
    {
      icon: TrendingUp,
      title: pick('Resultados en ventas', 'Sales results'),
      body: pick('Cada línea de servicio se mide contra el mismo objetivo: más venta, no solo más pantallas.', 'Every service line is measured against the same goal: more sales, not just more screens.')
    },
    {
      icon: Users,
      title: pick('Experiencia de cliente', 'Customer experience'),
      body: pick('Comunicación más dinámica y relevante en el momento y lugar en que el cliente está decidiendo.', 'More dynamic, relevant communication at the moment and place your customer is deciding.')
    },
    {
      icon: Globe2,
      title: pick('Adaptado a cada geografía', 'Adapted to every geography'),
      body: pick('Contenido y horarios ajustados por país, idioma y perfil de público, con una sola plataforma central.', 'Content and scheduling adjusted by country, language and audience profile, from one central platform.')
    }
  ]

  const faqs = [
    {
      q: pick('¿Qué diferencia hay entre digital signage y retail media?', 'What is the difference between digital signage and retail media?'),
      a: pick(
        'El digital signage es la infraestructura (pantallas y CMS); el retail media es cómo conviertes esa infraestructura en un canal de comunicación con capacidad de campaña, segmentación y medición, similar a un medio publicitario propio.',
        'Digital signage is the infrastructure (screens and CMS); retail media is how you turn that infrastructure into a communication channel with campaign, targeting and measurement capabilities, similar to your own advertising medium.'
      )
    },
    {
      q: pick('¿Cómo ayuda Altair Sense al staff de tienda?', 'How does Altair Sense help store staff?'),
      a: pick(
        'Automatizamos la actualización de contenidos y precios, el control de inventario y la apertura de incidencias de mantenimiento, para que el equipo en tienda dedique menos tiempo a tareas operativas y más a atender al cliente.',
        'We automate content and price updates, inventory control and maintenance ticketing, so in-store teams spend less time on operational tasks and more time serving customers.'
      )
    },
    {
      q: pick('¿Qué tipo de mantenimiento ofrecéis?', 'What kind of maintenance do you offer?'),
      a: pick(
        'Los tres tipos: correctivo (resolver una incidencia ya ocurrida), preventivo (revisiones programadas para evitar fallos) y predictivo (detección temprana de patrones que anticipan un fallo antes de que ocurra).',
        'All three types: corrective (fixing an issue that already happened), preventive (scheduled checks to avoid failures) and predictive (early detection of patterns that anticipate a failure before it happens).'
      )
    },
    {
      q: pick('¿Podemos adaptar el contenido por país o tienda?', 'Can we adapt content by country or store?'),
      a: pick(
        'Sí. La plataforma permite programar y segmentar contenido por geografía, idioma, perfil de público y contexto de cada tienda, desde un único panel central.',
        "Yes. The platform lets you schedule and target content by geography, language, audience profile and each store's context, from a single central dashboard."
      )
    }
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Signage, Retail Media & Retail Tech',
    provider: { '@type': 'Organization', name: 'Altair Sense', url: SITE_URL },
    areaServed: { '@type': 'Place', name: pick('Internacional', 'International') },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: pick('Soluciones Altair Sense', 'Altair Sense solutions'),
      itemListElement: items.map((it) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: it.title, description: it.body }
      }))
    }
  }

  return (
    <div>
      <Seo
        title={pick('Soluciones de Digital Signage, Retail Media y Retail Tech', 'Digital Signage, Retail Media and Retail Tech Solutions')}
        description={pick(
          'Digital signage, retail media, CMS de gestión de contenidos, control de inventario y stock, y mantenimiento correctivo, predictivo y preventivo. Una sola plataforma para generar resultados en ventas y experiencia de cliente.',
          'Digital signage, retail media, content management system, inventory and stock control, and corrective, predictive and preventive maintenance. One platform to drive sales and customer experience results.'
        )}
        path="/soluciones"
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.solutions}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Digital signage, retail media y retail tech, con foco en resultado', 'Digital signage, retail media and retail tech, focused on results')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'No trabajamos solo el escaparate: optimizamos toda la operación en tienda —contenidos, inventario, mantenimiento— para que se traduzca en más ventas y mejor experiencia de cliente, en cualquier país en el que operes.',
              "We don't just work the shopfront: we optimize the whole in-store operation —content, inventory, maintenance— so it translates into more sales and better customer experience, in any country you operate in."
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

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Por qué lo hacemos', 'Why we do it')}</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 max-w-2xl">
            {pick('Todo apunta al mismo resultado', 'It all points to the same outcome')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {outcomes.map((o, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
                <o.icon size={24} className="text-as-lime mb-4" strokeWidth={1.75} />
                <h3 className="font-display font-extrabold text-lg mb-2">{o.title}</h3>
                <p className="text-as-cream/60 text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Eyebrow tone="moss">FAQ</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black mt-3 mb-10">
            {pick('Preguntas frecuentes', 'Frequently asked questions')}
          </h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-as-stone rounded-2xl p-6 md:p-8">
                <h3 className="font-display font-extrabold text-lg text-as-black mb-2">{f.q}</h3>
                <p className="text-as-black/65 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
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
