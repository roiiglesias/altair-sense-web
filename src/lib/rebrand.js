// Red de seguridad de marca: cualquier contenido guardado en Supabase con un nombre
// anterior (Altair Sense, Galernai) se muestra como "NUVsense".
// Los PDF viven en /downloads/nuvsense-*; los nombres antiguos (altair-sense-*) se redirigen a ellos.
// ("Altair Sense, S.L." solo se conserva en los textos legales, que viven en el código.)
export function rebrandText(text) {
  return text
    .replace(/\/downloads\/altair-sense-/g, '/downloads/nuvsense-')
    .replace(/Altair Sense(?!, S\.L\.)/g, 'NUVsense')
    .replace(/https:\/\/(www\.)?galernai\.com/g, 'https://www.nuvsense.com')
    .replace(/https:\/\/lumen\.galernai\.com/g, 'https://lumen.nuvsense.com')
    .replace(/Galernai(?!\.com)/g, 'NUVsense')
}
