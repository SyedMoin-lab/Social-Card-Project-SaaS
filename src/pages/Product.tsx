
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 px-4 animated-bg">
          <div className="container mx-auto">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Meet NexCard
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                The ultimate digital business card platform for professionals who want to make a lasting impression.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/create">Try It Now</Link>
                </Button>
                <Button asChild className="btn-secondary">
                  <Link to="/features">See All Features</Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">A New Way to Connect</h2>
                <p className="text-muted-foreground mb-6">
                  CardCraft transforms how professionals exchange contact information. Our digital business cards are designed to be impressive, functional, and memorable.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mt-1 mr-3 w-5 h-5 text-green dark:text-hunter" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-green/10 p-6 rounded-xl shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-hunter/30 to-green/30 rounded-lg flex items-center justify-center p-4">
                  <div className="social-card w-full max-w-sm">
                    <div className="social-card-glow"></div>
                    <div className="p-6 text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-hunter to-green mx-auto mb-4"></div>
                      <h3 className="text-xl font-bold">Jane Doe</h3>
                      <p className="text-muted-foreground mb-4">Product Designer</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="p-2 bg-green/10 dark:bg-hunter/10 rounded">jane@example.com</div>
                        <div className="p-2 bg-green/10 dark:bg-hunter/10 rounded">+1 555-123-4567</div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-green/20 dark:bg-hunter/20"></div>
                        <div className="w-8 h-8 rounded-full bg-green/20 dark:bg-hunter/20"></div>
                        <div className="w-8 h-8 rounded-full bg-green/20 dark:bg-hunter/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="font-medium">Preview of a CardCraft social card</p>
                  <p className="text-sm text-muted-foreground">Actual results may vary based on your design choices</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-24 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Create Your First Card?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who are making meaningful connections with CardCraft.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/create">
                  Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const benefits = [
  "Share your contact details instantly with anyone, anywhere",
  "Make a professional impression with stunning designs",
  "Update your information in real-time across all shared cards",
  "Eco-friendly alternative to traditional paper business cards",
  "Track engagement and see when your card is viewed",
  "Seamlessly integrate with your professional social media profiles"
];

export default Product;
