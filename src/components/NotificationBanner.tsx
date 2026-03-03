"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bell, X, ChevronRight } from "lucide-react"

interface FeaturedPost {
  id: string
  title: string
  slug: string
  category: {
    name: string
    color: string
  }
}

const defaultPost = {
  id: "demo",
  title: "Matrículas 2026 - Inscripciones Abiertas",
  slug: "matriculas-2026",
  category: { name: "Información", color: "#c9a227" }
}

export default function NotificationBanner() {
  const [featuredPost, setFeaturedPost] = useState<FeaturedPost | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const dismissedId = localStorage.getItem("dismissedPostId")
    if (dismissedId === "demo_banner") {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    async function fetchFeaturedPost() {
      try {
        const response = await fetch("/api/noticias/featured")
        if (!response.ok) return
        
        const data = await response.json()
        if (data && data.id) {
          const dismissedId = localStorage.getItem("dismissedPostId")
          if (dismissedId !== data.id && dismissedId !== "demo_banner") {
            setFeaturedPost(data)
          }
        }
      } catch (error) {
        console.error("Error fetching featured post:", error)
      }
    }

    fetchFeaturedPost()
  }, [])

  if (!isVisible) {
    return null
  }

  const displayPost = featuredPost || defaultPost

  const handleDismiss = () => {
    localStorage.setItem("dismissedPostId", "demo_banner")
    setIsVisible(false)
  }

  return (
    <div 
      data-notification-banner
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#1e3a5f] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-7 h-7 bg-[#c9a227] rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span 
                className="px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap"
                style={{ backgroundColor: displayPost.category.color || '#c9a227' }}
              >
                {displayPost.category.name}
              </span>
              
              <Link 
                href={`/noticias/${displayPost.slug}`}
                className="text-sm sm:text-base font-medium hover:text-[#c9a227] transition-colors truncate flex items-center gap-1"
              >
                <span className="truncate">{displayPost.title}</span>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1.5 hover:bg-white/10 rounded-full transition-colors ml-2"
            aria-label="Cerrar"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
