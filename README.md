# Altair Sense — Web corporativa

React + Vite + Tailwind (CDN) + Supabase. Mismo stack que Lumen.

Páginas: Inicio, Soluciones, Sectores (+ 6 fichas de sector: Moda, Deportes,
Supermercados, Health, Viajes, Centros deportivos), Noticias, Knowledge Base
(con Descargables), Partners, Nosotros, Contacto. Bilingüe ES/EN con selector
en el header (recuerda el idioma en el navegador). Logos: PNG oficiales del
manual gráfico, en `public/brand/`.

---

## 1. Desarrollo local

```bash
npm install
cp .env.example .env.local   # y rellena las claves de Supabase (paso 2)
npm run dev
```

Sin `.env.local`, la web funciona igual mostrando estados "sin contenido"
en Noticias/KB/Descargables y simulando el envío del formulario (no llega
a ningún sitio) — útil para revisar diseño sin tener Supabase montado.

---

## 2. Supabase (base de datos + formulario de contacto)

1. Crea un proyecto en supabase.com (free tier vale de sobra para esto).
2. Ve a **SQL Editor** y ejecuta el contenido de `supabase/schema.sql`
   (crea las tablas `contact_messages`, `news_posts`, `kb_articles`,
   `downloads` con RLS activado — el público solo puede leer contenido
   publicado y enviar el formulario, nunca leer los mensajes de contacto).
3. Ve a **Storage** → crea un bucket llamado `downloads`, márcalo como
   **público**. Ahí subes los PDFs (fichas técnicas, catálogos...) y
   copias la URL pública en el campo `file_url` de la tabla `downloads`.
4. Ve a **Project Settings → API** y copia:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public key` → `VITE_SUPABASE_ANON_KEY`

### Cómo publicar contenido (sin tocar código)

Desde el **Table Editor** de Supabase, insertando filas:

- **`news_posts`**: rellena `title_es`, `title_en`, `body_es`, `body_en`,
  `slug` (ej. `nuevo-piloto-en-madrid`), pon `is_published = true` y
  `published_at` con la fecha. Aparece al instante en `/noticias`.
- **`kb_articles`**: igual, con `category` (ej. "Instalación") y aparece
  en `/knowledge-base`.
- **`downloads`**: sube el PDF al bucket `downloads`, pega su URL pública
  en `file_url`, rellena títulos/descripción y márcalo publicado.
- **`contact_messages`**: aquí llegan los leads del formulario. Consúltalos
  desde el Table Editor o conecta el proyecto a un Zapier/Make si quieres
  notificaciones automáticas por email/Slack.
- **`partners`**: sube el logo al bucket `partners`, pega su URL pública en
  `logo_url`, añade `name` y opcionalmente `url`, márcalo publicado. Aparece
  en `/partners`.

Nada de esto requiere volver a desplegar la web.

---

## 3. Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub (nuevo repo, ej.
   `altair-sense-web`).
2. En vercel.com → **Add New Project** → importa el repositorio.
   Vercel detecta Vite automáticamente (build command `vite build`,
   output `dist`).
3. En **Environment Variables**, añade `VITE_SUPABASE_URL` y
   `VITE_SUPABASE_ANON_KEY` con los mismos valores que en tu `.env.local`.
4. Deploy. En 1-2 minutos tienes una URL `algo.vercel.app` funcionando.

`vercel.json` ya incluye el rewrite necesario para que las rutas internas
(`/noticias/mi-articulo`, etc.) funcionen al recargar o compartir el enlace
directo.

---

## 4. Dominio propio (altairsense.com o el que elijáis)

**Opción A — comprarlo desde Vercel (más simple):**
En el proyecto → **Settings → Domains** → escribe el dominio deseado →
cómpralo ahí mismo. Vercel configura los nameservers automáticamente:
no hay que tocar DNS en ningún otro sitio, y las renovaciones (dominio +
certificado SSL) se gestionan solas desde ese mismo panel.

**Opción B — comprarlo en un registrador externo** (Namecheap, IONOS,
OVH...) y luego en Vercel → Settings → Domains → "Add" → introduces el
dominio y te da los registros DNS (A/CNAME o nameservers) que debes
copiar al panel del registrador. Tarda hasta 24-48h en propagar. Suele
ser algo más barato en la renovación, a cambio de un paso manual extra.

Cualquiera de las dos es válida; con la A no tienes que volver a entrar
en otro panel nunca más.

---

## 5. Identidad visual aplicada

Colores extraídos del manual gráfico (`Altair_Sense_Manual_Grafico_DEF.pdf`):

| Token       | Hex       | Uso                                      |
|-------------|-----------|-------------------------------------------|
| `as-black`  | `#10150F` | Fondo principal / texto (verde negro)     |
| `as-lime`   | `#B4E33D` | Marca — solo sobre fondo oscuro           |
| `as-moss`   | `#4C7A3E` | Lima traducido a fondo claro              |
| `as-cream`  | `#F2F1E8` | Fondo claro (nunca blanco puro)           |

Tipografía: **Nunito Sans 800** solo en el logo y titulares de portada;
**Inter** para todo el resto (según regla del manual, sección 06).

