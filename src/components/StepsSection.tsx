
import { motion } from "framer-motion";
import { Upload, Edit, Share2 } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-primary" />,
    title: "Upload Your Photo",
    description: "Choose your professional profile picture and upload it to your social card."
  },
  {
    icon: <Edit className="w-8 h-8 text-primary" />,
    title: "Add Your Details",
    description: "Fill in your contact information and links to your professional profiles."
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Share or Download",
    description: "Generate a shareable link or download your social card as PNG or JPG."
  }
];

export function StepsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Create your professional social card in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
