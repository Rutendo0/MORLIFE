
import Header from "@/components/header"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <Header />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">CONTACT US</h1>
              <div className="space-y-6 text-lg">
                <p className="mb-8">
                  For inquires any, please feel free to reach out here. If you're interested in 1st in person consultations, you can go ahead and{" "}
                  <span className="underline">schedule your consultation</span> now.
                </p>
                
                <div className="space-y-4">
                  <p>16 George Sifundika Ave</p>
                  <p>admin@molifeonline.com</p>
                  <p>inquiries@molifeonline.com</p>
                  <p>+263 777936637</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  Name <span className="text-gray-300">(required)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-xs mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-xs mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Email <span className="text-gray-300">(required)</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Subject <span className="text-gray-300">(required)</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Message <span className="text-gray-300">(required)</span>
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-4">
              <Image
                src="/images/image1.png"
                alt="Harare location map"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="text-center lg:text-left text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8">
                BRINGING HEALTH TO YOUR FINGERTIPS, ONE CLICK AT A TIME WITH MOLIFE MEDICAL SERVICES.
              </h2>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
