import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { markdownService } from '@/lib/markdown-service'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for static export
export async function generateStaticParams() {
  const posts = await markdownService.getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await markdownService.getBlogPost(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.summary || post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.summary || post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await markdownService.getBlogPost(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
          <span>By {post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.tags.length > 0 && <span>{post.tags.join(', ')}</span>}
        </div>
        {post.summary && (
          <p className="text-xl text-muted-foreground">{post.summary}</p>
        )}
      </header>
      
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}
