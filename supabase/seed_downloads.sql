-- One-pagers por sector — YA vienen con la marca Altair Sense correcta
-- listos para publicar sin revisión adicional.
-- Los PDFs están servidos como parte de la propia web, en /downloads/*.pdf
-- (carpeta public/downloads/ del proyecto) — no hace falta subirlos a
-- Supabase Storage, solo insertar la fila para que aparezcan en
-- Knowledge Base → Descargables. is_published va directo a TRUE.

insert into downloads (title_es, title_en, description_es, description_en, category, file_url, is_published, sort_order) values
  ('Altair Sense para Agencias de Viajes', 'Altair Sense for Travel Agencies', 'Soluciones digitales para agencias de viajes locales.', 'Digital solutions for local travel agencies.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-viajes.pdf', true, 1),
  ('Altair Sense para Farmacias y Health', 'Altair Sense for Pharmacies & Health', 'Soluciones digitales para farmacias, parafarmacias y centros de salud.', 'Digital solutions for pharmacies, parapharmacies and health centers.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-farma-health.pdf', true, 2),
  ('Altair Sense para Hoteles', 'Altair Sense for Hotels', 'Soluciones digitales para hoteles y mejora de la experiencia del huésped.', 'Digital solutions for hotels and improving the guest experience.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-hoteles.pdf', true, 3),
  ('Altair Sense para Moda y Fashion Retail', 'Altair Sense for Fashion Retail', 'Soluciones digitales para tiendas de moda locales.', 'Digital solutions for local fashion stores.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-moda-fashion.pdf', true, 4),
  ('Altair Sense para Restauración', 'Altair Sense for Food & Beverage', 'Soluciones digitales para cafeterías y healthy spots.', 'Digital solutions for cafés and healthy spots.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-restauracion.pdf', true, 5),
  ('Altair Sense para Sports & Apparel', 'Altair Sense for Sports & Apparel', 'Soluciones digitales para tiendas de deporte locales.', 'Digital solutions for local sports stores.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-sports.pdf', true, 6),
  ('Altair Sense para tiendas de Surf', 'Altair Sense for Surf Shops', 'Soluciones digitales para tiendas locales de surf.', 'Digital solutions for local surf shops.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-surf.pdf', true, 7),
  ('Altair Sense para Inmobiliarias', 'Altair Sense for Real Estate', 'Soluciones digitales para inmobiliarias.', 'Digital solutions for real estate agencies.', 'sector', 'https://www.altairsense.com/downloads/altair-sense-inmobiliarias.pdf', true, 8);
