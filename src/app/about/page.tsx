import Image from 'next/image'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Dragon Garden Saipan - World\'s Rarest Fruit Collection',
  description: 'Learn about Dragon Garden Saipan, our mission to cultivate the world\'s rarest fruits, and our commitment to conservation and sustainable agriculture in the tropical paradise of Saipan.',
  keywords: ['Dragon Garden Saipan about', 'rare fruit cultivation', 'exotic fruit garden', 'Saipan agriculture', 'fruit conservation'],
  openGraph: {
    title: 'About Dragon Garden Saipan - World\'s Rarest Fruit Collection',
    description: 'Learn about Dragon Garden Saipan, our mission to cultivate the world\'s rarest fruits, and our commitment to conservation and sustainable agriculture.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Dragon Garden Saipan
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where passion for rare fruits meets dedication to conservation in the tropical paradise of Saipan.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Dragon Garden Saipan began as a dream to create something extraordinary - a place where the world's rarest and most exotic fruits could thrive in perfect harmony with nature. Founded by passionate fruit enthusiasts and agricultural experts, our garden has become a sanctuary for some of the planet's most elusive botanical treasures.
                  </p>
                  <p>
                    What started as a small collection of unusual fruit trees has grown into one of the world's most comprehensive rare fruit gardens, featuring varieties that many people never knew existed. From legendary dragon fruits to taste-transforming miracle berries, our collection represents decades of careful cultivation and preservation efforts.
                  </p>
                  <p>
                    Located in the pristine tropical environment of Saipan, our garden benefits from the island's perfect climate conditions - consistent temperatures, abundant rainfall, and rich volcanic soil that provides an ideal growing environment for exotic fruits from around the globe.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Dragon Garden Saipan tropical fruit garden"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Preserving rare fruit genetics, advancing sustainable cultivation, and sharing the wonder of extraordinary fruits with the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🧬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Conservation
                </h3>
                <p className="text-gray-600">
                  Preserving rare fruit genetics for future generations through sustainable cultivation practices and genetic diversity maintenance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Education
                </h3>
                <p className="text-gray-600">
                  Sharing knowledge about rare fruits, sustainable agriculture, and the importance of biodiversity conservation with visitors and researchers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Implementing eco-friendly cultivation methods that work in harmony with Saipan's natural ecosystem and local environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Rare exotic fruits collection"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Special</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">🏆</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Unmatched Collection</h3>
                      <p className="text-gray-600">
                        Home to over 150 varieties of rare and exotic fruits, including some that exist nowhere else outside their native habitats.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨‍🔬</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Expert Cultivation</h3>
                      <p className="text-gray-600">
                        Our team includes certified horticulturists and fruit specialists with decades of experience in tropical fruit cultivation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">🔬</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Research Partnership</h3>
                      <p className="text-gray-600">
                        Collaborating with universities and research institutions to advance understanding of rare fruit cultivation and conservation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">🌱</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Sustainable Practices</h3>
                      <p className="text-gray-600">
                        Committed to organic cultivation methods, water conservation, and maintaining the ecological balance of our island environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Dedication</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind Dragon Garden Saipan is a passionate team of horticulturists, conservationists, and fruit enthusiasts dedicated to preserving and sharing nature's most extraordinary creations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Tropical and subtropical fruit cultivation
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Rare plant propagation and genetics
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Sustainable agriculture practices
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Plant conservation and biodiversity
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Educational program development
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Environmental stewardship
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Scientific integrity and research
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Community education and outreach
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Cultural respect and preservation
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                      Passion for rare and exotic fruits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="py-16 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Extraordinary
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Visit Dragon Garden Saipan and discover fruits you never knew existed. 
              Join us in celebrating nature's most incredible creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
              >
                Plan Your Visit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-green-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 