export type UserRole = 'admin' | 'volunteer_author'
export type PostStatus = 'draft' | 'submitted' | 'published' | 'rejected'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  bio: string | null
  avatar_url: string | null
  role: UserRole
  is_approved: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string
  author_id: string
  cover_image_url: string | null
  tags: string[]
  status: PostStatus
  reading_time: number | null
  admin_notes: string | null
  submitted_at: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Media {
  id: string
  file_name: string
  file_url: string
  file_size: number | null
  mime_type: string | null
  alt_text: string | null
  author_id: string
  created_at: string
}

export interface Initiative {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string
  hero_image_url: string | null
  gallery: string[]
  video_url: string | null
  tags: string[]
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface ImpactMetric {
  id: string
  key: string
  label: string
  value: number
  target: number | null
  unit: string | null
  source_type: string | null
  source_link: string | null
  updated_at: string
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Profile
}

export interface InitiativeWithAuthor extends Initiative {
  author: Profile
}

// Decap CMS content types (Git-based)
export interface DecapCMSConfig {
  backend: {
    name: string
    repo: string
    branch: string
    base_url?: string
  }
  local_backend?: boolean
  media_folder: string
  public_folder: string
  collections: DecapCMSCollection[]
}

export interface DecapCMSCollection {
  name: string
  label: string
  folder: string
  create: boolean
  slug: string
  fields: DecapCMSField[]
  editor?: {
    preview: boolean
  }
}

export interface DecapCMSField {
  name: string
  label: string
  widget: string
  required?: boolean
  default?: any
  pattern?: string[]
  options?: string[]
  fields?: DecapCMSField[]
  multiple?: boolean
  min?: number
  max?: number
  hint?: string
  help_text?: string
}
