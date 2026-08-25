import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow, Divider } from '../components/Bits.jsx'
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
              'Trabajamos con equipos de retail que están cansados de decidir por intuición. Instalamos, medimos, explicamos el dato y seguimos ahí cuando toca ajustar la estrategia. Formamos parte de Altair Tech, con la misma disciplina de producto y de soporte que ya conoces en Lumen.',
              "We work with retail teams tired of deciding by gut feeling. We install, measure, explain the data, and stay involved when it's time to adjust strategy. We're part of Altair Tech, with the same product and support discipline you already know from Lumen."
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
    </div>
  )
}
