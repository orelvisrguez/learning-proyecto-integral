import { Award, Users, Target, Heart, Calendar, GraduationCap } from "lucide-react"

export default function Nosotros() {
  const stats = [
    { value: "16+", label: "Años de Trayectoria" },
    { value: "Bilingüe", label: "Español-Inglés" },
    { value: "Cambridge", label: "Certificaciones" },
    { value: "Integral", label: "Formación" },
  ]

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold text-sm rounded-full mb-4">
            Conócenos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learning Proyecto Integral es una institución educativa con más de 16 años de experiencia 
            en la elaboración de programas de inmersión para el aprendizaje y práctica intensiva del idioma inglés.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border-l-4 border-[#1e3a5f]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-[#1e3a5f]" />
              </div>
              <h4 className="text-xl font-bold text-[#1e3a5f]">Misión</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Desarrollar el proyecto vital de cada persona, fomentando la capacidad de pensar, 
              trabajar colaborativamente y predisponer para el desarrollo del potencial en forma integral, 
              acompañando en la autoevaluación y cambios de hábitos.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border-l-4 border-[#c9a227]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h4 className="text-xl font-bold text-[#1e3a5f]">Visión</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Ser una institución líder en educación bilingüe, formando personas críticas, empáticas, 
              con autonomía, creatividad e inteligencia social, capaces de contribuir positivamente 
              a la transformación de la sociedad.
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">¿Querés conocer nuestra propuesta educativa?</h3>
              <p className="text-white/80">Solicitá una entrevista y descubrí por qué somos diferentes.</p>
            </div>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-[#c9a227] hover:text-white transition-all whitespace-nowrap"
            >
              Solicitar Entrevista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
