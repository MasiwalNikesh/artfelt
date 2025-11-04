"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SITE_CONFIG } from "@/lib/constants"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    // TODO: Replace with actual form submission logic
    // For now, just simulate success after 1 second
    setTimeout(() => {
      setFormState("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState("idle")
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Have questions? Want to learn more? We're here to help you find the right support for
            your journey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-charcoal">
                Let's Connect
              </h2>
              <p className="mb-8 text-lg text-charcoal/70">
                We typically respond within 24 hours. If you need immediate support, please reach
                out via phone or WhatsApp.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-2xl">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sage-600 hover:text-sage-700"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-2xl">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Phone / WhatsApp</h3>
                    <a href="tel:+919717259345" className="text-sage-600 hover:text-sage-700">
                      +91-9717259345
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Location</h3>
                    <p className="text-charcoal/70">Mumbai, India</p>
                    <p className="text-sm text-charcoal/60">(Online sessions available)</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-2xl">
                    🌐
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-charcoal">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href={SITE_CONFIG.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-700"
                      >
                        Instagram
                      </a>
                      <a
                        href={SITE_CONFIG.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-700"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 rounded-lg border border-sage-200 bg-sage-50 p-6">
                <h3 className="mb-3 font-semibold text-charcoal">Response Times</h3>
                <p className="text-sm text-charcoal/70">
                  We respond to inquiries within 24 hours during business days (Monday-Saturday).
                  For urgent matters, please call or WhatsApp.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-sage-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 font-serif text-2xl font-bold text-charcoal">
                  Send a Message
                </h2>

                {formState === "success" ? (
                  <div className="rounded-lg bg-sage-50 p-6 text-center">
                    <div className="mb-4 text-5xl">✓</div>
                    <h3 className="mb-2 font-semibold text-sage-700">Message Sent!</h3>
                    <p className="text-charcoal/70">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-charcoal"
                      >
                        Name *
                      </label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-charcoal"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-charcoal"
                      >
                        Phone (Optional)
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91-" />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-charcoal"
                      >
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="How can we help?" />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-charcoal"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-center text-xs text-charcoal/60">
                      By submitting this form, you agree to our privacy policy and terms of
                      service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sage-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-charcoal">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">
                Do you offer a free consultation?
              </h3>
              <p className="text-charcoal/70">
                Yes! We offer a free 15-minute phone consultation to help you understand our
                approach and determine if we're the right fit for your needs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">How quickly can I book a session?</h3>
              <p className="text-charcoal/70">
                We typically have availability within 3-5 days. For urgent needs, please mention
                this in your message and we'll do our best to accommodate you.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-charcoal">
                Is my information confidential?
              </h3>
              <p className="text-charcoal/70">
                Absolutely. All communications and sessions are strictly confidential, following
                professional ethical guidelines for mental health practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
