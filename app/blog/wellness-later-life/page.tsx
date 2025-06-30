
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
              <strong>Introduction:</strong> Aging is a natural process, but maintaining wellness in later life requires intentional strategies and lifestyle choices. This article provides evidence-based tips for healthy aging and maintaining quality of life as we age, focusing on physical health, mental well-being, and social connections.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Understanding Healthy Aging</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthy aging is not simply about living longer, but about maintaining functional ability and quality of life as we age. It involves optimizing opportunities for good health, participation, and security to enhance well-being in older age.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Successful aging involves maintaining physical health, mental acuity, and social connections. Regular exercise, proper nutrition, mental stimulation, and social engagement are key components of wellness in later life.
            </p>
          </section>

          {/* Physical Health */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Maintaining Physical Health</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-3">1. Regular Physical Activity</h3>
                <p className="text-gray-700 mb-3">
                  Exercise is one of the most powerful tools for healthy aging, helping maintain strength, balance, flexibility, and cardiovascular health.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Recommended Activities</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Walking or light jogging</li>
                      <li>• Swimming or water aerobics</li>
                      <li>• Strength training with light weights</li>
                      <li>• Yoga or tai chi for flexibility and balance</li>
                      <li>• Dancing for cardio and coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Exercise Guidelines</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• 150 minutes moderate activity per week</li>
                      <li>• Strength training 2 days per week</li>
                      <li>• Balance exercises 3 days per week</li>
                      <li>• Start slowly and progress gradually</li>
                      <li>• Consult healthcare provider before starting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-3">2. Nutrition for Healthy Aging</h3>
                <p className="text-gray-700 mb-3">
                  Good nutrition becomes increasingly important with age as metabolic needs change and the risk of chronic diseases increases.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Essential Nutrients</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Protein for muscle maintenance</li>
                      <li>• Calcium and Vitamin D for bone health</li>
                      <li>• Vitamin B12 for nerve function</li>
                      <li>• Fiber for digestive health</li>
                      <li>• Omega-3 fatty acids for brain health</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Healthy Eating Tips</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Eat colorful fruits and vegetables</li>
                      <li>• Choose lean proteins and whole grains</li>
                      <li>• Stay hydrated throughout the day</li>
                      <li>• Limit processed foods and added sugars</li>
                      <li>• Consider smaller, more frequent meals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-3">3. Preventive Healthcare</h3>
                <p className="text-gray-700 mb-3">
                  Regular healthcare visits and screenings become more important with age to catch and manage health issues early.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Regular Screenings</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Blood pressure and cholesterol checks</li>
                      <li>• Diabetes screening</li>
                      <li>• Cancer screenings (mammogram, colonoscopy)</li>
                      <li>• Bone density testing</li>
                      <li>• Vision and hearing tests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Vaccinations</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Annual flu shot</li>
                      <li>• Pneumonia vaccine</li>
                      <li>• Shingles vaccine</li>
                      <li>• COVID-19 boosters as recommended</li>
                      <li>• Tetanus/diphtheria boosters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mental Health */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Cognitive Health and Mental Well-being</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Keeping Your Mind Sharp</h3>
                <p className="text-gray-700 mb-3">
                  Mental stimulation and cognitive engagement are crucial for maintaining brain health and preventing cognitive decline.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Brain-Boosting Activities</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Reading books, newspapers, or magazines</li>
                      <li>• Solving puzzles, crosswords, or sudoku</li>
                      <li>• Learning new skills or hobbies</li>
                      <li>• Playing strategic games</li>
                      <li>• Taking classes or workshops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lifelong Learning</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• University programs for seniors</li>
                      <li>• Online courses and tutorials</li>
                      <li>• Language learning</li>
                      <li>• Creative pursuits like art or music</li>
                      <li>• Technology skills development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-700 mb-3">Managing Stress and Emotions</h3>
                <p className="text-gray-700 mb-3">
                  Later life can bring unique stressors including health concerns, loss of loved ones, and lifestyle changes. Developing healthy coping strategies is essential.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Stress Management</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Meditation and mindfulness practices</li>
                      <li>• Deep breathing exercises</li>
                      <li>• Regular physical activity</li>
                      <li>• Maintaining routines and structure</li>
                      <li>• Seeking professional help when needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Emotional Well-being</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Staying connected with family and friends</li>
                      <li>• Practicing gratitude and positive thinking</li>
                      <li>• Engaging in meaningful activities</li>
                      <li>• Maintaining a sense of purpose</li>
                      <li>• Accepting and adapting to changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Connections */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Connections and Community Engagement</h2>
            
            <div className="bg-rose-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-rose-600 mb-3">The Importance of Social Connections</h3>
              <p className="text-gray-700 mb-3">
                Strong social connections are linked to better physical and mental health, reduced risk of dementia, and increased longevity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Building Relationships</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Maintain existing friendships and family bonds</li>
                    <li>• Join clubs or groups with shared interests</li>
                    <li>• Participate in religious or spiritual communities</li>
                    <li>• Consider intergenerational programs</li>
                    <li>• Use technology to stay connected</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Community Involvement</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Volunteer for causes you care about</li>
                    <li>• Participate in community events</li>
                    <li>• Join senior centers or programs</li>
                    <li>• Mentor younger people</li>
                    <li>• Engage in civic activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-600 mb-3">Combating Loneliness and Isolation</h3>
              <p className="text-gray-700 mb-3">
                Social isolation is a significant health risk for older adults. Proactive steps can help maintain social connections.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Reach out regularly:</strong> Make calls or send messages to friends and family</li>
                <li>• <strong>Join support groups:</strong> Connect with others facing similar challenges</li>
                <li>• <strong>Consider pet companionship:</strong> Pets can provide emotional support and routine</li>
                <li>• <strong>Use transportation services:</strong> Don't let mobility issues prevent social engagement</li>
                <li>• <strong>Explore online communities:</strong> Virtual connections can supplement in-person relationships</li>
              </ul>
            </div>
          </section>

          {/* Safety and Independence */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Maintaining Safety and Independence</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Home Safety</h3>
                <p className="text-gray-700 mb-3">
                  Making your home safe and accessible can help prevent falls and injuries while maintaining independence.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Fall Prevention</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Remove tripping hazards like loose rugs</li>
                      <li>• Install grab bars in bathrooms</li>
                      <li>• Improve lighting throughout the home</li>
                      <li>• Use non-slip mats in tubs and showers</li>
                      <li>• Keep stairs clear and well-lit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Accessibility Modifications</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Install ramps for wheelchair access</li>
                      <li>• Widen doorways if necessary</li>
                      <li>• Lower light switches and raise outlets</li>
                      <li>• Consider a medical alert system</li>
                      <li>• Ensure easy access to emergency phones</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-600 mb-3">Medication Management</h3>
                <p className="text-gray-700 mb-3">
                  Proper medication management becomes increasingly important with age as the number of prescriptions often increases.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Use pill organizers to track daily medications</li>
                  <li>• Keep an updated list of all medications</li>
                  <li>• Review medications regularly with healthcare providers</li>
                  <li>• Understand potential side effects and interactions</li>
                  <li>• Never stop medications without consulting your doctor</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Financial and Legal Planning */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Planning for the Future</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-600 mb-3">Financial and Legal Considerations</h3>
              <p className="text-gray-700 mb-3">
                Planning ahead for financial and healthcare decisions provides peace of mind and ensures your wishes are respected.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Financial Planning</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Review and update insurance policies</li>
                    <li>• Plan for long-term care costs</li>
                    <li>• Consider working with a financial advisor</li>
                    <li>• Protect against financial fraud</li>
                    <li>• Budget for changing needs in retirement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Documents</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Create or update your will</li>
                    <li>• Establish advance directives</li>
                    <li>• Designate power of attorney</li>
                    <li>• Consider a healthcare proxy</li>
                    <li>• Organize important documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Maintaining wellness in later life is a multifaceted endeavor that encompasses physical health, mental well-being, social connections, and practical planning. By taking proactive steps in each of these areas, older adults can maintain their independence, enhance their quality of life, and age with dignity and grace. Remember that it's never too late to start implementing healthy habits, and small changes can make a significant difference in overall well-being. The key is to find a balance that works for your individual circumstances and to stay engaged with life in meaningful ways.
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
