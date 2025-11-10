"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { Sparkles, Heart, Shield, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Founder Tag */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-medium text-sage-600"
          >
            {SITE_CONFIG.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl md:text-6xl"
          >
            Emotional growth that feels{" "}
            <span className="relative inline-block text-sage-600">
              human, creative, and real
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 10C50 5 100 2 150 5C200 8 250 5 298 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-terracotta/40"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-charcoal/70 md:text-xl"
          >
            Art therapy & psychotherapy in Mumbai and online. Combining clinical expertise with creative healing to bridge gaps in Indian mental health.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group">
              <Link href="/booking">
                Book a Session
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-charcoal/60"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-sage-500" />
              <span>MA Clinical Psychology</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Heart className="h-5 w-5 text-terracotta" />
              <span>9+ Years Teaching Experience</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Shield className="h-5 w-5 text-soft-blue-600" />
              <span>Confidential & Safe</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Globe className="h-5 w-5 text-lavender-600" />
              <span>Online & In-Person in Mumbai</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-24 right-0 -z-10"
      >
        <div className="h-96 w-96 rounded-full bg-sage-200 blur-3xl" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-24 left-0 -z-10"
      >
        <div className="h-96 w-96 rounded-full bg-terracotta-light blur-3xl" />
      </motion.div>
    </section>
  )
}
