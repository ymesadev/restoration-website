import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav active="/" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-white text-sm">24/7 Emergency Service Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Florida&apos;s Full-Service Property Restoration
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Fire damage, water damage, mold remediation, and roofing repair under one roof.
                Our certified experts respond fast and restore your property with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition shadow-lg hover:shadow-xl">
                  Get Free Estimate
                </a>
                <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center transition border border-white/30">
                  (954) 231-0508
                </a>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-blue-200 text-sm">Properties Restored</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Request a Free Quote</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/50"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-blue-200 focus:outline-none focus:border-white/50">
                    <option value="">Select Service Needed</option>
                    <option value="fire">Fire Damage Restoration</option>
                    <option value="water">Water Damage Restoration</option>
                    <option value="mold-inspection">Mold Inspection & Testing</option>
                    <option value="mold-remediation">Mold Remediation</option>
                    <option value="roof-storm">Roof Storm Damage</option>
                    <option value="roof-leak">Roof Leak Repair</option>
                    <option value="smoke">Smoke & Odor Removal</option>
                    <option value="emergency">24/7 Emergency</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/50"
                  />
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="hero-optin"
                      name="optin"
                      defaultChecked
                      className="mt-1 h-4 w-4 text-sky-500 border-white/30 rounded focus:ring-sky-500"
                    />
                    <label htmlFor="hero-optin" className="text-sm text-blue-200">
                      I agree to receive text messages and calls regarding my inquiry. Message and data rates may apply.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 rounded-lg transition">
                    Get My Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span className="font-medium">IICRC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
              <span className="font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
              <span className="font-medium">24/7 Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Restoration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fire and water damage to mold and roofing &mdash; one call handles it all
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fire Damage */}
            <Link href="/services/fire-damage-restoration" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Fire Damage Restoration</h3>
              <p className="text-gray-600 text-sm">Complete fire and smoke recovery including structural repair and content cleaning.</p>
            </Link>
            {/* Water Damage */}
            <Link href="/services/water-damage-restoration" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 01-4-4c0-2.5 4-7 4-7s4 4.5 4 7a4 4 0 01-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Water Damage Restoration</h3>
              <p className="text-gray-600 text-sm">Emergency water extraction, drying, and complete property restoration.</p>
            </Link>
            {/* Mold Inspection */}
            <Link href="/services/mold-inspection" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Mold Inspection & Testing</h3>
              <p className="text-gray-600 text-sm">Advanced detection with thermal imaging, moisture meters, and lab analysis.</p>
            </Link>
            {/* Mold Remediation */}
            <Link href="/services/mold-remediation" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Mold Remediation</h3>
              <p className="text-gray-600 text-sm">Safe, complete mold elimination with HEPA filtration and verification testing.</p>
            </Link>
            {/* Roof Storm Damage */}
            <Link href="/services/roof-storm-damage" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Roof Storm Damage</h3>
              <p className="text-gray-600 text-sm">Emergency tarping, full inspection, and complete roof repair after storms.</p>
            </Link>
            {/* Roof Leak Repair */}
            <Link href="/services/roof-leak-repair" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Roof Leak Repair</h3>
              <p className="text-gray-600 text-sm">Find the source, fix the leak, and repair any interior water damage.</p>
            </Link>
            {/* Smoke & Odor */}
            <Link href="/services/smoke-odor-removal" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Smoke & Odor Removal</h3>
              <p className="text-gray-600 text-sm">Professional deodorization using thermal fogging and ozone treatment.</p>
            </Link>
            {/* Emergency */}
            <Link href="/services/emergency-services" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">24/7 Emergency Services</h3>
              <p className="text-gray-600 text-sm">Immediate response for fire, water, storm, and mold emergencies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Florida Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Florida Properties Need Restoration Experts</h2>
              <p className="text-blue-100 text-lg mb-8">
                Florida&apos;s subtropical climate, hurricane exposure, and unique building challenges mean your property
                faces threats year-round. Having a trusted restoration partner on call makes all the difference.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Hurricane Season:</strong> Annual storms bring wind damage, roof failures, and flooding that require immediate professional response</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>High Humidity:</strong> 70%+ humidity year-round creates ideal conditions for mold growth and water damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Lightning Capital:</strong> Florida leads the nation in lightning strikes, causing fires and electrical damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Aging Infrastructure:</strong> Many Florida homes have older roofing, plumbing, and HVAC systems prone to failure</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Common Damage Signs</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <span className="text-3xl">💧</span>
                  <div>
                    <h4 className="font-medium">Water Stains</h4>
                    <p className="text-blue-200 text-sm">Discoloration on ceilings or walls from leaks or flooding</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <span className="text-3xl">👃</span>
                  <div>
                    <h4 className="font-medium">Musty Odors</h4>
                    <p className="text-blue-200 text-sm">Persistent damp or smoky smell indicating hidden damage</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <span className="text-3xl">🏠</span>
                  <div>
                    <h4 className="font-medium">Roof Damage</h4>
                    <p className="text-blue-200 text-sm">Missing shingles, sagging areas, or visible storm damage</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <span className="text-3xl">🤧</span>
                  <div>
                    <h4 className="font-medium">Health Symptoms</h4>
                    <p className="text-blue-200 text-sm">Allergies, respiratory issues from mold or smoke exposure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Restoration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to restore your property quickly and completely
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600">
                We arrive within hours to assess damage and begin immediate mitigation to prevent further loss.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment & Plan</h3>
              <p className="text-gray-600">
                Thorough inspection documents all damage and creates a detailed restoration plan for your approval.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Restoration</h3>
              <p className="text-gray-600">
                Our certified teams execute repairs, remediation, and rebuilding to restore your property completely.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Walkthrough</h3>
              <p className="text-gray-600">
                We verify everything meets our standards and yours before completing the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Florida&apos;s Trusted Restoration Experts</h2>
              <p className="text-gray-600 text-lg mb-6">
                With over 15 years serving Florida property owners, FloridaRestorePros has built a
                reputation for excellence in complete property restoration. Our team of certified professionals
                handles fire, water, mold, and roofing damage under one roof.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re fully licensed, insured, and use the latest technology and methods
                to ensure your property is restored safely and completely.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">5,000+</div>
                  <div className="text-gray-600">Properties Restored</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Certifications</h3>
              <ul className="space-y-4">
                {["IICRC Certified Firm", "Florida State Licensed", "EPA Lead-Safe Certified", "Licensed Roofing Contractor", "BBB A+ Rating", "$2M Liability Insurance"].map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of Florida property owners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;After Hurricane Ian, we had major roof damage and flooding. FloridaRestorePros handled everything &mdash;
                tarping, water extraction, mold prevention, and full roof replacement. Incredible team!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">MJ</div>
                <div>
                  <div className="font-medium text-gray-900">Maria Johnson</div>
                  <div className="text-gray-500 text-sm">Fort Myers, FL</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;A kitchen fire left us devastated, but FloridaRestorePros made the entire process manageable.
                They handled the fire cleanup, smoke removal, and even worked with our insurance. Our home looks better than before.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">RT</div>
                <div>
                  <div className="font-medium text-gray-900">Robert Thompson</div>
                  <div className="text-gray-500 text-sm">Miami, FL</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;As a property manager, I&apos;ve used FloridaRestorePros for water damage, mold, and roof repairs across
                multiple properties. They&apos;re reliable, fairly priced, and always do excellent work. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">SC</div>
                <div>
                  <div className="font-medium text-gray-900">Sandra Chen</div>
                  <div className="text-gray-500 text-sm">Orlando, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">Proudly serving communities throughout Florida</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Miami', 'Fort Lauderdale', 'Orlando', 'Jacksonville', 'Fort Myers', 'Naples', 'West Palm Beach', 'Sarasota', 'Gainesville', 'Tallahassee', 'Boca Raton'].map((city) => (
              <Link key={city} href={`/locations/${city.toLowerCase().replace(/ /g, '-')}`} className="bg-gray-50 rounded-lg py-4 px-2 hover:bg-blue-50 hover:text-blue-700 transition">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Estimate</h2>
              <p className="text-blue-100 text-lg mb-8">
                Don&apos;t let property damage get worse. Contact us today for a
                free, no-obligation estimate. We handle fire, water, mold, and roofing.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">Call Us 24/7</div>
                    <a href="tel:9542310508" className="text-xl font-semibold hover:text-blue-200">(954) 231-0508</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm">Headquarters</div>
                    <div className="text-xl font-semibold">Serving All of Florida</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Free Quote</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                <input type="text" placeholder="Zip Code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600">
                  <option value="">Service Needed</option>
                  <option value="fire">Fire Damage Restoration</option>
                  <option value="water">Water Damage Restoration</option>
                  <option value="mold-inspection">Mold Inspection & Testing</option>
                  <option value="mold-remediation">Mold Remediation</option>
                  <option value="roof-storm">Roof Storm Damage</option>
                  <option value="roof-leak">Roof Leak Repair</option>
                  <option value="smoke">Smoke & Odor Removal</option>
                  <option value="emergency">Emergency Service</option>
                </select>
                <textarea placeholder="Tell us about your situation..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="contact-optin"
                    name="optin"
                    defaultChecked
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="contact-optin" className="text-sm text-gray-600">
                    I agree to receive text messages and calls regarding my inquiry. Message and data rates may apply.
                  </label>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition">
                  Get My Free Quote
                </button>
                <p className="text-gray-500 text-sm text-center">We respond within 1 hour during business hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">FloridaRestore</span>
                <span className="text-2xl font-light text-white">Pros</span>
              </div>
              <p className="text-sm">
                Florida&apos;s trusted restoration experts. Fire, water, mold, and roofing restoration for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/fire-damage-restoration" className="hover:text-blue-400 transition">Fire Damage</Link></li>
                <li><Link href="/services/water-damage-restoration" className="hover:text-blue-400 transition">Water Damage</Link></li>
                <li><Link href="/services/mold-remediation" className="hover:text-blue-400 transition">Mold Remediation</Link></li>
                <li><Link href="/services/roof-storm-damage" className="hover:text-blue-400 transition">Roof Repair</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/miami" className="hover:text-blue-400 transition">Miami</Link></li>
                <li><Link href="/locations/fort-lauderdale" className="hover:text-blue-400 transition">Fort Lauderdale</Link></li>
                <li><Link href="/locations/orlando" className="hover:text-blue-400 transition">Orlando</Link></li>
                <li><Link href="/locations" className="hover:text-blue-400 transition">All Locations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:9542310508" className="hover:text-blue-400 transition">(954) 231-0508</a></li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} FloridaRestorePros. All rights reserved. Licensed & Insured.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400 transition">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
