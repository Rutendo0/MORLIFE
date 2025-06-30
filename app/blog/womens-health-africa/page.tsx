
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function WomensHealthAfricaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            PRIORITIZING WOMEN'S HEALTH: EVIDENCE-BASED PREVENTATIVE CARE AND SCREENINGS IN AFRICA
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/womens-health.jpg"
              alt="Women's health in Africa illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Women's health in Africa faces unique challenges and opportunities. This article explores evidence-based approaches to preventative care and essential health screenings that can improve outcomes for women across the continent.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Preventative Care in Africa</h2>
            <p className="text-gray-700 leading-relaxed">
              Preventative healthcare for women in Africa must address both common global health concerns and region-specific challenges. Early detection and prevention strategies can significantly improve health outcomes and quality of life.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/first-aid-basics"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">FIRST AID BASICS</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/wellness-later-life"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">WELLNESS IN LATER LIFE</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
