"use client"

import { useState } from "react"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ArrowLeft, 
  ChevronRight, 
  BarChart3, 
  MapPin, 
  Mail, 
  CheckCircle, 
  Star,
  Shield,
  Video,
  Home,
  Brain,
  Stethoscope
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "gp",
    name: "Online GP Consultation",
    description: "Comprehensive medical consultation with qualified general practitioners",
    price: 50,
    duration: "30 min",
    icon: Stethoscope,
    color: "bg-blue-500",
    popular: true,
    doctors: [
      { id: "dr-matiki", name: "Dr Matiki", specialty: "General Practitioner", rating: 4.9 },
      { id: "dr-chihumbiri", name: "Dr Chihumbiri", specialty: "General Practitioner", rating: 4.8 }
    ]
  },
  {
    id: "psychology",
    name: "Online Psychological Consultation", 
    description: "Professional mental health support and counseling services",
    price: 90,
    duration: "1 hr",
    icon: Brain,
    color: "bg-purple-500",
    popular: false,
    doctors: [
      { id: "dr-smith", name: "Dr Smith", specialty: "Clinical Psychologist", rating: 4.9 },
      { id: "dr-jones", name: "Dr Jones", specialty: "Counseling Psychologist", rating: 4.7 }
    ]
  },
  {
    id: "home-visit",
    name: "GP Home Visit (Harare)",
    description: "In-person medical consultation at your home in Harare",
    price: 75,
    duration: "45 min",
    icon: Home,
    color: "bg-green-500",
    popular: false,
    doctors: [
      { id: "dr-matiki", name: "Dr Matiki", specialty: "General Practitioner", rating: 4.9 },
      { id: "dr-brown", name: "Dr Brown", specialty: "General Practitioner", rating: 4.6 }
    ]
  },
  {
    id: "psychiatry",
    name: "Online Psychiatry Consultation",
    description: "Specialized psychiatric evaluation and treatment planning",
    price: 120,
    duration: "1 hr",
    icon: Brain,
    color: "bg-indigo-500",
    popular: false,
    doctors: [
      { id: "dr-wilson", name: "Dr Wilson", specialty: "Psychiatrist", rating: 4.8 }
    ]
  }
]

const timeSlots = [
  "11:15 AM", "11:30 AM", "11:45 AM",
  "12:00 PM", "12:15 PM", "12:30 PM",
  "2:00 PM", "2:15 PM", "2:30 PM",
  "3:00 PM", "3:15 PM", "3:30 PM"
]

