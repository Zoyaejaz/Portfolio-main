import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      /* Ensure relative positioning and a base z-index so content stays above background */
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden isolate"
    >
      {/* IMPORTANT: If your background disappears, ensure it is NOT inside 
        an 'AnimatePresence' or conditional block that unmounts.
        If it's a CSS class, ensure it's attached to a div that is always present.
      */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
         {/* Your existing background code/div goes here */}
      </div>

      <div className="container max-w-7xl mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} // Use animate instead of whileInView for the hero to ensure it's there on return
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-medium backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight text-white">
            <span className="inline-block">Hi, I'm</span>
            <span className="text-primary ml-4">Zoya</span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent ml-4">
              Ejaz
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in <span className="text-foreground font-medium text-white">Modern Frontend Architecture</span> and 
            <span className="text-foreground font-medium text-white"> UI/UX Design</span>. I bridge the gap between 
            complex logic and intuitive user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <a href="#projects" className="cosmic-button px-10 py-4 text-lg">
              View My Work
            </a>
            
            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="https://github.com/Zoyaejaz" target="_blank" rel="noreferrer" className="hover:text-primary transition-all hover:scale-110"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/zoyaejaz/" target="_blank" rel="noreferrer" className="hover:text-primary transition-all hover:scale-110"><Linkedin size={24} /></a>
              <a href="mailto:zejaz6806@gmail.com" className="hover:text-primary transition-all hover:scale-110"><Mail size={24} /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6 text-primary/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};