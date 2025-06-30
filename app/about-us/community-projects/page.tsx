
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function CommunityProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
            COMMUNITY PROJECTS
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering communities through health education, outreach programs, and sustainable healthcare initiatives across Zimbabwe and beyond.
          </p>
        </div>

        {/* Location Map Section */}
        <section className="mb-16 bg-blue-600 text-white p-8 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light mb-6">
                BRINGING HEALTH TO YOUR FINGERTIPS, ONE CLICK AT A TIME WITH MOLIFE MEDICAL SERVICES.
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white text-blue-600 p-4 rounded-lg">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-4">
              <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Harare Location Map</span>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-light text-blue-600 text-center mb-12">CURRENT INITIATIVES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/doctor.JPG"
                alt="Health education program"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">HEALTH EDUCATION OUTREACH</h3>
                <p className="text-gray-700">
                  Providing health education and awareness programs in rural communities to promote preventive care and healthy lifestyle choices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/doctor.JPG"
                alt="Mobile clinic"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">MOBILE HEALTH CLINICS</h3>
                <p className="text-gray-700">
                  Bringing essential healthcare services directly to underserved communities through our mobile clinic program.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/doctor.JPG"
                alt="Mental health support"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">MENTAL HEALTH AWARENESS</h3>
                <p className="text-gray-700">
                  Breaking stigma and promoting mental health awareness through community workshops and support groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-light text-blue-600 text-center mb-8">OUR IMPACT</h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Families Reached</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <p className="text-gray-600">Health Screenings</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Health Workshops</p>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-light text-blue-600 text-center mb-8">UPCOMING PROJECTS</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">DIGITAL HEALTH LITERACY PROGRAM</h3>
              <p className="text-gray-700">
                Teaching communities how to effectively use digital health tools and telemedicine services.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">MATERNAL HEALTH INITIATIVE</h3>
              <p className="text-gray-700">
                Focusing on improving maternal and child health outcomes through specialized care programs.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">CHRONIC DISEASE MANAGEMENT</h3>
              <p className="text-gray-700">
                Establishing support networks for individuals managing diabetes, hypertension, and other chronic conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl mb-4">GET INVOLVED</h2>
          <p className="text-lg mb-6">
            Join us in making healthcare accessible to everyone. Support our community projects and help us create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>2024 copyright MoLife medical services, designed by Gorilla Research and Investments</p>
        </footer>
      </main>
    </div>
  )
}
