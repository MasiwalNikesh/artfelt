"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is art therapy, and how is it different from regular therapy?",
    answer:
      "Art therapy is a form of psychotherapy that uses creative expression as a primary mode of communication and healing. Unlike traditional talk therapy, art therapy engages the visual and sensory parts of the brain, allowing you to express emotions that might be difficult to put into words. You don't need any artistic skill—it's about the process, not the product.",
  },
  {
    id: 2,
    question: "Do I need to be good at art to benefit from art therapy?",
    answer:
      "Absolutely not! Art therapy is not about creating beautiful artwork—it's about self-expression and healing. Whether you've never picked up a paintbrush or you're an experienced artist, art therapy can benefit you. The focus is on the creative process and what it reveals about your inner world.",
  },
  {
    id: 3,
    question: "What issues can art therapy help with?",
    answer:
      "Art therapy can help with anxiety, depression, trauma, grief, relationship issues, stress management, self-esteem, life transitions, and personal growth. It's also beneficial for processing emotions, building self-awareness, and developing coping skills.",
  },
  {
    id: 4,
    question: "How do online art therapy sessions work?",
    answer:
      "Online sessions are conducted via secure video calls. Before the session, I'll send you a list of basic art supplies you'll need (usually simple items like paper, colors, pencils). During the session, I guide you through creative exercises and we process your artwork together. Online sessions are just as effective as in-person sessions.",
  },
  {
    id: 5,
    question: "How long does art therapy take to show results?",
    answer:
      "Everyone's journey is unique. Some clients feel relief after the first session, while deeper issues may take several months to process. Typically, clients start noticing positive changes within 4-6 sessions. We'll regularly review your progress and adjust our approach as needed.",
  },
  {
    id: 6,
    question: "Is art therapy confidential?",
    answer:
      "Yes, absolutely. All sessions are completely confidential and follow professional ethical guidelines. Your artwork, conversations, and personal information are private and secure. The only exception is if there's a risk of harm to yourself or others.",
  },
  {
    id: 7,
    question: "What's the difference between your services (Art Psychotherapy, Counseling, Life Coaching)?",
    answer:
      "Art Psychotherapy uses creative methods to address mental health concerns and trauma. Short-Term Counseling focuses on specific issues with solution-focused talk therapy. Creative Life Coaching is for personal growth, goal-setting, and discovering your purpose. During our first session, I'll help you determine which approach is best for your needs.",
  },
  {
    id: 8,
    question: "What are your session rates and cancellation policy?",
    answer:
      "Session rates vary by service type (₹1,500 - ₹3,500). Payment is required at the time of booking. For cancellations, please provide at least 24 hours notice to avoid being charged. Emergency rescheduling is accommodated when possible.",
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="bg-gradient-to-b from-white to-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Everything you need to know about art therapy and my services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-lg border border-sage-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-sage-50"
              >
                <span className="pr-8 font-semibold text-charcoal">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus className="h-5 w-5 text-sage-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-sage-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-sage-100 px-6 pb-6 pt-4">
                      <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-charcoal/70">
            Have more questions?{" "}
            <a
              href="/contact"
              className="font-medium text-sage-600 underline hover:text-sage-700"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
