import { getAllServices } from "@/lib/data/services"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Therapy Services by Divya Masiwal Batra | Art Therapy & Psychotherapy",
  description:
    "Art psychotherapy, counseling, creative life coaching, and workshops in Mumbai & online. Individual and group sessions by MA Clinical Psychologist Divya Masiwal Batra.",
  path: "/services",
  keywords: [
    "art therapy services",
    "psychotherapy Mumbai",
    "online therapy India",
    "creative counseling",
    "art psychotherapy sessions",
    "mental health workshops",
  ],
})

export default function ServicesPage() {
  const services = getAllServices()

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ])

  // FAQ structured data
  const faqSchema = generateFAQSchema([
    {
      question: "How do I know which service is right for me?",
      answer: "If you're unsure, we recommend starting with a free 15-minute consultation call. We'll discuss your needs and help you find the best fit. You can also reach out via our contact form.",
    },
    {
      question: "Do I need art experience?",
      answer: "Not at all! Art psychotherapy is about the process of creating, not the final product. No artistic skill is required.",
    },
    {
      question: "Are sessions available online?",
      answer: "Yes, all our services are available both online (via video call) and in-person in Mumbai. Choose what works best for you.",
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require 24 hours notice for cancellations or rescheduling. This allows us to offer the slot to someone else who may need it.",
    },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Services at Artfelt Therapy
            </h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/70">
              Emotional growth that feels human, creative, and real. Choose the approach that feels
              right for where you are in your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Service Icon & Basic Info */}
                  <div className="bg-sage-50 p-8 lg:col-span-1">
                    <div className="mb-4 text-5xl">{service.icon}</div>
                    <CardTitle className="mb-2 text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mb-4 text-base text-sage-700">
                      {service.tagline}
                    </CardDescription>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <p>
                        <strong>Duration:</strong> {service.sessionLength}
                      </p>
                      <p>
                        <strong>Format:</strong> {service.format}
                      </p>
                      <p>
                        <strong>Frequency:</strong> {service.frequency}
                      </p>
                      <p className="text-lg font-semibold text-sage-700">₹{service.pricing}</p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-8 lg:col-span-2">
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-charcoal">
                        About This Service
                      </h3>
                      <p className="text-charcoal/70">{service.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-charcoal">Best For</h3>
                      <ul className="space-y-2">
                        {service.bestFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-charcoal/70">
                            <span className="mt-1 text-sage-600">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-charcoal">How It Works</h3>
                      <p className="text-charcoal/70">{service.howItWorks}</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>Learn More</Link>
                      </Button>
                      <Button variant="terracotta" asChild>
                        <Link href="/booking">Book a Session</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sage-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">
                How do I know which service is right for me?
              </h3>
              <p className="text-charcoal/70">
                If you're unsure, we recommend starting with a free 15-minute consultation call.
                We'll discuss your needs and help you find the best fit. You can also reach out via
                our contact form.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">Do I need art experience?</h3>
              <p className="text-charcoal/70">
                Not at all! Art psychotherapy is about the process of creating, not the final
                product. No artistic skill is required.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">
                Are sessions available online?
              </h3>
              <p className="text-charcoal/70">
                Yes, all our services are available both online (via video call) and in-person in
                Mumbai. Choose what works best for you.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">What's your cancellation policy?</h3>
              <p className="text-charcoal/70">
                We require 24 hours notice for cancellations or rescheduling. This allows us to
                offer the slot to someone else who may need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
