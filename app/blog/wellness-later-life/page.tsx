import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

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
              src="/images/image29.jpeg"
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
              <strong>Introduction:</strong> As we journey through life, aging is an inevitable and natural process that brings with it unique challenges and opportunities. While aging is a part of life, it doesn't mean that we have to resign ourselves to decline. In fact, with the right mindset and lifestyle choices, we can embrace healthy aging and enjoy a fulfilling and vibrant later life.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg space-y-6">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <Image
                  src="/images/image49.jpg"
                  alt="Women's health in Africa illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {[
              {
                title: "1. Stay Active",
                text: "Physical activity is key to healthy aging. Regular exercise helps maintain muscle strength and flexibility, and supports cardiovascular health and cognitive function.",
              },
              {
                title: "2. Prioritize Nutrition",
                text: "A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats supports bone, heart, and brain health in later life.",
              },
              {
                title: "3. Maintain Social Connections",
                text: "Social connections are vital for mental and emotional well-being. Engage with friends, family, and communities to avoid loneliness.",
              },
              {
                title: "4. Prioritize Sleep",
                text: "Quality sleep is essential for vitality. Aim for 7–9 hours of sleep with good habits like consistent schedules and a peaceful environment.",
              },
              {
                title: "5. Manage Stress",
                text: "Chronic stress impacts health. Use techniques like meditation, breathing exercises, or time in nature to stay balanced.",
              },
              {
                title: "6. Stay Mentally Active",
                text: "Challenge your brain with new learning, hobbies, or puzzles to preserve cognitive function and prevent decline.",
              },
              {
                title: "7. Regular Health Check-ups",
                text: "Routine visits help detect issues early and manage chronic conditions effectively.",
              },
            ].map((item, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                <strong>{item.title}:</strong> {item.text}
              </p>
            ))}

            <div className="flex justify-center">
              <Image
                src="/images/image50.jpg"
                alt="Ergonomic workspace setup"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Healthy aging is achievable with the right mindset and habits. Stay active, eat well, connect with others, sleep properly, manage stress, and keep both body and mind engaged for a vibrant later life.
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
  );
}

