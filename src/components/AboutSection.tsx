import { motion } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-16 h-1 bg-gradient-hero rounded-full mb-8" />

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I am a passionate computer science student currently pursuing my degree at SRKR Engineering College. 
          I have a strong foundation in Java, SQL, HTML, and CSS. I am currently focusing on improving my 
          problem-solving skills through Data Structures and Algorithms and actively practicing on LeetCode. 
          I am eager to learn, grow, and build impactful projects in the software development field.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <GraduationCap className="text-primary mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-display font-semibold mb-1">Education</h3>
              <p className="text-muted-foreground text-sm">B.Tech in Computer Science</p>
              <p className="text-muted-foreground text-sm">SRKR Engineering College, Bhimavaram</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <Heart className="text-primary mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-display font-semibold mb-1">Passion</h3>
              <p className="text-muted-foreground text-sm">Building software solutions & continuous learning</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
