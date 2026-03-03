"use client"

import { useEffect, useState } from "react"
import { BookOpen, Heart, Star, Lightbulb } from "lucide-react"

export default function Ideario() {
  const [mounted, setMounted] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll(".ideario-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Plenitud en el Ser",
      description: "Promovemos una educación donde cada alumno busca un proyecto de vida original, personal y en beneficio de la sociedad."
    },
    {
      icon: Star,
      title: "Excelencia en el Saber",
      description: "Enfatizamos la maximización de las potencialidades individuales para un óptimo nivel de desempeño y autosuperación."
    },
    {
      icon: Lightbulb,
      title: "Autonomía en el Hacer",
      description: "Favorecemos el protagonismo permanente del alumno, jerarquizando investigación, creatividad y responsabilidad."
    },
    {
      icon: BookOpen,
      title: "Enfoque Bilingüe",
      description: "Formamos en español e inglés, facilitando la inserción en un mundo globalizado con el inglés como lengua franca."
    }
  ]

  return (
    <section id="ideario" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4 animate-fade-in">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Ideario Institucional
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learning Proyecto Integral propone una ideología pedagógica y humanística. 
            Formamos alumnos con capacidad de adaptación, creatividad, empatía e inteligencia social.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              data-index={index}
              className={`ideario-card group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-[#c9a227]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-white relative z-10" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] rounded-xl opacity-0 group-hover:opacity-70 blur-lg transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c9a227] transition-colors duration-300">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#1e3a5f] rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Nuestra Visión
            </h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Ser una institución educativa líder en formación integral, donde cada estudiante desarrolla 
              su máximo potencial para contribuir positivamente a la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
