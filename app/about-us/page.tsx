"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AboutUsPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/about-us/who-we-are")
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl text-blue-600 mb-4">Redirecting...</h1>
        <p className="text-gray-600">You are being redirected to our About Us page.</p>
      </div>
    </div>
  )
}