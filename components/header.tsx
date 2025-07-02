"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react"
import { memo } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="w-full bg-gradient-to-r from-blue-200 to-blue-400 px-4 sm:px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          MOLIFE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
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
          className="lg:hidden text-white p-2 hover:bg-blue-500/20 rounded-md transition-colors touch-manipulation"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-blue-300/30">
          <div className="flex flex-col space-y-3 pt-4 relative">
            {/* Main Menu */}
            <div className={`${activeSubmenu ? 'hidden' : 'block'}`}>
              <Link 
                href="/" 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Offer with Dropdown */}
              <button 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation w-full text-left flex items-center justify-between"
                onClick={() => setActiveSubmenu('offer')}
              >
                <span>Offer</span>
                <ChevronDown size={16} />
              </button>

              <Link 
                href="/book-appointment" 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>

              {/* About us with Dropdown */}
              <button 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation w-full text-left flex items-center justify-between"
                onClick={() => setActiveSubmenu('about')}
              >
                <span>About us</span>
                <ChevronDown size={16} />
              </button>

              <Link 
                href="/contact" 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-blue-100 transition-colors py-3 px-4 rounded-md hover:bg-blue-500/20 touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="https://13.60.66.168/portal/index.php?site=default"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors mx-4 text-center touch-manipulation block"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Portal
              </Link>
            </div>

            {/* Offer Submenu */}
            {activeSubmenu === 'offer' && (
              <div className="absolute inset-0 bg-blue-600 rounded-lg p-4 animate-in slide-in-from-right duration-300 shadow-xl border border-blue-500/20 min-h-[400px]">
                <button 
                  className="text-white hover:text-blue-100 transition-colors py-4 px-3 rounded-lg hover:bg-blue-500/20 touch-manipulation flex items-center mb-6 w-full text-left"
                  onClick={() => setActiveSubmenu(null)}
                >
                  <ChevronLeft size={22} className="mr-3" />
                  <span className="text-xl font-semibold">Our Services</span>
                </button>

                <div className="space-y-5">
                  <div className="bg-blue-700 rounded-xl p-5 border border-blue-500/30 hover:bg-blue-600/80 transition-all duration-200">
                    <Link 
                      href="/offer/general-practitioner" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-xl mb-3 hover:text-blue-100 transition-colors">
                        General Practitioner
                      </h3>
                      <p className="text-blue-100 text-base leading-relaxed">
                        Comprehensive medical care, health screenings, vaccinations, and telemedicine consultations
                      </p>
                    </Link>
                  </div>

                  <div className="bg-blue-700 rounded-xl p-5 border border-blue-500/30 hover:bg-blue-600/80 transition-all duration-200">
                    <Link 
                      href="/offer/psychology" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-xl mb-3 hover:text-blue-100 transition-colors">
                        Psychological Services
                      </h3>
                      <p className="text-blue-100 text-base leading-relaxed">
                        Mental health support, therapy sessions, family counseling, and psychiatric services
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* About us Submenu */}
            {activeSubmenu === 'about' && (
              <div className="absolute inset-0 bg-blue-600 rounded-lg p-4 animate-in slide-in-from-right duration-300 shadow-xl border border-blue-500/20 min-h-[500px]">
                <button 
                  className="text-white hover:text-blue-100 transition-colors py-4 px-3 rounded-lg hover:bg-blue-500/20 touch-manipulation flex items-center mb-6 w-full text-left"
                  onClick={() => setActiveSubmenu(null)}
                >
                  <ChevronLeft size={22} className="mr-3" />
                  <span className="text-xl font-semibold">About MOLIFE</span>
                </button>

                <div className="space-y-4">
                  <div className="bg-blue-700 rounded-xl p-5 border border-blue-500/30 hover:bg-blue-600/80 transition-all duration-200">
                    <Link 
                      href="/about-us/our-team" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-blue-100 transition-colors">
                        Our Team
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Meet our qualified healthcare professionals and dedicated staff members
                      </p>
                    </Link>
                  </div>

                  <div className="bg-blue-700 rounded-xl p-5 border border-blue-500/30 hover:bg-blue-600/80 transition-all duration-200">
                    <Link 
                      href="/about-us/who-we-are" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-blue-100 transition-colors">
                        Who We Are
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Learn about our mission, vision, and commitment to digital healthcare
                      </p>
                    </Link>
                  </div>

                  <div className="bg-blue-700 rounded-xl p-5 border border-blue-500/30 hover:bg-blue-600/80 transition-all duration-200">
                    <Link 
                      href="/about-us/community-projects" 
                      className="block touch-manipulation"
                      onClick={() => { setIsMenuOpen(false); setActiveSubmenu(null); }}
                    >
                      <h3 className="text-white font-bold text-lg mb-3 hover:text-blue-100 transition-colors">
                        Community Projects
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Discover our initiatives to improve healthcare access in local communities
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