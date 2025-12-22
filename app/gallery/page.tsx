"use client"

import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const images = [
    {
      src: "/IMG_3109.jpg",
      alt: "Builders Night - Building together",
      category: "Builders Night"
    },
    {
      src: "/IMG_3107.jpg",
      alt: "Builders Night - Collaboration",
      category: "Builders Night"
    },
    {
      src: "/IMG_3102.jpg",
      alt: "Builders Night - Working session",
      category: "Builders Night"
    },
    {
      src: "/IMG_3100.jpg",
      alt: "Builders Night - Community",
      category: "Builders Night"
    },
    {
      src: "/IMG_2915.jpg",
      alt: "Builders Night - Night vibes",
      category: "Builders Night"
    },
    {
      src: "/cpm35%202025-12-14%20005016.394.JPG",
      alt: "Builders Night - Late night building",
      category: "Builders Night"
    },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        :root {
          --white: #FAFAF8;
          --black: #1a1a1a;
          --olive: #4A5D23;
          --olive-light: #6B7F3A;
          --olive-pale: #E8EBD9;
          --olive-muted: #8B9A6D;
          --gray: #666;
          --gray-light: #999;
          --gray-pale: #E5E5E3;
          --cream: #F5F5F0;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: var(--olive); color: var(--white); }
        html { 
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Performance optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--white);
          color: var(--black);
          line-height: 1.6;
          font-size: 16px;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: var(--white);
          border-bottom: 1px solid var(--gray-pale);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--black);
          text-decoration: none;
          display: flex;
          align-items: center;
          letter-spacing: 0.02em;
        }

        .nav-logo .lab {
          font-style: italic;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.8rem;
          color: var(--gray);
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--olive);
          transition: width 0.3s;
        }

        .nav-links a:hover {
          color: var(--black);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a.active {
          color: var(--black);
        }

        .nav-links a.active::after {
          width: 100%;
        }

        .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          padding: 0.6rem 1.2rem;
          background: var(--olive);
          color: var(--white);
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .nav-cta:hover {
          background: var(--olive-light);
          transform: translateY(-1px);
        }

        /* Hero Section */
        .hero-section {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10rem 2rem 4rem;
          background: var(--black);
          color: var(--white);
          position: relative;
        }

        .hero-content {
          max-width: 700px;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--olive-light);
          margin-bottom: 2rem;
          padding: 0.4rem 0.8rem;
          background: rgba(74, 93, 35, 0.2);
          border-radius: 3px;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--olive-light);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-title {
          font-family: 'Newsreader', serif;
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--white);
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Gallery */
        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .gallery-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--olive);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .gallery-title {
          font-family: 'Newsreader', serif;
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 400;
          margin-bottom: 1rem;
          color: var(--black);
        }

        .gallery-subtitle {
          font-size: 1rem;
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          background: var(--gray-pale);
          transition: transform 0.3s;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 2rem 1.5rem 1.5rem;
          color: var(--white);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-category {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--olive-light);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Modal */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }

        .modal.active {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-close {
          position: absolute;
          top: -3rem;
          right: 0;
          background: none;
          border: none;
          color: var(--white);
          font-size: 2rem;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          padding: 0.5rem;
          transition: color 0.2s;
        }

        .modal-close:hover {
          color: var(--olive-light);
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--white);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .modal-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-nav.prev {
          left: -70px;
        }

        .modal-nav.next {
          right: -70px;
        }

        /* Footer */
        footer {
          padding: 4rem 2rem 2rem;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }

        .footer-brand {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--olive-light);
        }

        .footer-desc {
          font-size: 0.9rem;
          color: #888;
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto 2rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          font-size: 0.85rem;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--olive-light);
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #666;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        /* Responsive */
        @media (max-width: 768px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .nav-logo { font-size: 1rem; }
          .hero-section { padding: 8rem 1.5rem 3rem; }
          .hero-title { font-size: clamp(1.8rem, 6vw, 2.5rem); }
          .gallery-container { padding: 3rem 1.5rem; }
          .gallery-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .modal-nav.prev { left: 1rem; }
          .modal-nav.next { right: 1rem; }
          
          /* Better touch targets */
          a, button {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-container { padding: 2rem 1rem; }
          .gallery-item { aspect-ratio: 3/2; }
        }
      `}} />

      {/* Navigation */}
      <nav>
        <a href="/landing.html" className="nav-logo">
          plutas <span className="lab">lab</span>
        </a>
        <ul className="nav-links">
          <li><a href="/landing.html#manifesto">Manifesto</a></li>
          <li><a href="/landing.html#builders-night">Builders Night</a></li>
          <li><a href="/landing.html#cohort">Cohort</a></li>
          <li><a href="/gallery" className="active">Gallery</a></li>
          <li><a href="/micro-grants">Grants</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/landing.html#faq">FAQ</a></li>
        </ul>
        <a href="/landing.html#apply" className="nav-cta">Apply Now</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">BUILDERS NIGHT</div>
          <h1 className="hero-title">Gallery</h1>
          <p className="hero-subtitle">
            Moments from our monthly Builders Night. 12 hours. 50 builders. One rule: ship.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-label">Visual Memories</div>
          <h2 className="gallery-title">Builders Night Vibes</h2>
          <p className="gallery-subtitle">
            Late nights. Early mornings. Code. Coffee. Community. This is what building looks like.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <div className="gallery-category">{image.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className={`modal ${selectedImage !== null ? 'active' : ''}`}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            {selectedImage > 0 && (
              <button
                className="modal-nav prev"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage - 1)
                }}
              >
                ‹
              </button>
            )}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="modal-image"
              loading="eager"
              decoding="async"
            />
            {selectedImage < images.length - 1 && (
              <button
                className="modal-nav next"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage + 1)
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-brand">PLUTAS_LAB</div>
        <p className="footer-desc">
          A community space in Bangalore for founders who build. 
          We host Builders Night. We run cohorts. We do Demo Days.
        </p>
        <div className="footer-links">
          <a href="https://x.com/plutaslab" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/plutas.labs/" target="_blank">Instagram</a>
          <a href="mailto:founders@plutas.in">Email</a>
          <a href="/micro-grants">Micro Grants</a>
        </div>
        <p className="footer-copy">© 2025 Plutas Lab. HSR Layout, Bangalore.</p>
      </footer>
    </>
  )
}

