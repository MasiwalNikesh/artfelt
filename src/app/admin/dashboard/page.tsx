'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Admin {
  id: string
  email: string
  name: string
  role: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ services: 0, homeContent: 0, blogPosts: 0, bookings: 0 })

  useEffect(() => {
    checkAuth()
    loadStats()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth/me')
      if (!response.ok) {
        router.push('/admin/login')
        return
      }
      const data = await response.json()
      setAdmin(data.admin)
    } catch (error) {
      router.push('/admin/login')
    } finally {
      setLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const [servicesRes, homeRes] = await Promise.all([
        fetch('/api/admin/services'),
        fetch('/api/admin/home'),
      ])

      const services = await servicesRes.json()
      const homeContent = await homeRes.json()

      setStats({
        services: services.length,
        homeContent: homeContent.length,
        blogPosts: 0,
        bookings: 0,
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-charcoal">Artfelt Admin</h1>
            <p className="text-sm text-charcoal/60">Welcome back, {admin?.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline">View Site</Button>
            </Link>
            <Button variant="terracotta" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Services</CardTitle>
              <CardDescription>Total therapy services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-600">{stats.services}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Home Sections</CardTitle>
              <CardDescription>Content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sage-600">{stats.homeContent}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Blog Posts</CardTitle>
              <CardDescription>Published articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-charcoal/40">{stats.blogPosts}</div>
              <p className="mt-1 text-xs text-charcoal/40">Coming soon</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bookings</CardTitle>
              <CardDescription>Total bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-charcoal/40">{stats.bookings}</div>
              <p className="mt-1 text-xs text-charcoal/40">Coming soon</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your website content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/admin/services">
                <Button className="h-20 w-full text-left">
                  <div>
                    <div className="text-lg font-semibold">Manage Services</div>
                    <div className="text-sm font-normal text-white/80">
                      Add, edit, or remove therapy services
                    </div>
                  </div>
                </Button>
              </Link>

              <Link href="/admin/home">
                <Button variant="sage" className="h-20 w-full text-left">
                  <div>
                    <div className="text-lg font-semibold">Edit Home Page</div>
                    <div className="text-sm font-normal text-white/80">
                      Update hero, about, and other sections
                    </div>
                  </div>
                </Button>
              </Link>

              <Button disabled className="h-20 w-full text-left opacity-50">
                <div>
                  <div className="text-lg font-semibold">Blog Posts</div>
                  <div className="text-sm font-normal">Coming soon</div>
                </div>
              </Button>

              <Button disabled className="h-20 w-full text-left opacity-50">
                <div>
                  <div className="text-lg font-semibold">View Bookings</div>
                  <div className="text-sm font-normal">Coming soon</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
