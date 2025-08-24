
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function PsychologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
       <section
  className="relative h-[80vh] bg-cover bg-center"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/image53.jpg')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
        PSYCHOLOGISTS.
      </h1>
      <div className="w-16 h-1 bg-white mx-auto"></div>
    </div>
  </div>
</section>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Mental Health Message Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 sm:p-12 border border-blue-100 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-relaxed">
                Your Mental Health is Just as Important as Your Physical Health
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                Never let social taboos stop you from receiving the much-needed support you deserve. 
                At <span className="font-semibold text-blue-600">MOLIFE</span>, we're here to help you heal, not to judge.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
          </div>
          
          {/* First Row of Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Individual Counseling */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image12.jpg"
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
                 src="/images/image13.jpeg"
                alt="Group therapy session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">ADDICTION COUNSELING</h3>
                <p className="text-gray-700">
                 Providing support and therapy for individuals struggling with substance abuse or addiction to achive recovery and maintain sobriety.
                </p>
              </div>
            </div>

            {/* Couples Counseling */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image14.jpg"
                alt="Couples counseling session"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">COUPLES COUNSELING</h3>
                <p className="text-gray-700">
                 Offering therapy sessions for couples to address relationship, improve communication and enhance intimacy.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Therapy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image15.jpg"
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
                src="/images/image17.jpeg"
                alt="Psychiatric consultation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">GROUP THERAPY</h3>
                <p className="text-gray-700">
                  Offering therapy sessions in a group setting where individuals can share experiences, receive support and learn coping skills from one another.
                </p>
              </div>
            </div>

            {/* Crisis Intervention */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/image16.jpg"
                alt="Crisis intervention support"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">ANGER MANAGEMENT</h3>
                <p className="text-gray-700">
                 Providing counseling and support to help individuals understand and manage their anger in constructive ways.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8 sm:p-12 border border-sky-200 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                Ready to Start Your Healing Journey?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Take the first step towards better mental health with our professional psychology services. 
                Your path to wellness begins with a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-appointment"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Book Psychology Consultation
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
