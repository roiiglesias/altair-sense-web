import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { Eyebrow, Divider } from '../components/Bits.jsx'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import { LUMEN_URL, openQuickContact } from '../lib/links.js'
import {
  ExternalLink, Users, ReceiptText, ShoppingCart, Boxes, LifeBuoy, ClipboardCheck, BarChart3,
  Sparkles, Plug, BookOpen, Globe, MonitorCheck, ArrowRight
} from 'lucide-react'

export default function Lumen() {
  const { pick } = useLang()

  const modules = [
    [Users, pick('CRM de clientes y cuentas', 'Client and account CRM'), pick('Contactos, cuentas, oportunidades y seguimiento comercial en un único sitio, con el histórico de cada cliente.', 'Contacts, accounts, opportunities and sales follow-up in one place, with each client history.')],
    [ShoppingCart, pick('Pedidos y facturación', 'Orders and invoicing'), pick('Del presupuesto al pedido y a la factura, sin reintroducir datos entre herramientas.', 'From quote to order to invoice, without re-entering data between tools.')],
    [Boxes, pick('Inventario del parque instalado', 'Installed-base inventory'), pick('Ficha por equipo con serie, modelo, garantía calculada, ubicación y trazabilidad hasta su instalación de origen.', 'Per-device record with serial number, model, calculated warranty, location and traceability back to its installation.')],
    [LifeBuoy, pick('Ticketing de incidencias N1 · N2 · N3', 'N1 · N2 · N3 incident ticketing'), pick('Portal público sin credenciales y asistente de IA, triaje automático, SLA configurable y escalada coordinada al fabricante.', 'Public portal with no credentials and an AI assistant, automatic triage, configurable SLA and coordinated manufacturer escalation.')],
    [ClipboardCheck, pick('Intervenciones y partes de trabajo', 'Interventions and work orders'), pick('Planificación en mapa, checklists obligatorios, lectura de serie y MAC por IA desde la etiqueta y firma digital del cliente.', 'Map planning, mandatory checklists, AI reading of serial and MAC from the label and digital client sign-off.')],
    [MonitorCheck, pick('Gestión operativa del CMS', 'CMS operational management'), pick('Integración por webhooks con el CMS de cada fabricante, sin obligar al cliente a cambiar de herramienta.', "Webhook integration with each manufacturer's CMS, without forcing the client to change tools.")],
    [BarChart3, pick('Dashboards e informes de SLA', 'Dashboards and SLA reports'), pick('Cumplimiento de SLA, incidencias por tipo y porcentaje de resolución remota, como cifra que el cliente consulta.', 'SLA compliance, incidents by type and remote-resolution rate, as a figure the client can check.')],
    [BookOpen, pick('Base de conocimiento viva', 'Living knowledge base'), pick('Cada incidencia resuelta alimenta conocimiento reutilizable para el siguiente caso.', 'Every solved incident feeds reusable knowledge for the next case.')],
    [Globe, pick('Portal de cliente', 'Client portal'), pick('El cliente consulta sus incidencias, su parque y las novedades sin depender de una llamada.', 'The client checks their incidents, installed base and updates without relying on a call.')]
  ]

  const principles = [
    [Sparkles, 'AI-ready', pick('La IA interviene donde cambia el resultado: triaje, lectura de etiquetas, anticipación de incidencias y modelos de resolución.', 'AI steps in where it changes the result: triage, label reading, incident anticipation and resolution models.')],
    [Plug, 'AI-agnostic', pick('Elegimos el modelo y el proveedor por proyecto, no por catálogo. Lumen orquesta, no ata.', 'We choose the model and provider per project, not from a catalogue. Lumen orchestrates, it does not lock in.')]
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumen',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Lumen es la plataforma de Altair Sense para CRM, pedidos, facturación, inventario del parque instalado, ticketing de incidencias y mantenimiento de digital signage y retail tech.',
    url: `${SITE_URL}/lumen`,
    publisher: { '@type': 'Organization', name: 'Altair Sense', url: SITE_URL }
  }

  return (
    <div>
      <Seo
        title={pick('Lumen: la plataforma de Altair Sense para retail', 'Lumen: the Altair Sense platform for retail')}
        description={pick(
          'Lumen es la plataforma y el cerebro matriz de Altair Sense: CRM, pedidos, facturación, inventario, ticketing de incidencias N1-N3, partes de trabajo, informes de SLA e IA para digital signage y retail tech.',
          'Lumen is the Altair Sense platform and core brain: CRM, orders, invoicing, inventory, N1-N3 incident ticketing, work orders, SLA reports and AI for digital signage and retail tech.'
        )}
        path="/lumen"
        jsonLd={jsonLd}
      />

      <section className="relative bg-as-black text-as-cream py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-24 top-10 w-[460px] h-[460px] rounded-full bg-as-lime/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
          <Eyebrow>Lumen</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            {pick('La plataforma que ', 'The platform that ')}
            <span className="text-as-lime">{pick('orquesta tu retail', 'orchestrates your retail')}</span>
          </h1>
          <p className="mt-6 text-lg text-as-cream/70 max-w-2xl leading-relaxed">
            {pick(
              'Lumen es el cerebro matriz de Altair Sense: conecta clientes, pedidos, facturación, inventario, incidencias y mantenimiento en una sola capa, con IA gestionada con criterio y al servicio del retail y otros entornos físicos.',
              'Lumen is the core brain of Altair Sense: it connects clients, orders, invoicing, inventory, incidents and maintenance in a single layer, with AI managed with judgement, serving retail and other physical environments.'
            )}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={LUMEN_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-as-lime text-as-black font-bold px-7 py-3.5 rounded-full hover:brightness-95 transition">
              {pick('Acceder a Lumen', 'Access Lumen')} <ExternalLink size={16} />
            </a>
            <button onClick={openQuickContact}
              className="inline-flex items-center gap-2 border border-as-cream/25 font-semibold px-7 py-3.5 rounded-full hover:border-as-lime hover:text-as-lime transition">
              {pick('Solicitar una demo', 'Request a demo')}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow tone="moss">{pick('Qué hace Lumen', 'What Lumen does')}</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-as-black mt-3 max-w-2xl">
            {pick('Una sola plataforma, de la venta al servicio', 'One platform, from sale to service')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {modules.map(([Icon, title, body]) => (
              <div key={title} className="bg-white border border-as-stone rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-as-black flex items-center justify-center mb-4">
                  <Icon size={20} className="text-as-lime" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-as-black mb-2">{title}</h3>
                <p className="text-sm text-as-black/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>Connected Retail Strategy</Eyebrow>
            <Divider className="my-5" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
              {pick('Lumen es la capa donde la estrategia se vuelve operación', 'Lumen is the layer where strategy becomes operations')}
            </h2>
            <p className="mt-5 text-as-cream/65 leading-relaxed">
              {pick(
                'Altair Sense articula la metodología Connected Retail Strategy (CRS) y Lumen es la plataforma sobre la que se apoya todo el ecosistema: hardware, CMS y modelos de IA. Abierta e integrable con las aplicaciones de cada cliente.',
                'Altair Sense articulates the Connected Retail Strategy (CRS) methodology and Lumen is the platform the whole ecosystem rests on: hardware, CMS and AI models. Open and integrable with each client application.'
              )}
            </p>
            <Link to="/servicios" className="inline-flex items-center gap-2 mt-6 text-as-lime font-bold hover:text-white transition">
              {pick('Ver servicios técnicos sobre Lumen', 'See technical services on Lumen')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-5">
            {principles.map(([Icon, h, b]) => (
              <div key={h} className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] flex gap-4">
                <Icon size={22} className="text-as-lime shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-extrabold text-xl">{h}</h3>
                  <p className="text-sm text-as-cream/60 mt-1 leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] flex gap-4">
              <ReceiptText size={22} className="text-as-lime shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-extrabold text-xl">{pick('Cliente de Altair Sense', 'Altair Sense client')}</h3>
                <p className="text-sm text-as-cream/60 mt-1 leading-relaxed">
                  {pick('Si ya trabajas con nosotros, accede a tu portal para ver incidencias, parque instalado e informes.', 'If you already work with us, sign in to your portal to see incidents, installed base and reports.')}
                </p>
                <a href={LUMEN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-as-lime hover:text-white transition">
                  {pick('Acceso a Lumen', 'Lumen access')} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
