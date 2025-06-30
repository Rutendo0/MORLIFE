
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
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> Quality sleep is fundamental to physical health, mental well-being, and overall quality of life. Poor sleep affects millions worldwide, impacting everything from immune function to cognitive performance. This article explores evidence-based strategies to improve sleep quality and achieve better restoration.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">The Importance of Sleep</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sleep plays a crucial role in physical health, brain function, and emotional well-being. During sleep, our bodies repair tissues, consolidate memories, and release important hormones for growth and appetite regulation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Poor sleep quality can lead to various health issues including cardiovascular disease, diabetes, weakened immune system, weight gain, and mental health disorders such as depression and anxiety.
            </p>
          </section>

          {/* Sleep Stages */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Understanding Sleep Stages</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">NREM Stage 1 (Light Sleep)</h3>
                <p className="text-gray-700">Transition from wakefulness to sleep. Easily awakened during this stage.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">NREM Stage 2 (True Sleep)</h3>
                <p className="text-gray-700">Brain waves slow down, body temperature drops, heart rate decreases.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">NREM Stage 3 (Deep Sleep)</h3>
                <p className="text-gray-700">Most restorative stage. Physical repair, immune system strengthening occurs.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">REM Sleep</h3>
                <p className="text-gray-700">Brain activity increases, dreaming occurs, memory consolidation happens.</p>
              </div>
            </div>
          </section>

          {/* Sleep Hygiene */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Sleep Hygiene: Foundation for Better Sleep</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">1. Maintain a Consistent Sleep Schedule</h3>
                <p className="text-gray-700 mb-3">
                  Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Set a regular bedtime and stick to it</li>
                  <li>• Avoid sleeping in, even after poor sleep</li>
                  <li>• Use light exposure to reinforce your schedule</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">2. Create an Optimal Sleep Environment</h3>
                <p className="text-gray-700 mb-3">
                  Your bedroom should be a sanctuary for sleep - cool, dark, and quiet.
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Keep temperature between 60-67°F (15-19°C)</li>
                  <li>• Use blackout curtains or eye masks</li>
                  <li>• Minimize noise with earplugs or white noise</li>
                  <li>• Invest in a comfortable mattress and pillows</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">3. Develop a Pre-Sleep Routine</h3>
                <p className="text-gray-700 mb-3">
                  A relaxing bedtime routine signals to your body that it's time to wind down.
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Start routine 30-60 minutes before bed</li>
                  <li>• Include calming activities like reading or gentle stretching</li>
                  <li>• Avoid stimulating activities and bright screens</li>
                  <li>• Consider relaxation techniques like meditation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lifestyle Factors */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Lifestyle Factors That Affect Sleep</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-3">Diet and Sleep</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Avoid large meals 2-3 hours before bed</li>
                  <li>• Limit caffeine after 2 PM</li>
                  <li>• Avoid alcohol before bedtime</li>
                  <li>• Consider foods rich in tryptophan and magnesium</li>
                  <li>• Stay hydrated, but not right before bed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-600 mb-3">Exercise and Sleep</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Regular exercise improves sleep quality</li>
                  <li>• Avoid vigorous exercise 3 hours before bed</li>
                  <li>• Morning or afternoon workouts are ideal</li>
                  <li>• Even light exercise can be beneficial</li>
                  <li>• Consistency is more important than intensity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology and Sleep */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Technology for Better Sleep</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Blue light from screens can interfere with your body's production of melatonin, the hormone that regulates sleep-wake cycles.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Screen Time Guidelines</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Avoid screens 1 hour before bed</li>
                    <li>• Use blue light filters in the evening</li>
                    <li>• Keep devices out of the bedroom</li>
                    <li>• Use airplane mode if phone must be nearby</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Alternatives to Screen Time</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Read a physical book</li>
                    <li>• Practice gentle yoga or stretching</li>
                    <li>• Listen to calming music or podcasts</li>
                    <li>• Write in a journal</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sleep Disorders */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Sleep Disorders</h2>
            <p className="text-gray-700 mb-4">
              If you consistently follow good sleep hygiene but still experience poor sleep, you may have a sleep disorder that requires medical attention.
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Sleep Apnea</h3>
                <p className="text-gray-700 text-sm">Breathing repeatedly stops and starts during sleep, often accompanied by loud snoring.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Insomnia</h3>
                <p className="text-gray-700 text-sm">Difficulty falling asleep, staying asleep, or waking up too early.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Restless Leg Syndrome</h3>
                <p className="text-gray-700 text-sm">Uncomfortable sensations in the legs that create an urge to move them.</p>
              </div>
            </div>
          </section>

          {/* Natural Sleep Aids */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Natural Sleep Enhancement Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Relaxation Techniques</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Progressive muscle relaxation</li>
                    <li>• Deep breathing exercises</li>
                    <li>• Meditation and mindfulness</li>
                    <li>• Visualization techniques</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Natural Supplements</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Melatonin (consult healthcare provider)</li>
                    <li>• Magnesium</li>
                    <li>• Chamomile tea</li>
                    <li>• Valerian root</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Improving sleep quality requires a comprehensive approach that includes good sleep hygiene, lifestyle modifications, and creating an optimal sleep environment. While it may take time to see improvements, consistently applying these evidence-based strategies can significantly enhance your sleep quality and overall health. If sleep problems persist despite these efforts, consult with a healthcare provider to rule out underlying sleep disorders.
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
