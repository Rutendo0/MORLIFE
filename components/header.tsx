"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react"
import { memo } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400/40 to-sky-500/40 backdrop-blur-md border-b border-white/30 px-4 sm:px-6 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          MOLIFE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-white hover:text-sky-100 focus:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-500 rounded-md px-2 py-1 transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button 
              className="text-white hover:text-sky-100 transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Offer
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-sky-600 text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link 
                href="/offer/general-practitioner" 
                className="block px-6 py-4 hover:bg-sky-700 transition-colors rounded-t-lg"
              >
                General practitioner
              </Link>
              <Link 
                href="/offer/psychology" 
                className="block px-6 py-4 hover:bg-sky-700 transition-colors rounded-b-lg"
              >
                Psychological services
              </Link>
            </div>
          </div>
          <Link href="/book-appointment" className="text-white hover:text-sky-100 focus:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-500 rounded-md px-2 py-1 transition-colors">
            Book Consultation
          </Link>
          <div className="relative group">
            <button 
              className="text-white hover:text-sky-100 transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About us
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-sky-600 text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link 
                href="/about-us/our-team" 
                className="block px-6 py-4 hover:bg-sky-700 transition-colors rounded-t-lg"
              >
                Our Team
              </Link>
              <Link 
                href="/about-us/who-we-are" 
                className="block px-6 py-4 hover:bg-sky-700 transition-colors rounded-b-lg"
              >
                Who we are
              </Link>
            </div>
          </div>
          <Link href="/contact" className="text-white hover:text-sky-100 transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-white hover:text-sky-100 transition-colors">
            Blog
          </Link>
          <Link
            href="https://molifecom.setmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md"
          >
            Patient Portal
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-sky-500/20 rounded-md transition-colors touch-manipulation"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          className="lg:hidden mt-4 pb-4 border-t border-sky-300/30"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-3 pt-4 relative">
            {/* Main Menu */}
            <div className={`${activeSubmenu ? 'hidden' : 'block'}`}>
              <Link 
                href="/" 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Offer with Dropdown */}
              <button 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation w-full text-left flex items-center justify-between"
                onClick={() => setActiveSubmenu('offer')}
              >
                <span>Offer</span>
                <ChevronDown size={16} />
              </button>

              <Link 
                href="/book-appointment" 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>

              {/* About us with Dropdown */}
              <button 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation w-full text-left flex items-center justify-between"
                onClick={() => setActiveSubmenu('about')}
              >
                <span>About us</span>
                <ChevronDown size={16} />
              </button>

              <Link 
                href="/contact" 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-sky-100 transition-colors py-3 px-4 rounded-md hover:bg-sky-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="https://molifecom.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mx-4 text-center touch-manipulation block shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Portal
              </Link>
            </div>

            {/* Offer Submenu */}
            {activeSubmenu === 'offer' && (
              <div className="absolute inset-0 bg-sky-600 rounded-lg p-4 animate-in slide-in-from-right duration-300 shadow-xl border border-sky-500/20 min-h-[400px]">
                <button 
                  className="text-white hover:text-sky-100 transition-colors py-4 px-3 rounded-lg hover:bg-sky-500/20 touch-manipulation flex items-center mb-6 w-full text-left"
                  onClick={() => setActiveSubmenu(null)}
                >
                  <ChevronLeft size={22} className="mr-3" />
                  <span className="text-xl font-semibold">Our Services</span>
                </button>

                <div className="space-y-5">
                  <div className="bg-sky-700 rounded-xl p-5 border border-sky-500/30 hover:bg-sky-600/80 transition-all duration-200">
                    <Link 
                      href="/offer/general-practitioner" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-xl mb-3 hover:text-sky-100 transition-colors">
                        General Practitioner
                      </h3>
                      <p className="text-sky-100 text-base leading-relaxed">
                        Comprehensive medical care, health screenings, vaccinations, and telemedicine consultations
                      </p>
                    </Link>
                  </div>

                  <div className="bg-sky-700 rounded-xl p-5 border border-sky-500/30 hover:bg-sky-600/80 transition-all duration-200">
                    <Link 
                      href="/offer/psychology" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-xl mb-3 hover:text-sky-100 transition-colors">
                        Psychological Services
                      </h3>
                      <p className="text-sky-100 text-base leading-relaxed">
                        Mental health support, therapy sessions, family counseling, and psychiatric services
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* About us Submenu */}
            {activeSubmenu === 'about' && (
              <div className="absolute inset-0 bg-sky-600 rounded-lg p-4 animate-in slide-in-from-right duration-300 shadow-xl border border-sky-500/20 min-h-[500px]">
                <button 
                  className="text-white hover:text-sky-100 transition-colors py-4 px-3 rounded-lg hover:bg-sky-500/20 touch-manipulation flex items-center mb-6 w-full text-left"
                  onClick={() => setActiveSubmenu(null)}
                >
                  <ChevronLeft size={22} className="mr-3" />
                  <span className="text-xl font-semibold">About MOLIFE</span>
                </button>

                <div className="space-y-4">
                  <div className="bg-sky-700 rounded-xl p-5 border border-sky-500/30 hover:bg-sky-600/80 transition-all duration-200">
                    <Link 
                      href="/about-us/our-team" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-sky-100 transition-colors">
                        Our Team
                      </h3>
                      <p className="text-sky-100 text-sm leading-relaxed">
                        Meet our qualified healthcare professionals and dedicated staff members
                      </p>
                    </Link>
                  </div>

                  <div className="bg-sky-700 rounded-xl p-5 border border-sky-500/30 hover:bg-sky-600/80 transition-all duration-200">
                    <Link 
                      href="/about-us/who-we-are" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-sky-100 transition-colors">
                        Who We Are
                      </h3>
                      <p className="text-sky-100 text-sm leading-relaxed">
                        Learn about our mission, vision, and commitment to digital healthcare
                      </p>
                    </Link>
                  </div>


                </div>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

export default memo(Header)
