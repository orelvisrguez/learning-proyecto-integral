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

export default function Secundaria() {
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

    document.querySelectorAll(".secundaria-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const features: Feature[] = [
    {
      id: 1,
      title: "Bachiller en Comunicación",
      description: "Bachiller con Proyecto Pedagógico Innovador Bilingüe en Desarrollo y Crecimiento Personal (Disp. 322/22). Perfil del egresado: sujeto con pensamiento y capacidad de análisis crítico.",
      image: "/images/primaria/inmersion-al-idioma.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Desarrollo y Crecimiento Personal",
      description: "Desarrollo de inteligencia emocional. Los alumnos abordan la materia para desarrollar la capacidad de manejar emociones, fomentando comunicación, trabajo en equipo, flexibilidad y adaptabilidad.",
      image: "/images/primaria/celebrate-giving.jpg",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "Prácticas Laborales",
      description: "Prácticas en empresas de primera línea: Italo Percossi Aceros, Al Dente Publicidad, Toyota, UAI, Municipalidad de Vicente López. También pasantías via Skype en USA.",
      image: "/images/primaria/semana-tradicion.jpg",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Orientación Vocacional",
      description: "Preparación para el mundo laboral: confección de CV, búsqueda laboral, entrevistas. Charlas con profesionales y evaluación con consultoras especializadas.",
      image: "/images/primaria/convivencia-democratica.jpg",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 5,
      title: "Enseñanza para la Comprensión",
      description: "Trabajamos desde la perspectiva de Harvard. Marcos conceptuales: tópicos generativos, metas de comprensión, desempeños y evaluación diagnóstica continua.",
      image: "/images/primaria/examenes-internacionales.jpg",
      color: "from-rose-500 to-rose-600",
    },
    {
      id: 6,
      title: "Certificaciones Cambridge",
      description: "Preparación para exámenes internacionales: PET (1°), FCE (3°), IGCSE (4°-5°): Language, Art & Design, Environmental Management, Math, Business, Literature.CAE (6°).",
      image: "/images/primaria/examenes-internacionales.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  const pillars = [
    { name: "Parlamento de la Juventud", description: "Ganadores del proyecto en el Honorable Consejo Deliberante de Vicente López", icon: "🏛️" },
    { name: "Consejo Estudiantil", description: "Espacio de participación ciudadana y reflexión institucional", icon: "👥" },
    { name: "Aprendizaje-Servicio", description: "Proyectos comunitarios para beneficio de la sociedad", icon: "🤝" },
    { name: "TED Talks / Clubes TED", description: "Desarrollo de habilidades de comunicación y oratoria", icon: "🎤" },
  ]

  const projects = [
    { name: "Proyecto GLOBE", description: "Programa de la NASA para observación ambiental", category: "Medio Ambiente" },
    { name: "Parlamento de la Juventud", description: "Participación cívica en el Consejo Deliberante", category: "Ciudadanía" },
    { name: "Intercambio Francia", description: "Intercambio con Liceo Francés en Saint Vincent", category: "Internacional" },
    { name: "Formación Artística", description: "Art & Design - expresión artística y creatividad", category: "Artes" },
  ]

  const workshops = [
    "Taller sobre Adicciones",
    "Taller sobre Alimentación",
    "Taller sobre Sexualidad",
    "Taller sobre Vínculos y Consumos",
    "Taller sobre Uso Responsable de las Tics",
    "Taller de Educación Vial",
    "Taller de R.C.P. y Primeros Auxilios",
    "Taller de Imagen Personal",
    "Taller de Habilidades Financieras",
    "Taller de Comunicación y Mediación",
    "Taller sobre Modelos de Negocios",
    "Taller sobre Entrevistas Laborales",
  ]

  const courses = [
    { name: "1° Año", courses: ["Prácticas Laborales", "Desarrollo Personal"] },
    { name: "2° Año", courses: ["Prácticas Laborales", "Desarrollo Personal"] },
    { name: "3° Año", courses: ["FCE - First Certificate", "Prácticas Laborales"] },
    { name: "4° Año", courses: ["IGCSE - Math, Business", "Prácticas Laborales"] },
    { name: "5° Año", courses: ["IGCSE - Multiple", "UBA XXI", "Prácticas"] },
    { name: "6° Año", courses: ["CAE - Advanced", "IPQ", "Orientación Vocacional"] },
  ]

  return (
    <section id="secundaria" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
            Educación Secundaria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Escuela <span className="text-[#c9a227]">Secundaria</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            DIEGEP 7814 - Formamos sujetos con pensamiento crítico, capacidad de análisis y participación productiva 
            en el medio social y ciudadano. Educación bilingüe español-inglés.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-index={index}
              className={`secundaria-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Number badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-r ${feature.color}`}>
                    {feature.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>

              {/* Hover line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Pillars Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">
            Pilares Institucionales
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-[#c9a227]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{pillar.icon}</div>
                <h4 className="font-bold text-[#1e3a5f] mb-2">{pillar.name}</h4>
                <p className="text-slate-500 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Projects */}
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Proyectos Destacados</h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="text-white/70 text-sm">{project.description}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-[#c9a227]/20 text-[#c9a227] text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-[#c9a227] to-[#d4b84a] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Certificaciones Cambridge</h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    {course.name}
                  </div>
                  <div className="text-sm">
                    {course.courses.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workshops */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">
            Talleres y Políticas de Cuidado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="group p-4 bg-slate-50 rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-medium">{workshop}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Articulation with University */}
        <div className="mb-12 p-8 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                Articulación con el Nivel Superior
              </h3>
              <p className="text-slate-600 mb-4">
                Preparamos a nuestros alumnos para rendir materias de la Universidad de Buenos Aires 
                a través del programa <strong>UBA XXI</strong>: Pensamiento Científico y Sociedad y Estado.
              </p>
              <p className="text-slate-600">
                Los alumnos de 4° año trabajan con bibliografía de la CBC para matemáticas: 
                análisis matemático, álgebra, estadística y cálculos en registros gráficos.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-24 h-24 bg-[#1e3a5f] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-center text-sm">UBA<br/>XXI</span>
              </div>
              <div className="w-24 h-24 bg-[#c9a227] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-center text-sm">CBC</span>
              </div>
              <div className="w-24 h-24 bg-[#2d5a87] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-center text-sm">Universidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] text-white font-semibold rounded-full overflow-hidden"
          >
            <span className="relative z-10">Conocer Especialidades</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
