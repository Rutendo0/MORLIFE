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
  Heart as HeartIcon,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  Quote,
  Tag,
  Zap,
  Users,
  Activity,
  AlertTriangle,
  Phone,
  Scissors,
  Thermometer,
  Bandage
} from "lucide-react"
import { useState, useEffect } from "react"

export default function FirstAidBasicsPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(178)
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
    const title = "Mastering First Aid Basics: Essential Skills for Handling Emergencies"
    
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
    title: "Mastering First Aid Basics: Essential Skills for Handling Emergencies",
    author: "MORLIFE Team",
    publishDate: "February 28, 2024",
    readTime: "8 min read",
    category: "Emergency Care",
    tags: ["first aid", "emergency", "CPR", "safety", "health"],
    views: "3.1k",
    image: "/images/image45.jpg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">First Aid Basics</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <AlertTriangle className="w-3 h-3" />
                {articleData.category}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              {/* Compact Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600'
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
                  alt="First aid basics"
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
                <BookOpen className="w-5 h-5 text-red-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
                  Introduction
                </a>
                <a href="#cpr" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
                  CPR (Cardiopulmonary Resuscitation)
                </a>
                <a href="#choking-relief" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
                  Choking Relief
                </a>
                <a href="#bleeding-wounds" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
                  Treating Bleeding & Wounds
                </a>
                <a href="#managing-burns" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
                  Managing Burns
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-red-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-red-600 pl-3">
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
                  In any emergency situation, having basic first aid skills can mean the difference between 
                  life and death. Whether you're at home, at work, or out in the community, being prepared 
                  to respond effectively can save lives and prevent further injury.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Takeaway</h4>
                      <p className="text-slate-700 text-sm">
                        This comprehensive guide covers essential first aid skills that everyone should know, 
                        with step-by-step instructions on how to perform them effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CPR Section */}
              <section id="cpr" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <HeartIcon className="w-8 h-8 text-red-600" />
                  1. Cardiopulmonary Resuscitation (CPR)
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image46.jpeg"
                    alt="CPR demonstration"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  CPR is a critical skill that can sustain a person's life until professional help arrives, 
                  particularly in cases of cardiac arrest or drowning. Remember the acronym "CAB": 
                  Compression, Airway, Breathing.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">CPR Steps (CAB Method)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">C</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Compressions</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Place heel of one hand on center of chest</li>
                          <li>• Interlock fingers, keep arms straight</li>
                          <li>• Compress 2 inches deep at 100-120 per minute</li>
                          <li>• Allow complete chest recoil between compressions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">A</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Airway</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Tilt head back by lifting chin</li>
                          <li>• Check for visible obstructions</li>
                          <li>• Open airway gently</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">B</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Breathing</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Pinch nose shut, seal mouth with yours</li>
                          <li>• Give 2 rescue breaths, 1 second each</li>
                          <li>• Watch for chest rise with each breath</li>
                          <li>• Continue 30 compressions : 2 breaths cycle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Important Reminder</h4>
                      <p className="text-slate-700 text-sm">
                        Always call emergency services (911) immediately before starting CPR. 
                        Continue CPR until help arrives or the person starts breathing normally.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Choking Relief Section */}
              <section id="choking-relief" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                  2. Choking Relief (Heimlich Maneuver)
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Choking occurs when a person's airway is blocked, preventing them from breathing effectively. 
                  The Heimlich maneuver is the primary technique used to dislodge an obstructed airway.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Heimlich Maneuver Steps</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span className="text-slate-700">Stand behind the person and wrap your arms around their waist</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span className="text-slate-700">Make a fist with one hand, place it slightly above the navel (thumb side in)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span className="text-slate-700">Grasp your fist with your other hand</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span className="text-slate-700">Press into the abdomen with quick, upward thrusts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                      <span className="text-slate-700">Repeat until object is dislodged or person becomes unconscious</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Signs of Choking</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Inability to speak or cough</li>
                      <li>• Difficulty breathing</li>
                      <li>• Hands clutching throat</li>
                      <li>• Blue lips or face</li>
                      <li>• Panic or distress</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">For Infants (Under 1 Year)</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Hold infant face-down on forearm</li>
                      <li>• Give 5 back blows between shoulder blades</li>
                      <li>• Turn infant over, give 5 chest thrusts</li>
                      <li>• Alternate until object is expelled</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Bleeding and Wounds Section */}
              <section id="bleeding-wounds" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Bandage className="w-8 h-8 text-blue-600" />
                  3. Treating Bleeding and Wounds
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Proper wound care can prevent infection and promote healing. The key is to control 
                  bleeding quickly while maintaining cleanliness to prevent complications.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Wound Care Steps</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span className="text-slate-700">Apply direct pressure with clean cloth or bandage to stop bleeding</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span className="text-slate-700">Elevate injured area above heart level if possible</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span className="text-slate-700">Clean wound with soap and water once bleeding stops</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span className="text-slate-700">Apply antibiotic ointment if available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                      <span className="text-slate-700">Cover with sterile dressing and secure in place</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Severe Bleeding</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Call 911 immediately</li>
                      <li>• Apply firm, continuous pressure</li>
                      <li>• Don't remove embedded objects</li>
                      <li>• Use pressure points if needed</li>
                      <li>• Monitor for shock symptoms</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Minor Cuts & Scrapes</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Wash hands before treating</li>
                      <li>• Rinse wound with clean water</li>
                      <li>• Pat dry gently</li>
                      <li>• Apply adhesive bandage</li>
                      <li>• Change dressing daily</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Managing Burns Section */}
              <section id="managing-burns" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Thermometer className="w-8 h-8 text-purple-600" />
                  4. Managing Burns
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image47.jpg"
                    alt="Burn treatment"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Burns can range from minor to severe and require prompt treatment to prevent complications. 
                  The treatment approach depends on the severity and type of burn.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Burn Classification</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">First-Degree</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Red, painful skin</li>
                          <li>• No blisters</li>
                          <li>• Affects outer layer only</li>
                          <li>• Example: Mild sunburn</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Second-Degree</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Red, swollen skin</li>
                          <li>• Blisters present</li>
                          <li>• Very painful</li>
                          <li>• Affects deeper layers</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Third-Degree</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• White or charred skin</li>
                          <li>• May be painless</li>
                          <li>• All skin layers affected</li>
                          <li>• Requires immediate medical care</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Treatment for Minor Burns</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <span className="text-slate-700">Cool the burn with running water for 10-20 minutes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <span className="text-slate-700">Remove jewelry or tight clothing before swelling occurs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <span className="text-slate-700">Cover with sterile gauze bandage or clean cloth</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <span className="text-slate-700">Take over-the-counter pain medication if needed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">What NOT to Do</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Don't apply ice directly to burns</li>
                          <li>• Don't use butter, oil, or ointments on severe burns</li>
                          <li>• Don't break blisters</li>
                          <li>• Don't remove clothing stuck to burn</li>
                          <li>• Don't use cotton balls on open burns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  By mastering these essential first aid skills, you can be better prepared to handle 
                  emergencies and provide life-saving assistance when it matters most. Remember to stay 
                  calm, assess the situation, and take action promptly. With practice and knowledge, 
                  you can make a difference in the lives of those around you during times of crisis.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Always prioritize your safety before helping others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Call emergency services immediately in serious situations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Practice first aid skills regularly to maintain proficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Consider taking a certified first aid course for hands-on training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Keep a well-stocked first aid kit accessible at home and work</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-2 rounded-full text-sm font-medium">
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
            <Link href="/blog/enhancing-sleep-quality" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                Proven Strategies for Enhancing Sleep Quality and Restoration
              </h3>
            </Link>
            
            <Link href="/blog/womens-health-africa" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors text-right">
                Women's Health in Africa: Challenges and Solutions
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}