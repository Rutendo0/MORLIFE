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
  Tag,
  Zap,
  Users,
  Activity,
  AlertTriangle,
  Microscope,
  Dna,
  Globe
} from "lucide-react"
import { useState, useEffect } from "react"

export default function UnderstandingSchizophreniaPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(156)
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
    const title = "Understanding Schizophrenia: Symptoms, Treatments, and Insights"
    
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
    title: "Understanding Schizophrenia: Symptoms, Treatments, and Insights",
    author: "MORLIFE Team",
    publishDate: "April 22, 2024",
    readTime: "9 min read",
    category: "Mental Health",
    tags: ["schizophrenia", "mental health", "neuroscience", "treatment", "research"],
    views: "2.1k",
    image: "/images/image36.jpeg"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-800">Understanding Schizophrenia</span>
        </nav>

        {/* Compact Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Article Info */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
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
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
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
                      ? 'bg-purple-50 text-purple-600' 
                      : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-600'
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
                  alt="Understanding Schizophrenia"
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
                <BookOpen className="w-5 h-5 text-purple-600" />
                Table of Contents
              </h3>
              <nav className="space-y-3">
                <a href="#introduction" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Introduction
                </a>
                <a href="#symptoms" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Symptoms
                </a>
                <a href="#research-insights" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Research Insights
                </a>
                <a href="#neurotransmitter-imbalance" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Neurotransmitter Imbalance
                </a>
                <a href="#brain-structure" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Brain Structure
                </a>
                <a href="#genetic-factors" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Genetic Factors
                </a>
                <a href="#environmental-factors" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Environmental Factors
                </a>
                <a href="#treatment-approaches" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
                  Treatment Approaches
                </a>
                <a href="#conclusion" className="block text-slate-600 hover:text-purple-600 transition-colors text-sm py-1 border-l-2 border-transparent hover:border-purple-600 pl-3">
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
                  Schizophrenia is a complex and often debilitating mental disorder that affects approximately 
                  20 million people worldwide. Despite its prevalence, there remains significant stigma and 
                  misunderstanding surrounding this condition. In this article, we'll delve into the symptoms, 
                  treatments, and insights gleaned from research to provide a comprehensive understanding of schizophrenia.
                </p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Takeaway</h4>
                      <p className="text-slate-700 text-sm">
                        This comprehensive guide provides evidence-based insights into schizophrenia, 
                        covering symptoms, neurobiology, and modern treatment approaches.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Image
                    src="/images/image25.jpg"
                    alt="Mental health awareness"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </section>

              {/* Symptoms Section */}
              <section id="symptoms" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  Symptoms of Schizophrenia
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  Schizophrenia symptoms are typically categorized into three main groups: positive, 
                  negative, and cognitive symptoms. Understanding these categories is crucial for 
                  proper diagnosis and treatment planning.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-red-500" />
                      Positive Symptoms
                    </h3>
                    <p className="text-slate-700 mb-4">
                      These symptoms involve distortions of normal functioning and include:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Hallucinations:</strong> Hearing voices or seeing things that aren't there</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Delusions:</strong> False beliefs that persist despite evidence to the contrary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Disorganized speech:</strong> Incoherent or illogical communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Disorganized behavior:</strong> Unpredictable or inappropriate actions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-blue-500" />
                      Negative Symptoms
                    </h3>
                    <p className="text-slate-700 mb-4">
                      These symptoms entail deficits in normal functioning and include:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Reduced emotional expression:</strong> Flat or blunted affect</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Social withdrawal:</strong> Isolation from family and friends</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Anhedonia:</strong> Loss of pleasure in activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Avolition:</strong> Lack of motivation or drive</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Brain className="w-6 h-6 text-green-500" />
                      Cognitive Symptoms
                    </h3>
                    <p className="text-slate-700 mb-4">
                      These symptoms involve impairments in cognitive processes that significantly impact daily functioning:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Attention deficits:</strong> Difficulty focusing and concentrating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Memory problems:</strong> Issues with working and long-term memory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Executive dysfunction:</strong> Problems with planning and decision-making</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Research Insights Section */}
              <section id="research-insights" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Microscope className="w-8 h-8 text-purple-600" />
                  Insights from Research
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  Research has shed light on the underlying neurobiology of schizophrenia, implicating 
                  abnormalities in neurotransmitter systems, brain structure, and connectivity. These 
                  findings have revolutionized our understanding of the disorder.
                </p>
              </section>

              {/* Neurotransmitter Imbalance Section */}
              <section id="neurotransmitter-imbalance" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">1. Neurotransmitter Imbalance</h3>
                
                <div className="mb-6">
                  <Image
                    src="/images/image37.jpg"
                    alt="Neurotransmitter systems"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Dysregulation of dopamine, glutamate, and other neurotransmitter systems has been 
                  implicated in the pathophysiology of schizophrenia. Dopamine dysregulation, in 
                  particular, has been linked to the positive symptoms of psychosis.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Neurotransmitter Systems</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Dopamine System:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Hyperactivity in mesolimbic pathway</li>
                        <li>• Hypoactivity in mesocortical pathway</li>
                        <li>• Associated with positive symptoms</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Glutamate System:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• NMDA receptor hypofunction</li>
                        <li>• Linked to cognitive symptoms</li>
                        <li>• Affects neural development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Brain Structure Section */}
              <section id="brain-structure" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">2. Brain Structure Abnormalities</h3>
                
                <div className="mb-6">
                  <Image
                    src="/images/image38.jpeg"
                    alt="Brain structure abnormalities"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Neuroimaging studies have revealed structural abnormalities in the brains of individuals 
                  with schizophrenia, including reduced gray matter volume, enlarged ventricles, and 
                  alterations in cortical thickness. These structural changes are thought to contribute 
                  to the cognitive deficits observed in schizophrenia.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Common Structural Changes</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enlarged lateral ventricles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reduced prefrontal cortex volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Hippocampal volume reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Altered white matter integrity</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Genetic Factors Section */}
              <section id="genetic-factors" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">3. Genetic Factors</h3>
                
                <div className="mb-6">
                  <Image
                    src="/images/image39.jpeg"
                    alt="Genetic research"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Family, twin, and molecular genetic studies have provided compelling evidence for the 
                  role of genetics in schizophrenia. While no single gene is responsible for schizophrenia, 
                  multiple genetic risk factors interact with environmental influences to increase 
                  susceptibility to the disorder.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Dna className="w-5 h-5 text-green-600" />
                    Genetic Risk Factors
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Heritability:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• ~80% heritability rate</li>
                        <li>• Higher risk in first-degree relatives</li>
                        <li>• Twin studies show strong genetic component</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Risk Genes:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• DISC1, COMT, NRG1</li>
                        <li>• Copy number variations</li>
                        <li>• Polygenic risk scores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Environmental Factors Section */}
              <section id="environmental-factors" className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">4. Environmental Risk Factors</h3>
                
                <div className="mb-6">
                  <Image
                    src="/images/image40.jpg"
                    alt="Environmental factors"
                    width={600}
                    height={300}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Prenatal and perinatal factors, such as maternal infection, malnutrition, and obstetric 
                  complications, have been associated with an increased risk of schizophrenia. Additionally, 
                  early-life stressors, urban upbringing, and cannabis use during adolescence have been 
                  identified as environmental risk factors.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-600" />
                    Environmental Risk Factors
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Prenatal/Perinatal:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Maternal infections</li>
                        <li>• Nutritional deficiencies</li>
                        <li>• Birth complications</li>
                        <li>• Winter birth effect</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Psychosocial:</h5>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Urban upbringing</li>
                        <li>• Childhood trauma</li>
                        <li>• Social isolation</li>
                        <li>• Cannabis use in adolescence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Treatment Approaches Section */}
              <section id="treatment-approaches" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-emerald-600" />
                  Treatment Approaches
                </h2>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  Treatment for schizophrenia typically involves a combination of pharmacotherapy, 
                  psychosocial interventions, and supportive care. A comprehensive, individualized 
                  approach yields the best outcomes.
                </p>

                <div className="space-y-8">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="mb-6">
                      <Image
                        src="/images/image41.jpg"
                        alt="Antipsychotic medications"
                        width={600}
                        height={300}
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Activity className="w-6 h-6 text-blue-600" />
                      1. Antipsychotic Medications
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Antipsychotic medications, which act primarily by blocking dopamine receptors, 
                      are the cornerstone of pharmacological treatment for schizophrenia.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">First-Generation (Typical)</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Haloperidol, Chlorpromazine</li>
                          <li>• Effective for positive symptoms</li>
                          <li>• Higher risk of extrapyramidal side effects</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Second-Generation (Atypical)</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Risperidone, Olanzapine, Clozapine</li>
                          <li>• Lower risk of movement disorders</li>
                          <li>• Effective for positive and negative symptoms</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <div className="mb-6">
                      <Image
                        src="/images/image42.jpg"
                        alt="Psychosocial interventions"
                        width={600}
                        height={300}
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-green-600" />
                      2. Psychosocial Interventions
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Psychosocial interventions are essential components of schizophrenia treatment, 
                      addressing functional impairments and promoting recovery and rehabilitation.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Therapeutic Interventions</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Cognitive Behavioral Therapy (CBT)</li>
                          <li>• Family therapy and education</li>
                          <li>• Social skills training</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-2">Rehabilitation Services</h4>
                        <ul className="text-slate-700 text-sm space-y-1">
                          <li>• Supported employment programs</li>
                          <li>• Housing assistance</li>
                          <li>• Peer support services</li>
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
                  Schizophrenia is a complex and multifaceted disorder that requires a comprehensive 
                  approach to treatment and care. By understanding the symptoms, neurobiology, and 
                  treatment approaches associated with schizophrenia, we can work towards reducing 
                  stigma, promoting early intervention, and improving outcomes for individuals living 
                  with this challenging condition.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Takeaways</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Early intervention and comprehensive treatment improve long-term outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Combination of medication and psychosocial interventions is most effective</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Understanding neurobiology helps reduce stigma and improve treatment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Genetic and environmental factors both contribute to disease risk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recovery and meaningful life are possible with proper support</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {articleData.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-sm font-medium">
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
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                Effective Strategies for Treating Lower Back Pain
              </h3>
            </Link>
            
            <Link href="/blog/enhancing-sleep-quality" className="group flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-end gap-3 text-slate-600 text-sm mb-2">
                <span>Next Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors text-right">
                Proven Strategies for Enhancing Sleep Quality
              </h3>
            </Link>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  )
}