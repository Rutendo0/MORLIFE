import Header from "@/components/header"

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-light text-blue-200 mb-8 tracking-wide">OUR OFFERS</h1>
          <p className="text-lg">Discover our comprehensive healthcare services and special offers.</p>
        </div>
      </main>
    </div>
  )
}
