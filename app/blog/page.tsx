import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, Filter } from "lucide-react"

// Mock blog data - in real app this would come from CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding Lower Back Pain: A Comprehensive Guide",
    slug: "understanding-lower-back-pain-guide",
    excerpt:
      "Learn about the common causes of lower back pain and evidence-based treatment approaches that can help you recover faster.",
    coverImage: "/blog-back-pain.png",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder-user.jpg",
      role: "Lead Physiotherapist",
    },
    publishDate: "2024-01-15",
    readingTime: "8 min read",
    tags: ["Pain Management", "Rehabilitation", "Education"],
    category: "rehabilitation",
  },
  {
    id: 2,
    title: "Community Outreach: Bringing Physiotherapy to Rural Areas",
    slug: "community-outreach-rural-physiotherapy",
    excerpt:
      "Our mobile physiotherapy unit has reached over 500 patients in remote communities. Here's what we've learned.",
    coverImage: "/rural-physiotherapy-outreach.png",
    author: {
      name: "James Wilson",
      avatar: "/placeholder-user.jpg",
      role: "Community Coordinator",
    },
    publishDate: "2024-01-10",
    readingTime: "6 min read",
    tags: ["Community", "Outreach", "Rural Health"],
    category: "community-stories",
  },
  {
    id: 3,
    title: "Preventing Sports Injuries: Essential Tips for Athletes",
    slug: "preventing-sports-injuries-athletes",
    excerpt:
      "Evidence-based strategies to help athletes stay injury-free and perform at their best throughout the season.",
    coverImage: "/sports-injury-prevention.png",
    author: {
      name: "Maria Rodriguez",
      avatar: "/placeholder-user.jpg",
      role: "Sports Physiotherapist",
    },
    publishDate: "2024-01-05",
    readingTime: "10 min read",
    tags: ["Prevention", "Sports", "Athletes"],
    category: "prevention",
  },
  {
    id: 4,
    title: "Patient Success Story: Recovery After Stroke",
    slug: "patient-success-story-stroke-recovery",
    excerpt:
      "Meet John, who regained mobility and independence through our comprehensive stroke rehabilitation program.",
    coverImage: "/stroke-recovery-story.png",
    author: {
      name: "Dr. Emily Thompson",
      avatar: "/placeholder-user.jpg",
      role: "Neurological Physiotherapist",
    },
    publishDate: "2023-12-28",
    readingTime: "7 min read",
    tags: ["Success Story", "Stroke", "Recovery"],
    category: "community-stories",
  },
  {
    id: 5,
    title: "The Science Behind Manual Therapy Techniques",
    slug: "science-behind-manual-therapy",
    excerpt:
      "Exploring the latest research on manual therapy and its effectiveness in treating musculoskeletal conditions.",
    coverImage: "/manual-therapy-science.png",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder-user.jpg",
      role: "Lead Physiotherapist",
    },
    publishDate: "2023-12-20",
    readingTime: "12 min read",
    tags: ["Research", "Manual Therapy", "Evidence-Based"],
    category: "rehabilitation",
  },
  {
    id: 6,
    title: "Building Stronger Communities Through Health Education",
    slug: "building-communities-health-education",
    excerpt:
      "How our educational workshops are empowering communities to take charge of their health and prevent injuries.",
    coverImage: "/community-health-education.png",
    author: {
      name: "James Wilson",
      avatar: "/placeholder-user.jpg",
      role: "Community Coordinator",
    },
    publishDate: "2023-12-15",
    readingTime: "5 min read",
    tags: ["Education", "Community", "Prevention"],
    category: "prevention",
  },
]

const categories = [
  { value: "all", label: "All Categories" },
  { value: "rehabilitation", label: "Rehabilitation" },
  { value: "prevention", label: "Prevention" },
  { value: "community-stories", label: "Community Stories" },
]

function BlogFilters() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-lg">Filter Posts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Category</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Sort By</label>
          <Select defaultValue="newest">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {post.tags[0]}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </div>
        </div>

        <h3 className="font-serif font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium text-sm">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          <Button variant="ghost" size="sm" asChild>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(1).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Knowledge & Stories</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Evidence-based insights, community stories, and expert guidance to help you understand physiotherapy and
              improve your health.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilters />

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold mb-6">Featured Article</h2>
            <Card className="overflow-hidden border-border">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={blogPosts[0].coverImage || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{blogPosts[0].tags[0]}</Badge>
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readingTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={blogPosts[0].author.avatar || "/placeholder.svg"}
                        alt={blogPosts[0].author.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{blogPosts[0].author.name}</p>
                        <p className="text-sm text-muted-foreground">{blogPosts[0].author.role}</p>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={`/blog/${blogPosts[0].slug}`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
