import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { Eyebrow } from '../components/Bits.jsx'
import { supabase } from '../lib/supabaseClient.js'
import Seo from '../components/Seo.jsx'

// Logos oficiales, procesados a silueta blanca para integrarse sobre fondo
// oscuro (public/partners/*.png). Cuando haya más, añádelos aquí y a la
// carpeta public/partners/.
const CORE_PARTNERS = [
  { name: 'Navori Labs', logo: '/partners/navori-labs.png' },
  { name: 'Visiotech', logo: '/partners/visiotech.png' },
  { name: 'Hisense', logo: '/partners/hisense.png' },
  { name: 'Unilumin', logo: '/partners/unilumin.png' },
  { name: 'Hikvision', logo: '/partners/hikvision.png' },
  { name: 'Milesight', logo: '/partners/milesight.png' },
  { name: 'Flame Analytics', logo: '/partners/flame-analytics.png' }
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

        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-14 grid md:grid-cols-[1.2fr_1fr] gap-8 items-end">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
              <span className="text-as-lime">Lumen</span> {pick('es nuestra capa. Ayuda a orquestar las mejores soluciones.', 'is our layer. It helps orchestrate the best solutions.')}
            </h2>
            <p className="mt-4 text-as-cream/65 leading-relaxed max-w-xl">
              {pick('Sobre Lumen se apoya todo el ecosistema: hardware, CMS y modelos de IA. Elegimos por proyecto, no por catálogo.', 'The whole ecosystem rests on Lumen: hardware, CMS and AI models. We choose by project, not by catalogue.')}
            </p>
          </div>
          <p className="md:text-right text-sm font-bold tracking-[0.2em] uppercase text-as-lime">AI-ready · AI-agnostic</p>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-14 pt-14 border-t border-white/10">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-as-lime mb-10">{pick('Ecosistema de partners certificados', 'Certified partner ecosystem')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 items-center">
            {CORE_PARTNERS.map((p) => (
              <div key={p.name} className="flex items-center justify-center h-14 opacity-70 hover:opacity-100 transition-opacity">
                <img src={p.logo} alt={p.name} className="max-h-10 md:max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>

          {partners && partners.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 items-center mt-14 pt-14 border-t border-white/10">
              {partners.map((p) => (
                <a
                  key={p.id}
                  href={p.url || undefined}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noreferrer' : undefined}
                  className="flex items-center justify-center h-14 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={p.logo_url} alt={p.name} className="max-h-10 md:max-h-12 max-w-full object-contain" />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
