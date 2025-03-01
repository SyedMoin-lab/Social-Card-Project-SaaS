
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
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
                Powerful Features for Professional <span className="text-green dark:text-hunter">Digital Identity</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how our comprehensive tools help you create stunning social cards that truly represent your professional brand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-green/10 p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green/10 dark:bg-hunter/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild className="btn-primary">
                <Link to="/create">Try It Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const features = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "Professional Templates",
    description: "Choose from a variety of professionally designed templates to create your perfect social card."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "Custom Branding",
    description: "Add your personal branding elements to make your social card truly unique."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "One-Click Sharing",
    description: "Share your digital business card across all platforms with just one click."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "High-Quality Exports",
    description: "Download your social card in high-resolution formats for print and digital use."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "Analytics Dashboard",
    description: "Track views and interactions with your social card to measure its effectiveness."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green dark:text-hunter" />,
    title: "Multiple Card Profiles",
    description: "Create different social cards for various professional contexts and audiences."
  },
];

export default Features;
