// Red de seguridad de marca: cualquier contenido guardado en Supabase con un nombre
// anterior (Altair Sense, Galernai) se muestra como "NUVsense".
// Los PDF conservan su nombre de archivo (/downloads/galernai-*); los antiguos altair-sense-* apuntan a ellos.
// ("Altair Sense, S.L." solo se conserva en los textos legales, que viven en el código.)
export function rebrandText(text) {
  return text
    .replace(/\/downloads\/altair-sense-/g, '/downloads/galernai-')
    .replace(/Altair Sense(?!, S\.L\.)/g, 'NUVsense')
    .replace(/Galernai(?!\.com)/g, 'NUVsense')
}
