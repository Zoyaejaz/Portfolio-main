import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Kabad-Becho",
    description: "A specialized Web-Based Scrap Pickup Linkage System aimed at streamlining waste management.",
    image: "/projects/pro1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://kabad-becho-proj-zeta.vercel.app/",
    githubUrl: "https://github.com/Zoyaejaz/Kabad-becho-proj",
  },
  {
    id: 2,
    title: "Eduhub",
    description: "A comprehensive LMS featuring digital books, tutor videos, and virtual classroom tools.",
    image: "/projects/pro3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://edu-hub-lake-seven.vercel.app/",
    githubUrl: "https://github.com/Zoyaejaz/EduHub",
  },
  {
    id: 3,
    title: "Butterflies",
    description: "An elegant, motion-heavy landing page focused on fluid animations and artistic UI.",
    image: "/projects/pro2.png",
    tags: ["Tailwind", "D3.js", "React.jsx"],
    demoUrl: "https://butterflies-beta.vercel.app/",
    githubUrl: "https://github.com/Zoyaejaz/Butterflies",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden isolate">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of my recent work where design meets functional code. 
            Each project represents a unique challenge and a modern solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full"
            >
              {/* Image with Hover Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Darker overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demoUrl}
                    target="_blank"
                    className="p-3 bg-primary text-white rounded-full shadow-lg"
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full shadow-lg"
                  >
                    <Github size={22} />
                  </motion.a>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    Live Preview <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            className="cosmic-button inline-flex items-center gap-3 px-8 py-4 group"
            target="_blank"
            href="https://github.com/Zoyaejaz"
          >
            <span>Explore More on GitHub</span>
            <Github size={20} className="transition-transform group-hover:rotate-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};