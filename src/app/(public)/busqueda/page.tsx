import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Search as SearchIcon, Calendar } from "lucide-react"

export const revalidate = 60

async function searchPosts(query: string) {
  return prisma.post.findMany({
    where: {
      published: true,
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { content: { contains: query, mode: "insensitive" } },
        { excerpt: { contains: query, mode: "insensitive" } },
      ],
    },
    include: {
      category: true,
    },
    orderBy: { createdAt: "desc" },
  })
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const params = await searchParams
  const query = params.q || ""
  const results = query ? await searchPosts(query) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a5f]/10 rounded-full mb-6">
            <SearchIcon className="w-8 h-8 text-[#1e3a5f]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Resultados de Búsqueda
          </h1>
          {query && (
            <p className="text-slate-600">
              {results.length} resultado{results.length !== 1 ? "s" : ""} para &quot;<span className="font-semibold text-[#1e3a5f]">{query}</span>&quot;
            </p>
          )}
        </div>

        {!query ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Ingresa un término de búsqueda para encontrar noticias.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
            <p className="text-slate-500 text-lg mb-4">No se encontraron resultados para tu búsqueda.</p>
            <p className="text-slate-400">Intenta con otras palabras clave.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((post) => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-xl flex-shrink-0 overflow-hidden">
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white/30">{post.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                        style={{ backgroundColor: post.category.color }}
                      >
                        {post.category.name}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.createdAt).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-2 hover:text-[#c9a227] transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2d5a87] transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
