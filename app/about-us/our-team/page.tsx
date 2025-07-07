"use client"
import Header from "@/components/header"
import { Link } from "lucide-react"
import Image from "next/image"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
       

        {/* Team Members Grid */}
        <section className="grid gap-16">
          
          {/* First Row - Tadiwa and Mazvita */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Tadiwa Chisango */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src="/images/image18.png"
                  alt="Tadiwa Chisango"
                  width={300}
                  height={400}
                  className="w-64 h-80 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">TADIWA CHISANGO</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-600">MANAGING DIRECTOR</h4>
              <p className="text-gray-700 leading-relaxed">
               Miss Chisango is an accomplished professional with extensive experience in customer-facing roles and a diploma in First-Aid. With a proven track record of success, she brings a wealth of expertise in engaging with clients and delivering exceptional service. Her background in customer relations has equipped her with strong communication, interpersonal, and problem-solving skills. Throughout her career, Tadiwa has demonstrated a deep commitment to meeting customer needs and fostering positive relationships. Her dedication to excellence and her ability to effectively address diverse customer preferences make her a valuable asset in any customer-centric setting..
              </p>
            </div>

            {/* Mazvita Mwayera */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src="/images/image19.png"
                  alt="Mazvita Mwayera"
                  width={300}
                  height={400}
                  className="w-64 h-80 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">MAZVITA MWAYERA</h3>
              <h4 className="text-lg font-semibold mb-2 text-blue-600">MEDICAL DIRECTOR</h4>
              <h5 className="text-md font-medium mb-4 text-gray-600">MENTAL HEALTH SPECIALIST (BSC HONOURS OCCUPATIONAL THERAPY)</h5>
              <p className="text-gray-700 leading-relaxed">
                Miss Mwayera is a seasoned occupational therapist specializing in mental health, equipped with a BSc Honours in Occupational Therapy from the University of Zimbabwe. With a wealth of experience, she is dedicated to helping individuals navigate the challenges of mental health through personalized therapy and support. Mazvita is passionate about empowering her clients to achieve greater independence and well-being in their daily lives, using evidence-based practices tailored to their unique needs.
              </p>
            </div>
          </div>

          {/* Second Row - Michelle and Jessie */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Dr Michelle Chilumbiri */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src="/images/image20.png"
                  alt="Dr Michelle Chilumbiri"
                  width={300}
                  height={400}
                  className="w-64 h-80 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">DR MICHELLE CHILUMBIRI</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-600">MEDICAL DOCTOR (BACHELOR OF MEDICINE AND BACHELOR OF SURGERY, DEGREES)</h4>
              <p className="text-gray-700 leading-relaxed">
                Dr. Chilumbiri, a graduate of the University of Zimbabwe's esteemed Bachelor of Medicine and Bachelor of Surgery (MBBS) program, is a compassionate medical professional specializing in internal medicine. With a focus on evidence-based practices, Dr. Michelle is dedicated to providing personalized care to her patients, empowering them through education and support.
              </p>
            </div>

            {/* Dr Jessie Chilumbiri */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src="/images/image21.png"
                  alt="Dr Jessie Chilumbiri"
                  width={300}
                  height={400}
                  className="w-64 h-80 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">DR JESSIE CHILUMBIRI</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-600">MEDICAL DOCTOR (BACHELOR OF MEDICINE AND BACHELOR OF SURGERY DEGREES)</h4>
              <p className="text-gray-700 leading-relaxed">
                Dr. Matiki, a product of the University of Zimbabwe's renowned Bachelor of Medicine and Bachelor of Surgery (MBBS) program, is a skilled surgeon specializing in orthopedics. Combining technical proficiency with a patient-centered approach, Dr. Jess is committed to enhancing the quality of life for individuals suffering from musculoskeletal conditions through innovative surgical interventions and compassionate care.
              </p>
            </div>
          </div>

          {/* Third Row - Dr Faith Masanganise */}
          <div className="flex justify-center">
            <div className="text-center max-w-md">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <Image
                  src="/images/image22.png"
                  alt="Dr Faith Masanganise"
                  width={300}
                  height={400}
                  className="w-64 h-80 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">DR FAITH MASANGANISE</h3>
              <h4 className="text-lg font-semibold mb-2 text-blue-600">PSYCHIATRIST</h4>
              <h5 className="text-md font-medium mb-4 text-gray-600">(MASTERS DEGREE IN MEDICINE (psychiatry) and DIPLOMA IN MENTAL HEALTH)</h5>
              <p className="text-gray-700 leading-relaxed">
                Dr. Masanganise is a psychiatrist with extensive expertise in mental health. She holds a Master's degree in Medicine (Psychiatry) and a Diploma in Mental Health from the University of Zimbabwe. With a holistic approach to patient care, she is committed to providing compassionate, evidence-based treatment tailored to individual needs. Dr. Faith is also involved in research and education, advocating for mental health awareness and reform.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl mb-4">READY TO MEET OUR TEAM?</h2>
          <p className="text-lg mb-6">
            Book a consultation with any of our qualified healthcare professionals today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Book Consultation
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
