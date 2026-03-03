"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Feature {
  id: number
  title: string
  description: string
  image: string
  color: string
}

export default function Primaria() {
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
      { threshold: 0.1 }
    )

    document.querySelectorAll(".primaria-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const features: Feature[] = [
    {
      id: 1,
      title: "Bilingüismo Castellano-Inglés",
      description: "La adquisición de una lengua extranjera favorece la toma de conciencia de la existencia del otro. El bilingüismo promueve la ampliación de las competencias lingüísticas en dos idiomas, facilitando la inserción en un mundo globalizado.",
      image: "/images/primaria/inmersion-al-idioma.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Metodología por Proyectos",
      description: "Los alumnos son autores de sus propios textos. La metodología de proyectos exige usar conocimientos previos en situaciones diferentes para construir comprensión, reconfigurando, expandiendo y aplicando lo aprendido.",
      image: "/images/primaria/unnamed.jpg",
      color: "from-violet-500 to-violet-600",
    },
    {
      id: 3,
      title: "Arte: Plástica, Música y Teatro",
      description: "Propiciamos el acercamiento a la expresión artística en inglés, facilitando la lectura e interpretación de códigos específicos. Cuidamos la dimensión afectiva para generar resonancias sensibles y emocionales.",
      image: "/images/primaria/arte-plastica-musica.jpg",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 4,
      title: "Tecnologías y Robótica",
      description: "Buscamos que los alumnos formalicen competencias para afrontar un mundo científico-tecnológico. Integraremos el uso de recursos informáticos hacia los contenidos de los proyectos pedagógicos. La robótica desarrolla conciencia espacial, habilidades motrices y conceptos de ingeniería.",
      image: "/images/primaria/tecnologias-informacion.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 5,
      title: "Exámenes Cambridge",
      description: "Preparamos a los alumnos para los exámenes internacionales de la Universidad de Cambridge: Starters, Movers & Flyers, consolidando y evaluando los conocimientos adquiridos en inglés.",
      image: "/images/primaria/examenes-internacionales.jpg",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 6,
      title: "English Immersion Programme",
      description: "Con 16 años de experiencia, nuestros programas de inmersión recrean la visita a un país angloparlante. La comunicación se realiza exclusivamente en inglés con actividades culturales, deportivas y recreativas.",
      image: "/images/primaria/inmersion-al-idioma.jpg",
      color: "from-amber-500 to-amber-600",
    },
  ]

  const activities = [
    { name: "Sound Tournament", image: "/images/primaria/sound-tournament.png", color: "#c9a227" },
    { name: "Semana de la Tradición", image: "/images/primaria/semana-tradicion.jpg", color: "#1e3a5f" },
    { name: "Convivencia Democrática", image: "/images/primaria/convivencia-democratica.jpg", color: "#2d5a87" },
    { name: "Celebrate Giving", image: "/images/primaria/celebrate-giving.jpg", color: "#c9a227" },
  ]

  const grades = [
    { name: "1°", age: "6 años" },
    { name: "2°", age: "7 años" },
    { name: "3°", age: "8 años" },
    { name: "4°", age: "9 años" },
    { name: "5°", age: "10 años" },
    { name: "6°", age: "11 años" },
  ]

  return (
    <section id="primaria" className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1e3a5f]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
            Educación Primaria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Escuela <span className="text-[#c9a227]">Primaria</span> Bilingüe
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Educación constructivista, interactiva y crítica con un cuidadoso seguimiento del desarrollo del niño. 
            Formación en valores y convivencia democrática.
          </p>
        </div>

        {/* Grades */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {grades.map((grade, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-white font-bold text-xl">{grade.name}</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">{grade.age}</span>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-index={index}
              className={`primaria-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Color overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-60 mix-blend-overlay`} />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${feature.color}`}>
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>

              {/* Hover decorative line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">
            Actividades Especiales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-32">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-white font-semibold text-sm">{activity.name}</span>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${activity.color}20` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full overflow-hidden"
          >
            <span className="relative z-10">Solicitar Información</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
