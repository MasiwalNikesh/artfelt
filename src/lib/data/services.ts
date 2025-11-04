/**
 * Static services data
 * Replace this with your custom CMS/database when ready
 */

export interface Service {
  id: string
  title: string
  slug: string
  icon: string
  tagline: string
  description: string
  bestFor: string[]
  howItWorks: string
  sessionLength: string
  format: "online" | "in-person" | "both"
  frequency: string
  pricing: number
  ctaText: string
  order: number
}

export const services: Service[] = [
  {
    id: "1",
    title: "1:1 Art Psychotherapy",
    slug: "art-psychotherapy",
    icon: "🎨",
    tagline: "For deep emotional healing",
    description:
      "Art psychotherapy combines traditional psychotherapy with creative expression. Through painting, drawing, and other art forms, we explore emotions that are difficult to put into words, leading to profound healing and self-discovery.",
    bestFor: [
      "Processing trauma and grief",
      "Managing anxiety and depression",
      "Exploring identity and self-expression",
      "Working through life transitions",
    ],
    howItWorks:
      "We use art-making as a safe way to explore feelings. No art experience needed - the focus is on the process, not the product.",
    sessionLength: "60 minutes",
    format: "both",
    frequency: "Weekly or bi-weekly",
    pricing: 3500,
    ctaText: "Begin Therapy",
    order: 1,
  },
  {
    id: "2",
    title: "Short-Term Counseling",
    slug: "short-term-counseling",
    icon: "💬",
    tagline: "For immediate support",
    description:
      "Solution-focused counseling for specific challenges. Get support navigating difficult situations, making important decisions, or developing coping strategies for stress and overwhelm.",
    bestFor: [
      "Relationship difficulties",
      "Work-related stress",
      "Decision-making support",
      "Developing coping skills",
    ],
    howItWorks:
      "We focus on your current concerns and work together to find practical solutions and strategies.",
    sessionLength: "45 minutes",
    format: "both",
    frequency: "Weekly for 6-12 sessions",
    pricing: 2500,
    ctaText: "Book Session",
    order: 2,
  },
  {
    id: "3",
    title: "Creative Life Coaching",
    slug: "creative-life-coaching",
    icon: "🌟",
    tagline: "For personal growth",
    description:
      "Blend creativity with goal-setting to unlock your potential. Perfect for those seeking clarity, motivation, and a more authentic way of living aligned with their values.",
    bestFor: [
      "Career transitions and purpose",
      "Building creative habits",
      "Overcoming creative blocks",
      "Setting and achieving meaningful goals",
    ],
    howItWorks:
      "We combine coaching frameworks with creative exercises to help you envision and create the life you want.",
    sessionLength: "60 minutes",
    format: "both",
    frequency: "Bi-weekly or monthly",
    pricing: 3000,
    ctaText: "Start Coaching",
    order: 3,
  },
  {
    id: "4",
    title: "Workshops & Programs",
    slug: "workshops",
    icon: "👥",
    tagline: "For community healing",
    description:
      "Group workshops and multi-week programs focused on specific themes like self-compassion, inner critic work, or creative expression for wellbeing.",
    bestFor: [
      "Learning in community",
      "Exploring specific themes",
      "Building creative practice",
      "Affordable mental health support",
    ],
    howItWorks:
      "Small group sessions (6-10 people) with a mix of psychoeducation, art-making, and sharing.",
    sessionLength: "90-120 minutes",
    format: "both",
    frequency: "One-time or multi-week series",
    pricing: 1500,
    ctaText: "View Workshops",
    order: 4,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services.sort((a, b) => a.order - b.order)
}
