
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function FirstAidBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-8 leading-relaxed">
            MASTERING FIRST AID BASICS: ESSENTIAL SKILLS FOR HANDLING EMERGENCIES
          </h1>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <Image
              src="/images/image45.jpg"
              alt="First aid basics illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <article className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Introduction:</strong> In any emergency situation, having basic first aid skills can mean the difference between life and death. Whether you're at home, at work, or out in the community, being prepared to respond effectively can save lives and prevent further injury. In this comprehensive guide, we'll delve into essential first aid skills that everyone should know, along with step-by-step instructions on how to perform them.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">

            <div className="flex justify-center mb-8">
                          <Image
                            src="/images/image46.jpeg"
                            alt="Ergonomic workspace setup"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
            <h2 className="text-xl font-semibold text-gray-600 mb-4">1. Cardiopulmonary Resuscitation (CPR):</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• CPR is a critical skill that can sustain a person's life until professional help arrives, particularly in cases of cardiac arrest or drowning.</li>
              <li>• To perform CPR, remember the acronym "CAB": Compression, Airway, Breathing.</li>
              <li>• Start with chest compressions: Place the heel of one hand on the center of the person's chest, interlock your fingers, and compress the chest to a depth of about 2 inches at a rate of 100-120 compressions per minute.</li>
              <li>• Open the airway by tilting the person's head back and lifting the chin.</li>
              <li>• Give rescue breaths by pinching the person's nose shut, covering their mouth with yours, and giving two breaths, each lasting about one second.</li>
            <li>Continue cycles of 30 compressions and 2 breaths until help arrives or the person starts breathing.</li>
            </ul>

<h2 className="text-xl font-semibold text-gray-600 mb-4">2. Choking Relief:</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Choking occurs when a person's airway is blocked, preventing them from breathing effectively.</li>
              <li>• The Heimlich maneuver is the primary technique used to dislodge an obstructed airway:</li>
              <li>• Stand behind the person and wrap your arms around their waist.</li>
              <li>• Make a fist with one hand and place it slightly above the person's navel, thumb side in.</li>
              <li>• Grasp your fist with your other hand and press into the person's abdomen with a quick, upward thrust.</li>
            <li>Repeat thrusts until the object is dislodged or the person becomes unconscious.</li>
            </ul>

<h2 className="text-xl font-semibold text-gray-600 mb-4">3. Treating Bleeding and Wounds:</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Proper wound care can prevent infection and promote healing.</li>
              <li>• Start by applying direct pressure to the wound with a clean cloth or bandage to stop bleeding.</li>
              <li>• Elevate the injured area above the level of the heart if possible to reduce blood flow.</li>
              <li>• Clean the wound with soap and water, and apply an antibiotic ointment if available.</li>
              <li>• Cover the wound with a sterile dressing or bandage and secure it in place.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-600 mb-4">4. Managing Burns:</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Burns can range from minor to severe and require prompt treatment to prevent complications.</li>
              <li>• For minor burns, cool the affected area with running water for several minutes to soothe the pain and reduce swelling.</li>
              <li>• Cover the burn with a sterile gauze bandage or clean cloth.</li>
              <li>• For more severe burns, seek medical attention immediately and avoid applying ointments or ice, as they can further damage the skin.</li>
            </ul>

           <div className="flex justify-center mb-8">
                         <Image
                           src="/images/image47.jpg"
                           alt="Ergonomic workspace setup"
                           width={500}
                           height={300}
                           className="rounded-lg shadow-lg"
                         />
                       </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              By mastering these essential first aid skills, you can be better prepared to handle emergencies and provide life-saving assistance when it matters most. Remember to stay calm, assess the situation, and take action promptly. With practice and knowledge, you can make a difference in the lives of those around you during times of crisis.
            </p>
          </section>
        </article>

        <div className="mt-16 flex justify-between items-center max-w-4xl mx-auto">
          <Link 
            href="/blog/enhancing-sleep-quality"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <div className="text-left">
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">ENHANCING SLEEP QUALITY</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/womens-health-africa"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">WOMEN'S HEALTH IN AFRICA</div>
            </div>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
