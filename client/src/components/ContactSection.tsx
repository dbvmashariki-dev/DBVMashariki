/* ==========================================================
   ContactSection — Apex Consulting Group
   Design: Dark slate background, split layout with contact
   info left and form right
   ========================================================== */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 bg-[#1C2B3A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="teal-bar" />
              <span className="label-mono text-[oklch(0.65_0.14_210)]">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Let's Build Something<br />
              <span className="text-[oklch(0.65_0.14_210)]">Exceptional Together.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Whether you're facing a specific challenge or exploring how consulting can help your organization grow, we'd love to start a conversation. Our initial consultation is always complimentary.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "hello@apexconsulting.com" },
                { icon: Phone, label: "Call Us", value: "+1 (800) 555-APEX" },
                { icon: MapPin, label: "Headquarters", value: "New York, NY | Chicago, IL | San Francisco, CA" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[oklch(0.65_0.14_210)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[oklch(0.65_0.14_210)]" />
                    </div>
                    <div>
                      <div className="label-mono text-white/40 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Industries */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="label-mono text-white/40 text-xs mb-3">Industries We Serve</p>
              <div className="flex flex-wrap gap-2">
                {["Financial Services", "Healthcare", "Manufacturing", "Technology", "Retail", "Energy", "Government", "Education"].map((ind) => (
                  <span key={ind} className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/30">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={56} className="text-[oklch(0.65_0.14_210)] mb-4" />
                  <h3 className="text-2xl font-black text-[#1C2B3A] mb-2">Message Received!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. A member of our team will contact you within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                    className="mt-6 text-sm text-[oklch(0.65_0.14_210)] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-[#1C2B3A] mb-1">Start a Conversation</h3>
                    <p className="text-gray-400 text-sm">Free initial consultation — no obligation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-mono text-gray-500 text-xs block mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1C2B3A] placeholder-gray-300 focus:outline-none focus:border-[oklch(0.65_0.14_210)] focus:ring-1 focus:ring-[oklch(0.65_0.14_210)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="label-mono text-gray-500 text-xs block mb-1.5">Work Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1C2B3A] placeholder-gray-300 focus:outline-none focus:border-[oklch(0.65_0.14_210)] focus:ring-1 focus:ring-[oklch(0.65_0.14_210)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-mono text-gray-500 text-xs block mb-1.5">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Organization"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1C2B3A] placeholder-gray-300 focus:outline-none focus:border-[oklch(0.65_0.14_210)] focus:ring-1 focus:ring-[oklch(0.65_0.14_210)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-gray-500 text-xs block mb-1.5">Area of Interest</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1C2B3A] focus:outline-none focus:border-[oklch(0.65_0.14_210)] focus:ring-1 focus:ring-[oklch(0.65_0.14_210)] transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="it">IT Consulting</option>
                      <option value="bizdev">Business Development</option>
                      <option value="pm">Project Management</option>
                      <option value="ci">Continuous Improvement</option>
                      <option value="multi">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="label-mono text-gray-500 text-xs block mb-1.5">Tell Us About Your Challenge *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your situation and what you're hoping to achieve..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1C2B3A] placeholder-gray-300 focus:outline-none focus:border-[oklch(0.65_0.14_210)] focus:ring-1 focus:ring-[oklch(0.65_0.14_210)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-sweep bg-[oklch(0.65_0.14_210)] text-white py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[oklch(0.65_0.14_210)]/30 transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
