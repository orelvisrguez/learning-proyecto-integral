import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    await prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error marking message as read:", error)
    return NextResponse.json(
      { error: "Error al marcar mensaje como leído" },
      { status: 500 }
    )
  }
}
