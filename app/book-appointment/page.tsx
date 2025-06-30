
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Phone } from "lucide-react"

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
            BOOK YOUR APPOINTMENT
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule your consultation with our qualified healthcare professionals
          </p>
          <Link
            href="https://13.60.66.168/portal/index.php?site=default"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Booking Steps */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-12">
            HOW TO BOOK YOUR CONSULTATION
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/image2.png"
                alt="How to book consultation"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Access Booking System</h3>
                  <p className="text-gray-600">
                    Click the "Book Now" button to access our online booking portal where you can schedule your appointment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Choose Service & Time</h3>
                  <p className="text-gray-600">
                    Select your desired healthcare service and preferred appointment date and time from available slots.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Provide Details</h3>
                  <p className="text-gray-600">
                    Fill in your personal information and specify if you prefer video call, phone call, or in-person consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
                  <p className="text-gray-600">
                    Complete your booking with our secure payment system and receive instant confirmation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Confirmation & Reminder</h3>
                  <p className="text-gray-600">
                    Receive confirmation email with appointment details and reminders before your scheduled consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Options */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-8">
            AVAILABLE SERVICES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Telemedicine</h3>
              <p className="text-gray-600">
                Video consultations with qualified healthcare professionals from your home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Visits</h3>
              <p className="text-gray-600">
                In-person medical consultations and care delivered to your location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mental Health</h3>
              <p className="text-gray-600">
                Professional psychological and psychiatric services for mental wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">
            NEED HELP BOOKING?
          </h2>
          <p className="text-gray-700 mb-6">
            Our support team is here to assist you with your appointment booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="https://13.60.66.168/portal/index.php?site=default"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Access Patient Portal
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
