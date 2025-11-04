import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CTASection({
  title = "Ready to Start Your Journey?",
  description = "Take the first step towards healing and growth. Book a session or reach out with any questions.",
  primaryButtonText = "Book a Session",
  primaryButtonHref = "/booking",
  secondaryButtonText = "Contact Us",
  secondaryButtonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-sage-600 to-sage-700 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-sage-50">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="default" className="bg-white text-sage-700 hover:bg-cream" asChild>
              <Link href={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
