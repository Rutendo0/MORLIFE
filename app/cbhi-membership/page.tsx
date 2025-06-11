import Header from "@/components/header"
import Link from "next/link"
import { Download, Smartphone, Shield, Users, Heart } from "lucide-react"

export default function CBHIMembershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <Header />

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">CBHI MEMBERSHIP</h1>
            <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Join our Community-Based Health Insurance program and gain access to affordable, quality healthcare
              services for you and your family. Secure your health, secure your future.
            </p>
            <div className="flex items-center justify-center gap-2 text-white">
              <Smartphone className="w-6 h-6" />
              <span className="text-lg">Register easily through our mobile app</span>
            </div>
          </div>

          {/* App Download Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Download the MOLIFE App</h2>
                </div>

                <p className="text-gray-600 text-lg mb-8">
                  Register for CBHI membership quickly and easily through our mobile application. Complete your
                  registration, upload documents, and manage your membership all from your smartphone.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>Secure registration process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Family membership options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span>Instant access to healthcare services</span>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-8 h-8">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-8 h-8">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center">
                    <Smartphone className="w-32 h-32 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
              <p className="text-blue-100">
                Access to a wide range of healthcare services including consultations, medications, and emergency care.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Protection</h3>
              <p className="text-blue-100">
                Extend coverage to your entire family with our affordable family membership plans.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-blue-100">
                Be part of a community that cares about your health and wellbeing with shared resources and support.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Get Started</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Download the App</h3>
                <p className="text-gray-600">
                  Download the MOLIFE app from the App Store or Google Play Store on your smartphone.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Complete Registration</h3>
                <p className="text-gray-600">
                  Fill out the registration form with your personal and family information directly in the app.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Using Benefits</h3>
                <p className="text-gray-600">
                  Once approved, immediately start accessing healthcare services covered by your CBHI membership.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Secure Your Family's Health?</h2>
            <p className="text-blue-200 text-lg mb-8">
              Download the MOLIFE app today and join thousands of families who have secured their healthcare future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download for iOS
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download for Android
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

