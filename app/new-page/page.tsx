
import Header from "@/components/header"

export default function NewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
            NEW PAGE
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to our new page section
          </p>
        </div>

        <section className="py-16">
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              This page is under development. More content will be added soon.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
