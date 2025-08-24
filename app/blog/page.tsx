
"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  Brain, 
  Shield, 
  Stethoscope,
  Tag,
  TrendingUp,
  Mail,
  Bell
} from "lucide-react"
import { useState, useMemo } from "react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const blogPosts = [
    {
      id: 1,
      date: "2024-06-09",
      title: "Understanding Anxiety: Effects, Identification, and Scientifically Proven Methods to Alleviate It",
      excerpt: "Explore comprehensive strategies for managing anxiety with evidence-based approaches and practical techniques for better mental health.",
      image: "/images/image23.jpg",
      slug: "understanding-anxiety",
      category: "Mental Health",
      readTime: "8 min read",
      author: "MORLIFE Team",
      tags: ["anxiety", "mental health", "treatment", "wellness"],
      featured: true
    },
    {
      id: 2,
      date: "2024-04-01",
      title: "Effective Strategies for Treating Lower Back Pain",
      excerpt: "Discover proven methods and treatments for managing lower back pain, from physical therapy to lifestyle modifications.",
      image: "/images/image24.jpg",
      slug: "treating-lower-back-pain",
      category: "Physical Health",
      readTime: "6 min read",
      author: "MORLIFE Team",
      tags: ["back pain", "physical therapy", "treatment", "exercise"],
      featured: false
    },
    {
      id: 3,
      date: "2024-03-24",
      title: "Understanding Schizophrenia: Symptoms, Treatments, and Insights",
      excerpt: "A comprehensive guide to understanding schizophrenia, its symptoms, available treatments, and support strategies.",
      image: "/images/image25.jpg",
      slug: "understanding-schizophrenia",
      category: "Mental Health",
      readTime: "10 min read",
      author: "MORLIFE Team",
      tags: ["schizophrenia", "mental health", "symptoms", "treatment"],
      featured: false
    },
    {
      id: 4,
      date: "2024-03-24",
      title: "Proven Strategies for Enhancing Sleep Quality and Restoration",
      excerpt: "Learn evidence-based techniques to improve your sleep quality and achieve better rest for optimal health and wellness.",
      image: "/images/image26.jpg",
      slug: "enhancing-sleep-quality",
      category: "Wellness",
      readTime: "7 min read",
      author: "MORLIFE Team",
      tags: ["sleep", "wellness", "health", "restoration"],
      featured: true
    },
    {
      id: 5,
      date: "2024-03-24",
      title: "Mastering First Aid Basics: Essential Skills for Handling Emergencies",
      excerpt: "Essential first aid skills everyone should know to handle medical emergencies effectively and potentially save lives.",
      image: "/images/image27.jpg",
      slug: "first-aid-basics",
      category: "Emergency Care",
      readTime: "12 min read",
      author: "MORLIFE Team",
      tags: ["first aid", "emergency", "safety", "skills"],
      featured: false
    },
    {
      id: 6,
      date: "2024-03-23",
      title: "Prioritizing Women's Health: Evidence-Based Preventative Care and Screenings in Africa",
      excerpt: "Comprehensive guide to women's health screenings and preventative care specifically tailored for African healthcare contexts.",
      image: "/images/image28.jpg",
      slug: "womens-health-africa",
      category: "Women's Health",
      readTime: "9 min read",
      author: "MORLIFE Team",
      tags: ["women's health", "preventative care", "screenings", "Africa"],
      featured: true
    },
    {
      id: 7,
      date: "2024-03-23",
      title: "Essential Tips for Maintaining Wellness in Later Life",
      excerpt: "Practical advice and strategies for maintaining physical and mental wellness as you age, promoting healthy aging.",
      image: "/images/image29.jpeg",
      slug: "wellness-later-life",
      category: "Senior Health",
      readTime: "8 min read",
      author: "MORLIFE Team",
      tags: ["senior health", "aging", "wellness", "lifestyle"],
      featured: false
    },
    {
      id: 8,
      date: "2024-03-23",
      title: "Navigating the Storm: Practical Strategies for Coping with Stress and Anxiety",
      excerpt: "Effective coping mechanisms and strategies for managing stress and anxiety in daily life with practical, actionable advice.",
      image: "/images/image30.jpeg",
      slug: "coping-stress-anxiety",
      category: "Mental Health",
      readTime: "6 min read",
      author: "MORLIFE Team",
      tags: ["stress", "anxiety", "coping", "mental health"],
      featured: false
    }
  ]

  const categories = [
    { name: "all", label: "All Articles", icon: BookOpen, count: blogPosts.length },
    { name: "Mental Health", label: "Mental Health", icon: Brain, count: blogPosts.filter(post => post.category === "Mental Health").length },
    { name: "Physical Health", label: "Physical Health", icon: Stethoscope, count: blogPosts.filter(post => post.category === "Physical Health").length },
    { name: "Wellness", label: "Wellness", icon: Heart, count: blogPosts.filter(post => post.category === "Wellness").length },
    { name: "Women's Health", label: "Women's Health", icon: Shield, count: blogPosts.filter(post => post.category === "Women's Health").length },
    { name: "Emergency Care", label: "Emergency Care", icon: Shield, count: blogPosts.filter(post => post.category === "Emergency Care").length },
    { name: "Senior Health", label: "Senior Health", icon: Heart, count: blogPosts.filter(post => post.category === "Senior Health").length }
  ]

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.featured ? 1 : -1
        default:
          return 0
      }
    })
  }, [searchTerm, selectedCategory, sortBy])



  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Health <span className="text-sky-600">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Expert medical advice, wellness tips, and health insights from our team of healthcare professionals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
        </section>



        {/* Search and Filter Section */}
        <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300 bg-white"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-sky-500 text-white border-sky-500 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.name
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              {selectedCategory === "all" ? "All Articles" : selectedCategory}
              <span className="text-slate-500 font-normal ml-2">
                ({filteredAndSortedPosts.length} {filteredAndSortedPosts.length === 1 ? 'article' : 'articles'})
              </span>
            </h2>
          </div>

          {filteredAndSortedPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-600">{post.author}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup Section */}
        <section className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-12 sm:px-12 sm:py-16 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay Informed</h2>
                </div>
                <p className="text-xl text-sky-100 leading-relaxed mb-6">
                  Get the latest health insights, wellness tips, and medical updates delivered straight to your inbox.
                </p>
                <div className="flex items-center gap-2 text-sky-100">
                  <Bell className="w-5 h-5" />
                  <span>Weekly health newsletter • Expert medical advice • No spam, ever</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 rounded-xl text-slate-800 placeholder-slate-500 border-0 focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                  <button className="group w-full bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Subscribe to Newsletter
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <p className="text-sky-100 text-sm text-center mt-4">
                  Join 5,000+ healthcare enthusiasts who trust our insights
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
