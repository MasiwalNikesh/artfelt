"use client"

import { BlogPost } from "@/types/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

interface RelatedPostsProps {
  currentPost: BlogPost
  allPosts: BlogPost[]
  limit?: number
}

export function RelatedPosts({ currentPost, allPosts, limit = 3 }: RelatedPostsProps) {
  // Find related posts based on:
  // 1. Same category
  // 2. Shared tags
  // 3. Exclude current post

  const relatedPosts = allPosts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      let score = 0

      // Same category: +10 points
      if (post.category === currentPost.category) {
        score += 10
      }

      // Shared tags: +2 points per shared tag
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag))
      score += sharedTags.length * 2

      return { post, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-sage-100 bg-gradient-to-b from-white to-sage-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-charcoal">
            Continue Reading
          </h2>
          <p className="mt-2 text-charcoal/70">
            More articles you might find helpful
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full transition-all hover:border-sage-400 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between text-xs text-charcoal/60">
                      <span className="rounded-full bg-sage-100 px-2 py-1 font-medium text-sage-700">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal/60">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-sm font-medium text-sage-600">Read More →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
