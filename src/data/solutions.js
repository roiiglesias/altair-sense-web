import { Monitor, LayoutGrid, Cpu, LineChart, Wrench, HardHat, FileEdit } from 'lucide-react'

// pick(es, en) llega desde useLang() de cada página/componente que lo use.
export function solutionSections(pick) {
  return [
    {
      id: 'digital-signage',
      navLabel: pick('Digital Signage', 'Digital Signage'),
      icon: Monitor,
      title: pick('Digital Signage', 'Digital Signage'),
      body: pick(
        'Cartelería digital y pantallas profesionales para escaparate, punto de venta e interior de tienda, gestionadas de forma centralizada.',
        'Digital signage and professional screens for shopfront, point of sale and in-store, managed centrally.'
      ),
      points: [
        pick('Pantallas de escaparate e interior', 'Shopfront and interior screens'),
        pick('Contenido dinámico y programado', 'Dynamic, scheduled content'),
        pick('Alta luminosidad para exterior', 'High brightness for outdoor use')
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
        pick('Publicación multi-tienda en segundos', 'Multi-store publishing in seconds')
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
        pick('Escaparates que adaptan el contenido al contexto', 'Shopfronts that adapt content to context'),
        pick('Integración con sistemas de tienda existentes', 'Integration with existing store systems')
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
        'Despliegue llave en mano de pantallas y equipos en tienda, con estándares homogéneos en cada apertura, ciudad o país.',
        'Turnkey deployment of screens and equipment in-store, with consistent standards across every opening, city or country.'
      ),
      points: [
        pick('Roll-out multi-tienda coordinado', 'Coordinated multi-store roll-out'),
        pick('Estándares homogéneos por cadena', 'Consistent standards chain-wide'),
        pick('Cobertura nacional e internacional', 'National and international coverage')
      ]
    },
    {
      id: 'mantenimiento',
      navLabel: pick('Servicios de mantenimiento', 'Maintenance services'),
      icon: Wrench,
      title: pick('Mantenimiento correctivo, predictivo y preventivo', 'Corrective, predictive and preventive maintenance'),
      body: pick(
        'Órdenes de trabajo de campo y detección temprana de incidencias de hardware, para que una pantalla apagada nunca sea el motivo de una venta perdida.',
        'Field work orders and early detection of hardware issues, so a screen going dark is never the reason a sale is lost.'
      ),
      points: [
        pick('Ticketing automático por incidencia', 'Automatic incident ticketing'),
        pick('Mantenimiento preventivo programado', 'Scheduled preventive maintenance'),
        pick('Detección predictiva de fallos', 'Predictive fault detection')
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
