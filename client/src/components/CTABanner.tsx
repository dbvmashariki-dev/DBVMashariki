/* ==========================================================
   CTABanner — Apex Consulting Group
   Design: Teal gradient banner with bold CTA
   ========================================================== */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[oklch(0.55_0.14_210)] to-[oklch(0.65_0.14_210)] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)`,
        }}
      />
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/80 text-lg">
              Schedule a free 30-minute consultation with one of our senior consultants.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.55_0.14_210)] px-7 py-4 font-bold rounded text-base hover:bg-white/90 hover:shadow-xl transition-all duration-300"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
