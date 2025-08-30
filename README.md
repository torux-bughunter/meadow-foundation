# Meadow Foundation - Physiotherapy Website

A modern, accessible website to raise awareness about physiotherapy, publish volunteer-written blogs, and transparently show impact with verifiable artifacts.

## Features

### 🚀 **Blog System**
- **Decap CMS**: Git-based headless CMS for content management
- **WYSIWYG Editor**: Professional rich text editing
- **Role-Based Access**: Admin and Volunteer Author roles
- **Workflow Management**: Draft → Submit → Review → Publish
- **Media Management**: Image upload with optimization
- **Content Moderation**: Admin approval system for volunteer posts

### 🔐 **Authentication & Authorization**
- **Decap CMS Auth**: Secure authentication through Git provider OAuth
- **Role Management**: Admin and Volunteer Author permissions
- **User Profiles**: Customizable user profiles with approval system
- **Session Management**: Secure session handling

### 📱 **Modern UI/UX**
- **Next.js 15**: App Router with TypeScript
- **Tailwind CSS**: Modern, responsive design
- **shadcn/ui**: Beautiful, accessible components
- **Dark/Light Mode**: Theme switching support

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **CMS**: Decap CMS (Git-based)
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: React Context + Hooks
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- GitHub/GitLab/Bitbucket account for CMS

### 1. Clone and Install

```bash
git clone <repository-url>
cd physiotherapy-website
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Decap CMS Configuration
NEXT_PUBLIC_DECAP_CMS_BACKEND=github
NEXT_PUBLIC_DECAP_CMS_REPO=your-username/your-repo-name
NEXT_PUBLIC_DECAP_CMS_BRANCH=main
```

### 3. Decap CMS Setup

1. Configure your Git provider (GitHub, GitLab, or Bitbucket)
2. Set up OAuth authentication in Decap CMS
3. Configure content collections in `public/admin/config.yml`
4. Set up your content workflow

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## User Roles & Workflows

### 👑 **Admin**
- Full access to all content and users
- Can publish, edit, and delete any blog post
- Manages volunteer author approvals
- Access to CMS admin panel (`/admin`)
- Can view all posts and change their status

### ✍️ **Volunteer Author**
- Can create and edit their own blog posts
- Must be approved by admin before posting
- Can save drafts and submit for review
- Access to personal dashboard
- Can upload media for their posts

### 🔒 **Public Users**
- Can view published blog posts
- Can sign up to become volunteer authors
- Access to public content only

## Blog Post Workflow

1. **Volunteer Author** creates a draft
2. **Author** submits post for review
3. **Admin** reviews and either:
   - Approves and publishes
   - Rejects with feedback
4. **Published posts** are visible to public

## File Structure

```
physiotherapy-website/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Authentication pages
│   ├── blog/              # Blog pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── admin/            # Admin components
│   ├── auth/             # Authentication components
│   ├── blog/             # Blog components
│   └── ui/               # UI components (shadcn/ui)
├── context/              # React contexts
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── supabase/             # Database schema
```

## Key Components

### BlogEditor
- WYSIWYG editor with CKEditor 5
- Image upload support
- Tag management
- Reading time calculation
- Draft saving and submission

### AdminDashboard
- Post management interface
- User approval system
- Statistics and analytics
- Content moderation tools

### AuthForm
- Sign in/up functionality
- Form validation
- Error handling
- User feedback

## Database Schema

### Tables
- **profiles**: User profiles with roles and approval status
- **blog_posts**: Blog posts with workflow states
- **media**: Uploaded media files
- **initiatives**: Program and initiative content
- **impact_metrics**: Impact measurement data

### Row Level Security (RLS)
- Users can only see their own posts unless published
- Admins have full access to all content
- Public users can only see published content

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support and questions:
- Check the documentation
- Review the code examples
- Open an issue on GitHub

## License

This project is licensed under the MIT License.

---

Built with ❤️ for the physiotherapy community
