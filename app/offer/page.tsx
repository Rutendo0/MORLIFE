
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
            OUR SERVICES
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs
          </p>
        </div>

        {/* Main Services Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* General Practitioner */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/images/doctor.JPG"
                  alt="General Practitioner consultation"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">GENERAL PRACTITIONER</h3>
              <p className="text-gray-700">
                Comprehensive health assessments, diagnosis, treatment, and management of various medical 
                conditions. We also provide regular check-ups, health screenings, vaccinations, and lifestyle 
                counseling to prevent illness and promote overall well-being.
              </p>
            </div>

            {/* Telemedicine Consultations */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/images/image2.png"
                  alt="Telemedicine consultation"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">TELEMEDICINE CONSULTATIONS</h3>
              <p className="text-gray-700">
                Virtual appointments with healthcare providers for convenient access to medical advice, 
                prescription refills, and follow-up care from the comfort of home or office.
              </p>
            </div>

            {/* Referral Coordination */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/images/image3.png"
                  alt="Medical referral coordination"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">REFERRAL COORDINATION</h3>
              <p className="text-gray-700">
                Collaboration with specialists, hospitals, and other healthcare providers to facilitate 
                timely referrals and continuity of care for complex medical conditions or specialized 
                treatment needs.
              </p>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Occupational Health Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="https://blackdoctor.org/wp-content/uploads/2022/12/doctor-patient-612x350.jpg"
                  alt="Occupational health services"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">OCCUPATIONAL HEALTH SERVICES</h3>
              <p className="text-gray-700">
                Workplace health assessments, pre-employment screenings, drug testing, and injury 
                management services to promote employee health and safety in the workplace.
              </p>
            </div>

            {/* Online Prescription Refills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                  alt="Online prescription refills"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">ONLINE PRESCRIPTION REFILLS</h3>
              <p className="text-gray-700">
                Convenient online platform for patients to request prescription refills, review 
                medication instructions, and receive electronic prescriptions from healthcare providers, 
                streamlining the medication management process and ensuring timely access to necessary 
                medications.
              </p>
            </div>

            {/* Secure Access to Medical History */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/images/image1.png"
                  alt="Secure medical history access"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">SECURE ACCESS TO MEDICAL HISTORY</h3>
              <p className="text-gray-700">
                With Molife Medical Services, you can have secure access to your comprehensive medical 
                history stored in compliance with data protection regulations. This feature allows you 
                to review your medical records at any time, promoting transparency, empowerment, and 
                informed decision-making regarding your healthcare.
              </p>
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
