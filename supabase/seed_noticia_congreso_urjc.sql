-- Noticia: Galernai en el III Congreso URJC (20 nov 2026). Ejecutar en el editor SQL de Supabase.
insert into news_posts (slug, published_at, title_es, title_en, excerpt_es, excerpt_en, body_es, body_en, is_published)
values (
  'galernai-congreso-moda-cosmetica-belleza-retail-urjc',
  '2026-10-19T12:00:00+02:00',
  'Galernai participa en el III Congreso Internacional de Moda, Cosmética, Belleza y Retail',
  'Galernai takes part in the III International Congress on Fashion, Cosmetics, Beauty and Retail',
  'Roi Iglesias, CEO de Galernai y miembro del Comité de Expertos de la AER, intervendrá el 20 de noviembre en la mesa «Retail 2028: de la hoja de ruta a la acción», del congreso de la Universidad Rey Juan Carlos.',
  'Roi Iglesias, CEO of Galernai and member of AER''s Expert Committee, will speak on 20 November in the session “Retail 2028: from roadmap to action” at the Rey Juan Carlos University congress.',
  'El 20 de noviembre de 2026 se celebra el III Congreso Internacional sobre Propiedad Industrial y Publicidad en el sector de Moda y Cosmética, organizado por la Universidad Rey Juan Carlos junto con la Asociación de Expertos en Derecho de la Moda. Será online, en horario de Madrid, y Galernai estará presente.

Roi Iglesias, CEO de Galernai y miembro del Comité de Expertos de la Asociación Española de Retail (AER), participará en la Mesa 3, «Retail 2028: de la hoja de ruta a la acción», de 15:15 a 16:45 h. La mesa está moderada por Domingos Esteves, coordinador del Comité de Expertos de la AER, y comparte cartel con Mónica San José (Retail es Cool), Mar Melero (Virtual Atelier AI) y Pablo Gutiérrez Merelles.

Roi aportará su visión sobre los retos actuales del retail y sobre cómo afrontarlos desde la tienda: qué hay que tener resuelto antes de añadir tecnología y cómo conectar pantallas, datos y operación para que cada pieza responda a un objetivo medible, que es la base de la metodología Connected Retail Strategy (CRS).

Parte de ese contenido se puede leer antes de la sesión en el paper del Comité de Expertos de la AER, «Hoja de ruta para el retail actual que quiere triunfar en 2028», publicado en julio de 2026 y disponible en versión completa, resumen ejecutivo y one pager:
https://www.asociacion-retail.com/comite-de-expertos-aer-presenta-claves-para-competir-en-retail-2028/

Información del congreso e inscripción:
https://eventos.urjc.es/159585/detail/iii-congreso-internacional-sobre-propiedad-industrial-y-publicidad-en-el-sector-de-moda-y-cosmetica.html',
  'On 20 November 2026 Rey Juan Carlos University and the Fashion Law Experts Association hold the III International Congress on Industrial Property and Advertising in the Fashion and Cosmetics sector. It is an online event on Madrid time, and Galernai will be there.

Roi Iglesias, CEO of Galernai and a member of the Spanish Retail Association (AER) Expert Committee, will speak in Session 3, “Retail 2028: from roadmap to action”, from 15:15 to 16:45 (Madrid). The session is moderated by Domingos Esteves, coordinator of AER''s Expert Committee, and Roi shares the panel with Mónica San José (Retail es Cool), Mar Melero (Virtual Atelier AI) and Pablo Gutiérrez Merelles.

Roi will share his view on the retail challenges of today and how to face them from the store: what has to be in place before adding technology, and how to connect screens, data and operations so that every piece answers to a measurable goal, which is the basis of the Connected Retail Strategy (CRS) methodology.

Part of that content can be read before the session in the AER Expert Committee paper, “Roadmap for today''s retailer that wants to win in 2028” (in Spanish), published in July 2026 and available as a full paper, an executive summary and a one-pager:
https://www.asociacion-retail.com/comite-de-expertos-aer-presenta-claves-para-competir-en-retail-2028/

Congress information and registration:
https://eventos.urjc.es/159585/detail/iii-congreso-internacional-sobre-propiedad-industrial-y-publicidad-en-el-sector-de-moda-y-cosmetica.html',
  true
)
on conflict (slug) do update set title_es=excluded.title_es, title_en=excluded.title_en, excerpt_es=excluded.excerpt_es, excerpt_en=excluded.excerpt_en, body_es=excluded.body_es, body_en=excluded.body_en, is_published=true;
