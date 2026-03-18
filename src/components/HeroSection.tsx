import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
          <Sparkles size={16} />
          Open to Opportunities
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-gradient">Pranati Sandhya</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Aspiring Software Developer
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
          Computer Science Student at SRKR Engineering College, Bhimavaram
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity">
            <a href="#skills">View Skills</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
