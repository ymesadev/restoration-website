import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocationBySlug, getAllLocationSlugs, locations } from "@/data/locations";
import { services } from "@/data/services";
import Nav from "@/components/Nav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location Not Found" };
  return {
    title: `Property Restoration in ${location.city}, ${location.state} | FloridaRestorePros`,
    description: `Professional fire, water, mold, and roofing restoration services in ${location.city}, Florida. ${location.description.slice(0, 150)}...`,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const relatedLocations = locations
    .filter((l) => l.region === location.region && l.slug !== location.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Nav active="/locations" />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <Link href="/locations" className="hover:text-white transition">Locations</Link>
            <span>/</span>
            <span className="text-white">{location.city}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
                <svg className="w-4 h-4 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-white text-sm">{location.region}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Property Restoration in {location.city}, FL</h1>
              <p className="text-xl text-blue-100 mb-6">Professional fire, water, mold, and roofing restoration for {location.city} homes and businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition shadow-lg">Get Free {location.city} Quote</Link>
                <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg text-center transition border border-white/30">Call Now</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-blue-200">Region:</span><span className="text-white">{location.region}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-blue-200">Areas Served:</span><span className="text-white">{location.neighborhoods.length}+ neighborhoods</span></div>
                  <div className="flex justify-between text-sm"><span className="text-blue-200">Response Time:</span><span className="text-white">1-2 hours</span></div>
                  <div className="flex justify-between text-sm"><span className="text-blue-200">Availability:</span><span className="text-white">24/7 Emergency</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Restoration Services in {location.city}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{location.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us in {location.city}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {location.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{location.city} Property Challenges</h2>
                <p className="text-gray-600 mb-4">{location.city} properties face unique risks due to local climate and conditions:</p>
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                  <ul className="space-y-3">
                    {location.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Available in {location.city}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods We Serve in {location.city}</h2>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((neighborhood) => (
                    <span key={neighborhood} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">{neighborhood}</span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  Serving zip codes: {location.zipCodes.slice(0, 5).join(", ")}
                  {location.zipCodes.length > 5 && ` and ${location.zipCodes.length - 5} more`}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Get a Free Quote in {location.city}</h3>
                  <p className="text-blue-100 mb-6 text-sm">Contact us for a free property assessment and quote. Fast response guaranteed.</p>
                  <Link href="/#contact" className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg text-center transition mb-3">Request Free Quote</Link>
                  <a href="tel:9542310508" className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-lg text-center transition border border-white/30">Call (954) 231-0508</a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{location.city} Service Info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div><div className="font-medium text-gray-900">Response Time</div><div className="text-gray-500">1-2 hours for emergencies</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div><div className="font-medium text-gray-900">Licensed & Insured</div><div className="text-gray-500">Full coverage in {location.state}</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </div>
                      <div><div className="font-medium text-gray-900">Local Team</div><div className="text-gray-500">Technicians based in {location.region}</div></div>
                    </div>
                  </div>
                </div>

                {relatedLocations.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Service Areas</h3>
                    <ul className="space-y-2">
                      {relatedLocations.map((loc) => (
                        <li key={loc.slug}><Link href={`/locations/${loc.slug}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">{loc.city}, FL &rarr;</Link></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Restoration Help in {location.city}?</h2>
          <p className="text-xl text-blue-100 mb-8">Our {location.city} team is ready to help. Contact us for a free assessment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">Get Free {location.city} Quote</Link>
            <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition border border-white/30">Call (954) 231-0508</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4"><span className="text-2xl font-bold text-blue-400">FloridaRestore</span><span className="text-2xl font-light text-white">Pros</span></Link>
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
              <ul className="space-y-2 text-sm"><li>(954) 231-0508</li><li>Available 24/7</li></ul>
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
