import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all home content sections (public)
export async function GET() {
  try {
    const content = await prisma.homeContent.findMany({
      where: { isActive: true },
    })

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
