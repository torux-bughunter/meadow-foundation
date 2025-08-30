# Meadow Foundation Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Decap CMS Configuration
NEXT_PUBLIC_DECAP_CMS_BACKEND=github
NEXT_PUBLIC_DECAP_CMS_REPO=your-username/your-repo-name
NEXT_PUBLIC_DECAP_CMS_BRANCH=main

# Optional: App URL for development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Decap CMS Setup

### 1. Git Provider Configuration

1. Go to your Git provider (GitHub, GitLab, or Bitbucket)
2. Create a new repository or use an existing one
3. Ensure you have write access to the repository

### 2. Decap CMS Configuration

1. Create `public/admin/config.yml` file
2. Configure your content collections
3. Set up authentication providers
4. Configure media handling

### 3. OAuth Setup

1. Set up OAuth application in your Git provider
2. Configure callback URLs
3. Add client ID and secret to environment variables

### 4. Content Collections

1. Define blog post structure
2. Set up user roles and permissions
3. Configure media upload settings
4. Set up workflow states

## Development

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

### 3. Access CMS Admin

Navigate to `/admin` to access the Decap CMS admin panel.

## Troubleshooting

### ❌ **Decap CMS connection error**

1. Check your environment variables
2. Verify Git provider OAuth settings
3. Ensure repository permissions are correct

### ❌ **Authentication issues**

1. Check OAuth configuration
2. Verify callback URLs
3. Check Git provider settings

### ❌ **Content not loading**

1. Check CMS configuration
2. Verify content collection setup
3. Check file paths and structure

## Production Deployment

1. Set up production environment variables
2. Configure Git provider for production
3. Set up proper OAuth redirects
4. Test CMS functionality in production
5. Configure media storage and CDN
