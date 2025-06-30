
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
              OUR OFFERS
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              EMPOWERING LIVES, ONE CLICK AT A TIME
            </p>
            <p className="text-xl text-blue-600 font-medium">
              MOLIFE - YOUR TRUSTED DIGITAL HEALTH PARTNER
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Main Service Categories */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* General Practitioner */}
            <div className="text-center">
              <div className="bg-blue-600 text-white p-8 rounded-lg mb-6">
                <h2 className="text-2xl sm:text-3xl font-light mb-4">General practitioner</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Image
                    src="/images/doctor.JPG"
                    alt="General Practitioner consultation"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">COMPREHENSIVE MEDICAL CARE</h3>
                  <p className="text-gray-700 mb-4">
                    Our qualified general practitioners provide comprehensive health assessments, diagnosis, 
                    treatment, and management of various medical conditions. We offer regular check-ups, 
                    health screenings, vaccinations, and lifestyle counseling.
                  </p>
                  <Link
                    href="/offer/general-practitioner"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Additional GP Services */}
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">TELEMEDICINE CONSULTATIONS</h4>
                    <p className="text-gray-700 text-sm">
                      Virtual appointments for convenient access to medical advice and follow-up care.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">E-PRESCRIPTION REFILLS</h4>
                    <p className="text-gray-700 text-sm">
                      Convenient online platform for prescription refills and medication management.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">OCCUPATIONAL HEALTH</h4>
                    <p className="text-gray-700 text-sm">
                      Workplace health assessments, pre-employment screenings, and injury management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Psychological Services */}
            <div className="text-center">
              <div className="bg-blue-600 text-white p-8 rounded-lg mb-6">
                <h2 className="text-2xl sm:text-3xl font-light mb-4">Psychological services</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <Image
                    src="https://www.shutterstock.com/image-photo/doctor-patient-600nw-524000074.jpg"
                    alt="Psychology consultation session"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">MENTAL HEALTH SUPPORT</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mental health support with licensed psychologists and psychiatrists. 
                    We provide personalized therapy and counseling sessions for anxiety, depression, 
                    trauma, and relationship issues.
                  </p>
                  <Link
                    href="/offer/psychology"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Additional Psychology Services */}
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">INDIVIDUAL COUNSELING</h4>
                    <p className="text-gray-700 text-sm">
                      One-on-one therapy sessions with trained counselors for personal growth.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">FAMILY THERAPY</h4>
                    <p className="text-gray-700 text-sm">
                      Counseling sessions to improve family communication and relationships.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">PSYCHIATRIC SERVICES</h4>
                    <p className="text-gray-700 text-sm">
                      Medical treatment and medication management for mental health disorders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Molife Section */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-8">WHY CHOOSE MOLIFE?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">CONVENIENCE</h3>
              <p className="text-gray-600 text-sm">
                Access healthcare services from anywhere at any time with our user-friendly platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">QUALIFIED PROFESSIONALS</h3>
              <p className="text-gray-600 text-sm">
                Licensed healthcare professionals committed to providing quality care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">AFFORDABLE PRICING</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing for high-quality healthcare services that fit your budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">SECURE & PRIVATE</h3>
              <p className="text-gray-600 text-sm">
                Your health information is protected with the highest security standards.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl mb-4">READY TO GET STARTED?</h2>
          <p className="text-lg mb-6">
            Take the first step towards better health with Molife Medical Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
