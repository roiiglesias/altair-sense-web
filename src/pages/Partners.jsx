import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { supabase } from '../lib/supabaseClient.js'
import { Handshake, Loader2 } from 'lucide-react'
import { EmptyState } from './Noticias.jsx'
import Seo from '../components/Seo.jsx'

export default function Partners() {
  const { pick, t, lang } = useLang()
  const [partners, setPartners] = useState(null)

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setPartners([]); return }
      const { data } = await supabase
        .from('partners')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true })
      if (!active) return
      setPartners(data || [])
    }
    load()
    return () => { active = false }
  }, [])

  return (
    <div>
      <Seo
        title={t.nav.partners}
        description={pick(
          'Ecosistema de partners tecnológicos de Altair Sense en digital signage, retail media y retail tech.',
          "Altair Sense's technology partner ecosystem in digital signage, retail media and retail tech."
        )}
        path="/partners"
      />
      <section className="bg-as-black text-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Eyebrow>{t.nav.partners}</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mt-4 max-w-3xl">
            {pick('Tecnología en la que confiamos', 'Technology we trust')}
          </h1>
          <p className="mt-6 text-lg text-as-cream/65 max-w-2xl leading-relaxed">
            {pick(
              'Trabajamos con un ecosistema de partners tecnológicos para llevar digital signage, retail analytics y retail tech a cada sector.',
              'We work with a technology partner ecosystem to bring digital signage, retail analytics and retail tech to every sector.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {partners === null && (
            <div className="flex items-center gap-2 text-as-black/50 mb-6">
              <Loader2 size={18} className="animate-spin" /> {t.loading}
            </div>
          )}

          {partners?.length === 0 && (
            <EmptyState icon={Handshake} text={t.empty_partners} />
          )}

          {partners && partners.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((p) => (
                <a
                  key={p.id}
                  href={p.url || undefined}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noreferrer' : undefined}
                  className="bg-white border border-as-stone rounded-2xl p-8 flex items-center justify-center h-28 hover:border-as-moss transition-colors"
                >
                  <img
                    src={p.logo_url}
                    alt={p.name}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
