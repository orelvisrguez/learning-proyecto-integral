import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Calendar, ArrowLeft, User, Clock } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug },
    select: { title: true, excerpt: true },
  }) as { title: string; excerpt: string | null } | null

  if (!post) {
    return { title: "Noticia no encontrada" }
  }

  return {
    title: post.title,
    description: post.excerpt || `Noticia de Learning Proyecto Integral: ${post.title}`,
  }
}

export const revalidate = 60

async function getPost(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
    include: {
      category: true,
    },
  }) as Promise<{ id: string; title: string; slug: string; content: string; excerpt: string | null; imageUrl: string | null; categoryId: string; createdAt: Date; category: { id: string; name: string; color: string } } | null>
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await prisma.post.findMany({
    where: {
      published: true,
      categoryId: post.categoryId,
      id: { not: post.id },
    },
    include: {
      category: true,
    },
    take: 3,
  }) as { id: string; slug: string; title: string; imageUrl: string | null; category: { name: string } }[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/noticias"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1e3a5f] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a noticias
        </Link>

        <article className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          <div className="relative h-80 sm:h-96 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87]">
            {post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl font-bold text-white/30">{post.title.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="inline-block px-4 py-1.5 text-sm font-semibold text-white rounded-full mb-4"
                style={{ backgroundColor: post.category.color }}
              >
                {post.category.name}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.createdAt).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {new Date(post.createdAt).toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph: string, index: number) => (
                paragraph.trim() ? (
                  <p key={index} className="text-slate-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ) : (
                  <br key={index} />
                )
              ))}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Noticias Relacionadas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/noticias/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="h-32 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] relative">
                    {relatedPost.imageUrl ? (
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/30">{relatedPost.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1e3a5f] text-sm line-clamp-2 group-hover:text-[#c9a227] transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
