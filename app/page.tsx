import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-400 to-blue-200 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <p className="text-white text-sm sm:text-lg mb-6 sm:mb-8 tracking-wide">
              EMPOWERING LIVES, ONE CLICK AT A TIME
            </p>

            <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-light leading-tight px-4">
              <span className="font-bold">MOLIFE</span>
              <span className="text-white">-YOUR TRUSTED DIGITAL</span>
              <br />
              <span className="text-white">HEALTHCARE COMPANION</span>
            </h1>
          </div>

          <div className="flex justify-center px-4">
            <div className=" w-full">
              <Image
                src="/images/image1.png"
                alt="Healthcare professional"
                width={1400}
                height={800}
                className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-400 to-blue-200 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12 sm:mb-16">OUR SERVICES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Telemedicine */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">TELEMEDICINE</h3>
              <p className="mb-6">
                Molife offers convenient and accessible telemedicine consultations, allowing users to connect with
                healthcare professionals remotely for medical advice, diagnosis, and treatment recommendations.
              </p>
            </div>

            {/* E-Prescription Refills */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">E-PRESCRIPTION REFILLS</h3>
              <p className="mb-6">
                Users can easily refill their prescriptions through the Molife app, saving time and effort by avoiding
                unnecessary trips to the pharmacy.
              </p>
            </div>

            {/* Home Visits */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">HOME VISITS</h3>
              <p className="mb-6">
                Molife facilitates home visits by healthcare professionals for patients who require in-person medical
                attention but are unable to visit a healthcare facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl mb-12">MENTAL HEALTH SERVICES</h2>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Image
                src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                alt="Mental health medication"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-2xl mb-8">
                TAKE CARE OF YOUR MENTAL HEALTH, BOOK ONE OF OUR PROFESSIONALS!
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Psychologists */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-blue-200 mb-4">PSYCHOLOGISTS</h3>
                  <p className="mb-4">
                    Molife Psychological Services offers compassionate and professional mental health support to
                    individuals facing challenges such as anxiety, depression, trauma, and relationship issues. Our team
                    of licensed psychologists provides personalized therapy and counseling sessions tailored to each
                    client's unique needs, helping them navigate life's complexities and achieve emotional well-being.
                  </p>
                </div>

                {/* Psychiatrists */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-blue-200 mb-4">PSYCHIATRISTS</h3>
                  <p className="mb-4">
                    Our team of dedicated psychiatrists specializes in providing expert care and treatment for mental
                    health conditions. With extensive medical training and expertise, our psychiatrists are uniquely
                    equipped to diagnose and manage complex mental health disorders, including medication management
                    when necessary. They focus on the biological aspects of mental illness, offering evidence-based
                    interventions and personalized treatment plans to address the root causes of psychological distress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guide Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/image2.png"
                alt="How to book a consultation"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 mb-8">
                HOW TO BOOK YOUR CONSULTATION
              </h2>
              <p className="text-xl text-blue-600 mb-8">FOLLOW THESE EASY STEPS!</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <p>
                    Visit our website and click on "Book Appointment" in the navigation menu.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <p>
                    Choose your desired service and preferred date/time from our available slots.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <p>
                    Fill in your personal details and any specific requirements for your consultation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    4
                  </div>
                  <p>
                    Complete your booking with secure payment through our integrated payment system.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    5
                  </div>
                  <p>Receive confirmation email with all appointment details and meeting instructions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-16 bg-blue-300 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/image3.png"
                alt="Medical equipment shipping containers"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8">
                MEDICAL EQUIPMENT SUPPLIER
              </h2>
              <p className="text-lg">
                MoLife is not just about innovative healthcare technology; we also offer a comprehensive range of
                high-quality medical supplies. From essential consumables to specialized equipment, we ensure that
                healthcare professionals have access to the tools they need to deliver exceptional patient care. Our
                diverse catalog includes everything from PPE (Personal Protective Equipment) to diagnostic tools,
                ensuring that healthcare facilities are well-equipped to meet the needs of their patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-600 text-center mb-12">WHY CHOOSE MOLIFE?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.digitalpharmacist.com/wp-content/uploads/2020/09/dreamstime_l_135110090.jpg"
                  alt="Person using smartphone"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-blue-600 text-center mb-4">CONVENIENCE</h3>
              <p className="text-sm text-center">
                Access healthcare services from the comfort of your home with our user-friendly digital platform.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.shelterfirstresponder.com/wp-content/uploads/2020/03/coronavirus-field-hospital.jpg"
                  alt="Healthcare professional"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-blue-600 text-center mb-4">QUALITY CARE</h3>
              <p className="text-sm text-center">
                Our experienced healthcare professionals provide personalized and compassionate care to every patient.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.hayatmed.com/wp-content/uploads/2023/06/Cost-of-butt-implant-surgery.jpg"
                  alt="Doctor with patient"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-blue-600 text-center mb-4">AFFORDABLE PRICING</h3>
              <p className="text-sm text-center">
                Quality healthcare at competitive prices that won't break the bank.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.shutterstock.com/image-photo/doctor-patient-600nw-524000074.jpg"
                  alt="Doctor with patient"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-blue-600 text-center mb-4">EXCELLENCE</h3>
              <p className="text-sm text-center">
                Committed to delivering the highest standards of healthcare through innovation and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-300 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8">READY TO START YOUR HEALTHCARE JOURNEY?</h2>
          <Link
            href="/book-appointment"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}