
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
           Mental health matters
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/image30.jpeg"
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
              In the hustle and bustle of modern life, it's easy to feel like we're sailing through stormy seas. Waves of stress and anxiety crash over us, threatening to capsize our mental well-being. Yet, amidst the tumult, there are ways to navigate these turbulent waters and find moments of calm. As someone who has weathered my fair share of storms, I've learned a thing or two about coping with stress and anxiety. So, grab a life jacket, and let's embark on this journey together.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">

            <div className="flex justify-center mb-8">
                          <Image
                            src="/images/image51.jpg"
                            alt="Ergonomic workspace setup"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
           
            <p className="text-gray-700 leading-relaxed mb-4">
             1. Embrace the Power of Pause: In the midst of chaos, it's essential to carve out moments of stillness. Take a deep breath, close your eyes, and let yourself be present in the moment. Whether it's through meditation, mindfulness, or simply taking a walk in nature, find what helps you anchor yourself amidst the storm.
            </p>
            <p>
              2.Practice Self-Compassion: Too often, we're our own harshest critics. Instead of berating yourself for feeling stressed or anxious, extend yourself the same kindness and compassion you would to a friend. Acknowledge your feelings without judgment, and remind yourself that it's okay not to be okay.
            </p>
            <p>
              3. Seek Support: You don't have to weather the storm alone. Reach out to friends, family, or a trusted therapist who can offer a listening ear and words of encouragement. Sometimes, just knowing that someone is there to support you can make all the difference.
            </p>
            <p>
              4.Find Your Anchor Activities: Whether it's journaling, painting, or playing music, find activities that anchor you and provide a sense of solace. Engaging in hobbies that bring you joy can serve as a lifeline during times of stress and anxiety.
            </p>
            <p>
              5. Set Boundaries: In a world that's constantly vying for our attention, it's essential to set boundaries and prioritize self-care. Learn to say no to commitments that drain your energy and leave you feeling overwhelmed. Remember, it's okay to put yourself first.
            </p>
            <p>
              6.Focus on What You Can Control: In the midst of uncertainty, focus on the things that are within your control. Break tasks down into manageable steps, and tackle them one at a time. By taking proactive steps towards solutions, you can regain a sense of agency and empowerment.
            </p>
            <p>
              7.Practice Gratitude: Amidst the storm clouds, there are always silver linings to be found. Take a moment each day to reflect on the things you're grateful for, whether it's a warm cup of tea, a phone call with a loved one, or a beautiful sunset. Cultivating a mindset of gratitude can help shift your perspective and bring moments of light into even the darkest of days.
            </p>
            <div className="grid md:grid-cols-2 gap-6">

               <div className="flex justify-center mb-8">
                            <Image
                              src="/images/image52.jpeg"
                              alt="Ergonomic workspace setup"
                              width={500}
                              height={300}
                              className="rounded-lg shadow-lg"
                            />
                          </div> 
                 </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Remember, navigating the storm of stress and anxiety is a journey, not a destination. Be patient with yourself, and allow yourself grace as you navigate the highs and lows of life. By embracing these strategies and leaning into the support of others, you can weather the storm and emerge stronger on the other side. So, batten down the hatches, my friend, and let's sail through this together.
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
