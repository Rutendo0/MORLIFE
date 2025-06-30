
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
            WHAT WE OFFER
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs
          </p>
        </div>

        {/* Healthcare Services */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-12">HEALTHCARE SERVICES</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">TELEMEDICINE</h3>
              <p className="text-gray-700">
                Connect with healthcare professionals remotely through secure video consultations, 
                chat services, and digital health monitoring.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">HOME VISITS</h3>
              <p className="text-gray-700">
                Professional healthcare services delivered to your home by qualified medical professionals 
                for convenient, personalized care.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">E-PRESCRIPTIONS</h3>
              <p className="text-gray-700">
                Digital prescription services with easy refills, medication reminders, 
                and direct delivery to your preferred location.
              </p>
            </div>
          </div>
        </section>

        {/* Mental Health Services */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-8">MENTAL HEALTH SERVICES</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">PSYCHOLOGICAL SERVICES</h3>
              <Image
                src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                alt="Mental health support"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                Professional counseling and therapy services for anxiety, depression, trauma, 
                relationship issues, and other mental health challenges.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Individual therapy sessions</li>
                <li>Group counseling</li>
                <li>Family therapy</li>
                <li>Stress management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">PSYCHIATRIC SERVICES</h3>
              <Image
                src="https://blackdoctor.org/wp-content/uploads/2022/12/doctor-patient-612x350.jpg"
                alt="Psychiatric care"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                Medical treatment for mental health disorders with qualified psychiatrists 
                providing diagnosis, medication management, and comprehensive care plans.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Psychiatric evaluations</li>
                <li>Medication management</li>
                <li>Crisis intervention</li>
                <li>Treatment planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Medical Equipment Supply */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">MEDICAL EQUIPMENT SUPPLY</h2>
              <p className="text-gray-700 mb-6">
                We provide high-quality medical equipment and supplies to healthcare facilities, 
                clinics, and individual healthcare needs. Our comprehensive catalog ensures 
                healthcare providers have access to reliable, professional-grade equipment.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Equipment Categories:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Diagnostic equipment</li>
                    <li>Laboratory instruments</li>
                    <li>Patient monitoring devices</li>
                    <li>Surgical instruments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Medical Supplies:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Personal protective equipment</li>
                    <li>Medical consumables</li>
                    <li>Hospital furniture</li>
                    <li>Emergency medical supplies</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/image3.png"
                alt="Medical equipment supply"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
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
              Book Appointment
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
