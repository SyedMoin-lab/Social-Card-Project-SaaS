
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
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
                Resources to Help You <span className="text-green dark:text-hunter">Succeed</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Access our comprehensive collection of resources designed to help you create professional social cards and maximize your digital presence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="bg-white dark:bg-green/10 p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green/10 dark:bg-hunter/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-green dark:text-hunter" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Blog</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with the latest trends, tips, and best practices for creating effective social cards.
                </p>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center font-medium text-green dark:text-hunter hover:underline"
                >
                  Read Our Blog
                </Link>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-green/10 p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green/10 dark:bg-hunter/10 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-green dark:text-hunter" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Guides</h3>
                <p className="text-muted-foreground mb-6">
                  Step-by-step guides to help you create stunning social cards and optimize your professional presence.
                </p>
                <Link 
                  to="/guides" 
                  className="inline-flex items-center font-medium text-green dark:text-hunter hover:underline"
                >
                  Explore Guides
                </Link>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-green/10 p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green/10 dark:bg-hunter/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-green dark:text-hunter" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Help Center</h3>
                <p className="text-muted-foreground mb-6">
                  Find answers to common questions and get support for any issues you may encounter.
                </p>
                <Link 
                  to="/help" 
                  className="inline-flex items-center font-medium text-green dark:text-hunter hover:underline"
                >
                  Visit Help Center
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
