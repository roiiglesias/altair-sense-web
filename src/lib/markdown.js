// Markdown mínimo para los textos de Knowledge Base y Noticias que viven en Supabase.
// Lo usan la página del artículo (React) y el prerender (Node), así el HTML que ven
// buscadores e IAs es el mismo que ve el lector. Primero escapa todo el texto y solo
// después genera etiquetas conocidas: no se puede colar HTML desde la base de datos.
// Admite: ## y ### títulos, párrafos, listas (- / 1.), tablas con |, **negrita**,
// *cursiva* y enlaces [texto](https://... o /ruta).

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

export function markdownToHtml(md = '') {
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
  return out.join('\n')
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
