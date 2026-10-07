import { MessageSquare, SearchCheck, CalendarCheck, ClipboardCheck, Package, MapPin, MonitorCheck } from 'lucide-react'

// Líneas de servicio técnico sobre Lumen (sin precios). pick(es, en) viene de useLang().
export function serviceLevels(pick) {
  return [
    {
      n: 'N1', title: pick('Nivel 1 · Remoto', 'Level 1 · Remote'),
      body: pick(
        'Recepción por portal público sin credenciales o por asistente conversacional de IA. Triaje, prioridad y resolución de primer nivel: reinicio remoto, conectividad y contenido activo en el CMS.',
        'Intake through a public portal (no credentials needed) or an AI conversational assistant. Triage, priority and first-level resolution: remote restart, connectivity and active content in the CMS.'
      ),
      note: pick('La mayoría de incidencias se cierran aquí', 'Most incidents are closed here')
    },
    {
      n: 'N2', title: pick('Nivel 2 · Análisis técnico', 'Level 2 · Technical analysis'),
      body: pick(
        'Causa raíz documentada, solución aplicada y código de cierre. Inventario vinculado, Base de Conocimiento y registro de si se resolvió en remoto o exigió desplazamiento.',
        'Documented root cause, applied solution and closing code. Linked inventory, Knowledge Base and a record of whether it was solved remotely or required a visit.'
      ),
      note: pick('Cada incidencia se convierte en conocimiento reutilizable', 'Every incident becomes reusable knowledge')
    },
    {
      n: 'N3', title: pick('Nivel 3 · Fabricante', 'Level 3 · Manufacturer'),
      body: pick(
        'Escalada al fabricante coordinada por nosotros, con parte de intervención on site vinculado a la incidencia original y ticket relacionado para mantener la trazabilidad completa.',
        'Escalation to the manufacturer coordinated by us, with an on-site intervention report linked to the original incident and a related ticket to keep full traceability.'
      ),
      note: pick('Un hilo de seguimiento, un responsable', 'One thread, one owner')
    }
  ]
}

