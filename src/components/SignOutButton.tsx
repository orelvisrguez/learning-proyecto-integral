"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-medium">Cerrar Sesión</span>
    </button>
  )
}
