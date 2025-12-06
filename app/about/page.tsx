import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-white font-serif">About Plutas Lab</h1>

          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white font-serif">Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Plutas Lab is an AI experimental lab founded by a group of developer friends exploring repeatable
                business models while solving diverse problems. We're based in Bangalore, the Silicon Valley of India,
                where innovation meets opportunity.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white font-serif">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We believe in the power of experimentation and collaboration. By bringing together brilliant minds, we
                create an environment where ideas flourish and innovation thrives. We build; therefore we are.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white font-serif">What We Do</h2>
              <ul className="text-slate-300 text-lg space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Experiment with cutting-edge AI technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Build scalable solutions to real-world problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Foster a community of innovative developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Explore repeatable business models</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
