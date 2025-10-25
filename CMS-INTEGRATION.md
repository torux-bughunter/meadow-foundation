# ApostropheCMS Integration Guide

## Overview
Your website now uses **ApostropheCMS** instead of Decap CMS for content management. This provides:
- ✅ **Unlimited users** for free
- ✅ **Visual content editor** with rich text, images, and media
- ✅ **User roles and permissions** 
- ✅ **Content workflow** and moderation
- ✅ **API-first architecture** for easy integration

## How It Works

### 1. Content Creation
- **Access CMS**: Go to `http://localhost:3000` (ApostropheCMS admin)
- **Login**: Use your admin credentials
- **Create Content**: Use the "+" button to create:
  - Blog Posts
  - Initiatives  
  - Team Members
  - Impact Metrics

### 2. Content Display
- **Your website** automatically fetches content from ApostropheCMS
- **No manual updates** needed - content appears instantly
- **Real-time sync** between CMS and website

### 3. Content Types Available

#### Blog Posts
- Title, content, author, category
- Featured images and excerpts
- Status: Draft/Published
- Auto-generated slugs

#### Initiatives
- Title, description, images
- Start/end dates, status
- Location and target audience
- Impact metrics

#### Team Members
- Name, role, bio, photo
- Contact information
- Education and certifications
- Ordering system

#### Impact Metrics
- Metric name, value, unit
- Year and category
- Target goals and achievements
- Status tracking

## File Structure

```
physiotherapy-website/
├── lib/
│   ├── apostrophe-client.js    # API client for CMS
│   └── config.js              # Configuration
├── app/
│   ├── blog/page.tsx          # Blog listing (fetches from CMS)
│   ├── initiatives/page.tsx   # Initiatives listing (fetches from CMS)
│   └── admin/page.tsx         # Redirects to CMS
└── meadow-cms/                # ApostropheCMS installation
    ├── modules/               # Content type definitions
    └── app.js                # CMS configuration
```

## Getting Started

### 1. Start the CMS
```bash
cd meadow-cms
npm start
```
CMS will be available at: `http://localhost:3000`

### 2. Start Your Website
```bash
cd physiotherapy-website  
npm run dev
```
Website will be available at: `https://your-website-domain.com`

### 3. Create Your First Content
1. Go to `http://localhost:3000`
2. Login with admin credentials
3. Click the "+" button
4. Choose "Blog Post"
5. Fill in the details
6. Set status to "Published"
7. Save

### 4. View on Website
- Go to `https://your-website-domain.com/blog`
- Your new blog post should appear!

## Configuration

### Environment Variables
Create a `.env.local` file:
```bash
NEXT_PUBLIC_APOSTROPHE_URL=http://localhost:3000
```

### Production Setup
For production, update the URL in `lib/config.js`:
```javascript
export const config = {
  apostropheUrl: 'https://your-cms-domain.com'
};
```

## Troubleshooting

### Content Not Appearing?
1. Check CMS is running (`http://localhost:3000`)
2. Verify content status is "Published"
3. Check browser console for API errors
4. Ensure content has required fields filled

### API Errors?
1. Verify CMS URL in config
2. Check CMS is accessible
3. Verify content types are properly configured

### Build Errors?
1. Run `npm install` to update dependencies
2. Clear Next.js cache: `rm -rf .next`
3. Restart development server

## Benefits Over Decap CMS

- **No GitHub dependency** - content stored in MongoDB
- **Visual editor** - no markdown required
- **User management** - assign roles and permissions
- **Media handling** - drag & drop images and files
- **Content workflow** - draft → review → publish
- **API access** - easy integration with any frontend
- **Unlimited users** - no tier restrictions

## Next Steps

1. **Create sample content** in the CMS
2. **Customize content types** if needed
3. **Set up user roles** for your team
4. **Configure media uploads** and file storage
5. **Deploy to production** when ready

## Support

- **ApostropheCMS Docs**: https://docs.apostrophecms.org/
- **Community**: https://chat.apostrophecms.org/
- **GitHub**: https://github.com/apostrophecms/apostrophe
