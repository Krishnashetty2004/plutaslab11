import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BuildersNightPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-white">Builders Night</h1>

          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white">What is Builders Night?</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Builders Night is an exclusive event held twice a month where selected developers come together for an
                intensive 12-24 hour lockdown session. It's a time to build, experiment, collaborate, and push the
                boundaries of what's possible.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white">Event Details</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Frequency</h3>
                  <p>Twice a month</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Duration</h3>
                  <p>12-24 hour intensive sessions</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Selection</h3>
                  <p>Application-based - only selected developers are invited</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Focus</h3>
                  <p>Building, experimenting, collaborating, and having fun</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white">Why Join?</h2>
              <ul className="text-slate-300 text-lg space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Collaborate with talented developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Build something meaningful in a short timeframe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Experiment with new technologies and ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Be part of an exclusive developer community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Have fun while pushing your limits</span>
                </li>
              </ul>
            </section>

            <section className="bg-black border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to Join?</h2>
              <p className="text-white mb-6">
                Apply now to be part of the next Builders Night and join a community of innovative developers.
              </p>
              <div className="overflow-hidden rounded-lg">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdH2mE3tW21VoEdtBGTKMRv1eEWUV1s_gVj9tlzvU1pgAPTQw/viewform?embedded=true" 
                  width="100%" 
                  height="1200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="bg-white"
                >
                  Loading…
                </iframe>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
