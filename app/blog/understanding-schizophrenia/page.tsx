
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
              src="/images/image36.jpeg"
              alt="Schizophrenia awareness illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Schizophrenia is a complex and often debilitating mental disorder that affects approximately 20 million people worldwide. Despite its prevalence, there remains significant stigma and misunderstanding surrounding this condition. In this article, we'll delve into the symptoms, treatments, and insights gleaned from research to provide a comprehensive understanding of schizophrenia.
            </p>

            <div className="flex justify-center mb-8">
                          <Image
                            src="/images/image25.jpg"
                            alt="Ergonomic workspace setup"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
          </section>

          {/* Symptoms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Symptoms of Schizophrenia</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Positive Symptoms</h3>
                <p>These symptoms involve distortions of normal functioning and include hallucinations (e.g., hearing voices), delusions (e.g., false beliefs), disorganized speech, and disorganized behavior..</p>
                <div className=" gap-4">
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Negative Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className=" pl-4">
                    <p className="text-gray-700 text-sm">Symptoms entail deficits in normal functioning and include reduced emotional expression, social withdrawal, anhedonia (loss of pleasure), and avolition (lack of motivation).</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Cognitive Symptoms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>symptoms involve impairments in cognitive processes such as attention, memory, and executive function, which can significantly impact daily functioning.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Causes and Risk Factors */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Insights from Research:</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Research has shed light on the underlying neurobiology of schizophrenia, implicating abnormalities in neurotransmitter systems, brain structure, and connectivity.
              </p>
                 <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">1. Neurotransmitter Imbalance: </h2>
              <p className="text-gray-700 leading-relaxed">
                Dysregulation of dopamine, glutamate, and other neurotransmitter systems has been implicated in the pathophysiology of schizophrenia. Dopamine dysregulation, in particular, has been linked to the positive symptoms of psychosis.
              </p>
            </div> <div className="flex justify-center mb-8">
              <Image
              src="/images/image37.jpg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>


                <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">2. Brain Structure Abnormalities:  </h2>
              <p className="text-gray-700 leading-relaxed">
                Neuroimaging studies have revealed structural abnormalities in the brains of individuals with schizophrenia, including reduced gray matter volume, enlarged ventricles, and alterations in cortical thickness. These structural changes are thought to contribute to the cognitive deficits observed in schizophrenia.
              </p>
            </div><div className="flex justify-center mb-8">
              <Image
              src="/images/image38.jpeg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>


                <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">3. Genetic Factors:</h2>
              <p className="text-gray-700 leading-relaxed">
                Family, twin, and molecular genetic studies have provided compelling evidence for the role of genetics in schizophrenia. While no single gene is responsible for schizophrenia, multiple genetic risk factors interact with environmental influences to increase susceptibility to the disorder.
              </p>
            </div><div className="flex justify-center mb-8">
              <Image
              src="/images/image39.jpeg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>

                <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">4. Environmental Risk Factors:</h2>
              <p className="text-gray-700 leading-relaxed">
                Prenatal and perinatal factors, such as maternal infection, malnutrition, and obstetric complications, have been associated with an increased risk of schizophrenia. Additionally, early-life stressors, urban upbringing, and cannabis use during adolescence have been identified as environmental risk factors.
              </p>
            </div><div className="flex justify-center mb-8">
              <Image
              src="/images/image40.jpg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>
            </div>
          </section>

          {/* Treatment Options */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Treatment Approaches</h2>
            <p>Treatment for schizophrenia typically involves a combination of pharmacotherapy, psychosocial interventions, and supportive care.</p>
              <div className="bg-blue-50 p-6 rounded-lg">

                <div className="space-y-6">
<div className="flex justify-center mb-8">
              <Image
              src="/images/image41.jpg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>
                <h3 className="font-semibold text-blue-600 mb-2">1. Antipsychotic Medications :</h3>
                <p className="text-gray-700">
                  Psychosocial interventions. Antipsychotic medications, which act primarily by blocking dopamine receptors, are the cornerstone of pharmacological treatment for schizophrenia. Examples of antipsychotic medications include:
                </p>
                <li>First-generation antipsychotics (e.g., haloperidol, chlorpromazine): These medications are effective at reducing positive symptoms but are associated with a higher risk of extrapyramidal side effects, such as stiffness, tremors, and involuntary movements.</li>
              <li>Second-generation antipsychotics (e.g., risperidone, olanzapine, clozapine): Second-generation antipsychotics are often preferred due to their reduced risk of extrapyramidal side effects. They are also effective at treating both positive and negative symptoms of schizophrenia.</li>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
<div className="flex justify-center mb-8">
              <Image
              src="/images/image42.jpg"
              alt="Ergonomic workspace setup"
              width={500}
              height={300}
             className="rounded-lg shadow-lg"
              />
              </div>

                <h3 className="font-semibold text-blue-600 mb-2">2. Psychosocial Interventions: </h3>
                <p className="text-gray-700 mb-3">
                   Psychosocial interventions, such as cognitive-behavioral therapy (CBT), family therapy, supported employment, and social skills training, are essential components of schizophrenia treatment. These interventions aim to address the functional impairments associated with schizophrenia and promote recovery and rehabilitation.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Schizophrenia is a complex and multifaceted disorder that requires a comprehensive approach to treatment and care. By understanding the symptoms, neurobiology, and treatment approaches associated with schizophrenia, we can work towards reducing stigma, promoting early intervention, and improving outcomes for individuals living with this challenging condition.
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
