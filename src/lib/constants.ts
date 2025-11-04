/**
 * Site-wide constants for Artfelt Therapy
 */

export const SITE_CONFIG = {
  name: "Artfelt Therapy",
  description: "Professional art psychotherapy, counseling, and creative life coaching in Mumbai & online. Heal through creativity with certified therapists.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://artfelt.in",
  email: "bookings@artfelt.in",
  socialMedia: {
    instagram: "https://instagram.com/artfelt",
    facebook: "https://facebook.com/artfelt",
    linkedin: "https://linkedin.com/company/artfelt",
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
