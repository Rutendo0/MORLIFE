
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
              <strong>Introduction:</strong> In today's fast-paced world, stress and anxiety have become increasingly common companions in our daily lives. While these responses are natural and sometimes helpful, chronic stress and persistent anxiety can significantly impact our physical health, mental well-being, and overall quality of life. Learning practical strategies to manage these challenges is essential for maintaining mental health and building resilience.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Understanding Stress and Anxiety</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While stress and anxiety are normal responses to challenging situations, chronic stress and anxiety can significantly impact physical and mental health. Understanding the difference between normal stress responses and problematic anxiety is crucial for managing these conditions effectively.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Stress</h3>
                <p className="text-gray-700 text-sm">
                  A natural response to external pressures or demands. Usually temporary and linked to specific situations or events.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Anxiety</h3>
                <p className="text-gray-700 text-sm">
                  Persistent worry or fear about future events, often without a clear trigger. Can be ongoing and interfere with daily activities.
                </p>
              </div>
            </div>
          </section>

          {/* Physical Signs */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recognizing the Signs</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-3">Physical Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Rapid heartbeat or palpitations</li>
                    <li>• Sweating or clamminess</li>
                    <li>• Muscle tension and aches</li>
                    <li>• Headaches</li>
                    <li>• Digestive issues</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Fatigue and exhaustion</li>
                    <li>• Difficulty sleeping</li>
                    <li>• Changes in appetite</li>
                    <li>• Shortness of breath</li>
                    <li>• Dizziness or lightheadedness</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-700 mb-3">Emotional and Mental Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Persistent worry or fear</li>
                    <li>• Irritability or mood swings</li>
                    <li>• Feeling overwhelmed</li>
                    <li>• Difficulty concentrating</li>
                    <li>• Racing thoughts</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Restlessness or feeling on edge</li>
                    <li>• Sense of impending doom</li>
                    <li>• Indecisiveness</li>
                    <li>• Low self-esteem</li>
                    <li>• Social withdrawal</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Immediate Coping Strategies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Immediate Coping Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-3">1. Breathing Techniques</h3>
                <p className="text-gray-700 mb-3">
                  Controlled breathing is one of the most effective immediate tools for managing stress and anxiety.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">4-7-8 Breathing</h4>
                    <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                      <li>Inhale through your nose for 4 counts</li>
                      <li>Hold your breath for 7 counts</li>
                      <li>Exhale through your mouth for 8 counts</li>
                      <li>Repeat 3-4 times</li>
                    </ol>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Box Breathing</h4>
                    <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                      <li>Inhale for 4 counts</li>
                      <li>Hold for 4 counts</li>
                      <li>Exhale for 4 counts</li>
                      <li>Hold empty for 4 counts</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">2. Grounding Techniques</h3>
                <p className="text-gray-700 mb-3">
                  Grounding helps bring your attention back to the present moment and away from anxious thoughts.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">5-4-3-2-1 Technique</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 5 things you can see</li>
                      <li>• 4 things you can touch</li>
                      <li>• 3 things you can hear</li>
                      <li>• 2 things you can smell</li>
                      <li>• 1 thing you can taste</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Physical Grounding</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Feel your feet on the ground</li>
                      <li>• Hold a cold object or ice cube</li>
                      <li>• Splash cold water on your face</li>
                      <li>• Do gentle stretching or movement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-3">3. Progressive Muscle Relaxation</h3>
                <p className="text-gray-700 mb-3">
                  This technique involves systematically tensing and releasing muscle groups to promote physical relaxation.
                </p>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Start with your toes, tense for 5 seconds, then release</li>
                  <li>Move up through your legs, abdomen, arms, and face</li>
                  <li>Hold tension briefly, then let go completely</li>
                  <li>Notice the difference between tension and relaxation</li>
                  <li>End with a few deep breaths</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Long-term Strategies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Long-term Management Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-3">1. Lifestyle Modifications</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Exercise and Movement</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Aim for 30 minutes of activity daily</li>
                      <li>• Try walking, swimming, or cycling</li>
                      <li>• Include yoga or tai chi for mind-body benefits</li>
                      <li>• Find activities you enjoy</li>
                      <li>• Start small and build gradually</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sleep Hygiene</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Maintain consistent sleep schedule</li>
                      <li>• Create a relaxing bedtime routine</li>
                      <li>• Limit screen time before bed</li>
                      <li>• Keep bedroom cool and dark</li>
                      <li>• Avoid caffeine and alcohol before sleep</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-teal-600 mb-3">2. Nutrition and Stress</h3>
                <p className="text-gray-700 mb-3">
                  What we eat can significantly impact our stress levels and ability to cope with anxiety.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Stress-Fighting Foods</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Omega-3 rich fish (salmon, sardines)</li>
                      <li>• Complex carbohydrates (whole grains)</li>
                      <li>• Magnesium-rich foods (leafy greens, nuts)</li>
                      <li>• Probiotic foods (yogurt, kefir)</li>
                      <li>• Antioxidant-rich fruits and vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Foods to Limit</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Excessive caffeine</li>
                      <li>• Processed and sugary foods</li>
                      <li>• Alcohol</li>
                      <li>• High-sodium foods</li>
                      <li>• Artificial additives and preservatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-3">3. Mindfulness and Meditation</h3>
                <p className="text-gray-700 mb-3">
                  Regular mindfulness practice can help reduce anxiety, improve emotional regulation, and build resilience.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Getting Started with Meditation</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Start with just 5-10 minutes daily</li>
                      <li>• Use guided meditation apps or videos</li>
                      <li>• Focus on breath awareness or body scanning</li>
                      <li>• Practice at the same time each day</li>
                      <li>• Be patient and non-judgmental with yourself</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mindful Daily Activities</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Mindful eating: pay attention to taste and texture</li>
                      <li>• Mindful walking: focus on each step and surroundings</li>
                      <li>• Mindful listening: give full attention to sounds</li>
                      <li>• Mindful breathing: notice breath throughout the day</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cognitive Strategies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cognitive Strategies for Managing Anxious Thoughts</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-700 mb-3">1. Challenging Negative Thoughts</h3>
                <p className="text-gray-700 mb-3">
                  Learning to identify and challenge unhelpful thought patterns is a key component of managing anxiety.
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Questions to Ask Yourself</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Is this thought realistic or helpful?</li>
                      <li>• What evidence supports or contradicts this thought?</li>
                      <li>• What would I tell a friend in this situation?</li>
                      <li>• What's the worst that could realistically happen?</li>
                      <li>• How might I view this differently?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="font-semibold text-pink-600 mb-3">2. Worry Time Technique</h3>
                <p className="text-gray-700 mb-3">
                  Set aside specific time for worrying to prevent anxious thoughts from dominating your entire day.
                </p>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Schedule 15-20 minutes daily as "worry time"</li>
                  <li>When anxious thoughts arise, write them down for later</li>
                  <li>During worry time, review your list and problem-solve</li>
                  <li>Distinguish between solvable and unsolvable worries</li>
                  <li>End worry time with a positive or calming activity</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">3. Acceptance and Letting Go</h3>
                <p className="text-gray-700 mb-3">
                  Learning to accept uncertainty and let go of what you can't control is crucial for managing anxiety.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Focus on what you can influence rather than what you can't</li>
                  <li>• Practice self-compassion and avoid self-criticism</li>
                  <li>• Accept that some anxiety is normal and temporary</li>
                  <li>• Use phrases like "This feeling will pass" or "I can handle this"</li>
                  <li>• Remember that perfection is not necessary or realistic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Social Support */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Building and Using Social Support</h2>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-semibold text-emerald-600 mb-3">The Power of Connection</h3>
              <p className="text-gray-700 mb-4">
                Strong social connections can significantly reduce stress and provide emotional support during difficult times.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Building Support Networks</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Maintain regular contact with family and friends</li>
                    <li>• Join clubs or groups with shared interests</li>
                    <li>• Consider support groups for specific challenges</li>
                    <li>• Volunteer or help others in your community</li>
                    <li>• Be open about your struggles with trusted people</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Using Support Effectively</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Ask for specific help when needed</li>
                    <li>• Listen actively and offer support to others</li>
                    <li>• Set boundaries in relationships</li>
                    <li>• Express gratitude for support received</li>
                    <li>• Remember that asking for help is a sign of strength</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Help */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">When to Seek Professional Help</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-red-600 mb-3">Warning Signs</h3>
              <p className="text-gray-700 mb-3">
                Consider professional help if you experience:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Persistent anxiety that interferes with daily activities</li>
                <li>• Panic attacks or intense fear responses</li>
                <li>• Avoidance of normal activities due to anxiety</li>
                <li>• Difficulty functioning at work, school, or in relationships</li>
                <li>• Thoughts of self-harm or suicide</li>
                <li>• Substance use as a way to cope</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-3">Types of Professional Support</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Therapy Options</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Cognitive Behavioral Therapy (CBT)</li>
                    <li>• Acceptance and Commitment Therapy (ACT)</li>
                    <li>• Mindfulness-Based Stress Reduction (MBSR)</li>
                    <li>• Dialectical Behavior Therapy (DBT)</li>
                    <li>• EMDR for trauma-related anxiety</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Healthcare Providers</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Primary care physicians</li>
                    <li>• Licensed therapists and counselors</li>
                    <li>• Psychiatrists for medication management</li>
                    <li>• Support groups and peer counselors</li>
                    <li>• Crisis hotlines for immediate support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Coping with stress and anxiety is a journey that requires patience, practice, and self-compassion. While these feelings can be overwhelming, remember that effective strategies exist and help is available. Start with small, manageable changes and gradually build your toolkit of coping strategies. What works best will vary from person to person, so be willing to experiment and find what resonates with you. Most importantly, remember that seeking help is a sign of strength, not weakness, and that you don't have to navigate these challenges alone. With the right combination of self-care strategies, social support, and professional help when needed, it's possible to manage stress and anxiety effectively and live a fulfilling life.
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
