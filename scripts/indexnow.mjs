// Avisa a Bing y otros buscadores (IndexNow) de todas las URL del sitemap.
// Uso, después de cada despliegue:  node scripts/indexnow.mjs
const KEY = 'e2bd9174a3a09c787f9e4c1046084920'
const HOST = 'www.nuvsense.com'
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList })
})
console.log(`IndexNow: ${urlList.length} URL enviadas, respuesta ${r.status}`)
