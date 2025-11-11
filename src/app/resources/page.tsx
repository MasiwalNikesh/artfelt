import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/shared/CTASection"
import { getRecentPosts } from "@/lib/blog-data"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Art Therapy Resources by Divya Batra Masiwal | Free & Paid Tools",
  description:
    "Therapeutic art resources curated by Divya Batra Masiwal: mandala coloring books, creative emotion workbooks, healing journals, and free downloadable guides for mental wellness.",
  path: "/resources",
  keywords: [
    "art therapy resources",
    "mandala coloring book",
    "creative emotion workbook",
    "healing journal",
    "mental wellness tools India",
    "therapeutic art exercises",
  ],
})

// Art Therapy products curated by Divya Batra Masiwal
const products = [
  {
    id: "1",
    title: "Mandala Therapy Coloring Book",
    category: "Art Therapy Tools",
    price: 399,
    isFree: false,
    description:
      "Therapeutically designed mandala patterns for stress reduction and emotional regulation. Each design is crafted to support mindfulness and inner calm.",
    features: ["40 unique therapeutic designs", "Premium art paper", "Guided instructions", "Portable A4 size"],
  },
  {
    id: "2",
    title: "Creative Emotions Workbook",
    category: "Self-Discovery",
    price: 499,
    isFree: false,
    description:
      "A comprehensive art therapy workbook combining creative exercises with reflective prompts to explore and understand your emotional landscape.",
    features: [
      "30 art-based exercises",
      "Emotion identification tools",
      "Journaling prompts",
      "Self-compassion practices",
    ],
  },
  {
    id: "3",
    title: "Healing Through Art Journal",
    category: "Creative Journaling",
    price: 599,
    isFree: false,
    description:
      "Transform your healing journey with this guided art journal featuring prompts, exercises, and space for creative expression designed by Divya.",
    features: ["90 days of prompts", "Mixed media friendly", "Therapeutic exercises", "Goal-setting sections"],
  },
  {
    id: "4",
    title: "Free Art Therapy Starter Guide",
    category: "Digital Download",
    price: 0,
    isFree: true,
    description:
      "Begin your art therapy journey with this comprehensive guide featuring 15 therapeutic art exercises, tips for getting started, and insights from Divya.",
    features: [
      "15 beginner exercises",
      "Instant PDF download",
      "No art experience needed",
      "Professional guidance",
    ],
  },
]

export default function ResourcesPage() {
  const recentBlogPosts = getRecentPosts(3)

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-soft-blue/20 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Art Therapy Resources & Tools
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Curated by Divya Batra Masiwal: Explore therapeutic tools, creative workbooks, and
            educational content to support your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="rounded-lg border-2 border-sage-400 bg-sage-50 p-6 text-center transition-all hover:bg-sage-100">
              <div className="mb-2 text-3xl">🎨</div>
              <div className="font-semibold text-charcoal">Therapeutic Tools</div>
            </div>
            <div className="rounded-lg border border-soft-gray bg-white p-6 text-center transition-all hover:bg-sage-50">
              <div className="mb-2 text-3xl">📔</div>
              <div className="font-semibold text-charcoal">Workbooks</div>
            </div>
            <div className="rounded-lg border border-soft-gray bg-white p-6 text-center transition-all hover:bg-sage-50">
              <div className="mb-2 text-3xl">✍️</div>
              <div className="font-semibold text-charcoal">Journals</div>
            </div>
            <Link href="/blog" className="block">
              <div className="rounded-lg border border-soft-gray bg-white p-6 text-center transition-all hover:border-sage-400 hover:bg-sage-50">
                <div className="mb-2 text-3xl">📝</div>
                <div className="font-semibold text-charcoal">Blog Articles</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold text-charcoal">Self-Help Products</h2>
            <div className="flex gap-3">
              <span className="rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
                Free
              </span>
              <span className="rounded-full bg-terracotta/20 px-3 py-1 text-sm font-medium text-terracotta-dark">
                Paid
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col transition-all hover:border-sage-400 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-charcoal/60">
                      {product.category}
                    </span>
                    {product.isFree && (
                      <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs font-semibold text-sage-700">
                        FREE
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mb-4 space-y-1 text-sm text-charcoal/70">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-0.5 text-sage-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="mb-3 text-2xl font-bold text-sage-700">
                      {product.isFree ? "Free" : `₹${product.price}`}
                    </p>
                    <Button className="w-full" variant={product.isFree ? "outline" : "terracotta"}>
                      {product.isFree ? "Download" : "Purchase"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
              Art Therapy Insights by Divya
            </h2>
            <p className="text-lg text-charcoal/70">
              Professional guidance, practical techniques, and reflections on healing through creative expression
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full transition-all hover:border-sage-400 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between text-xs text-charcoal/60">
                      <span className="rounded-full bg-sage-100 px-2 py-1 font-medium text-sage-700">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
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

      {/* Artfelt Basics (Future) */}
      <section className="bg-sage-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-4 text-5xl">🎓</div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
            Artfelt Basics Video Modules
          </h2>
          <p className="mb-8 text-lg text-charcoal/70">
            Coming soon: Self-paced video modules covering mental health fundamentals, art therapy
            techniques, and practical wellbeing tools.
          </p>
          <Button asChild>
            <Link href="/contact">Join the Waitlist</Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Looking for Personal Support?"
        description="While resources are helpful, sometimes you need personalized guidance. Our therapy and coaching services are here for you."
        primaryButtonText="Book a Session"
        primaryButtonHref="/booking"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </>
  )
}
