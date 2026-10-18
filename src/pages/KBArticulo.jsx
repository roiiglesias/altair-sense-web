import { useEffect, useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import Cover, { absoluteImage } from '../components/Cover.jsx'
import { markdownToHtml, readingMinutes } from '../lib/markdown.js'
import { ArrowLeft, Clock, Loader2 } from 'lucide-react'

export default function KBArticulo({ slug }) {
  const { pick, t, lang } = useLang()
  const [article, setArticle] = useState(null)
  const [notFound, setNotFound] = useState(false)

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
  const html = useMemo(() => markdownToHtml(body), [body])

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
  const date = article.created_at
    ? new Date(article.created_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: summary,
    inLanguage: lang,
    datePublished: article.created_at,
    ...(image ? { image } : {}),
    author: { '@type': 'Organization', name: 'Altair Sense', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Altair Sense', logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/altair-sense-avatar.png` } }
  }

  return (
    <article className="bg-as-cream">
      <Seo title={title} description={summary} path={`/knowledge-base/${article.slug}`} type="article" image={image} jsonLd={articleJsonLd} />

      <header className="bg-as-black text-as-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-28 md:pb-40">
          <Link to="/knowledge-base" className="inline-flex items-center gap-2 text-as-lime font-bold text-sm mb-8 hover:text-as-cream transition">
            <ArrowLeft size={16} /> {pick('Knowledge Base', 'Knowledge Base')}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wide text-as-cream/60">
            {article.category && <span className="text-as-lime">{article.category}</span>}
            {date && <span>{date}</span>}
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
        <div className="mt-14 pt-8 border-t border-as-stone">
          <Link to="/knowledge-base" className="inline-flex items-center gap-2 text-as-moss font-bold text-sm hover:text-as-black transition">
            <ArrowLeft size={16} /> {pick('Ver todas las guías', 'See all guides')}
          </Link>
        </div>
      </div>
    </article>
  )
}
