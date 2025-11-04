"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useBookingStore } from "@/store/bookingStore"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

declare global {
  interface Window {
    Razorpay: any
  }
}

export function PaymentForm() {
  const router = useRouter()
  const {
    serviceName,
    servicePrice,
    selectedDate,
    selectedTime,
    clientName,
    clientEmail,
    clientPhone,
    clientNotes,
    setPaymentInfo,
    setCurrentStep,
    setLoading,
    setError,
    getBookingData,
  } = useBookingStore()

  const [isProcessing, setIsProcessing] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => setRazorpayLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      setError("Payment gateway is loading. Please try again.")
      return
    }

    setIsProcessing(true)
    setLoading(true)
    setError(null)

    try {
      // Step 1: Create Razorpay order
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: servicePrice,
          currency: "INR",
          bookingData: {
            serviceName,
            selectedDate,
            selectedTime,
            clientName,
            clientEmail,
            clientPhone,
            clientNotes,
          },
        }),
      })

      if (!orderResponse.ok) {
        throw new Error("Failed to create payment order")
      }

      const { order } = await orderResponse.json()

      // Step 2: Initialize Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Artfelt Therapy",
        description: `${serviceName} Session`,
        order_id: order.id,
        handler: async function (response: any) {
          // Step 3: Verify payment and complete booking
          try {
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: getBookingData(),
              }),
            })

            if (!verifyResponse.ok) {
              throw new Error("Payment verification failed")
            }

            const verifyData = await verifyResponse.json()

            // Store payment info
            setPaymentInfo(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature
            )

            // Redirect to success page
            router.push(`/booking/success?id=${verifyData.bookingId}`)
          } catch (error) {
            console.error("Payment verification error:", error)
            setError("Payment verification failed. Please contact support.")
            setIsProcessing(false)
            setLoading(false)
          }
        },
        prefill: {
          name: clientName,
          email: clientEmail,
          contact: clientPhone,
        },
        notes: {
          service: serviceName,
          date: selectedDate,
          time: selectedTime,
        },
        theme: {
          color: "#8FA998",
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false)
            setLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      setError("Failed to initiate payment. Please try again.")
      setIsProcessing(false)
      setLoading(false)
    }
  }

  const handleBack = () => {
    setCurrentStep(3)
  }

  const formattedDate = selectedDate ? format(new Date(selectedDate), "EEEE, MMMM d, yyyy") : ""

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-charcoal">Payment</h2>
        <p className="text-charcoal/70">Review and complete your booking</p>
      </div>

      {/* Booking Summary */}
      <div className="rounded-2xl border border-sage-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-charcoal">Booking Summary</h3>
        <dl className="space-y-3">
          <div className="flex justify-between">
            <dt className="text-charcoal/70">Service</dt>
            <dd className="font-medium text-charcoal">{serviceName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-charcoal/70">Date</dt>
            <dd className="font-medium text-charcoal">{formattedDate}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-charcoal/70">Time</dt>
            <dd className="font-medium text-charcoal">{selectedTime}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-charcoal/70">Client</dt>
            <dd className="font-medium text-charcoal">{clientName}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-charcoal/70">Email</dt>
            <dd className="font-medium text-charcoal">{clientEmail}</dd>
          </div>
          <div className="flex justify-between border-t border-soft-gray pt-3">
            <dt className="text-lg font-semibold text-charcoal">Total Amount</dt>
            <dd className="text-2xl font-bold text-sage-700">₹{servicePrice}</dd>
          </div>
        </dl>
      </div>

      {/* Payment Information */}
      <div className="rounded-lg bg-soft-blue/10 p-4">
        <h4 className="mb-2 font-semibold text-charcoal">Secure Payment</h4>
        <p className="text-sm text-charcoal/70">
          Your payment is processed securely through Razorpay. We accept UPI, credit/debit cards,
          net banking, and wallets.
        </p>
      </div>

      {/* Cancellation Policy */}
      <div className="rounded-lg border border-soft-gray bg-cream p-4">
        <h4 className="mb-2 font-semibold text-charcoal">Cancellation Policy</h4>
        <p className="text-sm text-charcoal/70">
          Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours
          are non-refundable but can be rescheduled once.
        </p>
      </div>

      {/* Error Message */}
      {useBookingStore.getState().error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{useBookingStore.getState().error}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handleBack} disabled={isProcessing}>
          Back
        </Button>
        <Button
          size="lg"
          onClick={handlePayment}
          disabled={isProcessing || !razorpayLoaded}
        >
          {isProcessing ? "Processing..." : `Pay ₹${servicePrice}`}
        </Button>
      </div>

      <p className="text-center text-xs text-charcoal/60">
        By proceeding, you agree to our{" "}
        <a href="/terms" className="text-sage-600 hover:underline">
          terms of service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-sage-600 hover:underline">
          privacy policy
        </a>
      </p>
    </div>
  )
}
