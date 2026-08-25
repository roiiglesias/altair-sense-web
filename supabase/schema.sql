-- Altair Sense — esquema Supabase
-- Ejecutar en el SQL Editor del proyecto Supabase (free tier vale).

-- 1. Mensajes de contacto ---------------------------------------------------
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  phone text,
  sector text,
  message text not null,
  locale text default 'es',
  status text not null default 'nuevo' check (status in ('nuevo','contactado','descartado')),
  source text default 'web'
);

alter table contact_messages enable row level security;

-- Cualquiera puede insertar (el formulario público envía leads)
create policy "public insert contact" on contact_messages
  for insert to anon with check (true);

-- Nadie puede leer/editar desde el cliente anónimo (solo tú desde el panel de Supabase)
-- (no se crea policy de select/update para anon -> queda bloqueado por defecto)


-- 2. Noticias / News ---------------------------------------------------------
create table if not exists news_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  published_at timestamptz,
  slug text unique not null,
  title_es text not null,
  title_en text not null,
  excerpt_es text,
  excerpt_en text,
  body_es text,
  body_en text,
  cover_image_url text,
  is_published boolean not null default false
);

alter table news_posts enable row level security;

create policy "public read published news" on news_posts
  for select to anon using (is_published = true);


-- 3. Knowledge Base -----------------------------------------------------------
create table if not exists kb_articles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text unique not null,
  category text,
  title_es text not null,
  title_en text not null,
  summary_es text,
  summary_en text,
  body_es text,
  body_en text,
  is_published boolean not null default false
);

alter table kb_articles enable row level security;

create policy "public read published kb" on kb_articles
  for select to anon using (is_published = true);


-- 4. Descargables (fichas técnicas, catálogos, whitepapers...) ---------------
create table if not exists downloads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title_es text not null,
  title_en text not null,
  description_es text,
  description_en text,
  category text,           -- ej: 'ficha-tecnica', 'catalogo', 'caso-de-exito'
  file_url text not null,  -- URL pública del bucket 'downloads'
  file_size_kb int,
  is_published boolean not null default false,
  sort_order int default 0
);

alter table downloads enable row level security;

create policy "public read published downloads" on downloads
  for select to anon using (is_published = true);

-- Bucket de storage para los PDFs/descargables (crear desde el panel Storage,
-- marcarlo como público, nombre sugerido: "downloads").


-- 5. Partners (logos de partners tecnológicos) ------------------------------
create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  logo_url text not null,   -- URL pública del bucket 'partners' (o 'downloads')
  url text,                 -- web del partner, opcional
  is_published boolean not null default false,
  sort_order int default 0
);

alter table partners enable row level security;

create policy "public read published partners" on partners
  for select to anon using (is_published = true);

-- Bucket de storage para los logos de partners (crear desde el panel Storage,
-- marcarlo como público, nombre sugerido: "partners").
