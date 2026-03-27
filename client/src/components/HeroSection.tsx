/* ==========================================================
   HeroSection — Apex Consulting Group
   Design: Full-bleed dark hero with teal accents, asymmetric
   layout, animated text reveal
   ========================================================== */
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485178948/B6BKYTUhrGoLtbBMkFEpS6/hero-bg-CKwFxg3U2SUoVmDVwhUji2.webp";

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55 },
  }),
};

const heroWords = ["Clarity.", "Strategy.", "Results."];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1C2B3A]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B3A]/95 via-[#1C2B3A]/80 to-[#1C2B3A]/40" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, oklch(0.65 0.14 210) 39px, oklch(0.65 0.14 210) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, oklch(0.65 0.14 210) 39px, oklch(0.65 0.14 210) 40px)`,
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Management Consulting</span>
            <div className="h-px w-12 bg-[oklch(0.65_0.14_210)]" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-4"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl font-light text-white/70 mb-8 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Transforming organizations through expert consulting in{" "}
            <span className="text-[oklch(0.65_0.14_210)] font-medium">IT</span>,{" "}
            <span className="text-[oklch(0.65_0.14_210)] font-medium">Business Development</span>,{" "}
            <span className="text-[oklch(0.65_0.14_210)] font-medium">Project Management</span>, and{" "}
            <span className="text-[oklch(0.65_0.14_210)] font-medium">Continuous Improvement</span>.
          </motion.h2>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-sweep inline-flex items-center gap-2 bg-[oklch(0.65_0.14_210)] text-white px-7 py-4 font-semibold rounded text-base hover:shadow-xl hover:shadow-[oklch(0.65_0.14_210)]/30 transition-all duration-300"
            >
              <span>Start Your Transformation</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 font-semibold rounded text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "15+", label: "Years of Expertise" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40+", label: "Industry Sectors" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-white leading-none">{stat.value}</span>
                <span className="label-mono text-white/50 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="label-mono text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
