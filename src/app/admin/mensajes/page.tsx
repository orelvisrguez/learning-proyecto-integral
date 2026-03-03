"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { MessageSquare, Check, X, Mail, Phone, Calendar, ArrowLeft, Loader2 } from "lucide-react"

interface Message {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  read: boolean
  createdAt: string
}

export default function AdminMensajesPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    try {
      const res = await fetch("/api/contact")
      if (res.ok) {
        const data = await res.json()
        setMessages(data)
      }
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  async function markAsRead(id: string) {
    await fetch(`/api/contact/${id}/read`, { method: "POST" })
    fetchMessages()
  }

  async function deleteMessage(id: string) {
    if (!confirm("¿Estás seguro de eliminar este mensaje?")) return
    await fetch(`/api/contact/${id}/delete`, { method: "POST" })
    fetchMessages()
  }

  const unreadCount = messages.filter(m => !m.read).length

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#1e3a5f]" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Mensajes de Contacto</h1>
          <p className="text-slate-500">{unreadCount} mensajes sin leer</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {messages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
            <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No hay mensajes todavía.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${
                  message.read ? "border-slate-200" : "border-[#c9a227]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-[#1e3a5f]">{message.name}</h3>
                      {message.read ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                          <Check className="w-3 h-3" /> Leído
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#c9a227] text-white text-xs rounded-full">
                          Nuevo
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {message.email}
                      </div>
                      {message.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {message.phone}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(message.createdAt).toLocaleString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {message.subject && (
                      <p className="text-sm font-medium text-[#1e3a5f] mb-2">
                        Asunto: {message.subject}
                      </p>
                    )}

                    <p className="text-slate-600 whitespace-pre-wrap">{message.message}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!message.read && (
                      <button
                        onClick={() => markAsRead(message.id)}
                        className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Marcar como leído"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Eliminar mensaje"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
