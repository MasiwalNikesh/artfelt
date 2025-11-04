import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllServices } from "@/lib/data/services"

export function ServicesGrid() {
  const services = getAllServices()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Choose the approach that feels right for where you are in your journey
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col transition-all hover:border-sage-300"
            >
              <CardHeader>
                <div className="mb-4 text-4xl">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sage-600">{service.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm text-charcoal/70">{service.description}</p>
                <div className="mb-4 space-y-1">
                  <p className="text-xs font-medium text-charcoal/60">
                    {service.sessionLength} • {service.format}
                  </p>
                  <p className="text-sm font-semibold text-sage-700">₹{service.pricing}</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="terracotta" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
