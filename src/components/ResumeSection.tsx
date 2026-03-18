import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => (
  <section className="section-padding bg-gradient-subtle">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <FileText className="text-primary" size={24} />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Resume</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Download my resume to learn more about my education, skills, and experience.
        </p>
        <Button size="lg" className="bg-gradient-hero text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity gap-2">
          <Download size={18} />
          Download Resume
        </Button>
        <p className="text-xs text-muted-foreground mt-3">(Resume will be available soon)</p>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
