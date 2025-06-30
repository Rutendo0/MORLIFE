
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function WellnessLaterLifePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            ESSENTIAL TIPS FOR MAINTAINING WELLNESS IN LATER LIFE
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/later-life-wellness.jpg"
              alt="Wellness in later life illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Aging is a natural process, but maintaining wellness in later life requires intentional strategies and lifestyle choices. This article provides evidence-based tips for healthy aging and maintaining quality of life as we age.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Healthy Aging Strategies</h2>
            <p className="text-gray-700 leading-relaxed">
              Successful aging involves maintaining physical health, mental acuity, and social connections. Regular exercise, proper nutrition, mental stimulation, and social engagement are key components of wellness in later life.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/womens-health-africa"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">WOMEN'S HEALTH IN AFRICA</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/coping-stress-anxiety"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">COPING WITH STRESS AND ANXIETY</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
