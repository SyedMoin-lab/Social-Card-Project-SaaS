
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                Help <span className="text-green">Center</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to your questions and get the support you need to make the most of CardCraft.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 rounded-full border border-border bg-background focus:ring-2 focus:ring-green dark:focus:ring-hunter focus:outline-none shadow-sm"
                />
              </div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No results found. Please try a different search term.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-green/10 rounded-xl shadow-sm overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-bold">{faq.question}</span>
                        {expandedFaqs.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-green dark:text-hunter" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-green dark:text-hunter" />
                        )}
                      </button>
                      
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ${
                          expandedFaqs.includes(index) 
                            ? "max-h-96 pb-6" 
                            : "max-h-0"
                        }`}
                      >
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-bold mb-4">Can't find what you're looking for?</h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is here to help. Get in touch with us and we'll get back to you as soon as possible.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green text-white dark:bg-hunter dark:text-green hover:opacity-90 transition-opacity font-medium"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const faqs = [
  {
    question: "How do I create my first social card?",
    answer: "To create your first social card, click on the 'Get Started' button on our homepage. Follow the step-by-step guide to upload your photo, add your details, and customize your card. Once you're satisfied with your design, you can share or download your social card."
  },
  {
    question: "What file formats can I use for my profile picture?",
    answer: "We support JPEG, PNG, and GIF file formats for profile pictures. For the best quality, we recommend using a square image with a minimum resolution of 500x500 pixels. The maximum file size allowed is 5MB."
  },
  {
    question: "Can I create multiple social cards?",
    answer: "Yes! Depending on your subscription plan, you can create multiple social cards for different purposes. Free users can create one social card, while Professional and Enterprise subscribers can create multiple cards."
  },
  {
    question: "How do I share my social card?",
    answer: "After creating your social card, you'll have several sharing options. You can copy a unique link to share directly, download your card as a PNG or JPG file to share manually, or use our one-click sharing options for social media platforms."
  },
  {
    question: "Can I edit my social card after creating it?",
    answer: "Absolutely! You can edit your social card at any time. Simply log in to your account, go to your dashboard, select the card you want to edit, and make your changes. All updates will be reflected immediately on your shared links."
  },
  {
    question: "What's the difference between the subscription plans?",
    answer: "Our Free plan allows you to create one basic social card with standard templates. The Professional plan lets you create up to 5 cards with premium templates and custom branding. The Enterprise plan offers unlimited cards, all features, and dedicated support for teams."
  },
  {
    question: "How secure is my information?",
    answer: "We take security very seriously. All data is encrypted both in transit and at rest. We only collect the information necessary to provide our services, and we never share your personal information with third parties without your consent. For more details, please refer to our Privacy Policy."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access to your subscription benefits until the end of your billing period, after which your account will revert to the Free plan."
  }
];

export default HelpCenter;
