-- Partners iniciales de Altair Sense.
-- IMPORTANTE: is_published se deja en FALSE a propósito. Cuando subas el logo
-- real de cada partner al bucket de Storage "partners" y pegues su URL en
-- logo_url, cambia esa fila a is_published = true (o hazlo todo a la vez con
-- el UPDATE de ejemplo al final). Mientras tanto no aparecen en la web.

insert into partners (name, logo_url, url, is_published, sort_order) values
  ('ZK Digimax',        'PENDIENTE_URL_LOGO', null, false, 1),
  ('Visiotech',         'PENDIENTE_URL_LOGO', null, false, 2),
  ('Hisense',           'PENDIENTE_URL_LOGO', null, false, 3),
  ('Unilumin',          'PENDIENTE_URL_LOGO', null, false, 4),
  ('Hikvision',         'PENDIENTE_URL_LOGO', null, false, 5),
  ('Milesight',         'PENDIENTE_URL_LOGO', null, false, 6),
  ('Flame Analytics',   'PENDIENTE_URL_LOGO', null, false, 7);

-- Cuando tengas los 7 logos subidos y las URLs actualizadas en cada fila,
-- puedes publicarlos todos a la vez con:
-- update partners set is_published = true where logo_url != 'PENDIENTE_URL_LOGO';
