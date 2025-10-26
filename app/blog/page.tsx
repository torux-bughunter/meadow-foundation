import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, Filter, ArrowRight, User, Tag } from "lucide-react"
import { apostropheClient } from '@/lib/apostrophe-client'
import { config } from '@/lib/config'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  content?: string
  author?: string
  category?: string
  featuredImage?: {
    _urls?: {
      full: string
      max: string
      original: string
    }
    title?: string
  }
  publishedAt?: string
  status?: string
}

export default async function BlogPage() {
  const posts: BlogPost[] = await apostropheClient.getBlogPosts()

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Physiotherapy Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert knowledge, patient stories, and the latest developments in physiotherapy care and community health.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">No blog posts yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Content will appear here once you create blog posts in the CMS. Start writing to share your insights!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: BlogPost) => (
                  <article key={post._id} className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20 hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      {post.featuredImage?._urls?.full ? (
                        <Image
                          src={
                            post.featuredImage._urls.full.startsWith('http') 
                              ? post.featuredImage._urls.full 
                              : `${config.apostropheUrl}${post.featuredImage._urls.full}`
                          }
                          alt={post.featuredImage.title || post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        // Placeholder image since featuredImage is not available in public API
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      {/* Category Badge */}
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      )}
                      {/* Date Badge */}
                      {post.publishedAt && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-background/90 text-foreground rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-tight">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt - Show placeholder since excerpt is not available in public API */}
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed text-sm">
                        {post.excerpt || "Click to read this insightful article about physiotherapy and community health..."}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="flex items-center justify-between mb-4">
                        {post.author && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Read More Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group/link transition-colors duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </Link>
                        
                        {/* Reading Time Estimate */}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.content ? Math.ceil((post.content.length / 200)) : 3} min read
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
