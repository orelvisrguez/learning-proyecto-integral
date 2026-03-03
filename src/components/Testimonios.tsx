"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Madre de alumno",
    content: "Excelente institución donde mis hijos han desarrollado no solo conocimientos académicos sino también valores humanos. La metodología bilingüe les ha abierto muchas puertas.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Padre de alumna",
    content: "Mi hija está muy contenta en el colegio. La formación que recibe es integral y los profesores están muy comprometidos con su desarrollo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Ex alumna",
    content: "Gracias a Learning Proyecto Integral pude obtener certificaciones de Cambridge que me sirvieron mucho para mi carrera profesional. Muy agradecido por la formación recibida.",
    rating: 5,
  },
  {
    id: 4,
    name: "Laura Pérez",
    role: "Madre de alumno",
    content: "El ambiente escolar es muy positivo. Mis hijos disfrutan ir al colegio cada día y eso dice mucho de la calidad educativa que ofrecen.",
    rating: 5,
  },
]

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a87] to-[#1e3a5f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/20 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestras familias
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#c9a227]/30" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />
                ))}
              </div>

              <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#c9a227] to-[#d4b84a] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "w-8 bg-[#c9a227]" : "bg-white/30"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
