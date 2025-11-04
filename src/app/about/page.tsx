import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"

export const metadata = {
  title: "The Artfelt Story | About Us",
  description:
    "Learn about Divya Batra Masiwal and the mission to bridge gaps in Indian mental health using art therapy.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              The Artfelt Story
            </h1>
            <p className="mt-6 text-xl leading-8 text-charcoal/70">
              You deserve a space where you can heal in your own way
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Founder Section */}
          <div className="mb-16">
            <div className="mb-12 flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-sage-100">
                <span className="text-7xl">🎨</span>
              </div>
            </div>

            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Founded by Divya Batra Masiwal
              </h2>
              <p className="text-charcoal/70">
                Divya Batra Masiwal established Artfelt, bringing together her diverse background
                including a Bachelor's in Business Economics, Master's in Clinical Psychology, and
                9 years of teaching experience at nonprofits alongside a lifelong passion for
                creating art.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16 rounded-2xl bg-sage-50 p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">Our Mission</h2>
            <blockquote className="border-l-4 border-sage-400 pl-6 text-xl italic text-charcoal/80">
              "I started Artfelt as a medium to bridge the gaps in the Indian mental health sector
              using the expressive medium of art."
            </blockquote>
            <p className="mt-4 text-right text-sm text-charcoal/60">— Divya Batra Masiwal</p>
          </div>

          {/* Approach & Philosophy */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              Our Approach & Philosophy
            </h2>
            <div className="space-y-6 text-lg text-charcoal/70">
              <p>
                Artfelt Therapy is built on the belief that emotional growth doesn't have to follow
                a script. Through art psychotherapy, counseling, and creative life coaching, we
                create a space that honors your unique path to healing.
              </p>
              <p>
                Art provides a <strong>safe and non-verbal outlet</strong> for expressing complex
                emotions that may be difficult to articulate verbally. Through scientifically-grounded
                art techniques, we encourage introspection and self-reflection to help individuals
                better understand their thoughts and feelings.
              </p>
              <p>
                Whether you're processing difficult emotions, navigating a life transition, or
                simply seeking more clarity and self-awareness, our approach blends professional
                expertise with genuine human connection.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="mb-8 font-serif text-3xl font-bold text-charcoal">What We Believe</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🌿</div>
                <h3 className="mb-2 font-semibold text-charcoal">Healing is Personal</h3>
                <p className="text-charcoal/70">
                  Your journey is unique. We honor your pace, your process, and your way of making
                  sense of your experiences.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🎨</div>
                <h3 className="mb-2 font-semibold text-charcoal">Creativity Heals</h3>
                <p className="text-charcoal/70">
                  Art isn't just about making something beautiful—it's a powerful tool for
                  understanding and transforming emotions.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">💚</div>
                <h3 className="mb-2 font-semibold text-charcoal">Connection Matters</h3>
                <p className="text-charcoal/70">
                  The therapeutic relationship is foundational. We create a safe, non-judgmental
                  space for authentic exploration.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🔬</div>
                <h3 className="mb-2 font-semibold text-charcoal">Evidence-Based</h3>
                <p className="text-charcoal/70">
                  Our methods are grounded in scientific research and clinical best practices,
                  adapted to your individual needs.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mb-16 rounded-2xl bg-cream p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              Credentials & Training
            </h2>
            <ul className="space-y-3 text-lg text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Master's in Clinical Psychology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Bachelor's in Business Economics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span>9+ years of teaching experience at nonprofits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Specialized training in Art Therapy techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span>Ongoing professional development in therapeutic modalities</span>
              </li>
            </ul>
          </div>

          {/* Why Art Therapy */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              Why Art Therapy?
            </h2>
            <div className="space-y-4 text-lg text-charcoal/70">
              <p>
                Art therapy offers a unique approach to healing that goes beyond traditional
                talk-based therapy. It allows you to:
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Express emotions that are hard to put into words</li>
                <li>Process trauma and difficult experiences in a safe, contained way</li>
                <li>Discover insights about yourself through creative exploration</li>
                <li>Build self-awareness and emotional regulation skills</li>
                <li>Find new perspectives on longstanding patterns and beliefs</li>
              </ul>
              <p>
                The creative process itself becomes a form of meditation, helping you stay present
                and connected to your inner experience.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
              Ready to start your journey?
            </h2>
            <p className="mb-8 text-lg text-charcoal/70">
              We'd love to support you on your path to healing and growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Book a Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="We're here to help you understand our approach and find the right support for your needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </>
  )
}
