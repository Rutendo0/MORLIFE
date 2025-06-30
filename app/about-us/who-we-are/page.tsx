
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/doctor.JPG"
              alt="Healthcare professional with stethoscope"
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>

          <div className="order-1 lg:order-2 text-black space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6 sm:mb-8 tracking-wide">
              WHO WE ARE
            </h1>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                Molife Medical Services is a pioneering healthcare provider dedicated to revolutionizing access to
                quality medical care in Africa. With a commitment to innovation and excellence, Molife leverages
                cutting-edge technology to deliver comprehensive healthcare solutions tailored to meet the diverse needs
                of our community.
              </p>

              <p>
                Founded on the principles of accessibility, affordability, and compassionate care, Molife bridges the
                gap between patients and healthcare professionals through our innovative digital platform. We understand
                the unique challenges faced by individuals seeking quality healthcare, and we are dedicated to providing
                convenient, reliable, and professional medical services.
              </p>

              <p>
                Our team of qualified healthcare professionals, including doctors, nurses, psychologists, and
                psychiatrists, work tirelessly to ensure that every patient receives personalized care that addresses
                their specific health needs. Whether through telemedicine consultations, home visits, or mental health
                support, we are committed to improving health outcomes and enhancing the quality of life for our
                patients.
              </p>
            </div>

            <div className="border-l-4 border-blue-200 pl-6">
              <h2 className="text-2xl sm:text-3xl font-light text-blue-600 mb-4">OUR MISSION</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services through innovative technology
                and compassionate care, empowering individuals and communities to achieve optimal health and well-being.
              </p>
            </div>

            <div className="border-l-4 border-blue-200 pl-6">
              <h2 className="text-2xl sm:text-3xl font-light text-blue-600 mb-4">OUR VISION</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To become the leading healthcare provider in Africa, renowned for our commitment to innovation,
                excellence, and compassion. We envision a future where every individual has access to high-quality,
                affordable healthcare services, empowering them to lead healthier, more fulfilling lives.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-light text-blue-600 mb-4">OUR VALUES</h2>
              <ul className="space-y-2 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Innovation:</strong> Embracing technology to improve healthcare delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Excellence:</strong> Maintaining the highest standards of medical care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Compassion:</strong> Providing caring and empathetic healthcare services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Accessibility:</strong> Making healthcare available to everyone, everywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Integrity:</strong> Building trust through transparent and ethical practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-blue-600 mb-4">OUR COMMITMENT</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Molife Medical Services, we are more than just a healthcare provider – we are your partners in health,
              committed to supporting you on your journey to wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Available When You Need Us</h3>
              <p className="text-gray-600">
                Round-the-clock support and emergency consultation services to ensure you always have access to care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Healthcare</h3>
              <p className="text-gray-600">
                Licensed healthcare professionals committed to providing the highest quality medical care and treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Every patient receives personalized, compassionate care tailored to their individual health needs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
