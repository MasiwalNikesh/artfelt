"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useBookingStore } from "@/store/bookingStore"

export function ClientInfoForm() {
  const { clientName, clientEmail, clientPhone, clientNotes, setClientInfo, setCurrentStep } =
    useBookingStore()

  const [formData, setFormData] = useState({
    name: clientName || "",
    email: clientEmail || "",
    phone: clientPhone || "",
    notes: clientNotes || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setClientInfo(formData.name, formData.email, formData.phone, formData.notes)
    }
  }

  const handleBack = () => {
    setCurrentStep(2)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-charcoal">Your Information</h2>
        <p className="text-charcoal/70">Please provide your contact details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
            Full Name *
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91-"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="notes" className="mb-2 block text-sm font-medium text-charcoal">
            Additional Notes (Optional)
          </label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Any specific concerns or preferences you'd like to share..."
            rows={4}
          />
          <p className="mt-1 text-xs text-charcoal/60">
            This information helps us prepare for your session
          </p>
        </div>

        <div className="rounded-lg bg-sage-50 p-4">
          <h4 className="mb-2 font-semibold text-charcoal">Privacy & Confidentiality</h4>
          <p className="text-sm text-charcoal/70">
            Your information is strictly confidential and will only be used for your therapy
            sessions. We follow professional ethical guidelines for mental health practitioners.
          </p>
        </div>

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit">Continue to Payment</Button>
        </div>
      </form>
    </div>
  )
}
