import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPostsByCategory, blogCategories } from "@/lib/blog-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = blogCategories.find((c) => c.slug === params.slug)

  if (!category) {
    return {}
  }

  return generatePageMetadata({
    title: `${category.name} | Artfelt Therapy Blog`,
    description: category.description,
    path: `/blog/category/${params.slug}`,
  })
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = blogCategories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(category.name)

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: category.name, url: `/blog/category/${params.slug}` },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Category Hero */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className={`mb-4 inline-block rounded-full bg-${category.color}-100 px-4 py-2 text-sm font-medium text-${category.color}-700`}>
            {category.name}
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            {category.description}
          </p>
          <p className="mt-4 text-sm text-charcoal/60">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-soft-gray bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/blog">
              <Button variant="outline">
                All Articles
              </Button>
            </Link>
            {blogCategories.map((cat) => (
              <Link key={cat.id} href={`/blog/category/${cat.slug}`}>
                <Button
                  variant={cat.slug === params.slug ? "default" : "ghost"}
                  className={cat.slug === params.slug ? "bg-sage-600" : "text-charcoal/70 hover:text-charcoal"}
                >
                  {cat.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full transition-all hover:border-sage-400 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between text-xs text-charcoal/60">
                        <span className="rounded-full bg-sage-100 px-2 py-1 font-medium text-sage-700">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                      <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-charcoal/60">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-sm font-medium text-sage-600">Read More →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-charcoal/60">No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-sage-50 to-sage-100 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="mb-8 text-lg text-charcoal/70">
            Reading about art therapy is a great start. Experiencing it can be transformative.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/booking">Book a Session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
