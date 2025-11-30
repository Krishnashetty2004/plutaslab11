export default function BuildersNightSection() {
  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32" id="builders-night" aria-labelledby="builders-night-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="builders-night-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight animate-fade-in-up">Builders Night</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Event Details */}
          <article className="space-y-6 sm:space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">What is Builders Night?</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Builders Night is our signature event where selected developers come together for an intensive,
                immersive building experience. It's a celebration of creation, collaboration, and the pure joy of making
                something from nothing.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Event Details</h3>
              <dl className="space-y-3">
                <div className="flex items-start gap-3 sm:gap-4 hover-lift">
                  <dt className="text-white font-bold text-lg sm:text-xl mt-1">•</dt>
                  <dd>
                    <p className="text-white font-semibold text-sm sm:text-base">Frequency</p>
                    <p className="text-gray-400 text-sm sm:text-base">Twice a month</p>
                  </dd>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 hover-lift">
                  <dt className="text-white font-bold text-lg sm:text-xl mt-1">•</dt>
                  <dd>
                    <p className="text-white font-semibold text-sm sm:text-base">Duration</p>
                    <p className="text-gray-400 text-sm sm:text-base">12 to 24 hour lockdown</p>
                  </dd>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 hover-lift">
                  <dt className="text-white font-bold text-lg sm:text-xl mt-1">•</dt>
                  <dd>
                    <p className="text-white font-semibold text-sm sm:text-base">Participation</p>
                    <p className="text-gray-400 text-sm sm:text-base">Selected developers only (application-based)</p>
                  </dd>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 hover-lift">
                  <dt className="text-white font-bold text-lg sm:text-xl mt-1">•</dt>
                  <dd>
                    <p className="text-white font-semibold text-sm sm:text-base">Focus</p>
                    <p className="text-gray-400 text-sm sm:text-base">Build, experiment, and have fun</p>
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Why Join */}
          <article className="space-y-6 sm:space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why Join?</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Builders Night isn't just another hackathon. It's an opportunity to collaborate with like-minded
                developers, experiment with cutting-edge technologies, and push your creative boundaries in a supportive
                environment.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover-lift hover-glow">
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Collaborate</h4>
                <p className="text-gray-400 text-sm sm:text-base">Work alongside talented developers and innovators</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover-lift hover-glow">
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Experiment</h4>
                <p className="text-gray-400 text-sm sm:text-base">Try new ideas, technologies, and approaches</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover-lift hover-glow">
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Create</h4>
                <p className="text-gray-400 text-sm sm:text-base">Build something meaningful in an intensive sprint</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover-lift hover-glow">
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Connect</h4>
                <p className="text-gray-400 text-sm sm:text-base">Network with the Plutas Lab community</p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up animate-delay-500">
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Interested in joining our next Builders Night?</p>
          <a 
            href="/builders-night#apply"
            className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors inline-block text-sm sm:text-base hover-scale animate-pulse"
            aria-label="Apply for Builders Night event"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
