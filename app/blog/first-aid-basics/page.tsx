
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function FirstAidBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            MASTERING FIRST AID BASICS: ESSENTIAL SKILLS FOR HANDLING EMERGENCIES
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/first-aid.jpg"
              alt="First aid basics illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> First aid knowledge can be the difference between life and death in emergency situations. Learning basic first aid skills empowers individuals to provide immediate care before professional medical help arrives.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Essential First Aid Skills</h2>
            <p className="text-gray-700 leading-relaxed">
              Basic first aid skills include CPR, wound care, treating burns, managing choking incidents, and recognizing signs of serious medical emergencies. These skills can be learned by anyone and are invaluable in emergency situations.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/enhancing-sleep-quality"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">ENHANCING SLEEP QUALITY</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/womens-health-africa"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">WOMEN'S HEALTH IN AFRICA</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