El logo (`src/components/Logo.jsx`) implementa las 4 variantes descritas
en el manual (onDark, onLight, mono, negative) y respeta el área de
respeto y el tamaño mínimo.

---

## 6. Estructura del proyecto

```
src/
  components/   Header, Footer, Logo, Bits (Eyebrow/PulseDot/Divider)
  i18n/         LanguageContext (ES/EN)
  lib/          router.jsx (rutas), supabaseClient.js
  pages/        Home, Soluciones, Sectores, AcercaDe, Contacto,
                Noticias(+Detalle), KnowledgeBase(+Articulo), NotFound
supabase/
  schema.sql    Tablas + políticas RLS
```

---

---

## 7. SEO y GEO (posicionamiento en buscadores y motores de IA)

**Aviso importante de arquitectura:** esta web es una SPA (React + Vite). El
HTML inicial va casi vacío; el contenido lo pinta JavaScript. Google indexa
esto razonablemente bien porque ejecuta JS, pero **muchos rastreadores de
motores de IA (los que alimentan ChatGPT Search, Perplexity, etc.) y las
previews de redes sociales NO ejecutan JavaScript**, así que no ven el título,
descripción ni imagen que genera el componente `Seo` dinámicamente.

Lo que sí está cubierto con la arquitectura actual:
- **Meta tags dinámicos por página** (`src/components/Seo.jsx`): título,
  descripción, Open Graph, Twitter Card, canonical — Google los ve.
- **JSON-LD estructurado**: Organization (global, en `index.html`, visible
  sin JS), Service + FAQPage en Soluciones, BreadcrumbList en cada sector,
  Article/TechArticle en Noticias y Knowledge Base.
- **`robots.txt`** permitiendo explícitamente crawlers de IA (GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended...) además de los tradicionales.
- **Sitemap dinámico** en `/sitemap.xml` (función serverless en
  `api/sitemap.js`) que incluye automáticamente las noticias y artículos de
  Knowledge Base publicados en Supabase, sin tocar código al añadir contenido.
- **Copy orientado a resultado** en Soluciones y Home cubriendo: digital
  signage, retail media, retail tech, cartelería digital, CMS de gestión de
  contenidos, control de inventario y stock, mantenimiento correctivo,
  predictivo y preventivo — con foco en ventas, CX y adaptación por
  geografía/audiencia.

**Pendiente si se quiere el máximo nivel (fase 2, cambio de arquitectura):**
migrar a prerendering/SSR (por ejemplo con `vite-plugin-ssg` o pasar a
Next.js) para que cada URL sirva HTML ya completo sin depender de que el
rastreador ejecute JavaScript. Esto beneficiaría especialmente a GEO (motores
de IA) y a las previews de redes sociales. No lo he hecho en esta pasada
porque implica reestructurar el proyecto (rutas basadas en ficheros, build
distinto) y quería evitar otro cambio grande justo después de resolver los
problemas de despliegue.

También pendiente: **hreflang real** — ahora mismo ES/EN es un toggle dentro
de la misma URL (`/soluciones` sirve ambos idiomas según el navegador), lo
cual no es óptimo para SEO internacional. Lo correcto sería `/es/soluciones`
y `/en/solutions` como URLs distintas indexables por separado. Es un cambio
de routing más grande — decimos si lo abordamos cuando el resto esté estable.

---

## 8. Web publicada en la raíz

La web completa se sirve en `altairsense.com/`. Las URLs antiguas `/hide/...`
redirigen automáticamente a la raíz. `robots.txt` permite indexar todo y el
sitemap (`/sitemap.xml`) incluye páginas, sectores, noticias y KB publicados.

- **Acceso a Lumen**: botón siempre visible en la cabecera (escritorio y móvil)
  y en el pie. La URL está en `src/lib/links.js` (`LUMEN_URL`).
- **Contacto fácil**: botón flotante "Hablemos" en todas las páginas, formulario
  rápido (nombre, email, mensaje), banda de contacto antes del pie y botón en
  cabecera/pie. Guarda en Supabase (`source` indica la página de origen) y avisa
  por email.

---

## Pendiente de tu confirmación

- Teléfono de contacto real (ahora mismo placeholder: `+34 900 000 000`).
- Logos reales de los 7 partners (Navori Labs, Visiotech, Hisense, Unilumin,
  Hikvision, Milesight, Flame Analytics) — de momento se muestran como
  wordmark tipográfico en `/partners`. En cuanto tengas cada logo oficial,
  súbelo al bucket `partners` de Supabase, actualiza
  `supabase/seed_partners.sql` con la URL real y márcalo `is_published =
  true` — en ese momento sustituye automáticamente al wordmark.
- Fotos para Clínicas, Hospitales y Comunicación Corporativa (sin imagen
  propia por ahora; Fashion Retail, Sports & Apparel, Supermercados,
  Farmacias, Hoteles y Automoción ya tienen foto).
- Contenido inicial de Noticias/Knowledge Base (incluidos los Casos de
  éxito, categoría `caso-exito` en `kb_articles`) y Descargables — la web
  funciona vacía hasta que insertes las primeras filas en Supabase.
- Confirmar la URL del portal de Lumen (`src/lib/links.js`, constante `LUMEN_URL`).
