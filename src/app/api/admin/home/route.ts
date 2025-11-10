import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all home content (admin - includes inactive)
export async function GET() {
  try {
    const content = await prisma.homeContent.findMany()

    // Parse JSON content field
    const contentWithParsedData = content.map((item) => ({
      ...item,
      content: item.content ? JSON.parse(item.content) : null,
    }))

    return NextResponse.json(contentWithParsedData)
  } catch (error) {
    console.error('Error fetching home content:', error)
    return NextResponse.json({ error: 'Failed to fetch home content' }, { status: 500 })
  }
}

// POST create new home content section (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Stringify content object if it exists
    if (body.content && typeof body.content === 'object') {
      body.content = JSON.stringify(body.content)
    }

    const content = await prisma.homeContent.create({
      data: body,
    })

    return NextResponse.json(
      {
        ...content,
        content: content.content ? JSON.parse(content.content) : null,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating home content:', error)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Home content section with this name already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: 'Failed to create home content' }, { status: 500 })
  }
}
