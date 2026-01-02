import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "frontend",
    company: "Frontend Developer",
    role: "Internship",
    location: "Remote / Hybrid",
    period: "November,2025 - Present",
    skills: ["Figma", "React", "UI/UX", "Modern CSS"],
    description: [
      "Mastered UI/UX design workflows in Figma, creating high-fidelity prototypes and wireframes to streamline the transition from concept to development.",
      "Researched and integrated modern frontend technologies and frameworks, significantly improving performance.",
      "Iterated on core product ideas to enhance aesthetics and usability using modern design patterns.",
      "Bridged the gap between design and engineering by translating complex Figma mockups into clean code.",
    ],
  },
  {
    id: "industrial",
    company: "Industrial Automation",
    role: "Developer",
    location: "On-site",
    period: "Previous Experience",
    skills: ["C++", "Fatek API", "WPF", "XML"],
    description: [
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
];

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden isolate">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0,transparent_70%)] -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">Detailed look into my career and technical growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "flex-shrink-0 flex items-center justify-between px-6 py-4 rounded-xl border transition-all duration-300 group w-full text-left",
                  activeTab === exp.id
                    ? "bg-primary/10 border-primary text-primary shadow-lg shadow-primary/5"
                    : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                )}
              >
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{exp.company}</span>
                  <span className="text-xs uppercase tracking-widest opacity-70">{exp.role}</span>
                </div>
                <ChevronRight className={cn(
                  "hidden lg:block transition-transform duration-300",
                  activeTab === exp.id ? "translate-x-1 opacity-100" : "opacity-0"
                )} />
              </button>
            ))}
          </div>

          {/* Details Content Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {experiences.map((exp) => exp.id === activeTab && (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <Calendar size={14} className="text-primary" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <MapPin size={14} className="text-primary" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {exp.description.map((point, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-start gap-4 group"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Core Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-md text-xs text-primary font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};