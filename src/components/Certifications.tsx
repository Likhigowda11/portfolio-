import React from "react";
import { BadgeCheck, ExternalLink, Calendar, Award, CheckCircle2, Cloud, BrainCircuit, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import { resumeData } from "../types";

export default function Certifications() {
  const getSubBadgeIcon = (title: string) => {
    if (title.toLowerCase().includes("azure") || title.toLowerCase().includes("microsoft")) {
      return Cloud;
    }
    if (title.toLowerCase().includes("machine learning") || title.toLowerCase().includes("ai")) {
      return BrainCircuit;
    }
    return Award;
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-100/10 rounded-full blur-gradient-circle" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-100/10 rounded-full blur-gradient-circle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <BadgeCheck className="w-4 h-4 text-indigo-600" />
            Verified accreditations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Certifications & <span className="text-gradient">Internships</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm sm:text-base font-sans"
          >
            A compilation of professional credentials, cloud competence verifications, and technical data training programs completed.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resumeData.certifications.map((cert, index) => {
            const BadgeIcon = getSubBadgeIcon(cert.title);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-7 relative flex flex-col justify-between card-hover overflow-hidden"
                id={`cert-card-${index}`}
              >
                {/* Visual badge highlight in background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50/40 rounded-bl-full pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon & Year badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                      <BadgeIcon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      Issued in {cert.year}
                    </span>
                  </div>

                  {/* Title & Issuer details */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg tracking-tight leading-snug hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Conducted by <span className="text-slate-700 font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                {/* Verification credential footer */}
                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase">CredID Verified</span>
                  </div>
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
