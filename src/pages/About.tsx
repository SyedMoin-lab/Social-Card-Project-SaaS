
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Award, Heart } from "lucide-react";

const About = () => {
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
                About <span className="text-green">CardCraft</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to revolutionize professional networking through beautiful, functional digital business cards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  CardCraft began with a simple observation: traditional business cards often end up lost, outdated, or forgotten. We wanted to create a digital alternative that was not only more practical but also more impressive.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded in 2023 by a team of designers, developers, and marketing professionals, we've combined our expertise to build a platform that helps professionals stand out in an increasingly digital world.
                </p>
                <p className="text-muted-foreground">
                  Today, thousands of professionals across the globe use CardCraft to create stunning digital business cards that make lasting impressions and forge meaningful connections.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-green dark:text-hunter" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">User-Centered Design</h3>
                      <p className="text-muted-foreground">
                        We believe that great products start with understanding user needs. Every feature we build is designed to solve real problems for our users.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Award className="w-6 h-6 text-green dark:text-hunter" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Quality & Excellence</h3>
                      <p className="text-muted-foreground">
                        We're committed to delivering the highest quality in everything we do, from the design of our templates to the reliability of our platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Heart className="w-6 h-6 text-green dark:text-hunter" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">Community First</h3>
                      <p className="text-muted-foreground">
                        We value the community we're building and strive to be responsive to feedback, transparent in our communications, and supportive of our users' goals.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
