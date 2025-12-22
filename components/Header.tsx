"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--white)',
        borderBottom: '1px solid var(--gray-pale)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--black)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{
          color: 'var(--olive)',
          fontSize: '1.2rem',
        }}>▣</span>
        PLUTAS<span style={{ color: 'var(--olive)' }}>_</span>LAB
      </Link>

      {/* Desktop Navigation */}
      <nav
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
        }}
        className="hidden md:flex"
      >
        <Link
          href="/#about"
          style={{
            fontSize: '0.8rem',
            color: 'var(--gray)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          className="hover:text-[var(--black)]"
        >
          About
        </Link>
        <Link
          href="/#space"
          style={{
            fontSize: '0.8rem',
            color: 'var(--gray)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          className="hover:text-[var(--black)]"
        >
          The Space
        </Link>
        <Link
          href="/#programs"
          style={{
            fontSize: '0.8rem',
            color: 'var(--gray)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          className="hover:text-[var(--black)]"
        >
          Programs
        </Link>
        <Link
          href="/micro-grants"
          style={{
            fontSize: '0.8rem',
            color: 'var(--gray)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          className="hover:text-[var(--black)]"
        >
          Micro Grants
        </Link>
        <Link
          href="/#faq"
          style={{
            fontSize: '0.8rem',
            color: 'var(--gray)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          className="hover:text-[var(--black)]"
        >
          FAQ
        </Link>
      </nav>

      {/* Desktop CTA Button */}
      <Link
        href="/#apply"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.75rem',
          padding: '0.6rem 1.2rem',
          background: 'var(--olive)',
          color: 'var(--white)',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'all 0.2s',
        }}
        className="hidden sm:inline-block hover:bg-[var(--olive-light)]"
      >
        Join Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          gap: '5px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Toggle mobile menu"
      >
        <span style={{
          display: 'block',
          width: '20px',
          height: '2px',
          background: 'var(--black)',
          transition: 'all 0.3s',
          transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
        }}></span>
        <span style={{
          display: 'block',
          width: '20px',
          height: '2px',
          background: 'var(--black)',
          transition: 'all 0.3s',
          opacity: isMobileMenuOpen ? 0 : 1,
        }}></span>
        <span style={{
          display: 'block',
          width: '20px',
          height: '2px',
          background: 'var(--black)',
          transition: 'all 0.3s',
          transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
        }}></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--white)',
            borderBottom: '1px solid var(--gray-pale)',
            padding: '1.5rem 2rem',
          }}
          className="md:hidden"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link
              href="/#about"
              style={{ fontSize: '0.9rem', color: 'var(--gray)', padding: '0.5rem 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#space"
              style={{ fontSize: '0.9rem', color: 'var(--gray)', padding: '0.5rem 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              The Space
            </Link>
            <Link
              href="/#programs"
              style={{ fontSize: '0.9rem', color: 'var(--gray)', padding: '0.5rem 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/micro-grants"
              style={{ fontSize: '0.9rem', color: 'var(--gray)', padding: '0.5rem 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Micro Grants
            </Link>
            <Link
              href="/#faq"
              style={{ fontSize: '0.9rem', color: 'var(--gray)', padding: '0.5rem 0' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/#apply"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.8rem',
                padding: '0.8rem 1.2rem',
                background: 'var(--olive)',
                color: 'var(--white)',
                textDecoration: 'none',
                borderRadius: '4px',
                textAlign: 'center',
                marginTop: '0.5rem',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
