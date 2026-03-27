/* ==========================================================
   CaseStudiesSection — Apex Consulting Group
   Design: White background, featured case study + grid of
   case cards with challenge/solution/outcome structure
   ========================================================== */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, TrendingUp, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation at NovaTech Financial",
    client: "NovaTech Financial Services",
    service: "IT Consulting",
    tagline: "Modernizing legacy systems to enable 10x faster transactions",
    featured: true,
    challenge:
      "NovaTech was operating on a 20-year-old mainframe architecture that couldn't scale to meet growing demand. System outages were costing $500K per incident, and the tech team was spending 60% of their time on maintenance rather than innovation.",
    solution:
      "We architected a phased cloud migration strategy using AWS, containerized their core applications with Kubernetes, and implemented a modern CI/CD pipeline. The engagement included hands-on mentoring of their engineering team to build internal cloud expertise.",
    outcomes: [
      { metric: "$2.4M", detail: "Annual cost savings" },
      { metric: "99.99%", detail: "System uptime achieved" },
      { metric: "70%", detail: "Faster transaction processing" },
      { metric: "6 months", detail: "Time to full migration" },
    ],
    industry: "Financial Services",
    duration: "6 months",
    teamSize: "8 consultants",
    testimonial: {
      quote: "Apex didn't just hand us a plan — they embedded with our team and made us self-sufficient. We went from firefighting to innovating.",
      author: "Sarah Mitchell",
      role: "CTO, NovaTech Financial",
    },
  },
  {
    id: 2,
    title: "Lean Transformation at Pinnacle Manufacturing",
    client: "Pinnacle Manufacturing",
    service: "Continuous Improvement",
    tagline: "Eliminating $12M in annual waste through Lean Six Sigma",
    featured: false,
    challenge:
      "Pinnacle's manufacturing operations were plagued by inefficiency: 35% of production time was waste, quality defects cost $8M annually, and employee engagement was at 42%.",
    solution:
      "We implemented a comprehensive Lean Six Sigma program across 5 facilities, training 120 employees as Green Belts. We redesigned 12 critical processes, eliminated non-value-added steps, and embedded continuous improvement into their culture.",
    outcomes: [
      { metric: "$12M", detail: "Annual waste eliminated" },
      { metric: "40%", detail: "Defect reduction" },
      { metric: "25%", detail: "Production efficiency gain" },
      { metric: "18 months", detail: "Payback period" },
    ],
    industry: "Manufacturing",
    duration: "18 months",
    teamSize: "5 consultants",
    testimonial: {
      quote: "The results speak for themselves. We've sustained the improvements and our team now owns continuous improvement as part of their DNA.",
      author: "Elena Vasquez",
      role: "COO, Pinnacle Manufacturing",
    },
  },
  {
    id: 3,
    title: "Market Entry Strategy for TechVenture Asia",
    client: "TechVenture Asia",
    service: "Business Development",
    tagline: "Successfully entering 3 new markets with $180M revenue pipeline",
    featured: false,
    challenge:
      "TechVenture wanted to expand into Southeast Asia but lacked market intelligence, local partnerships, and a clear go-to-market strategy. The risk of missteps was high.",
    solution:
      "We conducted rigorous market analysis across 5 countries, identified high-potential segments, and facilitated partnerships with local distributors and integrators. We built a 24-month market entry roadmap with clear milestones and success metrics.",
    outcomes: [
      { metric: "$180M", detail: "Revenue pipeline created" },
      { metric: "12", detail: "Strategic partnerships established" },
      { metric: "3", detail: "New markets entered" },
      { metric: "Q2 2024", detail: "First revenue milestone achieved" },
    ],
    industry: "Technology",
    duration: "9 months",
    teamSize: "4 consultants",
    testimonial: {
      quote: "Apex's market expertise and local connections were invaluable. They de-risked our expansion and gave us a playbook we can replicate.",
      author: "James Chen",
      role: "VP Growth, TechVenture Asia",
    },
  },
  {
    id: 4,
    title: "PMO Implementation at Meridian Healthcare",
    client: "Meridian Healthcare",
    service: "Project Management",
    tagline: "Establishing governance to deliver 90% of projects on time",
    featured: false,
    challenge:
      "Meridian's project portfolio was chaotic — 60% of initiatives missed deadlines, budgets overran by 35%, and there was no visibility across projects. Leadership had no confidence in delivery timelines.",
    solution:
      "We designed and implemented a centralized PMO with standardized governance, portfolio management tools, and a tiered escalation process. We trained 50+ project managers in agile and hybrid methodologies.",
    outcomes: [
      { metric: "90%", detail: "On-time delivery rate" },
      { metric: "$45M", detail: "Budget variance eliminated" },
      { metric: "100%", detail: "Portfolio visibility" },
      { metric: "12 months", detail: "PMO fully operational" },
    ],
    industry: "Healthcare",
    duration: "12 months",
    teamSize: "6 consultants",
    testimonial: {
      quote: "The PMO transformed how we manage work. We now deliver predictably, and our teams have clarity on priorities.",
      author: "Marcus Webb",
      role: "Chief Operating Officer, Meridian Healthcare",
    },
  },
  {
    id: 5,
    title: "Organizational Redesign at Global Energy Corp",
    client: "Global Energy Corp",
    service: "IT Consulting & Continuous Improvement",
    tagline: "Restructuring for agility and reducing cost by 20%",
    featured: false,
    challenge:
      "Global Energy's organizational structure was siloed and slow. Decision-making took months, and the company was losing market share to more agile competitors.",
    solution:
      "We redesigned the organizational structure around customer-centric value streams, implemented agile ways of working, and streamlined decision-making. We also optimized their IT infrastructure to support the new operating model.",
    outcomes: [
      { metric: "20%", detail: "Cost reduction achieved" },
      { metric: "6 weeks", detail: "Average decision time (down from 12 weeks)" },
      { metric: "35%", detail: "Employee engagement increase" },
      { metric: "9 months", detail: "Full transformation" },
    ],
    industry: "Energy",
    duration: "9 months",
    teamSize: "7 consultants",
    testimonial: {
      quote: "Apex helped us move from a traditional structure to one that's built for the future. The change was significant but well-managed.",
      author: "Patricia Okonkwo",
      role: "Chief Executive Officer, Global Energy Corp",
    },
  },
];

const caseCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<(typeof caseStudies)[0] | null>(null);
  const featuredCase = caseStudies.find((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="teal-bar" />
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C2B3A] leading-tight max-w-3xl">
            Real Transformations. Real Results.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            See how we've helped organizations across industries solve complex challenges and achieve measurable business impact.
          </p>
        </motion.div>

        {/* Featured case study */}
        {featuredCase && (
          <motion.div
            className="mb-16 bg-gradient-to-br from-[#1C2B3A] to-[#2A3F52] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="label-mono text-[oklch(0.65_0.14_210)] text-xs">Featured Case</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.14_210)]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                  {featuredCase.title}
                </h3>
                <p className="text-[oklch(0.65_0.14_210)] font-semibold mb-4">{featuredCase.tagline}</p>
                <p className="text-white/70 text-base leading-relaxed mb-6">{featuredCase.challenge}</p>

                <div className="mb-6 pb-6 border-b border-white/15">
                  <p className="text-white/60 text-sm mb-2 label-mono">Our Approach</p>
                  <p className="text-white text-base leading-relaxed">{featuredCase.solution}</p>
                </div>

                {/* Outcomes grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredCase.outcomes.map((outcome) => (
                    <div key={outcome.metric} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-2xl font-black text-[oklch(0.65_0.14_210)]">{outcome.metric}</div>
                      <div className="text-xs text-white/50 mt-1">{outcome.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Client info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="label-mono text-white/40 text-xs mb-1">Client</div>
                    <div className="text-white font-semibold">{featuredCase.client}</div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(featuredCase)}
                    className="inline-flex items-center gap-2 bg-[oklch(0.65_0.14_210)] text-white px-5 py-3 rounded font-semibold text-sm hover:bg-[oklch(0.55_0.14_210)] transition-colors"
                  >
                    <span>View Full Case</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right: Testimonial */}
              <div className="p-8 md:p-12 bg-white/5 flex flex-col justify-center border-l border-white/10">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[oklch(0.65_0.14_210)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.812 4.313-8.812 8.019C-5.812 12.5-3.67 21 3 21z" />
                  </svg>
                </div>
                <p className="text-white text-lg leading-relaxed mb-6 italic">"{featuredCase.testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{featuredCase.testimonial.author}</div>
                  <div className="text-white/50 text-sm">{featuredCase.testimonial.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              className="service-card rounded-xl overflow-hidden bg-white group cursor-pointer"
              custom={i}
              variants={caseCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setSelectedCase(caseStudy)}
            >
              {/* Card header */}
              <div className="p-6 pb-4 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <span className="label-mono text-[oklch(0.65_0.14_210)] text-xs">{caseStudy.service}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{caseStudy.industry}</span>
                </div>
                <h4 className="text-lg font-black text-[#1C2B3A] leading-tight mb-2">{caseStudy.title}</h4>
                <p className="text-gray-500 text-sm">{caseStudy.tagline}</p>
              </div>

              {/* Outcomes preview */}
              <div className="p-6 space-y-3">
                {caseStudy.outcomes.slice(0, 2).map((outcome) => (
                  <div key={outcome.metric} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.14_210)] mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#1C2B3A]">{outcome.metric}</div>
                      <div className="text-xs text-gray-400">{outcome.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-400">{caseStudy.duration} • {caseStudy.teamSize}</div>
                <button className="text-[oklch(0.65_0.14_210)] hover:text-[oklch(0.55_0.14_210)] transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for detailed case study */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 md:p-8 flex items-start justify-between">
                <div>
                  <span className="label-mono text-[oklch(0.65_0.14_210)] text-xs">{selectedCase.service}</span>
                  <h2 className="text-3xl font-black text-[#1C2B3A] mt-2">{selectedCase.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Challenge */}
                <div>
                  <h3 className="text-xl font-black text-[#1C2B3A] mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[oklch(0.65_0.14_210)] rounded" />
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-black text-[#1C2B3A] mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[oklch(0.65_0.14_210)] rounded" />
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{selectedCase.solution}</p>
                </div>

                {/* Outcomes */}
                <div>
                  <h3 className="text-xl font-black text-[#1C2B3A] mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[oklch(0.65_0.14_210)] rounded" />
                    Measurable Outcomes
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCase.outcomes.map((outcome) => (
                      <div key={outcome.metric} className="bg-[#F4F6F8] rounded-lg p-4 text-center">
                        <div className="text-3xl font-black text-[oklch(0.65_0.14_210)]">{outcome.metric}</div>
                        <div className="text-xs text-gray-600 mt-2">{outcome.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="label-mono text-gray-500 text-xs mb-1">Duration</div>
                    <div className="font-semibold text-[#1C2B3A]">{selectedCase.duration}</div>
                  </div>
                  <div>
                    <div className="label-mono text-gray-500 text-xs mb-1">Team Size</div>
                    <div className="font-semibold text-[#1C2B3A]">{selectedCase.teamSize}</div>
                  </div>
                  <div>
                    <div className="label-mono text-gray-500 text-xs mb-1">Industry</div>
                    <div className="font-semibold text-[#1C2B3A]">{selectedCase.industry}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[#1C2B3A] text-white p-6 rounded-lg">
                  <p className="text-lg leading-relaxed mb-4 italic">"{selectedCase.testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{selectedCase.testimonial.author}</div>
                    <div className="text-white/60 text-sm">{selectedCase.testimonial.role}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full btn-sweep bg-[oklch(0.65_0.14_210)] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <span>Start Your Own Success Story</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
