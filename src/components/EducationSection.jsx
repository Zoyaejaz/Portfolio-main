import { GraduationCap, Calendar, BookOpen, Award, School, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science (AI-ML)",
    institution: "VIT Bhopal University",
    period: "2023 - 2027",
    grade: "8.82 CGPA",
    details: "Focusing on Frontend Engineering, AI integrations, and Modern Web Architectures.",
    highlights: ["Data Structures", "Web Design", "AI-ML Fundamentals"],
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Holy Cross School",
    period: "2020 - 2022",
    grade: "83%",
    details: "Core focus on Physics, Chemistry, and Advanced Mathematics.",
    highlights: ["Safe Club Lead", "PCM Focus"],
    icon: <School className="h-6 w-6" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Holy Cross School",
    period: "2018 - 2020",
    grade: "93%",
    details: "All-round academic excellence with a focus on Mathematics and Languages.",
    highlights: ["Math Merit", "Hindi Literary VP"],
    icon: <School className="h-6 w-6" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden isolate">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0,transparent_70%)] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">Path of Learning</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Academic <span className="text-primary">Timeline</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* 3-Column Bento/Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "circOut" }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col hover:border-primary/50 transition-all duration-500">
                
                {/* Header Icon & Grade Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/10">
                    {edu.icon}
                  </div>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-xs font-bold text-white/80">{edu.grade}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-2 block">
                    {edu.period}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-4 flex items-center gap-2">
                    <Sparkles size={14} /> {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {edu.details}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-bold uppercase px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};