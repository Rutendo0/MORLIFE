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
  Users,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  Quote,
  Tag,
  Zap,
  Activity,
  AlertTriangle,
  Globe,
  TrendingUp,
  Award,
  MapPin
} from "lucide-react"
import { useState, useEffect } from "react"

export default function WomensHealthAfricaPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(234)
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
    const title = "Prioritizing Women's Health: Evidence-Based Preventative Care and Screenings in Africa"
    
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
    title: "Prioritizing Women's Health: Evidence-Based Preventative Care and Screenings in Africa",
    author: "MORLIFE Team",
    publishDate: "January 12, 2024",
    readTime: "10 min read",
    category: "Women's Health",
    tags: ["women's health", "Africa", "preventative care", "screenings", "healthcare"],
    views: "4.2k",
    image: "/images/image28.jpg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-pink-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Women's Health in Africa</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Users className="w-3 h-3" />
                {articleData.category}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {articleData.title}
              </h1>

              {/* Compact Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-pink-50 text-pink-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-pink-50 hover:text-pink-600'
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
                  alt="Women's health in Africa"
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
                <BookOpen className="w-5 h-5 text-pink-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Introduction
                </a>
                <a href="#current-landscape" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Current Landscape
                </a>
                <a href="#preventative-care" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Preventative Care
                </a>
                <a href="#essential-screenings" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Essential Screenings
                </a>
                <a href="#barriers-solutions" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Barriers & Solutions
                </a>
                <a href="#success-stories" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
                  Success Stories
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-pink-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-pink-600 pl-3">
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
                  Women's health is a critical aspect of overall well-being, and prioritizing preventative 
                  care and screenings is essential for promoting and maintaining optimal health outcomes. 
                  In Africa, where healthcare access and resources may vary, understanding the importance 
                  of preventative care and utilizing evidence-based approaches can significantly impact 
                  women's health outcomes.
                </p>
                
                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Focus</h4>
                      <p className="text-slate-700 text-sm">
                        This article explores key preventative care measures and screenings supported by 
                        relevant statistics and research findings specific to Zimbabwe and Africa as a whole.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Current Landscape Section */}
              <section id="current-landscape" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-600" />
                  Current Landscape of Women's Health in Africa
                </h2>
                
                <div className="mb-6">
                  <Image
                    src="/images/image48.jpg"
                    alt="Women's health landscape in Africa"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  The healthcare landscape for women in Africa presents both challenges and opportunities. 
                  While significant progress has been made in recent decades, disparities in access to 
                  quality healthcare services remain a critical concern across the continent.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      Key Challenges
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Limited access to healthcare facilities in rural areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Shortage of trained healthcare professionals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Economic barriers to healthcare access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cultural and social barriers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      Positive Trends
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Increased investment in healthcare infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Growing awareness of women's health issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mobile health initiatives expanding reach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>International partnerships and support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Statistics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">54%</div>
                      <p className="text-slate-700 text-sm">of African women lack access to skilled birth attendance</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">1 in 37</div>
                      <p className="text-slate-700 text-sm">lifetime risk of maternal death in sub-Saharan Africa</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">70%</div>
                      <p className="text-slate-700 text-sm">of cervical cancer cases occur in developing countries</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Preventative Care Section */}
              <section id="preventative-care" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  Essential Preventative Care Measures
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  Preventative care forms the foundation of women's health, focusing on early detection, 
                  prevention, and health promotion. Evidence-based preventative measures can significantly 
                  reduce the burden of disease and improve quality of life.
                </p>

                <div className="space-y-8">
                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Reproductive Health</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Family Planning Services:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Contraceptive counseling and access</li>
                          <li>• Preconception care and counseling</li>
                          <li>• Fertility awareness education</li>
                          <li>• STI prevention and treatment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Maternal Health:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Prenatal care and monitoring</li>
                          <li>• Skilled birth attendance</li>
                          <li>• Postnatal care and support</li>
                          <li>• Breastfeeding support and education</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Nutrition and Lifestyle</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Nutritional Support:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Iron and folic acid supplementation</li>
                          <li>• Vitamin D and calcium intake</li>
                          <li>• Balanced diet education</li>
                          <li>• Malnutrition prevention programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Lifestyle Factors:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Physical activity promotion</li>
                          <li>• Tobacco cessation support</li>
                          <li>• Alcohol awareness programs</li>
                          <li>• Stress management techniques</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Mental Health Support</h3>
                    <p className="text-slate-700 mb-4">
                      Mental health is an integral component of women's overall well-being, particularly 
                      important during reproductive years and life transitions.
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Depression and anxiety screening and treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Postpartum mental health support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Domestic violence screening and support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Community-based mental health programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Essential Screenings Section */}
              <section id="essential-screenings" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-red-600" />
                  Essential Health Screenings
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  Regular health screenings are crucial for early detection and prevention of diseases 
                  that disproportionately affect women. Evidence-based screening programs can significantly 
                  reduce morbidity and mortality rates.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Cervical Cancer Screening</h3>
                    <p className="text-slate-700 mb-4">
                      Cervical cancer is the leading cause of cancer death among women in many African countries, 
                      yet it is highly preventable through regular screening.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Screening Methods:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Pap smear testing</li>
                          <li>• HPV DNA testing</li>
                          <li>• Visual inspection with acetic acid (VIA)</li>
                          <li>• Colposcopy for abnormal results</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Recommendations:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Start screening at age 21-25</li>
                          <li>• Screen every 3-5 years</li>
                          <li>• HPV vaccination for eligible women</li>
                          <li>• Follow-up for abnormal results</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Breast Cancer Screening</h3>
                    <p className="text-slate-700 mb-4">
                      Breast cancer incidence is rising in Africa, making early detection through screening 
                      increasingly important for improving outcomes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Screening Methods:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Clinical breast examination</li>
                          <li>• Mammography (where available)</li>
                          <li>• Breast self-examination education</li>
                          <li>• Ultrasound for diagnostic purposes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Guidelines:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Monthly self-examinations</li>
                          <li>• Annual clinical examinations</li>
                          <li>• Mammography from age 40-50</li>
                          <li>• Earlier screening for high-risk women</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Other Important Screenings</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Cardiovascular Health:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Blood pressure monitoring</li>
                          <li>• Cholesterol screening</li>
                          <li>• Diabetes screening</li>
                          <li>• BMI and waist circumference</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Bone Health:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Bone density screening</li>
                          <li>• Osteoporosis risk assessment</li>
                          <li>• Calcium and vitamin D levels</li>
                          <li>• Fall risk evaluation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Barriers and Solutions Section */}
              <section id="barriers-solutions" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-600" />
                  Overcoming Barriers to Women's Healthcare
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  While challenges exist, innovative solutions and targeted interventions are making 
                  significant strides in improving women's healthcare access and outcomes across Africa.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-red-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Major Barriers</h3>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Geographic Access:</strong>
                            <p className="text-sm">Long distances to healthcare facilities, especially in rural areas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Economic Constraints:</strong>
                            <p className="text-sm">High costs of healthcare services and transportation</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Cultural Barriers:</strong>
                            <p className="text-sm">Traditional beliefs and gender-related restrictions</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Innovative Solutions</h3>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Mobile Health Clinics:</strong>
                            <p className="text-sm">Bringing services directly to underserved communities</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Telemedicine:</strong>
                            <p className="text-sm">Remote consultations and health monitoring</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Community Health Workers:</strong>
                            <p className="text-sm">Training local women to provide basic health services</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Stories Section */}
              <section id="success-stories" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-purple-600" />
                  Success Stories and Best Practices
                </h2>

                <p className="text-slate-700 leading-relaxed mb-8">
                  Several African countries have implemented successful programs that serve as models 
                  for improving women's health outcomes across the continent.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      Rwanda's Healthcare Transformation
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Rwanda has achieved remarkable progress in women's health through comprehensive 
                      healthcare reforms and community-based approaches.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Key Achievements:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• 90% reduction in maternal mortality</li>
                          <li>• Universal health insurance coverage</li>
                          <li>• Community health cooperatives</li>
                          <li>• Strong focus on gender equity</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Success Factors:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Political commitment and leadership</li>
                          <li>• Community engagement</li>
                          <li>• Data-driven decision making</li>
                          <li>• International partnerships</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-green-600" />
                      Ethiopia's Health Extension Program
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Ethiopia's innovative Health Extension Program has significantly improved access 
                      to maternal and child health services in rural areas.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Program Features:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• 38,000+ Health Extension Workers</li>
                          <li>• Focus on preventive care</li>
                          <li>• Community-based approach</li>
                          <li>• Women-centered services</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">Impact:</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• 67% reduction in under-5 mortality</li>
                          <li>• Increased skilled birth attendance</li>
                          <li>• Improved family planning uptake</li>
                          <li>• Enhanced health awareness</li>
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
                  Prioritizing women's health through evidence-based preventative care and screenings 
                  is essential for achieving better health outcomes across Africa. While challenges remain, 
                  innovative solutions, strong political commitment, and community engagement are paving 
                  the way for significant improvements in women's health and well-being.
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Preventative care and regular screenings save lives and reduce healthcare costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Community-based approaches are effective in reaching underserved populations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technology and innovation can overcome traditional barriers to healthcare access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Political commitment and international partnerships are crucial for success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Investing in women's health benefits entire communities and economies</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-2 rounded-full text-sm font-medium">
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
            <Link href="/blog/first-aid-basics" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-slate-600 text-sm mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                Mastering First Aid Basics: Essential Skills for Handling Emergencies
              </h3>
            </Link>
            
            <Link href="/blog/wellness-later-life" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors text-right">
                Wellness in Later Life: Strategies for Healthy Aging
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}