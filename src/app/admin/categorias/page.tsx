"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  color: string
}

export default function AdminCategoriasPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#1e3a5f",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories")
      const data = await res.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormData({ name: "", description: "", color: "#1e3a5f" })
        setShowForm(false)
        fetchCategories()
      }
    } catch (error) {
      console.error("Error creating category:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-500">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/admin")}
                className="text-slate-500 hover:text-slate-700"
              >
                ← Volver
              </button>
              <h1 className="text-2xl font-bold text-[#1e3a5f]">Gestión de Categorías</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white font-medium rounded-lg hover:bg-[#2d5a87] transition-colors"
            >
              {showForm ? "Cancelar" : "Nueva Categoría"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-[#1e3a5f] mb-6">Nueva Categoría</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all"
                  placeholder="Nombre de la categoría"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Descripción
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all resize-none"
                  placeholder="Descripción opcional"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Color
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-12 h-12 rounded-lg border border-slate-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all"
                    placeholder="#1e3a5f"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-xl hover:bg-[#2d5a87] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Guardando..." : "Guardar Categoría"}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {categories.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No hay categorías todavía.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-4 p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <div
                      className="w-6 h-6 rounded-lg"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">{category.name}</h3>
                    {category.description && (
                      <p className="text-sm text-slate-500">{category.description}</p>
                    )}
                  </div>
                  <span className="text-sm text-slate-400 font-mono">{category.slug}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
