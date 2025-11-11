import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-soft-gray bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-artfelt.png"
                alt={SITE_CONFIG.name}
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </Link>
            <p className="mt-2 text-sm font-medium text-charcoal">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm text-charcoal/70">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-4 text-sm text-charcoal/60">
              <p className="font-medium text-charcoal mb-3">About Divya</p>
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/divya-batra.jpeg"
                  alt="Divya Batra Masiwal"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover flex-shrink-0 h-20 w-20"
                />
                <p className="mt-0">
                  Divya Batra Masiwal (MA Clinical Psychology) is an Art Therapist & Psychotherapist with 9+ years of experience in mental health education. She bridges business understanding, clinical expertise, and creative expression to make therapy accessible and culturally relevant for Indian clients.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-charcoal">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-charcoal/70 hover:text-sage-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal/70 hover:text-sage-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-charcoal/70 hover:text-sage-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-charcoal/70 hover:text-sage-600">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal/70 hover:text-sage-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-charcoal">Connect with Divya</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-charcoal/70 hover:text-sage-600"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="pt-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal/50">Follow & Review</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={SITE_CONFIG.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-sage-600 flex items-center gap-2"
                    aria-label="Follow on Instagram"
                  >
                    <span>📷</span>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SITE_CONFIG.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-sage-600 flex items-center gap-2"
                    aria-label="Connect on LinkedIn"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={SITE_CONFIG.socialMedia.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-sage-600 flex items-center gap-2"
                    aria-label="Leave a Google Review"
                  >
                    <span>⭐</span>
                    <span>Google Reviews</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-soft-gray pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-charcoal/60">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-charcoal/60 hover:text-sage-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-charcoal/60 hover:text-sage-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
