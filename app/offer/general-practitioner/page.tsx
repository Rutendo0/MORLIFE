
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function GeneralPractitionerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative">
            <Image
              src="/images/doctor.JPG"
              alt="General Practitioner consultation"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white text-center">
                GENERAL PRACTITIONER
              </h1>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical care with qualified general practitioners providing expert diagnosis and treatment
          </p>
        </div>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl text-blue-600 text-center mb-12">OUR SERVICES</h2>
          
          {/* First Row of Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Comprehensive Health Assessments */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/doctor.JPG"
                alt="Health assessment"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">COMPREHENSIVE HEALTH ASSESSMENTS</h3>
                <p className="text-gray-700">
                  Complete health evaluations including physical examinations, medical history review, and diagnostic testing to assess overall health status.
                </p>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/pills.png"
                alt="Chronic disease management"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">CHRONIC DISEASE MANAGEMENT</h3>
                <p className="text-gray-700">
                  Ongoing care and management of chronic conditions such as diabetes, hypertension, and heart disease with personalized treatment plans.
                </p>
              </div>
            </div>

            {/* Preventive Care */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image1.png"
                alt="Preventive care"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">PREVENTIVE CARE</h3>
                <p className="text-gray-700">
                  Health screenings, vaccinations, and lifestyle counseling to prevent illness and maintain optimal health.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Telemedicine Consultations */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image2.png"
                alt="Telemedicine consultation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">TELEMEDICINE CONSULTATIONS</h3>
                <p className="text-gray-700">
                  Virtual appointments for convenient access to medical advice, follow-up care, and prescription management.
                </p>
              </div>
            </div>

            {/* Occupational Health */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image3.png"
                alt="Occupational health"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">OCCUPATIONAL HEALTH</h3>
                <p className="text-gray-700">
                  Workplace health assessments, pre-employment screenings, and injury management for businesses and employees.
                </p>
              </div>
            </div>

            {/* Emergency Care */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/doctor.JPG"
                alt="Emergency care"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">EMERGENCY CARE</h3>
                <p className="text-gray-700">
                  Immediate medical attention for urgent health conditions and emergency situations with qualified medical professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our GP Services */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-8">WHY CHOOSE MOLIFE GENERAL PRACTITIONER SERVICES?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">QUALIFIED DOCTORS</h3>
              <p className="text-gray-600 text-sm">
                Licensed general practitioners with extensive experience in providing comprehensive medical care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">COMPREHENSIVE CARE</h3>
              <p className="text-gray-600 text-sm">
                Full range of medical services from preventive care to chronic disease management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">FLEXIBLE SCHEDULING</h3>
              <p className="text-gray-600 text-sm">
                Convenient appointment times including virtual consultations to fit your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">INTEGRATED SERVICES</h3>
              <p className="text-gray-600 text-sm">
                Seamless integration with prescription services, lab tests, and specialist referrals.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl mb-4">READY FOR YOUR CONSULTATION?</h2>
          <p className="text-lg mb-6">
            Schedule your appointment with our qualified general practitioners today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Book GP Consultation
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
