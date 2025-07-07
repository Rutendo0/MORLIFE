
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      date: "6/9/24",
      title: "UNDERSTANDING ANXIETY: EFFECTS, IDENTIFICATION, AND SCIENTIFICALLY PROVEN METHODS TO ALLEVIATE IT",
      image: "/images/image23.png",
      slug: "understanding-anxiety"
    },
    {
      id: 2,
      date: "4/1/24",
      title: "EFFECTIVE STRATEGIES FOR TREATING LOWER BACK PAIN",
      image: "/images/image24.png",
      slug: "treating-lower-back-pain"
    },
    {
      id: 3,
      date: "3/24/24",
      title: "UNDERSTANDING SCHIZOPHRENIA: SYMPTOMS, TREATMENTS, AND INSIGHTS",
      image: "/images/image25.png",
      slug: "understanding-schizophrenia"
    },
    {
      id: 4,
      date: "3/24/24",
      title: "PROVEN STRATEGIES FOR ENHANCING SLEEP QUALITY AND RESTORATION",
      image: "/images/image26.png",
      slug: "enhancing-sleep-quality"
    },
    {
      id: 5,
      date: "3/24/24",
      title: "MASTERING FIRST AID BASICS: ESSENTIAL SKILLS FOR HANDLING EMERGENCIES",
      image: "/images/image27.png",
      slug: "first-aid-basics"
    },
    {
      id: 6,
      date: "3/23/24",
      title: "PRIORITIZING WOMEN'S HEALTH: EVIDENCE-BASED PREVENTATIVE CARE AND SCREENINGS IN AFRICA",
      image: "/images/image28.png",
      slug: "womens-health-africa"
    },
    {
      id: 7,
      date: "3/23/24",
      title: "ESSENTIAL TIPS FOR MAINTAINING WELLNESS IN LATER LIFE",
      image: "/images/image29.png",
      slug: "wellness-later-life"
    },
    {
      id: 8,
      date: "3/23/24",
      title: "NAVIGATING THE STORM: PRACTICAL STRATEGIES FOR COPING WITH STRESS AND ANXIETY",
      image: "/images/image30.png",
      slug: "coping-stress-anxiety"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white">
              <div className="mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                
                <h2 className="text-xl font-light text-blue-600 leading-relaxed">
                  {post.title}
                </h2>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup Section */}
        <section className="bg-blue-600 text-white p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
                BRINGING HEALTH TO YOUR FINGERTIPS, ONE CLICK AT A TIME WITH MOLIFE MEDICAL SERVICES.
              </h2>
            </div>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
