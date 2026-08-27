import { useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link, useRouter } from '../lib/router.jsx'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import { solutionSections } from '../data/solutions.js'
import { Check, ArrowRight, Globe2, Users, TrendingUp } from 'lucide-react'

export default function Soluciones() {
  const { pick, t } = useLang()
  const { path } = useRouter()
  const items = solutionSections(pick)

  // Desplazamiento suave al apartado si se llega vía #ancla (desde el desplegable del menú)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }
  }, [path])

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
        'El digital signage es la infraestructura (pantallas y CMS); el retail media es cómo conviertes esa infraestructura en un canal de comunicación con capacidad de campaña, segmentación y medición.',
        'Digital signage is the infrastructure (screens and CMS); retail media is how you turn that infrastructure into a communication channel with campaign, targeting and measurement capabilities.'
      )
    },
    {
      q: pick('¿Cómo ayuda Altair Sense al staff de tienda?', 'How does Altair Sense help store staff?'),
      a: pick(
        'Automatizamos la actualización de contenidos y precios, el control de inventario y la apertura de incidencias de mantenimiento, para que el equipo dedique menos tiempo a tareas operativas y más a atender al cliente.',
        'We automate content and price updates, inventory control and maintenance ticketing, so teams spend less time on operational tasks and more time serving customers.'
      )
    },
    {
      q: pick('¿Qué tipo de mantenimiento ofrecéis?', 'What kind of maintenance do you offer?'),
      a: pick(
        'Los tres tipos: correctivo (resolver una incidencia ya ocurrida), preventivo (revisiones programadas) y predictivo (detección temprana de patrones que anticipan un fallo).',
        'All three types: corrective (fixing an issue that already happened), preventive (scheduled checks) and predictive (early detection of patterns that anticipate a failure).'
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
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
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
          'Digital signage, CMS, retail tech, retail analytics, instalación, mantenimiento y gestión de contenidos. Una sola plataforma para generar resultados en ventas y experiencia de cliente.',
          'Digital signage, CMS, retail tech, retail analytics, installation, maintenance and content management. One platform to drive sales and customer experience results.'
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
              id={it.id}
              className="grid md:grid-cols-[auto_1fr] gap-8 bg-white border border-as-stone rounded-2xl p-8 md:p-10 scroll-mt-24"
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
