
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function CopingStressAnxietyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            NAVIGATING THE STORM: PRACTICAL STRATEGIES FOR COPING WITH STRESS AND ANXIETY
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/stress-anxiety.jpg"
              alt="Stress and anxiety coping strategies illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> In today's fast-paced world, stress and anxiety have become increasingly common. Learning practical strategies to manage these challenges is essential for maintaining mental health and overall well-being.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Understanding Stress and Anxiety</h2>
            <p className="text-gray-700 leading-relaxed">
              While stress and anxiety are normal responses to challenging situations, chronic stress and anxiety can significantly impact physical and mental health. Recognizing the signs and implementing coping strategies is crucial for managing these conditions effectively.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-start max-w-4xl mx-auto">
          <Link 
            href="/blog/wellness-later-life"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">WELLNESS IN LATER LIFE</div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
