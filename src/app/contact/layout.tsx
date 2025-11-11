import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Divya Batra Masiwal | Art Therapy Consultation Mumbai",
  description:
    "Get in touch with Divya Batra Masiwal for art therapy and psychotherapy services. Free 15-minute consultation available. Mumbai & online sessions.",
  path: "/contact",
  keywords: [
    "contact art therapist",
    "book therapy session Mumbai",
    "psychotherapy consultation",
    "art therapy inquiry",
    "mental health contact India",
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
