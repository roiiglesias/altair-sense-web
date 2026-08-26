import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { Link } from '../lib/router.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo from '../components/Seo.jsx'
import { ArrowRight, Newspaper, Loader2 } from 'lucide-react'

export default function Noticias() {
  const { pick, t, lang } = useLang()
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setPosts([]); return }
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })
      if (!active) return
      if (error) setError(true)
      setPosts(data || [])
    }
    load()
    return () => { active = false }
  }, [])

  return (
    <div>
      <Seo
        title={t.nav.news}
        description={pick(
          'Novedades de Altair Sense en digital signage, retail media, retail tech y retail analytics.',
          'Altair Sense updates on digital signage, retail media, retail tech and retail analytics.'
        )}
        path="/noticias"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.news}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Novedades de Altair Sense', 'Altair Sense updates')}
          </h1>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {posts === null && (
            <div className="flex items-center gap-2 text-as-black/50">
              <Loader2 size={18} className="animate-spin" /> {t.loading}
            </div>
          )}

          {posts?.length === 0 && !error && (
            <EmptyState icon={Newspaper} text={t.empty_news} />
          )}

          {error && (
            <EmptyState icon={Newspaper} text={pick('No se pudo cargar el contenido ahora mismo.', 'Could not load content right now.')} />
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((p) => (
              <Link
                key={p.id}
                to={`/noticias/${p.slug}`}
                className="bg-white border border-as-stone rounded-2xl overflow-hidden hover:border-as-moss transition-colors group flex flex-col"
              >
                {p.cover_image_url && (
                  <div className="h-44 bg-as-stone overflow-hidden">
                    <img src={p.cover_image_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {p.published_at && (
                    <p className="text-xs font-bold text-as-moss uppercase tracking-wide mb-2">
                      {new Date(p.published_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                  )}
                  <h3 className="font-display font-extrabold text-lg text-as-black mb-2">
                    {lang === 'es' ? p.title_es : p.title_en}
                  </h3>
                  <p className="text-sm text-as-black/60 leading-relaxed line-clamp-3 flex-1">
                    {lang === 'es' ? p.excerpt_es : p.excerpt_en}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-as-moss font-bold text-sm">
                    {t.read_more} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function EmptyState({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center text-center py-16 text-as-black/45 border border-dashed border-as-stone rounded-2xl mb-6">
      <Icon size={32} className="mb-3 text-as-sage" />
      <p>{text}</p>
    </div>
  )
}
