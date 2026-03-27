/* ==========================================================
   ResultsSection — Apex Consulting Group
   Design: Light warm-gray background, large metric numbers,
   client testimonials carousel
   ========================================================== */
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const metrics = [
  { value: "35%", label: "Average Cost Reduction", detail: "through lean process optimization" },
  { value: "2.4×", label: "Faster Time-to-Market", detail: "via agile project delivery" },
  { value: "60%", label: "IT Incident Reduction", detail: "post-infrastructure modernization" },
  { value: "$180M", label: "Revenue Growth Enabled", detail: "across business development engagements" },
];

const testimonials = [
  {
    quote: "Apex transformed our IT infrastructure and reduced our operational costs by 40% within 18 months. Their team was embedded with ours from day one — they felt like colleagues, not consultants.",
    author: "Sarah Mitchell",
    role: "CTO, NovaTech Financial",
    initials: "SM",
  },
  {
    quote: "The project management framework Apex implemented gave us complete visibility across our portfolio. We went from missing deadlines to delivering ahead of schedule on 90% of our initiatives.",
    author: "James Okafor",
    role: "VP Operations, Meridian Healthcare",
    initials: "JO",
  },
  {
    quote: "Their continuous improvement program eliminated $12M in annual waste from our manufacturing operations. The results speak for themselves, and the culture change has been lasting.",
    author: "Elena Vasquez",
    role: "COO, Pinnacle Manufacturing",
    initials: "EV",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-[#F4F6F8]">
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
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Proven Impact</span>
            <span className="teal-bar" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C2B3A] leading-tight">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our engagements are measured by the outcomes we deliver — not the volume of recommendations we make.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-[oklch(0.65_0.14_210)]/30 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-black text-[oklch(0.65_0.14_210)] mb-2">{m.value}</div>
              <div className="text-sm font-bold text-[#1C2B3A] mb-1">{m.label}</div>
              <div className="text-xs text-gray-400">{m.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Quote size={28} className="text-[oklch(0.65_0.14_210)] mb-4 opacity-60" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1C2B3A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C2B3A]">{t.author}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
