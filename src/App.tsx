/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, Code2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutEducation from "./components/AboutEducation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Extracurriculars from "./components/Extracurriculars";
import Contact from "./components/Contact";
import { resumeData } from "./types";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-indigo-500 selection:text-white">
      {/* Floating navigation bar */}
      <Navigation />

      {/* Structured Sections */}
      <main className="relative pb-1">
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        <Certifications />
        <Extracurriculars />
        <Contact />
      </main>

      {/* Styled Professional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 font-sans print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8 mb-8">
            {/* Column 1: Identity */}
            <div className="text-left space-y-2">
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                Likhith S <span className="text-indigo-500">Gowda</span>
              </span>
              <p className="text-xs text-slate-500 leading-normal max-w-xs font-sans">
                Pursuing B.E in Artificial Intelligence and Data Science at Sambhram Institute of Technology. Experienced in software engineering internships and 24-hr hackathons.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-wrap justify-start md:justify-center gap-4 text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Education
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Contact
              </button>
            </div>

            {/* Column 3: Status / Spec */}
            <div className="text-left md:text-right space-y-1 text-slate-500 text-xs font-mono">
              <p className="flex items-center md:justify-end gap-1.5 font-bold text-slate-400">
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span>Hosting preview active</span>
              </p>
              <p>Platform: Sambhram IT &bull; AI&DS</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>&copy; {new Date().getFullYear()} {resumeData.name}. All simulated rights reserved.</p>
            <p className="flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Built with React 19, Tailwind CSS v4 & Motion</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-slate-900 border border-indigo-500/10 text-white rounded-xl shadow-lg cursor-pointer outline-none transition-colors z-40"
            id="scroll-to-top-btn"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

