import { motion } from "framer-motion";
import { Target, TrendingUp, Flame, Zap } from "lucide-react";

const highlights = [
  { icon: Target, title: "DSA Focused", desc: "Systematically learning Data Structures and Algorithms to build strong problem-solving skills." },
  { icon: TrendingUp, title: "LeetCode Practice", desc: "Consistently solving problems on LeetCode to sharpen coding and algorithmic thinking." },
  { icon: Flame, title: "Growth Mindset", desc: "Committed to daily improvement and embracing challenges as learning opportunities." },
  { icon: Zap, title: "Hands-on Learning", desc: "Applying theoretical concepts through practical coding exercises and mini-projects." },
];

const LearningSection = () => (
  <section id="learning" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Learning Journey</h2>
        <div className="w-16 h-1 bg-gradient-hero rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <h.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LearningSection;
