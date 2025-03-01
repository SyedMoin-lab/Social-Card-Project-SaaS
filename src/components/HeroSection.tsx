
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export function HeroSection() {
  const { isAuthenticated } = useAuth();
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden animated-bg">
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-background/5 to-background/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            ✨ Transform Your Professional Identity
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Elevate Your Network Presence with <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Nex Card</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Create stunning digital business cards that make a lasting impression. Share your professional identity seamlessly across platforms and stand out in your industry.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button asChild variant="destructive" size="lg" className="min-w-[160px]">
              <Link to= "/create">Create Your Card</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link to="/templates">Explore Templates</Link>
            </Button>
          </motion.div>
          
          <motion.p
            className="text-sm text-muted-foreground pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Join thousands of professionals enhancing their digital presence
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 p-6 glass-card rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-inner bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-xl font-semibold text-foreground/80">Your professionally crafted digital card</p>
                <p className="text-sm text-muted-foreground mt-2">Click "Create Your Card" to get started</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}