"use client"

import { useBookingStore } from "@/store/bookingStore"
import { ServiceSelector } from "@/components/booking/ServiceSelector"
import { DateTimePicker } from "@/components/booking/DateTimePicker"
import { ClientInfoForm } from "@/components/booking/ClientInfoForm"
import { PaymentForm } from "@/components/booking/PaymentForm"

export default function BookingPage() {
  const currentStep = useBookingStore((state) => state.currentStep)

  const steps = [
    { number: 1, title: "Select Service" },
    { number: 2, title: "Date & Time" },
    { number: 3, title: "Your Info" },
    { number: 4, title: "Payment" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all ${
                        currentStep >= step.number
                          ? "border-sage-600 bg-sage-600 text-white"
                          : "border-soft-gray bg-white text-charcoal/40"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="mt-2 hidden text-center text-sm font-medium text-charcoal md:block">
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 flex-1 transition-all ${
                        currentStep > step.number ? "bg-sage-600" : "bg-soft-gray"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mx-auto max-w-5xl">
          {currentStep === 1 && <ServiceSelector />}
          {currentStep === 2 && <DateTimePicker />}
          {currentStep === 3 && <ClientInfoForm />}
          {currentStep === 4 && <PaymentForm />}
        </div>

        {/* Help Section */}
        <div className="mt-16 rounded-2xl border border-sage-200 bg-white p-8 text-center">
          <h3 className="mb-2 font-semibold text-charcoal">Need Help?</h3>
          <p className="mb-4 text-charcoal/70">
            Have questions or prefer to book over the phone?
          </p>
          <div className="flex flex-col gap-2 text-sm text-sage-600 sm:flex-row sm:justify-center sm:gap-4">
            <a href="tel:+919717259345" className="hover:underline">
              📞 +91-9717259345
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://wa.me/919717259345"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              💬 WhatsApp
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:info@artfelt.in" className="hover:underline">
              ✉️ info@artfelt.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
