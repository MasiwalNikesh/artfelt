"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllServices } from "@/lib/data/services"
import { useBookingStore } from "@/store/bookingStore"

export function ServiceSelector() {
  const services = getAllServices()
  const setService = useBookingStore((state) => state.setService)

  const handleSelectService = (serviceId: string, name: string, price: number, duration: number) => {
    setService(serviceId, name, price, duration)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-serif text-3xl font-bold text-charcoal">Select a Service</h2>
        <p className="text-charcoal/70">Choose the service that best fits your needs</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.id}
            className="transition-all hover:border-sage-400 hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-3 text-4xl">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.tagline}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-1 text-sm text-charcoal/70">
                <p>
                  <strong>Duration:</strong> {service.sessionLength}
                </p>
                <p>
                  <strong>Format:</strong> {service.format}
                </p>
                <p className="text-lg font-semibold text-sage-700">₹{service.pricing}</p>
              </div>
              <Button
                className="w-full"
                onClick={() =>
                  handleSelectService(service.id, service.title, service.pricing, 60)
                }
              >
                Select This Service
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
