
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Guides = () => {
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
                Comprehensive <span className="text-green">Guides</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn how to create professional social cards and maximize your digital presence with our detailed guides.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-green/10 rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="w-6 h-6 text-green dark:text-hunter mr-2" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <Link
                      to={guide.link}
                      className="inline-flex items-center text-green dark:text-hunter hover:underline"
                    >
                      Read Guide <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const guides = [
  {
    title: "Getting Started with Social Cards",
    description: "Learn the basics of creating your first professional social card with our step-by-step guide.",
    category: "Beginner",
    link: "/blog"
  },
  {
    title: "Choosing the Perfect Template",
    description: "Discover how to select the right template that best represents your professional brand.",
    category: "Design",
    link: "/blog"
  },
  {
    title: "Optimizing Your Profile Photo",
    description: "Tips and tricks for selecting and editing the perfect profile photo for your social card.",
    category: "Photography",
    link: "/blog"
  },
  {
    title: "Crafting Your Professional Bio",
    description: "Learn how to write a compelling and concise professional bio that makes an impact.",
    category: "Writing",
    link: "/blog"
  },
  {
    title: "Social Media Integration Strategies",
    description: "Maximize your reach by effectively integrating your social card across various platforms.",
    category: "Marketing",
    link: "/blog"
  },
  {
    title: "Advanced Customization Techniques",
    description: "Take your social card to the next level with these advanced customization options.",
    category: "Advanced",
    link: "/blog"
  },
  {
    title: "Measuring Your Social Card's Impact",
    description: "Learn how to track and analyze the performance of your social card.",
    category: "Analytics",
    link: "/blog"
  },
  {
    title: "Creating Cards for Different Purposes",
    description: "Tailor your social cards for different professional contexts and audiences.",
    category: "Strategy",
    link: "/blog"
  },
  {
    title: "Best Practices for Sharing",
    description: "Discover the most effective ways to share your social card for maximum visibility and impact.",
    category: "Sharing",
    link: "/blog"
  }
];

export default Guides;
