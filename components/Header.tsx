"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 rounded-b-2xl mx-4 mt-2 left-4 right-4"
          : "bg-black/20 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/3433f2f3-1f5e-400c-97cf-f3d61b73a009.jpg"
                alt="Plutas Lab Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-lg font-semibold text-white hidden sm:inline">Plutas Lab</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* CTA Button */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdH2mE3tW21VoEdtBGTKMRv1eEWUV1s_gVj9tlzvU1pgAPTQw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/50 inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  )
}
