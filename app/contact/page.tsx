import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-white">Get in Touch</h1>

          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">Bangalore, India - Silicon Valley of India</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:krishna@plutas.in" className="text-white hover:text-gray-300 transition-colors">
                    krishna@plutas.in
                  </a>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
