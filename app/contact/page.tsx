
"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  CheckCircle,
  User,
  Building,
  Globe
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        })
      }, 3000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Get In <span className="text-sky-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help with any questions about our healthcare services. 
            Reach out to us and we'll respond as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-8 rounded-full"></div>
        </section>

        {/* Contact Methods */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              info: "16 George Sifundika Ave",
              subInfo: "Harare, Zimbabwe",
              color: "from-sky-400 to-sky-600"
            },
            {
              icon: Mail,
              title: "Email Us",
              info: "admin@molifeonline.com",
              subInfo: "inquiries@molifeonline.com",
              color: "from-emerald-400 to-emerald-600"
            },
            {
              icon: Phone,
              title: "Call Us",
              info: "+263 777936637",
              subInfo: "Available 24/7",
              color: "from-purple-400 to-purple-600"
            },
            {
              icon: Clock,
              title: "Office Hours",
              info: "Mon - Fri: 8AM - 6PM",
              subInfo: "Sat - Sun: 9AM - 4PM",
              color: "from-rose-400 to-rose-600"
            }
          ].map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 font-medium">{item.info}</p>
              <p className="text-slate-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </section>

        {/* Main Contact Section */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Send Us a Message</h2>
              <p className="text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Message Sent Successfully!</h3>
                <p className="text-slate-600">
                  Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    What can we help you with?
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300 bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="medical">Medical Question</option>
                    <option value="billing">Billing Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                      placeholder="+263 xxx xxx xxx"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all duration-300 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-sky-300 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-400 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <Link
                  href="/book-appointment"
                  className="group w-full bg-sky-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="tel:+263777936637"
                  className="group w-full bg-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly will you respond?",
                    answer: "We typically respond to all inquiries within 24 hours during business days."
                  },
                  {
                    question: "Can I book appointments online?",
                    answer: "Yes! You can book appointments directly through our online booking system."
                  },
                  {
                    question: "Do you offer emergency consultations?",
                    answer: "Yes, we provide 24/7 emergency consultation services. Call us immediately for urgent matters."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-slate-800 mb-2">{faq.question}</h4>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map and Location Section */}
        <section className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Interactive Google Map */}
            <div className="relative h-96 lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.4!2d31.0522!3d-17.8277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f1b8b8b8b8%3A0x1234567890abcdef!2s16%20George%20Sifundika%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1640995200000!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MOLIFE Medical Services - 16 George Sifundika Ave, Harare, Zimbabwe"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              
              {/* Map Overlay with Address */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-slate-800">MOLIFE Medical</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">16 George Sifundika Ave</p>
                <p className="text-sm text-slate-500">Harare, Zimbabwe</p>
              </div>
            </div>

            {/* Location Info */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Visit Our Office</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">16 George Sifundika Ave</p>
                    <p className="text-slate-600">Harare, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Office Hours</p>
                    <p className="text-slate-600">Mon-Fri: 8AM-6PM, Sat-Sun: 9AM-4PM</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                Our modern healthcare facility is conveniently located in the heart of Harare, 
                easily accessible by public transport and with ample parking available.
              </p>

              <Link
                href="https://www.google.com/maps/dir//16+George+Sifundika+Ave,+Harare,+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-300"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Directions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
