import { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

/**
 * SEO and Marketing Metadata Configuration
 */

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://artfelt.in"

// Default SEO metadata
export const DEFAULT_METADATA = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Artfelt Therapy | Art Therapy & Psychotherapy by Divya Batra Masiwal",
    template: "%s | Artfelt Therapy",
  },
  description:
    "Art therapy and psychotherapy services by Divya Batra Masiwal (MA Clinical Psychology). 9+ years experience, combining clinical expertise with creative healing. Mumbai & Online sessions available.",
  keywords: [
    "art therapy Mumbai",
    "psychotherapy Mumbai",
    "art psychotherapy India",
    "Divya Batra Masiwal",
    "mental health India",
    "creative therapy",
    "online therapy India",
    "art therapist Mumbai",
    "clinical psychologist Mumbai",
    "mental wellness coaching",
    "trauma therapy Mumbai",
    "anxiety therapy India",
    "depression counseling Mumbai",
    "Indian mental health",
    "culturally sensitive therapy",
  ],
  authors: [{ name: "Divya Batra Masiwal", url: `${BASE_URL}/about` }],
  creator: "Divya Batra Masiwal",
  publisher: "Artfelt Therapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Artfelt Therapy",
    title: "Artfelt Therapy | Art Therapy & Psychotherapy by Divya Batra Masiwal",
    description:
      "Professional art therapy and psychotherapy services in Mumbai and online. Founded by Divya Batra Masiwal, MA Clinical Psychology, with 9+ years teaching experience.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Artfelt Therapy - Art Therapy & Psychotherapy by Divya Batra Masiwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artfelt Therapy | Art Therapy & Psychotherapy",
    description:
      "Art therapy and psychotherapy services by Divya Batra Masiwal in Mumbai and online.",
    images: [`${BASE_URL}/images/twitter-image.jpg`],
    creator: "@artfelttherapy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // TODO: Add Google Search Console verification
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // bing: "YOUR_BING_VERIFICATION_CODE",
  },
  category: "Health & Wellness",
}

// Helper function to generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/images/og-image.jpg`

  return {
    title,
    description,
    keywords: [...(DEFAULT_METADATA.keywords as string[]), ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Artfelt Therapy",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@artfelttherapy",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}

// Structured Data (JSON-LD) for Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Artfelt Therapy",
  alternateName: "Artfelt",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/og-image.jpg`,
  description: SITE_CONFIG.description,
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    name: "Divya Batra Masiwal",
    jobTitle: "Art Therapist & Psychotherapist",
    image: `${BASE_URL}/images/divya-headshot.jpg`,
    url: `${BASE_URL}/about`,
    sameAs: [
      SITE_CONFIG.socialMedia.instagram,
      SITE_CONFIG.socialMedia.linkedin,
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Master of Arts in Clinical Psychology",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MA Clinical Psychology",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Art Therapy Training",
      },
    ],
    knowsAbout: [
      "Art Therapy",
      "Psychotherapy",
      "Clinical Psychology",
      "Mental Health",
      "Creative Expression Therapy",
      "Trauma-Informed Care",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: SITE_CONFIG.email,
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    SITE_CONFIG.socialMedia.instagram,
    SITE_CONFIG.socialMedia.linkedin,
  ],
  priceRange: "₹₹",
  medicalSpecialty: "Psychiatry",
  keywords:
    "art therapy, psychotherapy, mental health, Mumbai, online therapy, trauma therapy, anxiety, depression",
}

// Structured Data for Person (Divya)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Divya Batra Masiwal",
  givenName: "Divya",
  familyName: "Masiwal Batra",
  jobTitle: "Art Therapist & Psychotherapist",
  description:
    "Art Therapist & Psychotherapist with MA in Clinical Psychology and 9+ years of teaching experience. Specializes in art therapy, trauma-informed care, and culturally sensitive mental health support for Indian clients.",
  image: `${BASE_URL}/images/divya-headshot.jpg`,
  url: `${BASE_URL}/about`,
  sameAs: [
    SITE_CONFIG.socialMedia.instagram,
    SITE_CONFIG.socialMedia.linkedin,
  ],
  worksFor: {
    "@type": "Organization",
    name: "Artfelt Therapy",
    url: BASE_URL,
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Master of Arts in Clinical Psychology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Bachelor's in Business Economics",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MA Clinical Psychology",
    },
  ],
  knowsAbout: [
    "Art Therapy",
    "Psychotherapy",
    "Clinical Psychology",
    "Mental Health Education",
    "Trauma-Informed Care",
    "Creative Expression",
    "Indian Mental Health",
  ],
  knowsLanguage: ["English", "Hindi"],
  email: SITE_CONFIG.founder.email,
}

// Breadcrumb structured data generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

// FAQ structured data generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// Service structured data generator
export function generateServiceSchema(service: {
  name: string
  description: string
  price: number
  duration: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    description: service.description,
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }
}

// Blog post structured data generator
export function generateArticleSchema(article: {
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  image?: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || `${BASE_URL}/images/og-image.jpg`,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      "@id": `${BASE_URL}/#founder`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  }
}
