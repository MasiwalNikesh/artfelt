import { create } from "zustand"
import type { BookingFormData } from "@/types/booking"

interface BookingState extends Partial<BookingFormData> {
  currentStep: number
  isLoading: boolean
  error: string | null

  // Actions
  setCurrentStep: (step: number) => void
  setService: (serviceId: string, serviceName: string, servicePrice: number, serviceDuration: number) => void
  setDateTime: (date: string, time: string) => void
  setClientInfo: (name: string, email: string, phone: string, notes?: string) => void
  setPaymentInfo: (orderId: string, paymentId: string, signature: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  resetBooking: () => void
  getBookingData: () => Partial<BookingFormData>
}

const initialState = {
  currentStep: 1,
  isLoading: false,
  error: null,
  serviceId: undefined,
  serviceName: undefined,
  servicePrice: undefined,
  serviceDuration: undefined,
  selectedDate: undefined,
  selectedTime: undefined,
  clientName: undefined,
  clientEmail: undefined,
  clientPhone: undefined,
  clientNotes: undefined,
  razorpayOrderId: undefined,
  razorpayPaymentId: undefined,
  razorpaySignature: undefined,
}

export const useBookingStore = create<BookingState>((set, get) => ({
  ...initialState,

  setCurrentStep: (step) => set({ currentStep: step }),

  setService: (serviceId, serviceName, servicePrice, serviceDuration) =>
    set({
      serviceId,
      serviceName,
      servicePrice,
      serviceDuration,
      currentStep: 2,
    }),

  setDateTime: (date, time) =>
    set({
      selectedDate: date,
      selectedTime: time,
      currentStep: 3,
    }),

  setClientInfo: (name, email, phone, notes) =>
    set({
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      clientNotes: notes,
      currentStep: 4,
    }),

  setPaymentInfo: (orderId, paymentId, signature) =>
    set({
      razorpayOrderId: orderId,
      razorpayPaymentId: paymentId,
      razorpaySignature: signature,
    }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  resetBooking: () => set(initialState),

  getBookingData: () => {
    const state = get()
    return {
      serviceId: state.serviceId,
      serviceName: state.serviceName,
      servicePrice: state.servicePrice,
      serviceDuration: state.serviceDuration,
      selectedDate: state.selectedDate,
      selectedTime: state.selectedTime,
      clientName: state.clientName,
      clientEmail: state.clientEmail,
      clientPhone: state.clientPhone,
      clientNotes: state.clientNotes,
      razorpayOrderId: state.razorpayOrderId,
      razorpayPaymentId: state.razorpayPaymentId,
      razorpaySignature: state.razorpaySignature,
    }
  },
}))
