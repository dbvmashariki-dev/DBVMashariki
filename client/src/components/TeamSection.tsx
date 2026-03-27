/* ==========================================================
   TeamSection — Apex Consulting Group
   Design: White background, team member cards with teal accent
   hover, professional bios
   ========================================================== */
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "David Harrington",
    role: "Managing Partner & CEO",
    bio: "20+ years leading enterprise transformation programs for Fortune 500 companies. Former McKinsey Principal with deep expertise in organizational strategy.",
    initials: "DH",
    color: "#1C2B3A",
    specialties: ["Strategy", "Digital Transformation"],
  },
  {
    name: "Priya Nair",
    role: "Partner, IT Consulting",
    bio: "Ex-Google engineering leader with 15 years of experience architecting cloud-native solutions and leading large-scale digital transformation programs.",
    initials: "PN",
    color: "oklch(0.65 0.14 210)",
    specialties: ["Cloud Architecture", "Cybersecurity"],
  },
  {
    name: "Marcus Webb",
    role: "Partner, Business Development",
    bio: "Serial entrepreneur and growth strategist who has helped over 60 companies enter new markets and scale revenue. MBA from Wharton.",
    initials: "MW",
    color: "#2A4A6B",
    specialties: ["Market Entry", "Revenue Growth"],
  },
  {
    name: "Aisha Kamara",
    role: "Director, Project Management",
    bio: "PMP and PMI-ACP certified with 12 years managing complex, multi-million dollar programs across healthcare, finance, and infrastructure sectors.",
    initials: "AK",
    color: "oklch(0.55 0.12 210)",
    specialties: ["Agile Delivery", "PMO Governance"],
  },
  {
    name: "Thomas Brandt",
    role: "Director, Continuous Improvement",
    bio: "Lean Six Sigma Master Black Belt with a track record of delivering $50M+ in operational savings across manufacturing and logistics organizations.",
    initials: "TB",
    color: "#1C2B3A",
    specialties: ["Lean", "Six Sigma DMAIC"],
  },
  {
    name: "Sophia Chen",
    role: "Senior Consultant, IT Strategy",
    bio: "Specialist in enterprise architecture and ERP implementations with 8 years of experience across SAP, Salesforce, and Microsoft ecosystems.",
    initials: "SC",
    color: "oklch(0.65 0.14 210)",
    specialties: ["ERP Integration", "IT Governance"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
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
            <span className="label-mono text-[oklch(0.65_0.14_210)]">Our Team</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1C2B3A] leading-tight max-w-lg">
              Expertise You Can Rely On
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
              Our consultants are practitioners first — with real-world experience leading the kinds of challenges you face.
            </p>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="service-card rounded-xl p-6 bg-white group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Avatar */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[oklch(0.65_0.14_210)] hover:text-[oklch(0.65_0.14_210)] transition-colors">
                  <Linkedin size={14} />
                </button>
              </div>

              <h4 className="text-base font-black text-[#1C2B3A] mb-0.5">{member.name}</h4>
              <p className="label-mono text-[oklch(0.65_0.14_210)] mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-[oklch(0.65_0.14_210)]/10 text-[oklch(0.55_0.14_210)] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
