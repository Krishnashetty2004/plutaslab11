export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">About Plutas Lab</h2>

        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
          <p>
            Plutas Lab is an AI experimental laboratory founded by a collective of developer friends who share a common
            vision: to explore the intersection of artificial intelligence and practical business models.
          </p>

          <p>
            Based in Bangalore—the Silicon Valley of India—we're dedicated to solving real-world problems through
            experimentation, innovation, and collaborative development. We believe in the power of building, learning,
            and iterating together.
          </p>

          <p>
            Our mission is to create repeatable business models while pushing the boundaries of what's possible with AI.
            We're not just building products; we're building a community of makers, thinkers, and innovators who are
            shaping the future of technology.
          </p>

          <div className="pt-6 sm:pt-8 border-t border-gray-700">
            <p className="text-lg sm:text-xl text-white font-semibold">We build therefore we are.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