export function serviceLines(pick) {
  return [
    {
      icon: MessageSquare, group: pick('Soporte remoto', 'Remote support'),
      title: pick('Mantenimiento remoto Nivel 1', 'Remote maintenance Level 1'),
      points: [
        pick('Recepción por dos vías: portal público sin credenciales, para que cualquier persona de tienda abra un ticket, y asistente conversacional por IA que guía la descripción del problema antes de que llegue a un técnico.', 'Two intake channels: a public portal with no credentials, so anyone in store can open a ticket, and an AI conversational assistant that guides the problem description before it reaches a technician.'),
        pick('Triaje inicial con categorización en tres niveles y asignación automática de prioridad según impacto y urgencia declarados.', 'Initial triage with three-level categorisation and automatic priority assignment based on declared impact and urgency.'),
        pick('Compromiso de SLA configurable por cliente: 4 h, 8 h, siguiente día laborable o dos días laborables.', 'SLA commitment configurable per client: 4 h, 8 h, next business day or two business days.'),
        pick('Resolución de primer nivel: reinicios remotos, comprobaciones básicas de conectividad y verificación de contenido activo en el CMS.', 'First-level resolution: remote restarts, basic connectivity checks and verification of active content in the CMS.')
      ],
      benefit: pick('No depende de que alguien de tu equipo tenga conocimiento técnico: cualquier persona de tienda abre una incidencia desde su móvil en menos de un minuto. Y sabes desde el primer momento cuándo se te va a atender, con un compromiso de tiempo explícito, no una promesa vaga.', 'It does not depend on anyone on your team having technical knowledge: anyone in store opens an incident from their phone in under a minute. And you know from the first moment when you will be attended, with an explicit time commitment, not a vague promise.')
    },
    {
      icon: SearchCheck, group: pick('Soporte remoto', 'Remote support'),
      title: pick('Mantenimiento remoto Nivel 2', 'Remote maintenance Level 2'),
      points: [
        pick('Análisis técnico más profundo: causa raíz documentada, solución aplicada y código de cierre, todo registrado por si el mismo problema se repite.', 'Deeper technical analysis: documented root cause, applied solution and closing code, all recorded in case the same problem recurs.'),
        pick('Vinculación automática con el inventario del cliente: el técnico ve al instante qué equipo concreto está afectado, su garantía y sus datos de red.', 'Automatic link to the client inventory: the technician instantly sees which exact device is affected, its warranty and network data.'),
        pick('Consulta a la Base de Conocimiento interna, que sugiere documentar automáticamente cualquier incidencia que se repita con frecuencia entre distintos clientes.', 'Query to the internal Knowledge Base, which automatically suggests documenting any incident that recurs frequently across clients.'),
        pick('Registro explícito de si la incidencia se resolvió en remoto o exigió desplazamiento: el dato que alimenta el indicador de sostenibilidad de resolución remota.', 'Explicit record of whether the incident was solved remotely or required a visit: the data behind the remote-resolution sustainability indicator.')
      ],
      benefit: pick('Las incidencias recurrentes se resuelven cada vez más rápido, porque no empezamos de cero cada vez: el histórico de causa raíz y solución convierte cada incidencia en conocimiento reutilizable. Y cada resolución en remoto es una visita menos que coordinar y esperar.', 'Recurring incidents get solved faster each time, because we never start from zero: root-cause and solution history turns every incident into reusable knowledge. And every remote resolution is one less visit to coordinate and wait for.')
    },
    {
      icon: CalendarCheck, group: pick('Ejecución en campo', 'Field execution'),
      title: pick('Gestión de intervenciones', 'Intervention management'),
      points: [
        pick('Planificación y asignación de partes de trabajo a técnico o instalador, con fecha y franja horaria.', 'Planning and assignment of work orders to a technician or installer, with date and time slot.'),
        pick('Plantillas de checklist configurables con puntos obligatorios, para que ninguna intervención se dé por completada sin cumplir los pasos críticos.', 'Configurable checklist templates with mandatory items, so no intervention is closed without completing the critical steps.'),
        pick('Visibilidad geográfica de todas las intervenciones activas sobre un mapa, útil para agrupar visitas por zona.', 'Geographic view of all active interventions on a map, useful to group visits by area.')
      ],
      benefit: pick('La ejecución de cada intervención sigue siempre el mismo estándar de calidad, con independencia de qué técnico la realice. No depende de la memoria ni del criterio individual de la persona que va ese día.', 'Every intervention follows the same quality standard regardless of which technician carries it out. It does not rely on the memory or individual judgement of whoever goes that day.')
    },
    {
      icon: ClipboardCheck, group: pick('Ejecución en campo', 'Field execution'),
      title: pick('Partes de trabajo', 'Work orders'),
      points: [
        pick('Documentación completa de cada instalación desde el móvil del técnico: fotografías del equipo, lectura automática por IA del número de serie y la MAC desde la propia etiqueta, y de la IP asignada desde la pantalla de activación del CMS, sin transcripción manual.', "Full documentation of every installation from the technician's phone: photos of the device, AI automatic reading of the serial number and MAC from the label itself, and of the assigned IP from the CMS activation screen, with no manual transcription."),
        pick('Detección automática de números de serie duplicados, para evitar confundir un equipo con otro.', 'Automatic detection of duplicate serial numbers, to avoid mixing up devices.'),
        pick('Firma digital de conformidad del cliente en el propio dispositivo, en el momento.', 'Digital client sign-off on the device itself, on the spot.'),
        pick('Conversión directa del parte completado en un registro de inventario con garantía activada, sin reintroducir ningún dato.', 'Direct conversion of the completed work order into an inventory record with warranty activated, without re-entering any data.')
      ],
      benefit: pick('Conformidad documentada de cada instalación, con evidencia fotográfica y firma, disponible para consulta en cualquier momento. Una trazabilidad que muy pocos integradores pueden ofrecer con este nivel de automatización.', 'Documented compliance for every installation, with photographic evidence and signature, available at any time. Traceability that very few integrators can offer at this level of automation.')
    },
    {
      icon: Package, group: pick('Activo instalado', 'Installed base'),
      title: pick('Gestión de inventario', 'Inventory management'),
      points: [
        pick('Ficha por equipo con número de serie, modelo, fabricante, fecha de activación y estado de garantía calculado automáticamente: activa, próxima a caducar o caducada.', 'Per-device record with serial number, model, manufacturer, activation date and automatically calculated warranty status: active, about to expire or expired.'),
        pick('Ubicación geográfica exacta, dirección y horario del establecimiento.', 'Exact geographic location, address and opening hours of the premises.'),
        pick('Trazabilidad completa hasta el parte de trabajo que documentó su instalación de origen.', 'Full traceability back to the work order that documented its original installation.')
      ],
      benefit: pick('Sabes en todo momento qué tienes instalado, dónde, y hasta cuándo está cubierto por garantía. Sin depender de una hoja de cálculo desactualizada ni de preguntarnos cada vez que lo necesitas.', 'You know at all times what is installed, where, and until when it is under warranty. No outdated spreadsheet, and no need to ask us every time.')
    },
    {
      icon: MapPin, group: pick('Escalada a fabricante', 'Manufacturer escalation'),
      title: pick('Resolución on site, coordinando Nivel 3', 'On-site resolution, coordinating Level 3'),
      points: [
        pick('Documentación de la intervención presencial vinculada a la incidencia original, con el mismo nivel de detalle que un parte de trabajo: fotografías y checklist.', 'Documentation of the on-site intervention linked to the original incident, with the same level of detail as a work order: photos and checklist.'),
        pick('Campo de ticket relacionado para vincular la incidencia local con la escalada al fabricante, manteniendo la trazabilidad de principio a fin aunque intervengan varios actores.', 'Related-ticket field to link the local incident with the manufacturer escalation, keeping end-to-end traceability even when several parties are involved.'),
        pick('Registro del cambio realizado y del cierre formal una vez resuelto.', 'Record of the change made and of the formal closure once resolved.')
      ],
      benefit: pick('Aunque el problema exija la intervención del fabricante, el cliente tiene un único interlocutor y un único hilo de seguimiento. No gestiona por su cuenta la coordinación entre Altair Sense y el fabricante.', 'Even when the problem requires the manufacturer, the client has a single point of contact and a single follow-up thread. They do not manage the coordination between Altair Sense and the manufacturer themselves.')
    },
    {
      icon: MonitorCheck, group: pick('Plataforma', 'Platform'),
      title: pick('Gestión operativa del CMS', 'CMS operational management'),
      points: [
        pick('Integración directa con los sistemas de gestión de contenido de cada fabricante mediante webhooks, sin exigir que el cliente cambie de CMS.', "Direct integration with each manufacturer's content management system through webhooks, without requiring the client to change CMS."),
        pick('Verificación técnica de la activación de cada pantalla —IP, versión, identificador de dispositivo— capturada automáticamente en el momento de la instalación.', 'Technical verification of each screen activation —IP, version, device identifier— captured automatically at installation time.'),
        pick('Base sobre la que se apoya el resto del soporte remoto, ya que el estado técnico del CMS es el primer punto de verificación ante cualquier incidencia de contenido.', 'Foundation for the rest of remote support, since the technical state of the CMS is the first checkpoint for any content incident.')
      ],
      benefit: pick('Velamos por que la infraestructura de reproducción de contenido funcione, independientemente de qué fabricante de CMS use cada tienda. El cliente no necesita personal propio que entienda de sistemas de señalización digital.', 'We make sure the content playback infrastructure works, regardless of which CMS manufacturer each store uses. The client does not need in-house staff who understand digital signage systems.')
    }
  ]
}

