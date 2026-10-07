import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { Eyebrow, Divider } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import { serviceLevels, serviceLines, levelMatrix, slaList } from '../data/servicios.js'
import { openQuickContact } from '../lib/links.js'
import { Check, Minus, FileText, Globe, Leaf } from 'lucide-react'

export default function Servicios() {
  const { pick } = useLang()
  const levels = serviceLevels(pick)
  const lines = serviceLines(pick)
  const m = levelMatrix(pick)
  const sla = slaList(pick)

  return (
    <div>
      <Seo
        title={pick('Servicios técnicos y niveles de servicio', 'Technical services and service levels')}
        description={pick(
          'Siete servicios técnicos y tres niveles de servicio sobre Lumen para digital signage, AV Pro y retail tech: un interlocutor único, compromiso de tiempo explícito y trazabilidad de cada intervención.',
          'Seven technical services and three service levels on Lumen for digital signage, AV Pro and retail tech: a single point of contact, explicit time commitment and traceability of every intervention.'
        )}
        path="/servicios"
      />

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Servicios técnicos profesionales', 'Professional technical services')}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            {pick('Digital signage, AV Pro y retail tech, ', 'Digital signage, AV Pro and retail tech, ')}
            <span className="text-as-lime">{pick('con alguien que responde', 'with someone who answers')}</span>
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Siete servicios técnicos y tres niveles de servicio, sobre Lumen. Un interlocutor único, un compromiso de tiempo explícito y trazabilidad de cada intervención.',
              'Seven technical services and three service levels, on Lumen. A single point of contact, an explicit time commitment and traceability of every intervention.'
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="#niveles-escalado" className="border border-white/20 rounded-full px-4 py-2 hover:border-as-lime hover:text-as-lime transition">{pick('Cómo escala una incidencia', 'How an incident escalates')}</a>
            <a href="#servicios" className="border border-white/20 rounded-full px-4 py-2 hover:border-as-lime hover:text-as-lime transition">{pick('Los 7 servicios', 'The 7 services')}</a>
            <a href="#niveles-servicio" className="border border-white/20 rounded-full px-4 py-2 hover:border-as-lime hover:text-as-lime transition">{pick('Niveles de servicio', 'Service levels')}</a>
          </div>
        </div>
      </section>

      {/* Cómo escala */}
      <section id="niveles-escalado" className="bg-as-cream py-20 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Eyebrow tone="moss">{pick('Cómo escala una incidencia', 'How an incident escalates')}</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black mt-3">
            {pick('Tres niveles. ', 'Three levels. ')}<span className="text-as-moss">{pick('Un solo interlocutor.', 'One point of contact.')}</span>
          </h2>
          <p className="mt-4 text-as-black/65 text-lg max-w-2xl leading-relaxed">
            {pick(
              'Cualquier persona de tienda abre la incidencia en menos de un minuto. A partir de ahí, el problema sube de nivel sólo si hace falta, y el cliente sigue hablando siempre con nosotros.',
              'Anyone in store opens the incident in under a minute. From there, the problem moves up a level only if needed, and the client keeps talking to us throughout.'
            )}
          </p>
          <div className="mt-10 space-y-6">
            {levels.map((l, i) => (
              <div key={l.n} className="flex gap-5">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-display font-extrabold shrink-0 ${i === 1 ? 'bg-as-moss text-as-cream' : i === 2 ? 'bg-as-black text-as-lime' : 'bg-as-lime text-as-black'}`}>{l.n}</div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-as-black">{l.title}</h3>
                  <p className="mt-1 text-as-black/65 leading-relaxed">{l.body}</p>
                  <p className="mt-1 text-sm font-semibold text-as-moss">{l.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-as-black text-as-cream rounded-xl p-6 flex gap-4 items-start">
            <Leaf size={20} className="text-as-lime shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              {pick(
                'Cada resolución en remoto es una visita menos que coordinar y esperar. Ese dato alimenta el indicador de sostenibilidad de resolución remota.',
                'Every remote resolution is one less visit to coordinate and wait for. That data feeds the remote-resolution sustainability indicator.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 7 servicios */}
      <section id="servicios" className="bg-as-black text-as-cream py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Líneas de servicio', 'Service lines')}</Eyebrow>
          <Divider className="my-5" />
          <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl">
            {pick('Siete servicios, una sola trazabilidad', 'Seven services, one single traceability')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {lines.map((s, i) => (
              <article key={i} className="border border-white/10 rounded-2xl p-7 md:p-8 bg-white/[0.03] flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-as-lime flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-as-black" strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-as-lime">
                      {pick('Servicio', 'Service')} {i + 1} {pick('de', 'of')} 7 · {s.group}
                    </p>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl leading-tight">{s.title}</h3>
                  </div>
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-as-cream/45 mb-3">{pick('Qué incluye', 'What it includes')}</p>
                <ul className="space-y-2.5 text-sm text-as-cream/75 leading-relaxed">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5"><Check size={15} className="text-as-lime shrink-0 mt-1" />{p}</li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/10 mt-auto">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-as-lime mb-2">{pick('Beneficio para el cliente', 'Client benefit')}</p>
                  <p className="text-sm text-as-cream/80 leading-relaxed">{s.benefit}</p>
                </div>
              </article>
            ))}

            <article className="border border-as-lime/30 rounded-2xl p-7 md:p-8 bg-as-lime/[0.06]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-as-lime mb-3">{pick('Capas de transparencia', 'Transparency layers')}</p>
              <h3 className="font-display font-extrabold text-xl md:text-2xl leading-tight mb-5">
                {pick('Lo que el cliente ve sin tener que preguntar', 'What the client sees without having to ask')}
              </h3>
              <div className="space-y-5 text-sm text-as-cream/80 leading-relaxed">
                <div className="flex gap-3"><FileText size={20} className="text-as-lime shrink-0" />
                  <p><strong className="text-as-cream">{pick('Informe periódico de servicio', 'Periodic service report')}</strong> <span className="text-as-lime text-xs font-bold tracking-wider">BUSINESS · ENTERPRISE</span><br />
                  {pick('Informe mensual con SLA cumplido, incidencias por tipo y porcentaje de resolución remota.', 'Monthly report with SLA met, incidents by type and remote-resolution percentage.')}</p></div>
                <div className="flex gap-3"><Globe size={20} className="text-as-lime shrink-0" />
                  <p><strong className="text-as-cream">{pick('Portal de cliente con acceso directo', 'Client portal with direct access')}</strong> <span className="text-as-lime text-xs font-bold tracking-wider">ENTERPRISE</span><br />
                  {pick('El cliente consulta sus propias incidencias, la base de conocimiento y las novedades sin depender de una llamada ni de un correo.', 'The client checks their own incidents, the knowledge base and updates without relying on a call or an email.')}</p></div>
              </div>
              <p className="mt-6 text-sm text-as-cream/65 leading-relaxed">
                {pick('El cumplimiento del compromiso deja de ser una afirmación nuestra y pasa a ser una cifra que él consulta.', 'Meeting the commitment stops being a claim of ours and becomes a figure the client can check.')}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section id="niveles-servicio" className="bg-as-cream py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Eyebrow tone="moss">{pick('Niveles de servicio', 'Service levels')}</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black mt-3">
            {pick('Tres niveles. ', 'Three levels. ')}<span className="text-as-moss">{pick('El que corresponda al riesgo.', 'The one that matches the risk.')}</span>
          </h2>
          <p className="mt-4 text-as-black/65 text-lg max-w-2xl">
            {pick('Cada nivel incluye todo lo del anterior. Lo que cambia es la profundidad del soporte y el tiempo de respuesta comprometido.', 'Each level includes everything in the previous one. What changes is the depth of support and the committed response time.')}
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-as-stone bg-white">
            <table className="w-full min-w-[640px] text-sm text-left">
              <thead>
                <tr className="border-b border-as-stone">
                  <th className="p-4 w-[34%]"></th>
                  {m.L.map((n, i) => (
                    <th key={n} className={`p-4 align-bottom ${i === 2 ? 'bg-as-black text-as-cream' : ''}`}>
                      <span className={`block text-[10px] tracking-[0.25em] font-bold ${i === 2 ? 'text-as-lime' : 'text-as-moss'}`}>LUMEN</span>
                      <span className="block font-display font-extrabold text-xl">{n}</span>
                      <span className={`block text-xs font-normal ${i === 2 ? 'text-as-cream/60' : 'text-as-black/55'}`}>{m.sub[i]}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {m.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-as-stone/70">
                    <td className="p-3.5 text-as-black/80">{r[0]}</td>
                    {[1, 2, 3].map((k) => (
                      <td key={k} className={`p-3.5 ${k === 3 ? 'bg-as-lime/10' : ''}`}>
                        {r[k] ? <Check size={18} className="text-as-moss" /> : <Minus size={16} className="text-as-black/25" />}
                      </td>
                    ))}
                  </tr>
                ))}
                {m.meta.map((r) => (
                  <tr key={r[0]} className="border-b border-as-stone/70 bg-as-cream/50">
                    <td className="p-3.5 font-semibold text-as-black/80">{r[0]}</td>
                    {[1, 2, 3].map((k) => (
                      <td key={k} className={`p-3.5 text-as-black/75 text-xs md:text-sm ${k === 3 ? 'bg-as-lime/10' : ''}`}>{r[k]}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-3.5 align-top text-xs font-bold tracking-[0.18em] uppercase text-as-moss">{pick('Pensado para', 'Designed for')}</td>
                  {m.target.map((tt, k) => (
                    <td key={k} className={`p-3.5 align-top text-xs text-as-black/65 leading-relaxed ${k === 2 ? 'bg-as-lime/10' : ''}`}>{tt}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-as-black/50">
            {pick('Servicio independiente del CMS que use cada cliente. Plazo de intervención on-site por defecto: 2NBD.', 'Service independent of the CMS each client uses. Default on-site intervention time: 2NBD.')}
          </p>
        </div>
      </section>

      {/* SLA + siguiente paso */}
      <section className="bg-as-black text-as-cream py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <Eyebrow>SLA</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 leading-tight">
              {pick('El SLA no es una promesa: ', 'The SLA is not a promise: ')}<span className="text-as-lime">{pick('es una cifra.', 'it is a figure.')}</span>
            </h2>
            <p className="mt-4 text-as-cream/60 leading-relaxed">
              {pick('Se fija por criticidad del sistema, no por tamaño del cliente. Una sola pantalla puede ser crítica y una cadena entera puede no serlo.', 'It is set by system criticality, not client size. A single screen can be critical and a whole chain may not be.')}
            </p>
          </div>
          <dl className="divide-y divide-white/10">
            {sla.map(([k, v]) => (
              <div key={k} className="py-4 flex gap-5">
                <dt className="font-display font-extrabold text-2xl text-as-lime w-16 shrink-0">{k}</dt>
                <dd className="text-sm text-as-cream/70 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8 mt-14">
          <div className="rounded-2xl bg-as-lime text-as-black p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase">{pick('Siguiente paso', 'Next step')}</p>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl mt-1">{pick('Inventariamos lo que ya tienes y ponemos cifra al riesgo', 'We inventory what you already have and put a figure on the risk')}</h3>
              <p className="mt-2 text-as-black/70 text-sm max-w-xl">
                {pick('Revisamos parque instalado, garantías vigentes y criticidad por ubicación. De ahí sale el nivel de servicio que corresponde y el SLA de cada sistema, por escrito.', 'We review the installed base, current warranties and criticality by location. From that comes the right service level and the SLA of each system, in writing.')}
              </p>
            </div>
            <button onClick={openQuickContact} className="bg-as-black text-as-lime font-bold px-7 py-3.5 rounded-full hover:brightness-125 transition shrink-0">
              {pick('Pedir diagnóstico', 'Request a diagnosis')}
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-as-cream/45">
            <Link to="/soluciones#mantenimiento" className="hover:text-as-lime transition">{pick('← Volver a Soluciones', '← Back to Solutions')}</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
