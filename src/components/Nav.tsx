'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">FloridaRestore</span>
            <span className="text-2xl font-light text-gray-600">Pros</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              l.href.startsWith('/#') ? (
                <a key={l.href} href={active === '/' ? l.href.replace('/', '') : l.href} className="text-gray-600 hover:text-blue-600 transition">
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={active === l.href ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600 transition'}
                >
                  {l.label}
                </Link>
              )
            ))}
            <a href="tel:9542310508" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              l.href.startsWith('/#') ? (
                <a
                  key={l.href}
                  href={active === '/' ? l.href.replace('/', '') : l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-600 hover:text-blue-600 transition"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 ${active === l.href ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600 transition'}`}
                >
                  {l.label}
                </Link>
              )
            ))}
            <a
              href="tel:9542310508"
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mt-2"
            >
              Call (954) 231-0508
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
