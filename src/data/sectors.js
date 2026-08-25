import { Shirt, Dumbbell, ShoppingCart, HeartPulse, Plane, Trophy } from 'lucide-react'

// pick(es, en) is the same helper exposed by useLang() — se pasa desde cada página
// para no duplicar el contexto de idioma dentro de este fichero de datos.
export function getSectors(pick) {
  return [
    {
      slug: 'moda',
      icon: Shirt,
      title: pick('Moda', 'Fashion'),
      tagline: pick('Prepara hoy tu escaparate. Vende más mañana.', 'Prep your shopfront today. Sell more tomorrow.'),
      hero: pick(
        'Convierte cada mirada en una oportunidad. Lo digital se une a lo físico para que tu tienda destaque y venda más.',
        'Turn every glance into an opportunity. Digital meets physical so your store stands out and sells more.'
      ),
      campaigns: [
        pick('Vuelta al cole', 'Back to school'),
        pick('Nueva colección otoño-invierno', 'New autumn-winter collection'),
        pick('Black Friday', 'Black Friday'),
        pick('Navidad', 'Christmas'),
        pick('Rebajas de enero', 'January sales')
      ],
      benefits: [
        {
          title: pick('Atrae todas las miradas', 'Attract every glance'),
          body: pick('Un escaparate dinámico capta la atención y te diferencia del resto.', 'A dynamic shopfront captures attention and sets you apart.')
        },
        {
          title: pick('Más visitas, más ventas', 'More visits, more sales'),
          body: pick('Comunica mejor tus colecciones, promociones y novedades 24/7.', 'Communicate your collections, promotions and news 24/7.')
        },
        {
          title: pick('Cuenta tu historia', 'Tell your story'),
          body: pick('Refleja la esencia de tu marca y conecta con tu comunidad.', "Reflect your brand's essence and connect with your community.")
        }
      ]
    },
    {
      slug: 'deportes',
      icon: Dumbbell,
      title: pick('Deportes', 'Sports'),
      tagline: pick('Tu escaparate, tu mejor entrenador de ventas.', 'Your shopfront, your best sales coach.'),
      hero: pick(
        'Muestra tu producto en acción, inspira a tu comunidad y convierte miradas en clientes cada día.',
        'Show your product in action, inspire your community, and turn glances into customers every day.'
      ),
      campaigns: [
        pick('Rebajas', 'Sales'),
        pick('Nueva colección primavera-verano', 'New spring-summer collection'),
        pick('Black Friday', 'Black Friday'),
        pick('Navidad', 'Christmas'),
        pick('Eventos y carreras locales', 'Local races and events')
      ],
      benefits: [
        {
          title: pick('Producto en acción', 'Product in action'),
          body: pick('Vídeos y fotos reales de deportistas usando lo que vendes.', 'Real photos and videos of athletes using what you sell.')
        },
        {
          title: pick('Transmite estilo de vida', 'Convey a lifestyle'),
          body: pick('Inspira a tu comunidad con contenido que conecta con sus pasiones.', "Inspire your community with content that connects with their passions.")
        },
        {
          title: pick('Más visitas, más ventas', 'More visits, more sales'),
          body: pick('Convierte miradas en clientes y oportunidades de venta cada día.', 'Turn glances into customers and sales opportunities every day.')
        }
      ]
    },
    {
      slug: 'supermercados',
      icon: ShoppingCart,
      title: pick('Supermercados', 'Supermarkets'),
      tagline: pick('Cada pasillo, un punto de venta activo.', 'Every aisle, an active point of sale.'),
      hero: pick(
        'Comunica ofertas, productos de temporada y disponibilidad en tiempo real, en el lineal y en el escaparate.',
        'Communicate offers, seasonal products and real-time availability, on the shelf and at the storefront.'
      ),
      campaigns: [
        pick('Producto de temporada', 'Seasonal product'),
        pick('Ofertas semanales', 'Weekly deals'),
        pick('Black Friday', 'Black Friday'),
        pick('Navidad', 'Christmas'),
        pick('Vuelta al cole', 'Back to school')
      ],
      benefits: [
        {
          title: pick('Contenido siempre actual', 'Always current content'),
          body: pick('Precios y disponibilidad actualizados sin necesidad de imprimir nada.', 'Prices and availability updated without printing anything.')
        },
        {
          title: pick('Más ticket medio', 'Higher average ticket'),
          body: pick('Promociona combos y productos de temporada de forma eficaz.', 'Promote combos and seasonal products effectively.')
        },
        {
          title: pick('Reduce costes', 'Reduce costs'),
          body: pick('Menos impresión, más rapidez para cambiar precios y mensajes.', 'Less printing, faster to change prices and messaging.')
        }
      ]
    },
    {
      slug: 'health',
      icon: HeartPulse,
      title: pick('Health', 'Health'),
      tagline: pick('La salud nunca había sido tan relevante como ahora.', 'Health has never mattered more.'),
      hero: pick(
        'Para farmacias, parafarmacias, clínicas y hospitales: comunica, informa y conecta con tus pacientes cada día.',
        'For pharmacies, parapharmacies, clinics and hospitals: communicate, inform and connect with your patients every day.'
      ),
      campaigns: [
        pick('Vuelta al cole', 'Back to school'),
        pick('Protección solar y verano', 'Sun protection & summer'),
        pick('Black Friday', 'Black Friday'),
        pick('Navidad', 'Christmas'),
        pick('Rebajas y eventos', 'Sales & events')
      ],
      benefits: [
        {
          title: pick('Asesora e informa', 'Advise and inform'),
          body: pick('Educa a tus pacientes con contenido de valor sobre salud y bienestar.', 'Educate your patients with valuable health and wellness content.')
        },
        {
          title: pick('Refuerza tu valor profesional', 'Reinforce your professional value'),
          body: pick('Demuestra tu compromiso con la salud y el bienestar de tu comunidad.', "Show your commitment to your community's health and wellbeing.")
        },
        {
          title: pick('Genera confianza', 'Build trust'),
          body: pick('Comunica, informa y conecta con quien más lo necesita, cada día.', 'Communicate, inform and connect with those who need it most, every day.')
        }
      ]
    },
    {
      slug: 'viajes',
      icon: Plane,
      title: pick('Viajes', 'Travel'),
      tagline: pick('Tu próxima aventura empieza aquí.', 'Your next adventure starts here.'),
      hero: pick(
        'Inspira, informa y convierte miradas en viajes reservados desde el propio escaparate de la agencia.',
        'Inspire, inform, and turn glances into booked trips right from the agency shopfront.'
      ),
      campaigns: [
        pick('Rebajas', 'Sales'),
        pick('Verano', 'Summer'),
        pick('Black Friday', 'Black Friday'),
        pick('Navidad', 'Christmas'),
        pick('Eventos especiales', 'Special events')
      ],
      benefits: [
        {
          title: pick('Destinos en imágenes y vídeo', 'Destinations in image and video'),
          body: pick('Contenido visual que inspira deseos y despierta emociones.', 'Visual content that sparks desire and emotion.')
        },
        {
          title: pick('Asesoramiento profesional', 'Professional advice'),
          body: pick('Tus expertos ayudan a elegir el viaje perfecto, en el propio escaparate.', 'Your experts help travelers choose the perfect trip, right at the shopfront.')
        },
        {
          title: pick('Más visibilidad, más reservas', 'More visibility, more bookings'),
          body: pick('Convierte miradas en clientes y clientes en viajeros.', 'Turn glances into customers and customers into travelers.')
        }
      ]
    },
    {
      slug: 'centros-deportivos',
      icon: Trophy,
      title: pick('Centros deportivos', 'Sports centers'),
      tagline: pick('Cada pantalla, un motivo más para entrenar hoy.', 'Every screen, one more reason to train today.'),
      hero: pick(
        'Comunica clases, horarios, retos y resultados de tu comunidad en las pantallas del propio centro.',
        "Communicate classes, schedules, challenges and your community's results on the center's own screens."
      ),
      campaigns: [
        pick('Altas de enero', 'January sign-ups'),
        pick('Operación verano', 'Summer fitness push'),
        pick('Retos y clases especiales', 'Challenges & special classes'),
        pick('Eventos y torneos', 'Events & tournaments'),
        pick('Black Friday', 'Black Friday')
      ],
      benefits: [
        {
          title: pick('Comunicación en tiempo real', 'Real-time communication'),
          body: pick('Cambios de horario, aforo o clases especiales, al instante.', 'Schedule changes, capacity or special classes, instantly.')
        },
        {
          title: pick('Motiva a tu comunidad', 'Motivate your community'),
          body: pick('Resultados, retos y logros que refuerzan la pertenencia al centro.', "Results, challenges and achievements that reinforce belonging.")
        },
        {
          title: pick('Más altas, más retención', 'More sign-ups, more retention'),
          body: pick('Un centro que comunica bien se percibe como un centro que cuida mejor.', 'A center that communicates well is perceived as one that cares more.')
        }
      ]
    }
  ]
}
