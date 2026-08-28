import { Monitor, LayoutGrid, LineChart, Boxes, Wrench } from 'lucide-react'

// Infografía de conexión: las capacidades tecnológicas convergen en la
// plataforma y de ahí irradian a los tres resultados de negocio. Sustituye
// la cuadrícula plana de iconos por algo que comunique "conexión entre
// tecnologías para alcanzar un resultado".
export default function ConnectionDiagram({ pick }) {
  const techs = [
    { icon: Monitor, label: pick('Digital Signage', 'Digital Signage'), x: 90 },
    { icon: LayoutGrid, label: pick('CMS', 'CMS'), x: 290 },
    { icon: LineChart, label: pick('Analytics', 'Analytics'), x: 500 },
    { icon: Boxes, label: pick('Inventario', 'Inventory'), x: 710 },
    { icon: Wrench, label: pick('Mantenimiento', 'Maintenance'), x: 910 }
  ]

  const outcomes = [
    { label: pick('Ventas', 'Sales'), x: 220 },
    { label: pick('Customer Experience', 'Customer Experience'), x: 500 },
    { label: pick('Eficiencia de tienda', 'Store efficiency'), x: 780 }
  ]

  const hub = { x: 500, y: 210 }

  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto" role="img" aria-label={pick('Diagrama de conexión entre tecnologías y resultados de negocio', 'Diagram connecting technologies to business outcomes')}>
      {/* Conectores: tecnologías -> hub */}
      {techs.map((t, i) => (
        <path
          key={`tc-${i}`}
          d={`M ${t.x} 70 C ${t.x} 150, ${hub.x} 130, ${hub.x} ${hub.y - 62}`}
          fill="none"
          stroke="#4C7A3E"
          strokeWidth="1.5"
          opacity="0.55"
        />
      ))}

      {/* Conectores: hub -> resultados */}
      {outcomes.map((o, i) => (
        <path
          key={`oc-${i}`}
          d={`M ${hub.x} ${hub.y + 62} C ${hub.x} ${hub.y + 130}, ${o.x} ${330}, ${o.x} 390`}
          fill="none"
          stroke="#B4E33D"
          strokeWidth="2"
        />
      ))}

      {/* Nodos de tecnología */}
      {techs.map((t, i) => (
        <g key={`tn-${i}`}>
          <circle cx={t.x} cy="42" r="34" fill="#10150F" stroke="#4C7A3E" strokeWidth="1" />
          <foreignObject x={t.x - 14} y="28" width="28" height="28">
            <t.icon size={22} color="#B4E33D" strokeWidth={1.75} />
          </foreignObject>
          <text x={t.x} y="98" textAnchor="middle" fontSize="15" fontWeight="700" fill="#F2F1E8">
            {t.label}
          </text>
        </g>
      ))}

      {/* Hub central */}
      <circle cx={hub.x} cy={hub.y} r="62" fill="#B4E33D" />
      <text x={hub.x} y={hub.y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#10150F">
        Altair Sense
      </text>

      {/* Nodos de resultado */}
      {outcomes.map((o, i) => (
        <g key={`on-${i}`}>
          <rect x={o.x - 90} y="390" width="180" height="48" rx="24" fill="none" stroke="#B4E33D" strokeWidth="1.5" />
          <text x={o.x} y="419" textAnchor="middle" fontSize="14" fontWeight="700" fill="#F2F1E8">
            {o.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
