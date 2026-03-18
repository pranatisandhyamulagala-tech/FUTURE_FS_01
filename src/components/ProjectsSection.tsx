import { motion } from "framer-motion";
import { Rocket, FolderGit2 } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-gradient-hero rounded-full mb-10" />

        <div className="flex flex-col items-center text-center p-12 rounded-xl bg-card border border-dashed border-primary/30">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
            <Rocket className="text-primary" size={28} />
          </div>
          <h3 className="font-display text-xl font-semibold mb-2">Projects Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mb-6">
            I'm actively building projects to showcase my skills. Stay tuned for exciting work in Java, web development, and more!
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FolderGit2 size={16} />
            <span>Check back soon for updates</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
