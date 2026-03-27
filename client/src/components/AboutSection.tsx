/* ==========================================================
   AboutSection — Apex Consulting Group
   Design: Dark slate background, asymmetric two-column layout,
   teal accent bars, value pillars
   ========================================================== */
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "We measure success by the tangible results we deliver — not by the hours we bill or the slides we produce.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work alongside your teams, transferring knowledge and capability so that improvements outlast our engagement.",
  },
  {
    icon: Lightbulb,
    title: "Evidence-Based Insight",
    description: "Every recommendation is grounded in data, industry benchmarks, and proven methodologies — not intuition alone.",
  },
  {
    icon: Shield,
    title: "Integrity First",
    description: "We tell clients what they need to hear, not what they want to hear. Honest counsel builds lasting trust.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#1C2B3A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="teal-bar" />
              <span className="label-mono text-[oklch(0.65_0.14_210)]">About DBV</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              We Don't Just Advise.<br />
              <span className="text-[oklch(0.65_0.14_210)]">We Execute.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-5">
              DBV Mashariki was founded on a simple conviction: that great consulting means rolling up your sleeves and working alongside your clients — not just delivering a report and walking away.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              With over 15 years of experience across industries including financial services, healthcare, manufacturing, and technology across Africa and beyond, our consultants bring deep functional expertise and a track record of measurable impact. We combine strategic thinking with operational rigor to help organizations navigate complexity, accelerate growth, and build lasting competitive advantage.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you're embarking on a digital transformation, scaling a new business unit, or driving operational efficiency, DBV Mashariki provides the expertise, tools, and hands-on support to make it happen.
            </p>

            <div className="mt-8 flex gap-6">
              <div className="border-l-2 border-[oklch(0.65_0.14_210)] pl-4">
                <div className="text-3xl font-black text-white">$2B+</div>
                <div className="label-mono text-white/50 text-xs mt-1">Value Created for Clients</div>
              </div>
              <div className="border-l-2 border-[oklch(0.65_0.14_210)] pl-4">
                <div className="text-3xl font-black text-white">50+</div>
                <div className="label-mono text-white/50 text-xs mt-1">Expert Consultants</div>
              </div>
              <div className="border-l-2 border-[oklch(0.65_0.14_210)] pl-4">
                <div className="text-3xl font-black text-white">12</div>
                <div className="label-mono text-white/50 text-xs mt-1">Countries Served</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-[oklch(0.65_0.14_210)]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.45 }}
                >
                  <div className="w-10 h-10 rounded bg-[oklch(0.65_0.14_210)]/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[oklch(0.65_0.14_210)]" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{val.title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
