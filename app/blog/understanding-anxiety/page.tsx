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
  Brain,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  Quote,
  Tag
} from "lucide-react"
import { useState, useEffect } from "react"

export default function UnderstandingAnxietyPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(247)
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
    const title = "Understanding Anxiety: Effects, Identification, and Scientifically Proven Methods to Alleviate It"
    
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
    title: "Understanding Anxiety: Effects, Identification, and Scientifically Proven Methods to Alleviate It",
    author: "MORLIFE Team",
    publishDate: "June 9, 2024",
    readTime: "8 min read",
    category: "Mental Health",
    tags: ["anxiety", "mental health", "treatment", "wellness"],
    views: "2.3k",
    image: "/images/image23.jpg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-sky-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-sky-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Understanding Anxiety</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Brain className="w-3 h-3" />
                {articleData.category}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              {/* Compact Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-sky-50 text-sky-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-600'
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
                  alt="Understanding Anxiety"
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
                <BookOpen className="w-5 h-5 text-sky-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#what-is-anxiety" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  What is Anxiety?
                </a>
                <a href="#effects-of-anxiety" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Effects of Anxiety
                </a>
                <a href="#identifying-anxiety" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Identifying Anxiety
                </a>
                <a href="#proven-methods" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Proven Methods
                </a>
                <a href="#cognitive-techniques" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Cognitive Techniques
                </a>
                <a href="#lifestyle-changes" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Lifestyle Changes
                </a>
                <a href="#professional-help" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Professional Help
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-sky-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-sky-600 pl-3">
                  Conclusion
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-3 prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Anxiety is one of the most common mental health conditions affecting millions of people worldwide. 
                  Understanding its effects, learning to identify its symptoms, and implementing scientifically proven 
                  methods to manage it can significantly improve your quality of life and overall well-being.
                </p>
                
                <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Takeaway</h4>
                      <p className="text-slate-700 text-sm">
                        This comprehensive guide provides evidence-based strategies and practical techniques 
                        to help you understand, identify, and effectively manage anxiety symptoms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What is Anxiety Section */}
              <section id="what-is-anxiety" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-sky-600" />
                  What is Anxiety?
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Anxiety is a natural stress response characterized by feelings of worry, nervousness, or unease 
                  about something with an uncertain outcome. While occasional anxiety is normal and can even be 
                  beneficial in certain situations, persistent or excessive anxiety can interfere with daily 
                  activities and overall quality of life.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Types of Anxiety Disorders</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Generalized Anxiety Disorder (GAD):</strong>
                        <span className="text-slate-700"> Persistent worry about various aspects of life</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Social Anxiety Disorder:</strong>
                        <span className="text-slate-700"> Fear of social situations and judgment by others</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Panic Disorder:</strong>
                        <span className="text-slate-700"> Recurrent panic attacks and fear of future attacks</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Specific Phobias:</strong>
                        <span className="text-slate-700"> Intense fear of specific objects or situations</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Effects of Anxiety Section */}
              <section id="effects-of-anxiety" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-red-500" />
                  Effects of Anxiety
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Anxiety affects individuals differently, but its impact can be far-reaching, influencing 
                  physical health, mental well-being, and social relationships. Understanding these effects 
                  is crucial for recognizing when professional help may be needed.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-red-500" />
                      Physical Effects
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Rapid heartbeat and palpitations</li>
                      <li>• Shortness of breath or hyperventilation</li>
                      <li>• Muscle tension and headaches</li>
                      <li>• Digestive issues and nausea</li>
                      <li>• Fatigue and sleep disturbances</li>
                      <li>• Sweating and trembling</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Brain className="w-6 h-6 text-blue-500" />
                      Mental & Emotional Effects
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Persistent worry and racing thoughts</li>
                      <li>• Difficulty concentrating</li>
                      <li>• Irritability and restlessness</li>
                      <li>• Fear of losing control</li>
                      <li>• Avoidance behaviors</li>
                      <li>• Decreased self-confidence</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Identifying Anxiety Section */}
              <section id="identifying-anxiety" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  Identifying Anxiety
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Early identification of anxiety symptoms is key to effective management. Recognizing the 
                  signs and patterns can help you take proactive steps to address anxiety before it becomes 
                  overwhelming.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Warning Signs to Watch For</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Emotional Signs:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Excessive worry about future events</li>
                        <li>• Feeling overwhelmed or on edge</li>
                        <li>• Difficulty relaxing or unwinding</li>
                        <li>• Fear of worst-case scenarios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Behavioral Signs:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Avoiding certain situations or places</li>
                        <li>• Procrastination or indecisiveness</li>
                        <li>• Seeking constant reassurance</li>
                        <li>• Changes in sleep or eating patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">When to Seek Professional Help</h4>
                      <p className="text-slate-700 text-sm">
                        If anxiety symptoms persist for more than six months, interfere with daily activities, 
                        or cause significant distress, it's important to consult with a mental health professional 
                        for proper evaluation and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Proven Methods Section */}
              <section id="proven-methods" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                  Scientifically Proven Methods to Alleviate Anxiety
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  Research has identified numerous evidence-based approaches to managing anxiety effectively. 
                  These methods range from cognitive techniques to lifestyle modifications, each supported 
                  by scientific studies and clinical practice.
                </p>
              </section>

              {/* Cognitive Techniques Section */}
              <section id="cognitive-techniques" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Cognitive Behavioral Techniques</h3>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">1. Cognitive Restructuring</h4>
                    <p className="text-slate-700 mb-4">
                      This technique involves identifying and challenging negative thought patterns that contribute 
                      to anxiety. By examining the evidence for and against anxious thoughts, you can develop 
                      more balanced and realistic perspectives.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-medium text-slate-800 mb-2">Practice Steps:</h5>
                      <ol className="text-slate-700 text-sm space-y-1">
                        <li>1. Identify the anxious thought</li>
                        <li>2. Examine the evidence supporting this thought</li>
                        <li>3. Consider alternative explanations</li>
                        <li>4. Develop a more balanced perspective</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">2. Mindfulness and Meditation</h4>
                    <p className="text-slate-700 mb-4">
                      Mindfulness practices help you stay present and observe anxious thoughts without judgment. 
                      Regular meditation has been shown to reduce anxiety symptoms and improve overall mental well-being.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-medium text-slate-800 mb-2">Simple Mindfulness Exercise:</h5>
                      <p className="text-slate-700 text-sm">
                        Spend 5-10 minutes daily focusing on your breath. When your mind wanders to anxious 
                        thoughts, gently redirect your attention back to your breathing without self-criticism.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">3. Progressive Muscle Relaxation</h4>
                    <p className="text-slate-700 mb-4">
                      This technique involves systematically tensing and relaxing different muscle groups to 
                      reduce physical tension associated with anxiety and promote overall relaxation.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-medium text-slate-800 mb-2">How to Practice:</h5>
                      <p className="text-slate-700 text-sm">
                        Start with your toes and work your way up to your head, tensing each muscle group 
                        for 5 seconds, then releasing and noticing the contrast between tension and relaxation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lifestyle Changes Section */}
              <section id="lifestyle-changes" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Lifestyle Modifications</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-orange-500" />
                      Regular Exercise
                    </h4>
                    <p className="text-slate-700 mb-4">
                      Physical activity is one of the most effective natural anxiety reducers. Exercise releases 
                      endorphins, reduces stress hormones, and provides a healthy outlet for anxious energy.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Aim for 30 minutes of moderate exercise daily</li>
                      <li>• Include both cardio and strength training</li>
                      <li>• Try yoga or tai chi for mind-body benefits</li>
                      <li>• Even short walks can provide immediate relief</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-teal-500" />
                      Sleep Hygiene
                    </h4>
                    <p className="text-slate-700 mb-4">
                      Quality sleep is essential for managing anxiety. Poor sleep can exacerbate anxiety symptoms, 
                      while good sleep hygiene can significantly improve your ability to cope with stress.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Maintain a consistent sleep schedule</li>
                      <li>• Create a relaxing bedtime routine</li>
                      <li>• Limit screen time before bed</li>
                      <li>• Keep your bedroom cool and dark</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Target className="w-6 h-6 text-pink-500" />
                      Nutrition and Diet
                    </h4>
                    <p className="text-slate-700 mb-4">
                      What you eat can significantly impact your anxiety levels. Certain foods can trigger 
                      anxiety symptoms, while others can help promote calm and stability.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Limit caffeine and alcohol consumption</li>
                      <li>• Eat regular, balanced meals</li>
                      <li>• Include omega-3 rich foods</li>
                      <li>• Stay hydrated throughout the day</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-cyan-500" />
                      Social Support
                    </h4>
                    <p className="text-slate-700 mb-4">
                      Strong social connections provide emotional support and can help buffer against anxiety. 
                      Don't hesitate to reach out to friends, family, or support groups when needed.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Maintain regular contact with loved ones</li>
                      <li>• Join support groups or communities</li>
                      <li>• Practice open communication about your feelings</li>
                      <li>• Consider peer support programs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Professional Help Section */}
              <section id="professional-help" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Treatment Options</h3>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  While self-help strategies are valuable, professional treatment may be necessary for 
                  moderate to severe anxiety. Various evidence-based treatments are available, and 
                  working with a mental health professional can provide personalized care.
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Psychotherapy</h4>
                    <p className="text-slate-700 mb-4">
                      Cognitive Behavioral Therapy (CBT) is the gold standard for anxiety treatment, 
                      helping individuals identify and change thought patterns and behaviors that contribute to anxiety.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Acceptance and Commitment Therapy (ACT)</li>
                      <li>• Exposure and Response Prevention (ERP)</li>
                      <li>• Dialectical Behavior Therapy (DBT)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Medication Options</h4>
                    <p className="text-slate-700 mb-4">
                      When appropriate, medication can be an effective component of anxiety treatment, 
                      especially when combined with therapy. Always consult with a healthcare provider 
                      for proper evaluation and monitoring.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <p className="text-slate-700 text-sm">
                        <strong>Important:</strong> Medication decisions should always be made in consultation 
                        with a qualified healthcare provider who can assess your individual needs and monitor your progress.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Understanding anxiety and implementing evidence-based management strategies can significantly 
                  improve your quality of life. Remember that recovery is a process, and what works best may 
                  vary from person to person. Be patient with yourself as you explore different techniques 
                  and find the combination that works best for you.
                </p>

                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Anxiety is treatable with the right combination of strategies and support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Early identification and intervention lead to better outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lifestyle modifications can significantly impact anxiety levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professional help is available and effective when needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recovery is possible with patience, practice, and persistence</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-sky-100 text-sky-700 px-3 py-2 rounded-full text-sm font-medium">
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
            <Link href="/blog/treating-lower-back-pain" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                Effective Strategies for Treating Lower Back Pain
              </h3>
            </Link>
            
            <Link href="/blog/understanding-schizophrenia" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors text-right">
                Understanding Schizophrenia: Symptoms, Treatments, and Insights
              </h3>
            </Link>
          </div>
        </section>

      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}