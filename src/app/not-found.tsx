import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-8">
          <div className="text-[#1e3a5f]/10 text-[200px] sm:text-[280px] font-bold leading-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-3xl flex items-center justify-center shadow-2xl">
              <Home className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
          Página No Encontrada
        </h1>
        
        <p className="text-slate-600 text-lg mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Contactanos
          </Link>
        </div>
      </div>
    </div>
  )
}
