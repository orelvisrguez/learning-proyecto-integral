import { prisma } from "@/lib/prisma"
import Hero from "@/components/Hero"
import Ideario from "@/components/Ideario"
import Primaria from "@/components/Primaria"
import Secundaria from "@/components/Secundaria"
import Nosotros from "@/components/Nosotros"
import Proyectos from "@/components/Proyectos"
import Testimonios from "@/components/Testimonios"
import LatestNews from "@/components/LatestNews"
import Contacto from "@/components/Contacto"

export const revalidate = 60

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      category: true,
    },
    orderBy: { createdAt: "desc" },
    take: 3,
  })

  return (
    <>
      <Hero />
      <Ideario />
      <Primaria />
      <Secundaria />
      <Nosotros />
      <Proyectos />
      <Testimonios />
      <LatestNews posts={posts} />
      <Contacto />
    </>
  )
}