// Matriz de niveles Lumen. true/false o texto.
export function levelMatrix(pick) {
  const L = ['Basic', 'Business', 'Enterprise']
  const rows = [
    [pick('Mantenimiento remoto Nivel 1', 'Remote maintenance Level 1'), true, true, true],
    [pick('Gestión de inventario', 'Inventory management'), true, true, true],
    [pick('Mantenimiento remoto Nivel 2', 'Remote maintenance Level 2'), false, true, true],
    [pick('Gestión de intervenciones y partes de trabajo', 'Intervention and work-order management'), false, true, true],
    [pick('Gestión operativa del CMS', 'CMS operational management'), false, true, true],
    [pick('Informe periódico de servicio', 'Periodic service report'), false, true, true],
    [pick('Coordinación de Nivel 3 con fabricante', 'Level 3 coordination with manufacturer'), false, true, true],
    [pick('Partes de resolución on site', 'On-site resolution reports'), false, true, true],
    [pick('Portal de cliente con acceso directo', 'Client portal with direct access'), false, false, true],
    [pick('Prioridad de asignación en intervenciones', 'Assignment priority in interventions'), false, false, true]
  ]
  const meta = [
    [pick('Canales de apertura', 'Intake channels'),
      pick('Portal + asistente IA', 'Portal + AI assistant'),
      pick('Portal + asistente IA + email', 'Portal + AI assistant + email'),
      pick('Portal + asistente IA + email + teléfono', 'Portal + AI assistant + email + phone')],
    [pick('Primera respuesta (helpdesk 8×5)', 'First response (8×5 helpdesk)'),
      pick('8 h laborables', '8 business hours'), pick('4 h laborables', '4 business hours'), pick('2 h laborables', '2 business hours')],
    [pick('SLA según criticidad', 'SLA by criticality'), 'NBD · 2NBD', '8 h · NBD · 2NBD', '4 h · 8 h · NBD · 2NBD'],
    [pick('Interlocutor', 'Point of contact'),
      pick('Equipo de soporte', 'Support team'), pick('Técnico de referencia', 'Reference technician'), pick('Gestor de cuenta dedicado', 'Dedicated account manager')],
    [pick('Revisión de servicio con el cliente', 'Service review with client'),
      '—', pick('Semestral', 'Every 6 months'), pick('Trimestral', 'Quarterly')]
  ]
  const target = [
    pick('Clientes con pocas ubicaciones o instalaciones de bajo riesgo operativo, donde una incidencia no detiene la actividad de la tienda de forma crítica.', 'Clients with few locations or low operational risk, where an incident does not critically stop store activity.'),
    pick('Clientes con varias ubicaciones activas, para quienes el digital signage ya es una herramienta de negocio relevante, no sólo decorativa.', 'Clients with several active locations, for whom digital signage is already a relevant business tool, not just decoration.'),
    pick('Cuentas grandes o estratégicas, cadenas con muchas ubicaciones, o clientes para quienes una pantalla parada tiene un coste de negocio directo y medible.', 'Large or strategic accounts, chains with many locations, or clients for whom a stopped screen has a direct, measurable business cost.')
  ]
  const sub = [pick('Soporte esencial', 'Essential support'), pick('Soporte y mantenimiento activo', 'Support and active maintenance'), pick('Gestión integral', 'Full management')]
  return { L, rows, meta, target, sub }
}

export function slaList(pick) {
  return [
    ['4 h', pick('Respuesta crítica. Para sistemas cuya parada tiene coste de negocio inmediato y medible. Disponible en Enterprise.', 'Critical response. For systems whose downtime has an immediate, measurable business cost. Available in Enterprise.')],
    ['8 h', pick('Respuesta en jornada. Para instalaciones operativas relevantes. Disponible en Business y Enterprise.', 'Same-day response. For relevant operational installations. Available in Business and Enterprise.')],
    ['NBD', pick('Siguiente día laborable. Disponible en los tres niveles.', 'Next business day. Available in all three levels.')],
    ['2NBD', pick('Dos días laborables. Para instalaciones de bajo riesgo operativo.', 'Two business days. For low operational-risk installations.')]
  ]
}
