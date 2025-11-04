import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Founder Tag */}
          <p className="mb-4 font-medium text-sage-600">
            {SITE_CONFIG.tagline}
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            Emotional growth that feels{" "}
            <span className="text-sage-600">human, creative, and real</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-charcoal/70 md:text-xl">
            Art therapy & psychotherapy in Mumbai and online. Combining clinical expertise with creative healing to bridge gaps in Indian mental health.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/booking">Book a Session</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-charcoal/60">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎓</span>
              <span>MA Clinical Psychology</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              <span>9+ Years Teaching Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔒</span>
              <span>Confidential & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💚</span>
              <span>Online & In-Person in Mumbai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 -z-10 opacity-20">
        <div className="h-96 w-96 rounded-full bg-sage-200 blur-3xl" />
      </div>
      <div className="absolute -bottom-24 left-0 -z-10 opacity-20">
        <div className="h-96 w-96 rounded-full bg-terracotta-light blur-3xl" />
      </div>
    </section>
  )
}
