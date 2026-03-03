import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Plus, Search, Edit, Eye, EyeOff } from "lucide-react"

export default async function AdminNoticiasPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  const posts = await prisma.post.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  }) as { id: string; title: string; slug: string; excerpt: string | null; published: boolean; featured: boolean; createdAt: Date; category: { name: string; color: string } }[]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Gestión de Noticias</h1>
          <p className="text-slate-500">Administra las noticias del sitio</p>
        </div>
        <Link
          href="/admin/noticias/nueva"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white font-medium rounded-lg hover:bg-[#2d5a87] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nueva Noticia
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar noticias..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none transition-all"
            />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 mb-4">No hay noticias todavía.</p>
            <Link
              href="/admin/noticias/nueva"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white font-medium rounded-lg"
            >
              <Plus className="w-4 h-4" />
              Crear primera noticia
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">Título</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">Categoría</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">Estado</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">Fecha</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-slate-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{post.title}</div>
                      {post.excerpt && (
                        <div className="text-sm text-slate-500 truncate max-w-xs">{post.excerpt}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
                        style={{ backgroundColor: post.category.color }}
                      >
                        {post.category.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                          <Eye className="w-4 h-4" />
                          Publicada
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                          <EyeOff className="w-4 h-4" />
                          Borrador
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(post.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/noticias/${post.id}/editar`}
                          className="p-2 text-slate-400 hover:text-[#1e3a5f] hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
