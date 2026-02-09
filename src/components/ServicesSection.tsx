import { motion } from "framer-motion";
import { Camera, Film, Heart, Sparkles, MapPin } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Capturing every precious moment with artistic precision and a keen eye for emotion, light, and detail.",
  },
  {
    icon: Film,
    title: "Wedding Films & Cinematic Videos",
    description: "Cinematic storytelling that transforms your wedding day into a beautifully crafted film you'll cherish forever.",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoot",
    description: "Romantic, creative pre-wedding sessions at stunning locations that celebrate your unique love story.",
  },
  {
    icon: Sparkles,
    title: "Engagement / Haldi / Mehndi",
    description: "Full coverage of every ceremony — from the colourful haldi to the intricate mehndi, every ritual captured beautifully.",
  },
  {
    icon: MapPin,
    title: "Destination Weddings",
    description: "From palatial Rajasthan forts to serene Goan beaches, we travel wherever your dream wedding takes you.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-brown">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream gold-underline inline-block">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-gold/20 rounded-sm hover:border-gold/50 transition-all duration-500 hover:bg-gold/5"
            >
              <service.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                {service.title}
              </h3>
              <p className="font-body text-cream/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
