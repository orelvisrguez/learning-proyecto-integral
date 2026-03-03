import { Metadata } from "next"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Calendar, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Noticias y Eventos",
  description: "Mantente informado sobre las últimas noticias, eventos y actividades de Learning Proyecto Integral.",
}

export const revalidate = 60

async function getCategories() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
  })
}

async function getPosts(categorySlug?: string) {
  return prisma.post.findMany({
    where: {
      published: true,
      ...(categorySlug ? { category: { slug: categorySlug } } : {}),
    },
    include: {
      category: true,
    },
    orderBy: { createdAt: "desc" },
  })
}

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const params = await searchParams
  const categories = await getCategories()
  const posts = await getPosts(params.categoria)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1e3a5f] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
            Noticias y Eventos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias, eventos y actividades 
            de nuestra comunidad educativa.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/noticias"
            className={`px-5 py-2.5 rounded-full font-medium transition-all ${
              !params.categoria
                ? "bg-[#1e3a5f] text-white"
                : "bg-white text-slate-600 hover:bg-[#1e3a5f] hover:text-white"
            }`}
          >
            Todas
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/noticias?categoria=${category.slug}`}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                params.categoria === category.slug
                  ? "text-white"
                  : "bg-white text-slate-600 hover:bg-[#1e3a5f] hover:text-white"
              }`}
              style={params.categoria === category.slug ? { backgroundColor: category.color } : {}}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No hay noticias en esta categoría.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-56 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] overflow-hidden">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/30">{post.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                      style={{ backgroundColor: post.category.color }}
                    >
                      {post.category.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.createdAt).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
