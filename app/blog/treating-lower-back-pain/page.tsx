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
  Activity,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  Quote,
  Tag,
  Zap,
  Users,
  Brain
} from "lucide-react"
import { useState, useEffect } from "react"

export default function TreatingLowerBackPainPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(189)
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
    const title = "Effective Strategies for Treating Lower Back Pain"
    
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
    title: "Effective Strategies for Treating Lower Back Pain",
    author: "MORLIFE Team",
    publishDate: "May 15, 2024",
    readTime: "7 min read",
    category: "Physical Health",
    tags: ["back pain", "physical therapy", "exercise", "wellness", "treatment"],
    views: "1.8k",
    image: "/images/image24.jpg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Treating Lower Back Pain</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Activity className="w-3 h-3" />
                {articleData.category}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              {/* Compact Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-emerald-50 text-emerald-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
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
                  alt="Lower back pain treatment"
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
                <BookOpen className="w-5 h-5 text-emerald-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Introduction
                </a>
                <a href="#stay-active" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Stay Active
                </a>
                <a href="#physical-therapy" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Physical Therapy
                </a>
                <a href="#mind-body-approaches" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Mind-Body Approaches
                </a>
                <a href="#ergonomic-modifications" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Ergonomic Modifications
                </a>
                <a href="#pharmacological-interventions" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
                  Pharmacological Interventions
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-emerald-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-emerald-600 pl-3">
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
                  Lower back pain is a prevalent condition that affects millions of people worldwide, 
                  impacting their quality of life and productivity. While it can be caused by various 
                  factors such as muscle strain, injury, or underlying medical conditions, finding 
                  effective treatment methods is crucial for managing this discomfort.
                </p>
                
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Takeaway</h4>
                      <p className="text-slate-700 text-sm">
                        This comprehensive guide provides evidence-based strategies for treating lower 
                        back pain, drawing insights from recent research and clinical practice.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Stay Active Section */}
              <section id="stay-active" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-emerald-600" />
                  1. Stay Active
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image31.jpg"
                    alt="Person walking with family"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Contrary to popular belief, bed rest isn't the best solution for lower back pain. 
                  Research consistently demonstrates that staying active and engaging in light exercises 
                  can alleviate symptoms and promote faster recovery. Activities like walking, swimming, 
                  or gentle stretching can improve flexibility, strengthen muscles, and reduce pain.
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Research Evidence</h3>
                  <p className="text-slate-700">
                    A study published in <strong>JAMA Internal Medicine</strong> found that patients who 
                    engaged in structured exercise programs experienced greater improvements in function 
                    and less pain compared to those who opted for bed rest or standard care. Therefore, 
                    incorporating physical activity into your daily routine is crucial for managing lower 
                    back pain effectively.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Recommended Activities</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Walking for 20-30 minutes daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Swimming or water aerobics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gentle stretching exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Low-impact activities like cycling</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Physical Therapy Section */}
              <section id="physical-therapy" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  2. Physical Therapy
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image32.jpg"
                    alt="Physical therapy session"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Physical therapy plays a pivotal role in treating lower back pain by targeting specific 
                  muscles and addressing underlying issues contributing to discomfort. Techniques such as 
                  manual therapy, stretching, and strengthening exercises tailored to individual needs can 
                  significantly reduce pain and improve mobility.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Clinical Evidence</h3>
                  <p className="text-slate-700">
                    Research published in the <strong>Journal of Orthopaedic & Sports Physical Therapy</strong> 
                    suggests that physical therapy interventions, including exercise and manual therapy, are 
                    more effective than usual care for reducing pain and improving function in patients with 
                    chronic low back pain.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Manual Therapy</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Joint mobilization</li>
                      <li>• Soft tissue massage</li>
                      <li>• Spinal manipulation</li>
                      <li>• Trigger point therapy</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Exercise Therapy</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Core strengthening</li>
                      <li>• Flexibility training</li>
                      <li>• Postural exercises</li>
                      <li>• Functional movement training</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Mind-Body Approaches Section */}
              <section id="mind-body-approaches" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-600" />
                  3. Mind-Body Approaches
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image33.jpg"
                    alt="Person doing meditation"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Mind-body approaches such as yoga, tai chi, and mindfulness-based stress reduction have 
                  gained recognition for their effectiveness in managing lower back pain. These practices 
                  focus on enhancing body awareness, relaxation, and stress reduction, which can alleviate 
                  musculoskeletal tension and promote healing.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Scientific Support</h3>
                  <p className="text-slate-700">
                    A systematic review published in <strong>JAMA Internal Medicine</strong> indicates that 
                    mind-body interventions, particularly yoga and mindfulness-based stress reduction, are 
                    associated with significant reductions in pain and functional disability among individuals 
                    with chronic low back pain.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Yoga Benefits</h4>
                    <p className="text-slate-700 mb-4">
                      Yoga combines physical postures, breathing exercises, and meditation to improve 
                      flexibility, strength, and mental well-being.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Improves spinal flexibility</li>
                      <li>• Strengthens core muscles</li>
                      <li>• Reduces stress and anxiety</li>
                      <li>• Enhances body awareness</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Mindfulness Meditation</h4>
                    <p className="text-slate-700 mb-4">
                      Mindfulness practices help manage pain perception and reduce the emotional impact 
                      of chronic pain conditions.
                    </p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Reduces pain catastrophizing</li>
                      <li>• Improves pain coping strategies</li>
                      <li>• Decreases muscle tension</li>
                      <li>• Enhances overall well-being</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ergonomic Modifications Section */}
              <section id="ergonomic-modifications" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-orange-600" />
                  4. Ergonomic Modifications
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image34.jpg"
                    alt="Ergonomic workspace setup"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Making ergonomic modifications to your workspace and daily activities can prevent 
                  exacerbation of lower back pain and promote better spinal alignment. Simple adjustments 
                  such as maintaining proper posture, using supportive chairs, and lifting heavy objects 
                  correctly can alleviate strain on the lower back.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Research Findings</h3>
                  <p className="text-slate-700">
                    A meta-analysis published in the <strong>Cochrane Database of Systematic Reviews</strong> 
                    suggests that ergonomic interventions in the workplace, such as ergonomic chairs and 
                    workstation modifications, can effectively reduce the incidence of lower back pain and 
                    improve overall comfort and productivity.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Workplace Ergonomics</h4>
                    <ul className="text-slate-700 text-sm space-y-2">
                      <li>• Adjust chair height and lumbar support</li>
                      <li>• Position monitor at eye level</li>
                      <li>• Use a document holder</li>
                      <li>• Take regular breaks to stand and stretch</li>
                      <li>• Keep feet flat on floor or footrest</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Daily Activities</h4>
                    <ul className="text-slate-700 text-sm space-y-2">
                      <li>• Lift with your legs, not your back</li>
                      <li>• Avoid twisting while lifting</li>
                      <li>• Sleep on a supportive mattress</li>
                      <li>• Wear supportive, low-heeled shoes</li>
                      <li>• Maintain good posture while walking</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pharmacological Interventions Section */}
              <section id="pharmacological-interventions" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-red-600" />
                  5. Pharmacological Interventions
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image35.jpg"
                    alt="Medical consultation"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  In some cases, pharmacological interventions may be necessary to manage acute episodes 
                  of lower back pain or alleviate severe discomfort. Nonsteroidal anti-inflammatory drugs 
                  (NSAIDs), muscle relaxants, and analgesics are commonly prescribed medications that can 
                  provide temporary relief from pain and inflammation.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-6">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Important Note</h4>
                      <p className="text-slate-700 text-sm">
                        It's crucial to use these medications under the guidance of a healthcare professional, 
                        as prolonged or excessive use can lead to adverse effects and dependency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Integrated Approach</h3>
                  <p className="text-slate-700">
                    Recent research suggests that integrating pharmacological interventions with 
                    non-pharmacological approaches such as exercise and physical therapy can yield 
                    superior outcomes for managing lower back pain.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">NSAIDs</h4>
                    <p className="text-slate-700 text-sm">Reduce inflammation and pain</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Muscle Relaxants</h4>
                    <p className="text-slate-700 text-sm">Relieve muscle spasms</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Analgesics</h4>
                    <p className="text-slate-700 text-sm">Provide pain relief</p>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Treating lower back pain requires a comprehensive approach that addresses both physical 
                  and psychological aspects of the condition. By incorporating evidence-based strategies 
                  such as staying active, physical therapy, mind-body approaches, ergonomic modifications, 
                  and judicious use of pharmacological interventions, individuals can effectively manage 
                  their symptoms and improve their quality of life.
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Staying active is more beneficial than bed rest for most back pain cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Physical therapy provides targeted, personalized treatment approaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mind-body approaches offer holistic pain management benefits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ergonomic modifications prevent pain recurrence and progression</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Combining multiple treatment approaches yields the best outcomes</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium">
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
            <Link href="/blog/understanding-anxiety" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Understanding Anxiety: Effects, Identification, and Scientifically Proven Methods to Alleviate It
              </h3>
            </Link>
            
            <Link href="/blog/understanding-schizophrenia" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors text-right">
                Understanding Schizophrenia: Symptoms, Treatments, and Insights
              </h3>
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/coping-with-stress-and-anxiety" className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
                  <Brain className="w-4 h-4" />
                  Mental Health
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  Coping with Stress and Anxiety
                </h3>
                <p className="text-slate-600 text-sm">
                  Practical strategies for managing daily stress and anxiety with actionable advice.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/enhancing-sleep-quality" className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-3">
                  <Heart className="w-4 h-4" />
                  Wellness
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  Enhancing Sleep Quality
                </h3>
                <p className="text-slate-600 text-sm">
                  Evidence-based techniques to improve your sleep quality and achieve better rest.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}