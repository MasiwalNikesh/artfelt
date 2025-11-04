export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  readTime: string
  publishedAt: string
  updatedAt?: string
  coverImage?: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
}
