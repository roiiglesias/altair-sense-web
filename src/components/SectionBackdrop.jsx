// Fondo fotográfico tenue para secciones oscuras (variante de marca de la foto de retail media).
export default function SectionBackdrop({ src = '/sectores/retail-media-marca.jpg', opacity = 'opacity-25' }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <img src={src} alt="" loading="lazy" className={`absolute inset-0 w-full h-full object-cover ${opacity}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-as-black via-as-black/70 to-as-black" />
    </div>
  )
}
