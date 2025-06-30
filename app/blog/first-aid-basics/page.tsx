
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
              src="/images/first-aid.jpg"
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
              <strong>Introduction:</strong> First aid knowledge can be the difference between life and death in emergency situations. Learning basic first aid skills empowers individuals to provide immediate care before professional medical help arrives, potentially saving lives and preventing further injury.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Why First Aid Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The first few minutes after an injury or medical emergency are often the most critical. Proper first aid can:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Preserve life and prevent the condition from worsening</li>
              <li>• Promote recovery and reduce recovery time</li>
              <li>• Provide reassurance and comfort to the victim</li>
              <li>• Prevent secondary injuries</li>
              <li>• Bridge the gap until professional help arrives</li>
            </ul>
          </section>

          {/* The Primary Survey */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">The Primary Survey: DRABC</h2>
            <p className="text-gray-700 mb-6">
              Before providing any first aid, always perform a primary survey to assess the situation and the casualty's condition:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-800">D - Danger</h3>
                <p className="text-gray-700">Check for dangers to yourself, bystanders, and the casualty. Ensure the scene is safe.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-800">R - Response</h3>
                <p className="text-gray-700">Check if the person is conscious and responsive. Tap shoulders and speak loudly.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-800">A - Airway</h3>
                <p className="text-gray-700">Ensure the airway is clear. Tilt head back and lift chin to open airway.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-800">B - Breathing</h3>
                <p className="text-gray-700">Look, listen, and feel for normal breathing for no more than 10 seconds.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-800">C - Circulation</h3>
                <p className="text-gray-700">Check for severe bleeding and signs of circulation.</p>
              </div>
            </div>
          </section>

          {/* CPR */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Cardiopulmonary Resuscitation (CPR)</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-red-600 mb-2">When to Perform CPR</h3>
              <p className="text-gray-700">
                Perform CPR when a person is unresponsive and not breathing normally or not breathing at all.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Adult CPR Steps</h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li><strong>Position:</strong> Place person on firm, flat surface. Tilt head back, lift chin.</li>
                  <li><strong>Hand placement:</strong> Place heel of hand on center of chest, between nipples.</li>
                  <li><strong>Compressions:</strong> Push hard and fast at least 2 inches deep, 100-120 per minute.</li>
                  <li><strong>Rescue breaths:</strong> After 30 compressions, give 2 rescue breaths.</li>
                  <li><strong>Continue:</strong> Repeat cycles of 30 compressions and 2 breaths until help arrives.</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Key CPR Points</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Allow complete chest recoil between compressions</li>
                  <li>• Minimize interruptions</li>
                  <li>• Switch with another person every 2 minutes if possible</li>
                  <li>• Don't stop until emergency services take over</li>
                  <li>• Use an AED (Automated External Defibrillator) if available</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Choking */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Choking</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-700 mb-3">Mild Choking (Person can speak/cough)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Encourage continuous coughing</li>
                  <li>• Don't pat the back</li>
                  <li>• Stay with the person</li>
                  <li>• If condition worsens, treat as severe choking</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-3">Severe Choking (Cannot speak/cough)</h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Give 5 back blows between shoulder blades</li>
                  <li>Give 5 abdominal thrusts (Heimlich maneuver)</li>
                  <li>Alternate between back blows and abdominal thrusts</li>
                  <li>If person becomes unconscious, start CPR</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Bleeding Control */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Controlling Bleeding</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Steps to Control Severe Bleeding</h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li><strong>Apply direct pressure:</strong> Use a clean cloth or gauze pad directly on the wound</li>
                  <li><strong>Maintain pressure:</strong> Don't lift the cloth to check bleeding</li>
                  <li><strong>Elevate:</strong> Raise the injured area above heart level if possible</li>
                  <li><strong>Add more padding:</strong> If blood soaks through, add more layers without removing the first</li>
                  <li><strong>Apply pressure to pressure points:</strong> If bleeding doesn't stop, apply pressure to arterial pressure points</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-3">Important Notes</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Wear gloves or use barrier protection when possible</li>
                  <li>• Don't remove embedded objects</li>
                  <li>• Apply pressure around embedded objects, not on them</li>
                  <li>• Don't use a tourniquet unless trained</li>
                  <li>• Monitor for signs of shock</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Burns */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Treating Burns</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">First-Degree Burns</h3>
                <p className="text-sm text-gray-700 mb-2">Red, painful, no blisters</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Cool with water 10-20 minutes</li>
                  <li>• Remove jewelry/clothing</li>
                  <li>• Apply aloe vera or moisturizer</li>
                  <li>• Take pain relievers if needed</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-600 mb-2">Second-Degree Burns</h3>
                <p className="text-sm text-gray-700 mb-2">Red, painful, with blisters</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Cool with water 10-20 minutes</li>
                  <li>• Don't break blisters</li>
                  <li>• Apply loose, sterile bandage</li>
                  <li>• Seek medical attention</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">Third-Degree Burns</h3>
                <p className="text-sm text-gray-700 mb-2">White/charred, painless</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Call emergency services immediately</li>
                  <li>• Don't use water</li>
                  <li>• Cover with sterile cloth</li>
                  <li>• Monitor breathing and circulation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shock */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recognizing and Treating Shock</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Signs of Shock</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Pale, cold, clammy skin</li>
                  <li>• Rapid, weak pulse</li>
                  <li>• Shallow, rapid breathing</li>
                  <li>• Weakness or fatigue</li>
                  <li>• Nausea or vomiting</li>
                  <li>• Confusion or anxiety</li>
                  <li>• Decreased alertness</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Treatment for Shock</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lay person flat, elevate legs 8-12 inches</li>
                  <li>• Keep person warm but not hot</li>
                  <li>• Don't give food or water</li>
                  <li>• Monitor breathing and pulse</li>
                  <li>• Be prepared to perform CPR</li>
                  <li>• Get emergency medical help immediately</li>
                </ul>
              </div>
            </div>
          </section>

          {/* First Aid Kit */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Essential First Aid Kit Items</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 mb-3">Basic Supplies</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Adhesive bandages (various sizes)</li>
                    <li>• Sterile gauze pads</li>
                    <li>• Medical tape</li>
                    <li>• Elastic bandages</li>
                    <li>• Triangular bandages</li>
                    <li>• Antiseptic wipes</li>
                    <li>• Disposable gloves</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-600 mb-3">Additional Items</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Thermometer</li>
                    <li>• Scissors</li>
                    <li>• Tweezers</li>
                    <li>• Instant cold compress</li>
                    <li>• Emergency contact numbers</li>
                    <li>• First aid manual</li>
                    <li>• Medications (aspirin, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* When to Call Emergency Services */}
          <section className="bg-red-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-red-600 mb-4">When to Call Emergency Services</h2>
            <p className="text-gray-700 mb-4">
              Always call emergency services (911 or your local emergency number) for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-1">
                <li>• Unconsciousness or altered mental state</li>
                <li>• Difficulty breathing or no breathing</li>
                <li>• Severe bleeding that won't stop</li>
                <li>• Chest pain or heart attack symptoms</li>
                <li>• Stroke symptoms</li>
                <li>• Severe burns</li>
              </ul>
              <ul className="text-gray-700 space-y-1">
                <li>• Suspected spinal injury</li>
                <li>• Severe allergic reactions</li>
                <li>• Poisoning</li>
                <li>• Severe trauma</li>
                <li>• Any life-threatening emergency</li>
                <li>• When in doubt</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Mastering first aid basics can make you a valuable first responder in emergency situations. While this guide provides essential information, hands-on training from certified instructors is highly recommended. Consider taking a certified first aid course to practice these skills and stay current with the latest techniques. Remember, the key to effective first aid is staying calm, assessing the situation carefully, and providing appropriate care within your skill level while seeking professional help when needed.
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
