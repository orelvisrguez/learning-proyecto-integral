import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { LayoutDashboard, Newspaper, Users, MessageSquare, LogOut, GraduationCap, Settings } from "lucide-react"
import { SignOutButton } from "@/components/SignOutButton"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/noticias", label: "Noticias", icon: Newspaper },
    { href: "/admin/usuarios", label: "Usuarios", icon: Users },
    { href: "/admin/mensajes", label: "Mensajes", icon: MessageSquare },
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-gradient-to-b from-[#1e3a5f] to-[#0f2442] z-50">
        <div className="p-4 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">Learning</span>
              <span className="text-[#c9a227] font-semibold text-xs">Panel Admin</span>
            </div>
          </Link>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors mb-2"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Ver Sitio</span>
          </Link>
          <SignOutButton />
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Bienvenido,</p>
              <p className="font-semibold text-[#1e3a5f]">{session.user?.name || session.user?.email}</p>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
