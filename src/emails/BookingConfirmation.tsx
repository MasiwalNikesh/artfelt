import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Heading,
} from "@react-email/components"
import { format } from "date-fns"

interface BookingConfirmationProps {
  bookingId: string
  clientName: string
  serviceName: string
  date: string
  time: string
  amount: number
  clientNotes?: string
}

export default function BookingConfirmation({
  bookingId,
  clientName,
  serviceName,
  date,
  time,
  amount,
  clientNotes,
}: BookingConfirmationProps) {
  const formattedDate = format(new Date(date), "EEEE, MMMM d, yyyy")

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={heading}>🌿 Your Session is Confirmed!</Heading>
          </Section>

          {/* Greeting */}
          <Text style={text}>Hi {clientName},</Text>

          <Text style={text}>
            Thank you for booking with Artfelt Therapy. We're looking forward to supporting you on
            your journey.
          </Text>

          {/* Booking Details */}
          <Section style={detailsBox}>
            <Text style={detailLabel}>Booking ID</Text>
            <Text style={detailValue}>{bookingId}</Text>

            <Text style={detailLabel}>Service</Text>
            <Text style={detailValue}>{serviceName}</Text>

            <Text style={detailLabel}>Date</Text>
            <Text style={detailValue}>{formattedDate}</Text>

            <Text style={detailLabel}>Time</Text>
            <Text style={detailValue}>{time}</Text>

            <Text style={detailLabel}>Amount Paid</Text>
            <Text style={detailValue}>₹{amount}</Text>

            {clientNotes && (
              <>
                <Text style={detailLabel}>Your Notes</Text>
                <Text style={detailValue}>{clientNotes}</Text>
              </>
            )}
          </Section>

          {/* Meeting Link Button */}
          <Section style={{ textAlign: "center" as const }}>
            <Button style={button} href="https://meet.google.com/your-link">
              Join Video Session
            </Button>
            <Text style={smallText}>
              Meeting link will be sent 24 hours before your session
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Preparation Section */}
          <Section>
            <Heading style={subheading}>Preparing for Your Session</Heading>
            <Text style={text}>
              • Find a quiet, comfortable space where you won't be disturbed
              <br />
              • Have paper and art supplies ready (if applicable)
              <br />
              • Join 5 minutes early to test your connection
              <br />
              • Come with an open mind and heart
              <br />
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Cancellation Policy */}
          <Section>
            <Heading style={subheading}>Need to Reschedule?</Heading>
            <Text style={text}>
              Please contact us at least 24 hours in advance if you need to reschedule or cancel.
              <br />
              <br />
              Email: info@artfelt.in
              <br />
              Phone/WhatsApp: +91-9717259345
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              With care,
              <br />
              Artfelt Therapy Team
            </Text>
            <Text style={footerText}>
              This is an automated confirmation email. Please do not reply to this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#F5F1E8",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
}

const header = {
  backgroundColor: "#8FA998",
  borderRadius: "8px 8px 0 0",
  padding: "32px",
  textAlign: "center" as const,
}

const heading = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0",
}

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#3A3A3A",
  margin: "0 0 12px 0",
}

const text = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#3A3A3A",
  margin: "16px 32px",
}

const smallText = {
  fontSize: "14px",
  color: "#6d8a73",
  margin: "8px 0",
}

const detailsBox = {
  backgroundColor: "#F5F1E8",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 32px",
}

const detailLabel = {
  fontSize: "14px",
  color: "#6d8a73",
  fontWeight: "600",
  margin: "12px 0 0 0",
}

const detailValue = {
  fontSize: "16px",
  color: "#3A3A3A",
  fontWeight: "500",
  margin: "4px 0 0 0",
}

const button = {
  backgroundColor: "#C77D5B",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
  margin: "24px 0 8px 0",
}

const hr = {
  borderColor: "#E5E5E5",
  margin: "32px 32px",
}

const footer = {
  margin: "32px",
}

const footerText = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6d8a73",
  margin: "12px 0",
}
