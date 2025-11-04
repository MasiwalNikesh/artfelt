import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPostBySlug, getAllPosts, getRecentPosts } from "@/lib/blog-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Artfelt Therapy",
    }
  }

  return {
    title: `${post.title} | Artfelt Therapy Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRecentPosts(3).filter((p) => p.id !== post.id).slice(0, 2)

  // Article structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    publishedAt: post.publishedAt,
    modifiedAt: post.updatedAt,
    slug: post.slug,
  })

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-charcoal/60">
          <Link href="/" className="hover:text-charcoal">
            Home
          </Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-charcoal">
            Blog
          </Link>
          <span>→</span>
          <span className="text-charcoal">{post.category}</span>
        </nav>

        {/* Article Meta */}
        <div className="mb-6">
          <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="mb-8 flex items-center gap-6 border-b border-soft-gray pb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-xl font-semibold text-sage-700">
              DM
            </div>
            <div>
              <div className="font-medium text-charcoal">{post.author}</div>
              <div className="text-sm text-charcoal/60">Art Therapist & Mental Wellness Coach</div>
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-sm text-charcoal/60">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="text-sm text-charcoal/60">{post.readTime}</div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-charcoal max-w-none">
          <div
            className="space-y-6 text-charcoal/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 border-t border-soft-gray pt-8">
          <div className="mb-3 text-sm font-semibold text-charcoal/60">Tags:</div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag}`}>
                <span className="rounded-full border border-soft-gray bg-white px-3 py-1 text-sm text-charcoal/70 transition-colors hover:border-sage-400 hover:bg-sage-50">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 rounded-lg border border-soft-gray bg-sage-50/50 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sage-100 text-2xl font-semibold text-sage-700">
              DM
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-charcoal">About Divya Masiwal Batra</h3>
              <p className="mb-2 text-sm font-medium text-sage-700">MA Clinical Psychology | Art Therapist & Psychotherapist</p>
              <p className="mb-4 text-charcoal/70">
                Divya combines her background in Business Economics, Master's in Clinical Psychology, and 9 years of teaching experience at nonprofits to offer a unique approach to art therapy and psychotherapy. She's dedicated to bridging gaps in Indian mental health by making therapy accessible, culturally sensitive, and creative—honoring both evidence-based methods and the healing power of artistic expression.
              </p>
              <div className="flex gap-3">
                <Button asChild size="sm">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/booking">Book a Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full transition-all hover:border-sage-400 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between text-xs text-charcoal/60">
                        <span className="rounded-full bg-sage-100 px-2 py-1 font-medium text-sage-700">
                          {relatedPost.category}
                        </span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <CardTitle className="text-xl">{relatedPost.title}</CardTitle>
                      <CardDescription>{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm font-medium text-sage-600">Read More →</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
            Ready to Experience Art Therapy?
          </h2>
          <p className="mb-8 text-lg text-charcoal/70">
            Move from reading about healing to experiencing it. Book your first session today.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

// Helper function to format markdown-like content to HTML
function formatContent(content: string): string {
  let html = content
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8 font-serif">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-3 mt-6 font-serif">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-2 mt-5">$1</h3>')
    // Bold and Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Lists
    .replace(/^- (.+$)/gim, '<li class="ml-6 mb-1">$1</li>')
    // Paragraphs
    .replace(/\n\n/g, "</p><p>")
    // Wrap in paragraph tags
    .replace(/^(?!<[h|l|p])/gm, "<p>")
    .replace(/(?<![>])$/gm, "</p>")

  return html
}
