// Logo de Galernai — usa los SVG oficiales del kit de marca (texto trazado, sin fuente).
// variant: 'onDark' (lima, sobre verde negro) | 'onLight' (musgo, sobre fondo claro).
// Reglas: lima solo sobre oscuro; no recolorear ni estirar.

const sources = {
  onDark: '/brand/galernai-logo-lima.svg',
  onLight: '/brand/galernai-logo-musgo.svg'
}

const heights = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-20 md:h-24'
}

export default function Logo({ variant = 'onDark', size = 'md', className = '' }) {
  return (
    <img
      src={sources[variant]}
      alt="Galernai"
      className={`${heights[size]} w-auto select-none ${className}`}
      draggable="false"
    />
  )
}

export function LogoIcon({ className = '', variant = 'onDark' }) {
  return (
    <img
      src={variant === 'onLight' ? '/brand/galernai-isotipo-musgo.svg' : '/brand/galernai-isotipo-lima.svg'}
      alt="Galernai"
      className={className}
      draggable="false"
    />
  )
}
