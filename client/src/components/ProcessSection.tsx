/* ==========================================================
   ProcessSection — Apex Consulting Group
   Design: White background, horizontal step flow with teal
   connectors, numbered steps
   ========================================================== */
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Diagnose",
    description: "We begin with a rigorous diagnostic phase — interviewing stakeholders, analyzing data, and benchmarking against industry standards to understand the true root causes of your challenges.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design the Solution",
    description: "Our consultants co-design solutions with your team, ensuring recommendations are practical, tailored, and aligned with your organization's capabilities and strategic direction.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute & Implement",
    description: "We don't hand off a report and leave. Our team works alongside yours through implementation, managing change, removing obstacles, and ensuring adoption at every level.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Measure & Sustain",
    description: "We establish clear KPIs, build governance frameworks, and embed continuous improvement mechanisms so that the gains we deliver are sustained long after the engagement ends.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="teal-bar" />
            <span className="label-mono text-[oklch(0.65_0.14_210)]">How We Work</span>
            <span className="teal-bar" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C2B3A] leading-tight">
            A Proven Engagement Model
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every Apex engagement follows a disciplined four-phase approach that balances analytical rigor with practical execution.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-[#F4F6F8] border-2 border-gray-200 flex items-center justify-center mb-5 relative group hover:border-[oklch(0.65_0.14_210)] hover:bg-[oklch(0.65_0.14_210)]/10 transition-all duration-300">
                  <Icon size={28} className="text-[#1C2B3A] group-hover:text-[oklch(0.65_0.14_210)] transition-colors" />
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[oklch(0.65_0.14_210)] flex items-center justify-center">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                </div>

                <h4 className="text-base font-black text-[#1C2B3A] mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
