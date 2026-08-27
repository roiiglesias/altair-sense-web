import { useState, useEffect } from 'react'

const SLIDES = [
  '/sectores/fashion-retail.jpg',
  '/sectores/supermercados.jpg',
  '/sectores/farmacias.jpg',
  '/sectores/automocion.jpg',
  '/sectores/hoteles.jpg',
  '/sectores/deportivas.jpg'
]

export default function HeroSlideshow({ intervalMs = 4500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-40' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-as-black via-as-black/90 to-as-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-as-black via-transparent to-as-black/40" />
    </div>
  )
}
