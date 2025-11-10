import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('admin_session')

    if (!sessionCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Decode session token
    const decoded = Buffer.from(sessionCookie.value, 'base64').toString('utf-8')
    const [adminId] = decoded.split(':')

    // Find admin user
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
      },
    })

    if (!admin || !admin.isActive) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
    }

    return NextResponse.json({ admin })
  } catch (error) {
    console.error('Session check error:', error)
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }
}
