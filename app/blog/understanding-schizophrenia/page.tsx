
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function UnderstandingSchizophreniaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            UNDERSTANDING SCHIZOPHRENIA: SYMPTOMS, TREATMENTS, AND INSIGHTS
          </h1>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/schizophrenia.jpg"
              alt="Schizophrenia awareness illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Schizophrenia is a complex mental health disorder that affects how a person thinks, feels, and behaves. Understanding this condition, its symptoms, and available treatments is crucial for reducing stigma and supporting those affected by it.
            </p>
          </section>

          {/* Content sections */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Understanding Schizophrenia</h2>
            <p className="text-gray-700 leading-relaxed">
              Schizophrenia is a chronic brain disorder that affects less than one percent of the U.S. population. When symptoms are active, they can include delusions, hallucinations, disorganized speech, trouble with thinking, and lack of motivation.
            </p>
          </section>

          {/* More content sections would be added here */}
        </article>

        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/treating-lower-back-pain"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">EFFECTIVE STRATEGIES FOR TREATING LOWER BACK PAIN</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/enhancing-sleep-quality"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">PROVEN STRATEGIES FOR ENHANCING SLEEP QUALITY</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
