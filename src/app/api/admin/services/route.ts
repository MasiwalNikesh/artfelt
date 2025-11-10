import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all services (admin - includes inactive)
export async function GET() {
  try {
    const services = await prisma.service.findMany({
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

// POST create new service (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      'title',
      'slug',
      'icon',
      'tagline',
      'description',
      'bestFor',
      'howItWorks',
      'sessionLength',
      'format',
      'frequency',
      'pricing',
      'ctaText',
      'order',
    ]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Stringify bestFor array
    const serviceData = {
      ...body,
      bestFor: JSON.stringify(body.bestFor),
    }

    const service = await prisma.service.create({
      data: serviceData,
    })

    return NextResponse.json(
      {
        ...service,
        bestFor: JSON.parse(service.bestFor),
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating service:', error)
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Service with this slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}
