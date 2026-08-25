import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import { ArrowLeft, Loader2 } from 'lucide-react'

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

  return (
    <article className="bg-as-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Link to="/knowledge-base" className="inline-flex items-center gap-2 text-as-moss font-bold text-sm mb-8 hover:text-as-black transition">
          <ArrowLeft size={16} /> {t.back}
        </Link>
        {article.category && (
          <span className="text-[11px] font-bold uppercase tracking-wide text-as-moss">{article.category}</span>
        )}
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-as-black leading-tight mt-3 mb-8">
          {lang === 'es' ? article.title_es : article.title_en}
        </h1>
        <div className="prose-content text-as-black/75 leading-relaxed whitespace-pre-line text-lg">
          {lang === 'es' ? article.body_es : article.body_en}
        </div>
      </div>
    </article>
  )
}
