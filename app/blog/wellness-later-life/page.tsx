"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark, Heart,
  Eye, ChevronUp, Facebook, Twitter, Linkedin, Copy, Check, Users,
  Lightbulb, Shield, Target, BookOpen, Tag, Activity, Brain, Zap
} from "lucide-react"
import { useState, useEffect } from "react"

export default function WellnessLaterLifePage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(167)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = "Essential Tips for Maintaining Wellness in Later Life"
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
    setShowShareMenu(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const articleData = {
    title: "Essential Tips for Maintaining Wellness in Later Life",
    author: "MORLIFE Team",
    publishDate: "December 5, 2023",
    readTime: "7 min read",
    category: "Healthy Aging",
    tags: ["aging", "wellness", "health", "lifestyle", "seniors"],
    views: "2.9k",
    image: "/images/image29.jpeg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <Header />

      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Wellness in Later Life</span>
        </nav>

        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Users className="w-3 h-3" />
                {articleData.category}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">{articleData.author}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{articleData.publishDate}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{articleData.readTime}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Eye className="w-3 h-3" />
                  <span>{articleData.views} views</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likeCount}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    isBookmarked 
                      ? 'bg-amber-50 text-amber-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>Save</span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all duration-300 text-xs font-medium"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>

                  {showShareMenu && (
                    <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 z-10 min-w-40">
                      <div className="space-y-1">
                        <button onClick={() => handleShare('facebook')} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm">
                          <Facebook className="w-4 h-4 text-blue-600" />
                          <span>Facebook</span>
                        </button>
                        <button onClick={() => handleShare('twitter')} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm">
                          <Twitter className="w-4 h-4 text-sky-500" />
                          <span>Twitter</span>
                        </button>
                        <button onClick={() => handleShare('linkedin')} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm">
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          <span>LinkedIn</span>
                        </button>
                        <button onClick={() => handleShare('copy')} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm">
                          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:w-80 flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-48 lg:h-full">
                <Image
                  src={articleData.image}
                  alt="Wellness in later life"
                  width={320}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-amber-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-amber-600 pl-3">Introduction</a>
                <a href="#physical-wellness" className="block text-slate-600 hover:text-amber-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-amber-600 pl-3">Physical Wellness</a>
                <a href="#mental-health" className="block text-slate-600 hover:text-amber-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-amber-600 pl-3">Mental Health</a>
                <a href="#social-connections" className="block text-slate-600 hover:text-amber-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-amber-600 pl-3">Social Connections</a>
                <a href="#conclusion" className="block text-slate-600 hover:text-amber-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-amber-600 pl-3">Conclusion</a>
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-12">
              
              <section id="introduction" className="mb-12">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  As we journey through life, aging is an inevitable and natural process that brings with it unique challenges and opportunities. While aging is a part of life, it doesn't mean that we have to resign ourselves to decline. In fact, with the right mindset and lifestyle choices, we can embrace healthy aging and enjoy a fulfilling and vibrant later life.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Focus</h4>
                      <p className="text-slate-700 text-sm">
                        This guide explores essential strategies for maintaining physical, mental, and social wellness as we age, promoting a vibrant and fulfilling later life.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="physical-wellness" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Activity className="w-8 h-8 text-emerald-600" />
                  Physical Wellness
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image49.jpg"
                    alt="Physical wellness in later life"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Maintaining physical health is crucial for independence and quality of life in later years. Regular exercise, proper nutrition, and preventive healthcare form the foundation of physical wellness.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Exercise & Movement</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regular walking or swimming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Strength training exercises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Balance and flexibility work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Tai chi or yoga practice</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Nutrition & Health</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Balanced, nutrient-rich diet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regular health screenings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Medication management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Adequate sleep and rest</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="mental-health" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                  Mental Health & Cognitive Wellness
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Mental health and cognitive function are essential components of healthy aging. Staying mentally active, managing stress, and maintaining emotional well-being contribute significantly to quality of life.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Strategies for Mental Wellness</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Cognitive Stimulation:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Reading and learning new skills</li>
                        <li>• Puzzles and brain games</li>
                        <li>• Creative activities and hobbies</li>
                        <li>• Lifelong learning opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Emotional Well-being:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Stress management techniques</li>
                        <li>• Mindfulness and meditation</li>
                        <li>• Professional counseling when needed</li>
                        <li>• Maintaining purpose and meaning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="social-connections" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-pink-600" />
                  Social Connections & Community
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Strong social connections are vital for healthy aging. Maintaining relationships, staying engaged with community, and building new connections contribute to both mental and physical health.
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Building Social Wellness</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Maintain regular contact with family and friends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Participate in community activities and volunteer work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Join clubs, groups, or organizations aligned with interests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Embrace technology to stay connected with loved ones</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Maintaining wellness in later life is about embracing a holistic approach that encompasses physical health, mental well-being, and social connections. By staying active, engaged, and connected, we can age gracefully and continue to lead fulfilling lives regardless of our chronological age.
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular physical activity is essential for maintaining independence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mental stimulation and emotional well-being are crucial for cognitive health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Social connections significantly impact both mental and physical health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Preventive healthcare and regular screenings are vital</span>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-2 rounded-full text-sm font-medium">
                      <Tag className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        <section className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <Link href="/blog/womens-health-africa" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                Women's Health in Africa: Challenges and Solutions
              </h3>
            </Link>
            
            <Link href="/blog/coping-stress-anxiety" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors text-right">
                Coping with Stress and Anxiety: Practical Strategies
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}