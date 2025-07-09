
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function GeneralPractitionerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     <section
  className="relative h-[80vh] bg-cover bg-center"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/image5.jpeg')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
        GENERAL PRACTITIONER.
      </h1>
      <div className="w-16 h-1 bg-white mx-auto"></div>
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
                src="/images/image6.jpeg"
                alt="Health assessment"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">GENERAL PRACTITIONER</h3>
                <p className="text-gray-700">
                 Comprehensive health assessments, diagnosis, treatment and management of various medical conditions. We also provide regular check-ups, health screenings, vaccinations and lifestyle counseling to prevent illness and promote overall well-being.
                </p>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image7.jpeg"
                alt="Chronic disease management"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">TELEMEDICINE CONSULTATIONS</h3>
                <p className="text-gray-700">
                  Virtual appointments with healthcare providers for convenient access to medical advice, prescription refills and follow-up care from the comfort of home or office.
                </p>
              </div>
            </div>

            {/* Preventive Care */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image8.jpg"
                alt="Preventive care"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">REFERRAL COORDINATION</h3>
                <p className="text-gray-700">
                  Collaboration with specialists, hospitals and other healthcare providers to facilitate timely referrals and continuity of care for complex medical conditions or specialized treatment needs.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image9.jpg"
                alt="Telemedicine consultation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">OCCUPATIONAL HEALTH SERVICES</h3>
                <p className="text-gray-700">
                  Workplace health assessment, pre-employment screenings, drug testing and injury management services to promote employee health and safety in the workplace.
                </p>
              </div>
            </div>

            {/* Occupational Health */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image10.jpeg"
                alt="Occupational health"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">ONLINE PRESCRIPTION REFILLS</h3>
                <p className="text-gray-700">
                 Convenient online platform for patients to request prescription refills, review medication instructions and receive electronic prescriptions from healthcare providers, streamling the medication management process and ensuring timely access to necessary medications.
                </p>
              </div>
            </div>

            {/* Emergency Care */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image11.jpg"
                alt="Emergency care"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">SECURE ACCESS TO MEDICAL HISTORY</h3>
                <p className="text-gray-700">
                  With Molife Medical Services, you can have secure access to your comprehensive medical history stored in compliance with data protection regulations. This feature allows you to review your medical records at any time, promoting transparency, empowerment and informed decision-making regarding your healthcare.
                </p>
              </div>
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
