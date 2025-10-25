export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32" id="about" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight animate-fade-in-up">About Plutas Lab</h2>

        <article className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
          <p className="animate-fade-in-up animate-delay-100">
            Plutas Lab is an AI experimental laboratory founded by a collective of developer friends who share a common
            vision: to explore the intersection of artificial intelligence and practical business models.
          </p>

          <p className="animate-fade-in-up animate-delay-200">
            Based in Bangalore—the Silicon Valley of India—we're dedicated to solving real-world problems through
            experimentation, innovation, and collaborative development. We believe in the power of building, learning,
            and iterating together.
          </p>

          <p className="animate-fade-in-up animate-delay-300">
            Our mission is to create repeatable business models while pushing the boundaries of what's possible with AI.
            We're not just building products; we're building a community of makers, thinkers, and innovators who are
            shaping the future of technology.
          </p>

          <blockquote className="pt-6 sm:pt-8 border-t border-gray-700 animate-fade-in-up animate-delay-400">
            <p className="text-lg sm:text-xl text-white font-semibold italic">"We build therefore we are."</p>
          </blockquote>
        </article>
      </div>
    </section>
  )
}
