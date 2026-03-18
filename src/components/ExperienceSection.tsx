import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-gradient-subtle">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Experience</h2>
        <div className="w-16 h-1 bg-gradient-hero rounded-full mb-10" />

        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-hero" />
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-primary" size={20} />
              <div>
                <h3 className="font-display font-semibold">Intern</h3>
                <p className="text-sm text-muted-foreground">Future Interns</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gained hands-on industry exposure and practical experience in software development workflows. 
              Collaborated on real-world tasks, strengthening technical skills and professional communication. 
              This experience fueled my passion for building impactful software solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
