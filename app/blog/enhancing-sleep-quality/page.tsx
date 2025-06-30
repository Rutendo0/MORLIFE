
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function EnhancingSleepQualityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            PROVEN STRATEGIES FOR ENHANCING SLEEP QUALITY AND RESTORATION
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/sleep-quality.jpg"
              alt="Sleep quality illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Quality sleep is fundamental to physical health, mental well-being, and overall quality of life. This article explores evidence-based strategies to improve sleep quality and achieve better restoration.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">The Importance of Sleep</h2>
            <p className="text-gray-700 leading-relaxed">
              Sleep plays a crucial role in physical health, brain function, and emotional well-being. Poor sleep quality can lead to various health issues including cardiovascular disease, diabetes, and mental health disorders.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/understanding-schizophrenia"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">UNDERSTANDING SCHIZOPHRENIA</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/first-aid-basics"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">MASTERING FIRST AID BASICS</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
