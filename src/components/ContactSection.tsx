import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulated submission
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-hero rounded-full mb-4" />
          <p className="text-muted-foreground mb-8">
            Have a question or want to connect? Send me a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="bg-gradient-hero text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity gap-2 w-full sm:w-auto"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
