/* ==========================================================
   Footer — Apex Consulting Group
   Design: Very dark slate, clean columns, teal accents
   ========================================================== */
import { Linkedin, Twitter, Globe } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111C27] text-white/60 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[oklch(0.65_0.14_210)] rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                Apex<span className="text-[oklch(0.65_0.14_210)]">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Transforming organizations through expert consulting in IT, Business Development, Project Management, and Continuous Improvement.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded border border-white/15 flex items-center justify-center hover:border-[oklch(0.65_0.14_210)] hover:text-[oklch(0.65_0.14_210)] transition-colors"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="label-mono text-white text-xs mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              {["IT Consulting", "Business Development", "Project Management", "Continuous Improvement"].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="hover:text-[oklch(0.65_0.14_210)] transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="label-mono text-white text-xs mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", id: "#about" },
                { label: "Our Team", id: "#team" },
                { label: "Results", id: "#results" },
                { label: "Contact", id: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[oklch(0.65_0.14_210)] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="label-mono text-white text-xs mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>hello@apexconsulting.com</li>
              <li>+1 (800) 555-APEX</li>
              <li className="pt-1">New York · Chicago<br />San Francisco</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {year} Apex Consulting Group. All rights reserved.</span>
          <div className="flex gap-5">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
