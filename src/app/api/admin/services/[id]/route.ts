import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT update service (admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // Stringify bestFor array if it exists
    if (body.bestFor && Array.isArray(body.bestFor)) {
      body.bestFor = JSON.stringify(body.bestFor)
    }

    const service = await prisma.service.update({
      where: { id },
      data: body,
    })

    return NextResponse.json({
      ...service,
      bestFor: JSON.parse(service.bestFor),
    })
  } catch (error: any) {
    console.error('Error updating service:', error)
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Service with this slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 })
  }
}

// DELETE service (admin)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.service.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Service deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting service:', error)
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 })
  }
}

// GET single service (admin)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const service = await prisma.service.findUnique({
      where: { id },
    })

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    return NextResponse.json({
      ...service,
      bestFor: JSON.parse(service.bestFor),
    })
  } catch (error) {
    console.error('Error fetching service:', error)
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 })
  }
}
