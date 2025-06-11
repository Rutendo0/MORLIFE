import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen ">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-200 mb-6 sm:mb-8 tracking-wide">
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
                At Molife, we believe that everyone deserves access to timely and affordable medical services. Our team
                of experienced healthcare professionals is dedicated to healthcare delivery and making a meaningful
                impact on the lives of our patients. Join us on our mission to create a healthier, happier Africa for
                all.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/cbhi-membership"
                className="inline-block bg-blue-200 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors duration-200"
              >
                Join CBHI Membership
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 border-t border-blue-300/30 pt-12 sm:pt-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-400 mb-6 sm:mb-8 tracking-wide">
                OUR VISION
              </h2>
            </div>

            <div className="text-black">
              <p className="text-base sm:text-lg leading-relaxed">
                Our vision at Molife Medical Services is to become the leading healthcare provider in Africa, renowned
                for our commitment to innovation, excellence, and compassion. We envision a future where every
                individual has access to high-quality, affordable healthcare services, empowering them to lead
                healthier, more fulfilling lives. Through continuous innovation and collaboration, we strive to set new
                standards in healthcare delivery, making a positive impact on the well-being of our community and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
