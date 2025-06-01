# Dragon Garden Saipan 🐲🌱

A beautiful, SEO-optimized website for Dragon Garden Saipan - showcasing the world's rarest and most exotic fruits in the tropical paradise of Saipan.

## 🌟 Features

### 🔍 SEO Optimized

- **Next.js App Router** for better SEO performance
- **Dynamic metadata** for each page and blog post
- **Structured data (JSON-LD)** for rich snippets
- **Automatic sitemap generation** for search engines
- **Robots.txt** for web crawler guidance
- **Open Graph & Twitter Cards** for social media sharing

### 📝 Optimized Blog System

- **MDX/Markdown support** for easy content creation
- **Automatic reading time calculation**
- **Tag-based categorization**
- **Related posts suggestions**
- **SEO-friendly URLs** (/blog/post-slug)
- **Breadcrumb navigation** for better UX and SEO

### 🎨 Beautiful Design

- **Responsive design** that works on all devices
- **Tailwind CSS** for modern, consistent styling
- **Green color scheme** reflecting the garden theme
- **Smooth animations** and hover effects
- **Professional typography** with Inter font

### 🚀 Performance & Technical

- **TypeScript** for type safety
- **Image optimization** with Next.js Image component
- **Static generation** for fast loading
- **Component-based architecture** for maintainability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog index
│   │   └── [slug]/page.tsx # Individual blog posts
│   ├── sitemap.ts         # Automatic sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   └── blog.ts           # Blog management utilities
└── content/               # Content files
    └── blog/             # Blog posts in Markdown/MDX
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **MDX/Markdown** - Content authoring format
- **Gray Matter** - Frontmatter parsing
- **Reading Time** - Automatic reading time calculation
- **Date-fns** - Date formatting utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0+ or 20.0.0+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dragongarden
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📝 Adding Blog Content

### Creating a New Blog Post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add the required frontmatter:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post for SEO and previews"
image: "https://example.com/image.jpg" # Optional featured image
author: "Dragon Garden Saipan"
tags: ["Tag1", "Tag2", "Tag3"]
seoTitle: "SEO optimized title"
seoDescription: "SEO optimized description"
seoKeywords: ["keyword1", "keyword2", "keyword3"]
---

# Your Content Here

Write your blog post content in Markdown format...
```

3. The post will automatically appear on the blog page and be included in the sitemap

### Frontmatter Fields

- **title**: The main title of the post
- **date**: Publication date (YYYY-MM-DD format)
- **excerpt**: Short description for previews and SEO
- **image**: Optional featured image URL
- **author**: Author name
- **tags**: Array of tags for categorization
- **seoTitle**: Custom SEO title (falls back to title)
- **seoDescription**: Custom SEO description (falls back to excerpt)
- **seoKeywords**: Array of SEO keywords

## 🔧 Customization

### Colors and Styling

The site uses a green color scheme that can be customized in the Tailwind CSS classes:

- Primary green: `green-700`
- Light green: `green-100`
- Dark green: `green-900`

### SEO Configuration

Update the base SEO configuration in `src/app/layout.tsx`:

- Site title template
- Default descriptions
- Open Graph images
- Social media handles

### Domain and URLs

Update the domain in the following files:

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/layout.tsx` (canonical URLs)

## 📊 SEO Features

### Automatic SEO Optimizations

- **Meta tags** for each page
- **Open Graph tags** for social sharing
- **Twitter Card tags** for Twitter sharing
- **Structured data** (JSON-LD) for rich snippets
- **Canonical URLs** to prevent duplicate content
- **Sitemap generation** for search engines
- **Robots.txt** for crawler guidance

### Blog SEO Features

- **Individual post metadata** with custom titles and descriptions
- **Article structured data** for blog posts
- **Reading time estimation** for better UX
- **Tag-based organization** for content discovery
- **Related posts** to increase engagement
- **Breadcrumb navigation** for better site structure

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js application and can be deployed to:

- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any platform supporting Node.js

## 📱 Mobile Optimization

The website is fully responsive and optimized for:

- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🐛 Development

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update the navigation in `src/components/Navigation.tsx`
4. Add the page to the sitemap in `src/app/sitemap.ts`

### Component Development

All components are located in `src/components/` and use TypeScript for type safety.

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing color scheme (green theme)
- Ensure responsive design with `sm:`, `md:`, `lg:` breakpoints
- Use semantic HTML elements for accessibility

## 📄 License

This project is for Dragon Garden Saipan. All rights reserved.

## 🤝 Contributing

For any questions or contributions, please contact Dragon Garden Saipan.

---

**Dragon Garden Saipan** - Where rare fruits meet paradise 🌴🐲
