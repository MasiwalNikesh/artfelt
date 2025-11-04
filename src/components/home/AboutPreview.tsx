import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="bg-sage-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage-200 via-soft-blue/30 to-terracotta/20">
            <div className="flex aspect-[4/3] items-center justify-center">
              {/* TODO: Replace with actual image showing art therapy in action
                  <Image src="/images/art-therapy-session.jpg" alt="Art therapy session" fill className="object-cover" />
              */}
              <span className="text-6xl">🎨</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Therapy That Honors Your Unique Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/70">
              I believe emotional growth doesn't have to follow a script. Through art therapy and psychotherapy, I create a space where you can explore your feelings in whatever way feels right to you—whether that's through conversation, creative expression, or both.
            </p>
            <p className="mt-4 text-lg leading-8 text-charcoal/70">
              My approach combines <strong>clinical expertise</strong> (MA Clinical Psychology), <strong>teaching experience</strong> (9+ years), and <strong>cultural sensitivity</strong> to make therapy feel accessible, human, and genuinely supportive of who you are.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About My Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
