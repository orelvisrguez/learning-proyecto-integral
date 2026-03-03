"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send, Loader2, Instagram } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a5f]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para responder a todas tus consultas y ayudarte a encontrar 
            el mejor camino educativo para tus hijos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a87] to-[#1e3a5f] rounded-3xl p-8 sm:p-12 text-white h-full overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-[#c9a227]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Dirección</h4>
                      <p className="text-white/80 text-sm">
                        Learning Proyecto Integral<br />
                        DIEGEP 7814
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Teléfonos</h4>
                      <p className="text-white/80 text-sm">4796-9394 / 4791-7205</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/80 text-sm">learning@learning.esc.edu.ar</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/colegiolearningpi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm hover:text-[#c9a227] transition-colors"
                      >
                        @colegiolearningpi
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Horario de Atención</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white/80">Lunes - Viernes</p>
                      <p className="font-medium">Horario de oficina</p>
                    </div>
                    <div>
                      <p className="text-white/80">Sábados</p>
                      <p className="font-medium">Por turno</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe71-Th8mRRYIxWh2k52RKWBg3SMiBx1iGAd3-AiRe7MgbHCg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-block px-6 py-3 bg-[#c9a227] text-white font-semibold rounded-xl overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors">Solicitar Entrevista</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a227]/10 to-transparent rounded-bl-full" />
            
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 relative z-10">Envíanos un Mensaje</h3>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm relative z-10 animate-scale-in">
                ¡Mensaje enviado exitosamente! Te contactaremos pronto.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm relative z-10">
                Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${
                      focusedField === "name" 
                        ? "border-[#1e3a5f] ring-2 ring-[#1e3a5f]/10" 
                        : "border-slate-200 focus:border-[#1e3a5f]"
                    } focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none`}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${
                      focusedField === "phone" 
                        ? "border-[#1e3a5f] ring-2 ring-[#1e3a5f]/10" 
                        : "border-slate-200 focus:border-[#1e3a5f]"
                    } focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none`}
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${
                    focusedField === "email" 
                      ? "border-[#1e3a5f] ring-2 ring-[#1e3a5f]/10" 
                      : "border-slate-200 focus:border-[#1e3a5f]"
                  } focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none`}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Asunto
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${
                    focusedField === "subject" 
                      ? "border-[#1e3a5f] ring-2 ring-[#1e3a5f]/10" 
                      : "border-slate-200 focus:border-[#1e3a5f]"
                  } focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none`}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="admisiones">Información de Admisiones</option>
                  <option value="visita">Programar Visita</option>
                  <option value="entrevista">Solicitar Entrevista</option>
                  <option value="general">Consulta General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 resize-none ${
                    focusedField === "message" 
                      ? "border-[#1e3a5f] ring-2 ring-[#1e3a5f]/10" 
                      : "border-slate-200 focus:border-[#1e3a5f]"
                  } focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none`}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full h-14 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
