import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Link } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo, { SITE_URL } from '../components/Seo.jsx'
import { ArrowLeft, Loader2 } from 'lucide-react'

export default function NoticiaDetalle({ slug }) {
  const { pick, t, lang } = useLang()
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setNotFound(true); return }
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle()
      if (!active) return
      if (error || !data) setNotFound(true)
      else setPost(data)
    }
    load()
    return () => { active = false }
  }, [slug])

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-28 text-center">
        <p className="text-as-black/60 mb-6">{pick('No hemos encontrado esta noticia.', "We couldn't find this news post.")}</p>
        <Link to="/noticias" className="text-as-moss font-bold">{t.back}</Link>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-28 flex items-center gap-2 text-as-black/50">
        <Loader2 size={18} className="animate-spin" /> {t.loading}
      </div>
    )
  }

  const title = lang === 'es' ? post.title_es : post.title_en
  const excerpt = lang === 'es' ? post.excerpt_es : post.excerpt_en
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: post.cover_image_url || undefined,
    datePublished: post.published_at || undefined,
    publisher: { '@type': 'Organization', name: 'Altair Sense' }
  }

  return (
    <article className="bg-as-cream">
      <Seo title={title} description={excerpt} path={`/noticias/${post.slug}`} image={post.cover_image_url} type="article" jsonLd={articleJsonLd} />
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Link to="/noticias" className="inline-flex items-center gap-2 text-as-moss font-bold text-sm mb-8 hover:text-as-black transition">
          <ArrowLeft size={16} /> {t.back}
        </Link>
        {post.published_at && (
          <p className="text-xs font-bold text-as-moss uppercase tracking-wide mb-3">
            {new Date(post.published_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        )}
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-as-black leading-tight mb-8">
          {lang === 'es' ? post.title_es : post.title_en}
        </h1>
        {post.cover_image_url && (
          <img src={post.cover_image_url} alt="" className="w-full rounded-2xl mb-10 border border-as-stone" />
        )}
        <div className="prose-content text-as-black/75 leading-relaxed whitespace-pre-line text-lg">
          {lang === 'es' ? post.body_es : post.body_en}
        </div>
      </div>
    </article>
  )
}
