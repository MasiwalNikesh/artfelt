import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = await request.json()

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex")

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      )
    }

    // Payment verified successfully
    // Now create the booking and send confirmation email

    const bookingId = `BK${Date.now()}`

    // TODO: Save booking to your database (Supabase/custom)
    // For now, we'll just prepare the data

    const bookingConfirmation = {
      bookingId,
      serviceName: bookingData.serviceName,
      date: bookingData.selectedDate,
      time: bookingData.selectedTime,
      clientName: bookingData.clientName,
      clientEmail: bookingData.clientEmail,
      clientPhone: bookingData.clientPhone,
      clientNotes: bookingData.clientNotes,
      amount: bookingData.servicePrice,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    // Send confirmation email
    try {
      await fetch(`${request.nextUrl.origin}/api/email/send-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingConfirmation),
      })
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError)
      // Continue even if email fails - booking is confirmed
    }

    // TODO: Create calendar event via zcal.co or Cal.com API
    // Example for zcal.co:
    // const calendarResponse = await fetch('https://api.zcal.co/v1/bookings', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.ZCAL_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: bookingData.clientName,
    //     email: bookingData.clientEmail,
    //     start_time: `${bookingData.selectedDate}T${bookingData.selectedTime}:00`,
    //     timezone: 'Asia/Kolkata'
    //   })
    // })

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Booking confirmed successfully",
    })
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    )
  }
}
