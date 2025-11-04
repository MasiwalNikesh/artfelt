export interface BookingStep {
  step: number
  title: string
  isComplete: boolean
}

export interface BookingFormData {
  // Step 1: Service Selection
  serviceId: string
  serviceName: string
  servicePrice: number
  serviceDuration: number

  // Step 2: Date & Time
  selectedDate: string
  selectedTime: string

  // Step 3: Client Information
  clientName: string
  clientEmail: string
  clientPhone: string
  clientNotes?: string

  // Step 4: Payment
  paymentId?: string
  razorpayOrderId?: string
  razorpayPaymentId?: string
  razorpaySignature?: string
}

export interface AvailableSlot {
  time: string
  available: boolean
}

export interface RazorpayOrder {
  id: string
  amount: number
  currency: string
  receipt: string
}

export interface RazorpayPaymentResponse {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

export interface BookingConfirmation {
  bookingId: string
  serviceName: string
  date: string
  time: string
  duration: number
  clientName: string
  clientEmail: string
  amount: number
  meetingLink?: string
}
