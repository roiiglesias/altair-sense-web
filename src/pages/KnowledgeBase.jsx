import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import { EmptyState } from './Noticias.jsx'
import Seo from '../components/Seo.jsx'
import Cover from '../components/Cover.jsx'
import { readingMinutes } from '../lib/markdown.js'
import { ArrowRight, BookOpen, Clock, FileDown, Loader2, Trophy } from 'lucide-react'

const CASE_STUDY_CATEGORY = 'caso-exito'

export default function KnowledgeBase() {
  const { pick, t, lang } = useLang()
  const [tab, setTab] = useState('articulos') // articulos | casos | descargables
  const [articles, setArticles] = useState(null)
  const [downloads, setDownloads] = useState(null)

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setArticles([]); setDownloads([]); return }

      const [aRes, dRes] = await Promise.all([
        supabase.from('kb_articles').select('*').eq('is_published', true).order('created_at', { ascending: false }),
        supabase.from('downloads').select('*').eq('is_published', true).order('sort_order', { ascending: true })
      ])
      if (!active) return
      setArticles(aRes.data || [])
      setDownloads(dRes.data || [])
    }
    load()
    return () => { active = false }
  }, [])

  const plainArticles = articles?.filter((a) => a.category !== CASE_STUDY_CATEGORY) ?? null
  const caseStudies = articles?.filter((a) => a.category === CASE_STUDY_CATEGORY) ?? null

  return (
    <div>
      <Seo
        title={t.nav.kb}
        description={pick(
          'Documentación técnica, casos de éxito y descargables sobre digital signage, CMS, control de inventario y mantenimiento predictivo, preventivo y correctivo.',
          'Technical documentation, case studies and downloads on digital signage, CMS, inventory control and predictive, preventive and corrective maintenance.'
        )}
        path="/knowledge-base"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.kb}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Documentación y recursos', 'Documentation & resources')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Artículos técnicos, casos de éxito, guías de instalación y material descargable.',
              'Technical articles, case studies, installation guides and downloadable material.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex gap-2 mb-12 border-b border-as-stone">
            <TabButton active={tab === 'articulos'} onClick={() => setTab('articulos')}>
              {pick('Artículos', 'Articles')}
            </TabButton>
            <TabButton active={tab === 'casos'} onClick={() => setTab('casos')}>
              {pick('Casos de éxito', 'Case studies')}
            </TabButton>
            <TabButton active={tab === 'descargables'} onClick={() => setTab('descargables')}>
              {pick('Descargables', 'Downloads')}
            </TabButton>
          </div>

          {tab === 'articulos' && (
            <>
              {plainArticles === null && <LoadingRow text={t.loading} />}
              {plainArticles?.length === 0 && <EmptyState icon={BookOpen} text={t.empty_kb} />}
              {plainArticles?.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {plainArticles.map((a, i) => (
                    <ArticleCard key={a.id} a={a} featured={i === 0 && plainArticles.length !== 2} />
                  ))}
                </div>
              )}
            </>
          )}

          {tab === 'casos' && (
            <>
              {caseStudies === null && <LoadingRow text={t.loading} />}
              {caseStudies?.length === 0 && (
                <EmptyState icon={Trophy} text={pick('Todavía no hay casos de éxito publicados.', 'No case studies published yet.')} />
              )}
              {caseStudies?.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudies.map((a) => <ArticleCard key={a.id} a={a} caseStudy />)}
                </div>
              )}
            </>
          )}

          {tab === 'descargables' && (
            <>
              {downloads === null && <LoadingRow text={t.loading} />}
              {downloads?.length === 0 && <EmptyState icon={FileDown} text={t.empty_downloads} />}
              <div className="grid md:grid-cols-2 gap-4">
                {downloads?.map((d) => (
                  <a
                    key={d.id}
                    href={d.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 bg-white border border-as-stone rounded-2xl p-6 hover:border-as-moss transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-as-black flex items-center justify-center shrink-0">
                      <FileDown size={20} className="text-as-lime" />
                    </div>
                    <div className="flex-1">
                      {d.category && (
                        <span className="text-[11px] font-bold uppercase tracking-wide text-as-moss">{d.category}</span>
                      )}
                      <h3 className="font-display font-extrabold text-base text-as-black mt-1">
                        {lang === 'es' ? d.title_es : d.title_en}
                      </h3>
                      {(lang === 'es' ? d.description_es : d.description_en) && (
                        <p className="text-sm text-as-black/60 mt-1">{lang === 'es' ? d.description_es : d.description_en}</p>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-as-moss font-bold text-sm mt-3">
                        {t.download} {d.file_size_kb ? `· ${Math.round(d.file_size_kb / 1024 * 10) / 10 || 1} MB` : ''}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

// Tarjeta de artículo: siempre con imagen (la portada o, si falta, un gráfico de marca)
function ArticleCard({ a, featured = false, caseStudy = false }) {
  const { pick, t, lang } = useLang()
  const title = lang === 'es' ? a.title_es : a.title_en || a.title_es
  const summary = lang === 'es' ? a.summary_es : a.summary_en || a.summary_es
  const alt = (lang === 'es' ? a.cover_alt_es : a.cover_alt_en) || ''
  const body = lang === 'es' ? a.body_es : a.body_en || a.body_es
  const date = a.created_at
    ? new Date(a.created_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : null

  return (
    <Link
      to={`/knowledge-base/${a.slug}`}
      className={`group bg-white border border-as-stone rounded-2xl overflow-hidden hover:border-as-moss hover:shadow-lg transition flex flex-col ${
        featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''
      }`}
    >
      <div className={`relative aspect-[16/9] bg-as-black overflow-hidden shrink-0 ${featured ? 'lg:w-3/5' : ''}`}>
        {a.cover_image_url ? (
          <Cover src={a.cover_image_url} alt={alt} eager={featured}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_70%_40%,rgba(180,227,61,0.25),transparent_60%)]">
            <BookOpen size={44} className="text-as-lime" />
          </div>
        )}
        {caseStudy && (
          <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wide text-as-lime bg-as-black px-2 py-1 rounded">
            {pick('Caso de éxito', 'Case study')}
          </span>
        )}
      </div>
      <div className={`p-6 flex flex-col flex-1 ${featured ? 'lg:p-10 lg:justify-center' : ''}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-wide text-as-black/45 mb-3">
          {a.category && !caseStudy && <span className="text-as-moss">{a.category}</span>}
          {date && <span>{date}</span>}
          {body && <span className="inline-flex items-center gap-1"><Clock size={12} /> {readingMinutes(body)} min</span>}
        </div>
        <h3 className={`font-display font-extrabold text-as-black mb-2 leading-snug ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className={`text-as-black/60 leading-relaxed flex-1 ${featured ? 'text-base' : 'text-sm line-clamp-3'}`}>{summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-as-moss font-bold text-sm">
          {t.read_more} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-1 pb-4 -mb-px border-b-2 font-bold text-sm transition-colors ${
        active ? 'border-as-moss text-as-black' : 'border-transparent text-as-black/45 hover:text-as-black/70'
      }`}
    >
      {children}
    </button>
  )
}

function LoadingRow({ text }) {
  return (
    <div className="flex items-center gap-2 text-as-black/50 mb-6">
      <Loader2 size={18} className="animate-spin" /> {text}
    </div>
  )
}
