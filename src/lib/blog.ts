import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  tags: string[]
  image?: string
  author: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export function getAllPosts(): BlogPost[] {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        readingTime: readingTime(content).text,
        tags: data.tags || [],
        image: data.image || null,
        author: data.author || 'Dragon Garden Saipan',
        seo: {
          title: data.seoTitle || data.title || 'Untitled',
          description: data.seoDescription || data.excerpt || '',
          keywords: data.seoKeywords || data.tags || [],
        },
      } as BlogPost
    })

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    let fileContents = ''
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8')
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content,
      readingTime: readingTime(content).text,
      tags: data.tags || [],
      image: data.image || null,
      author: data.author || 'Dragon Garden Saipan',
      seo: {
        title: data.seoTitle || data.title || 'Untitled',
        description: data.seoDescription || data.excerpt || '',
        keywords: data.seoKeywords || data.tags || [],
      },
    } as BlogPost
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(tags)).sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
} 