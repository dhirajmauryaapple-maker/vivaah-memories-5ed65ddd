import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ContactSection from "@/components/ContactSection";
import portfolio3 from "@/assets/portfolio-3.jpg";

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="relative h-[50vh] flex items-center justify-center bg-brown overflow-hidden">
        <img src={portfolio3} alt="Wedding couple" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative text-center z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-cream">
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <p className="font-display text-lg tracking-[0.3em] text-cream/70 mt-4 uppercase">We'd Love To Hear From You</p>
        </div>
      </section>
      <ContactSection />
    </PageLayout>
  );
};

export default ContactPage;
