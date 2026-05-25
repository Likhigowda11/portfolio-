import React from "react";
import { GraduationCap, Calendar, Award, Building, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { resumeData } from "../types";

export default function AboutEducation() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
      <div className="absolute inset-0 bg-radial from-slate-50/50 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <GraduationCap className="w-4 h-4" />
            Learning Pathway
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Academic Foundation & <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base font-sans"
          >
            A cohesive record of institutions that have guided my training in technology, design analysis, and software development systems.
          </motion.p>
        </div>

        {/* Cohesive Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {resumeData.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } md:justify-between`}
                >
                  
                  {/* Outer Timeline Hub Ring with visual pulses */}
                  <div className="absolute left-6 md:left-1/2 top-1.5 -translate-x-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-9 w-9 rounded-full bg-indigo-100 opacity-60 animate-ping" />
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-400 p-[2px]">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold text-xs">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flexible spacer logic for asymmetric desktop timeline */}
                  <div className="hidden md:block w-5/12" />

                  {/* Educational Record Details Card */}
                  <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div
                      className="card-hover p-6 rounded-2xl bg-slate-50/50 border border-slate-100 shadow-sm relative overflow-hidden"
                      id={`edu-card-${index}`}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50/20 rounded-bl-full pointer-events-none" />

                      {/* Header containing year badge & grade metric */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.year}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold font-mono border border-emerald-100/30">
                          <Award className="w-3.5 h-3.5" />
                          {edu.score}
                        </span>
                      </div>

                      {/* Title & Organization Info */}
                      <div className="space-y-1 mb-3">
                        <h4 className="font-display font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                          <Building className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          <span>{edu.school}</span>
                        </div>
                      </div>

                      {/* Specific Details or Learnings description */}
                      {edu.details && (
                        <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100/80 pt-3 mt-3">
                          {edu.details}
                        </p>
                      )}

                      {/* Subtle skill tag accent */}
                      <div className="flex items-center gap-1.5 mt-4 pt-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="text-xs font-mono text-slate-400 tracking-wider">
                          {index === 0
                            ? "Core AI & Data Science subjects"
                            : index === 1
                            ? "Fundamental STEM disciplines"
                            : "Pre-technical basics"}
                        </span>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
