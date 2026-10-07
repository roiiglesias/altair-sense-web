import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { Eyebrow, Divider } from './Bits.jsx'
import { Target, MonitorSmartphone, PenLine, LineChart, Sparkles, Wrench, Headphones, ShieldCheck, FileText, Store, Users, ShoppingBag, ArrowRight } from 'lucide-react'

// Punto de partida + "modernizamos tramo a tramo"
export function HomeStoryIntro() {
  const { pick } = useLang()
  const gaps = [
    [pick('Sin datos', 'No data'), pick('Nadie sabe qué contenido movió la venta y qué contenido sólo consumió luz.', 'Nobody knows which content moved sales and which only burned electricity.')],
    [pick('Sin contexto', 'No context'), pick('El mismo mensaje para todos los perfiles, todas las horas y todas las tiendas.', 'The same message for every profile, every hour and every store.')],
    [pick('Sin dueño', 'No owner'), pick('Un fabricante, un instalador, un CMS y nadie que responda por el resultado.', 'A manufacturer, an installer, a CMS and nobody answering for the result.')]
  ]
  const stages = [
    [Store, pick('Escaparate', 'Shopfront'), pick('Detener al que pasa', 'Stop passers-by'), pick('Alto brillo, visible a plena luz. Campañas que cambian con la hora, el clima y el calendario.', 'High brightness, visible in full daylight. Campaigns that change with the time, weather and calendar.')],
    [ShoppingBag, pick('Interior', 'In-store'), pick('Acompañar la decisión', 'Support the decision'), pick('Categoría, precio y recomendación en el lineal, sincronizados con el ERP y el stock real.', 'Category, price and recommendation on the shelf, synced with the ERP and real stock.')],
    [Users, pick('Trastienda', 'Back of house'), pick('Armar al equipo', 'Equip the team'), pick('El mismo sistema informa y forma al staff de tienda: objetivos, novedades y argumentario.', 'The same system informs and trains store staff: targets, news and sales arguments.')]
  ]
  return (
    <>
      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow tone="moss">{pick('Nuestro punto de partida', 'Where we start')}</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-as-black mt-4 leading-tight">
              {pick('Al retail no le falta pantalla. ', 'Retail does not lack screens. ')}
              <span className="text-as-moss">{pick('Le falta criterio.', 'It lacks judgement.')}</span>
            </h2>
            <p className="mt-6 text-as-black/65 text-lg leading-relaxed">
              {pick(
                'Se instaló una vez, se cargó un bucle y ahí sigue. El mismo vídeo a las diez de la mañana de un martes de enero que un sábado de rebajas a la hora punta.',
                'It was installed once, a loop was loaded and there it stays. The same video at ten on a January Tuesday morning as on a peak-hour sales Saturday.'
              )}
            </p>
            <p className="mt-4 font-bold text-as-black">{pick('Una inversión que dejó de trabajar el día después de encenderse.', 'An investment that stopped working the day after it was switched on.')}</p>
          </div>
          <div className="divide-y divide-as-stone">
            {gaps.map(([h, b]) => (
              <div key={h} className="py-5 first:pt-0">
                <h3 className="font-display font-extrabold text-2xl text-as-black">{h}</h3>
                <p className="text-as-moss text-sm mt-1 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl leading-tight">
            {pick('Modernizamos el punto de atención y de venta, ', 'We modernise the point of service and sale, ')}
            <span className="text-as-lime">{pick('tramo a tramo', 'stage by stage')}</span>
          </h2>
          <p className="mt-5 text-as-cream/65 text-lg max-w-2xl">
            {pick('Digital signage, LED, etiqueta electrónica y retail tech conectados entre sí. Una sola tecnología haciendo tres trabajos distintos.', 'Digital signage, LED, electronic shelf labels and retail tech connected to each other. One technology doing three different jobs.')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {stages.map(([Icon, tag, title, body]) => (
              <div key={tag} className="border-t-2 border-as-lime pt-5">
                <p className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-as-lime"><Icon size={15} /> {tag}</p>
                <h3 className="font-display font-extrabold text-2xl mt-2">{title}</h3>
                <p className="mt-2 text-sm text-as-cream/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// IA + marca hablando + cómo trabajamos
export function HomeStoryMethod() {
  const { pick } = useLang()
  const ai = [
    [pick('Comunicar mejor', 'Communicate better'), pick('Genera y adapta el mensaje al perfil, la franja y la tienda. Deja de ser un bucle y pasa a ser una conversación.', 'Generates and adapts the message to the profile, time slot and store. It stops being a loop and becomes a conversation.')],
    [pick('Optimizar procesos', 'Optimise processes'), pick('Lo que antes eran semanas de producción y publicación se resuelve en horas, sin equipo creativo dedicado.', 'What used to take weeks of production and publishing is done in hours, without a dedicated creative team.')],
    [pick('Vender por predicción', 'Sell by prediction'), pick('Datos de venta, stock y afluencia anticipan qué conviene mostrar antes de que haga falta mostrarlo.', 'Sales, stock and footfall data anticipate what to show before it needs to be shown.')]
  ]
  const steps = [
    [Target, pick('Objetivos', 'Objectives'), pick('Qué resultado de negocio se persigue y cómo se medirá.', 'Which business result is pursued and how it will be measured.')],
    [MonitorSmartphone, pick('Tecnología', 'Technology'), pick('El hardware y el software que encajan, sin atarse a un fabricante.', 'The hardware and software that fit, without being tied to one manufacturer.')],
    [PenLine, pick('Contenidos', 'Content'), pick('La estrategia de mensaje que de verdad mueve la venta.', 'The message strategy that really moves sales.')],
    [LineChart, pick('Métricas', 'Metrics'), pick('Qué se puede medir en ese punto de venta y con qué dato.', 'What can be measured at that point of sale and with which data.')],
    [Sparkles, pick('IA aplicada', 'Applied AI'), pick('Dónde interviene y para qué: contenido, procesos y predicción.', 'Where it steps in and what for: content, processes and prediction.')]
  ]
  const tech = [
    [Wrench, pick('Instalación técnica', 'Technical installation'), pick('Montaje, integración y puesta en marcha.', 'Mounting, integration and commissioning.')],
    [Headphones, pick('Helpdesk', 'Helpdesk'), pick('Atención continua a tienda y a usuario.', 'Continuous support to store and user.')],
    [ShieldCheck, pick('Mantenimiento', 'Maintenance'), pick('Correctivo y predictivo, antes de la avería.', 'Corrective and predictive, before the failure.')],
    [FileText, pick('Informes y SLA', 'Reports and SLA'), pick('Nivel de servicio comprometido y medido.', 'Committed and measured service level.')]
  ]
  return (
    <>
      <section className="bg-as-black text-as-cream py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-as-cream/45">AI-ready · AI-agnostic</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl mt-4 max-w-4xl leading-tight">
            {pick('La IA no es el producto. ', 'AI is not the product. ')}
            <span className="text-as-lime">{pick('Es lo que hace que el producto acierte.', 'It is what makes the product get it right.')}</span>
          </h2>
          <p className="mt-5 text-as-cream/65 text-lg max-w-2xl">
            {pick('No la vendemos como titular. La usamos donde cambia el resultado: en lo que se dice, en lo que cuesta decirlo y en lo que se vende después.', 'We do not sell it as a headline. We use it where it changes the result: in what is said, in what it costs to say it and in what sells afterwards.')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {ai.map(([h, b]) => (
              <div key={h}>
                <h3 className="font-display font-extrabold text-xl">{h}</h3>
                <p className="mt-2 text-sm text-as-cream/60 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-14 border-t border-white/10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
                {pick('Lo que dice tu tienda es ', 'What your store says is ')}
                <span className="text-as-lime">{pick('tu marca hablando', 'your brand speaking')}</span>.
              </h2>
              <p className="mt-4 text-as-cream/65 leading-relaxed">
                {pick('Nuestros clientes tratan el punto de venta como una extensión de su posicionamiento y de su plan comercial. Nosotros conectamos entre sí las retail tech que ya tienen para que ese mensaje llegue con sentido.', 'Our clients treat the point of sale as an extension of their positioning and commercial plan. We connect the retail tech they already have so that message lands with meaning.')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-as-cream/40">{pick('El bucle', 'The loop')}</p>
                <h3 className="font-display font-extrabold text-lg text-as-cream/60 mt-2">{pick('Reproduce contenido', 'Plays content')}</h3>
                <p className="text-xs text-as-cream/40 mt-2 leading-relaxed">{pick('Se programa una vez. No sabe quién mira, ni qué hora es, ni qué queda en almacén.', 'Scheduled once. It does not know who is looking, what time it is or what is left in stock.')}</p>
              </div>
              <div className="rounded-xl border border-as-lime/40 bg-as-lime/[0.07] p-5">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-as-lime">{pick('El mensaje', 'The message')}</p>
                <h3 className="font-display font-extrabold text-lg mt-2">{pick('Interpela a alguien', 'Speaks to someone')}</h3>
                <p className="text-xs text-as-cream/70 mt-2 leading-relaxed">{pick('Contextual y personalizado, fuera y dentro: al cliente en el lineal y al equipo en la trastienda.', 'Contextual and personalised, outside and inside: to the customer at the shelf and to the team in the back of house.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow tone="moss">{pick('Cómo trabajamos', 'How we work')}</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-as-black mt-4 leading-tight max-w-3xl">
            {pick('Primero decidimos qué tiene que pasar. ', 'First we decide what has to happen. ')}
            <span className="text-as-moss">{pick('Luego lo montamos.', 'Then we build it.')}</span>
          </h2>
          <p className="mt-4 text-as-black/65 text-lg max-w-2xl">
            {pick('Cinco decisiones antes de tocar una pantalla. De ahí sale el proyecto, y de ahí salen las métricas con las que se juzga.', 'Five decisions before touching a screen. The project comes from there, and so do the metrics it is judged by.')}
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
            {steps.map(([Icon, h, b], i) => (
              <li key={h} className="bg-white border border-as-stone rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-as-black text-as-lime text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <Icon size={16} className="text-as-moss" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-as-black">{h}</h3>
                <p className="text-xs text-as-black/60 mt-1 leading-relaxed">{b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl bg-as-black text-as-cream p-7 md:p-8">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-as-lime mb-5">{pick('Y los servicios que lo hacen realidad y lo mantienen vivo', 'And the services that make it real and keep it alive')}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tech.map(([Icon, h, b]) => (
                <div key={h} className="flex gap-3">
                  <Icon size={18} className="text-as-lime shrink-0 mt-0.5" />
                  <div><h3 className="font-bold text-sm">{h}</h3><p className="text-xs text-as-cream/60 mt-1 leading-relaxed">{b}</p></div>
                </div>
              ))}
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-as-lime hover:text-white transition">
              {pick('Ver líneas y niveles de servicio', 'See service lines and levels')} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
