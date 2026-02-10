import Link from "next/link";
import type { Metadata } from "next";
import { locations, getLocationsByRegion } from "@/data/locations";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Service Areas | Property Restoration Throughout Florida | FloridaRestorePros",
  description: "FloridaRestorePros provides professional fire, water, mold, and roofing restoration services throughout Florida. Find restoration services in Miami, Orlando, Fort Lauderdale, and more.",
};

export default function LocationsPage() {
  const locationsByRegion = getLocationsByRegion();
  const regions = Object.keys(locationsByRegion);

  return (
    <div className="min-h-screen">
      <Nav active="/locations" />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Areas Throughout Florida</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional property restoration from the Panhandle to the Keys. Fire, water, mold, and roofing services in your area.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span className="text-gray-600">Service Locations</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">{locations.length} Cities Served</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">24/7 Emergency Response</span>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {locations.map((location) => (
                <Link key={location.slug} href={`/locations/${location.slug}`} className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition">
                  {location.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region) => (
            <div key={region} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {region}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locationsByRegion[region].map((location) => (
                  <Link key={location.slug} href={`/locations/${location.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">{location.city}</h3>
                      <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs font-medium">{location.state}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{location.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                        <span key={neighborhood} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{neighborhood}</span>
                      ))}
                      {location.neighborhoods.length > 3 && (
                        <span className="text-xs text-gray-400">+{location.neighborhoods.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      View {location.city} Services
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Local Expertise Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Florida&apos;s diverse regions each have unique restoration challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Climate Knowledge</h3>
              <p className="text-gray-600 text-sm">From South Florida&apos;s tropical humidity to North Florida&apos;s seasonal patterns, we understand your local restoration needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Response Times</h3>
              <p className="text-gray-600 text-sm">Local teams mean faster emergency response. We can be at your property within hours, not days.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Building Knowledge</h3>
              <p className="text-gray-600 text-sm">We know the common construction types, building codes, and common issues in your specific area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-xl text-blue-100 mb-8">We serve all of Florida. Contact us to confirm service in your area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">Get Free Quote</Link>
            <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition border border-white/30">Call (954) 231-0508</a>
          </div>
        </div>
      </section>

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
