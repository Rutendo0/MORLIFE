"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Calendar, 
  Shield, 
  Heart, 
  Stethoscope, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Users,
  Award,
  Zap,
  Globe,
  ChevronRight,
  Play,
  Quote,
  TrendingUp,
  Activity,
  Brain,
  Pill,
  Home,
  Video,
  MessageCircle,
  Target,
  Rocket
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Video,
      title: "Telemedicine Consultations",
      description: "Connect with certified healthcare professionals through secure video consultations from the comfort of your home.",
      features: ["HD Video Consultations", "24/7 Availability", "HIPAA Compliant Platform", "Instant Prescriptions"]
    },
    {
      icon: Home,
      title: "Home Healthcare Visits",
      description: "Receive professional medical care at your doorstep with our qualified healthcare providers and modern equipment.",
      features: ["Licensed Medical Professionals", "Same-Day Appointments", "Complete Medical Equipment", "Follow-up Care"]
    },
    {
      icon: Pill,
      title: "Digital Prescriptions",
      description: "Streamlined prescription management with direct pharmacy integration and automated refill reminders.",
      features: ["Electronic Prescriptions", "Pharmacy Network Integration", "Medication Reminders", "Refill Management"]
    }
  ]





  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-sky-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-in slide-in-from-left duration-700' : 'opacity-0'}`}>
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-sky-200 text-sky-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm">
                <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                <span>Trusted Healthcare Technology Platform</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
                  <span className="block">Advanced</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                    Healthcare
                  </span>
                  <span className="block">Solutions</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
              </div>
              
              {/* Professional Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Connecting patients with healthcare professionals through innovative telemedicine, 
                home healthcare services, and comprehensive medical equipment solutions.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-start">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 bg-sky-100 text-sky-700 px-8 py-4 rounded-lg font-semibold text-lg border border-sky-200 hover:bg-sky-200 hover:text-sky-800 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">HIPAA Compliant</div>
                    <div className="text-sm text-slate-600">Secure & Private</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Licensed Professionals</div>
                    <div className="text-sm text-slate-600">Certified Healthcare</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className={`relative ${isVisible ? 'animate-in slide-in-from-right duration-700' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <Image
                    src="/images/image1.jpg"
                    alt="Healthcare professional consultation"
                    width={600}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-xl"
                    priority
                  />
                </div>

                {/* Floating Professional Cards */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-sky-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Available 24/7</p>
                      <p className="text-xs text-slate-600">Always accessible</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-sky-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Secure Platform</p>
                      <p className="text-xs text-slate-600">HIPAA Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Technology Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering innovative healthcare services through advanced technology, 
              professional expertise, and patient-centered care.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-600" />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group-hover:gap-3 duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Simple, Professional Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined approach ensures you receive quality healthcare with minimal complexity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Select Your Service",
                  description: "Choose from telemedicine consultations, home visits, or prescription services based on your healthcare needs.",
                  icon: Target
                },
                {
                  step: "02",
                  title: "Schedule Appointment",
                  description: "Book your preferred time slot with our available healthcare professionals through our secure platform.",
                  icon: Calendar
                },
                {
                  step: "03",
                  title: "Secure Payment",
                  description: "Complete your booking with our encrypted payment system that protects your financial information.",
                  icon: Shield
                },
                {
                  step: "04",
                  title: "Receive Care",
                  description: "Connect with your healthcare provider and receive professional medical care tailored to your needs.",
                  icon: Heart
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-2xl"></div>
              <Image
                src="/images/ime.jpeg"
                alt="Healthcare consultation process"
                width={600}
                height={500}
                className="relative w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Mental Health Services</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Professional Mental
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Health Support
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Access qualified mental health professionals through secure, confidential consultations 
                designed to support your psychological well-being.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                  <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Licensed Psychologists</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Professional therapy sessions with certified mental health specialists.
                  </p>
                  <Link href="/book-appointment" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors text-sm">
                    Schedule Session →
                  </Link>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Psychiatrists</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Medical professionals specializing in mental health diagnosis and treatment.
                  </p>
                  <Link href="/book-appointment" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                    Book Consultation →
                  </Link>
                </div>
              </div>
              
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Mental Health Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-2xl"></div>
              <Image
                src="/images/image4.jpg"
                alt="Mental health consultation"
                width={600}
                height={500}
                className="relative w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Medical Equipment */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-2xl"></div>
              <Image
                src="/images/image.jpeg"
                alt="Medical equipment and supplies"
                width={600}
                height={500}
                className="relative w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Medical Equipment Supply</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Professional Medical
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Equipment Solutions
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Comprehensive medical equipment and supply solutions for healthcare facilities, 
                ensuring quality care delivery with reliable, certified equipment.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🛡️", text: "PPE & Safety Equipment" },
                  { icon: "🔬", text: "Diagnostic Instruments" },
                  { icon: "💉", text: "Medical Supplies" },
                  { icon: "⚡", text: "Advanced Technology" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-200 to-blue-300 text-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Professional Healthcare Solutions
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Connect with licensed medical professionals through our secure platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-3 bg-sky-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-400 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-sky-300 text-sky-700 px-8 py-3 rounded-lg font-semibold hover:bg-sky-300 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 mb-3">
                MORLIFE
              </h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                Professional healthcare technology platform connecting patients with certified 
                medical professionals through innovative digital solutions.
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/book-appointment" className="hover:text-sky-400 transition-colors">Telemedicine</Link></li>
                <li><Link href="/book-appointment" className="hover:text-sky-400 transition-colors">Home Healthcare</Link></li>
                <li><Link href="/book-appointment" className="hover:text-sky-400 transition-colors">Mental Health</Link></li>
                <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Medical Equipment</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/about-us" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Molife. Designed by <a href="https://www.niakazi.com/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors font-medium">Niakazi Technology and Solutions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}