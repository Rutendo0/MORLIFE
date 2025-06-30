
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

          {/* Understanding Schizophrenia */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Understanding Schizophrenia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Schizophrenia is a chronic brain disorder that affects less than one percent of the global population. It typically emerges in late adolescence or early adulthood and can significantly impact a person's ability to think clearly, manage emotions, and relate to others.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Contrary to popular misconceptions, schizophrenia is not about having multiple personalities. Instead, it involves a range of cognitive, behavioral, and emotional symptoms that can vary greatly between individuals.
            </p>
          </section>

          {/* Symptoms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Symptoms of Schizophrenia</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Positive Symptoms (Added experiences)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Hallucinations</h4>
                    <p className="text-gray-700 text-sm">Seeing, hearing, or feeling things that aren't there. Auditory hallucinations are most common.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Delusions</h4>
                    <p className="text-gray-700 text-sm">Fixed false beliefs that are not based in reality, such as paranoid or grandiose thoughts.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Negative Symptoms (Reduced experiences)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Reduced Emotional Expression</h4>
                    <p className="text-gray-700 text-sm">Difficulty expressing emotions through facial expressions, voice tone, or gestures.</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Avolition</h4>
                    <p className="text-gray-700 text-sm">Decreased motivation to initiate and perform self-directed purposeful activities.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Cognitive Symptoms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Difficulty with attention and concentration</li>
                  <li>Problems with working memory</li>
                  <li>Impaired executive functioning</li>
                  <li>Difficulty processing information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Causes and Risk Factors */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Causes and Risk Factors</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                The exact cause of schizophrenia is unknown, but research suggests it results from a complex interaction of genetic, brain chemistry, and environmental factors:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Genetics:</strong> Family history increases risk, but no single gene causes the disorder</li>
                <li>• <strong>Brain chemistry:</strong> Imbalances in neurotransmitters like dopamine and glutamate</li>
                <li>• <strong>Environmental factors:</strong> Prenatal exposure to viruses, malnutrition, or psychosocial stress</li>
                <li>• <strong>Substance use:</strong> Cannabis and other drug use during adolescence may increase risk</li>
              </ul>
            </div>
          </section>

          {/* Treatment Options */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Treatment Approaches</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">1. Antipsychotic Medications</h3>
                <p className="text-gray-700">
                  The primary treatment for schizophrenia. These medications help manage symptoms by affecting neurotransmitter activity in the brain. Both typical and atypical antipsychotics are available.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">2. Psychosocial Interventions</h3>
                <p className="text-gray-700 mb-3">
                  Various therapy approaches that complement medication:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Cognitive Behavioral Therapy (CBT)</li>
                  <li>• Family therapy and education</li>
                  <li>• Social skills training</li>
                  <li>• Vocational rehabilitation</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">3. Coordinated Specialty Care</h3>
                <p className="text-gray-700">
                  A comprehensive, team-based approach that combines medication, therapy, family involvement, and support services to provide holistic care.
                </p>
              </div>
            </div>
          </section>

          {/* Living with Schizophrenia */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Living with Schizophrenia</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Self-Management Strategies</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Take medications as prescribed</li>
                  <li>• Maintain regular sleep schedule</li>
                  <li>• Exercise regularly</li>
                  <li>• Avoid alcohol and drugs</li>
                  <li>• Practice stress management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Support Systems</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Family and friends</li>
                  <li>• Support groups</li>
                  <li>• Mental health professionals</li>
                  <li>• Community resources</li>
                  <li>• Peer support programs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reducing Stigma */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Reducing Stigma and Promoting Understanding</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the biggest challenges facing people with schizophrenia is social stigma. Education and awareness are key to changing misconceptions and promoting acceptance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With proper treatment and support, many people with schizophrenia can lead fulfilling lives, maintain relationships, and contribute meaningfully to their communities.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Understanding schizophrenia is essential for reducing stigma and supporting those affected by this complex condition. While challenges exist, early intervention, comprehensive treatment, and strong support systems can significantly improve outcomes and quality of life for individuals living with schizophrenia.
            </p>
          </section>
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
