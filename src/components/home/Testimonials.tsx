"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    role: "Marketing Professional, Mumbai",
    content:
      "Working with Divya has been transformative. Art therapy helped me process emotions I didn't even know I was carrying. I feel more connected to myself than ever before.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul M.",
    role: "Software Engineer",
    content:
      "I was skeptical at first, but the creative process opened up new ways of understanding my anxiety. Divya's approach is both professional and deeply compassionate.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya K.",
    role: "Teacher, Mumbai",
    content:
      "After struggling with grief, art therapy provided a safe space to heal. Divya's expertise and warmth made all the difference in my journey.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram P.",
    role: "Business Owner",
    content:
      "The creative life coaching sessions helped me rediscover my passion and purpose. Highly recommend Divya's services to anyone seeking meaningful change.",
    rating: 5,
  },
  {
    id: 5,
    name: "Meera D.",
    role: "College Student",
    content:
      "Art therapy sessions helped me manage exam stress and build confidence. Divya creates such a supportive, judgment-free environment.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sanjay R.",
    role: "HR Manager",
    content:
      "The workshops on emotional wellness were eye-opening. Practical tools that I use daily. Grateful for this experience.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-sage-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Stories of Transformation
            </h2>
            <p className="mt-4 text-lg text-charcoal/70">
              Hear from clients who have experienced healing and growth through art therapy
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-sage-200 bg-white transition-all hover:border-sage-400 hover:shadow-lg">
                <CardContent className="pt-6">
                  {/* Quote Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="h-8 w-8 text-sage-400" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-terracotta">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="mb-6 text-charcoal/80 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-sage-100 pt-4">
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-charcoal/60">
            Read more reviews on{" "}
            <a
              href="https://g.page/r/CTO5sGYzfMCyEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sage-600 underline hover:text-sage-700"
            >
              Google
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
