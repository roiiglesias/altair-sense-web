// Logo de Altair Sense — construcción según Manual gráfico v1.0
// "altair" en Nunito Sans 800, bloque "ai" calado sobre recuadro, "sense" debajo alineado a la derecha.
// Variantes: onDark (lima), onLight (musgo), mono, negative (sobre musgo)

export default function Logo({ variant = 'onDark', showSense = true, size = 'md', className = '' }) {
  const sizes = {
    sm: { word: 'text-2xl', box: 'w-8 h-9', sense: 'text-[10px]' },
    md: { word: 'text-4xl', box: 'w-11 h-12', sense: 'text-xs' },
    lg: { word: 'text-6xl md:text-7xl', box: 'w-16 h-[4.5rem] md:w-20 md:h-24', sense: 'text-base md:text-lg' }
  }
  const s = sizes[size]

  const palette = {
    onDark:   { word: 'text-as-cream', box: 'bg-as-lime', letters: 'text-as-black', sense: 'text-as-lime' },
    onLight:  { word: 'text-as-black', box: 'bg-as-moss', letters: 'text-as-cream', sense: 'text-as-moss' },
    mono:     { word: 'text-as-black', box: 'bg-as-black', letters: 'text-as-cream', sense: 'text-as-moss-2' },
    negative: { word: 'text-as-cream', box: 'bg-as-cream', letters: 'text-as-moss', sense: 'text-as-cream' }
  }
  const p = palette[variant]

  return (
    <div className={`inline-flex flex-col items-end select-none ${className}`}>
      <div className={`flex items-center font-display font-extrabold leading-none ${s.word} ${p.word}`}>
        <span>alt</span>
        <span className={`relative inline-flex items-center justify-center mx-[0.02em] rounded-[0.14em] ${s.box} ${p.box}`}>
          <span className={`font-display font-extrabold ${p.letters}`} style={{ fontSize: '0.62em' }}>ai</span>
          <span className={`absolute rounded-full ${p.letters === 'text-as-black' ? 'bg-as-black' : 'bg-as-cream'}`}
                style={{ width: '0.1em', height: '0.1em', top: '14%', right: '30%' }} />
        </span>
        <span>r</span>
      </div>
      {showSense && (
        <span className={`font-display font-semibold tracking-[0.34em] ${s.sense} ${p.sense} mt-1`}>sense</span>
      )}
    </div>
  )
}
