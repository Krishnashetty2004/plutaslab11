"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useMemo } from "react"

export default function MicroGrantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const grants = [
    {
      name: "1517 Medici Project",
      url: "https://www.1517fund.com/medici-project",
      description: "$1K grants for high school, college students, and dropouts to launch projects to make humanity better, backed by 1517 Fund."
    },
    {
      name: "5x5 Night",
      url: "http://5x5night.com/",
      description: "5x5 Night takes place once a month. The community votes on the ideas that will be presented at the event. The selected creators explain a $5,000 step that will move the idea forward, and will meet people who can help."
    },
    {
      name: "Arraig Grants (formerly Éire Ventures)",
      url: "https://arraig.com/micro-grants/",
      description: "$500 microgrants for individuals and entrepreneurs focused on international markets, revenue/profitability, and an exploratory approach."
    },
    {
      name: "ACX Grants",
      url: "https://www.astralcodexten.com/p/acx-grants-results-2024",
      description: "Grants program, organized by Scott Alexander, for \"good research and good projects with a minimum of paperwork.\" Runs irregularly."
    },
    {
      name: "Atomic Fellowship",
      url: "https://www.gradcapital.in/atomicfellow/",
      description: "$5,000 no-strings-attached grant for students who want to work on science & engineering projects, with an option of an additional $40k investment by gradCapital."
    },
    {
      name: "Awesome Foundation",
      url: "http://www.awesomefoundation.org/",
      description: "The Awesome Foundation is a global community advancing the interest of awesome in the universe, $1000 at a time. Each fully autonomous chapter supports awesome projects through micro-grants, usually given out monthly."
    },
    {
      name: "Bed-Stuy Create & Connect Fund",
      url: "https://laundromatproject.org/create-connect-fund/",
      description: "A community micro-grant fund launched by The Laundromat Project providing $1,000 grants to seed and support the creative ideas and civic actions of artists, cultural practitioners, community builders, organizers, and makers in Bedford-Stuyvesant, Brooklyn (New York City)."
    },
    {
      name: "Bellare Grants",
      url: "https://bellaregrants.netlify.app/",
      description: "Bellare Grants awards up to 1 lakh INR per year to Indian initiatives in education, healthcare, research, and open source projects (hardware and software) through financial contributions."
    },
    {
      name: "cache money grants",
      url: "https://cachemoney.xyz/grants/",
      description: "$5K grants, paid in crypto (BTC, ETH, SOL), for \"hackers and/or artists who want to tackle interesting new ideas in the crypto space.\""
    },
    {
      name: "Cactus Capital",
      url: "https://cactuscapital.org/",
      description: "$50-100 microgrants for student builders at any stage. Run by Nayel and Arhan, two high schoolers from northern Virginia."
    },
    {
      name: "Clarity Health Fund",
      url: "https://www.clarityhealthfund.org/",
      description: "$1,000 USD microgrants for progress in psychedelics and drug policy. Clarity Health Fund's primary mission is to bring psychedelics into the wellness system. Larger grants are also available."
    },
    {
      name: "Da Vinci Fellowship",
      url: "https://davincifellowship.com/",
      description: "An equity-free grant of €150,000 given to exceptional engineers, scientists, and builders who want to shape the future of technology in Europe."
    },
    {
      name: "Echoing Green Fellowship",
      url: "https://echoinggreen.org/fellowship/",
      description: "A two-year, full-time fellowship for social sector leaders who challenge the status quo. $80,000 for individuals, $90,000 for partnerships, in addition to a flexible benefit stipend."
    },
    {
      name: "Emergent Ventures",
      url: "https://www.mercatus.org/emergentventures",
      description: "Emergent Ventures, a new fellowship and grant program from the Mercatus Center, seeks to support entrepreneurs and brilliant minds with highly scalable, \"zero to one\" ideas for meaningfully improving society."
    },
    {
      name: "Forge Grants",
      url: "https://www.forgegrant.com/",
      description: "The Forge Grant Initiative provides no-strings-attached grants up to $250 for young creator-engineers (13-25) who can both dream up viral concepts and build the technical infrastructure to make them reality."
    },
    {
      name: "Fortitude Fund",
      url: "https://fortitudefund.com/",
      description: "The Fortitude Fund provides $1,000 grants to create a entrepreneurial culture in northeast Indiana that welcomes new ideas and encourages them to dream bigger. Upon receiving an initial grant and showing progress in their business, grantees are also eligible to receive a Next Level Grant of $2,500."
    },
    {
      name: "Feather Grants",
      url: "https://www.gradcapital.in/feathergrants/",
      description: "INR 15,000 grant ($180) to students to bring their boldest ideas to life—no strings attached. The project can be anything that sets your heart racing, whether it's creating a short film, conducting a science experiment, competing in a national dance competition, or archiving local history."
    },
    {
      name: "Gumroad Creators Fund",
      url: "https://blog.gumroad.com/post/183876075758/introducing-the-first-batch-of-our-creators-fund",
      description: "Over the course of the year, Gumroad will allocate over $50,000 (10% of their profits) to a variety of creators and creative projects. Each \"grant\" will be between $500 and $5,000."
    },
    {
      name: "Indie Fund",
      url: "http://indie-fund.com/",
      description: "Indie Fund aims to support the growth of games as a medium by helping indie developers get financially independent and stay financially independent."
    },
    {
      name: "Inflection Grants",
      url: "https://www.inflectiongrants.com/",
      description: "$2,000 grants for people under 25 to fuel their passion, idea, or themselves."
    },
    {
      name: "Lift Off Grant",
      url: "https://www.liftoffgrant.com/",
      description: "Empowering young innovators (18 and under) with $50-$100 microgrants to turn their ideas into reality. No strings attached - just your creativity and passion."
    },
    {
      name: "Macktez Summer Stipend",
      url: "https://www.macktez.com/stipend/",
      description: "The Macktez Summer Stipend is a $1,000 development grant to encourage creative people to pursue and complete their personal projects."
    },
    {
      name: "Magnificent Grants",
      url: "https://www.magnificentgrants.com/",
      description: "$10,000 fellowships to outliers taking down the walls of universities, credentialism, and elitist hierarchies to have impact on the world."
    },
    {
      name: "Merge Grant",
      url: "https://merge.club/program/mergegrant",
      description: "Merge Grant is a micro-grant initiative (between $50 and $1,000) designed to give ambitious builders resources as they pursue compelling projects."
    },
    {
      name: "Mitzvoters",
      url: "https://www.mitzvoters.org/",
      description: "Mitzvoters is a group that leverages $50/month collective giving to award $500 grants to \"cast a vote about what we want to thrive.\""
    },
    {
      name: "Nagarathna Memorial Grant",
      url: "https://thejeshgn.com/projects/nagarathna-memorial-grant/",
      description: "Up to INR 80,000 (~ $1,100) to people. No questions asked."
    },
    {
      name: "Native Cultures Fund",
      url: "https://www.hafoundation.org/Grantseekers/Native-Cultures-Fund",
      description: "$1,000-$10,000 for projects that support California native culture, arts, knowledge systems, and lifeways."
    },
    {
      name: "NLNet Foundation",
      url: "https://nlnet.nl/propose/",
      description: "$5K to $50K for open source projects by independent researchers and developers. NLnet also funds standards efforts. Releasing software, hardware, and content under open licenses, and the application of open standards where possible are transversal requirements for projects to be eligible for grants."
    },
    {
      name: "Open Humans Project Grant",
      url: "https://www.openhumans.org/grants/",
      description: "$5,000 for human data projects (ex. genetic, activity or social media data) that help grow the Open Humans ecosystem."
    },
    {
      name: "Patch Grants",
      url: "https://www.joinpatch.org/grants/",
      description: "Grants of up to €1000 for young people based in Ireland who are working on early-stage projects and products. Grantees are paired with a mentor who has experience in their focus area and can offer support in setting and achieving ambitious goals."
    },
    {
      name: "Pollination Project",
      url: "https://thepollinationproject.org/",
      description: "The Pollination Project awards seed grants daily to social change leaders seeking to benefit the world (both individuals, and community groups that do not have paid staff). Up to $1,000 per initial grant. Successful grantees become eligible for additional grants up to $5,000."
    },
    {
      name: "Primer Grants",
      url: "https://www.withprimer.com/blog/introducing-primer-grants",
      description: "Primer Grants are awards of up to $500 per student to fund ambitious projects from kids around the world."
    },
    {
      name: "Prototype Fund",
      url: "https://prototypefund.de",
      description: "The Prototype Fund is a collaboration between the Open Knowledge Foundation Germany and the German Federal Ministry of Education and Research. You can get up to 47.500€ for your open source project. This grant is only available for people living in Germany, but available with any passport."
    },
    {
      name: "Puffin Foundation",
      url: "http://www.puffinfoundation.org/grants-info.html",
      description: "Up to $2,500 for emerging artists whose works might have difficulty being aired due to their genre and/or social philosophy."
    },
    {
      name: "Science Debate",
      url: "https://sciencedebate.org/minigrants.html",
      description: "$1,000-$3,000 \"mini grants\" for community organizers and science policy advocates across the United States, particularly those who organize efforts and coordinate the mobilization of people to promote discussion of science policy by electoral candidates. Science Debate is a nonpartisan organization."
    },
    {
      name: "SciFounders",
      url: "https://scifounders.com/",
      description: "The SciFounder Fellowship is \"designed to encourage early-career scientists with great ideas to get started on their own companies. You will receive an initial investment of $400,000 and mentorship in the form of regular office hours for one year.\""
    },
    {
      name: "Sisters of Perpetual Indulgence",
      url: "https://www.thesisters.org/grants",
      description: "$250-$1000 grants to support under-funded, small organizations and projects providing direct services to under-served communities. The projects they support tend to be progressive grassroots projects that promote wellness, joy, tolerance, and diversity within our communities, and that support the LGBTQ+ community. Bay Area projects preferred."
    },
    {
      name: "Thiel Fellowship",
      url: "https://thielfellowship.org/",
      description: "$100,000 over two years for young people who want to build new things. Thiel Fellows skip or stop out of college to receive a $100,000 grant and support from the Thiel Foundation's network of founders, investors, and scientists."
    },
    {
      name: "Trelis AI Grants",
      url: "https://trelis.com/trelis-ai-grants/",
      description: "$500 grants for individuals pursuing advances in the field of AI models, such as training, inferencing, and fine-tuning."
    },
    {
      name: "Unitary Fund",
      url: "http://unitary.fund/",
      description: "Get $4,000 for your open source quantum computing project."
    },
    {
      name: "VitaDAO Fellowship",
      url: "https://www.vitadao.com/fellowship",
      description: "Apply for $100-$3,000 fast microgrants to pursue your effort in longevity. You can meet other fellows on a bi-monthly call to support each other, as well as get awareness through the broader community, and apply for up to $1m in translational research funding."
    },
    {
      name: "Xor Grant",
      url: "https://xorgrant.org",
      description: "Xor Grant is a no-strings-attached microgrant awarded to high school seniors pursuing a computer science or cybersecurity program in college. Its mission is to support students who are passionate about solving interesting problems and love thinking outside the box."
    }
  ]

  // Filter grants based on search query
  const filteredGrants = useMemo(() => {
    if (!searchQuery) return grants
    const query = searchQuery.toLowerCase()
    return grants.filter((grant) => {
      return (
        grant.name.toLowerCase().includes(query) ||
        grant.description.toLowerCase().includes(query) ||
        grant.url.toLowerCase().includes(query)
      )
    })
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 text-white font-serif">Micro Grants</h1>
          
          <div className="mb-8 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
            <p className="mb-6">
              A list of microgrant programs designed to help you pursue and build on your best ideas.
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <label htmlFor="search" className="block text-white font-semibold mb-3 font-serif">
                Filter Grants
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by name, description, or amount..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-sm text-gray-400 hover:text-white transition-colors font-sans"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="text-center text-gray-400 text-sm font-sans mb-4">
              Showing {filteredGrants.length} of {grants.length} grants
            </div>
          )}

          {/* Filtered Results */}
          {filteredGrants.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 font-sans text-lg">
                No grants found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-white hover:text-gray-300 underline font-sans"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="space-y-6 mb-12">
              {filteredGrants.map((grant, index) => (
              <section 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white font-serif">
                  {grant.name}
                </h2>
                <a 
                  href={grant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline mb-3 block font-sans text-sm break-all"
                >
                  {grant.url}
                </a>
                <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  {grant.description}
                </p>
              </section>
              ))}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  )
}

