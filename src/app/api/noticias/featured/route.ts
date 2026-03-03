import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    const whereCondition: any = {
      published: true,
    }

    if (category) {
      whereCondition.category = {
        slug: category,
      }
    }

    const post = await prisma.post.findFirst({
      where: whereCondition,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    if (!post) {
      return NextResponse.json(null)
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Error fetching featured post:", error)
    return NextResponse.json(null, { status: 500 })
  }
}
