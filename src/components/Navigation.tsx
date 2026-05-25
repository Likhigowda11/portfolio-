import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User, GraduationCap, Code2, FolderGit2, BadgeCheck, Trophy, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { resumeData } from "../types";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["hero", "about", "skills", "projects", "certifications", "extracurriculars", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero", icon: User },
    { label: "Education", id: "about", icon: GraduationCap },
    { label: "Skills", id: "skills", icon: Code2 },
    { label: "Projects", id: "projects", icon: FolderGit2 },
    { label: "Credentials", id: "certifications", icon: BadgeCheck },
    { label: "Activities", id: "extracurriculars", icon: Trophy },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleScrollTo("hero")}>
            <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-600/15">
                LG
              </span>
              Likhith S <span className="text-indigo-600">Gowda</span>
            </span>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors outline-none cursor-pointer flex items-center gap-2 ${
                    activeSection === item.id
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-medium text-sm transition-all shadow-md hover:shadow-indigo-600/10 cursor-pointer outline-none active:scale-95"
              id="nav-cta-contact"
            >
              <PhoneCall className="w-4 h-4" />
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="nav-mobile-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 divide-y divide-slate-50 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base flex items-center gap-3 transition-colors ${
                      activeSection === item.id
                        ? "bg-indigo-50 text-indigo-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    id={`mobile-nav-link-${item.id}`}
                  >
                    <Icon className={`w-5 h-5 ${activeSection === item.id ? "text-indigo-600" : "text-slate-400"}`} />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-2">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-colors cursor-pointer"
                  id="mobile-nav-cta"
                >
                  <PhoneCall className="w-5 h-5" />
                  Connect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
