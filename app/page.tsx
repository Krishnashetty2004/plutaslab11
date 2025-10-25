"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InfiniteGallery from "@/components/InfiniteGallery"
import BuildersNightSection from "@/components/BuildersNightSection"
import AboutSection from "@/components/AboutSection"
import { useState } from "react"

export default function Home() {
  const [scrollVelocity, setScrollVelocity] = useState(0)
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
      <Header />

      <main className="min-h-screen bg-black">
        {/* Hero Section with 3D Gallery */}
        <section className="relative h-[80vh] pt-16 overflow-hidden mb-20">
          <InfiniteGallery
            images={sampleImages}
            speed={1.2}
            zSpacing={3}
            visibleCount={12}
            falloff={{ near: 0.8, far: 14 }}
            className="h-full w-full rounded-lg"
            onScrollVelocityChange={setScrollVelocity}
          />
          <div className="h-full inset-0 pointer-events-none absolute flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight whitespace-nowrap">
              <span className="italic">We build;</span> therefore we are
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
