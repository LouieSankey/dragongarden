'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-green-700">
                🐲 Dragon Garden Saipan
              </h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/fruits"
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Our Fruits
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/visit"
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Visit Us
            </Link>
            <Link
              href="/contact"
              className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/fruits"
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Fruits
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/visit"
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Visit Us
              </Link>
              <Link
                href="/contact"
                className="bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 