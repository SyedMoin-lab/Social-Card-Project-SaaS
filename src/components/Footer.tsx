
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-muted/50 dark:bg-muted/20 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 max-w-sm">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  NexCard
                </span>
              </Link>
              <p className="text-muted-foreground">
                Revolutionize your professional networking with NexCard's digital business cards. Make meaningful connections and leave a lasting impression with our customizable, shareable cards.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/product" className="text-muted-foreground hover:text-foreground transition-colors">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NexCard. All rights reserved.</p>
            Build By <p className="font-bold text-green">Syed Shaista</p>
          </div>
        </div>
      </footer>
    </>
  );
}
