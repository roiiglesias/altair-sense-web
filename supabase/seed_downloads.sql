-- One-pagers por sector — YA vienen con la marca NUVsense correcta
-- listos para publicar sin revisión adicional.
-- Los PDFs están servidos como parte de la propia web, en /downloads/*.pdf
-- (carpeta public/downloads/ del proyecto) — no hace falta subirlos a
-- Supabase Storage, solo insertar la fila para que aparezcan en
-- Knowledge Base → Descargables. is_published va directo a TRUE.

insert into downloads (title_es, title_en, description_es, description_en, category, file_url, is_published, sort_order) values
  ('NUVsense para Agencias de Viajes', 'NUVsense for Travel Agencies', 'Soluciones digitales para agencias de viajes locales.', 'Digital solutions for local travel agencies.', 'sector', 'https://galernai.com/downloads/nuvsense-viajes.pdf', true, 1),
  ('NUVsense para Farmacias y Health', 'NUVsense for Pharmacies & Health', 'Soluciones digitales para farmacias, parafarmacias y centros de salud.', 'Digital solutions for pharmacies, parapharmacies and health centers.', 'sector', 'https://galernai.com/downloads/nuvsense-farma-health.pdf', true, 2),
  ('NUVsense para Hoteles', 'NUVsense for Hotels', 'Soluciones digitales para hoteles y mejora de la experiencia del huésped.', 'Digital solutions for hotels and improving the guest experience.', 'sector', 'https://galernai.com/downloads/nuvsense-hoteles.pdf', true, 3),
  ('NUVsense para Moda y Fashion Retail', 'NUVsense for Fashion Retail', 'Soluciones digitales para tiendas de moda locales.', 'Digital solutions for local fashion stores.', 'sector', 'https://galernai.com/downloads/nuvsense-moda-fashion.pdf', true, 4),
  ('NUVsense para Restauración', 'NUVsense for Food & Beverage', 'Soluciones digitales para cafeterías y healthy spots.', 'Digital solutions for cafés and healthy spots.', 'sector', 'https://galernai.com/downloads/nuvsense-restauracion.pdf', true, 5),
  ('NUVsense para Sports & Apparel', 'NUVsense for Sports & Apparel', 'Soluciones digitales para tiendas de deporte locales.', 'Digital solutions for local sports stores.', 'sector', 'https://galernai.com/downloads/nuvsense-sports.pdf', true, 6),
  ('NUVsense para tiendas de Surf', 'NUVsense for Surf Shops', 'Soluciones digitales para tiendas locales de surf.', 'Digital solutions for local surf shops.', 'sector', 'https://galernai.com/downloads/nuvsense-surf.pdf', true, 7),
  ('NUVsense para Inmobiliarias', 'NUVsense for Real Estate', 'Soluciones digitales para inmobiliarias.', 'Digital solutions for real estate agencies.', 'sector', 'https://galernai.com/downloads/nuvsense-inmobiliarias.pdf', true, 8);
