"use client"

import { useState, useEffect } from "react"

export default function PartnersPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

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
        html { scroll-behavior: smooth; }

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
          min-height: 60vh;
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
          max-width: 800px;
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Content Sections */
        .content-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .section-title {
          font-family: 'Newsreader', serif;
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 400;
          margin-bottom: 1.5rem;
          color: var(--black);
        }

        .section-content {
          font-size: 1.05rem;
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .section-content p {
          margin-bottom: 1.5rem;
        }

        .section-content strong {
          color: var(--black);
          font-weight: 500;
        }

        .section-content em {
          font-style: italic;
        }

        .divider {
          height: 1px;
          background: var(--gray-pale);
          margin: 3rem 0;
          border: none;
        }

        /* Benefits List */
        .benefits-list {
          list-style: none;
          margin: 2rem 0;
        }

        .benefits-list li {
          padding: 1rem 0;
          padding-left: 2rem;
          position: relative;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--gray);
          border-bottom: 1px solid var(--gray-pale);
        }

        .benefits-list li:last-child {
          border-bottom: none;
        }

        .benefits-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--olive);
          font-family: 'DM Mono', monospace;
          font-weight: 500;
        }

        .benefits-list li strong {
          color: var(--black);
        }

        /* Sponsorship Table */
        .sponsorship-table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border: 1px solid var(--gray-pale);
          border-radius: 8px;
          overflow: hidden;
        }

        .sponsorship-table thead {
          background: var(--black);
          color: var(--white);
        }

        .sponsorship-table th {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 1rem 1.5rem;
          text-align: left;
          font-weight: 500;
        }

        .sponsorship-table td {
          padding: 1.5rem;
          border-bottom: 1px solid var(--gray-pale);
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .sponsorship-table tr:last-child td {
          border-bottom: none;
        }

        .sponsorship-table tr:hover {
          background: var(--cream);
        }

        .sponsorship-type {
          font-family: 'DM Mono', monospace;
          font-weight: 500;
          color: var(--black);
          font-size: 0.9rem;
        }

        /* CTA Section */
        .cta-section {
          background: var(--black);
          color: var(--white);
          padding: 4rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: 'Newsreader', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 400;
          margin-bottom: 1rem;
          color: var(--white);
        }

        .cta-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .cta-link {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          padding: 1rem 2rem;
          background: var(--olive);
          color: var(--white);
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }

        .cta-link:hover {
          background: var(--olive-light);
          transform: translateY(-2px);
        }

        /* Highlight Box */
        .highlight-box {
          background: var(--olive-pale);
          border-left: 3px solid var(--olive);
          padding: 2rem;
          margin: 3rem 0;
          border-radius: 4px;
        }

        .highlight-box p {
          margin-bottom: 0;
          color: var(--black);
          font-size: 1.05rem;
          line-height: 1.8;
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
          .hero-section { padding: 8rem 1.5rem 3rem; }
          .hero-title { font-size: 2rem; }
          .content-section { padding: 3rem 1.5rem; }
          .sponsorship-table {
            font-size: 0.85rem;
          }
          .sponsorship-table th,
          .sponsorship-table td {
            padding: 1rem;
          }
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
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/micro-grants">Grants</a></li>
          <li><a href="/partners" className="active">Partners</a></li>
          <li><a href="/landing.html#faq">FAQ</a></li>
        </ul>
        <a href="/landing.html#apply" className="nav-cta">Apply Now</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">PARTNERSHIP</div>
          <h1 className="hero-title">Partner With Us</h1>
          <p className="hero-subtitle">
            Back the founders building India's next great companies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-section">
        <div className="section-content">
          <p>
            Plutas Lab is a community space in Bangalore where founders come to build. We run <strong>Builders Night</strong> — monthly twice 12-hour lockdowns where 50+ builders ship real products. And <strong>Cohorts</strong> — 45-day intensives ending in Demo Day with investors.
          </p>
          <p>
            We don't take equity. We keep programs free. Your support makes that possible.
          </p>
        </div>

        <hr className="divider" />

        <h2 className="section-title">What You Get</h2>
        <ul className="benefits-list">
          <li><strong>Early access</strong> to India's best builders — before they raise</li>
          <li><strong>Demo Day invites</strong> — meet founders, invest early</li>
          <li><strong>Direct intros</strong> to founders building in your space</li>
          <li><strong>Hiring pipeline</strong> from proven shippers</li>
          <li><strong>Brand visibility</strong> in front of 50+ builders monthly</li>
        </ul>

        <hr className="divider" />

        <h2 className="section-title">Ways to Sponsor</h2>
        <table className="sponsorship-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sponsorship-type">Builders Night</td>
              <td>Sponsor a monthly event. Logo, demo slot, direct access.</td>
            </tr>
            <tr>
              <td className="sponsorship-type">Cohort</td>
              <td>Back a 45-day program. First look at all founders.</td>
            </tr>
            <tr>
              <td className="sponsorship-type">Infra & Tools</td>
              <td>Provide cloud credits, APIs, or dev tools.</td>
            </tr>
            <tr>
              <td className="sponsorship-type">Demo Day</td>
              <td>Sponsor our investor showcase. Speak to the room.</td>
            </tr>
            <tr>
              <td className="sponsorship-type">Grants</td>
              <td>Fund micro-grants for selected founders.</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontStyle: 'italic', color: 'var(--gray)', marginTop: '1rem' }}>
          Custom packages available.
        </p>

        <hr className="divider" />

        <h2 className="section-title">Why Us?</h2>
        <div className="highlight-box">
          <p>
            The founders here are already building. They ship, not pitch.
          </p>
        </div>
        <div className="section-content">
          <p>
            Some will raise from top VCs. Some will bootstrap to profitability. Some will get acquired.
          </p>
          <p>
            <strong>You'll have met them first.</strong>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Get in touch</h2>
          <p className="cta-text">
            Ready to partner with us? Let's talk about how we can work together.
          </p>
          <a href="mailto:founders@plutas.in" className="cta-link">
            founders@plutas.in
          </a>
        </div>
      </div>

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

