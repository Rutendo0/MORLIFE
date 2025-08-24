'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">We use cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences in our{' '}
              <a href="/privacy-policy" className="text-sky-600 hover:text-sky-800 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={declineCookies}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}