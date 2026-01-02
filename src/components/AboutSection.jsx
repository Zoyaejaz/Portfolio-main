import { Briefcase, Code, User, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Items pop up one after another
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden isolate">
      {/* Subtle Background Glow for this section */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Creative Developer & <span className="text-primary">Problem Solver</span>
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in modern web architecture, I specialize
                in crafting high-performance, accessible digital experiences. My approach
                combines technical precision with a deep understanding of user behavior.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's building complex React applications or designing 
                intuitive interfaces in Figma, I focus on delivering clean code 
                and pixel-perfect results. I thrive in the space where logic meets design.
              </p>

              <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="cosmic-button px-8 py-3"
                >
                  Get In Touch
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/1Epg1UQBB74BQoR3QCmUXXawGYhPrfvHa/view?usp=sharing"
                  target="_blank"
                  className="px-8 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                >
                  Download CV <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Experience Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Web Development",
                  desc: "Building scalable applications using React, Tailwind CSS, and modern backend integrations."
                },
                {
                  icon: <User className="h-6 w-6" />,
                  title: "UI/UX Design",
                  desc: "Creating user-centric designs in Figma that prioritize accessibility and visual hierarchy."
                },
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Technical Leadership",
                  desc: "Experienced in agile workflows and leading projects from discovery to deployment."
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(var(--primary), 0.05)" }}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {card.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-xl mb-1">{card.title}</h4>
                      <p className="text-muted-foreground line-height-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};