import 'dotenv/config'
import { prisma } from "../src/lib/prisma"
import bcrypt from "bcryptjs"

async function main() {
  console.log("Starting seed...")

  // Create categories
  const categories = [
    { name: "Noticias", slug: "noticias", color: "#1e3a5f", description: "Noticias institucionales" },
    { name: "Eventos", slug: "eventos", color: "#c9a227", description: "Eventos escolares" },
    { name: "Avisos", slug: "avisos", color: "#e11d48", description: "Avisos importantes" },
    { name: "Comunicación", slug: "comunicacion", color: "#059669", description: "Comunicados oficiales" },
    { name: "Actividades", slug: "actividades", color: "#7c3aed", description: "Actividades extracurriculares" },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }
  console.log("Categories created")

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10)
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@colegio.edu" },
    update: {},
    create: {
      email: "admin@colegio.edu",
      password: hashedPassword,
      name: "Administrador",
      role: "ADMIN",
    },
  })
  console.log("Admin user created:", admin.email)

  // Create sample posts
  const eventosCategory = await prisma.category.findUnique({ where: { slug: "eventos" } })
  const noticiasCategory = await prisma.category.findUnique({ where: { slug: "noticias" } })
  const avisosCategory = await prisma.category.findUnique({ where: { slug: "avisos" } })

  if (noticiasCategory) {
    await prisma.post.upsert({
      where: { slug: "inauguracion-nuevo-aula" },
      update: {},
      create: {
        title: "Inauguración de Nuevas Aulas Modernas",
        slug: "inauguracion-nuevo-aula",
        excerpt: "Celebramos la inauguración de nuestro nuevo edificio con tecnología de última generación.",
        content: "Es con gran emoción que inauguramos nuestro nuevo edificio de aulas, equipado con tecnología de última generación para nuestros estudiantes.\n\nEste nuevo espacio cuenta con:\n- Pizarras interactivas\n- Aire acondicionado\n- Labs de computación\n- Espacios accesibles\n\nAgradecemos a todos los padres que hicieron posible este sueño.",
        imageUrl: "",
        categoryId: noticiasCategory.id,
        published: true,
        featured: true,
      },
    })
  }

  if (eventosCategory) {
    await prisma.post.upsert({
      where: { slug: "feria-cientifica-2024" },
      update: {},
      create: {
        title: "Feria Científica Anual 2024",
        slug: "feria-cientifica-2024",
        excerpt: "Los estudiantes展示aron sus proyectos de investigación en la feria científica anual.",
        content: "Nuestra feria científica anual fue un rotundo éxito con más de 50 proyectos participantes.\n\nLos estudiantes de todos los niveles presentaron proyectos innovadores en las áreas de:\n- Biología\n- Física\n- Química\n- Tecnología\n\nFelicitamos a todos los participantes y especialmente a los ganadores.",
        imageUrl: "",
        categoryId: eventosCategory.id,
        published: true,
        featured: false,
      },
    })
  }

  if (avisosCategory) {
    await prisma.post.upsert({
      where: { slug: "inicio-periodo-inscripciones" },
      update: {},
      create: {
        title: "Período de Inscripciones Abiertas",
        slug: "inicio-periodo-inscripciones",
        excerpt: "Ya están abiertas las inscripciones para el ciclo escolar 2024-2025.",
        content: "Estimados padres de familia:\n\nLes informamos que ya se encuentran abiertas las inscripciones para el ciclo escolar 2024-2025.\n\nRequisitos:\n- Acta de nacimiento\n- CURP\n- Cartilla de vacunación\n- Kardac anterior\n\nFecha límite: 31 de marzo\n\nPara más información favor de comunicarse al departamento de admisiones.",
        imageUrl: "",
        categoryId: avisosCategory.id,
        published: true,
        featured: true,
      },
    })
  }

  console.log("Sample posts created")
  console.log("Seed completed!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
