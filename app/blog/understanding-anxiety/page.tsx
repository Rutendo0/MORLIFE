
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function UnderstandingAnxietyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            UNDERSTANDING ANXIETY: EFFECTS, IDENTIFICATION, AND SCIENTIFICALLY PROVEN METHODS TO ALLEVIATE IT
          </h1>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/anxiety-post.jpg"
              alt="Anxiety illustration"
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
              <strong>Introduction:</strong> Anxiety is one of the most common mental health conditions affecting millions worldwide. Understanding its effects, recognizing its symptoms, and knowing evidence-based treatment methods can significantly improve quality of life for those experiencing anxiety disorders.
            </p>
          </section>

          {/* Content sections would continue here following the same pattern as the back pain article */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">What is Anxiety?</h2>
            <p className="text-gray-700 leading-relaxed">
              Anxiety is a natural stress response that can become problematic when it's persistent, excessive, and interferes with daily activities. It involves feelings of worry, fear, and apprehension about future events or situations.
            </p>
          </section>

          {/* More content sections would be added here */}
        </article>

        {/* Navigation */}
        <div className="mt-16 flex justify-end max-w-4xl mx-auto">
          <Link 
            href="/blog/treating-lower-back-pain"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">EFFECTIVE STRATEGIES FOR TREATING LOWER BACK PAIN</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
