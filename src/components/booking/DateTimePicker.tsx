"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useBookingStore } from "@/store/bookingStore"
import { format, addDays, startOfDay } from "date-fns"

interface TimeSlot {
  time: string
  available: boolean
}

export function DateTimePicker() {
  const { selectedDate, selectedTime, setDateTime, setCurrentStep, serviceId } = useBookingStore()
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [selectedDateState, setSelectedDateState] = useState<string>(selectedDate || "")
  const [selectedTimeState, setSelectedTimeState] = useState<string>(selectedTime || "")
  const [loading, setLoading] = useState(false)

  // Generate next 14 days for selection
  const next14Days = Array.from({ length: 14 }, (_, i) => {
    const date = addDays(startOfDay(new Date()), i)
    return {
      date: format(date, "yyyy-MM-dd"),
      display: format(date, "EEE, MMM d"),
      isToday: i === 0,
    }
  })

  // Fetch available time slots when date is selected
  useEffect(() => {
    if (selectedDateState) {
      fetchAvailableSlots(selectedDateState)
    }
  }, [selectedDateState])

  const fetchAvailableSlots = async (date: string) => {
    setLoading(true)
    try {
      // Call your API to get available slots
      const response = await fetch(
        `/api/booking/availability?date=${date}&serviceId=${serviceId}`
      )
      const data = await response.json()
      setAvailableSlots(data.slots || generateDefaultSlots())
    } catch (error) {
      console.error("Error fetching slots:", error)
      // Fallback to default slots
      setAvailableSlots(generateDefaultSlots())
    } finally {
      setLoading(false)
    }
  }

  // Generate default time slots (9 AM - 6 PM, every hour)
  const generateDefaultSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    for (let hour = 9; hour <= 18; hour++) {
      const time = `${hour.toString().padStart(2, "0")}:00`
      slots.push({ time, available: true })
    }
    return slots
  }

  const handleDateSelect = (date: string) => {
    setSelectedDateState(date)
    setSelectedTimeState("") // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTimeState(time)
  }

  const handleContinue = () => {
    if (selectedDateState && selectedTimeState) {
      setDateTime(selectedDateState, selectedTimeState)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-charcoal">
          Choose Date & Time
        </h2>
        <p className="text-charcoal/70">Select your preferred appointment slot</p>
      </div>

      {/* Date Selection */}
      <div>
        <h3 className="mb-3 font-semibold text-charcoal">Select Date</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
          {next14Days.map((day) => (
            <button
              key={day.date}
              onClick={() => handleDateSelect(day.date)}
              className={`rounded-lg border-2 p-3 text-center transition-all ${
                selectedDateState === day.date
                  ? "border-sage-400 bg-sage-50 text-sage-700"
                  : "border-soft-gray bg-white hover:border-sage-200"
              }`}
            >
              <div className="text-xs text-charcoal/60">{day.display.split(",")[0]}</div>
              <div className="font-semibold text-charcoal">{day.display.split(",")[1]}</div>
              {day.isToday && (
                <div className="mt-1 text-xs font-medium text-sage-600">Today</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDateState && (
        <div>
          <h3 className="mb-3 font-semibold text-charcoal">Select Time</h3>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-charcoal/60">Loading available slots...</div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6">
              {availableSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`rounded-lg border-2 p-3 text-center font-medium transition-all ${
                    selectedTimeState === slot.time
                      ? "border-sage-400 bg-sage-50 text-sage-700"
                      : slot.available
                        ? "border-soft-gray bg-white hover:border-sage-200"
                        : "cursor-not-allowed border-soft-gray bg-gray-50 text-charcoal/30"
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedDateState || !selectedTimeState}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
