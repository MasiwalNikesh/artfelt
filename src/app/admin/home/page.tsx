'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface HomeContent {
  id: string
  section: string
  title: string | null
  subtitle: string | null
  description: string | null
  buttonText: string | null
  buttonLink: string | null
  isActive: boolean
}

export default function AdminHomePage() {
  const router = useRouter()
  const [content, setContent] = useState<HomeContent[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<HomeContent>>({})

  useEffect(() => {
    checkAuth()
    loadContent()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth/me')
      if (!response.ok) {
        router.push('/admin/login')
      }
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const loadContent = async () => {
    try {
      const response = await fetch('/api/admin/home')
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      }
    } catch (error) {
      console.error('Error loading home content:', error)
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (item: HomeContent) => {
    setEditingId(item.id)
    setFormData(item)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData({})
  }

  const saveEdit = async () => {
    if (!editingId) return

    try {
      const response = await fetch(`/api/admin/home/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Content updated successfully')
        setEditingId(null)
        setFormData({})
        loadContent()
      } else {
        alert('Failed to update content')
      }
    } catch (error) {
      console.error('Error updating content:', error)
      alert('Failed to update content')
    }
  }

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/home/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus }),
      })

      if (response.ok) {
        loadContent()
      }
    } catch (error) {
      console.error('Error updating content:', error)
    }
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
            <h1 className="text-2xl font-bold text-charcoal">Edit Home Page</h1>
            <p className="text-sm text-charcoal/60">Update hero, about, and other sections</p>
          </div>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="space-y-6">
          {content.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="capitalize">{item.section} Section</CardTitle>
                    <CardDescription>Update the {item.section} section content</CardDescription>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {editingId === item.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal">Title</label>
                      <input
                        type="text"
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal">Subtitle</label>
                      <input
                        type="text"
                        value={formData.subtitle || ''}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal">
                        Description
                      </label>
                      <textarea
                        value={formData.description || ''}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        rows={4}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal">
                          Button Text
                        </label>
                        <input
                          type="text"
                          value={formData.buttonText || ''}
                          onChange={(e) =>
                            setFormData({ ...formData, buttonText: e.target.value })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal">
                          Button Link
                        </label>
                        <input
                          type="text"
                          value={formData.buttonLink || ''}
                          onChange={(e) =>
                            setFormData({ ...formData, buttonLink: e.target.value })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={saveEdit}>Save Changes</Button>
                      <Button variant="outline" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {item.title && (
                      <div>
                        <strong className="text-sm text-charcoal/60">Title:</strong>
                        <p className="text-charcoal">{item.title}</p>
                      </div>
                    )}
                    {item.description && (
                      <div>
                        <strong className="text-sm text-charcoal/60">Description:</strong>
                        <p className="text-charcoal">{item.description}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => startEdit(item)}>
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleActive(item.id, item.isActive)}
                      >
                        {item.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
