import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Terminal, Sparkles, Inbox } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { resumeData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendSuccess(false);

    // Simulate sending SMTP request
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-100/10 rounded-full blur-gradient-circle" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-emerald-100/10 rounded-full blur-gradient-circle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <Inbox className="w-4 h-4 text-indigo-600" />
            Get in touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Connect & <span className="text-gradient">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm sm:text-base font-sans"
          >
            Have a question, recruitment opportunity, or hackathon collaboration proposal? Send a simulated dispatch instantly.
          </motion.p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Direct Links Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-5050/10 rounded-bl-full pointer-events-none" />

            {/* Header segment */}
            <div className="space-y-6">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400">Direct channels</span>
                <h4 className="font-display font-bold text-lg sm:text-xl">Let's build intelligent solutions together.</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-sans pt-1">
                  Fill the messenger form or connect with my active LinkedIn handle directly. I aim to correspond within standard business timelines.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Official Email Address", value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
                  { icon: Phone, label: "Phone Connection Hot", value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}` },
                  { icon: MapPin, label: "Current Location", value: resumeData.contact.location, href: "https://maps.google.com/?q=Sambhram+Institute+of+Technology" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.label === "Current Location" ? "_blank" : undefined}
                      rel={item.label === "Current Location" ? "noreferrer" : undefined}
                      className="flex items-center gap-4 p-3.5 bg-slate-800/40 border border-slate-800 rounded-xl hover:bg-slate-800/80 transition-colors group text-left"
                    >
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-slate-400 font-mono font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-xs sm:text-sm font-semibold truncate text-slate-200 group-hover:text-indigo-400 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social channels card footer */}
            <div className="pt-6 border-t border-slate-800 mt-8 space-y-4">
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg cursor-pointer"
                id="contact-linkedin-btn"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn Profile
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sambhram Institute of Tech, Class 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Message Form Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-left space-y-1">
                <span className="text-[10px] text-indigo-600 font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Secure dispatch pipeline
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-slate-800">Quick Collaboration Messenger</h4>
              </div>

              {/* Send Status Container */}
              <AnimatePresence mode="wait">
                {sendSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-4 my-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                    <h5 className="font-display font-bold text-emerald-800 text-base sm:text-lg">Simulated message dispatched!</h5>
                    <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed max-w-md mx-auto">
                      Thank you for testing Likhith's portfolio messenger! Your simulated collaborative dispatch was successfully serialized and routed to console caches.
                    </p>
                    <button
                      onClick={() => setSendSuccess(false)}
                      className="px-4 py-2 text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors inline-block cursor-pointer outline-none shadow-sm"
                    >
                      Compose another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-400 font-mono">Your Name *</label>
                        <input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Jane Doe"
                          className="w-full text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 h-11 px-3.5 rounded-xl transition-all outline-none text-slate-800 font-sans"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-400 font-mono">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. jane@company.com"
                          className="w-full text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 h-11 px-3.5 rounded-xl transition-all outline-none text-slate-800 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-mono">Subject Interest</label>
                      <input
                        value={formData.subject}
                        onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                        placeholder="e.g. AI-Recruitment / Hackathon"
                        className="w-full text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 h-11 px-3.5 rounded-xl transition-all outline-none text-slate-800 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-mono">Your Message Brief *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="Detail your collaboration proposal or question..."
                        className="w-full text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 p-3.5 rounded-xl transition-all outline-none text-slate-800 font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full h-12 rounded-xl bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-700 disabled:text-slate-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2.5 outline-none"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-indigo-400/30 border-t-white rounded-full animate-spin"></div>
                          <span>Serializing dispatch...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Simulated Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick footnote */}
            <div className="text-[10px] text-slate-400 text-center border-t border-slate-50 pt-4 mt-6">
              Security standards active. Submitting routes simulated client requests to React context states securely.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
