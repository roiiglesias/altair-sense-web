import { Monitor, LayoutGrid, Cpu, Radar, LineChart, Wrench, HardHat, FileEdit } from 'lucide-react'

// pick(es, en) llega desde useLang() de cada página/componente que lo use.
export function solutionSections(pick) {
  return [
    {
      id: 'digital-signage',
      navLabel: pick('Digital Signage', 'Digital Signage'),
      icon: Monitor,
      title: pick('Digital Signage', 'Digital Signage'),
      body: pick(
        'Gestión de proyecto end to end: partimos de entender tus necesidades y puntos de dolor, analizamos qué soluciones se ajustan mejor a resolverlos, y desplegamos cartelería digital y pantallas profesionales para escaparate, punto de venta e interior de tienda, gestionadas de forma centralizada. Somos especialistas en implantación de soluciones LED: configuración, gestión y control de las pantallas, con una implementación inteligente pensada para maximizar su impacto y su durabilidad.',
        "End-to-end project management: we start by understanding your needs and pain points, analyze which solutions best address them, and deploy digital signage and professional screens for shopfront, point of sale and in-store, managed centrally. We specialize in LED solution implementation: configuration, management and control of the screens, with an intelligent setup designed to maximize both impact and durability."
      ),
      points: [
        pick('Análisis de necesidades y diseño de solución', 'Needs analysis and solution design'),
        pick('Especialistas en implantación LED', 'LED implementation specialists'),
        pick('Configuración, gestión y control de pantallas', 'Screen configuration, management and control'),
        pick('Implementación inteligente para más impacto y durabilidad', 'Intelligent setup for more impact and durability'),
        pick('Homologamos funcionalidades, UX/UI, IA, RGPD y seguridad', 'We vet functionality, UX/UI, AI, GDPR and security')
      ]
    },
    {
      id: 'cms',
      navLabel: pick('CMS', 'CMS'),
      icon: LayoutGrid,
      title: pick('CMS de gestión de contenidos', 'Content management system (CMS)'),
      body: pick(
        'Una plataforma CMS propia para crear, programar y publicar contenido en toda tu red de pantallas desde un único panel.',
        'A proprietary CMS platform to create, schedule and publish content across your entire screen network from a single dashboard.'
      ),
      points: [
        pick('Gestión desde el móvil o el escritorio', 'Manage from mobile or desktop'),
        pick('Plantillas y programación por reglas', 'Templates and rule-based scheduling'),
        pick('Publicación multi-tienda en segundos', 'Multi-store publishing in seconds'),
        pick('Homologamos funcionalidades, UX/UI, IA, RGPD y seguridad', 'We vet functionality, UX/UI, AI, GDPR and security')
      ]
    },
    {
      id: 'retail-tech',
      navLabel: pick('Retail Tech', 'Retail Tech'),
      icon: Cpu,
      title: pick('Retail Tech', 'Retail Tech'),
      body: pick(
        'Sensores, sistemas de fila única, gestión de turnos y demás tecnología que conecta lo físico con el dato, integrada en una sola plataforma.',
        'Sensors, single-queue systems, turn management and other technology that connects the physical store with data, integrated into one platform.'
      ),
      points: [
        pick('Sistemas de fila única y gestión de turnos', 'Single-queue and turn management systems'),
        pick('Contenido que se adapta al contexto de cada tienda', "Content that adapts to each store's context"),
        pick('Integración con sistemas de tienda existentes', 'Integration with existing store systems')
      ]
    },
    {
      id: 'retail-media',
      navLabel: pick('Retail Media', 'Retail Media'),
      icon: Radar,
      title: pick('Retail Media', 'Retail Media'),
      body: pick(
        'Nuestro CMS y nuestra estrategia de retail media permiten construir una comunicación sólida en tienda, dentro y fuera de ella: útil para supermercados, bricolaje, deporte, petcare, perfumería y cosmética, y cualquier retailer que distribuya varias marcas.',
        'Our CMS and retail media strategy help build solid in-store and out-of-store communication: useful for supermarkets, DIY, sports, pet care, perfumery and cosmetics, and any retailer distributing multiple brands.'
      ),
      image: '/brand/retail-media-diagram.jpg',
      points: [
        pick('Estrategia de contenidos por punto de contacto', 'Content strategy per touchpoint'),
        pick('Supermercados, bricolaje, deporte, petcare, perfumería', 'Supermarkets, DIY, sports, pet care, perfumery'),
        pick('Retailers multi-marca', 'Multi-brand retailers'),
        pick('Medición de impacto por campaña', 'Per-campaign impact measurement')
      ]
    },
    {
      id: 'retail-analytics',
      navLabel: pick('Retail Analytics', 'Retail Analytics'),
      icon: LineChart,
      title: pick('Retail Analytics', 'Retail Analytics'),
      body: pick(
        'Paneles que cruzan tráfico, conversión y ticket medio por tienda, franja horaria y campaña, para decidir con datos, no con intuición.',
        'Dashboards that cross footfall, conversion and average ticket by store, time slot and campaign, so you decide with data, not gut feeling.'
      ),
      points: [
        pick('Comparativa entre tiendas y mercados', 'Store and market comparison'),
        pick('Alertas de desviación', 'Deviation alerts'),
        pick('Informes automáticos', 'Automatic reports')
      ]
    },
    {
      id: 'instalacion',
      navLabel: pick('Servicios de instalación', 'Installation services'),
      icon: HardHat,
      title: pick('Servicios de instalación', 'Installation services'),
      body: pick(
        'Despliegue llave en mano de pantallas y equipos en tienda, con estándares homogéneos en cada apertura, ciudad o país. A nivel nacional contamos con más de 8 puntos de servicio y más de 100 técnicos especializados; a nivel internacional, 15 puntos de atención con más de 250 técnicos, para dar cobertura y seguimiento a implantaciones en otros países.',
        'Turnkey deployment of screens and equipment in-store, with consistent standards across every opening, city or country. Nationally we have more than 8 service points and over 100 specialized technicians; internationally, 15 service points with more than 250 technicians, providing coverage and follow-up for deployments abroad.'
      ),
      points: [
        pick('+8 puntos de servicio y +100 técnicos (nacional)', '8+ service points and 100+ technicians (national)'),
        pick('15 puntos de atención y +250 técnicos (internacional)', '15 service points and 250+ technicians (international)'),
        pick('Roll-out multi-tienda coordinado', 'Coordinated multi-store roll-out'),
        pick('Estándares homogéneos por cadena', 'Consistent standards chain-wide')
      ]
    },
    {
      id: 'mantenimiento',
      navLabel: pick('Servicios de mantenimiento', 'Maintenance services'),
      icon: Wrench,
      title: pick('Mantenimiento correctivo, predictivo y preventivo', 'Corrective, predictive and preventive maintenance'),
      body: pick(
        'Órdenes de trabajo de campo y detección temprana de incidencias de hardware, para que una pantalla apagada nunca sea el motivo de una venta perdida. Nuestra solución propia, Lumen, basada en IA, reduce las incidencias, se anticipa a ellas y genera modelos de resolución más eficientes con cada caso que gestiona. Además, ofrecemos servicio NBD (Next Business Day) adaptado a las necesidades del cliente y a la criticidad de cada elemento instalado.',
        'Field work orders and early detection of hardware issues, so a screen going dark is never the reason a sale is lost. Our own AI-based platform, Lumen, reduces incidents, anticipates them, and builds more efficient resolution models with every case it handles. We also offer NBD (Next Business Day) service, adapted to the client\'s needs and the criticality of each installed element.'
      ),
      points: [
        pick('Ticketing automático por incidencia', 'Automatic incident ticketing'),
        pick('Lumen (IA): anticipación y modelos de resolución', 'Lumen (AI): anticipation and resolution models'),
        pick('Servicio NBD adaptado a la criticidad', 'NBD service adapted to criticality'),
        pick('Mantenimiento preventivo programado', 'Scheduled preventive maintenance')
      ]
    },
    {
      id: 'gestion-contenidos',
      navLabel: pick('Gestión de contenidos', 'Content management services'),
      icon: FileEdit,
      title: pick('Servicios de gestión de contenidos', 'Content management services'),
      body: pick(
        'Nuestro equipo de contenidos diseña, programa y mantiene actualizada tu comunicación en pantalla, para que no tengas que dedicarle tiempo interno.',
        'Our content team designs, schedules and keeps your on-screen communication up to date, so you don\'t need to dedicate internal time to it.'
      ),
      points: [
        pick('Diseño de piezas y campañas', 'Creative design and campaigns'),
        pick('Calendario editorial por tienda', 'Per-store editorial calendar'),
        pick('Adaptación por idioma y geografía', 'Adapted by language and geography')
      ]
    }
  ]
}
