// Logo de Altair Sense — usa los PNG oficiales del manual gráfico,
// no una reconstrucción. variant: 'onDark' | 'onLight'

const sources = {
  onDark: '/brand/altair-sense-lima-transparente.png',
  onLight: '/brand/altair-sense-musgo-transparente.png'
}

const heights = {
  sm: 'h-9',
  md: 'h-12',
  lg: 'h-16 md:h-20'
}

export default function Logo({ variant = 'onDark', size = 'md', className = '' }) {
  return (
    <img
      src={sources[variant]}
      alt="Altair Sense"
      className={`${heights[size]} w-auto select-none ${className}`}
      draggable="false"
    />
  )
}

export function LogoIcon({ className = '' }) {
  return (
    <img
      src="/brand/altair-sense-icono-transparente.png"
      alt="Altair Sense"
      className={className}
      draggable="false"
    />
  )
}
