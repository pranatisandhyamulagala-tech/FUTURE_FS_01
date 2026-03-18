import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pranati Sandhya Mulagala. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:pranati@example.com" aria-label="Email"
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
