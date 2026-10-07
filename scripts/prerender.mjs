// Post-build: genera un HTML por ruta E IDIOMA (ES en la raíz, EN bajo /en/) con título,
// descripción, canonical, hreflang, Open Graph, JSON-LD y el texto principal DENTRO del HTML.
// Así buscadores y rastreadores de IA (que muchas veces no ejecutan JavaScript) ven contenido
// real en cada idioma. React sustituye ese bloque al arrancar: la experiencia no cambia.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { getSectors } from '../src/data/sectors.js'
import { solutionSections } from '../src/data/solutions.js'
import { serviceLevels, serviceLines } from '../src/data/servicios.js'

const SITE = 'https://www.altairsense.com'
const DIST = 'dist'
const EN_SLUGS = { soluciones: 'solutions', sectores: 'sectors', servicios: 'services', nosotros: 'about', contacto: 'contact', noticias: 'news' }
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function urlPath(logical, lang) {
  if (lang !== 'en') return logical
  if (logical === '/') return '/en'
  const parts = logical.split('/')
  if (EN_SLUGS[parts[1]]) parts[1] = EN_SLUGS[parts[1]]
  return '/en' + parts.join('/')
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

// Contenido dinámico (Noticias y Knowledge Base) desde Supabase, si hay credenciales
async function fetchRows(table, fields) {
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.VITE_SUPABASE_ANON_KEY
  if (!url || !key) return []
  try {
    const r = await fetch(`${url}/rest/v1/${table}?select=${fields}&is_published=eq.true`, { headers: { apikey: key, Authorization: `Bearer ${key}` } })
    return r.ok ? await r.json() : []
  } catch { return [] }
}
const news = await fetchRows('news_posts', 'slug,title_es,title_en,excerpt_es,excerpt_en,body_es,body_en,published_at')
const kb = await fetchRows('kb_articles', 'slug,title_es,title_en,summary_es,summary_en,body_es,body_en,category')

// Estructura común: cada página se define una vez con textos ES/EN
function buildPages(lang) {
  const L = (es, en) => (lang === 'en' ? en : es)
  const pick = L
  const sectors = getSectors(pick)
  const solutions = solutionSections(pick)
  const levels = serviceLevels(pick)
  const lines = serviceLines(pick)
  const pages = []
  const add = (path, title, description, h1, blocks = [], extraLd = []) => pages.push({ path, title, description, h1, blocks, extraLd })

  add('/', null,
    L('Altair Sense: digital signage, retail media, retail analytics y retail tech para construir experiencias relevantes que convierten. Instalación, mantenimiento y gestión de contenidos.',
      'Altair Sense: digital signage, retail media, retail analytics and retail tech to build relevant experiences that convert. Installation, maintenance and content management.'),
    L('Nos comprometemos con tu resultado de venta', 'We are committed to your sales result'),
    [
      ['p', L('Empleamos digital signage, data, IA y retail tech para construir experiencias relevantes que convierten, en cualquier país en el que operes.', 'We use digital signage, data, AI and retail tech to build relevant experiences that convert, in any country you operate in.')],
      ['h2', L('Soluciones', 'Solutions')], ['ul', solutions.map((s) => s.title)],
      ['h2', L('Sectores', 'Sectors')], ['ul', sectors.map((s) => `${s.title}: ${s.tagline}`)]
    ])

  add('/soluciones', L('Digital Signage, Retail Media y Retail Tech: soluciones', 'Digital Signage, Retail Media and Retail Tech solutions'),
    L('Digital signage, CMS, retail tech, retail media, retail analytics, instalación, mantenimiento y gestión de contenidos. Una plataforma para impulsar resultados de venta y experiencia de cliente.',
      'Digital signage, CMS, retail tech, retail media, retail analytics, installation, maintenance and content management. One platform to drive sales and customer experience results.'),
    L('Digital signage, retail media y retail tech, con foco en resultado', 'Digital signage, retail media and retail tech, focused on results'),
    solutions.flatMap((s) => [['h2', s.title], ['p', s.body], ['ul', s.points]]))

  add('/sectores', L('Sectores: soluciones de digital signage y retail tech por vertical', 'Sectors: digital signage and retail tech solutions by vertical'),
    L('Digital signage y retail tech para moda, supermercados, deporte, farmacias, clínicas, hospitales, hoteles, automoción, comunicación corporativa, viajes, restauración e inmobiliarias.',
      'Digital signage and retail tech for fashion, supermarkets, sports, pharmacies, clinics, hospitals, hotels, automotive, corporate communication, travel, food service and real estate.'),
    L('Pensado para retail físico, en cualquier vertical', 'Built for physical retail, across verticals'),
    [['ul', sectors.map((s) => `${s.title}: ${s.tagline}`)]])

  sectors.forEach((s) => add(`/sectores/${s.slug}`, L(`${s.title}: digital signage y retail tech`, `${s.title}: digital signage and retail tech`), s.hero, s.title,
    [['p', s.tagline], ['h2', L('Casos de uso', 'Use cases')], ['ul', s.useCases], ['h2', L('Beneficios', 'Benefits')], ['ul', s.benefits.map((b) => `${b.title}: ${b.body}`)]]))

  add('/servicios', L('Servicios técnicos y niveles de servicio', 'Technical services and service levels'),
    L('Siete servicios técnicos y tres niveles de servicio sobre Lumen para digital signage, AV Pro y retail tech: un interlocutor único, compromiso de tiempo explícito y trazabilidad de cada intervención.',
      'Seven technical services and three service levels on Lumen for digital signage, AV Pro and retail tech: a single point of contact, explicit time commitment and traceability of every intervention.'),
    L('Digital signage, AV Pro y retail tech, con alguien que responde', 'Digital signage, AV Pro and retail tech, with someone who answers'),
    [['h2', L('Cómo escala una incidencia', 'How an incident escalates')], ['ul', levels.map((l) => `${l.title}. ${l.body}`)],
      ...lines.flatMap((l) => [['h2', l.title], ['ul', l.points], ['p', l.benefit]])])

  add('/lumen', L('Lumen: la plataforma de Altair Sense para retail', 'Lumen: the Altair Sense platform for retail'),
    L('Lumen es la plataforma y el cerebro matriz de Altair Sense: CRM, pedidos, facturación, inventario, ticketing de incidencias N1-N3, partes de trabajo, informes de SLA e IA para digital signage y retail tech.',
      'Lumen is the Altair Sense platform and core brain: CRM, orders, invoicing, inventory, N1-N3 incident ticketing, work orders, SLA reports and AI for digital signage and retail tech.'),
    L('La plataforma que orquesta tu retail', 'The platform that orchestrates your retail'),
    [['p', L('Lumen conecta clientes, pedidos, facturación, inventario, incidencias y mantenimiento en una sola capa, con IA gestionada con criterio. AI-ready, AI-agnostic.', 'Lumen connects clients, orders, invoicing, inventory, incidents and maintenance in a single layer, with AI managed with judgement. AI-ready, AI-agnostic.')]])

  add('/nosotros', L('Nosotros', 'About us'),
    L('Altair Sense: equipo de profesionales con experiencia en AV Pro, digital signage, retail media y DOOH, creadores de la metodología Connected Retail Strategy (CRS).',
      'Altair Sense: a team of professionals with experience in AV Pro, digital signage, retail media and DOOH, creators of the Connected Retail Strategy (CRS) methodology.'),
    L('Un equipo con experiencia en AV Pro y Digital Signage', 'A team with experience in AV Pro and Digital Signage'),
    [['p', L('Roi Iglesias es creador de la metodología Connected Retail Strategy (CRS), desarrollada en marzo de 2025. De CRS nació Altair Sense, con Lumen como plataforma y cerebro matriz al servicio del retail y otros entornos físicos.',
      'Roi Iglesias is the creator of the Connected Retail Strategy (CRS) methodology, developed in March 2025. Altair Sense was born from CRS, with Lumen as the platform and core brain serving retail and other physical environments.')]])

  add('/partners', L('Partners', 'Partners'),
    L('Ecosistema de partners tecnológicos de Altair Sense en digital signage, retail media y retail tech.', "Altair Sense's technology partner ecosystem in digital signage, retail media and retail tech."),
    L('Tecnología en la que confiamos', 'Technology we trust'),
    [['ul', ['Navori Labs', 'Visiotech', 'Hisense', 'Unilumin', 'Hikvision', 'Milesight', 'Flame Analytics']]])

  add('/contacto', L('Contacto', 'Contact'),
    L('Habla con Altair Sense sobre digital signage, retail media, control de inventario o mantenimiento para tu retail.', 'Talk to Altair Sense about digital signage, retail media, inventory control or maintenance for your retail business.'),
    L('Hablemos', "Let's talk"), [['p', 'info@altairsense.com · Calle Los Prados 166, Edificio Impulsa, Gijón, España']])

  const T = (r, k) => (lang === 'en' ? r[`${k}_en`] || r[`${k}_es`] : r[`${k}_es`])
  add('/noticias', L('Noticias', 'News'), L('Noticias de Altair Sense sobre digital signage, retail media y retail tech.', 'Altair Sense news on digital signage, retail media and retail tech.'), L('Noticias', 'News'), [['ul', news.map((n) => T(n, 'title'))]])
  add('/knowledge-base', 'Knowledge Base', L('Guías, casos de éxito y descargables de Altair Sense sobre digital signage, retail media y retail tech.', 'Altair Sense guides, case studies and downloads on digital signage, retail media and retail tech.'), 'Knowledge Base', [['ul', kb.map((a) => T(a, 'title'))]])

  news.forEach((n) => add(`/noticias/${n.slug}`, T(n, 'title'), T(n, 'excerpt') || T(n, 'title'), T(n, 'title'), [['p', T(n, 'body') || '']],
    [{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: T(n, 'title'), inLanguage: lang, datePublished: n.published_at, publisher: { '@type': 'Organization', name: 'Altair Sense' } }]))
  kb.forEach((a) => add(`/knowledge-base/${a.slug}`, T(a, 'title'), T(a, 'summary') || T(a, 'title'), T(a, 'title'), [['p', T(a, 'body') || '']],
    [{ '@context': 'https://schema.org', '@type': 'TechArticle', headline: T(a, 'title'), inLanguage: lang, description: T(a, 'summary'), publisher: { '@type': 'Organization', name: 'Altair Sense' } }]))

  return { pages, sectors, solutions }
}

function renderBlocks(blocks) {
  return blocks.map(([t, c]) => {
    if (t === 'ul') return `<ul>${c.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
    return `<${t}>${esc(c).replace(/\n/g, '<br>')}</${t}>`
  }).join('\n')
}

let count = 0
for (const lang of ['es', 'en']) {
  const { pages } = buildPages(lang)
  const nav = lang === 'en'
    ? [['/en', 'Altair Sense'], ['/en/solutions', 'Solutions'], ['/en/sectors', 'Sectors'], ['/en/services', 'Technical services'], ['/en/lumen', 'Lumen'], ['/en/contact', 'Contact']]
    : [['/', 'Altair Sense'], ['/soluciones', 'Soluciones'], ['/sectores', 'Sectores'], ['/servicios', 'Servicios técnicos'], ['/lumen', 'Lumen'], ['/contacto', 'Contacto']]
  for (const p of pages) {
    const url = SITE + (urlPath(p.path, lang) === '/' ? '/' : urlPath(p.path, lang))
    const esUrl = SITE + (p.path === '/' ? '/' : p.path)
    const enUrl = SITE + urlPath(p.path, 'en')
    const defaultTitle = lang === 'en' ? 'Altair Sense — Digital Signage, Retail Media and Retail Tech' : 'Altair Sense — Digital Signage, Retail Media y Retail Tech'
    const fullTitle = p.title ? `${p.title} · Altair Sense` : defaultTitle
    const crumbs = p.path === '/' ? [] : [{
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Altair Sense', item: SITE + (lang === 'en' ? '/en' : '/') },
        { '@type': 'ListItem', position: 2, name: p.h1, item: url }
      ]
    }]
    const ld = [...crumbs, ...p.extraLd].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n    ')
    const alt = `<link rel="alternate" hreflang="es" href="${esUrl}" />\n    <link rel="alternate" hreflang="en" href="${enUrl}" />\n    <link rel="alternate" hreflang="x-default" href="${esUrl}" />`

    let html = template
      .replace('<html lang="es">', `<html lang="${lang}">`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(p.description)}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(fullTitle)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(p.description)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
      .replace('</head>', `    <meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'es_ES'}" />\n    ${alt}\n    ${ld}\n  </head>`)
      .replace('<div id="root"></div>',
        `<div id="root"><main data-prerender style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden"><h1>${esc(p.h1)}</h1>\n${renderBlocks(p.blocks)}\n<p>${nav.map(([h, l]) => `<a href="${h}">${l}</a>`).join(' · ')}</p></main></div>`)

    const real = urlPath(p.path, lang)
    const dir = real === '/' ? DIST : join(DIST, real)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
    count++
  }
}

// llms.txt: guía para buscadores de IA (ES y EN)
const es = buildPages('es'); const en = buildPages('en')
const linksOf = (b, lang) => ({
  sol: b.solutions.map((s) => `- [${s.title}](${SITE}${urlPath('/soluciones', lang)}#${s.id}): ${s.points[0]}`).join('\n'),
  sec: b.sectors.map((s) => `- [${s.title}](${SITE}${urlPath('/sectores/' + s.slug, lang)}): ${s.tagline}`).join('\n')
})
const E = linksOf(es, 'es'); const N = linksOf(en, 'en')
const llms = `# Altair Sense

> Altair Sense emplea digital signage, data, IA y retail tech para construir experiencias relevantes que convierten, en retail y otros entornos físicos. Articula la metodología Connected Retail Strategy (CRS) y opera sobre Lumen, su plataforma y cerebro matriz. Sede: Calle Los Prados 166, Edificio Impulsa, Gijón (España). Contacto: info@altairsense.com
> English: Altair Sense uses digital signage, data, AI and retail tech to build relevant experiences that convert, in retail and other physical environments. It articulates the Connected Retail Strategy (CRS) methodology and runs on Lumen, its platform and core brain. HQ: Gijón, Spain. Every page has an English version under ${SITE}/en/

## Soluciones
${E.sol}
- [Servicios técnicos y niveles de servicio](${SITE}/servicios): siete servicios técnicos, tres niveles (N1 remoto, N2 análisis, N3 fabricante) y SLA de 4 h, 8 h, NBD y 2NBD
- [Lumen](${SITE}/lumen): plataforma de CRM, pedidos, facturación, inventario, ticketing y mantenimiento

## Sectores
${E.sec}

## Empresa
- [Nosotros](${SITE}/nosotros): equipo, metodología CRS y alianzas estratégicas
- [Partners](${SITE}/partners)
- [Contacto](${SITE}/contacto)

## Contenido
${kb.map((a) => `- [${a.title_es}](${SITE}/knowledge-base/${a.slug}): ${a.summary_es || ''}`).join('\n') || `- [Knowledge Base](${SITE}/knowledge-base)`}
${news.map((n) => `- [${n.title_es}](${SITE}/noticias/${n.slug}): ${n.excerpt_es || ''}`).join('\n')}

## English
### Solutions
${N.sol}
- [Technical services and service levels](${SITE}/en/services): seven technical services, three levels (N1 remote, N2 analysis, N3 manufacturer) and SLAs of 4 h, 8 h, NBD and 2NBD
- [Lumen](${SITE}/en/lumen): CRM, orders, invoicing, inventory, ticketing and maintenance platform

### Sectors
${N.sec}

### Company
- [About](${SITE}/en/about)
- [Partners](${SITE}/en/partners)
- [Contact](${SITE}/en/contact)

### Content
${kb.map((a) => `- [${a.title_en || a.title_es}](${SITE}/en/knowledge-base/${a.slug}): ${a.summary_en || ''}`).join('\n')}
${news.map((n) => `- [${n.title_en || n.title_es}](${SITE}/en/news/${n.slug}): ${n.excerpt_en || ''}`).join('\n')}
`
writeFileSync(join(DIST, 'llms.txt'), llms)
console.log(`prerender: ${count} páginas (ES+EN) + llms.txt`)
