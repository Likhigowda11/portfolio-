import React, { useState } from "react";
import { Code2, Database, BarChart3, Cloud, Sparkles, SlidersHorizontal, BrainCircuit, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { resumeData, SkillCategory } from "../types";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<{ category: string; skill: string } | null>(null);

  // Helper map from string name to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Database":
        return Database;
      case "BarChart3":
        return BarChart3;
      case "Cloud":
        return Cloud;
      case "Sparkles":
        return Sparkles;
      default:
        return Code2;
    }
  };

  // Fun, premium descriptions for skills to make the portfolio incredibly informative and thoughtful
  const getSkillDescriptor = (skillName: string) => {
    switch (skillName) {
      case "Python":
        return "Core language used for data manipulation, cleaning, NLP pipelines, and machine learning models.";
      case "C++":
        return "Strong logic foundation, OOP principles, high performance computation, and standard template library usage.";
      case "C":
        return "Low-level system understandings, memory management, and high speed execution structures.";
      case "MySQL":
        return "Designing normalized tables, indexing, complex query joins, aggregates, and structural query optimizations.";
      case "MongoDB":
        return "Working with NoSQL documents, dynamic aggregation pipelines, collections, and variable schemas.";
      case "Power BI":
        return "Building highly interactive business reports, data modeling, custom dashboards, and DAX calculations.";
      case "Microsoft Excel":
        return "Pivots, financial charting, formulas, macro calculations, and immediate clean matrix analysis.";
      case "Microsoft Azure":
        return "Cloud compute resources, Azure Blob Storage, Azure SQL Database, and fundamentals of Cloud architecture.";
      case "Critical Thinking":
        return "Analyzing code patterns, debugging complex architectural problems, and evaluating pipeline options.";
      case "Time Management":
        return "Meeting strict hackathon deadlines, structured project management, and balancing studies.";
      case "Team Collaboration":
        return "Leading developer groups in 24h hackathons, Git workflows, and technical report drafting.";
      default:
        return "Skilled competence with advanced engineering foundations and practical context.";
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-100/10 rounded-full blur-gradient-circle" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/10 rounded-full blur-gradient-circle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100/40 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
            Capabilities Dashboard
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Technical & Professional <span className="text-gradient">Skillset</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base"
          >
            Hover over any technical proficiency label to view its real-world implementation context and systems exposure.
          </motion.p>
        </div>

        {/* Bento Grid layout of categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resumeData.skills.map((category, blockIndex) => {
            const Icon = getIcon(category.icon);
            return (
              <motion.div
                key={blockIndex}
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: blockIndex * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-7 relative flex flex-col justify-between"
                id={`skill-block-${blockIndex}`}
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills tags list with metering meters */}
                  <div className="space-y-5">
                    {category.skills.map((sk, index) => {
                      const isHovered = hoveredSkill?.category === category.category && hoveredSkill?.skill === sk.name;
                      return (
                        <div
                          key={index}
                          className="space-y-1.5 cursor-help"
                          onMouseEnter={() => setHoveredSkill({ category: category.category, skill: sk.name })}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                            <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                              {sk.name}
                            </span>
                            <span className="text-slate-400 font-mono text-xs">{sk.level}%</span>
                          </div>

                          {/* Meter track */}
                          <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${sk.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                            />
                          </div>

                          {/* Dynamic detailed helper label popup on hover */}
                          <div className="relative">
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, y: 2 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute left-0 top-1 w-full bg-slate-900 text-white text-xs p-2.5 rounded-lg shadow-xl z-20 font-sans border border-slate-800/50 leading-relaxed"
                              >
                                {getSkillDescriptor(sk.name)}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Category footer showing sub-specialty */}
                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Ready to deploy</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
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
