
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const pricingPlans = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for trying out our features",
    popular: false,
    features: [
      "1 Social Card",
      "Basic Templates",
      "PNG Download",
      "Standard Support"
    ],
    limitations: [
      "No Custom Branding",
      "No Analytics",
      "No Multiple Profiles"
    ]
  },
  {
    name: "Professional",
    price: 9.99,
    description: "Everything you need for professional use",
    popular: true,
    features: [
      "5 Social Cards",
      "Premium Templates",
      "PNG & JPG Downloads",
      "Custom Branding",
      "Basic Analytics",
      "Priority Support"
    ],
    limitations: [
      "No Advanced Analytics"
    ]
  },
  {
    name: "Enterprise",
    price: 19.99,
    description: "Advanced features for teams and businesses",
    popular: false,
    features: [
      "Unlimited Social Cards",
      "All Templates",
      "All Export Formats",
      "Advanced Branding",
      "Advanced Analytics",
      "Dedicated Support",
      "Team Management"
    ],
    limitations: []
  }
];

const Pricing = () => {
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
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your professional needs. No hidden fees, cancel anytime.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white dark:bg-green/10 rounded-xl shadow-lg overflow-hidden ${
                    plan.popular ? "border-2 border-green dark:border-hunter ring-2 ring-green/20 dark:ring-hunter/20" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="bg-green text-white py-1 text-center text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <Button 
                      asChild 
                      className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                    >
                      <Link to="/create">Get Started</Link>
                    </Button>
                    
                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-green dark:text-hunter mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <X className="w-5 h-5 mr-2" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
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


export default Pricing;
