import { useLang } from '../i18n/LanguageContext.jsx'
import { useRouter } from '../lib/router.jsx'
import { openQuickContact } from '../lib/links.js'

// Banda de contacto al final de cada página (salvo /contacto).
export default function CtaStrip() {
  const { pick } = useLang()
  const { path } = useRouter()
  if (path === '/contacto') return null
  return (
    <section className="bg-as-lime text-as-black">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="max-w-2xl">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">
            {pick('Analizamos tu tienda. Te ayudamos a ampliar su eficacia.', 'We analyse your store. We help you expand its effectiveness.')}
          </h2>
          <p className="mt-2 text-as-black/70">
            {pick('Una visita, un diagnóstico y una propuesta con el resultado esperado por escrito.', 'One visit, a diagnosis and a proposal with the expected result in writing.')}
          </p>
        </div>
        <button onClick={openQuickContact}
          className="self-start md:self-auto bg-as-black text-as-lime font-bold px-7 py-3.5 rounded-full hover:brightness-125 transition">
          {pick('Solicitar diagnóstico', 'Request a diagnosis')}
        </button>
      </div>
    </section>
  )
}
