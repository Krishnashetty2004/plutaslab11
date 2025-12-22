"use client"

import { useState, useMemo, useEffect } from "react"

export default function MicroGrantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<string>("all")
  const [selectedAudience, setSelectedAudience] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const grants = [
    { name: "1517 Medici Project", url: "https://www.1517fund.com/medici-project", description: "$1K grants for high school, college students, and dropouts to launch projects to make humanity better, backed by 1517 Fund.", amount: "small", audience: "students" },
    { name: "5x5 Night", url: "http://5x5night.com/", description: "5x5 Night takes place once a month. The community votes on the ideas that will be presented at the event. The selected creators explain a $5,000 step that will move the idea forward.", amount: "medium", audience: "general" },
    { name: "Arraig Grants", url: "https://arraig.com/micro-grants/", description: "$500 microgrants for individuals and entrepreneurs focused on international markets, revenue/profitability, and an exploratory approach.", amount: "small", audience: "entrepreneurs" },
    { name: "ACX Grants", url: "https://www.astralcodexten.com/p/acx-grants-results-2024", description: "Grants program for \"good research and good projects with a minimum of paperwork.\" Runs irregularly.", amount: "medium", audience: "researchers" },
    { name: "Atomic Fellowship", url: "https://www.gradcapital.in/atomicfellow/", description: "$5,000 no-strings-attached grant for students who want to work on science & engineering projects.", amount: "medium", audience: "students" },
    { name: "Awesome Foundation", url: "http://www.awesomefoundation.org/", description: "A global community advancing the interest of awesome in the universe, $1000 at a time.", amount: "small", audience: "general" },
    { name: "Bellare Grants", url: "https://bellaregrants.netlify.app/", description: "Up to 1 lakh INR per year to Indian initiatives in education, healthcare, research, and open source projects.", amount: "medium", audience: "india" },
    { name: "cache money grants", url: "https://cachemoney.xyz/grants/", description: "$5K grants, paid in crypto, for hackers and artists tackling interesting new ideas in the crypto space.", amount: "medium", audience: "tech" },
    { name: "Cactus Capital", url: "https://cactuscapital.org/", description: "$50-100 microgrants for student builders at any stage.", amount: "small", audience: "students" },
    { name: "Clarity Health Fund", url: "https://www.clarityhealthfund.org/", description: "$1,000 USD microgrants for progress in psychedelics and drug policy.", amount: "small", audience: "researchers" },
    { name: "Da Vinci Fellowship", url: "https://davincifellowship.com/", description: "150,000 equity-free grant for exceptional engineers, scientists, and builders in Europe.", amount: "large", audience: "tech" },
    { name: "Emergent Ventures", url: "https://www.mercatus.org/emergentventures", description: "Fellowship and grant program for entrepreneurs with highly scalable, \"zero to one\" ideas.", amount: "large", audience: "entrepreneurs" },
    { name: "Forge Grants", url: "https://www.forgegrant.com/", description: "No-strings-attached grants up to $250 for young creator-engineers (13-25).", amount: "small", audience: "students" },
    { name: "Feather Grants", url: "https://www.gradcapital.in/feathergrants/", description: "INR 15,000 grant ($180) to students to bring their boldest ideas to life.", amount: "small", audience: "india" },
    { name: "Gumroad Creators Fund", url: "https://blog.gumroad.com/post/183876075758/introducing-the-first-batch-of-our-creators-fund", description: "$500 to $5,000 grants for creators and creative projects.", amount: "medium", audience: "general" },
    { name: "Inflection Grants", url: "https://www.inflectiongrants.com/", description: "$2,000 grants for people under 25 to fuel their passion, idea, or themselves.", amount: "medium", audience: "students" },
    { name: "Magnificent Grants", url: "https://www.magnificentgrants.com/", description: "$10,000 fellowships to outliers taking down the walls of universities and credentialism.", amount: "large", audience: "general" },
    { name: "Merge Grant", url: "https://merge.club/program/mergegrant", description: "Micro-grants between $50 and $1,000 for ambitious builders.", amount: "small", audience: "general" },
    { name: "NLNet Foundation", url: "https://nlnet.nl/propose/", description: "$5K to $50K for open source projects by independent researchers and developers.", amount: "large", audience: "tech" },
    { name: "Pollination Project", url: "https://thepollinationproject.org/", description: "Seed grants daily to social change leaders. Up to $1,000 per initial grant.", amount: "small", audience: "general" },
    { name: "Thiel Fellowship", url: "https://thielfellowship.org/", description: "$100,000 over two years for young people who want to build new things.", amount: "large", audience: "students" },
    { name: "Unitary Fund", url: "http://unitary.fund/", description: "$4,000 for your open source quantum computing project.", amount: "medium", audience: "tech" },
    { name: "VitaDAO Fellowship", url: "https://www.vitadao.com/fellowship", description: "$100-$3,000 fast microgrants for longevity research efforts.", amount: "medium", audience: "researchers" },
  ]

  const filteredGrants = useMemo(() => {
    return grants.filter((grant) => {
      const matchesSearch = !searchQuery ||
        grant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        grant.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesAmount = selectedAmount === "all" || grant.amount === selectedAmount
      const matchesAudience = selectedAudience === "all" || grant.audience === selectedAudience

      return matchesSearch && matchesAmount && matchesAudience
    })
  }, [searchQuery, selectedAmount, selectedAudience])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedAmount("all")
    setSelectedAudience("all")
  }

  const hasActiveFilters = searchQuery || selectedAmount !== "all" || selectedAudience !== "all"

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

        /* Filters */
        .filters-section {
          max-width: 1200px;
          margin: -3rem auto 3rem;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        .filters-container {
          background: var(--white);
          border: 1px solid var(--gray-pale);
          border-radius: 8px;
          padding: 2.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .filters-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--olive);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .clear-all-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          color: var(--gray);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }

        .clear-all-btn:hover { color: var(--olive); }

        .search-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: var(--white);
          border: 1px solid var(--gray-pale);
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          color: var(--black);
          margin-bottom: 1.5rem;
          border-radius: 4px;
          transition: border-color 0.2s;
        }

        .search-input:focus { border-color: var(--olive); }
        .search-input::placeholder { color: var(--gray-light); }

        .filter-groups {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .filter-group {
          flex: 1;
          min-width: 200px;
        }

        .filter-group-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: var(--gray);
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          display: block;
          text-transform: uppercase;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          background: var(--white);
          border: 1px solid var(--gray-pale);
          color: var(--black);
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 4px;
        }

        .filter-btn:hover {
          border-color: var(--olive);
          color: var(--olive);
        }

        .filter-btn.active {
          background: var(--olive);
          border-color: var(--olive);
          color: var(--white);
        }

        /* Grants */
        .grants-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        .grants-count {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          color: var(--gray);
          letter-spacing: 0.05em;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .grants-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .grant-card {
          background: var(--white);
          border: 1px solid var(--gray-pale);
          border-radius: 8px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }

        .grant-card:hover {
          border-color: var(--olive);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .grant-name {
          font-family: 'Newsreader', serif;
          font-size: 1.3rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
          color: var(--black);
        }

        .grant-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .grant-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          padding: 0.3rem 0.8rem;
          background: var(--olive-pale);
          color: var(--olive);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 3px;
        }

        .grant-tag.medium {
          background: rgba(74, 93, 35, 0.15);
        }

        .grant-tag.large {
          background: rgba(74, 93, 35, 0.25);
        }

        .grant-desc {
          font-size: 0.95rem;
          color: var(--gray);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .grant-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--olive);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .grant-card:hover .grant-link { color: var(--olive-light); }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--white);
          border: 1px solid var(--gray-pale);
          grid-column: 1 / -1;
          border-radius: 8px;
        }

        .no-results p {
          font-family: 'Newsreader', serif;
          font-size: 1.2rem;
          color: var(--black);
          margin-bottom: 2rem;
        }

        .clear-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          background: var(--olive);
          color: var(--white);
          border: 1px solid var(--olive);
          padding: 0.8rem 1.5rem;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .clear-btn:hover {
          background: var(--olive-light);
          border-color: var(--olive-light);
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
          .filters-section { padding: 0 1.5rem; margin-top: -2rem; }
          .filters-container { padding: 1.5rem; }
          .filter-groups { flex-direction: column; gap: 1.5rem; }
          .grants-container { padding: 0 1.5rem 4rem; }
          .grants-grid { grid-template-columns: 1fr; }
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
          <li><a href="/micro-grants" className="active">Grants</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/landing.html#faq">FAQ</a></li>
        </ul>
        <a href="/landing.html#apply" className="nav-cta">Apply Now</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">FUNDING OPPORTUNITIES</div>
          <h1 className="hero-title">Micro Grants</h1>
          <p className="hero-subtitle">
            A curated collection of patronage for builders, researchers, and dreamers.
            Capital to fuel your boldest ideas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="filters-header">
            <span className="filters-label">Filter Grants</span>
            {hasActiveFilters && (
              <button className="clear-all-btn" onClick={clearFilters}>
                Clear all
              </button>
            )}
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="filter-groups">
            <div className="filter-group">
              <span className="filter-group-label">Amount</span>
              <div className="filter-buttons">
                {['all', 'small', 'medium', 'large'].map((amt) => (
                  <button
                    key={amt}
                    className={`filter-btn ${selectedAmount === amt ? 'active' : ''}`}
                    onClick={() => setSelectedAmount(amt)}
                  >
                    {amt === 'all' ? 'All' : amt === 'small' ? '<$1K' : amt === 'medium' ? '$1K-$10K' : '$10K+'}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-group-label">Audience</span>
              <div className="filter-buttons">
                {['all', 'students', 'tech', 'researchers', 'india'].map((aud) => (
                  <button
                    key={aud}
                    className={`filter-btn ${selectedAudience === aud ? 'active' : ''}`}
                    onClick={() => setSelectedAudience(aud)}
                  >
                    {aud === 'all' ? 'All' : aud === 'researchers' ? 'Research' : aud.charAt(0).toUpperCase() + aud.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grants List */}
      <div className="grants-container">
        <div className="grants-count">
          Showing {filteredGrants.length} of {grants.length} grants
        </div>

        <div className="grants-grid">
          {filteredGrants.length === 0 ? (
            <div className="no-results">
              <p>No grants found matching your criteria</p>
              <button className="clear-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          ) : (
            filteredGrants.map((grant, i) => (
              <a
                key={i}
                href={grant.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grant-card"
              >
                <h2 className="grant-name">{grant.name}</h2>
                <div className="grant-tags">
                  <span className={`grant-tag ${grant.amount}`}>
                    {grant.amount === 'small' ? '<$1K' : grant.amount === 'medium' ? '$1K-$10K' : '$10K+'}
                  </span>
                  <span className="grant-tag">{grant.audience.toUpperCase()}</span>
                </div>
                <p className="grant-desc">{grant.description}</p>
                <span className="grant-link">Visit Grant →</span>
              </a>
            ))
          )}
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
