"use client"

import { useEffect } from "react"
import { RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">⚠️</span>
        </div>

        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
          Algo salió mal
        </h2>
        
        <p className="text-slate-600 mb-8">
          Ha ocurrido un error inesperado. Por favor intentá de nuevo.
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
