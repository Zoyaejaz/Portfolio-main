import { Award, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Frontend Development",
    issuer: "FreeCodeCamp",
    date: "2024",
    link: "#", // Replace with your link
    description: "Comprehensive certification covering advanced CSS, JavaScript algorithms, and UI patterns.",
    tags: ["JavaScript", "CSS3", "Responsive Design"]
  },
  {
    title: "React & Modern Web",
    issuer: "Udemy / Meta",
    date: "2024",
    link: "#",
    description: "In-depth training on hooks, state management, and component architecture.",
    tags: ["React.js", "State Management", "Hooks"]
  },
  {
    title: "UI/UX Design Mastery",
    issuer: "Coursera / Google",
    date: "2023",
    link: "#",
    description: "Focused on user-centric design, Figma prototyping, and usability testing.",
    tags: ["Figma", "Prototyping", "User Research"]
  },
];

export const CertificateSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative overflow-hidden isolate">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-3 block">Verified Credentials</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 to-transparent rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col transition-all duration-300">
                {/* Top Row: Icon & Date */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4 flex items-center gap-1.5">
                    <Zap size={14} className="fill-primary" /> {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Row: Tags & View Link */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-primary/5 text-primary/70 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors"
                  >
                    View Credential
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary transition-all">
                      <ExternalLink size={14} className="group-hover:text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Award className="text-primary" size={18} /> 
            Continuously learning through platforms like Coursera, Udemy, and Google.
          </p>
        </motion.div>
      </div>
    </section>
  );
};