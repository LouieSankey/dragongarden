import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - Dragon Garden Saipan | Garden Tours & Fruit Experiences',
  description: 'Discover our premium services including guided garden tours, exotic fruit tastings, educational workshops, and private consultations at Dragon Garden Saipan.',
  keywords: ['Dragon Garden Saipan services', 'garden tours', 'fruit tasting', 'exotic fruit experiences', 'Saipan tours', 'tropical fruit education'],
  openGraph: {
    title: 'Services - Dragon Garden Saipan | Garden Tours & Fruit Experiences',
    description: 'Discover our premium services including guided garden tours, exotic fruit tastings, educational workshops, and private consultations.',
    type: 'website',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Guided Garden Tours',
      description: 'Experience our rare fruit collection with expert guides who share the stories behind each exotic variety.',
      features: ['2-3 hour comprehensive tours', 'Expert botanical guidance', 'Small group experiences', 'Seasonal fruit highlights'],
      price: 'From $45 per person',
      image: '/images/passion-fruit.png',
      popular: true,
    },
    {
      title: 'Exotic Fruit Tastings',
      description: 'Taste the extraordinary with our curated selection of rare fruits, including dragon fruit, miracle berries, and seasonal specialties.',
      features: ['10+ rare fruit varieties', 'Guided tasting experience', 'Learn about flavors & origins', 'Take-home fruit samples'],
      price: 'From $35 per person',
      image: '/images/suriname.png',
      popular: false,
    },
    {
      title: 'Educational Workshops',
      description: 'Learn the art of exotic fruit cultivation, from planting techniques to harvesting and preservation methods.',
      features: ['Hands-on learning', 'Take-home seedlings', 'Cultivation guides', 'Expert instruction'],
      price: 'From $75 per person',
      image: '/images/passion-fruit.png',
      popular: false,
    },
    {
      title: 'Private Consultations',
      description: 'Get personalized advice for growing exotic fruits in your own garden or commercial operation.',
      features: ['One-on-one expert guidance', 'Customized growing plans', 'Soil analysis recommendations', 'Follow-up support'],
      price: 'From $150 per session',
      image: '/images/suriname.png',
      popular: false,
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Immerse yourself in the world&apos;s rarest fruits through our expertly curated experiences, 
                educational programs, and personalized consultation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href="#services-list"
                  className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-list" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Experience
              </h2>
              <p className="text-xl text-gray-600">
                From intimate tastings to comprehensive educational workshops
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-700">
                        {service.price}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 border border-green-700 text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Bookings */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Group & Private Bookings
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👥</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Corporate Events</h3>
                      <p className="text-gray-600">
                        Team building experiences and corporate retreats in our tropical paradise setting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">🎓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Educational Groups</h3>
                      <p className="text-gray-600">
                        School field trips and university research programs with customized curricula.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">🌟</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Special Occasions</h3>
                      <p className="text-gray-600">
                        Birthdays, anniversaries, and unique celebrations among rare tropical fruits.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                  >
                    Request Group Quote
                  </Link>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Planning Your Visit
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Open daily: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Located in Saipan, Northern Mariana Islands</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Advanced booking recommended</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Free consultation available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discover the Extraordinary?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Book your Dragon Garden Saipan experience today and taste fruits you never knew existed. 
              Every visit is a journey into the world&apos;s most exotic flavors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
              >
                Book Your Experience
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-green-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 