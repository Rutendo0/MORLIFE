import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <p className="text-blue-600 text-sm sm:text-lg mb-6 sm:mb-8 tracking-wide">
              EMPOWERING LIVES, ONE CLICK AT A TIME
            </p>

            <h1 className="text-blue-600 text-1xl sm:text-4xl lg:text-6xl font-light leading-tight px-4">
              <span className="font-bold">MOLIFE</span>
              <span className="text-blue-400">-YOUR TRUSTED DIGITAL</span>
              <br />
              <span className="text-blue-400">HEALTHCARE COMPANION</span>
            </h1>
          </div>

          <div className="flex justify-center px-4">
            <div className="w-full">
              <Image
                src="/images/image1.png"
                alt="Healthcare professional"
                width={1400}
                height={800}
                className="w-full h-[80vh] sm:h-[80vh] lg:h-[80vh] object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - MEDI HEALTH OFFERS */}
      <section className="py-16 bg-blue-400 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12 sm:mb-16">MEDI HEALTH OFFERS</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Telemedicine */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">TELEMEDICINE</h3>
              <p className="mb-6">
                Molife offers convenient and accessible telemedicine consultations, allowing users to connect with
                healthcare professionals remotely for medical advice, diagnosis, and treatment recommendations.
              </p>
              <Link href="/book-appointment" className="text-white underline hover:text-blue-200">
                Learn more
              </Link>
            </div>

            {/* E-Prescription Refills */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">E-PRESCRIPTION REFILLS</h3>
              <p className="mb-6">
                Users can easily refill their prescriptions through the Molife app, saving time and effort by avoiding
                unnecessary trips to the pharmacy.
              </p>
              <Link href="/services" className="text-white underline hover:text-blue-200">
                Learn more
              </Link>
            </div>

            {/* Home Visits */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-light mb-6">HOME VISITS</h3>
              <p className="mb-6">
                Molife facilitates home visits by healthcare professionals for patients who require in-person medical
                attention but are unable to visit a healthcare facility.
              </p>
              <Link href="/services" className="text-white underline hover:text-blue-200">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl text-blue-400 mb-4">MIND HEALTH</h2>
              <Image
                src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                alt="Mental health medication"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 mb-8">
                TAKE CARE OF YOUR MENTAL HEALTH, BOOK ONE OF OUR PROFESSIONALS!
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Psychologists */}
                <div>
                  <h3 className="text-xl sm:text-1xl text-blue-600 mb-4">PSYCHOLOGISTS</h3>
                  <p className="mb-3">
                    Molife Psychological Services offers compassionate and professional mental health support to
                    individuals facing challenges such as anxiety, depression, trauma, and relationship issues. Our team
                    of licensed psychologists provides personalized therapy and counseling sessions tailored to each
                    client's unique needs, helping them navigate life's complexities and achieve emotional well-being.
                  </p>
                  <Link href="/book-appointment" className="text-blue-600 underline hover:text-blue-800">
                    Book a consultation
                  </Link>
                </div>

                {/* Psychiatrists */}
                <div>
                  <h3 className="text-xl sm:text-1xl text-blue-600 mb-4">PSYCHIATRISTS</h3>
                  <p className="mb-3">
                    Our team of dedicated psychiatrists specializes in providing expert care and treatment for mental
                    health conditions. With extensive medical training and expertise, our psychiatrists are uniquely
                    equipped to diagnose and manage complex mental health disorders, including medication management
                    when necessary. They focus on the biological aspects of mental illness, offering evidence-based
                    interventions and personalized treatment plans to address the root causes of psychological distress.
                  </p>
                  <Link href="/book-appointment" className="text-blue-600 underline hover:text-blue-800">
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/image2.png"
                alt="How to book a consultation"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 mb-8">
                WONDERING HOW TO BOOK YOUR CONSULTATION?
              </h2>
              <p className="text-xl text-blue-500 mb-8">FOLLOW THESE EASY STEPS!</p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      Scroll to the top of the screen and choose the "Book Appointment" tab, where you will find a "Book Now" button.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      You'll be directed to our booking page where you can choose your desired service and preferred date/time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      Once you've selected your appointment slot, follow the prompts to provide your details and proceed to the payment step.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                     Secure your appointment instantly by entering your card details through our integrated secure payment system..
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                     After booking, you'll receive a confirmation email with all the details of your appointment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      On the day of your appointment, you can click the meeting link or wait for a call from the doctor for your online consultation or meet with your doctor whether at home or in office for in person visits and our friendly team will take care of the rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/image3.png"
                alt="Medical equipment shipping containers"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-1xl sm:text-1xl lg:text-2xl font-light mb-9">
                WE ARE ALSO A SUPPLIER OF MEDICAL EQUIPMENT
              </h2>
              <p className="text-lg">
                MoLife is not just about innovative healthcare technology; we also offer a comprehensive range of
                high-quality medical supplies. From essential consumables to specialized equipment, we ensure that
                healthcare professionals have access to the tools they need to deliver exceptional patient care. Our
                diverse catalog includes everything from PPE (Personal Protective Equipment) to diagnostic tools,
                ensuring that healthcare facilities are well-equipped to meet the needs of their patients. With MoLife, healthcare
                providers can streamline their procurement process, access competitive pricing, and
                benefit from reliable delivery services. We are committed to supporting healthcare professionals every step of the way,
                providing the supplies they need to deliver optimal care and improve patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Take Charge of Your Health */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-1xl sm:text-3xl text-blue-400 mb-8">
                TAKE CHARGE OF<br></br> YOUR HEALTH
              </h2>
              <Image
                src="/images/image4.PNG"
                alt="Doctor consulting with patient"
                width={900}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl text-blue-600 mb-8">REACH OUT TO US</h3>
              <Link
                href="/book-appointment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-600 text-center mb-12">WHY JOIN US AS A CLIENT?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.digitalpharmacist.com/wp-content/uploads/2020/09/dreamstime_l_135110090.jpg"
                  alt="Person using smartphone"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="text-xl text-blue-600 mb-4">CONVENIENCE AND ACCESSIBILITY</h3>
              <p className="text-sm">
                With our user-friendly online platform, accessing healthcare services has never been easier. You
                can schedule appointments, chat with doctors, and refill prescriptions from the comfort of
                your own home, saving you time and hassle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.shelterfirstresponder.com/wp-content/uploads/2020/03/coronavirus-field-hospital.jpg"
                  alt="Healthcare professional"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="text-xl text-blue-600 mb-4">QUALITY CARE</h3>
              <p className="text-sm">
                At Molife Medical Services, we prioritize quality care above all else. Our team of experienced
                healthcare professionals is dedicated to providing personalized and compassionate
                care to each and every client. You can trust us to deliver the highest standard of care for you and your family.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.hayatmed.com/wp-content/uploads/2023/06/Cost-of-butt-implant-surgery.jpg"
                  alt="Affordable healthcare"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="text-xl text-blue-600 mb-4">AFFORDABLE PRICING</h3>
              <p className="text-sm">
                We understand the importance of affordable healthcare, which is
                why we offer competitive pricing for all our services. With Molife
                Medical Services, you can access high-quality healthcare at prices
                that won't break the bank.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://www.shutterstock.com/image-photo/doctor-patient-600nw-524000074.jpg"
                  alt="Commitment to excellence"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <h3 className="text-xl text-blue-600 mb-4">COMMITMENT TO EXCELLENCE</h3>
              <p className="text-sm">
                We are committed to excellence in everything we do. From our state-
                of-the-art facilities to our cutting-edge technology, we strive to
                deliver the best possible healthcare experience for our
                clients. When you choose Molife Medical Service, you can rest assured that you are in good hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us as Medical Professional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl text-blue-600 text-center mb-12">WHY JOIN US AS A MEDICAL PROFESSIONAL</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl text-blue-600 mb-4">WORK-LIFE BALANCE</h3>
              <p className="text-gray-700 mb-6">
                We understand the importance of maintaining a healthy work-life balance. As a member of the
                Molife team, you'll enjoy flexible scheduling options and supportive policies that allow you to
                prioritize your well-being while delivering exceptional care to our patients.
              </p>
              <div className="h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://img.freepik.com/premium-photo/african-woman-with-afro-smiling-looking-into-her-laptop-computer-her-desk-white-office_220770-14999.jpg"
                  alt="Work-life balance"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl text-blue-600 mb-4">INNOVATIVE APPROACH</h3>
              <p className="text-gray-700 mb-6">
                Joining Molife means being part of a team that embraces innovation in healthcare delivery. We
                leverage cutting-edge technology and modern practices to enhance patient care and streamline
                workflows, allowing you to practice medicine more efficiently and effectively.
              </p>
              <div className="h-48 overflow-hidden rounded-lg">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/21/18/20/bright-1847006__340.jpg"
                  alt="Work-life balance"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl text-blue-600 mb-4">IMPACTFUL WORK</h3>
              <p className="text-gray-700 mb-6">
                At Molife Medical Services, you'll have the opportunity to make a real difference in the lives
                of patients. We're committed to providing high-quality healthcare services that improve the
                health outcomes of individuals and communities.
              </p>
              <div className="h-48 overflow-hidden rounded-lg bg-black flex items-center justify-center">
                <span className="text-white text-2xl font-bold">DO SOMETHING GREAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Map */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src="/images/image1.png"
                  alt="Harare location map"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8">
                BRINGING HEALTH TO YOUR FINGERTIPS, ONE CLICK AT A TIME WITH MOLIFE MEDICAL SERVICES.
              </h2>

              <div className="space-y-4 mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                  Sign Up for Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-600">
            2024 copyright MoLife medical services, designed by <strong>Gorilla Research and Investments</strong>
          </p>
        </div>
      </footer>
    </div>
  )
}