export function Eyebrow({ children, tone = 'lime', className = '' }) {
  const colors = { lime: 'text-as-lime', moss: 'text-as-moss' }
  return (
    <p className={`text-xs font-bold tracking-[0.22em] uppercase ${colors[tone]} ${className}`}>
      {children}
    </p>
  )
}

// Motivo de firma: el punto de la "i" del logo, convertido en un pulso de sensor.
export function PulseDot({ size = 10, className = '' }) {
  return (
    <span
      className={`relative inline-flex ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-as-lime opacity-60 animate-ping" />
      <span className="relative inline-flex rounded-full h-full w-full bg-as-lime" />
    </span>
  )
}

export function Divider({ className = '' }) {
  return <div className={`h-px w-14 bg-as-lime ${className}`} />
}
