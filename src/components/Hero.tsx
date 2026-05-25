import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowDown, Copy, Check, Terminal, ExternalLink, Printer } from "lucide-react";
import { motion } from "motion/react";
import { resumeData } from "../types";

export default function Hero() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-radial from-indigo-50/40 via-slate-50 to-slate-50"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-gradient-circle" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-gradient-circle" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Actively seeking AI & Data Science Internships
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-indigo-600 font-mono text-sm sm:text-base font-semibold tracking-wider uppercase"
              >
                Hello World, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none"
              >
                {resumeData.name} <br className="hidden sm:inline" />
                <span className="text-gradient">AI & Data Science</span> Engineer
              </motion.h1>
            </div>

            {/* Objective Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            >
              {resumeData.objective}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-indigo-600/20 active:scale-95 cursor-pointer outline-none"
                id="hero-cta-projects"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 animation-float" />
              </button>
              <button
                onClick={handlePrint}
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer outline-none shadow-sm"
                id="hero-cta-print"
                title="Print beautiful clean professional copy of this portfolio as a resume"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                Print / Export Resume
              </button>
            </motion.div>

            {/* Small Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono pt-4"
            >
              <Terminal className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Sambhram Institute of Tech &bull; Class of 2026</span>
            </motion.div>
          </div>

          {/* Contact details Card Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-full max-w-md mx-auto aspect-auto bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-8 space-y-6 sm:space-y-8 relative overflow-hidden"
              id="hero-contact-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-10" />

              {/* Card Header */}
              <div className="space-y-1">
                <p className="text-xs font-semibold text-indigo-600 uppercase font-mono tracking-wider">Contact Info</p>
                <h3 className="text-lg sm:text-xl font-display font-medium text-slate-900">Direct Connections</h3>
              </div>

              {/* Card Fields */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: resumeData.contact.email,
                    href: `mailto:${resumeData.contact.email}`,
                    copyable: true,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: resumeData.contact.phone,
                    href: `tel:${resumeData.contact.phone}`,
                    copyable: true,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: resumeData.contact.location,
                    href: "https://maps.google.com/?q=Sambhram+Institute+of+Technology,+Bengaluru",
                    copyable: false,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
                          <Icon className="w-5 h-5 flex-shrink-0" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-400 font-medium font-sans uppercase tracking-wider">{item.label}</p>
                          <a
                            href={item.href}
                            target={item.label === "Location" ? "_blank" : undefined}
                            rel={item.label === "Location" ? "noreferrer" : undefined}
                            className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>

                      {item.copyable && (
                        <button
                          onClick={() => copyToClipboard(item.value, item.label)}
                          className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer outline-none"
                          title={`Copy ${item.label}`}
                        >
                          {copiedText === item.label ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Profile Divider & LinkedIn Link */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-50/50 hover:bg-indigo-600 hover:text-white text-indigo-700 font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-sm group"
                  id="hero-linkedin-btn"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
