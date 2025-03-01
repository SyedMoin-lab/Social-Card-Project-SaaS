
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Privacy <span className="text-green dark:text-hunter">Policy</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                At CardCraft, we value your privacy and are committed to protecting your personal information.
              </p>
            </motion.div>

            <motion.div
              className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how CardCraft ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website, use our services, or interact with us in any way.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include:
              </p>
              <ul>
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Professional information (job title, company)</li>
                <li>Payment information (when you subscribe to our services)</li>
                <li>Content you choose to include in your social cards</li>
                <li>Communications you send to us</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Sending technical notices, updates, and administrative messages</li>
                <li>Providing customer support</li>
                <li>Personalizing your experience</li>
              </ul>
              
              <h2>4. Sharing Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the rights of others</li>
                <li>In connection with a business transfer (e.g., merger or acquisition)</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to certain processing activities</li>
                <li>Data portability</li>
              </ul>
              
              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through our website prior to the changes becoming effective.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@cardcraft.com<br />
                Address: 123 Digital Avenue, San Francisco, CA 94107
              </p>
              
              <p className="text-muted-foreground text-sm mt-8">
                Last Updated: June 1, 2023
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
