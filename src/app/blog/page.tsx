import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPosts, blogCategories } from "@/lib/blog-data"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Art Therapy Blog by Divya Batra Masiwal | Mental Wellness Insights",
  description:
    "Explore expert articles on art therapy, mental wellness, and creative healing by Divya Batra Masiwal, MA Clinical Psychology. Practical techniques for emotional wellbeing in India.",
  path: "/blog",
  keywords: [
    "art therapy blog",
    "mental wellness articles",
    "creative healing techniques",
    "Indian mental health",
    "psychology insights",
    "therapeutic art exercises",
  ],
})

export default function BlogPage() {
  const posts = getAllPosts()

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Art Therapy & Mental Wellness Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Practical wisdom, creative techniques, and reflections on healing through art therapy
          </p>
          <p className="mt-4 text-base text-charcoal/60">
            By Divya Batra Masiwal, Art Therapist & Mental Wellness Coach
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-soft-gray bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/blog">
              <Button variant="outline" className="border-sage-400 bg-sage-50">
                All Articles
              </Button>
            </Link>
            {blogCategories.map((category) => (
              <Link key={category.id} href={`/blog/category/${category.slug}`}>
                <Button variant="ghost" className="text-charcoal/70 hover:text-charcoal">
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-b from-sage-50 to-sage-100 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mb-4 text-4xl">💌</div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
            Stay Connected
          </h2>
          <p className="mb-8 text-lg text-charcoal/70">
            Receive new articles, art therapy tips, and mental wellness insights directly in your
            inbox.
          </p>
          <div className="mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-soft-gray px-4 py-2 focus:border-sage-400 focus:outline-none"
            />
            <Button size="lg">Subscribe</Button>
          </div>
          <p className="mt-4 text-xs text-charcoal/60">
            No spam, unsubscribe anytime. Your privacy is important to us.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
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
