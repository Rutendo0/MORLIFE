import Link from 'next/link'
import { Home, ArrowLeft, Search, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-sky-100">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-sky-200 mb-4">404</div>
            <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-sky-600" />
            </div>
          </div>
          
          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We couldn't find the healthcare page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link
              href="/book-appointment"
              className="flex items-center justify-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 border-2 border-sky-600"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link 
                href="/offer/general-practitioner" 
                className="text-sky-600 hover:text-sky-800 hover:underline transition-colors"
              >
                General Practice
              </Link>
              <Link 
                href="/offer/psychology" 
                className="text-sky-600 hover:text-sky-800 hover:underline transition-colors"
              >
                Psychology
              </Link>
              <Link 
                href="/about-us/our-team" 
                className="text-sky-600 hover:text-sky-800 hover:underline transition-colors"
              >
                Our Team
              </Link>
              <Link 
                href="/contact" 
                className="text-sky-600 hover:text-sky-800 hover:underline transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-200">
            <p className="text-sm text-sky-800">
              <strong>Need immediate medical assistance?</strong><br />
              Call us at <a href="tel:+263777936637" className="font-semibold hover:underline">+263 777 936 637</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}