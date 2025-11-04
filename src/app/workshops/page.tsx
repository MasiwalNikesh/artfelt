import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Art Therapy Workshops by Divya Masiwal Batra | Group Programs Mumbai",
  description:
    "Join art therapy workshops and group programs led by Divya Masiwal Batra. Self-compassion, mandala therapy, and creative wellbeing programs in Mumbai & online.",
  path: "/workshops",
  keywords: [
    "art therapy workshops",
    "group therapy Mumbai",
    "mandala therapy workshop",
    "creative wellbeing programs",
    "corporate wellness workshops",
    "team building art therapy",
  ],
})

// Sample workshop data - replace with your CMS later
const workshops = [
  {
    id: "1",
    title: "Self-Compassion Through Art",
    tagline: "Building a kinder relationship with yourself",
    date: "Coming Soon",
    duration: "2 hours",
    format: "Online",
    capacity: "8-10 participants",
    price: 1500,
    description:
      "Learn to silence your inner critic and develop self-compassion through guided art exercises and group reflection.",
    topics: [
      "Understanding self-compassion",
      "Identifying inner critic patterns",
      "Art exercises for self-kindness",
      "Group sharing and support",
    ],
  },
  {
    id: "2",
    title: "Mandala Therapy Workshop",
    tagline: "Finding calm through circular art",
    date: "Coming Soon",
    duration: "90 minutes",
    format: "Both online & in-person",
    capacity: "6-8 participants",
    price: 1200,
    description:
      "Experience the meditative practice of creating mandalas. Perfect for managing anxiety and finding inner peace.",
    topics: [
      "Introduction to mandala symbolism",
      "Guided mandala creation",
      "Mindfulness practice",
      "Reflection and sharing",
    ],
  },
  {
    id: "3",
    title: "Creative Expression for Wellbeing",
    tagline: "4-week program for ongoing support",
    date: "Coming Soon",
    duration: "4 weekly sessions (90 mins each)",
    format: "Online",
    capacity: "6-8 participants",
    price: 5000,
    description:
      "A comprehensive 4-week journey exploring different art forms as tools for emotional regulation and self-discovery.",
    topics: [
      "Week 1: Drawing emotions",
      "Week 2: Collage for life transitions",
      "Week 3: Color and mood exploration",
      "Week 4: Integration and reflection",
    ],
  },
]

export default function WorkshopsPage() {
  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Workshops", url: "/workshops" },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-lavender/20 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Workshops & Programs
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Community healing through creative expression. Join small group sessions focused on
            specific themes and build your creative practice.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal">
            Why Join a Workshop?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl">👥</div>
              <h3 className="mb-2 font-semibold text-charcoal">Community Support</h3>
              <p className="text-sm text-charcoal/70">
                Connect with others on similar journeys in a safe, supportive environment.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-2 font-semibold text-charcoal">Affordable Access</h3>
              <p className="text-sm text-charcoal/70">
                More budget-friendly than 1:1 sessions while still receiving expert guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🎨</div>
              <h3 className="mb-2 font-semibold text-charcoal">Learn New Skills</h3>
              <p className="text-sm text-charcoal/70">
                Explore various art techniques and creative practices for wellbeing.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🌱</div>
              <h3 className="mb-2 font-semibold text-charcoal">Focused Themes</h3>
              <p className="text-sm text-charcoal/70">
                Each workshop targets specific topics like self-compassion or stress management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal">
            Upcoming Workshops
          </h2>
          <div className="space-y-6">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* Workshop Info */}
                  <div className="bg-sage-50 p-8 lg:col-span-1">
                    <CardTitle className="mb-2 text-2xl">{workshop.title}</CardTitle>
                    <CardDescription className="mb-4 text-base text-sage-700">
                      {workshop.tagline}
                    </CardDescription>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <p>
                        <strong>Date:</strong> {workshop.date}
                      </p>
                      <p>
                        <strong>Duration:</strong> {workshop.duration}
                      </p>
                      <p>
                        <strong>Format:</strong> {workshop.format}
                      </p>
                      <p>
                        <strong>Group Size:</strong> {workshop.capacity}
                      </p>
                      <p className="text-lg font-semibold text-sage-700">₹{workshop.price}</p>
                    </div>
                  </div>

                  {/* Workshop Details */}
                  <div className="p-8 lg:col-span-2">
                    <p className="mb-6 text-charcoal/70">{workshop.description}</p>
                    <div className="mb-6">
                      <h3 className="mb-3 font-semibold text-charcoal">What We'll Cover</h3>
                      <ul className="space-y-2">
                        {workshop.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-charcoal/70">
                            <span className="mt-1 text-sage-600">✓</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button variant="terracotta" asChild>
                        <a
                          href="https://wa.me/919717259345?text=Hi, I'm interested in the workshop:"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Interest
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Ask Questions</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Note about upcoming dates */}
          <div className="mt-10 rounded-lg bg-soft-blue/20 p-6 text-center">
            <p className="text-charcoal/70">
              Workshops are scheduled regularly based on interest. Register your interest above and
              we'll notify you when dates are confirmed!
            </p>
          </div>
        </div>
      </section>

      {/* Private Workshops */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-terracotta/10 to-lavender/10 p-8 md:p-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
              Corporate & Private Workshops
            </h2>
            <p className="mb-6 text-lg text-charcoal/70">
              We offer customized workshops for corporate teams, educational institutions, and
              private groups. Perfect for team building, stress management, and employee wellbeing
              programs.
            </p>
            <ul className="mb-8 space-y-2 text-charcoal/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Customized themes based on your needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Flexible scheduling and duration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Online or in-person options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Group sizes from 10-30 participants</span>
              </li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/contact">Request a Custom Workshop</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Workshops?"
        description="We're happy to help you find the right workshop or program for your needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </>
  )
}
