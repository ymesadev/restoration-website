import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Our Services | Florida Property Restoration | FloridaRestorePros",
  description: "Complete property restoration services in Florida: fire damage, water damage, mold remediation, roof repair, smoke removal, and 24/7 emergency response.",
};

const services = [
  {
    id: "fire-damage-restoration",
    title: "Fire Damage Restoration",
    subtitle: "Complete Fire & Smoke Recovery",
    description: "Comprehensive fire damage restoration including structural repair, soot removal, content cleaning, and complete reconstruction services.",
    features: [
      "Emergency board-up and property securing",
      "Structural damage assessment and repair",
      "Soot and smoke residue removal",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    id: "water-damage-restoration",
    title: "Water Damage Restoration",
    subtitle: "Emergency Response & Recovery",
    description: "Rapid response to water damage from floods, leaks, burst pipes, or storms. We extract water, dry your property, and prevent mold growth.",
    features: [
      "24/7 emergency response available",
      "Industrial water extraction equipment",
      "Structural drying and monitoring",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 01-4-4c0-2.5 4-7 4-7s4 4.5 4 7a4 4 0 01-4 4z" />
      </svg>
    ),
  },
  {
    id: "mold-inspection",
    title: "Mold Inspection & Testing",
    subtitle: "Comprehensive Assessment & Detection",
    description: "Certified inspectors use thermal imaging and moisture detection to identify all mold growth. Includes lab-analyzed air quality testing and detailed reports.",
    features: [
      "Thermal imaging cameras to detect moisture",
      "Air quality sampling and lab analysis",
      "Detailed written report with recommendations",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "mold-remediation",
    title: "Mold Remediation",
    subtitle: "Safe & Complete Elimination",
    description: "IICRC-certified technicians safely remove all types of mold using EPA-approved methods with containment, HEPA filtration, and verification testing.",
    features: [
      "Containment barriers to prevent spread",
      "HEPA air filtration throughout process",
      "Post-remediation verification testing",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "roof-storm-damage",
    title: "Roof Storm Damage Repair",
    subtitle: "Hurricane & Storm Recovery",
    description: "Expert roof repair and replacement after hurricanes and severe weather. Emergency tarping, full inspections, and insurance claim assistance.",
    features: [
      "Emergency tarping within hours",
      "All roof types: shingle, tile, metal, flat",
      "Insurance claim documentation",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "roof-leak-repair",
    title: "Roof Leak Repair",
    subtitle: "Fast Leak Detection & Fix",
    description: "Professional leak detection and repair for all roof types. We find the source, fix the leak, and repair any interior damage caused by water intrusion.",
    features: [
      "Advanced leak detection techniques",
      "Flashing, pipe boot, and vent repair",
      "Interior damage assessment included",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "smoke-odor-removal",
    title: "Smoke & Odor Removal",
    subtitle: "Professional Deodorization Services",
    description: "Advanced smoke and odor elimination using thermal fogging, ozone treatment, and hydroxyl generators. We eliminate odors at the molecular level.",
    features: [
      "Thermal fogging for smoke odors",
      "Ozone and hydroxyl treatment",
      "HVAC duct cleaning and treatment",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "emergency-services",
    title: "24/7 Emergency Services",
    subtitle: "Immediate Response When Disaster Strikes",
    description: "Round-the-clock emergency response for fire, water, storm, and mold emergencies. We arrive within hours to minimize damage and begin restoration.",
    features: [
      "Response within 1-2 hours",
      "Available nights, weekends, holidays",
      "All emergency types handled",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav active="/services" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Restoration Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete property restoration solutions for fire, water, mold, and roofing damage.
            One call handles it all &mdash; from emergency response to full restoration.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-blue-600 text-sm font-medium mb-3">{service.subtitle}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FloridaRestorePros?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just another restoration company. Here&apos;s what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600">IICRC certified technicians with years of Florida-specific restoration experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">24/7 emergency service with response times as fast as 1 hour</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">We stand behind our work with a satisfaction guarantee on every project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent quotes with no hidden fees. We work with all insurance companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free estimate. Our team is standing by to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">
              Get Free Estimate
            </Link>
            <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition border border-white/30">
              Call (954) 231-0508
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">FloridaRestore</span>
                <span className="text-2xl font-light text-white">Pros</span>
              </Link>
              <p className="text-sm">Florida&apos;s trusted restoration experts. Fire, water, mold, and roofing restoration for over 15 years.</p>
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
                <li>(954) 231-0508</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} FloridaRestorePros. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
