"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '4rem 2rem',
        background: 'var(--olive)',
        color: 'var(--white)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: 500,
              marginBottom: '1rem',
              color: 'var(--white)',
            }}
          >
            PLUTAS_LAB
          </div>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--olive-pale)',
              lineHeight: 1.7,
              maxWidth: '300px',
            }}
          >
            A hacker space in Bangalore for builders who ship.
            No pitch decks. No networking. Just building.
          </p>
          <pre
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.35rem',
              lineHeight: 1.1,
              color: 'var(--olive-pale)',
              whiteSpace: 'pre',
              marginTop: '1.5rem',
              opacity: 0.5,
            }}
          >{`    ┌─────────────┐
    │  > BUILD _  │
    └─────────────┘`}</pre>
        </div>

        {/* Programs */}
        <div>
          <h5
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              color: 'var(--white)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Programs
          </h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/#programs"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Builders Night
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/#programs"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Membership
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/micro-grants"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Micro Grants
              </Link>
            </li>
          </ul>
        </div>

        {/* Space */}
        <div>
          <h5
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              color: 'var(--white)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Space
          </h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/#about"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                About
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/#gallery"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Gallery
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/#faq"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              color: 'var(--white)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Connect
          </h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="https://x.com/plutaslab"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="https://www.linkedin.com/company/plutaslabs/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="mailto:founders@plutas.in"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--olive-pale)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.75rem',
            color: 'var(--olive-pale)',
          }}
        >
          © {currentYear} Plutas Lab. HSR Layout, Bangalore. Ship or shut up.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href="https://x.com/plutaslab"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              color: 'var(--olive-pale)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/company/plutaslabs/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              color: 'var(--olive-pale)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/plutas.labs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              color: 'var(--olive-pale)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            className="hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
