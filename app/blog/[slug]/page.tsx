import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { apostropheClient } from '@/lib/apostrophe-client'

interface BlogPost {
  _id: string
  title: string
  slug: string
  content?: any // ApostropheCMS content can be complex objects
  author?: string
  category?: string
  featuredImage?: {
    url: string
  }
  excerpt?: string
  publishedAt?: string
  tags?: string[]
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Helper function to render ApostropheCMS content properly
function renderContent(content: any): string {
  if (typeof content === 'string') {
    // Filter out metadata strings that look like IDs or area references
    if (content.match(/^[a-z0-9]{20,}$/) || content.includes('area ') || content.includes('en:published')) {
      return ''
    }
    return content
  }
  
  if (Array.isArray(content)) {
    return content.map(item => renderContent(item)).join('')
  }
  
  if (content && typeof content === 'object') {
    // Handle ApostropheCMS area content structure
    if (content.metaType === 'area' && content.items && Array.isArray(content.items)) {
      return content.items.map((item: any) => renderContent(item)).join('')
    }
    
    // Handle rich text widgets - preserve the original HTML formatting
    if (content.type === '@apostrophecms/rich-text') {
      // Rich text content is already HTML with proper formatting, return it as-is
      return content.content || ''
    }
    
    // Handle image widgets - return the image HTML
    if (content.type === '@apostrophecms/image') {
      const alt = content.alt || content.title || 'Image'
      const src = content._url || content.url || content.src || ''
      if (src) {
        return `<img src="${src}" alt="${alt}" class="w-full h-auto rounded-lg mb-4" />`
      }
      return ''
    }
    
    // Handle other content types
    if (content.type === '@apostrophecms/video') {
      const src = content._url || content.url || content.src || ''
      if (src) {
        return `<video src="${src}" controls class="w-full h-auto rounded-lg mb-4"></video>`
      }
      return ''
    }
    
    // If it's a simple object with text content, extract it
    if (content.text || content.content) {
      return content.text || content.content || ''
    }
    
    // Recursively render nested objects, but skip metadata fields
    const renderedParts = []
    for (const [key, value] of Object.entries(content)) {
      // Skip metadata fields that start with underscore or contain specific patterns
      if (!key.startsWith('_') && 
          !key.includes('area') && 
          !key.includes('en:') &&
          !key.match(/^[a-z0-9]{20,}$/)) {
        const rendered = renderContent(value)
        if (rendered) {
          renderedParts.push(rendered)
        }
      }
    }
    return renderedParts.join('')
  }
  
  return ''
}

// Helper function to extract plain text for metadata (excerpts, descriptions)
function extractTextContent(content: any): string {
  const rendered = renderContent(content)
  // Remove HTML tags for plain text
  return rendered.replace(/<[^>]*>/g, '').trim()
}

// Removed generateStaticParams for SSR - pages will be generated on-demand

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await apostropheClient.getBlogPost(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  // Extract text content for description
  const contentText = extractTextContent(post.content)
  const description = post.excerpt || (contentText ? contentText.substring(0, 160) : '')

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await apostropheClient.getBlogPost(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  // Extract text content for display
  const contentText = renderContent(post.content)

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-4">
              {post.author && <span>By {post.author}</span>}
              {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString()}</span>}
              {post.category && <span>{post.category}</span>}
            </div>
            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}
          </header>
          
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={`https://cms.themedowfoundation.org${post.featuredImage._urls?.full || post.featuredImage._urls?.max || post.featuredImage._urls?.original || ''}`}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div 
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />
        </article>
      </div>
      <Footer />
    </>
  )
}
