import { GraduationCap, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#c9a227]" />
              </div>
              <div>
                <span className="text-white font-bold text-lg block">Learning</span>
                <span className="text-[#c9a227] font-semibold">Proyecto Integral</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Institución educativa con 16 años de experiencia en educación bilingüe. 
              Formamos personas con capacidad de adaptación, creatividad, empatía e inteligencia social.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/colegiolearningpi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a227] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/LearningProyectoIntegral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a227] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@LearningProyectoIntegral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a227] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#c9a227]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Ideario", href: "#ideario" },
                { label: "Primaria", href: "#primaria" },
                { label: "Secundaria", href: "#secundaria" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Noticias", href: "/noticias" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-300 hover:text-[#c9a227] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#c9a227]">Niveles Educativos</h4>
            <ul className="space-y-3">
              <li><span className="text-slate-300 text-sm">Educación Primaria Bilingüe</span></li>
              <li><span className="text-slate-300 text-sm">Escuela Secundaria Bachiller</span></li>
              <li><span className="text-slate-300 text-sm">Certificaciones Cambridge</span></li>
              <li><span className="text-slate-300 text-sm">Programas de Inmersión</span></li>
              <li><span className="text-slate-300 text-sm">English Immersion Programme</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[#c9a227]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  Boulevard Santa Fe 1850<br />
                  Olivos, Vicente López<br />
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+541147969394" className="text-slate-300 hover:text-[#c9a227] transition-colors text-sm">
                    4796-9394
                  </a>
                  <a href="tel:+541147917205" className="text-slate-300 hover:text-[#c9a227] transition-colors text-sm">
                    4791-7205
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <a href="mailto:learning@learning.esc.edu.ar" className="text-slate-300 hover:text-[#c9a227] transition-colors text-sm">
                  learning@learning.esc.edu.ar
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  Lun - Vie: 8:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.536866224562!2d-58.4931798!3d-34.5179811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb139edb2b82d%3A0x3e7803ee76dfdfd9!2sLearning%20Proyecto%20Integral%20-%20Primaria%20y%20Secundaria%20Biling%C3%BCe!5e0!3m2!1ses-419!2sar!4v1709241234567!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Learning Proyecto Integral"
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Learning Proyecto Integral. Todos los derechos reservados. DIEGEP 7814
            </p>
            <div className="flex gap-6">
              <a href="/politica-privacidad" className="text-slate-400 hover:text-[#c9a227] transition-colors text-sm">Política de Privacidad</a>
              <a href="/terminos-condiciones" className="text-slate-400 hover:text-[#c9a227] transition-colors text-sm">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
