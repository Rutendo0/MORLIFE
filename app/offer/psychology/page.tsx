
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
        <div className="text-center mb-12">
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            YOUR MENTAL HEALTH IS JUST AS IMPORTANT AS YOUR PHYSICAL HEALTH, NEVER LET SOCIAL TABOOS STOP YOU FROM RECEIVING THE MUCH NEEDED SUPPORT YOU NEED.MOLIFE IS HERE TO HELP YOU, NOT TO JUDGE
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
