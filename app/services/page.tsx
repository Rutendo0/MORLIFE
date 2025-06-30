
import Header from "@/components/header"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-600 mb-6">
            OUR SERVICES
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet your needs wherever you are
          </p>
        </div>

        {/* Telemedicine Service */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">TELEMEDICINE</h2>
              <p className="text-gray-700 mb-6">
                Connect with qualified healthcare professionals from the comfort of your home. Our telemedicine 
                platform provides secure, convenient access to medical consultations, follow-up appointments, 
                and health monitoring services.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Video consultations with licensed doctors</li>
                <li>Real-time health monitoring</li>
                <li>Digital prescription services</li>
                <li>24/7 emergency consultation availability</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/image1.png"
                alt="Telemedicine consultation"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Home Visits Service */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/image2.png"
                alt="Home visit healthcare"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">HOME VISITS</h2>
              <p className="text-gray-700 mb-6">
                Professional healthcare services delivered directly to your home. Our qualified medical team 
                provides in-person care for patients who need hands-on medical attention or prefer the 
                comfort of their own environment.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Qualified healthcare professionals</li>
                <li>Comprehensive health assessments</li>
                <li>Chronic disease management</li>
                <li>Post-operative care</li>
                <li>Elderly care services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prescription Services */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">E-PRESCRIPTION REFILLS</h2>
              <p className="text-gray-700 mb-6">
                Streamline your medication management with our digital prescription service. Skip the pharmacy 
                queues and have your prescriptions processed and delivered efficiently.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Digital prescription processing</li>
                <li>Medication delivery services</li>
                <li>Prescription reminders</li>
                <li>Drug interaction checking</li>
                <li>Insurance verification</li>
              </ul>
            </div>
            <div>
              <Image
                src="https://thumbs.dreamstime.com/b/bottle-pills-18402018.jpg"
                alt="Prescription medication"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Mental Health Services */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl text-blue-600 mb-4">MENTAL HEALTH SERVICES</h2>
            <p className="text-gray-700">
              Comprehensive mental health support with qualified psychologists and psychiatrists
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl text-blue-600 mb-4">PSYCHOLOGY SERVICES</h3>
              <p className="text-gray-700 mb-4">
                Professional counseling and therapy services for various mental health conditions including 
                anxiety, depression, trauma, and relationship issues.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Individual therapy sessions</li>
                <li>Couples counseling</li>
                <li>Family therapy</li>
                <li>Cognitive behavioral therapy</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl text-blue-600 mb-4">PSYCHIATRIC SERVICES</h3>
              <p className="text-gray-700 mb-4">
                Medical treatment for mental health disorders with qualified psychiatrists who can provide 
                diagnosis, medication management, and comprehensive treatment plans.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Psychiatric evaluations</li>
                <li>Medication management</li>
                <li>Treatment planning</li>
                <li>Crisis intervention</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Medical Equipment Supply */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/image3.png"
                alt="Medical equipment supply"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl text-blue-600 mb-6">MEDICAL EQUIPMENT SUPPLY</h2>
              <p className="text-gray-700 mb-6">
                High-quality medical equipment and supplies for healthcare facilities, clinics, and individual needs. 
                We ensure reliable delivery and competitive pricing for all medical equipment requirements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Diagnostic equipment</li>
                <li>Personal protective equipment (PPE)</li>
                <li>Medical consumables</li>
                <li>Hospital furniture</li>
                <li>Laboratory equipment</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
