
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
              src="/images/image23.png"
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
              <strong>Introduction:</strong> Anxiety is a prevalent mental health condition affecting millions of people worldwide. Characterized by excessive worry, fear, and nervousness, it can significantly impact daily life. Understanding the effects of anxiety and identifying it in oneself or others is crucial for seeking and providing the right support. This article delves into the effects of anxiety, how to recognize it, and scientifically proven methods to alleviate it..
            </p>
          </section>

          {/* What is Anxiety Section */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">What is Anxiety?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anxiety is a natural stress response that can become problematic when it's persistent, excessive, and interferes with daily activities. It involves feelings of worry, fear, and apprehension about future events or situations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While everyone experiences anxiety occasionally, anxiety disorders are characterized by excessive fear or worry that significantly impacts a person's ability to function in daily life.
            </p>
          </section>

          {/* Types of Anxiety Disorders */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Types of Anxiety Disorders</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Generalized Anxiety Disorder (GAD)</h3>
                <p className="text-gray-700">Persistent and excessive worry about various aspects of life, often without a specific trigger.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Panic Disorder</h3>
                <p className="text-gray-700">Recurrent panic attacks characterized by intense fear and physical symptoms like rapid heartbeat and shortness of breath.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Social Anxiety Disorder</h3>
                <p className="text-gray-700">Intense fear of social situations and being judged or embarrassed by others.</p>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recognizing Anxiety Symptoms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Physical Symptoms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Rapid heartbeat</li>
                  <li>Sweating</li>
                  <li>Trembling or shaking</li>
                  <li>Shortness of breath</li>
                  <li>Muscle tension</li>
                  <li>Fatigue</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Emotional Symptoms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Excessive worry</li>
                  <li>Restlessness</li>
                  <li>Irritability</li>
                  <li>Difficulty concentrating</li>
                  <li>Fear of losing control</li>
                  <li>Sleep disturbances</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Treatment Methods */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Evidence-Based Treatment Methods</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">1. Cognitive Behavioral Therapy (CBT)</h3>
                <p className="text-gray-700">
                  CBT is one of the most effective treatments for anxiety disorders. It helps individuals identify and change negative thought patterns and behaviors that contribute to anxiety.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">2. Mindfulness and Meditation</h3>
                <p className="text-gray-700">
                  Regular mindfulness practice has been shown to reduce anxiety symptoms by helping individuals stay present and develop a healthier relationship with their thoughts.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">3. Regular Exercise</h3>
                <p className="text-gray-700">
                  Physical activity releases endorphins and helps reduce stress hormones, making it an effective natural anxiety reducer.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">4. Medication</h3>
                <p className="text-gray-700">
                  When prescribed by healthcare professionals, anti-anxiety medications and antidepressants can be effective for managing severe anxiety symptoms.
                </p>
              </div>
            </div>
          </section>

          {/* Self-Help Strategies */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Self-Help Strategies</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Practice deep breathing exercises</li>
              <li>• Maintain a regular sleep schedule</li>
              <li>• Limit caffeine and alcohol intake</li>
              <li>• Connect with supportive friends and family</li>
              <li>• Challenge negative thoughts</li>
              <li>• Engage in relaxing activities</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Understanding anxiety is the first step toward managing it effectively. With proper identification, evidence-based treatments, and self-help strategies, individuals can learn to manage their anxiety and improve their quality of life. If you're experiencing persistent anxiety that interferes with daily activities, don't hesitate to seek professional help.
            </p>
          </section>
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
