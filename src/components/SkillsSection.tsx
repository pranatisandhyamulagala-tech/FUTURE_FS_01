import { motion } from "framer-motion";
import { Code2, Database, Globe, BookOpen } from "lucide-react";

const skills = [
  { category: "Programming Languages", icon: Code2, items: [{ name: "Java", level: 75 }, { name: "SQL", level: 65 }] },
  { category: "Web Technologies", icon: Globe, items: [{ name: "HTML", level: 80 }, { name: "CSS", level: 75 }, { name: "JavaScript", level: 55 }] },
  { category: "Database", icon: Database, items: [{ name: "SQL Queries", level: 65 }] },
  { category: "Currently Learning", icon: BookOpen, items: [{ name: "DSA", level: 45 }, { name: "LeetCode", level: 40 }] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-gradient-subtle">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-gradient-hero rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className="text-primary" size={22} />
                <h3 className="font-display font-semibold">{cat.category}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-hero"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
