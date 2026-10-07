import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, Divider } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import { Target, Eye, Handshake } from 'lucide-react'

const CLIENT_PROJECTS = [
  'Pull&Bear', 'Lefties', 'Stradivarius', 'Zara Home', 'Carrefour', 'Desigual', 'Mercedes-Benz', 'Mapfre',
  'Ecoalf', 'Sprinter', 'Masymas', 'Ibercaja', 'DKV Seguros'
]

const ALLIANCES = (pick) => [
  [pick('Experiencia de marca', 'Brand experience'), 'G365 · Virtual Atelier', pick('AI fashion retail y diseño de experiencia', 'AI fashion retail and experience design')],
  [pick('Consultoría de negocio', 'Business consulting'), 'Singular Solving', pick('CPS + AI aplicados al plan comercial', 'CPS + AI applied to the commercial plan')],
  [pick('Voz del sector', 'Voice of the sector'), 'AER', pick('Asociación Española de Retail', 'Spanish Retail Association')],
  [pick('Innovación en retail', 'Retail innovation'), 'Retail Innovation Council', pick('Reino Unido', 'United Kingdom')],
  [pick('Formación aplicada', 'Applied training'), pick('Universidad San Jorge · Universidad de Navarra', 'Universidad San Jorge · University of Navarra'), pick('Formación y talento en retail e IA', 'Training and talent in retail and AI')],
  [pick('Investigación y talento', 'Research and talent'), 'invidis consulting', pick('Analistas del sector', 'Industry analysts')]
]

