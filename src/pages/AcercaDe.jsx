import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, Divider } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import { Target, Eye, Handshake } from 'lucide-react'

export default function AcercaDe() {
  const { pick, t } = useLang()

  const values = [
    {
      icon: Target,
      title: pick('Orientados a resultado', 'Outcome-driven'),
      body: pick(
        'No vendemos sensores, vendemos la decisión que tomas con sus datos.',
        "We don't sell sensors, we sell the decision you make with their data."
      )
    },
    {
      icon: Eye,
      title: pick('Transparencia de dato', 'Data transparency'),
      body: pick(
        'Sin cajas negras: qué se mide, cómo y por qué, siempre accesible.',
        'No black boxes: what is measured, how and why, always accessible.'
      )
    },
    {
      icon: Handshake,
      title: pick('Compromiso a largo plazo', 'Long-term commitment'),
      body: pick(
        'Acompañamos la instalación, la lectura del dato y la mejora continua.',
        'We support the install, the data reading and the continuous improvement.'
      )
    }
  ]

  return (
    <div>
      <Seo
        title={t.nav.about}
        description={pick(
          'Altair Sense: empresa de retail tech comprometida con el resultado de venta y la experiencia de cliente, en digital signage, retail media, inventario y mantenimiento.',
          'Altair Sense: a retail tech company committed to sales results and customer experience, across digital signage, retail media, inventory and maintenance.'
        )}
        path="/nosotros"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.about}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Una empresa de soluciones de retail', 'A retail solutions company')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Altair Sense nace para cerrar la distancia entre lo que pasa en el escaparate y lo que pasa en la caja registradora.',
              'Altair Sense exists to close the gap between what happens at the shopfront and what happens at the register.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-start mb-20">
          <div>
            <Eyebrow tone="moss">{pick('Nuestro compromiso', 'Our commitment')}</Eyebrow>
            <Divider className="my-5 bg-as-moss" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black leading-tight">
              {pick('Nos comprometemos con tu resultado de venta', 'Committed to your sales result')}
            </h2>
          </div>
          <p className="text-as-black/65 leading-relaxed text-lg">
            {pick(
              'Trabajamos con equipos de retail que están cansados de decidir por intuición. Instalamos, medimos, explicamos el dato y seguimos ahí cuando toca ajustar la estrategia, en cada sector en el que operamos.',
              "We work with retail teams tired of deciding by gut feeling. We install, measure, explain the data, and stay involved when it's time to adjust strategy, across every sector we work in."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white border border-as-stone rounded-2xl p-8">
              <v.icon size={26} className="text-as-moss mb-5" strokeWidth={1.75} />
              <h3 className="font-display font-extrabold text-xl text-as-black mb-2">{v.title}</h3>
              <p className="text-as-black/60 leading-relaxed text-sm">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>{pick('Trayectoria', 'Track record')}</Eyebrow>
            <Divider className="my-5" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
              {pick('Más de 20 años en AV Pro y digital signage', 'Over 20 years in AV Pro and digital signage')}
            </h2>
            <p className="mt-6 text-as-cream/65 leading-relaxed text-lg">
              {pick(
                'Nuestro equipo lleva más de dos décadas dedicado a la industria audiovisual profesional y al digital signage, siendo pioneros en el diseño y despliegue de proyectos nacionales e internacionales para grandes marcas del retail, la banca, el seguro y la automoción.',
                'Our team has spent more than two decades in the professional AV and digital signage industry, pioneering the design and roll-out of national and international projects for major brands across retail, banking, insurance and automotive.'
              )}
            </p>
            <p className="mt-4 text-as-cream/65 leading-relaxed text-lg">
              {pick(
                'Esa experiencia incluye proyectos para marcas del grupo Inditex (Pull&Bear, Lefties, Stradivarius, Zara Home), Carrefour, Desigual, Mercedes-Benz y Mapfre, entre otras.',
                'That experience includes projects for Inditex-group brands (Pull&Bear, Lefties, Stradivarius, Zara Home), Carrefour, Desigual, Mercedes-Benz and Mapfre, among others.'
              )}
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.03]">
            <h3 className="font-display font-extrabold text-xl mb-4">
              {pick('Voz activa en la industria', 'An active voice in the industry')}
            </h3>
            <p className="text-as-cream/65 leading-relaxed">
              {pick(
                'Nuestro fundador, Roi Iglesias, forma parte del Comité de Expertos de la Asociación Española del Retail (AER) y coordina la alianza estratégica entre la AER y el Retail Innovation Council (RIC) del Reino Unido, facilitando el intercambio de tendencias, benchmarking internacional y buenas prácticas entre el retail español y europeo.',
                'Our founder, Roi Iglesias, is a member of the Expert Committee at the Spanish Retail Association (AER) and coordinates the strategic alliance between AER and the UK\'s Retail Innovation Council (RIC), facilitating the exchange of trends, international benchmarking and best practices between Spanish and European retail.'
              )}
            </p>
            <a
              href="https://www.linkedin.com/in/roiiglesiasvidal/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-as-lime hover:text-white transition"
            >
              {pick('Ver perfil de LinkedIn', 'View LinkedIn profile')} ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
