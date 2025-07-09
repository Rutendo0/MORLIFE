
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
              src="/images/image28.jpg"
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
              <strong>Introduction:</strong> Women's health is a critical aspect of overall well-being, and prioritizing preventative care and screenings is essential for promoting and maintaining optimal health outcomes. In Africa, where healthcare access and resources may vary, understanding the importance of preventative care and utilizing evidence-based approaches can significantly impact women's health outcomes. In this article, we'll explore key preventative care measures and screenings supported by relevant statistics and research findings specific to Zimbabwe and Africa as a whole.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
     <div className="flex justify-center mb-8">
              <Image
                src="/images/image48.jpg"
                alt="Ergonomic workspace setup"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-600 mb-4">1. Cervical Cancer Screening (Pap Smears):</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              According to the World Health Organization (WHO), cervical cancer is the leading cause of cancer-related deaths among women in Africa, with Zimbabwe having one of the highest cervical cancer incidence rates in the world.
            </p>
            <p className="text-gray-700 leading-relaxed">
             Research conducted by the International Agency for Research on Cancer (IARC) emphasizes the effectiveness of regular Pap smears in detecting precancerous lesions and preventing cervical cancer deaths.
            </p>
            <p>
              Zimbabwe's Ministry of Health and Child Care recommends routine Pap smears for women aged 25 to 49 years every three years, highlighting the importance of early detection and treatment.
            </p>

            <h2 className="text-xl font-semibold text-gray-600 mb-4">2. Breast Cancer Screening (Mammograms):</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Breast cancer is the most common cancer among women in Africa, and late-stage diagnosis remains a significant challenge.
            </p>
            <p className="text-gray-700 leading-relaxed">
             A study published in the South African Medical Journal highlighted the importance of mammographic screening in improving early detection rates and reducing breast cancer mortality.
            </p>
            <p>
              Despite challenges such as limited access to mammography facilities in some regions, initiatives like mobile mammography units have shown promise in reaching underserved populations in countries like South Africa and Kenya.
            </p>

            <h2 className="text-xl font-semibold text-gray-600 mb-4">3. Maternal Health Screenings: </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maternal mortality rates remain high in many African countries, with preventable causes such as hemorrhage, hypertension, and infections contributing significantly.
            </p>
            <p className="text-gray-700 leading-relaxed">
             The Lancet Global Health Commission on High-Quality Health Systems in the Sustainable Development Goal Era underscores the importance of antenatal care and screenings for conditions like gestational diabetes and preeclampsia in reducing maternal mortality and improving birth outcomes.
            </p>
            <p>
              Initiatives such as the Maternal and Perinatal Death Surveillance and Response (MPDSR) system in Zimbabwe aim to identify gaps in maternal healthcare and strengthen preventative measures through data-driven interventions.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
             Prioritizing preventative care and screenings is crucial for improving women's health outcomes in Africa. By implementing evidence-based approaches such as regular cervical cancer screenings, mammograms, maternal health screenings, and prevention efforts, countries like Zimbabwe can make significant strides towards reducing the burden of preventable diseases and promoting overall well-being among women. It is imperative that healthcare systems, policymakers, and stakeholders work together to ensure equitable access to quality preventative care services for all women across the continent.
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
