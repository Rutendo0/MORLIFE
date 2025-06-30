
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function PsychologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative">
            <Image
              src="https://www.shutterstock.com/image-photo/doctor-patient-600nw-524000074.jpg"
              alt="Psychology consultation session"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white text-center">
                PSYCHOLOGICAL SERVICES
              </h1>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional mental health support with compassionate care and evidence-based treatments
          </p>
        </div>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl text-blue-600 text-center mb-12">OUR SERVICES</h2>
          
          {/* First Row of Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Individual Counseling */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://www.digitalpharmacist.com/wp-content/uploads/2020/09/dreamstime_l_135110090.jpg"
                alt="Individual counseling session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">INDIVIDUAL COUNSELING</h3>
                <p className="text-gray-700">
                  Providing one-on-one sessions with a trained counselor or therapist to address personal issues, emotions, and mental health concerns.
                </p>
              </div>
            </div>

            {/* Group Therapy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://www.shelterfirstresponder.com/wp-content/uploads/2020/03/coronavirus-field-hospital.jpg"
                alt="Group therapy session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">GROUP THERAPY</h3>
                <p className="text-gray-700">
                  Facilitated group sessions where individuals with similar challenges can share experiences and support each other under professional guidance.
                </p>
              </div>
            </div>

            {/* Couples Counseling */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image3.png"
                alt="Couples counseling session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">COUPLES COUNSELING</h3>
                <p className="text-gray-700">
                  Specialized therapy for couples to improve communication, resolve conflicts, and strengthen their relationship.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Therapy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image2.png"
                alt="Family therapy session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">FAMILY THERAPY</h3>
                <p className="text-gray-700">
                  Providing counseling sessions for families to improve communication, resolve conflicts, and strengthen relationships.
                </p>
              </div>
            </div>

            {/* Psychiatric Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image1.png"
                alt="Psychiatric consultation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">PSYCHIATRIC SERVICES</h3>
                <p className="text-gray-700">
                  Medical evaluation, diagnosis, and treatment of mental health disorders, including medication management when necessary.
                </p>
              </div>
            </div>

            {/* Crisis Intervention */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                alt="Crisis intervention support"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">CRISIS INTERVENTION</h3>
                <p className="text-gray-700">
                  Immediate support and intervention services for individuals experiencing mental health crises or emotional emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Psychology Services */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-blue-600 text-center mb-8">WHY CHOOSE MOLIFE PSYCHOLOGY SERVICES?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">LICENSED PROFESSIONALS</h3>
              <p className="text-gray-600 text-sm">
                All our psychologists are licensed and experienced in providing quality mental health care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">FLEXIBLE OPTIONS</h3>
              <p className="text-gray-600 text-sm">
                Choose from in-person, online, or phone consultations based on your comfort and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">CONFIDENTIAL & SECURE</h3>
              <p className="text-gray-600 text-sm">
                All sessions are completely confidential and conducted in a secure environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">PERSONALIZED CARE</h3>
              <p className="text-gray-600 text-sm">
                Treatment plans tailored to your specific needs and mental health goals.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl mb-4">READY TO START YOUR HEALING JOURNEY?</h2>
          <p className="text-lg mb-6">
            Take the first step towards better mental health with our professional psychology services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Book Psychology Consultation
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
