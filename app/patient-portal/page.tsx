"use client"
import Header from "@/components/header"
import { useEffect } from "react"

export default function PatientPortalPage() {
  useEffect(() => {
    // Redirect to the Setmore patient portal
    window.location.href = "https://molifecom.setmore.com/"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-light text-blue-200 mb-8 tracking-wide">PATIENT PORTAL</h1>
          <p className="text-lg mb-8">Redirecting you to our patient portal...</p>
          <p className="text-sm opacity-75">
            If you are not redirected automatically, 
            <a 
              href="https://molifecom.setmore.com/" 
              className="underline hover:text-blue-100 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
