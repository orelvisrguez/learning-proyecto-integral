"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  videoUrl?: string
  color: string
}

export default function Proyectos() {
  const [mounted, setMounted] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [videoModal, setVideoModal] = useState<{ open: boolean; url: string }>({ open: false, url: "" })

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

    document.querySelectorAll(".proyecto-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: "Hogar Querubines",
      description: "Trabajamos con el Hogar Querubines en Olivos, albergue para niños y jóvenes judicializados. Realizamos jornadas recreativas, obtención y distribución de donaciones para satisfacer necesidades básicas.",
      category: "Solidario",
      image: "/images/proyectos/hogar-querubines.jpg",
      videoUrl: "https://youtu.be/jN5IacJ4Ews",
      color: "from-rose-500 to-rose-600",
    },
    {
      id: 2,
      title: "La Chata Solidaria",
      description: "Nos sumamos a esta organización que trabaja en el Chaco Impenetrable. Realizamos viajes solidarios para reflexionar sobre la vida y valorar lo que tenemos, generando conciencia social.",
      category: "Solidario",
      image: "/images/proyectos/chata-solidaria.jpg",
      videoUrl: "https://youtu.be/oIXgaeCd_pc",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 3,
      title: "Fundación Primeros Pasos Delfina Vasallo",
      description: "Concientización sobre la donación de médula ósea. Participamos activamente en campañas de información y registro de potenciales donors.",
      category: "Solidario",
      image: "/images/proyectos/fundacion-primeros-pasos.jpg",
      videoUrl: "https://youtu.be/Mvo4G3YhXJg",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Parlamento de la Juventud",
      description: "Programa de participación cívica donde los alumnos elaboran proyectos de ordenanza, debaten y votan en el Honorable Consejo Deliberante de Vicente López. ¡Somos ganadores!",
      category: "Ciudadanía",
      image: "/images/proyectos/hogar-querubines.jpg",
      videoUrl: "https://youtu.be/VwFNAsaa4aM",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 5,
      title: "Programa GLOBE",
      description: "Participamos del programa de la NASA para observación ambiental. Medici temperatura, precipitaciones y cambios en la vegetación para comprender el cambio climático.",
      category: "Medio Ambiente",
      image: "/images/proyectos/fundacion-primeros-pasos.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "English Immersion Programme",
      description: "Programas de inmersión intensiva en inglés con staff internacional. Recreamos la experiencia de visitar un país angloparlante con actividades culturales, deportivas y recreativas.",
      category: "Académico",
      image: "/images/proyectos/chata-solidaria.jpg",
      color: "from-violet-500 to-violet-600",
    },
  ]

  const openVideo = (url: string) => {
    setVideoModal({ open: true, url })
  }

  const closeVideo = () => {
    setVideoModal({ open: false, url: "" })
  }

  return (
    <section id="proyectos" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
            Actividades Extraescolares
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Proyectos Institucionales
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Complementamos la formación académica con proyectos innovadores que desarrollan 
            liderazgo, creatividad y compromiso social en nuestros estudiantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`proyecto-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Play Button for videos */}
                {project.videoUrl && (
                  <button
                    onClick={() => openVideo(project.videoUrl!)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group-hover:animate-pulse"
                  >
                    <Play className="w-7 h-7 text-[#1e3a5f] ml-1" fill="#1e3a5f" />
                  </button>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${project.color}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Hover decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] to-[#c9a227] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full overflow-hidden"
          >
            <span className="relative z-10">Ver Todos los Programas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {videoModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <iframe
              src={videoModal.url.replace("youtu.be/", "youtube.com/embed/")}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
