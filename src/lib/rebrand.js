// Red de seguridad de marca: cualquier contenido guardado en Supabase con el nombre
// antiguo se muestra como "Galernai" y los PDF apuntan a los archivos renombrados.
// ("Altair Sense, S.L." solo se conserva en los textos legales, que viven en el código.)
export function rebrandText(text) {
  return text
    .replace(/\/downloads\/altair-sense-/g, '/downloads/galernai-')
    .replace(/Altair Sense(?!, S\.L\.)/g, 'Galernai')
}
