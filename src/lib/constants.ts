/**
 * Site-wide constants for Artfelt Therapy
 */

export const SITE_CONFIG = {
  name: "Artfelt Therapy",
  tagline: "Founded by Divya Masiwal Batra, Art Therapist & Psychotherapist",
  description: "Founded by Divya Masiwal Batra (MA Clinical Psychology), offering art therapy and psychotherapy in Mumbai & online. Combining 9 years of teaching experience with clinical expertise to bridge gaps in Indian mental health through creative healing.",
  founder: {
    name: "Divya Masiwal Batra",
    title: "Art Therapist & Psychotherapist",
    credentials: "MA Clinical Psychology",
    email: "divya@artfelt.in",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://artfelt.in",
  email: "bookings@artfelt.in",
  socialMedia: {
    instagram: "https://www.instagram.com/artfelt.therapy/",
    linkedin: "https://www.linkedin.com/in/divyabatramasiwal/",
    googleReviews: "https://share.google/3q2pkw9sdtzgHghL6",
    facebook: "https://facebook.com/artfelt", // Optional: Update or remove if not active
  },
}

export const SERVICE_TYPES = {
  ART_PSYCHOTHERAPY: "art-psychotherapy",
  COUNSELING: "short-term-counseling",
  COACHING: "creative-life-coaching",
  WORKSHOPS: "workshops",
  CORPORATE: "corporate-services",
} as const

export const APPOINTMENT_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const

export const PAYMENT_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const

export const SESSION_DURATIONS = {
  SHORT: 45, // minutes
  STANDARD: 60,
  EXTENDED: 90,
} as const
