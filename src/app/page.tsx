import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { FromDivya } from "@/components/home/FromDivya"
import { AboutPreview } from "@/components/home/AboutPreview"
import { Testimonials } from "@/components/home/Testimonials"
import { FAQ } from "@/components/home/FAQ"
import { CTASection } from "@/components/shared/CTASection"
import { BASE_URL } from "@/lib/seo"

export default function Home() {
  // WebSite structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Artfelt Therapy",
    description: "Art therapy and psychotherapy services by Divya Masiwal Batra in Mumbai and online",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      {/* WebSite Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Hero />
      <Stats />
      <ServicesGrid />
      <FromDivya />
      <AboutPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
