
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
              <strong>Introduction:</strong> Women's health in Africa faces unique challenges and opportunities. This article explores evidence-based approaches to preventative care and essential health screenings that can improve outcomes for women across the continent, addressing both global health concerns and region-specific challenges.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">The Current Landscape of Women's Health in Africa</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Women in Africa face diverse health challenges, from infectious diseases to non-communicable conditions. While significant progress has been made in maternal and child health, gaps remain in preventative care and early detection of diseases.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cultural, economic, and healthcare infrastructure factors all play roles in determining health outcomes. Understanding these contexts is crucial for implementing effective preventative care strategies.
            </p>
          </section>

          {/* Reproductive Health */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Reproductive Health and Family Planning</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Contraceptive Access and Education</h3>
                <p className="text-gray-700 mb-3">
                  Access to contraception remains a critical issue across Africa, with significant variation between countries and regions.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Modern contraceptive methods:</strong> IUDs, implants, pills, and barrier methods</li>
                  <li>• <strong>Family planning counseling:</strong> Personalized guidance on contraceptive choices</li>
                  <li>• <strong>Emergency contraception:</strong> Access to post-coital contraception</li>
                  <li>• <strong>Adolescent reproductive health:</strong> Age-appropriate education and services</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Maternal Health Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Prenatal Care</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Early pregnancy detection and care</li>
                      <li>• Nutritional supplementation (folic acid, iron)</li>
                      <li>• Screening for complications</li>
                      <li>• Immunizations (tetanus, influenza)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Skilled Birth Attendance</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Trained healthcare providers during delivery</li>
                      <li>• Emergency obstetric care availability</li>
                      <li>• Postpartum care and support</li>
                      <li>• Breastfeeding support and education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Infectious Disease Prevention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Infectious Disease Prevention and Management</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-3">HIV/AIDS Prevention and Care</h3>
                <p className="text-gray-700 mb-3">
                  Women account for a significant proportion of HIV infections in Africa, making targeted prevention and care essential.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prevention Strategies</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Regular HIV testing and counseling</li>
                      <li>• Pre-exposure prophylaxis (PrEP) for high-risk individuals</li>
                      <li>• Safe sex education and condom access</li>
                      <li>• Partner testing and notification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Care and Treatment</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Antiretroviral therapy (ART)</li>
                      <li>• Prevention of mother-to-child transmission</li>
                      <li>• Treatment of opportunistic infections</li>
                      <li>• Psychosocial support services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-700 mb-3">Malaria Prevention</h3>
                <p className="text-gray-700 mb-3">
                  Pregnant women are particularly vulnerable to malaria, which can cause severe complications.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Insecticide-treated nets (ITNs):</strong> Consistent use during sleep</li>
                  <li>• <strong>Intermittent preventive treatment:</strong> For pregnant women in endemic areas</li>
                  <li>• <strong>Indoor residual spraying:</strong> Community-level vector control</li>
                  <li>• <strong>Early diagnosis and treatment:</strong> Rapid diagnostic tests and effective antimalarials</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-3">Tuberculosis Screening and Treatment</h3>
                <p className="text-gray-700 mb-3">
                  Women, especially those with HIV, face increased TB risk. Early detection is crucial.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Regular TB screening for high-risk groups</li>
                  <li>• Contact tracing and testing</li>
                  <li>• Directly observed treatment short-course (DOTS)</li>
                  <li>• Prevention of drug-resistant TB</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancer Screening */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Cancer Prevention and Early Detection</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-3">Cervical Cancer Screening</h3>
                <p className="text-gray-700 mb-3">
                  Cervical cancer is one of the leading causes of cancer death among women in Africa, yet it's largely preventable.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Screening Methods</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Pap smear testing</li>
                      <li>• Visual inspection with acetic acid (VIA)</li>
                      <li>• HPV testing</li>
                      <li>• Colposcopy for abnormal results</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prevention</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• HPV vaccination for adolescent girls</li>
                      <li>• Safe sexual practices</li>
                      <li>• Smoking cessation</li>
                      <li>• Regular screening starting at age 21</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="font-semibold text-pink-600 mb-3">Breast Cancer Awareness</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Early Detection</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Monthly breast self-examination</li>
                      <li>• Clinical breast examination</li>
                      <li>• Mammography (where available)</li>
                      <li>• Awareness of breast changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Factors</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Family history of breast/ovarian cancer</li>
                      <li>• Late childbearing or nulliparity</li>
                      <li>• Prolonged hormone exposure</li>
                      <li>• Lifestyle factors (diet, exercise)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Non-Communicable Diseases */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Non-Communicable Disease Prevention</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-600 mb-3">Cardiovascular Health</h3>
              <p className="text-gray-700 mb-3">
                Heart disease is becoming increasingly common among African women, often related to lifestyle changes and urbanization.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Risk Assessment</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Blood pressure monitoring</li>
                    <li>• Cholesterol screening</li>
                    <li>• Diabetes screening</li>
                    <li>• BMI and waist circumference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Prevention</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Regular physical activity</li>
                    <li>• Healthy diet (low salt, high fiber)</li>
                    <li>• Smoking cessation</li>
                    <li>• Stress management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-600 mb-3">Diabetes Prevention and Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Risk Factors</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Family history of diabetes</li>
                    <li>• Gestational diabetes history</li>
                    <li>• Obesity and physical inactivity</li>
                    <li>• Age over 45 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Prevention Strategies</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Regular blood glucose screening</li>
                    <li>• Weight management</li>
                    <li>• Dietary modifications</li>
                    <li>• Increased physical activity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mental Health */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Mental Health and Well-being</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Mental health is an integral part of overall health, yet it's often overlooked in women's health programs across Africa.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-indigo-600 mb-3">Common Mental Health Issues</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Depression and anxiety disorders</li>
                    <li>• Postpartum depression</li>
                    <li>• Trauma-related disorders</li>
                    <li>• Substance abuse</li>
                    <li>• Eating disorders</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-indigo-600 mb-3">Support and Treatment</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Community-based mental health services</li>
                    <li>• Peer support groups</li>
                    <li>• Counseling and psychotherapy</li>
                    <li>• Integration with primary healthcare</li>
                    <li>• Crisis intervention services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Healthcare Access */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Improving Healthcare Access and Quality</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Barriers to Healthcare Access</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Geographic distance to healthcare facilities</li>
                    <li>• Financial constraints and cost of care</li>
                    <li>• Cultural and social barriers</li>
                    <li>• Limited healthcare infrastructure</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Shortage of trained healthcare providers</li>
                    <li>• Language and communication barriers</li>
                    <li>• Gender-related access issues</li>
                    <li>• Limited health insurance coverage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-3">Solutions and Innovations</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Mobile health clinics:</strong> Bringing services to remote communities</li>
                  <li>• <strong>Telemedicine:</strong> Remote consultations and health monitoring</li>
                  <li>• <strong>Community health workers:</strong> Training local women as health advocates</li>
                  <li>• <strong>Health insurance schemes:</strong> Making healthcare financially accessible</li>
                  <li>• <strong>Public-private partnerships:</strong> Expanding service delivery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Prioritizing women's health in Africa requires a comprehensive approach that addresses the unique challenges and opportunities present across the continent. By focusing on evidence-based preventative care, improving access to essential health services, and implementing culturally appropriate interventions, we can significantly improve health outcomes for women. Success depends on continued investment in healthcare infrastructure, training of healthcare providers, community engagement, and policies that support women's health throughout their lives.
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
