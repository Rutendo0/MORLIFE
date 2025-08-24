"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark, Heart,
  Eye, ChevronUp, Facebook, Twitter, Linkedin, Copy, Check, Brain,
  Lightbulb, Shield, Target, BookOpen, Tag, Activity, Zap, Users
} from "lucide-react"
import { useState, useEffect } from "react"

export default function CopingStressAnxietyPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(312)
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
    const title = "Coping with Stress and Anxiety: Practical Strategies for Mental Wellness"
    
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
    title: "Coping with Stress and Anxiety: Practical Strategies for Mental Wellness",
    author: "MORLIFE Team",
    publishDate: "November 20, 2023",
    readTime: "9 min read",
    category: "Mental Health",
    tags: ["stress", "anxiety", "mental health", "coping strategies", "wellness"],
    views: "5.1k",
    image: "/images/image30.jpeg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <Header />

      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Coping with Stress & Anxiety</span>
        </nav>

        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Brain className="w-3 h-3" />
                {articleData.category}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-teal-50 text-teal-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600'
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
                  alt="Coping with stress and anxiety"
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
                <BookOpen className="w-5 h-5 text-teal-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-teal-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-teal-600 pl-3">Introduction</a>
                <a href="#understanding-stress" className="block text-slate-600 hover:text-teal-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-teal-600 pl-3">Understanding Stress</a>
                <a href="#coping-strategies" className="block text-slate-600 hover:text-teal-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-teal-600 pl-3">Coping Strategies</a>
                <a href="#building-resilience" className="block text-slate-600 hover:text-teal-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-teal-600 pl-3">Building Resilience</a>
                <a href="#conclusion" className="block text-slate-600 hover:text-teal-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-teal-600 pl-3">Conclusion</a>
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-12">
              
              <section id="introduction" className="mb-12">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  In the hustle and bustle of modern life, it's easy to feel like we're sailing through stormy seas. Waves of stress and anxiety crash over us, threatening to capsize our mental well-being. Yet, amidst the tumult, there are ways to navigate these turbulent waters and find moments of calm.
                </p>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Journey Together</h4>
                      <p className="text-slate-700 text-sm">
                        As someone who has weathered their fair share of storms, this guide offers practical strategies for managing stress and anxiety in daily life.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="understanding-stress" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                  Understanding Stress and Anxiety
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Before we can effectively manage stress and anxiety, it's important to understand what they are and how they affect us. Stress is our body's natural response to challenges, while anxiety is our mind's way of anticipating future threats.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Signs of Stress</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Physical tension and headaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Difficulty sleeping or concentrating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Irritability and mood changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Changes in appetite or energy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Anxiety Symptoms</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Persistent worry or fear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Racing thoughts or mind going blank</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Physical symptoms like rapid heartbeat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Avoidance of certain situations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="coping-strategies" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-emerald-600" />
                  Practical Coping Strategies
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  Effective stress and anxiety management involves a toolkit of strategies that you can use in different situations. Here are evidence-based techniques that can help you navigate challenging moments.
                </p>

                <div className="space-y-8">
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Breathing Techniques</h3>
                    <p className="text-slate-700 mb-4">
                      Deep breathing is one of the most accessible and effective tools for managing stress and anxiety in the moment.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">4-7-8 Breathing Exercise:</h4>
                      <ol className="space-y-1 text-slate-700 text-sm">
                        <li>1. Inhale through your nose for 4 counts</li>
                        <li>2. Hold your breath for 7 counts</li>
                        <li>3. Exhale through your mouth for 8 counts</li>
                        <li>4. Repeat 3-4 times</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Mindfulness and Grounding</h3>
                    <p className="text-slate-700 mb-4">
                      Mindfulness helps anchor you in the present moment, reducing anxiety about the future or regrets about the past.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">5-4-3-2-1 Grounding Technique:</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• 5 things you can see</li>
                        <li>• 4 things you can touch</li>
                        <li>• 3 things you can hear</li>
                        <li>• 2 things you can smell</li>
                        <li>• 1 thing you can taste</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Physical Activity</h3>
                    <p className="text-slate-700 mb-4">
                      Regular exercise is one of the most effective ways to reduce stress hormones and boost mood-enhancing chemicals.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Quick Stress Busters:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• 10-minute walk</li>
                          <li>• Stretching or yoga</li>
                          <li>• Dancing to favorite music</li>
                          <li>• Jumping jacks or push-ups</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Long-term Benefits:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Improved sleep quality</li>
                          <li>• Better stress resilience</li>
                          <li>• Enhanced mood regulation</li>
                          <li>• Increased self-confidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="building-resilience" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-indigo-600" />
                  Building Long-term Resilience
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  While coping strategies help in the moment, building resilience creates a strong foundation for handling future challenges with greater ease and confidence.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Resilience Building Blocks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Self-Care Practices:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Maintain regular sleep schedule</li>
                        <li>• Eat nutritious, balanced meals</li>
                        <li>• Set healthy boundaries</li>
                        <li>• Practice self-compassion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Social Support:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Maintain close relationships</li>
                        <li>• Join support groups or communities</li>
                        <li>• Practice open communication</li>
                        <li>• Seek professional help when needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Remember, managing stress and anxiety is not about eliminating these feelings entirely—they're natural parts of the human experience. Instead, it's about developing the tools and resilience to navigate life's challenges with greater ease and self-compassion.
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stress and anxiety are normal responses that can be managed effectively</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Breathing techniques and mindfulness provide immediate relief</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular exercise and self-care build long-term resilience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Social support and professional help are valuable resources</span>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">
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
            <Link href="/blog/wellness-later-life" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                Essential Tips for Maintaining Wellness in Later Life
              </h3>
            </Link>
            
            <Link href="/blog/understanding-anxiety" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors text-right">
                Understanding Anxiety: Effects, Identification, and Methods to Alleviate It
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}