"use client"
import Header from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Award, GraduationCap } from "lucide-react"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Meet Our <span className="text-sky-600">Expert Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated healthcare professionals bring years of experience and compassionate care 
            to provide you with the highest quality medical services.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Team Members Grid */}
        <section className="space-y-16">
          
          {/* First Row - Leadership Team */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Tadiwa Chisango */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/image18.jpeg"
                        alt="Tadiwa Chisango"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Tadiwa Chisango</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Managing Director
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      An accomplished professional with extensive experience in customer-facing roles and a diploma in First-Aid. 
                      Tadiwa brings expertise in client engagement and exceptional service delivery, with strong communication 
                      and problem-solving skills developed throughout her career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mazvita Mwayera */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/image19.PNG"
                        alt="Mazvita Mwayera"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Mazvita Mwayera</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Medical Director
                    </div>
                    <div className="text-xs text-slate-500 mb-4 font-medium">
                      Mental Health Specialist • BSc Honours Occupational Therapy
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      A seasoned occupational therapist specializing in mental health from the University of Zimbabwe. 
                      Dedicated to helping individuals navigate mental health challenges through personalized therapy 
                      and evidence-based practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Medical Doctors */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Dr Michelle Chilumbiri */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/image20.PNG"
                        alt="Dr Michelle Chilumbiri"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr Michelle Chilumbiri</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Medical Doctor
                    </div>
                    <div className="text-xs text-slate-500 mb-4 font-medium">
                      MBBS • Internal Medicine Specialist
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      A graduate of the University of Zimbabwe's MBBS program, specializing in internal medicine. 
                      Dr. Michelle focuses on evidence-based practices and provides personalized care, empowering 
                      patients through education and compassionate support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr Jessie Chilumbiri */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/image21.PNG"
                        alt="Dr Jessie Chilumbiri"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr Jessie Chilumbiri</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Medical Doctor
                    </div>
                    <div className="text-xs text-slate-500 mb-4 font-medium">
                      MBBS • Orthopedic Surgery Specialist
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      A skilled surgeon from the University of Zimbabwe's MBBS program, specializing in orthopedics. 
                      Dr. Jess combines technical proficiency with patient-centered care to enhance quality of life 
                      through innovative surgical interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Psychiatrist */}
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-rose-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <Image
                          src="/images/image22.PNG"
                          alt="Dr Faith Masanganise"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Dr Faith Masanganise</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Psychiatrist
                      </div>
                      <div className="text-xs text-slate-500 mb-4 font-medium">
                        Masters in Medicine (Psychiatry) • Diploma in Mental Health
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        A psychiatrist with extensive mental health expertise from the University of Zimbabwe. 
                        Dr. Faith provides compassionate, evidence-based treatment with a holistic approach, 
                        while actively contributing to research and mental health advocacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 sm:px-12 sm:py-16 text-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Meet Our Team?
                </h2>
                <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Book a consultation with any of our qualified healthcare professionals and 
                  experience personalized, compassionate care today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/book-appointment"
                    className="group bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Book Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
