import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import Seo from '../components/Seo.jsx'
import { legalPage, LEGAL_UPDATED } from '../data/legal.js'

// Páginas legales (aviso legal, privacidad, cookies). El contenido vive en src/data/legal.js
export default function Legal({ kind }) {
  const { pick, lang } = useLang()
  const page = legalPage(kind, pick)
  const Para = ({ children }) => <p className="text-as-black/75 leading-relaxed mb-4">{children}</p>

  return (
    <div>
      <Seo title={page.title} description={page.description} path={`/${kind}`} />
      <section className="bg-as-black text-as-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Eyebrow>{pick('Información legal', 'Legal information')}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-4">{page.title}</h1>
          <p className="mt-4 text-sm text-as-cream/55">
            {pick('Última actualización', 'Last updated')}: {LEGAL_UPDATED[lang === 'en' ? 'en' : 'es']}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          {page.sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-display font-extrabold text-xl md:text-2xl text-as-black mb-4">{s.h}</h2>
              {s.p?.map((t, j) => <Para key={`p${j}`}>{t}</Para>)}
              {s.ul && (
                <ul className="list-disc pl-5 space-y-2 mb-4 text-as-black/75 leading-relaxed marker:text-as-moss">
                  {s.ul.map((t, j) => <li key={j}>{t}</li>)}
                </ul>
              )}
              {s.table && (
                <div className="overflow-x-auto mb-4 border border-as-stone rounded-xl bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-as-sage/40 text-as-black">
                      <tr>{s.table.head.map((h, j) => <th key={j} className="px-4 py-3 font-bold">{h}</th>)}</tr>
                    </thead>
                    <tbody className="text-as-black/75">
                      {s.table.rows.map((r, j) => (
                        <tr key={j} className="border-t border-as-stone align-top">
                          {r.map((c, k) => <td key={k} className="px-4 py-3 leading-relaxed">{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.p2?.map((t, j) => <Para key={`q${j}`}>{t}</Para>)}
              {s.note && <Para>{s.note}</Para>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
