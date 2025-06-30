"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-blue-400 px-4 sm:px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          MOLIFE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/new-page" className="text-white hover:text-blue-100 transition-colors">
            New Page
          </Link>
          <Link href="/" className="text-white hover:text-blue-100 transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-blue-100 transition-colors">
              Offer
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-blue-600 text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link 
                href="/offer/general-practitioner" 
                className="block px-6 py-4 hover:bg-blue-700 transition-colors rounded-t-lg"
              >
                General practitioner
              </Link>
              <Link 
                href="/offer/psychology" 
                className="block px-6 py-4 hover:bg-blue-700 transition-colors rounded-b-lg"
              >
                Psychological services
              </Link>
            </div>
          </div>
          <Link href="/book-appointment" className="text-white hover:text-blue-100 transition-colors">
            Book Consultation
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-blue-100 transition-colors">
              About us
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-blue-600 text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link 
                href="/about-us/our-team" 
                className="block px-6 py-4 hover:bg-blue-700 transition-colors rounded-t-lg"
              >
                Our Team
              </Link>
              <Link 
                href="/about-us/who-we-are" 
                className="block px-6 py-4 hover:bg-blue-700 transition-colors"
              >
                Who we are
              </Link>
              <Link 
                href="/about-us/community-projects" 
                className="block px-6 py-4 hover:bg-blue-700 transition-colors rounded-b-lg"
              >
                Community projects
              </Link>
            </div>
          </div>
          <Link href="/contact" className="text-white hover:text-blue-100 transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-white hover:text-blue-100 transition-colors">
            Blog
          </Link>
          <Link
            href="https://13.60.66.168/portal/index.php?site=default"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Patient Portal
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-blue-300/30">
          <div className="flex flex-col space-y-3 pt-4">
            <Link href="/new-page" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              New Page
            </Link>
            <Link href="/" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              Home
            </Link>
            <Link href="/offer" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              Offer
            </Link>
            <Link href="/book-appointment" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              Book Consultation
            </Link>
            <Link href="/about-us" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              About us
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              Contact
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-100 transition-colors py-2 px-4">
              Blog
            </Link>
            <Link
              href="https://13.60.66.168/portal/index.php?site=default"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors mx-4 text-center"
            >
              Patient Portal
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}