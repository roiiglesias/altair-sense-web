import { Shirt, ShoppingCart, Dumbbell, Pill, Stethoscope, Cross, BedDouble, Car, Building2, Plane, UtensilsCrossed, Building } from 'lucide-react'

// pick(es, en) se pasa desde useLang() de cada página que use estos datos.
export function getSectors(pick) {
  return [
    {
      slug: 'fashion-retail',
      icon: Shirt,
      heroImage: '/sectores/fashion-retail-3.jpg',
      title: pick('Fashion Retail', 'Fashion Retail'),
      tagline: pick('Pantallas que comunican mejor cada colección', 'Screens that communicate every collection better'),
      hero: pick(
        'Escaparates con pantallas que adaptan el contenido al contexto, pantallas LED para presentar colecciones con más impacto, y retail media para campañas de temporada.',
        'Shopfronts with screens that adapt content to context, LED screens to present collections with more impact, and retail media for seasonal campaigns.'
      ),
      useCases: [
        pick('Escaparates que adaptan el contenido al contexto', 'Shopfronts that adapt content to context'),
        pick('Pantallas LED para presentar colecciones', 'LED screens to present collections'),
        pick('Retail media para campañas de temporada', 'Retail media for seasonal campaigns'),
        pick('CMS centralizado multi-tienda', 'Centralized multi-store CMS')
      ],
      benefits: [
        { title: pick('Atrae todas las miradas', 'Attract every glance'), body: pick('Un escaparate dinámico capta la atención y te diferencia del resto.', 'A dynamic shopfront captures attention and sets you apart.') },
        { title: pick('Más visitas, más ventas', 'More visits, more sales'), body: pick('Comunica mejor tus colecciones, promociones y novedades 24/7.', 'Communicate your collections, promotions and news 24/7.') },
        { title: pick('Consistencia de marca', 'Brand consistency'), body: pick('El mismo estándar visual en cada tienda, gestionado desde un único panel.', 'The same visual standard in every store, managed from a single dashboard.') }
      ]
    },
    {
      slug: 'supermercados',
      icon: ShoppingCart,
      heroImage: '/sectores/supermercados.jpg',
      title: pick('Supermercados', 'Supermarkets'),
      tagline: pick('Cada pasillo, un punto de comunicación activo', 'Every aisle, an active communication point'),
      hero: pick(
        'Sistemas de fila única para reducir la percepción de espera, cartelería digital de precios y ofertas, y retail media en el propio punto de venta.',
        'Single-queue systems to reduce perceived wait time, digital pricing and offers signage, and retail media right at the point of sale.'
      ),
      useCases: [
        pick('Sistemas de fila única para reducir la espera', 'Single-queue systems to reduce wait time'),
        pick('Cartelería digital de precios y ofertas', 'Digital pricing and offers signage'),
        pick('Retail media en punto de venta', 'Point-of-sale retail media'),
        pick('Gestión de turnos combinada con contenidos', 'Turn management combined with content')
      ],
      benefits: [
        { title: pick('Contenido siempre actual', 'Always current content'), body: pick('Precios y disponibilidad actualizados sin necesidad de imprimir nada.', 'Prices and availability updated without printing anything.') },
        { title: pick('Menos percepción de espera', 'Less perceived waiting'), body: pick('La fila única combinada con contenido relevante mejora la experiencia en caja.', 'Single-queue combined with relevant content improves the checkout experience.') },
        { title: pick('Más ticket medio', 'Higher average ticket'), body: pick('Promociona combos y productos de temporada de forma eficaz.', 'Promote combos and seasonal products effectively.') }
      ]
    },
    {
      slug: 'sports-apparel',
      icon: Dumbbell,
      heroImage: '/sectores/sports-2.jpg',
      title: pick('Sports & Apparel', 'Sports & Apparel'),
      tagline: pick('Tu escaparate, tu mejor entrenador de ventas', 'Your shopfront, your best sales coach'),
      hero: pick(
        'Muestra tu producto en acción, inspira a tu comunidad y convierte miradas en clientes con escaparates contextuales y retail media.',
        'Show your product in action, inspire your community, and turn glances into customers with contextual shopfronts and retail media.'
      ),
      useCases: [
        pick('Escaparates que adaptan el contenido al contexto', 'Shopfronts that adapt content to context'),
        pick('Pantallas LED para lanzamientos de producto', 'LED screens for product launches'),
        pick('Retail media para campañas y eventos', 'Retail media for campaigns and events'),
        pick('CMS centralizado multi-tienda', 'Centralized multi-store CMS')
      ],
      benefits: [
        { title: pick('Producto en acción', 'Product in action'), body: pick('Vídeos y fotos reales de deportistas usando lo que vendes.', 'Real photos and videos of athletes using what you sell.') },
        { title: pick('Transmite estilo de vida', 'Convey a lifestyle'), body: pick('Inspira a tu comunidad con contenido que conecta con sus pasiones.', 'Inspire your community with content that connects with their passions.') },
        { title: pick('Más visitas, más ventas', 'More visits, more sales'), body: pick('Convierte miradas en clientes y oportunidades de venta cada día.', 'Turn glances into customers and sales opportunities every day.') }
      ]
    },
    {
      slug: 'farmacias',
      icon: Pill,
      heroImage: '/sectores/farmacias-2.jpg',
      title: pick('Farmacias', 'Pharmacies'),
      tagline: pick('La salud nunca había sido tan relevante como ahora', 'Health has never mattered more'),
      hero: pick(
        'Sistemas de fila única y gestión de turnos combinados con contenido informativo, y cartelería digital de salud y bienestar.',
        'Single-queue and turn management systems combined with informational content, and digital health and wellness signage.'
      ),
      useCases: [
        pick('Gestión de turnos combinada con contenidos', 'Turn management combined with content'),
        pick('Cartelería digital de salud y bienestar', 'Digital health and wellness signage'),
        pick('Retail media para parafarmacia', 'Retail media for over-the-counter products'),
        pick('CMS centralizado multi-tienda', 'Centralized multi-store CMS')
      ],
      benefits: [
        { title: pick('Asesora e informa', 'Advise and inform'), body: pick('Educa a tus pacientes con contenido de valor sobre salud y bienestar.', 'Educate your patients with valuable health and wellness content.') },
        { title: pick('Menos percepción de espera', 'Less perceived waiting'), body: pick('Gestión de turnos con contenido relevante mientras se espera.', 'Turn management with relevant content while waiting.') },
        { title: pick('Refuerza tu valor profesional', 'Reinforce your professional value'), body: pick('Demuestra tu compromiso con la salud de tu comunidad.', "Show your commitment to your community's health.") }
      ]
    },
    {
      slug: 'clinicas',
      icon: Stethoscope,
      heroImage: null,
      title: pick('Clínicas', 'Clinics'),
      tagline: pick('Comunicación clara en cada sala de espera', 'Clear communication in every waiting room'),
      hero: pick(
        'Gestión de turnos con llamada a consulta en pantalla y contenido informativo que hace más llevadera la espera del paciente.',
        'Turn management with on-screen consultation calling and informational content that makes the patient wait more bearable.'
      ),
      useCases: [
        pick('Gestión de turnos y llamada a consulta', 'Turn management and consultation calling'),
        pick('Contenido informativo en sala de espera', 'Informational content in the waiting room'),
        pick('Cartelería digital de servicios y especialidades', 'Digital signage for services and specialties'),
        pick('CMS centralizado multi-centro', 'Centralized multi-center CMS')
      ],
      benefits: [
        { title: pick('Reduce la percepción de espera', 'Reduces perceived waiting'), body: pick('Contenido relevante mientras el paciente aguarda su turno.', 'Relevant content while the patient waits for their turn.') },
        { title: pick('Comunicación clara', 'Clear communication'), body: pick('Información de servicios y especialidades siempre visible y actualizada.', 'Service and specialty information always visible and up to date.') },
        { title: pick('Menos carga para recepción', 'Less front-desk workload'), body: pick('La pantalla resuelve preguntas frecuentes sin intervención del personal.', 'The screen answers common questions without staff intervention.') }
      ]
    },
    {
      slug: 'hospitales',
      icon: Cross,
      heroImage: null,
      title: pick('Hospitales', 'Hospitals'),
      tagline: pick('Orientación y comunicación en cada planta', 'Wayfinding and communication on every floor'),
      hero: pick(
        'Señalización digital para orientación de pacientes y visitantes, gestión de turnos en admisión, y comunicación institucional centralizada.',
        'Digital signage for patient and visitor wayfinding, admissions turn management, and centralized institutional communication.'
      ),
      useCases: [
        pick('Señalización digital de orientación', 'Digital wayfinding signage'),
        pick('Gestión de turnos en admisión', 'Admissions turn management'),
        pick('Comunicación institucional centralizada', 'Centralized institutional communication'),
        pick('CMS multi-edificio y multi-planta', 'Multi-building, multi-floor CMS')
      ],
      benefits: [
        { title: pick('Mejor orientación', 'Better wayfinding'), body: pick('Pacientes y visitantes encuentran su destino sin depender del personal.', 'Patients and visitors find their destination without relying on staff.') },
        { title: pick('Comunicación institucional coherente', 'Consistent institutional communication'), body: pick('Un único panel para actualizar mensajes en todo el hospital.', 'A single dashboard to update messaging across the whole hospital.') },
        { title: pick('Menos carga operativa', 'Less operational load'), body: pick('Automatiza avisos y turnos que hoy dependen de personal administrativo.', 'Automate notices and queues that today depend on administrative staff.') }
      ]
    },
    {
      slug: 'hoteles',
      icon: BedDouble,
      heroImage: '/sectores/hoteles-2.jpg',
      title: pick('Hoteles', 'Hotels'),
      tagline: pick('Comunica. Inspira. Mejora cada estancia.', 'Communicate. Inspire. Improve every stay.'),
      hero: pick(
        'Pantalla LED en recepción para dar la bienvenida desde el primer momento, y tótem interactivo en áreas comunes para inspirar y generar más ingresos.',
        'LED screen at reception to welcome guests from the first moment, and an interactive kiosk in common areas to inspire and generate more revenue.'
      ),
      useCases: [
        pick('Pantalla LED en recepción', 'LED screen at reception'),
        pick('Tótem interactivo en áreas comunes', 'Interactive kiosk in common areas'),
        pick('Promoción de servicios y upsells', 'Service and upsell promotion'),
        pick('CMS centralizado multi-hotel', 'Centralized multi-hotel CMS')
      ],
      benefits: [
        { title: pick('Mejora la experiencia del huésped', 'Improves guest experience'), body: pick('Información útil y atractiva en el momento adecuado.', 'Useful, attractive information at the right moment.') },
        { title: pick('Aumenta ingresos adicionales', 'Increases ancillary revenue'), body: pick('Promociona servicios, upsells y experiencias del hotel.', 'Promote hotel services, upsells and experiences.') },
        { title: pick('Refuerza tu marca', 'Reinforces your brand'), body: pick('Proyecta una imagen innovadora y de calidad desde el check-in.', 'Projects an innovative, quality image from check-in.') }
      ]
    },
    {
      slug: 'automocion',
      icon: Car,
      heroImage: '/sectores/automocion.jpg',
      title: pick('Automoción', 'Automotive'),
      tagline: pick('Concesionarios que comunican mejor cada modelo', 'Dealerships that communicate every model better'),
      hero: pick(
        'Pantallas que muestran stock y configuraciones de vehículo en tiempo real, y retail media para campañas de modelo y financiación.',
        'Screens showing real-time vehicle stock and configurations, and retail media for model and financing campaigns.'
      ),
      useCases: [
        pick('Pantallas de stock y configuración en tiempo real', 'Real-time stock and configuration screens'),
        pick('Retail media para campañas de modelo y financiación', 'Retail media for model and financing campaigns'),
        pick('CMS multi-concesionario', 'Multi-dealership CMS'),
        pick('Cartelería digital en sala de exposición', 'Digital signage in the showroom')
      ],
      benefits: [
        { title: pick('Showroom siempre actualizado', 'Always up-to-date showroom'), body: pick('Precios, stock y promociones al instante, sin imprimir nada.', 'Prices, stock and promotions instantly, without printing anything.') },
        { title: pick('Más consultas cualificadas', 'More qualified inquiries'), body: pick('Contenido que ayuda al cliente a decidir antes de hablar con ventas.', 'Content that helps the customer decide before talking to sales.') },
        { title: pick('Consistencia entre concesionarios', 'Consistency across dealerships'), body: pick('El mismo estándar de comunicación en toda la red.', 'The same communication standard across the whole network.') }
      ]
    },
    {
      slug: 'comunicacion-corporativa',
      icon: Building2,
      heroImage: null,
      title: pick('Comunicación Corporativa', 'Corporate Communication'),
      tagline: pick('Cartelería digital para comunicar mejor hacia dentro', 'Digital signage to communicate better internally'),
      hero: pick(
        'Cartelería digital y otras soluciones para la comunicación corporativa e interna de empresas e industrias que necesitan transmitir más mensajes a sus empleados, en oficinas, plantas y centros de trabajo.',
        'Digital signage and other solutions for corporate and internal communication in companies and industries that need to deliver more messages to their employees, across offices, plants and workplaces.'
      ),
      useCases: [
        pick('Pantallas de comunicación interna en oficinas y plantas', 'Internal communication screens in offices and plants'),
        pick('Indicadores y KPIs en tiempo real para equipos', 'Real-time indicators and KPIs for teams'),
        pick('Comunicación de seguridad y cumplimiento normativo', 'Safety and compliance communication'),
        pick('CMS multi-sede para comunicación corporativa coherente', 'Multi-site CMS for consistent corporate communication')
      ],
      benefits: [
        { title: pick('Llega a todo el equipo', 'Reaches the whole team'), body: pick('Mensajes visibles incluso para empleados sin acceso a email o intranet.', 'Messages visible even for employees without email or intranet access.') },
        { title: pick('Comunicación coherente', 'Consistent communication'), body: pick('El mismo mensaje, actualizado a la vez, en todas las sedes o plantas.', 'The same message, updated at once, across every site or plant.') },
        { title: pick('Refuerza cultura y seguridad', 'Reinforces culture and safety'), body: pick('Espacio permanente para valores de empresa, reconocimientos y avisos críticos.', 'A permanent space for company values, recognition and critical notices.') }
      ]
    },
    {
      slug: 'viajes',
      icon: Plane,
      heroImage: '/sectores/viajes-nuevo.jpg',
      title: pick('Agencias de Viajes', 'Travel Agencies'),
      tagline: pick('Tu próxima aventura empieza aquí', 'Your next adventure starts here'),
      hero: pick(
        'Inspira, informa y convierte miradas en viajes reservados desde el propio escaparate de la agencia, con destinos en imagen y vídeo y precios siempre actualizados.',
        'Inspire, inform, and turn glances into booked trips right from the agency shopfront, with destinations in image and video and always up-to-date prices.'
      ),
      useCases: [
        pick('Destinos en imagen y vídeo', 'Destinations in image and video'),
        pick('Información clara y actualizada de ofertas y precios', 'Clear, up-to-date offer and price information'),
        pick('Pantallas 9:16 de alta luminosidad', 'High-brightness 9:16 screens'),
        pick('Actualización instantánea con IA', 'Instant AI-powered updates')
      ],
      benefits: [
        { title: pick('Destinos en imagen y vídeo', 'Destinations in image and video'), body: pick('Contenido visual que inspira deseos y despierta emociones.', 'Visual content that sparks desire and emotion.') },
        { title: pick('Asesoramiento profesional', 'Professional advice'), body: pick('Tus expertos ayudan a elegir el viaje perfecto, en el propio escaparate.', 'Your experts help travelers choose the perfect trip, right at the shopfront.') },
        { title: pick('Más visibilidad, más reservas', 'More visibility, more bookings'), body: pick('Convierte miradas en clientes y clientes en viajeros.', 'Turn glances into customers and customers into travelers.') }
      ]
    },
    {
      slug: 'restauracion',
      icon: UtensilsCrossed,
      heroImage: '/sectores/restauracion.jpg',
      title: pick('Restauración', 'Food & Beverage'),
      tagline: pick('Menú board que entra por los ojos', 'A menu board that catches the eye'),
      hero: pick(
        'Comunica de forma apetecible, contextual y dinámica. Aumenta el ticket medio y convierte más visitas en ventas, con contenido que se adapta a la temporada, el clima y el momento del día.',
        'Communicate in an appetizing, contextual and dynamic way. Increase average ticket and turn more visits into sales, with content that adapts to season, weather and time of day.'
      ),
      useCases: [
        pick('Menú board contextual: temporada, clima, momento del día', 'Contextual menu board: season, weather, time of day'),
        pick('Promociones y combos dinámicos', 'Dynamic promotions and combos'),
        pick('Contenido alineado con el estilo de vida de la marca', "Content aligned with the brand's lifestyle"),
        pick('Actualización instantánea con IA', 'Instant AI-powered updates')
      ],
      benefits: [
        { title: pick('Mejor experiencia de cliente', 'Better customer experience'), body: pick('Menús más claros, visuales y apetecibles que facilitan la elección.', 'Clearer, more visual, more appetizing menus that make choosing easier.') },
        { title: pick('Más ventas, más rentabilidad', 'More sales, more profitability'), body: pick('Sube el ticket medio promocionando productos y combos de forma eficaz.', 'Raise the average ticket by promoting products and combos effectively.') },
        { title: pick('Actual y relevante siempre', 'Always current and relevant'), body: pick('Contenido al día, sin imprimir nada, con menos coste operativo.', 'Up-to-date content, nothing to print, lower operating cost.') }
      ]
    },
    {
      slug: 'inmobiliarias',
      icon: Building,
      heroImage: '/sectores/inmobiliarias.jpg',
      title: pick('Inmobiliarias', 'Real Estate'),
      tagline: pick('Comunicación que capta todas las miradas', 'Communication that catches every glance'),
      hero: pick(
        'Vende y alquila tus inmuebles con pantallas profesionales y escaparates digitales gestionados de principio a fin, para que tu oficina reciba más visitas cada día.',
        'Sell and rent your properties with professional screens and digital shopfronts managed end to end, so your office gets more visits every day.'
      ),
      useCases: [
        pick('Escaparates digitales de propiedades', 'Digital property shopfronts'),
        pick('Gestión remota de precios y fichas', 'Remote management of prices and listings'),
        pick('Promoción de inmuebles 24/7', '24/7 property promotion'),
        pick('Programación de contenido con IA', 'AI-powered content scheduling')
      ],
      benefits: [
        { title: pick('Atrae más clientes', 'Attracts more clients'), body: pick('Capta la atención de quien pasa y genera más visitas a la oficina.', 'Captures the attention of passers-by and generates more office visits.') },
        { title: pick('Promociona 24/7', 'Promotes 24/7'), body: pick('Tus mejores propiedades visibles día y noche, sin depender de personal.', 'Your best properties visible day and night, without depending on staff.') },
        { title: pick('Gestión centralizada', 'Centralized management'), body: pick('Actualiza precios y fichas de todas las oficinas desde un solo lugar.', 'Update prices and listings across every office from one place.') }
      ]
    }
  ]
}
