export default function BuildersNightSection() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 md:px-12 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-12 tracking-tight">Builders Night</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Event Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">What is Builders Night?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Builders Night is our signature event where selected developers come together for an intensive,
                immersive building experience. It's a celebration of creation, collaboration, and the pure joy of making
                something from nothing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Event Details</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="text-white font-bold text-xl mt-1">•</div>
                  <div>
                    <p className="text-white font-semibold">Frequency</p>
                    <p className="text-gray-400">Twice a month</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-white font-bold text-xl mt-1">•</div>
                  <div>
                    <p className="text-white font-semibold">Duration</p>
                    <p className="text-gray-400">12 to 24 hour lockdown</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-white font-bold text-xl mt-1">•</div>
                  <div>
                    <p className="text-white font-semibold">Participation</p>
                    <p className="text-gray-400">Selected developers only (application-based)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-white font-bold text-xl mt-1">•</div>
                  <div>
                    <p className="text-white font-semibold">Focus</p>
                    <p className="text-gray-400">Build, experiment, and have fun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Why Join?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Builders Night isn't just another hackathon. It's an opportunity to collaborate with like-minded
                developers, experiment with cutting-edge technologies, and push your creative boundaries in a supportive
                environment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">Collaborate</h4>
                <p className="text-gray-400">Work alongside talented developers and innovators</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">Experiment</h4>
                <p className="text-gray-400">Try new ideas, technologies, and approaches</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">Create</h4>
                <p className="text-gray-400">Build something meaningful in an intensive sprint</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">Connect</h4>
                <p className="text-gray-400">Network with the Plutas Lab community</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Interested in joining our next Builders Night?</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdH2mE3tW21VoEdtBGTKMRv1eEWUV1s_gVj9tlzvU1pgAPTQw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
