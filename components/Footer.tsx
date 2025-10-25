"use client"

import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/3433f2f3-1f5e-400c-97cf-f3d61b73a009.jpg"
                  alt="Plutas Lab Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-lg font-semibold text-white">Plutas Lab</span>
            </div>
            <p className="text-sm text-gray-400">
              An AI experimental lab by developer friends in Bangalore, exploring repeatable business models.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#builders-night" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Builders Night
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Builders Night */}
          <div>
            <h3 className="font-semibold text-white mb-4">Builders Night</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                <span className="font-medium text-white">Frequency:</span> Twice Monthly
              </li>
              <li className="text-sm text-gray-400">
                <span className="font-medium text-white">Duration:</span> 12-24 Hours
              </li>
              <li className="text-sm text-gray-400">
                <span className="font-medium text-white">Format:</span> Application-based
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Plutas Lab. All rights reserved. Based in Bangalore, the Silicon Valley of India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
