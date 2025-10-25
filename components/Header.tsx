"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out animate-slide-in-down ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 rounded-b-2xl mx-2 sm:mx-4 mt-2 left-2 right-2 sm:left-4 sm:right-4 shadow-2xl"
          : "bg-black/20 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover-scale">
            <div className="flex items-center">
              <span className="font-serif text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-left">
                Plutas Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/builders-night" className="text-sm text-gray-300 hover:text-white transition-colors">
              Builders Night
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdH2mE3tW21VoEdtBGTKMRv1eEWUV1s_gVj9tlzvU1pgAPTQw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-3 py-2 sm:px-4 bg-white hover:bg-gray-200 text-black text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/50"
          >
            Apply Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-4 border-t border-white/10">
            <Link 
              href="/about" 
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/builders-night" 
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Builders Night
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdH2mE3tW21VoEdtBGTKMRv1eEWUV1s_gVj9tlzvU1pgAPTQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white hover:bg-gray-200 text-black text-sm font-medium rounded-xl transition-colors py-3 px-4 text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
