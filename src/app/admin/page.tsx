import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { FileText, MessageSquare, Folder, Users, ArrowRight, Plus } from "lucide-react"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  const [postCount, categoryCount, messageCount] = await Promise.all([
    prisma.post.count(),
    prisma.category.count(),
    prisma.contactMessage.count({ where: { read: false } }),
  ])

  const recentPosts = await prisma.post.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  }) as { id: string; title: string; createdAt: Date; category: { name: string } }[]

  const recentMessages = await prisma.contactMessage.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  })

  const stats = [
    {
      label: "Noticias",
      value: postCount,
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      href: "/admin/noticias",
    },
    {
      label: "Categorías",
      value: categoryCount,
      icon: Folder,
      color: "from-purple-500 to-purple-600",
      href: "/admin/categorias",
    },
    {
      label: "Mensajes",
      value: messageCount,
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      href: "/admin/mensajes",
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1e3a5f] mb-8">Panel de Administración</h1>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link
            key={index}
            href={stat.href}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#1e3a5f] mb-1">{stat.value}</div>
            <div className="text-slate-500 text-sm">{stat.label}</div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1e3a5f]">Últimas Noticias</h2>
            <Link
              href="/admin/noticias/nueva"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white text-sm font-medium rounded-lg hover:bg-[#2d5a87] transition-colors"
            >
              <Plus className="w-4 h-4" />
              Nueva
            </Link>
          </div>
          {recentPosts.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No hay noticias aún.</p>
          ) : (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/admin/noticias/${post.id}/editar`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 truncate">{post.title}</p>
                    <p className="text-sm text-slate-500">{post.category.name}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1e3a5f]">Mensajes Recientes</h2>
            <Link
              href="/admin/mensajes"
              className="text-sm text-[#1e3a5f] hover:underline"
            >
              Ver todos
            </Link>
          </div>
          {recentMessages.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No hay mensajes aún.</p>
          ) : (
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-xl ${message.read ? "bg-slate-50" : "bg-blue-50"}`}
                >
                  <p className="font-medium text-slate-800">{message.name}</p>
                  <p className="text-sm text-slate-500 truncate">{message.subject || message.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-6">Accesos Rápidos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/noticias"
            className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <FileText className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-medium text-slate-700">Gestionar Noticias</span>
          </Link>
          <Link
            href="/admin/usuarios"
            className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <Users className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-medium text-slate-700">Gestionar Usuarios</span>
          </Link>
          <Link
            href="/admin/mensajes"
            className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-medium text-slate-700">Ver Mensajes</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <Folder className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-medium text-slate-700">Ver Sitio Web</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
