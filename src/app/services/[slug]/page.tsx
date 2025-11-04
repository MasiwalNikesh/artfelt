import { notFound } from "next/navigation"
import { getAllServices, getServiceBySlug } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"
import type { Metadata } from "next"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Artfelt Therapy`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">{service.icon}</div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-sage-700">{service.tagline}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/booking">Book a Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
              About {service.title}
            </h2>
            <p className="text-lg leading-8 text-charcoal/70">{service.description}</p>
          </div>

          {/* Session Details */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-sage-200 bg-sage-50 p-6">
              <h3 className="mb-4 font-semibold text-charcoal">Session Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-charcoal/60">Duration</dt>
                  <dd className="font-medium text-charcoal">{service.sessionLength}</dd>
                </div>
                <div>
                  <dt className="text-sm text-charcoal/60">Format</dt>
                  <dd className="font-medium capitalize text-charcoal">{service.format}</dd>
                </div>
                <div>
                  <dt className="text-sm text-charcoal/60">Frequency</dt>
                  <dd className="font-medium text-charcoal">{service.frequency}</dd>
                </div>
                <div>
                  <dt className="text-sm text-charcoal/60">Investment</dt>
                  <dd className="text-xl font-semibold text-sage-700">₹{service.pricing}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-terracotta/30 bg-cream p-6">
              <h3 className="mb-4 font-semibold text-charcoal">Best For</h3>
              <ul className="space-y-2">
                {service.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-sage-600">✓</span>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">How It Works</h2>
            <p className="text-lg leading-8 text-charcoal/70">{service.howItWorks}</p>
          </div>

          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">What to Expect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-charcoal">First Session</h3>
                <p className="text-charcoal/70">
                  In your first session, we'll take time to understand your needs, concerns, and
                  goals. We'll discuss what brought you to therapy and begin establishing a safe,
                  trusting relationship. You'll also get a sense of how we work together.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-charcoal">Ongoing Sessions</h3>
                <p className="text-charcoal/70">
                  Each session builds on the last, creating a continuous journey of exploration and
                  growth. We'll use various techniques and approaches tailored to your unique needs
                  and pace.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-charcoal">Your Pace, Your Process</h3>
                <p className="text-charcoal/70">
                  There's no rush or pressure. Healing and growth happen at different rates for
                  everyone. We honor your timeline and work collaboratively to support your
                  journey.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-sage-50 p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl font-bold text-charcoal">
              Ready to get started?
            </h3>
            <p className="mb-6 text-charcoal/70">
              Book your first session or reach out if you have any questions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">{service.ctaText}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-charcoal">
            Explore Other Services
          </h2>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
