import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import Nav from "@/components/Nav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | FloridaRestorePros`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Nav active="/services" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.longDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-6">Contact us today for a free consultation and quote.</p>
                  <Link href="/#contact" className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg text-center transition mb-3">
                    Get Free Quote
                  </Link>
                  <a href="tel:9542310508" className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-lg text-center transition border border-white/30">
                    Call (954) 231-0508
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>IICRC Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                      <span>24/7 Emergency Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
                      <span>5-Star Rated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {getAllServiceSlugs()
              .filter((s) => s !== slug)
              .slice(0, 3)
              .map((serviceSlug) => {
                const relatedService = getServiceBySlug(serviceSlug);
                if (!relatedService) return null;
                return (
                  <Link key={serviceSlug} href={`/services/${serviceSlug}`} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">{relatedService.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedService.description}</p>
                    <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need {service.title}?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation. Our experts are ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">Get Free Quote</Link>
            <a href="tel:9542310508" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition border border-white/30">Call (954) 231-0508</a>
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
