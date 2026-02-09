import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.", {
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", eventDate: "", city: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-cream-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Let's Connect
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown mb-6 gold-underline inline-block">
              Book Your Wedding
            </h2>
            <p className="mt-10 font-body text-brown-light leading-relaxed mb-10">
              Ready to have your love story captured in the most beautiful way?
              Fill in your details and our team will reach out to craft the
              perfect photography package for your special day.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Phone</p>
                  <p className="font-body text-brown font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Email</p>
                  <p className="font-body text-brown font-semibold">hello@vivaahbyramta.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Based In</p>
                  <p className="font-body text-brown font-semibold">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={15}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="City"
                required
                maxLength={100}
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <textarea
              placeholder="Tell us about your wedding..."
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3.5 bg-cream border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-maroon hover:bg-maroon-dark text-cream font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-gold flex items-center justify-center gap-3"
            >
              <Send className="w-4 h-4" />
              Book Your Wedding
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
