import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllPosts, getAllTags } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Dragon Garden Saipan',
  description: 'Discover the latest insights, stories, and tips about growing and enjoying the world\'s rarest fruits from Dragon Garden Saipan.',
  keywords: ['Dragon Garden Saipan blog', 'exotic fruits', 'rare fruits', 'tropical gardening', 'fruit cultivation', 'Saipan agriculture'],
  openGraph: {
    title: 'Blog - Dragon Garden Saipan',
    description: 'Discover the latest insights, stories, and tips about growing and enjoying the world\'s rarest fruits from Dragon Garden Saipan.',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Garden Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the fascinating world of rare and exotic fruits through our stories, 
                cultivation tips, and behind-the-scenes insights from Dragon Garden Saipan.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {posts.length > 0 ? (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        {post.image && (
                          <div className="md:w-1/3">
                            <div className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2">
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        )}
                        <div className={`p-6 ${post.image ? 'md:w-2/3' : 'w-full'}`}>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readingTime}</span>
                            <span className="mx-2">•</span>
                            <span>By {post.author}</span>
                          </div>
                          
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="hover:text-green-700 transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h2>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span 
                                  key={tag}
                                  className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
                          >
                            Read Full Article
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6">
                      <span className="text-6xl">📝</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Coming Soon!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We're preparing exciting content about our rare fruits, cultivation techniques, 
                      and the stories behind Dragon Garden Saipan. Check back soon for our first posts!
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                    >
                      Explore Our Garden
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  About Dragon Garden
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We're passionate about cultivating the world's rarest fruits in the tropical paradise of Saipan. 
                  Our blog shares insights from our journey of growing extraordinary fruits.
                </p>
                <Link
                  href="/about"
                  className="text-green-700 font-medium text-sm hover:text-green-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>

              {tags.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 