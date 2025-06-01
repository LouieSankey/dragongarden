import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to{' '}
                  <span className="text-green-700">Dragon Garden</span>{' '}
                  Saipan
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Discover the world&apos;s rarest and most exotic fruits in our botanical paradise. 
                  From legendary dragon fruits to mysterious tropical treasures, experience 
                  flavors you&apos;ve never imagined in the heart of Saipan.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/fruits"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                  >
                    Explore Our Fruits
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-[500px] h-80 rounded-lg overflow-hidden shadow-xl mx-auto">
                  <Image
                    src="/images/pineapple.png"
                    alt="Exotic tropical fruits in Dragon Garden Saipan"
                    width={500}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Dragon Garden Saipan?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in cultivating the world&apos;s most extraordinary fruits, 
                bringing you unique tastes and experiences you won&apos;t find anywhere else.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🐲</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rarest Varieties
                </h3>
                <p className="text-gray-600">
                  Home to fruits so rare they&apos;re considered mythical. Experience dragon fruits, 
                  miracle berries, and other legendary tropical treasures.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable Cultivation
                </h3>
                <p className="text-gray-600">
                  We use eco-friendly farming practices and traditional cultivation methods 
                  to ensure the highest quality and environmental responsibility.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🏝️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Paradise Location
                </h3>
                <p className="text-gray-600">
                  Located in the tropical paradise of Saipan, our garden benefits from 
                  perfect climate conditions for growing exotic fruits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest from Our Garden
              </h2>
              <p className="text-xl text-gray-600">
                Discover stories, tips, and insights from our exotic fruit cultivation journey.
              </p>
            </div>

            {recentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {post.image && (
                      <div className="aspect-w-16 aspect-h-9">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={225}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-green-700 font-medium hover:text-green-800 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Welcome to our blog! We&apos;ll be sharing exciting content about our rare fruits soon.
                </p>
                <Link
                  href="/blog"
                  className="inline-block mt-4 text-green-700 font-medium hover:text-green-800 transition-colors"
                >
                  Visit Our Blog →
                </Link>
              </div>
            )}

            {recentPosts.length > 0 && (
              <div className="text-center mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                >
                  View All Posts
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Extraordinary?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Visit Dragon Garden Saipan and taste fruits you never knew existed. 
              Book your appointment today for an unforgettable tropical adventure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
            >
              Book Your Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