export default function AcercaDe() {
  const { pick, t } = useLang()

  const values = [
    {
      icon: Target,
      title: pick('Orientados a resultado', 'Outcome-driven'),
      body: pick(
        'No vendemos pantallas, vendemos la decisión que tomas con sus datos.',
        "We don't sell screens, we sell the decision you make with their data."
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
          'Altair Sense: equipo de profesionales con más de 20 años de experiencia en AV Pro, digital signage, retail media y DOOH.',
          'Altair Sense: a team of professionals with over 20 years of experience in AV Pro, digital signage, retail media and DOOH.'
        )}
        path="/nosotros"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.about}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Un equipo con más de 20 años en AV Pro y Digital Signage', 'A team with over 20 years in AV Pro and Digital Signage')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Somos un equipo de profesionales con más de dos décadas de experiencia en AV Pro, Digital Signage, Retail Media y DOOH. Empleamos digital signage, data, IA y retail tech para construir experiencias relevantes que convierten.',
              'We are a team of professionals with over two decades of experience in AV Pro, Digital Signage, Retail Media and DOOH. We use digital signage, data, AI and retail tech to build relevant experiences that convert.'
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
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Trayectoria', 'Track record')}</Eyebrow>
          <Divider className="my-5" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight max-w-2xl">
            {pick('Pioneros en proyectos nacionales e internacionales', 'Pioneers in national and international projects')}
          </h2>
          <p className="mt-6 text-as-cream/65 leading-relaxed text-lg max-w-3xl">
            {pick(
              'Nuestro equipo lleva más de dos décadas dedicado a la industria audiovisual profesional, el digital signage y el retail media, siendo pioneros en el diseño y despliegue de proyectos nacionales e internacionales para grandes marcas.',
              'Our team has spent more than two decades in the professional AV, digital signage and retail media industry, pioneering the design and roll-out of national and international projects for major brands.'
            )}
          </p>

          <p className="mt-14 text-xs font-bold tracking-[0.22em] uppercase text-as-lime">{pick('Algunos proyectos desarrollados', 'Some projects delivered')}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 mt-6 pt-8 border-t border-white/10">
            {CLIENT_PROJECTS.map((name) => (
              <div key={name} className="flex items-center h-10">
                <span className="font-display font-extrabold text-lg md:text-xl text-as-cream/50">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Alianzas estratégicas', 'Strategic alliances')}</Eyebrow>
          <Divider className="my-5" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight max-w-3xl">
            {pick('Gestionamos la digitalización de tus tiendas ', 'We manage the digitalisation of your stores ')}
            <span className="text-as-lime">{pick('entendiendo el negocio', 'by understanding the business')}</span>.
          </h2>
          <p className="mt-5 text-as-cream/65 text-lg max-w-2xl">
            {pick('Nos rodeamos de quien conoce el retail por dentro: marca, consultoría, sector, innovación internacional y universidad.', 'We surround ourselves with people who know retail from the inside: brand, consulting, industry, international innovation and academia.')}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-12">
            {ALLIANCES(pick).map(([tag, name, desc]) => (
              <div key={tag} className="border-t border-white/15 pt-4">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-as-lime">{tag}</p>
                <h3 className="font-display font-extrabold text-xl mt-2">{name}</h3>
                <p className="text-sm text-as-cream/60 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-start">
            <figure className="relative rounded-2xl overflow-hidden border border-as-stone bg-as-black max-w-sm lg:max-w-none">
              <img src="/brand/roi-iglesias.jpg" alt="Roi Iglesias" className="w-full h-auto block" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-as-black/80 via-transparent to-as-moss/20 pointer-events-none" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-as-cream">
                <p className="font-display font-extrabold text-xl">Roi Iglesias</p>
                <p className="text-xs tracking-[0.18em] uppercase text-as-lime mt-1">{pick('Creador de Connected Retail Strategy', 'Creator of Connected Retail Strategy')}</p>
              </figcaption>
            </figure>
            <div>
          <Eyebrow tone="moss">{pick('Equipo fundador', 'Founding team')}</Eyebrow>
          <Divider className="my-5 bg-as-moss" />
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black leading-tight max-w-2xl">
            {pick('Un equipo de socios con presencia en más de 30 países', 'A team of partners with a presence in over 30 countries')}
          </h2>

          <p className="mt-6 text-as-black/65 leading-relaxed text-lg max-w-3xl">
            {pick(
              'Roi Iglesias forma parte del equipo fundador y aporta la visión, la estrategia, las líneas de producto y las alianzas que nos permiten abordar mejor el mercado, junto a un equipo de socios con experiencia contrastada ofreciendo soluciones y servicios en más de 30 países, tanto en Europa como en América (Norteamérica y LatAm), y con un sólido background en creación y crecimiento de negocios y en ingeniería.',
              'Roi Iglesias is part of the founding team and contributes the vision, strategy, product lines and partnerships that let us approach the market better, alongside a team of partners with proven experience delivering solutions and services in over 30 countries across Europe and the Americas (North America and LatAm), with a solid background in business building and growth, and in engineering.'
            )}
          </p>


              <div className="mt-8 border-l-2 border-as-moss pl-6">
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-as-moss mb-2">Connected Retail Strategy (CRS)</p>
                <p className="text-as-black/70 leading-relaxed">
                  {pick(
                    'Roi Iglesias es creador de la metodología Connected Retail Strategy (CRS), desarrollada en marzo de 2025 ante el volumen de soluciones que gestiona el sector retail y que hoy pueden aunarse a través de una infraestructura de inteligencia artificial gestionada con criterio. De CRS nació Altair Sense, que articula la metodología, con Lumen como plataforma y cerebro matriz al servicio del retail y otros entornos físicos.',
                    'Roi Iglesias is the creator of the Connected Retail Strategy (CRS) methodology, developed in March 2025 in response to the volume of solutions the retail sector manages, which can today be brought together through an AI infrastructure run with judgement. Altair Sense was born from CRS and articulates the methodology, with Lumen as the platform and core brain serving retail and other physical environments.'
                  )}
                </p>
              </div>
          <div className="mt-8 border border-as-stone rounded-2xl p-8 md:p-10 bg-white max-w-2xl">
            <h3 className="font-display font-extrabold text-lg text-as-black mb-3">
              {pick('Voz activa en la industria', 'An active voice in the industry')}
            </h3>
            <p className="text-as-black/65 leading-relaxed">
              {pick(
                'Roi forma parte del Comité de Expertos de la Asociación Española del Retail (AER) y coordina la alianza estratégica entre la AER y el Retail Innovation Council (RIC) del Reino Unido, facilitando el intercambio de tendencias, benchmarking internacional y buenas prácticas entre el retail español y europeo.',
                "Roi is a member of the Expert Committee at the Spanish Retail Association (AER) and coordinates the strategic alliance between AER and the UK's Retail Innovation Council (RIC), facilitating the exchange of trends, international benchmarking and best practices between Spanish and European retail."
              )}
            </p>
            <a
              href="https://www.linkedin.com/in/roiiglesiasvidal/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-as-moss hover:text-as-black transition"
            >
              {pick('Ver perfil de LinkedIn', 'View LinkedIn profile')} ↗
            </a>
          </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
