import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { MailerSend } from "mailersend"
import { Recipient, EmailParams, Sender } from "mailersend"

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
})

const FROM_EMAIL = process.env.MAILERSEND_FROM_EMAIL || "noreply@learningschooltrial.com"
const FROM_NAME = process.env.MAILERSEND_FROM_NAME || "Learning Proyecto Integral"

async function sendNotificationEmail(data: {
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
}) {
  const subjectDisplay = data.subject 
    ? `Nuevo mensaje de contacto: ${data.subject}` 
    : "Nuevo mensaje de contacto desde la web"

  const emailContent = `
Nuevo mensaje de contacto desde Learning Proyecto Integral

========================================
DATOS DEL CONTACTO
========================================
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || "No proporcionado"}
Asunto: ${data.subject || "No especificado"}

========================================
MENSAJE
========================================
${data.message}

========================================
Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
  `.trim()

  const recipient = new Recipient("learning@learning.esc.edu.ar", "Learning Proyecto Integral")
  const sender = new Sender(FROM_EMAIL, FROM_NAME)

  const emailParams = new EmailParams({
    from: sender,
    to: [recipient],
    subject: subjectDisplay,
    text: emailContent,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
          Nuevo mensaje de contacto - Learning Proyecto Integral
        </h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Datos del Contacto</h3>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || "No proporcionado"}</p>
          <p><strong>Asunto:</strong> ${data.subject || "No especificado"}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Mensaje</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
        </div>
        
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          Enviado el ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
        </p>
      </div>
    `,
  })

  try {
    await mailerSend.email.send(emailParams)
    console.log("Email de notificación enviado exitosamente")
  } catch (emailError) {
    console.error("Error al enviar email de notificación:", emailError)
  }
}

async function sendConfirmationEmail(data: {
  name: string
  email: string
}) {
  const recipient = new Recipient(data.email, data.name)
  const sender = new Sender(FROM_EMAIL, FROM_NAME)

  const emailParams = new EmailParams({
    from: sender,
    to: [recipient],
    subject: "Confirmación de contacto - Learning Proyecto Integral",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
          Gracias por contactarnos
        </h2>
        
        <p>Hola <strong>${data.name}</strong>,</p>
        
        <p>Hemos recibido tu mensaje correctamente. Nuestro equipo te responderá a la brevedad posible.</p>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">Información de contacto</h3>
          <p><strong>Teléfono:</strong> 4796-9394 / 4791-7205</p>
          <p><strong>Email:</strong> learning@learning.esc.edu.ar</p>
          <p><strong>Web:</strong> Learning Proyecto Integral</p>
        </div>
        
        <p style="color: #888; font-size: 12px; margin-top: 30px;">
          Este es un email automático, por favor no respondas a este mensaje.
        </p>
      </div>
    `,
    text: `
Gracias por contactarnos, ${data.name}.

Hemos recibido tu mensaje correctamente. Nuestro equipo te responderá a la brevedad posible.

Información de contacto:
- Teléfono: 4796-9394 / 4791-7205
- Email: learning@learning.esc.edu.ar

Learning Proyecto Integral
    `.trim(),
  })

  try {
    await mailerSend.email.send(emailParams)
    console.log("Email de confirmación enviado exitosamente")
  } catch (emailError) {
    console.error("Error al enviar email de confirmación:", emailError)
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Error fetching messages" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Por favor completa los campos requeridos" },
        { status: 400 }
      )
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      },
    })

    await sendNotificationEmail({ name, email, phone, subject, message })
    await sendConfirmationEmail({ name, email })

    return NextResponse.json(contactMessage, { status: 201 })
  } catch (error) {
    console.error("Error creating contact message:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    )
  }
}
