"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <span className="font-serif text-lg font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Plutas Lab
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              An AI experimental lab by developer friends in Bangalore, exploring repeatable business models.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">Quick Links</h3>
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
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">Builders Night</h3>
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
            <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/plutaslab" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/plutaslabs/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/plutas.labs?igsh=MWlwZmQ3NmtpMDF5cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:founders@plutas.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              © {currentYear} Plutas Lab. All rights reserved. Based in Bangalore, the Silicon Valley of India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
