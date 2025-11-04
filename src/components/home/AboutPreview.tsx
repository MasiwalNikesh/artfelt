import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="bg-sage-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder */}
          <div className="relative overflow-hidden rounded-2xl bg-sage-200">
            <div className="flex aspect-[4/3] items-center justify-center">
              <span className="text-6xl">🎨</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              You deserve a space where you can heal in your own way
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/70">
              Artfelt Therapy is built on the belief that emotional growth doesn't have to follow a
              script. Through art psychotherapy, counseling, and creative life coaching, we create
              a space that honors your unique path to healing.
            </p>
            <p className="mt-4 text-lg leading-8 text-charcoal/70">
              Whether you're processing difficult emotions, navigating a life transition, or simply
              seeking more clarity and self-awareness, our approach blends professional expertise
              with genuine human connection.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
