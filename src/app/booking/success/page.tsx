import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Booking Confirmed | Artfelt Therapy",
  description: "Your therapy session has been successfully booked.",
}

export default function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-sage-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sage-100">
            <svg
              className="h-12 w-12 text-sage-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="mb-4 font-serif text-4xl font-bold text-charcoal">Booking Confirmed!</h1>
        <p className="mb-8 text-lg text-charcoal/70">
          Thank you for booking with Artfelt Therapy. Your session has been successfully scheduled
          and payment confirmed.
        </p>

        {/* Next Steps */}
        <div className="mb-8 rounded-2xl border border-sage-200 bg-white p-8 text-left">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal">What's Next?</h2>
          <ul className="space-y-3 text-charcoal/70">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-sage-600">✓</span>
              <span>
                <strong>Check your email</strong> - We've sent a confirmation with all the details
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-sage-600">✓</span>
              <span>
                <strong>Meeting link</strong> - You'll receive the video call link 24 hours before
                your session
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-sage-600">✓</span>
              <span>
                <strong>Prepare</strong> - Find a quiet space and have any art supplies ready (if
                applicable)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-sage-600">✓</span>
              <span>
                <strong>Questions?</strong> - Feel free to reach out at info@artfelt.in or
                +91-9717259345
              </span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/resources">Explore Resources</Link>
          </Button>
        </div>

        {/* Support */}
        <div className="mt-12 rounded-lg border border-soft-gray bg-cream p-6">
          <h3 className="mb-2 font-semibold text-charcoal">Need to Reschedule?</h3>
          <p className="mb-4 text-sm text-charcoal/70">
            Please contact us at least 24 hours in advance for free rescheduling.
          </p>
          <div className="flex flex-col gap-2 text-sm text-sage-600 sm:flex-row sm:justify-center sm:gap-4">
            <a href="mailto:info@artfelt.in" className="hover:underline">
              info@artfelt.in
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+919717259345" className="hover:underline">
              +91-9717259345
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://wa.me/919717259345"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
