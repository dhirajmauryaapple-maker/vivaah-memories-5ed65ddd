import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Send } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-wedding.jpg";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    city: "",
    eventType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted!", {
      description: "We'll prepare a personalized quote and reach out within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", eventDate: "", city: "", eventType: "", budget: "", message: "" });
  };

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <PageLayout>
      <section className="relative h-[50vh] flex items-center justify-center bg-brown overflow-hidden">
        <img src={heroImage} alt="Wedding couple" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative text-center z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-cream">
            Get a <span className="text-gold">Quote</span>
          </motion.h1>
          <p className="font-display text-lg tracking-[0.3em] text-cream/70 mt-4 uppercase">Let's Plan Your Perfect Day</p>
        </div>
      </section>

      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" required maxLength={100} value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <input type="tel" placeholder="Phone Number" required maxLength={15} value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            </div>
            <input type="email" placeholder="Email Address" required maxLength={255} value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="date" required value={formData.eventDate}
                onChange={(e) => update("eventDate", e.target.value)}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
              <input type="text" placeholder="City" required maxLength={100} value={formData.city}
                onChange={(e) => update("city", e.target.value)}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <select value={formData.eventType} onChange={(e) => update("eventType", e.target.value)} required
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors">
                <option value="">Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="pre-wedding">Pre-Wedding Shoot</option>
                <option value="engagement">Engagement</option>
                <option value="destination">Destination Wedding</option>
                <option value="full-package">Full Package</option>
              </select>
              <select value={formData.budget} onChange={(e) => update("budget", e.target.value)}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors">
                <option value="">Budget Range</option>
                <option value="1-3L">₹1 – ₹3 Lakhs</option>
                <option value="3-5L">₹3 – ₹5 Lakhs</option>
                <option value="5-10L">₹5 – ₹10 Lakhs</option>
                <option value="10L+">₹10 Lakhs+</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your dream wedding..." rows={5} maxLength={1000}
              value={formData.message} onChange={(e) => update("message", e.target.value)}
              className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
            <button type="submit"
              className="w-full py-4 bg-maroon hover:bg-maroon-dark text-cream font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-gold flex items-center justify-center gap-3">
              <Send className="w-4 h-4" />
              Request a Quote
            </button>
          </motion.form>
        </div>
      </section>
    </PageLayout>
  );
};

export default QuotePage;
