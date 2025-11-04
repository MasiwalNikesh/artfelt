import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import BookingConfirmation from "@/emails/BookingConfirmation"

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend with API key check
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const bookingData = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Artfelt Therapy <bookings@artfelt.in>",
      to: [bookingData.clientEmail],
      subject: `Your Artfelt Therapy Session is Confirmed - ${bookingData.date}`,
      react: BookingConfirmation({
        bookingId: bookingData.bookingId,
        clientName: bookingData.clientName,
        serviceName: bookingData.serviceName,
        date: bookingData.date,
        time: bookingData.time,
        amount: bookingData.amount,
        clientNotes: bookingData.clientNotes,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Also send a copy to the admin
    try {
      await resend.emails.send({
        from: "Artfelt Therapy <bookings@artfelt.in>",
        to: ["info@artfelt.in"],
        subject: `New Booking: ${bookingData.serviceName} - ${bookingData.clientName}`,
        react: BookingConfirmation({
          bookingId: bookingData.bookingId,
          clientName: bookingData.clientName,
          serviceName: bookingData.serviceName,
          date: bookingData.date,
          time: bookingData.time,
          amount: bookingData.amount,
          clientNotes: bookingData.clientNotes,
        }),
      })
    } catch (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError)
      // Don't fail the request if admin email fails
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    })
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    return NextResponse.json({ error: "Failed to send confirmation" }, { status: 500 })
  }
}
