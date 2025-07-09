"use client"

import { useState } from "react"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Phone, ArrowLeft, ChevronRight, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const services = [
  {
    id: "gp",
    name: "ONLINE GP CONSULTATION",
    price: 50,
    duration: "30 min",
    doctors: [
      { id: "dr-matiki", name: "Dr Matiki", specialty: "General Practitioner" },
      { id: "dr-chihumbiri", name: "Dr Chihumbiri", specialty: "General Practitioner" }
    ]
  },
  {
    id: "psychology",
    name: "ONLINE PSYCHOLOGICAL CONSULTATION", 
    price: 90,
    duration: "1 hr",
    doctors: [
      { id: "dr-smith", name: "Dr Smith", specialty: "Clinical Psychologist" },
      { id: "dr-jones", name: "Dr Jones", specialty: "Counseling Psychologist" }
    ]
  },
  {
    id: "home-visit",
    name: "GP HOME VISIT (HARARE)",
    price: 75,
    duration: "45 min",
    doctors: [
      { id: "dr-matiki", name: "Dr Matiki", specialty: "General Practitioner" },
      { id: "dr-brown", name: "Dr Brown", specialty: "General Practitioner" }
    ]
  },
  {
    id: "psychiatry",
    name: "ONLINE PSYCHIATRY CONSULTATION",
    price: 120,
    duration: "1 hr",
    doctors: [
      { id: "dr-wilson", name: "Dr Wilson", specialty: "Psychiatrist" }
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
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
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
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: ""
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", {
      service: selectedService,
      doctor: selectedDoctor,
      timeSlot: selectedTimeSlot,
      formData
    })
    setIsBookingOpen(false)
    resetBooking()
  }

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email signup:", emailSignup)
    setEmailSignup("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Hands Holding Phone */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/image54.jpg')"
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
              BOOK A CONSULTATION.
            </h1>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

     <div className="flex justify-center my-12">
  <Image
    src="/images/logo.jpg" 
    alt="Molife Logo"
    width={160}
    height={160}
    className="rounded-full shadow-lg"
    priority
  />
</div>


      {/* Book Now Button */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={handleBookNow}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2 mx-auto"
          >
            <BarChart3 className="w-5 h-5" />
            Book now
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <DialogTitle>Molife medical services</DialogTitle>
            </div>
          </DialogHeader>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading booking system...</p>
            </div>
          ) : (
            <>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}

              {/* Step 2: Price & Doctor Selection */}
              {step === 2 && selectedService && (
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
                    <h3 className="text-lg font-semibold">{selectedService.name}</h3>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>{selectedService.duration}</span>
                      <span className="font-semibold">${selectedService.price}</span>
                    </div>
                  </div>

                  <h4 className="font-medium mb-3">Select Doctor:</h4>
                  {selectedService.doctors.map((doctor: any) => (
                    <div
                      key={doctor.id}
                      onClick={() => handleDoctorSelect(doctor)}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="font-medium">{doctor.name.charAt(3)}</span>
                        </div>
                        <div>
                          <h5 className="font-medium">{doctor.name}</h5>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
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
                        <select className="p-3 border border-gray-300 rounded-lg">
                          <option>+27</option>
                          <option>+263</option>
                        </select>
                        <input
                          type="tel"
                          required
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                      />
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg mt-4">
                      <p className="text-sm font-medium">${selectedService.price}</p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                    >
                      Confirm Booking
                    </Button>
                  </form>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Bottom Section with Map and Email Signup */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 bg-gray-200 relative">
                {/* Placeholder map - you can replace with actual Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-600 font-medium">Harare</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Signup Section */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                BRINGING HEALTH TO YOUR FINGERTIPS, ONE CLICK AT A TIME WITH MOLIFE MEDICAL SERVICES.
              </h2>
              
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailSignup}
                  onChange={(e) => setEmailSignup(e.target.value)}
                  className="w-full p-4 rounded-lg text-gray-900 placeholder-gray-500 border-none outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 text-center text-gray-600">
        <p>2024 copyright MoLife medical services, designed by <strong>Gorilla Research and Investments</strong></p>
      </footer>
    </div>
  )
}
