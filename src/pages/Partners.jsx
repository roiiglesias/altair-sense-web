import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo from '../components/Seo.jsx'

// Partners confirmados. Sin logo oficial subido todavía: se muestran como
// wordmark tipográfico (fiable, sin arriesgar a usar un logo equivocado o de
// baja resolución sacado de una búsqueda). En cuanto subas cada logo real al
// bucket "partners" de Supabase y actualices supabase/seed_partners.sql,
// cambia is_published a true en esa fila y desaparece de esta lista fija
// para aparecer con su logo real desde la sección dinámica de abajo.
const CORE_PARTNERS = [
  'ZK Digimax', 'Visiotech', 'Hisense', 'Unilumin', 'Hikvision', 'Milesight', 'Flame Analytics'
]

export default function Partners() {
  const { pick, t } = useLang()
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
              'Trabajamos con un ecosistema de partners tecnológicos de primer nivel para llevar digital signage, retail media y retail tech a cada sector.',
              'We work with a first-tier technology partner ecosystem to bring digital signage, retail media and retail tech to every sector.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-as-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
            {CORE_PARTNERS.map((name) => (
              <div
                key={name}
                className="bg-white border border-as-stone rounded-2xl h-28 flex items-center justify-center px-4 hover:border-as-moss transition-colors"
              >
                <span className="font-display font-extrabold text-lg text-as-black/80 text-center">{name}</span>
              </div>
            ))}
          </div>

          {partners && partners.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-6 border-t border-as-stone">
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
