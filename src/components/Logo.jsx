// Logo de NUVsense — PNG oficiales del kit de marca (versión 3d).
// variant: 'onDark' (NUV claro + sense lima, sobre verde negro) | 'onLight' (NUV negro + sense musgo, sobre fondo claro).
// Reglas: no recolorear ni estirar.

const sources = {
  onDark: '/brand/nuvsense-logo-oscuro.png',
  onLight: '/brand/nuvsense-logo-claro.png'
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

export function LogoIcon({ className = '' }) {
  return (
    <img
      src="/brand/nuvsense-avatar.png"
      alt="NUVsense"
      className={className}
      draggable="false"
    />
  )
}
