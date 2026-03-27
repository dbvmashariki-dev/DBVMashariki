/* ==========================================================
   IndustriesSection — Apex Consulting Group
   Design: Warm gray background, industry badges, trusted by strip
   ========================================================== */
import { motion } from "framer-motion";
import { Building2, HeartPulse, Factory, Cpu, ShoppingBag, Zap, Landmark, GraduationCap } from "lucide-react";

const industries = [
  { icon: Building2, label: "Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Cpu, label: "Technology" },
  { icon: ShoppingBag, label: "Retail & CPG" },
  { icon: Zap, label: "Energy & Utilities" },
  { icon: Landmark, label: "Government" },
  { icon: GraduationCap, label: "Education" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="teal-bar" />
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Industries</span>
            <span className="teal-bar" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C2B3A]">
            Deep Expertise Across Sectors
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            We bring industry-specific knowledge to every engagement, ensuring our recommendations are grounded in the realities of your sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 text-center border border-gray-100 hover:border-[oklch(0.65_0.14_210)]/40 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4F6F8] group-hover:bg-[oklch(0.65_0.14_210)]/10 flex items-center justify-center transition-colors">
                  <Icon size={22} className="text-[#1C2B3A] group-hover:text-[oklch(0.65_0.14_210)] transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#1C2B3A]">{ind.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
