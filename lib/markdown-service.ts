import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  author: string
  status: string
  tags: string[]
  reading_time: number
  content: string
  frontmatter: Record<string, any>
}

export interface Initiative {
  slug: string
  title: string
  summary: string
  description: string
  content: string
  image?: string
  start_date?: string
  end_date?: string
  status?: string
  impact_metrics?: string
  hero_image?: string
  gallery?: string[]
  tags: string[]
  featured: boolean
  video_url?: string
  frontmatter: Record<string, any>
}

export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  headshot?: string
  linkedin_url?: string
  order: number
  frontmatter: Record<string, any>
}

export interface ImpactMetric {
  key: string
  label: string
  value: number
  target?: number
  unit?: string
  source_type?: string
  source_link?: string
  updated_at?: string
  frontmatter: Record<string, any>
}

export class MarkdownService {
  private contentDir = path.join(process.cwd(), 'content')

  // Get all blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    const blogDir = path.join(this.contentDir, 'blog')
    if (!fs.existsSync(blogDir)) return []

    const files = fs.readdirSync(blogDir)
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(blogDir, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          slug: data.slug || file.replace('.md', ''),
          title: data.title || '',
          date: data.date || '',
          summary: data.summary || '',
          author: data.author || '',
          status: data.status || 'draft',
          tags: data.tags || [],
          reading_time: data.reading_time || 0,
          content,
          frontmatter: data
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  }

  // Get a single blog post by slug
  async getBlogPost(slug: string): Promise<BlogPost | null> {
    const posts = await this.getBlogPosts()
    return posts.find(post => post.slug === slug) || null
  }

  // Get a single initiative by slug
  async getInitiative(slug: string): Promise<Initiative | null> {
    const initiatives = await this.getInitiatives()
    return initiatives.find(initiative => initiative.slug === slug) || null
  }

  // Get all initiatives
  async getInitiatives(): Promise<Initiative[]> {
    const initiativesDir = path.join(this.contentDir, 'initiatives')
    if (!fs.existsSync(initiativesDir)) return []

    const files = fs.readdirSync(initiativesDir)
    const initiatives = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(initiativesDir, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          slug: data.slug || file.replace('.md', ''),
          title: data.title || '',
          summary: data.summary || '',
          description: data.description || data.summary || '',
          content,
          image: data.image || data.hero_image,
          start_date: data.start_date,
          end_date: data.end_date,
          status: data.status,
          impact_metrics: data.impact_metrics,
          hero_image: data.hero_image,
          gallery: data.gallery || [],
          tags: data.tags || [],
          featured: data.featured || false,
          video_url: data.video_url,
          frontmatter: data
        }
      })
      .sort((a, b) => (a.featured ? -1 : 1))

    return initiatives
  }

  // Get all team members
  async getTeamMembers(): Promise<TeamMember[]> {
    const teamDir = path.join(this.contentDir, 'team')
    if (!fs.existsSync(teamDir)) return []

    const files = fs.readdirSync(teamDir)
    const members = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(teamDir, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          slug: data.slug || file.replace('.md', ''),
          name: data.name || '',
          role: data.role || '',
          bio: data.bio || '',
          headshot: data.headshot,
          linkedin_url: data.linkedin_url,
          order: data.order || 0,
          frontmatter: data
        }
      })
      .sort((a, b) => a.order - b.order)

    return members
  }

  // Get all impact metrics
  async getImpactMetrics(): Promise<ImpactMetric[]> {
    const impactDir = path.join(this.contentDir, 'impact')
    if (!fs.existsSync(impactDir)) return []

    const files = fs.readdirSync(impactDir)
    const metrics = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(impactDir, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          key: data.key || file.replace('.md', ''),
          label: data.label || '',
          value: data.value || 0,
          target: data.target,
          unit: data.unit,
          source_type: data.source_type,
          source_link: data.source_link,
          updated_at: data.updated_at,
          frontmatter: data
        }
      })
      .sort((a, b) => a.key.localeCompare(b.key))

    return metrics
  }
}

export const markdownService = new MarkdownService()
