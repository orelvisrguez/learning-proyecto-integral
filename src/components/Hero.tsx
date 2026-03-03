"use client"

import { useEffect, useState } from "react"
import { ArrowRight, BookOpen, Users, Award, Globe, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { icon: Users, value: "16+", label: "Años de Experiencia", delay: 0 },
    { icon: Award, value: "Bilingüe", label: "Español-Inglés", delay: 100 },
    { icon: Globe, value: "Cambridge", label: "Certificaciones", delay: 200 },
    { icon: Heart, value: "100%", label: "Formación Integral", delay: 300 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20 sm:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#1e3a5f]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#c9a227]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-[#1e3a5f]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-[#c9a227]/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-16 w-16 h-16 border border-[#1e3a5f]/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-[#c9a227]/10 to-[#1e3a5f]/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f]/10 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#c9a227] animate-pulse" />
              <span className="text-[#1e3a5f] font-medium text-sm">Educación de Excelencia</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight mb-6">
              Learning
              <span className="text-[#c9a227] relative mx-2">
                Proyecto Integral
                <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4" preserveAspectRatio="none">
                  <path d="M0,2 Q50,4 100,2 T200,2" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c9a227" />
                      <stop offset="100%" stopColor="#d4b84a" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Una institución con 16 años de experiencia en educación bilingüe, 
              formamos personas con capacidad de adaptación, creatividad, empatía e inteligencia social.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-full overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Entrevista
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#ideario"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold rounded-full overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Conocer Más</span>
                <div className="absolute inset-0 bg-[#1e3a5f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group w-full h-48 sm:h-56 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <Globe className="w-16 h-16 text-white/80 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <div className="group w-full h-32 bg-gradient-to-br from-[#c9a227] to-[#d4b84a] rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <BookOpen className="w-12 h-12 text-white/90 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="group w-full h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Award className="w-12 h-12 text-[#c9a227] group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="group w-full h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Users className="w-16 h-16 text-[#1e3a5f] group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#1e3a5f]/5 to-[#c9a227]/5 rounded-full blur-3xl" />
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-200 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1e3a5f]/10 rounded-xl mb-4 group-hover:bg-gradient-to-br group-hover:from-[#1e3a5f] group-hover:to-[#2d5a87] transition-all duration-300">
                <stat.icon className="w-7 h-7 text-[#1e3a5f] group-hover:text-white transition-all duration-300" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-1 group-hover:text-[#c9a227] transition-colors duration-300">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gradient-to-b from-[#c9a227] to-[#d4b84a] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
