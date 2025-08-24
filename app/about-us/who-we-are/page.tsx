
"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Target, 
  Eye, 
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar
} from "lucide-react"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Main Content Section */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <Image
                  src="/images/doctor.JPG"
                  alt="Healthcare professional with stethoscope"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Molife Medical Services is a pioneering healthcare provider dedicated to revolutionizing access to
                  quality medical care in Africa. With a commitment to innovation and excellence, we leverage
                  cutting-edge technology to deliver comprehensive healthcare solutions tailored to meet the diverse needs
                  of our community.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Our Foundation</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Founded on the principles of accessibility, affordability, and compassionate care, Molife bridges the
                  gap between patients and healthcare professionals through our innovative digital platform. We understand
                  the unique challenges faced by individuals seeking quality healthcare.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Our Team</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our team of qualified healthcare professionals, including doctors, nurses, psychologists, and
                  psychiatrists, work tirelessly to ensure that every patient receives personalized care that addresses
                  their specific health needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="space-y-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-sky-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To provide accessible, affordable, and high-quality healthcare services through innovative technology
                  and compassionate care, empowering individuals and communities to achieve optimal health and well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-12 border border-emerald-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become the leading healthcare provider in Africa, renowned for our commitment to innovation,
                  excellence, and compassion. We envision a future where every individual has access to high-quality,
                  affordable healthcare services, empowering them to lead healthier, more fulfilling lives.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lightbulb, title: "Innovation", desc: "Embracing technology to improve healthcare delivery", color: "bg-yellow-100 text-yellow-600" },
                { icon: Award, title: "Excellence", desc: "Maintaining the highest standards of medical care", color: "bg-blue-100 text-blue-600" },
                { icon: Heart, title: "Compassion", desc: "Providing caring and empathetic healthcare services", color: "bg-rose-100 text-rose-600" },
                { icon: Users, title: "Accessibility", desc: "Making healthcare available to everyone, everywhere", color: "bg-green-100 text-green-600" },
                { icon: Shield, title: "Integrity", desc: "Building trust through transparent and ethical practices", color: "bg-indigo-100 text-indigo-600" },
                { icon: CheckCircle, title: "Quality", desc: "Delivering exceptional healthcare outcomes consistently", color: "bg-emerald-100 text-emerald-600" }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">Our Commitment to You</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At Molife Medical Services, we are more than just a healthcare provider – we are your partners in health,
              committed to supporting you on your journey to wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Available When You Need Us",
                desc: "Round-the-clock support and emergency consultation services to ensure you always have access to care.",
                color: "from-sky-400 to-sky-600"
              },
              {
                icon: Award,
                title: "Quality Healthcare",
                desc: "Licensed healthcare professionals committed to providing the highest quality medical care and treatment.",
                color: "from-emerald-400 to-emerald-600"
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                desc: "Every patient receives personalized, compassionate care tailored to their individual health needs.",
                color: "from-rose-400 to-rose-600"
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-12 sm:px-12 sm:py-16 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Experience Our Care?
              </h2>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of patients who trust Molife Medical Services for their healthcare needs. 
                Experience the difference of personalized, professional medical care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/book-appointment"
                  className="group bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about-us/our-team"
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
