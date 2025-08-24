"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  Heart,
  MessageCircle,
  Eye,
  ChevronUp,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Moon,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  Quote,
  Tag,
  Zap,
  Users,
  Activity,
  Bed,
  Sun,
  Coffee,
  Smartphone,
  Home
} from "lucide-react"
import { useState, useEffect } from "react"

export default function EnhancingSleepQualityPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(203)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Reading progress tracking
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
    const title = "Proven Strategies for Enhancing Sleep Quality and Restoration"
    
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
    title: "Proven Strategies for Enhancing Sleep Quality and Restoration",
    author: "MORLIFE Team",
    publishDate: "March 18, 2024",
    readTime: "6 min read",
    category: "Sleep & Wellness",
    tags: ["sleep", "wellness", "health", "restoration", "lifestyle"],
    views: "2.7k",
    image: "/images/image26.jpg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Enhancing Sleep Quality</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Moon className="w-3 h-3" />
                {articleData.category}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              {/* Compact Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center">
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

              {/* Compact Action Buttons */}
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
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
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
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm"
                        >
                          <Twitter className="w-4 h-4 text-sky-500" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-left text-sm"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-600" />
                          )}
                          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Compact Featured Image */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-48 lg:h-full">
                <Image
                  src={articleData.image}
                  alt="Sleep quality enhancement"
                  width={320}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Introduction
                </a>
                <a href="#sleep-schedule" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Consistent Sleep Schedule
                </a>
                <a href="#bedtime-routine" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Bedtime Routine
                </a>
                <a href="#sleep-environment" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Sleep Environment
                </a>
                <a href="#blue-light" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Blue Light Management
                </a>
                <a href="#diet-hydration" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Diet & Hydration
                </a>
                <a href="#stress-management" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Stress Management
                </a>
                <a href="#professional-help" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Professional Help
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-indigo-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-indigo-600 pl-3">
                  Conclusion
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-3 prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-12">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Sleep is the cornerstone of optimal health and well-being, yet many of us struggle to 
                  achieve restful and rejuvenating slumber. Fortunately, there are evidence-based strategies 
                  that can help improve sleep quality, allowing you to wake up feeling refreshed and revitalized.
                </p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Takeaway</h4>
                      <p className="text-slate-700 text-sm">
                        This comprehensive guide explores actionable tips supported by medical research 
                        to enhance your sleep quality and promote better rest and recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sleep Schedule Section */}
              <section id="sleep-schedule" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-indigo-600" />
                  1. Establish a Consistent Sleep Schedule
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image43.jpg"
                    alt="Sleep schedule consistency"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Research published in the <strong>Journal of Clinical Sleep Medicine</strong> highlights 
                  the importance of maintaining a regular sleep-wake cycle for optimal sleep quality. Your 
                  body's internal clock, or circadian rhythm, thrives on consistency.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Implementation Tips</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Go to bed and wake up at the same time every day, even on weekends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gradually adjust your schedule by 15-30 minutes if changes are needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use natural light exposure to help regulate your circadian rhythm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Be patient - it takes 2-3 weeks to establish a new sleep pattern</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Bedtime Routine Section */}
              <section id="bedtime-routine" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Bed className="w-8 h-8 text-purple-600" />
                  2. Create a Relaxing Bedtime Routine
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Engaging in relaxing activities before bedtime can signal to your body that it's time 
                  to wind down and prepare for sleep. A consistent routine helps transition your mind 
                  and body from the day's activities to a restful state.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Effective Bedtime Activities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Relaxation Techniques:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Gentle stretching or yoga</li>
                        <li>• Deep breathing exercises</li>
                        <li>• Progressive muscle relaxation</li>
                        <li>• Meditation or mindfulness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Calming Activities:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Reading a book</li>
                        <li>• Listening to soft music</li>
                        <li>• Taking a warm bath</li>
                        <li>• Writing in a journal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sleep Environment Section */}
              <section id="sleep-environment" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Home className="w-8 h-8 text-emerald-600" />
                  3. Optimize Your Sleep Environment
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Your sleep environment plays a significant role in determining the quality of your sleep. 
                  Research published in <strong>Sleep Health</strong> emphasizes the importance of creating 
                  a comfortable and conducive sleep environment.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Temperature & Air Quality</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Keep bedroom temperature between 60-67°F (15-19°C)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ensure good ventilation and air circulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Consider using a fan or air purifier</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Light & Sound Control</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Use blackout curtains or eye masks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Minimize noise with earplugs or white noise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Remove electronic devices from bedroom</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Comfort Essentials</h3>
                  <p className="text-slate-700 mb-4">
                    Invest in quality sleep essentials that support proper sleep posture and alignment:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>A supportive mattress that suits your sleeping position</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Pillows that maintain proper neck alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Breathable, comfortable bedding materials</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Blue Light Section */}
              <section id="blue-light" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                  4. Limit Exposure to Blue Light Before Bed
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Exposure to blue light from electronic devices such as smartphones, tablets, and computers 
                  can disrupt your body's natural sleep-wake cycle. Research published in the 
                  <strong> Journal of Biological Rhythms</strong> suggests that minimizing blue light 
                  exposure in the evening can improve sleep quality and duration.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Blue Light Management Strategies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Technology Solutions:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Use blue light filters on devices</li>
                        <li>• Enable "night mode" settings</li>
                        <li>• Wear blue light-blocking glasses</li>
                        <li>• Use warm-toned lighting in evening</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Behavioral Changes:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Stop screen use 1-2 hours before bed</li>
                        <li>• Keep devices out of the bedroom</li>
                        <li>• Use analog alarm clocks instead of phones</li>
                        <li>• Read physical books instead of e-readers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Diet and Hydration Section */}
              <section id="diet-hydration" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Coffee className="w-8 h-8 text-red-600" />
                  5. Watch Your Diet and Hydration
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  What you eat and drink can significantly impact your sleep quality. Research published 
                  in <strong>Nutrients</strong> suggests that certain foods and beverages can either 
                  promote or hinder sleep. Timing and content of meals play crucial roles in sleep regulation.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Foods and Drinks to Avoid Before Bed</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Stimulants:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Caffeine (coffee, tea, chocolate)</li>
                          <li>• Nicotine products</li>
                          <li>• Energy drinks</li>
                          <li>• Some medications</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Disruptive Foods:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Heavy, fatty meals</li>
                          <li>• Spicy foods</li>
                          <li>• Excessive alcohol</li>
                          <li>• Large amounts of fluids</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Sleep-Promoting Foods</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Natural Sleep Aids:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Tart cherries (natural melatonin)</li>
                          <li>• Almonds and walnuts</li>
                          <li>• Chamomile tea</li>
                          <li>• Turkey (tryptophan)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Light Evening Snacks:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Banana with almond butter</li>
                          <li>• Greek yogurt with berries</li>
                          <li>• Whole grain crackers with cheese</li>
                          <li>• Herbal teas (passionflower, valerian)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Stress Management Section */}
              <section id="stress-management" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-teal-600" />
                  6. Manage Stress and Anxiety
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Chronic stress and anxiety can take a toll on sleep quality and duration. Research 
                  published in <strong>Sleep Medicine Reviews</strong> highlights the bidirectional 
                  relationship between stress and sleep - poor sleep increases stress, and high stress 
                  disrupts sleep.
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Stress-Reduction Techniques</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Relaxation Methods:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Deep breathing exercises (4-7-8 technique)</li>
                        <li>• Progressive muscle relaxation</li>
                        <li>• Mindfulness meditation</li>
                        <li>• Guided imagery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Cognitive Strategies:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Worry journaling before bed</li>
                        <li>• Gratitude practice</li>
                        <li>• Cognitive restructuring</li>
                        <li>• Mindful acceptance techniques</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">The 4-7-8 Breathing Technique</h3>
                  <p className="text-slate-700 mb-4">
                    This simple technique can help calm your nervous system and prepare your body for sleep:
                  </p>
                  <ol className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span>Exhale completely through your mouth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span>Inhale through your nose for 4 counts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span>Hold your breath for 7 counts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span>Exhale through your mouth for 8 counts</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Professional Help Section */}
              <section id="professional-help" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  7. Seek Professional Help if Needed
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  If you continue to experience persistent sleep problems despite implementing these strategies, 
                  consider seeking guidance from a healthcare professional or sleep specialist. Professional 
                  intervention can identify underlying sleep disorders and provide targeted treatments.
                </p>

                <div className="mb-6">
                  <Image
                    src="/images/image44.png"
                    alt="Professional sleep consultation"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Professional Treatment Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Therapeutic Interventions:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Cognitive Behavioral Therapy for Insomnia (CBT-I)</li>
                        <li>• Sleep restriction therapy</li>
                        <li>• Stimulus control therapy</li>
                        <li>• Relaxation training</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Medical Evaluations:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Sleep study (polysomnography)</li>
                        <li>• Sleep disorder screening</li>
                        <li>• Medication review</li>
                        <li>• Underlying health condition assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-6">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">When to Seek Help</h4>
                      <p className="text-slate-700 text-sm">
                        Consider professional help if you experience persistent insomnia for more than 
                        3 weeks, excessive daytime sleepiness, loud snoring with breathing interruptions, 
                        or if sleep problems significantly impact your daily functioning.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Improving sleep quality is essential for overall health and well-being. By implementing 
                  these evidence-based strategies, you can create an environment conducive to restful and 
                  restorative sleep, allowing you to wake up feeling refreshed, energized, and ready to 
                  tackle the day ahead.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Consistency in sleep schedule is fundamental to good sleep hygiene</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your sleep environment significantly impacts sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managing blue light exposure helps maintain natural circadian rhythms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Diet and stress management play crucial roles in sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professional help is available for persistent sleep problems</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium">
                      <Tag className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Article Navigation */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <Link href="/blog/understanding-schizophrenia" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                Understanding Schizophrenia: Symptoms, Treatments, and Insights
              </h3>
            </Link>
            
            <Link href="/blog/first-aid-basics" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors text-right">
                Mastering First Aid Basics: Essential Skills for Everyone
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}