export default function BookAppointmentPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [bookingError, setBookingError] = useState("")
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
  const [selectedCountryCode, setSelectedCountryCode] = useState("+263")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: ""
  })
  const [emailSignup, setEmailSignup] = useState("")

  const handleBookNow = () => {
    setIsBookingOpen(true)
    setIsLoading(true)
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setStep(1)
    }, 2000)
  }

  const handleServiceSelect = (service: any) => {
    setSelectedService(service)
    setStep(2)
  }

  const handleDoctorSelect = (doctor: any) => {
    setSelectedDoctor(doctor)
    setStep(3)
  }

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
    setStep(4)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const resetBooking = () => {
    setStep(1)
    setSelectedService(null)
    setSelectedDoctor(null)
    setSelectedTimeSlot("")
    setSelectedCountryCode("+263")
    setBookingSuccess(false)
    setBookingError("")
    setIsSubmitting(false)
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: ""
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setBookingError("")

    try {
      // Validate form data
      if (!formData.fullName.trim()) {
        throw new Error("Full name is required")
      }
      if (!formData.phone.trim()) {
        throw new Error("Phone number is required")
      }
      if (!formData.email.trim()) {
        throw new Error("Email is required")
      }
      if (!formData.address.trim()) {
        throw new Error("Address is required")
      }
      if (!formData.city.trim()) {
        throw new Error("City is required")
      }
      if (!formData.state.trim()) {
        throw new Error("State is required")
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Create booking data
      const bookingData = {
        service: selectedService,
        doctor: selectedDoctor,
        timeSlot: selectedTimeSlot,
        countryCode: selectedCountryCode,
        formData,
        bookingId: `MOLIFE-${Date.now()}`,
        bookingDate: new Date().toISOString(),
        status: "confirmed"
      }

      // Log booking data (in real app, this would be sent to your backend)
      console.log("Booking submitted successfully:", bookingData)

      // Show success
      setBookingSuccess(true)
      setStep(5) // Move to success step

    } catch (error) {
      setBookingError(error instanceof Error ? error.message : "An error occurred while booking your appointment")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email signup:", emailSignup)
    setEmailSignup("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image54.jpg"
            alt="Book a Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <Badge className="mb-6 bg-sky-500 text-white hover:bg-sky-600 transition-colors">
              Professional Healthcare Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Book a Consultation
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <div className="flex justify-center -mt-20 relative z-20 mb-16">
        <div className="bg-white rounded-full p-4 shadow-2xl">
          <Image
            src="/images/logo.jpg" 
            alt="Molife Logo"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
        </div>
      </div>




      {/* Enhanced Book Now Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your consultation now and take the first step towards better health with our qualified healthcare professionals.
          </p>
          
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={handleBookNow}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Consultation Now
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                </div>
              </div>
              <DialogTitle>Molife medical services</DialogTitle>
            </div>
          </DialogHeader>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-sky-400 mb-4"></div>
              <p className="text-gray-600">Loading booking system...</p>
            </div>
          ) : (
            <>
              {/* Step 1: Enhanced Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Service</h3>
                    <p className="text-gray-600">Select the healthcare service that best meets your needs</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        onClick={() => handleServiceSelect(service)}
                        className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-sky-300 relative overflow-hidden"
                      >
                        {service.popular && (
                          <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
                            Popular
                          </Badge>
                        )}
                        
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className="h-7 w-7 text-white" />
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                              
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{service.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-semibold text-sky-600">${service.price}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  <span>{service.doctors.length} doctor{service.doctors.length > 1 ? 's' : ''}</span>
                                </div>
                              </div>
                            </div>
                            
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-sky-500 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Enhanced Doctor Selection */}
              {step === 2 && selectedService && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                      <p className="text-gray-600">Choose your preferred healthcare provider</p>
                    </div>
                  </div>
                  
                  <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${selectedService.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <selectedService.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{selectedService.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="font-semibold text-sky-600 text-lg">${selectedService.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Available Doctors:</h4>
                    <div className="grid gap-4">
                      {selectedService.doctors.map((doctor: any) => (
                        <Card
                          key={doctor.id}
                          onClick={() => handleDoctorSelect(doctor)}
                          className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-sky-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="font-bold text-white text-lg">{doctor.name.charAt(3)}</span>
                              </div>
                              
                              <div className="flex-1">
                                <h5 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                                  {doctor.name}
                                </h5>
                                <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">{doctor.rating}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-sky-500 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Time Slot Selection */}
              {step === 3 && selectedDoctor && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleBack}
                      className="p-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <h3 className="text-lg font-semibold">Select Time</h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium">June 2025</h4>
                    <p className="text-sm text-gray-600">Monday 30 June</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant="outline"
                        onClick={() => handleTimeSlotSelect(slot)}
                        className="h-12 text-sm"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium">${selectedService.price}</p>
                  </div>
                </div>
              )}

              {/* Step 4: Booking Form */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleBack}
                      className="p-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <h3 className="text-lg font-semibold">Booking Details</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select 
                          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                        >
                          <option value="+263">+263 (Zimbabwe)</option>
                          <option value="+27">+27 (South Africa)</option>
                          <option value="+1">+1 (US/Canada)</option>
                          <option value="+44">+44 (UK)</option>
                        </select>
                        <input
                          type="tel"
                          required
                          placeholder="Enter phone number"
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your street address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your city"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your state/province"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                      />
                    </div>

                    {bookingError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600 text-sm">{bookingError}</p>
                      </div>
                    )}

                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Total Amount:</span>
                        <span className="text-lg font-bold text-sky-600">${selectedService.price}</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing...
                        </div>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </form>
                </div>
              )}

              {/* Step 5: Booking Success */}
              {step === 5 && bookingSuccess && (
                <div className="text-center space-y-6 py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-600 mb-6">
                      Your appointment has been successfully booked. You will receive a confirmation email shortly.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left">
                    <h4 className="font-semibold text-green-800 mb-4">Booking Details:</h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-medium">{selectedDoctor?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Patient:</span>
                        <span className="font-medium">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone:</span>
                        <span className="font-medium">{selectedCountryCode} {formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between border-t border-green-300 pt-2 mt-2">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold">${selectedService?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>What's Next?</strong><br />
                      • You'll receive a confirmation email with appointment details<br />
                      • Our team will contact you 24 hours before your appointment<br />
                      • For online consultations, you'll receive a secure video link<br />
                      • For any questions, contact us at support@molife.com
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setIsBookingOpen(false)
                        resetBooking()
                      }}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        resetBooking()
                        setStep(1)
                      }}
                      variant="outline"
                      className="border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium"
                    >
                      Book Another Appointment
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Enhanced Location & Contact Section */}
      <section className="bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Clinic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Harare, our modern clinic provides a comfortable and professional environment for all your healthcare needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Map Section */}
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.4!2d31.0522!3d-17.8277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4f1b8b8b8b8%3A0x1234567890abcdef!2s16%20George%20Sifundika%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1640995200000!5m2!1sen!2szw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MORLIFE Medical Services - 16 George Sifundika Ave, Harare, Zimbabwe"
                  className="rounded-t-lg"
                ></iframe>
              </div>
              

            </Card>

            {/* Enhanced Newsletter Section */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-sky-500 to-blue-600 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      Stay Connected with MORLIFE
                    </h3>
                    <p className="text-sky-100 text-lg leading-relaxed">
                      Get health tips, appointment reminders, and exclusive updates delivered to your inbox.
                    </p>
                  </div>
                  
                  <form onSubmit={handleEmailSignup} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={emailSignup}
                        onChange={(e) => setEmailSignup(e.target.value)}
                        className="w-full p-4 rounded-xl text-gray-900 placeholder-gray-500 border-none outline-none shadow-lg focus:ring-4 focus:ring-white/20 transition-all"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Subscribe to Newsletter
                    </Button>
                  </form>
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-sky-100 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Health tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Appointment reminders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Exclusive offers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 text-center text-gray-600">
        <p>© 2024 MORLIFE Medical Services. Designed by <a href="https://www.niakazi.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-500 transition-colors font-medium">niakazi</a></p>
      </footer>
    </div>
  )
}
