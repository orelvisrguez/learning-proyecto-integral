export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#c9a227] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-slate-600 font-medium">Cargando...</p>
      </div>
    </div>
  )
}
