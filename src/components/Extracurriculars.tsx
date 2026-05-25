import React from "react";
import { Trophy, Award, Flame, Lightbulb, GraduationCap, Zap, Star } from "lucide-react";
import { motion } from "motion/react";
import { resumeData } from "../types";

export default function Extracurriculars() {
  const getVisualAccent = (title: string) => {
    if (title.includes("24-Hour")) {
      return {
        icon: Flame,
        color: "text-amber-500 bg-amber-50 border-amber-100",
        duration: "24 HOURS",
      };
    }
    return {
      icon: Lightbulb,
      color: "text-indigo-500 bg-indigo-50 border-indigo-100",
      duration: "8 HOURS",
    };
  };

  return (
    <section id="extracurriculars" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-emerald-50/20 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <Trophy className="w-4 h-4 text-emerald-600" />
            Competitive Records
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Hackathons & <span className="text-gradient">Co-Curriculars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm sm:text-base font-sans"
          >
            Active participation in state and national innovation challenges, prototyping scalable applications under intense constraint.
          </motion.p>
        </div>

        {/* Dual Cards Showcase */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resumeData.extracurriculars.map((activity, index) => {
            const accent = getVisualAccent(activity.title);
            const Icon = accent.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/10 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between card-hover text-left"
                id={`activity-card-${index}`}
              >
                {/* Accent highlights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10" />

                <div className="space-y-5">
                  {/* Duration pill and trophy icon */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${accent.color.split(" ")[1]} ${accent.color.split(" ")[0]} border ${accent.color.split(" ")[2]}`}>
                      <Icon className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200/50 rounded-md font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                      {accent.duration}
                    </span>
                  </div>

                  {/* Title & Host organization details */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-slate-900 text-lg sm:text-xl leading-tight">
                      {activity.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-600 font-mono uppercase tracking-wide">
                      {activity.organization}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed leading-snug">
                    {activity.description}
                  </p>
                </div>

                {/* Micro skill stats footer */}
                <div className="mt-8 pt-5 border-t border-slate-150/50 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    <Zap className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                    <span>Prototypes</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    <Star className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Sprint pitch</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
