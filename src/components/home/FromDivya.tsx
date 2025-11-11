import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export function FromDivya() {
  return (
    <section className="bg-gradient-to-b from-sage-50/50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto h-96 w-96 overflow-hidden rounded-2xl bg-gradient-to-br from-sage-100 via-soft-blue/20 to-terracotta/10 lg:mx-0">
              {/* TODO: Replace with actual image
                  <Image
                    src="/images/divya-studio.jpg"
                    alt="Divya Batra Masiwal, Art Therapist & Psychotherapist"
                    fill
                    className="object-cover"
                  />
              */}
              <div className="flex h-full items-center justify-center text-9xl">🎨</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-2 font-medium text-sage-600">Meet the Founder</p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              A Message from Divya
            </h2>
            <div className="mb-6 space-y-4 text-lg leading-relaxed text-charcoal/80">
              <p>
                Hi, I'm <strong>Divya Batra Masiwal</strong>—an Art Therapist & Psychotherapist with a somewhat unexpected path to this work.
              </p>
              <p>
                I started with a degree in <strong>Business Economics</strong>, pursued a <strong>Master's in Clinical Psychology</strong>, and spent <strong>9 years teaching mental health and life skills</strong> at nonprofit organizations. Along the way, I discovered that traditional talk therapy doesn't work for everyone—and that art can be a powerful bridge to healing, especially in the Indian context where emotional expression is often difficult to verbalize.
              </p>
              <p>
                Today, I combine clinical expertise, teaching experience, and creative expression to help people heal in ways that honor their unique journeys. Whether you process emotions through words, through art, or through both, I'm here to create a space where you can be fully yourself.
              </p>
              <p className="font-medium text-charcoal">
                I founded Artfelt to bridge the gaps in Indian mental health—making therapy accessible, culturally sensitive, and genuinely human.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/about">Read My Full Story</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/booking">Work with Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
