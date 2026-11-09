// Markdown mínimo para los textos de Knowledge Base y Noticias que viven en Supabase.
// Lo usan la página del artículo (React) y el prerender (Node), así el HTML que ven
// buscadores e IAs es el mismo que ve el lector. Primero escapa todo el texto y solo
// después genera etiquetas conocidas: no se puede colar HTML desde la base de datos.
// Admite: ## y ### títulos, párrafos, listas (- / 1.), tablas con |, **negrita**,
// *cursiva* y enlaces [texto](https://... o /ruta).

import { buildUrl } from './urls.js'

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function inline(text) {
  let s = esc(text)
  s = s.replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g, (_, label, href) => {
    const ext = href.startsWith('http')
    return `<a href="${href}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`
  })
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
  return s
}

const cells = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
const isSeparator = (line) => /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line.trim())

// Slug estable para anclas de los títulos
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}


// Enlaces internos contextuales: enlaza la PRIMERA aparición de cada término clave en el
// cuerpo (nunca en títulos, tablas ni dentro de otro enlace) y no enlaza un artículo a sí mismo.
const AUTOLINKS = {
  es: [
    [/\bConnected Retail Strategy\b/i, '/knowledge-base/que-es-connected-retail-strategy'],
    [/\bretail media\b/i, '/knowledge-base/retail-media-en-tienda-fisica-que-demostrar'],
    [/\bLumen\b/, '/lumen'],
    [/\bSLA\b/, '/servicios'],
    [/\b(?:cl[ií]nicas|parafarmacia)\b/i, '/knowledge-base/carteleria-digital-salud-clinicas-parafarmacia-perfumeria'],
    [/diagn[oó]stico de tienda/i, '/contacto']
  ],
  en: [
    [/\bConnected Retail Strategy\b/i, '/knowledge-base/que-es-connected-retail-strategy'],
    [/\b(?:in-store )?retail media\b/i, '/knowledge-base/retail-media-en-tienda-fisica-que-demostrar'],
    [/\bLumen\b/, '/lumen'],
    [/\bSLAs?\b/, '/servicios'],
    [/\b(?:clinics|parapharmacy)\b/i, '/knowledge-base/carteleria-digital-salud-clinicas-parafarmacia-perfumeria'],
    [/store diagnos(?:tic|is)/i, '/contacto']
  ]
}

function autolink(html, lang, selfSlug) {
  const rules = (AUTOLINKS[lang] || AUTOLINKS.es)
    .filter(([, logical]) => !selfSlug || logical !== `/knowledge-base/${selfSlug}`)
    .map(([re, logical]) => ({ re, href: buildUrl(logical, lang), used: false }))
  let skip = 0
  return html.split(/(<[^>]+>)/).map((part) => {
    if (part.startsWith('<')) {
      if (/^<(a|h[1-6]|th|code)[\s>]/i.test(part)) skip += 1
      else if (/^<\/(a|h[1-6]|th|code)>/i.test(part)) skip -= 1
      return part
    }
    if (skip > 0 || !part.trim()) return part
    let out = ''
    let rest = part
    for (;;) {
      let best = null
      for (const r of rules) {
        if (r.used) continue
        const m = r.re.exec(rest)
        if (m && (!best || m.index < best.m.index)) best = { r, m }
      }
      if (!best) break
      best.r.used = true
      out += `${rest.slice(0, best.m.index)}<a href="${best.r.href}">${best.m[0]}</a>`
      rest = rest.slice(best.m.index + best.m[0].length)
    }
    return out + rest
  }).join('')
}

// opts.lang activa los enlaces internos contextuales; opts.selfSlug evita autoenlazar el propio artículo.
export function markdownToHtml(md = '', opts = {}) {
  const lines = String(md || '').replace(/\r\n?/g, '\n').split('\n')
  const out = []
  let para = []
  const flush = () => {
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`)
    para = []
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const t = line.trim()

    if (!t) { flush(); continue }

    const h = t.match(/^(#{2,4})\s+(.*)$/)
    if (h) {
      flush()
      const level = Math.min(h[1].length, 4)
      out.push(`<h${level} id="${slugify(h[2])}">${inline(h[2])}</h${level}>`)
      continue
    }
    if (/^#\s+/.test(t)) { flush(); continue } // el H1 lo pone la página

    // Tabla: fila de cabecera + separador
    if (t.startsWith('|') && i + 1 < lines.length && isSeparator(lines[i + 1])) {
      flush()
      const head = cells(t)
      i += 1
      const rows = []
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('|')) {
        i += 1
        rows.push(cells(lines[i]))
      }
      out.push(
        `<div class="md-table"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>` +
        `<tbody>${rows.map((r) => `<tr>${head.map((_, k) => `<td>${inline(r[k] || '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
      )
      continue
    }

    // Listas
    const ul = t.match(/^[-*]\s+(.*)$/)
    const ol = t.match(/^\d+[.)]\s+(.*)$/)
    if (ul || ol) {
      flush()
      const tag = ul ? 'ul' : 'ol'
      const re = ul ? /^[-*]\s+(.*)$/ : /^\d+[.)]\s+(.*)$/
      const items = [(ul || ol)[1]]
      while (i + 1 < lines.length && re.test(lines[i + 1].trim())) {
        i += 1
        items.push(lines[i].trim().match(re)[1])
      }
      out.push(`<${tag}>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</${tag}>`)
      continue
    }

    para.push(t)
  }
  flush()
  const html = out.join('\n')
  return opts.lang ? autolink(html, opts.lang, opts.selfSlug) : html
}

// Texto plano (para descripciones, JSON-LD o recuentos de palabras)
export function markdownToText(md = '') {
  return String(md || '')
    .replace(/^#+\s+/gm, '')
    .replace(/^\|?\s*:?-{2,}.*$/gm, '')
    .replace(/\|/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*?([^*]+)\*\*?/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

export function readingMinutes(md = '') {
  const words = markdownToText(md).split(' ').filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}


// Extrae pares pregunta/respuesta de la sección "Preguntas frecuentes" / "Frequently asked questions"
// (## título de sección y ### cada pregunta). Sirve para el JSON-LD FAQPage.
export function extractFaq(md = '') {
  const text = String(md || '').replace(/\r\n?/g, '\n')
  const m = text.match(/^##\s+(?:Preguntas frecuentes|Frequently asked questions)\s*$/im)
  if (!m) return []
  const rest = text.slice(m.index + m[0].length).split(/^##\s+(?!#)/m)[0]
  const parts = rest.split(/^###\s+/m).slice(1)
  return parts
    .map((part) => {
      const [q, ...body] = part.split('\n')
      const a = body.join(' ').replace(/\s+/g, ' ').replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim()
      return { q: q.replace(/[*_`]/g, '').trim(), a }
    })
    .filter((f) => f.q && f.a)
}
