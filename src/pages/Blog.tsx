
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Create the Perfect Social Card for LinkedIn",
    excerpt: "Learn the best practices for creating social cards that stand out on LinkedIn and other professional platforms.",
    date: "May 10, 2023",
    category: "Tips & Tricks"
  },
  {
    id: 2,
    title: "The Power of Personal Branding in the Digital Age",
    excerpt: "Discover why personal branding matters more than ever and how a social card can help establish your online presence.",
    date: "April 25, 2023",
    category: "Branding"
  },
  {
    id: 3,
    title: "5 Design Principles for Effective Social Cards",
    excerpt: "Explore key design principles that will make your social card more effective and visually appealing.",
    date: "April 12, 2023",
    category: "Design"
  },
  {
    id: 4,
    title: "Digital Networking: Making Connections in a Virtual World",
    excerpt: "Tips and strategies for building your professional network online using modern tools like social cards.",
    date: "March 30, 2023",
    category: "Networking"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and news about digital networking and social cards
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
