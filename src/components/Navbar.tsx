"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, Menu, X, GraduationCap } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('[data-notification-banner]') as HTMLElement
      if (banner) {
        setBannerHeight(banner.offsetHeight)
      } else {
        setBannerHeight(0)
      }
    }

    updateBannerHeight()
    
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true })
    
    return () => observer.disconnect()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/busqueda?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const navItems = [
    { label: "Ideario", href: "#ideario" },
    { label: "Primaria", href: "#primaria" },
    { label: "Secundaria", href: "#secundaria" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || bannerHeight > 0
          ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100" 
          : "bg-white/80"
      }`}
      style={{ paddingTop: bannerHeight > 0 ? `${bannerHeight}px` : '0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 -mt-px">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] rounded-xl opacity-0 group-hover:opacity-70 blur-lg transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#1e3a5f] font-bold text-sm sm:text-lg leading-tight group-hover:text-[#c9a227] transition-colors">Learning</span>
              <span className="text-[#c9a227] font-semibold text-xs sm:text-sm leading-tight">Proyecto Integral</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-slate-600 hover:text-[#1e3a5f] font-medium transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-[#1e3a5f] transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 xl:w-48 h-10 pl-10 pr-4 rounded-full border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all text-sm bg-white/80"
                />
              </div>
            </form>
            <Link
              href="/login"
              className="relative px-5 py-2.5 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Admin</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b84a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100">
          <div className="px-4 py-4 space-y-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </form>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-3 px-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white font-semibold rounded-xl text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
