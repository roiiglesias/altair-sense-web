import { useEffect, useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Link, buildUrl } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import Cover, { absoluteImage } from '../components/Cover.jsx'
import { markdownToHtml, readingMinutes, extractFaq } from '../lib/markdown.js'
import { ArrowLeft, ArrowRight, Clock, Loader2 } from 'lucide-react'

export default function KBArticulo({ slug }) {
  const { pick, t, lang } = useLang()
  const [article, setArticle] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [related, setRelated] = useState([])

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setNotFound(true); return }
      const { data, error } = await supabase
        .from('kb_articles')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle()
      if (!active) return
      if (error || !data) setNotFound(true)
      else setArticle(data)
    }
    load()
    return () => { active = false }
  }, [slug])

  const body = article ? (lang === 'es' ? article.body_es : article.body_en || article.body_es) : ''
  const html = useMemo(() => markdownToHtml(body, { lang, selfSlug: slug }), [body, lang, slug])

  // Otras guías publicadas (enlazado interno al final del artículo)
  useEffect(() => {
    let active = true
    async function loadRelated() {
      if (!supabase) return
      const { data } = await supabase
        .from('kb_articles')
        .select('slug,title_es,title_en,summary_es,summary_en,published_at')
        .eq('is_published', true)
        .neq('slug', slug)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(3)
      if (active && data) setRelated(data)
    }
    loadRelated()
    return () => { active = false }
  }, [slug])

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-28 text-center">
        <p className="text-as-black/60 mb-6">{pick('No hemos encontrado este artículo.', "We couldn't find this article.")}</p>
        <Link to="/knowledge-base" className="text-as-moss font-bold">{t.back}</Link>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-28 flex items-center gap-2 text-as-black/50">
        <Loader2 size={18} className="animate-spin" /> {t.loading}
      </div>
    )
  }

  const title = lang === 'es' ? article.title_es : article.title_en || article.title_es
  const summary = lang === 'es' ? article.summary_es : article.summary_en || article.summary_es
  const coverAlt = (lang === 'es' ? article.cover_alt_es : article.cover_alt_en) || ''
  const image = absoluteImage(article.cover_image_url)
  const published = article.published_at || article.created_at
  const named = article.author && article.author !== 'Equipo NUVsense'
  const date = published
    ? new Date(published).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: summary,
    inLanguage: lang,
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: `${SITE_URL}${buildUrl(`/knowledge-base/${article.slug}`, lang)}`,
    ...(image ? { image } : {}),
    author: named
      ? { '@type': 'Person', name: article.author, worksFor: { '@type': 'Organization', name: 'NUVsense', url: SITE_URL } }
      : { '@type': 'Organization', name: 'NUVsense', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'NUVsense', logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/nuvsense-avatar.png` } }
  }

  const faq = extractFaq(body)
  const faqJsonLd = faq.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    : null

  return (
    <article className="bg-as-cream">
      <Seo title={title} description={summary} path={`/knowledge-base/${article.slug}`} type="article" image={image} jsonLd={faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd} />

      <header className="bg-as-black text-as-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-28 md:pb-40">
          <Link to="/knowledge-base" className="inline-flex items-center gap-2 text-as-lime font-bold text-sm mb-8 hover:text-as-cream transition">
            <ArrowLeft size={16} /> {pick('Knowledge Base', 'Knowledge Base')}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wide text-as-cream/60">
            {article.category && <span className="text-as-lime">{article.category}</span>}
            {date && <time dateTime={published}>{date}</time>}
            <span>{named ? pick(`Por ${article.author}`, `By ${article.author}`) : pick('Por el equipo de NUVsense', 'By the NUVsense team')}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {readingMinutes(body)} min</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight mt-4 max-w-3xl">{title}</h1>
          {summary && <p className="mt-5 text-lg text-as-cream/70 max-w-2xl leading-relaxed">{summary}</p>}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 md:px-8 -mt-20 md:-mt-28">
        {article.cover_image_url && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-as-stone shadow-xl bg-as-stone">
            <Cover src={article.cover_image_url} alt={coverAlt} eager className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="md-body" dangerouslySetInnerHTML={{ __html: html }} />
        {related.length > 0 && (
          <aside className="mt-14 pt-8 border-t border-as-stone">
            <h2 className="font-display font-extrabold text-xl mb-5">{pick('Sigue leyendo', 'Keep reading')}</h2>
            <ul className="space-y-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/knowledge-base/${r.slug}`} className="group block">
                    <span className="font-bold text-as-black group-hover:text-as-moss transition">{lang === 'es' ? r.title_es : r.title_en || r.title_es}</span>
                    <span className="block text-sm text-as-black/60 mt-1">{lang === 'es' ? r.summary_es : r.summary_en || r.summary_es}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              {pick('¿Quieres ver cómo se aplica en tu tienda? ', 'Want to see how this applies to your store? ')}
              <Link to="/contacto" className="inline-flex items-center gap-1 text-as-moss font-bold">
                {pick('Solicita un diagnóstico de tienda', 'Request a store diagnostic')} <ArrowRight size={14} />
              </Link>
            </p>
          </aside>
        )}
        <div className="mt-14 pt-8 border-t border-as-stone">
          <Link to="/knowledge-base" className="inline-flex items-center gap-2 text-as-moss font-bold text-sm hover:text-as-black transition">
            <ArrowLeft size={16} /> {pick('Ver todas las guías', 'See all guides')}
          </Link>
        </div>
      </div>
    </article>
  )
}
