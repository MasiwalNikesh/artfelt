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
    tagline: "Deep emotional healing through creative expression",
    description:
      "In my art psychotherapy sessions, I combine my clinical psychology training with creative expression to help you explore emotions that words alone cannot reach. Through painting, drawing, collage, and other art forms, we create a safe space for profound healing and self-discovery. My teaching background means I'll guide you patiently through the process—no art experience needed.",
    bestFor: [
      "Processing trauma and grief",
      "Managing anxiety and depression",
      "Exploring identity and self-expression",
      "Working through life transitions",
      "Healing from experiences that feel too complex to verbalize",
    ],
    howItWorks:
      "I guide you through art-making as a safe way to explore feelings. The focus is always on the process and what emerges for you—never on creating something 'good.' Drawing from my years of teaching, I help you understand what you're experiencing and why the creative process is therapeutic.",
    sessionLength: "60 minutes",
    format: "both",
    frequency: "Weekly or bi-weekly",
    pricing: 3500,
    ctaText: "Begin Therapy with Divya",
    order: 1,
  },
  {
    id: "2",
    title: "Short-Term Counseling",
    slug: "short-term-counseling",
    icon: "💬",
    tagline: "Practical support for immediate challenges",
    description:
      "Sometimes you need focused support for a specific challenge rather than long-term therapy. Drawing on my background in business thinking and clinical psychology, I offer solution-focused counseling that's practical, goal-oriented, and culturally sensitive. Whether you're navigating a difficult decision, managing work stress, or developing coping strategies, I'll help you find clarity and actionable paths forward.",
    bestFor: [
      "Relationship difficulties",
      "Work-related stress and burnout",
      "Decision-making support during transitions",
      "Developing practical coping skills",
      "Navigating family dynamics",
    ],
    howItWorks:
      "I focus on your current concerns and combine evidence-based counseling techniques with practical problem-solving. My teaching experience means I'll help you not just feel better, but understand why these strategies work so you can use them independently.",
    sessionLength: "45 minutes",
    format: "both",
    frequency: "Weekly for 6-12 sessions",
    pricing: 2500,
    ctaText: "Book Counseling Session",
    order: 2,
  },
  {
    id: "3",
    title: "Creative Life Coaching",
    slug: "creative-life-coaching",
    icon: "🌟",
    tagline: "Unlock your potential through creativity",
    description:
      "My business economics background combined with clinical psychology training creates a unique coaching approach that's both strategic and deeply human. I help you blend creativity with goal-setting to unlock your potential and live more authentically. Perfect if you're seeking clarity, motivation, or a way forward that honors both your practical needs and your deeper values.",
    bestFor: [
      "Career transitions and finding purpose",
      "Building creative habits and practices",
      "Overcoming creative blocks and self-doubt",
      "Setting and achieving meaningful goals",
      "Balancing practical success with personal fulfillment",
    ],
    howItWorks:
      "I combine coaching frameworks with creative exercises to help you envision and create the life you want. My teaching background means I'll break down complex goals into manageable steps, while my art therapy training helps you tap into your intuition and creativity for authentic decision-making.",
    sessionLength: "60 minutes",
    format: "both",
    frequency: "Bi-weekly or monthly",
    pricing: 3000,
    ctaText: "Start Coaching with Divya",
    order: 3,
  },
  {
    id: "4",
    title: "Workshops & Programs",
    slug: "workshops",
    icon: "👥",
    tagline: "Community healing through creative expression",
    description:
      "My 9 years of teaching experience shine through in these group workshops. I create structured yet creative spaces for community healing, focusing on themes like self-compassion, inner critic work, anxiety management, and creative expression for wellbeing. My teaching background means I can facilitate groups skillfully—balancing psychoeducation with experiential learning in a way that honors everyone's unique process.",
    bestFor: [
      "Learning in community with others on similar journeys",
      "Exploring specific mental health themes in depth",
      "Building a sustainable creative practice",
      "Accessible mental health support",
      "Those who prefer group dynamics over one-on-one",
    ],
    howItWorks:
      "I facilitate small group sessions (6-10 people) combining psychoeducation, art-making, and reflective sharing. My teaching expertise ensures everyone feels seen and supported, even in a group setting. You'll leave with both practical tools and a sense of community.",
    sessionLength: "90-120 minutes",
    format: "both",
    frequency: "One-time or multi-week series",
    pricing: 1500,
    ctaText: "View Workshop Schedule",
    order: 4,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services.sort((a, b) => a.order - b.order)
}
