import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all services (public)
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    })

    // Parse JSON fields
    const servicesWithParsedData = services.map((service) => ({
      ...service,
      bestFor: JSON.parse(service.bestFor),
    }))

    return NextResponse.json(servicesWithParsedData)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}
