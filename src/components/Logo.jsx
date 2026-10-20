// Logo de NUVsense — SVG oficiales del kit de marca (texto trazado, sin fuente).
// variant: 'onDark' (NUV hueso + sense lima, sobre verdenegro) | 'onLight' (NUV verdenegro + sense musgo, sobre fondo claro).
// Reglas del kit: sin recuadros alrededor; lima solo sobre verdenegro; no mover el punto, no recolorear ni estirar.
// Tamaño mínimo 90 px de ancho; por debajo, usar el símbolo (LogoIcon).

const sources = {
  onDark: '/brand/nuvsense-logo-oscuro.svg',
  onLight: '/brand/nuvsense-logo-claro.svg'
}

const symbols = {
  onDark: '/brand/nuvsense-simbolo-oscuro.svg',
  onLight: '/brand/nuvsense-simbolo-claro.svg'
}

const heights = {
  sm: 'h-7',
  md: 'h-10',
  lg: 'h-14 md:h-16'
}

export default function Logo({ variant = 'onDark', size = 'md', className = '' }) {
  return (
    <img
      src={sources[variant]}
      alt="NUVsense"
      className={`${heights[size]} w-auto select-none ${className}`}
      draggable="false"
    />
  )
}

export function LogoIcon({ className = '', variant = 'onDark' }) {
  return <img src={symbols[variant]} alt="NUVsense" className={className} draggable="false" />
}
