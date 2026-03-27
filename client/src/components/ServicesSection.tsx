/* ==========================================================
   ServicesSection — Apex Consulting Group
   Design: 4 service cards with teal border hover, numbered,
   with service images and detailed descriptions
   ========================================================== */
import { motion } from "framer-motion";
import { Monitor, TrendingUp, ClipboardList, RefreshCw, ArrowRight } from "lucide-react";

const IT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485178948/B6BKYTUhrGoLtbBMkFEpS6/it-consulting-UWfsSWC3CcCRahoiRuJLNr.webp";
const BIZ_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485178948/B6BKYTUhrGoLtbBMkFEpS6/business-dev-4Wf2Sifwqj6PUdgMkeFV57.webp";
const PM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485178948/B6BKYTUhrGoLtbBMkFEpS6/project-mgmt-kopCVnC5ZCuAnE2HoCuunf.webp";
const CI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485178948/B6BKYTUhrGoLtbBMkFEpS6/continuous-improvement-DXzWHV7v8DdTF4pxyGjonC.webp";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "IT Consulting",
    tagline: "Technology that drives competitive advantage",
    description:
      "We architect and implement technology strategies that align with your business objectives. From digital transformation roadmaps and cloud migration to cybersecurity frameworks and enterprise system integration, our IT consultants bridge the gap between technology potential and business value.",
    bullets: ["Digital Transformation", "Cloud Architecture & Migration", "Cybersecurity & Compliance", "ERP & System Integration"],
    image: IT_IMG,
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Business Development",
    tagline: "Sustainable growth, strategically engineered",
    description:
      "Our business development practice helps organizations identify new revenue streams, enter new markets, and build strategic partnerships. We combine rigorous market analysis with practical execution frameworks to turn growth ambitions into measurable outcomes.",
    bullets: ["Market Entry Strategy", "Revenue Growth Planning", "Partnership Development", "Competitive Intelligence"],
    image: BIZ_IMG,
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Project Management",
    tagline: "On time, on budget, on target",
    description:
      "We provide end-to-end project management expertise across complex, multi-stakeholder initiatives. Our certified PMs apply agile, waterfall, and hybrid methodologies to ensure your projects are delivered with precision, transparency, and accountability.",
    bullets: ["Agile & Scrum Delivery", "PMO Setup & Governance", "Risk & Change Management", "Portfolio Optimization"],
    image: PM_IMG,
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Continuous Improvement",
    tagline: "Operational excellence as a competitive edge",
    description:
      "We embed a culture of continuous improvement into your operations using Lean, Six Sigma, and Kaizen principles. Our consultants identify waste, reduce variation, and build sustainable improvement systems that deliver measurable cost savings and quality gains.",
    bullets: ["Lean Process Design", "Six Sigma (DMAIC)", "Kaizen Workshops", "KPI & Performance Systems"],
    image: CI_IMG,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55 },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
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
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C2B3A] leading-tight max-w-2xl">
            Four Disciplines. One Integrated Approach.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            We don't offer generic advice. Every engagement is tailored to your organization's unique challenges, culture, and strategic objectives.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                className="service-card rounded-xl overflow-hidden bg-white group"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/70 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4">
                    <span className="label-mono text-white/60 text-xs">{service.number}</span>
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded bg-[oklch(0.65_0.14_210)] flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1C2B3A] mb-1">{service.title}</h3>
                  <p className="label-mono text-[oklch(0.65_0.14_210)] mb-3">{service.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Bullets */}
                  <ul className="grid grid-cols-2 gap-1 mb-5">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.14_210)] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.65_0.14_210)] hover:gap-3 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
