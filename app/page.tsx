"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InfiniteGallery from "@/components/InfiniteGallery"
import BuildersNightSection from "@/components/BuildersNightSection"
import AboutSection from "@/components/AboutSection"
import { useState } from "react"

export default function Home() {
  const [scrollVelocity, setScrollVelocity] = useState(0)
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Plutas Lab",
    "description": "An AI experimental lab by developer friends in Bangalore, exploring repeatable business models and solving real-world problems through innovation and collaboration.",
    "url": "https://plutaslab.com",
    "logo": "https://plutaslab.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://twitter.com/plutaslab",
      "https://github.com/plutaslab"
    ],
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Plutas Lab Team"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Innovation",
      "Tech Events"
    ],
    "event": {
      "@type": "Event",
      "name": "Builders Night",
      "description": "Signature event where selected developers come together for an intensive, immersive building experience.",
      "eventAttendanceMode": "OfflineEventAttendanceMode",
      "eventStatus": "EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Bangalore",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressCountry": "India"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Plutas Lab"
      }
    }
  }
  
  const sampleImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52d114f9-e0cc-4890-bb82-134e4b87488c-Jmr1hWwcysPsQfrVdU1gGQ0JJMcoYu.jpg",
      alt: "Steve Jobs - Apple Founder",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Entrepreneur%20style_-joA1Jr2BcvsEVACbQFR5ljwtTETHkY.jpeg",
      alt: "Mark Zuckerberg - Meta Founder",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How%20an%20Apple%20Sparked%20Newton%E2%80%99s%20Genius-JU5wFQUJ0ysADQuAmivPm6hUXUATmB.jpeg",
      alt: "Isaac Newton - Scientific Pioneer",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tesla-6I2r087mJxedJQnLQCWdDLtqFXKDBb.jpeg",
      alt: "Nikola Tesla - Inventor",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20LETTER%20FROM%20ALBERT%20EINSTEIN%20TO%20HIS%20DAUGHTER%20-%20Thrive%20Global-qtRQqvoQRFIoNTuv8rDeDzT43S6o9V.jpeg",
      alt: "Albert Einstein - Physicist",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%2820%29-xShHqc8h3jTvWp2jKA138pWFCEAT9B.jpeg",
      alt: "Scientist - Knowledge Builder",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%2819%29-XbhYvo809n4SiMXLFdtDerC0XER3vQ.jpeg",
      alt: "Elon Musk - Tech Innovator",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcus%20Aurelius-zg0NmqZcLLxOn1aJ6IsXK1vrWiR3rC.jpeg",
      alt: "Marcus Aurelius - Philosopher",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%2818%29-gCMJVLqJsQNdx7fS0Y2pdMj6VjyBzd.jpeg",
      alt: "Roman Leader - Legacy Builder",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="min-h-screen bg-black" role="main">
        {/* Hero Section with 3D Gallery */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] pt-14 sm:pt-16 overflow-hidden mb-12 sm:mb-16 md:mb-20" aria-label="Hero section with interactive gallery">
          <InfiniteGallery
            images={sampleImages}
            speed={1.2}
            zSpacing={3}
            visibleCount={12}
            falloff={{ near: 0.8, far: 14 }}
            className="h-full w-full rounded-lg"
            onScrollVelocityChange={setScrollVelocity}
          />
          <div className="h-full inset-0 pointer-events-none absolute flex items-center justify-center text-center px-4 sm:px-6 mix-blend-exclusion text-white">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight animate-fade-in-up animate-delay-300">
              <span className="italic">We build;</span><br className="sm:hidden" />
              <span className="sm:inline"> therefore we are</span>
            </h1>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Builders Night Section */}
        <BuildersNightSection />
      </main>

      <Footer />
    </>
  )
}
