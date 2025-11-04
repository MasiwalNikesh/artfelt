import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/shared/CTASection"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Meet Divya Masiwal Batra | Art Therapist & Psychotherapist",
  description:
    "Discover Divya's journey from Business Economics to Art Therapy, combining 9 years of teaching experience with clinical expertise to bridge gaps in Indian mental health.",
  path: "/about",
  keywords: [
    "Divya Masiwal Batra",
    "art therapist Mumbai",
    "psychotherapist Mumbai",
    "clinical psychology India",
    "mental health professional",
    "art therapy credentials",
  ],
})

export default function AboutPage() {
  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ])

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Meet Divya Masiwal Batra
            </h1>
            <p className="mt-4 text-xl font-medium text-sage-700">
              Art Therapist & Psychotherapist, MA Clinical Psychology
            </p>
            <p className="mt-6 text-xl leading-8 text-charcoal/70">
              Bridging Art, Psychology & Education to Make Healing Accessible
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Founder Section */}
          <div className="mb-16">
            <div className="mb-12 flex justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-soft-blue/20 overflow-hidden">
                {/* TODO: Replace with actual image - <Image src="/images/divya-headshot.jpg" alt="Divya Masiwal Batra" width={256} height={256} className="object-cover" /> */}
                <span className="text-8xl">🎨</span>
              </div>
            </div>

            <div className="prose prose-lg mx-auto max-w-none">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                My Journey to Art Therapy
              </h2>

              <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  I didn't set out to become an art therapist. Like many journeys worth taking, mine was unexpected—shaped by curiosity, compassion, and a growing realization that the way we approach mental health in India needed to change.
                </p>

                <p>
                  I started my academic journey with a <strong>Bachelor's degree in Business Economics</strong>. I was drawn to understanding how systems work, how to solve problems strategically, and how to create practical solutions. But somewhere during those years, I found myself increasingly interested in a different kind of problem: why do we struggle so much to talk about our emotional lives? Why is mental health still shrouded in stigma? And why do traditional approaches to therapy feel inaccessible or culturally disconnected for so many Indians?
                </p>

                <p>
                  These questions led me to pursue a <strong>Master's degree in Clinical Psychology</strong>. I wanted to understand the human mind not just theoretically, but in ways that could genuinely help people heal. During my studies, I learned about evidence-based therapies, diagnostic frameworks, and the beautiful complexity of human emotion. But I also noticed something: talk therapy, as powerful as it is, doesn't work for everyone. Some emotions are too overwhelming, too deep, or too abstract to capture in words alone.
                </p>

                <p>
                  At the same time, art had been a constant companion throughout my life. Whether I was stressed, joyful, confused, or contemplative, I found myself reaching for colors, textures, and creative expression. Art didn't demand that I articulate my feelings perfectly—it gave me permission to explore them messily, honestly, and without judgment. It became clear to me that <strong>art wasn't just a hobby; it was a therapeutic tool</strong> I had been using instinctively all along.
                </p>

                <p>
                  After completing my Clinical Psychology training, I spent <strong>9 years teaching mental health and life skills at nonprofit organizations</strong>. I worked with diverse populations—students, young adults, marginalized communities—and these experiences profoundly shaped my approach to therapy. Teaching taught me how to break down complex psychological concepts into accessible language. It showed me the power of patience, cultural sensitivity, and meeting people where they are. I learned that healing doesn't follow a script, and that the most meaningful growth often happens when we create space for people to discover their own insights.
                </p>

                <p>
                  It was during these teaching years that I began integrating art into my sessions—not as an afterthought, but as a central method. I watched students who struggled to articulate their anxiety draw it out in bold strokes. I saw individuals who couldn't talk about trauma create safe containers for it through collage. I witnessed the transformative power of creative expression again and again. That's when I knew: this was the work I needed to do.
                </p>

                <p>
                  I pursued <strong>specialized training in art therapy techniques</strong>, learning how to guide the creative process therapeutically, how to honor both the art and the person creating it, and how to integrate this approach with clinical best practices. I trained in trauma-informed care, mindfulness-based interventions, and culturally adapted therapies that honor Indian family systems and social contexts.
                </p>

                <p>
                  Today, as an <strong>Art Therapist & Psychotherapist</strong>, I bring all of these experiences together. My business background helps me approach therapy practically and goal-oriented. My clinical training ensures I'm grounded in evidence-based methods. My teaching experience means I can explain things clearly and create a safe learning environment. And my lifelong relationship with art allows me to guide others in using creativity as a pathway to healing.
                </p>

                <p>
                  I founded <strong>Artfelt Therapy</strong> because I believe mental health support in India needs to be more accessible, more culturally sensitive, and more varied in its methods. Not everyone heals through talking alone. Some of us need to paint our pain, sculpt our strength, or collage our way through grief. I'm here to create that space—a place where your healing doesn't have to fit a mold, where your emotions are honored in whatever form they take, and where art becomes a bridge between what you feel and who you're becoming.
                </p>

                <p>
                  Whether you're navigating anxiety, processing loss, exploring your identity, or simply seeking deeper self-awareness, I'm here to walk alongside you. Not as someone who has all the answers, but as a guide who believes in the wisdom you already carry—and the healing power of giving it creative expression.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16 rounded-2xl bg-sage-50 p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">My Mission</h2>
            <blockquote className="border-l-4 border-sage-400 pl-6 text-xl italic text-charcoal/80">
              "I started Artfelt as a medium to bridge the gaps in the Indian mental health sector using the expressive medium of art. My goal is to make therapy accessible, culturally relevant, and creative—so that healing feels human, not clinical."
            </blockquote>
            <p className="mt-6 text-lg text-charcoal/70">
              Through art therapy and psychotherapy, I work to create a space where Indian clients can explore their emotions without judgment, honor their cultural context, and discover healing pathways that resonate with who they truly are.
            </p>
          </div>

          {/* Approach & Philosophy */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              How I Work with Clients
            </h2>
            <div className="space-y-6 text-lg text-charcoal/70">
              <p>
                My approach is shaped by the unique combination of my experiences: the strategic thinking from my business background, the clinical rigor from my psychology training, the patience and clarity from my 9 years of teaching, and the creative intuition from my lifelong relationship with art.
              </p>
              <p>
                <strong>I believe healing doesn't follow a script.</strong> In our sessions, I create a space that honors your unique path. Whether you're someone who processes emotions through talking, through creating art, or through a combination of both, I adapt to what serves you best. Some clients come for traditional psychotherapy with occasional creative exercises. Others engage primarily through art-making with verbal reflection woven in. There's no "right" way—only your way.
              </p>
              <p>
                <strong>I integrate evidence-based methods with cultural sensitivity.</strong> My clinical training ensures I'm grounded in trauma-informed care, cognitive-behavioral techniques, mindfulness practices, and psychodynamic understanding. But I also recognize that Western therapeutic models don't always fit Indian contexts. I honor family systems, cultural values, and the specific challenges of navigating mental health in a society where it's still stigmatized.
              </p>
              <p>
                <strong>I bring an educator's heart to therapy.</strong> My teaching background means I don't just guide you through exercises—I help you understand why we're doing what we're doing. I break down psychological concepts into accessible language. I empower you with tools and insights you can use beyond our sessions. Therapy, for me, is as much about education and self-discovery as it is about healing.
              </p>
              <p>
                <strong>Art provides a safe and non-verbal outlet</strong> for emotions that are difficult to articulate. Through scientifically-grounded art techniques, I help you explore your inner world visually, symbolically, and somatically. The creative process itself becomes therapeutic—allowing you to externalize what feels overwhelming, discover insights you didn't know you had, and transform pain into something meaningful.
              </p>
              <p>
                Whether you're processing difficult emotions, navigating a life transition, healing from trauma, or simply seeking deeper self-awareness, I'm here to walk alongside you with professional expertise, genuine compassion, and a belief in your innate capacity for growth.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="mb-8 font-serif text-3xl font-bold text-charcoal">What I Believe</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🌿</div>
                <h3 className="mb-2 font-semibold text-charcoal">Healing is Personal</h3>
                <p className="text-charcoal/70">
                  Your journey is unique. I honor your pace, your process, and your way of making
                  sense of your experiences. There's no one-size-fits-all approach to healing—my role is to support you in discovering what works for you.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🎨</div>
                <h3 className="mb-2 font-semibold text-charcoal">Creativity Heals</h3>
                <p className="text-charcoal/70">
                  Art isn't just about making something beautiful—it's a powerful tool for
                  understanding and transforming emotions. I've seen how creative expression can unlock insights that words alone cannot reach.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">💚</div>
                <h3 className="mb-2 font-semibold text-charcoal">Connection Matters</h3>
                <p className="text-charcoal/70">
                  The therapeutic relationship is foundational. I create a safe, non-judgmental
                  space for authentic exploration. You're not just a client to me—you're a whole person deserving of compassion and respect.
                </p>
              </div>

              <div className="rounded-lg border border-sage-200 bg-white p-6">
                <div className="mb-3 text-3xl">🔬</div>
                <h3 className="mb-2 font-semibold text-charcoal">Evidence-Based & Culturally Informed</h3>
                <p className="text-charcoal/70">
                  My methods are grounded in scientific research and clinical best practices, but adapted to honor Indian cultural contexts, family systems, and the specific challenges we face in our society.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mb-16 rounded-2xl bg-cream p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              My Credentials & Training
            </h2>
            <p className="mb-6 text-lg text-charcoal/70">
              As an <strong>Art Therapist & Psychotherapist</strong>, I bring together clinical expertise, creative specialization, and extensive teaching experience:
            </p>
            <ul className="space-y-3 text-lg text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>Master of Arts in Clinical Psychology</strong> — Comprehensive training in therapeutic theories, diagnostic assessment, and evidence-based interventions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>Specialized Art Therapy Training</strong> — Advanced techniques in using creative expression as a therapeutic modality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>Trauma-Informed Care Certification</strong> — Specialized approach to working with clients healing from trauma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>9+ Years Teaching Mental Health & Life Skills</strong> — Extensive experience at nonprofit organizations working with diverse populations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>Bachelor's in Business Economics</strong> — Foundation in systems thinking and practical problem-solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sage-600">✓</span>
                <span><strong>Ongoing Professional Development</strong> — Continuous training in mindfulness-based interventions, culturally adapted therapies, and somatic approaches</span>
              </li>
            </ul>
          </div>

          {/* Why Art Therapy */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
              Why I Choose Art Therapy & Psychotherapy
            </h2>
            <div className="space-y-4 text-lg text-charcoal/70">
              <p>
                Throughout my years of teaching and clinical practice, I've witnessed how art therapy offers a unique approach to healing that goes beyond traditional talk-based therapy. It creates pathways to healing that honor the full complexity of human experience.
              </p>
              <p><strong>In my practice, art therapy and psychotherapy allow you to:</strong></p>
              <ul className="ml-6 space-y-2 list-disc">
                <li><strong>Express emotions that are hard to put into words</strong> — Sometimes what we feel is too complex, too painful, or too abstract for language alone</li>
                <li><strong>Process trauma and difficult experiences safely</strong> — Creative expression provides containment and distance, allowing you to work through what feels overwhelming</li>
                <li><strong>Discover insights about yourself</strong> — The creative process often reveals things your conscious mind hasn't yet articulated</li>
                <li><strong>Build self-awareness and emotional regulation</strong> — Art-making itself becomes a practice in noticing, choosing, and responding to your internal experience</li>
                <li><strong>Find new perspectives on longstanding patterns</strong> — Seeing your thoughts and feelings externalized in art can shift your relationship to them</li>
                <li><strong>Honor cultural and familial contexts</strong> — For many Indian clients, creative expression feels less confrontational than direct verbal processing, making therapy more accessible</li>
              </ul>
              <p>
                The creative process itself becomes a form of meditation, helping you stay present
                and connected to your inner experience. And for clients who are more comfortable with traditional talk therapy, I integrate art exercises only when they feel relevant and helpful—never forced.
              </p>
              <p>
                Whether you're drawn to art-making or prefer verbal processing, I adapt my approach to what serves your healing best.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal">
              Let's Start Your Healing Journey Together
            </h2>
            <p className="mb-8 text-lg text-charcoal/70">
              I'd be honored to support you on your path to healing and growth. Whether you're ready to book a session or just want to learn more about how I work, I'm here to answer your questions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Book a Session with Divya</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="We're here to help you understand our approach and find the right support for your needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />
    </>
  )
}
