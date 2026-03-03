import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  imageUrl: string | null
  category: {
    name: string
    color: string
  }
  createdAt: Date
}

export default function LatestNews({ posts }: { posts: Post[] }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] font-semibold text-sm rounded-full mb-4">
              Mantente Informado
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              Últimas Noticias
            </h2>
          </div>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all"
          >
            Ver Todas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No hay noticias publicadas actualmente.</p>
            <Link href="/noticias" className="text-[#1e3a5f] font-medium hover:underline mt-2 inline-block">
              Ver todas las noticias →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] overflow-hidden">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/30">N</span>
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
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
