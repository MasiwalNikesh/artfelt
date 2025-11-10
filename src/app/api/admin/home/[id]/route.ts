import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT update home content (admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // Stringify content object if it exists
    if (body.content && typeof body.content === 'object') {
      body.content = JSON.stringify(body.content)
    }

    const content = await prisma.homeContent.update({
      where: { id },
      data: body,
    })

    return NextResponse.json({
      ...content,
      content: content.content ? JSON.parse(content.content) : null,
    })
  } catch (error: any) {
    console.error('Error updating home content:', error)
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Home content not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to update home content' }, { status: 500 })
  }
}

// DELETE home content (admin)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.homeContent.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Home content deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting home content:', error)
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Home content not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete home content' }, { status: 500 })
  }
}

// GET single home content (admin)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const content = await prisma.homeContent.findUnique({
      where: { id },
    })

    if (!content) {
      return NextResponse.json({ error: 'Home content not found' }, { status: 404 })
    }

    return NextResponse.json({
      ...content,
      content: content.content ? JSON.parse(content.content) : null,
    })
  } catch (error) {
    console.error('Error fetching home content:', error)
    return NextResponse.json({ error: 'Failed to fetch home content' }, { status: 500 })
  }
}
