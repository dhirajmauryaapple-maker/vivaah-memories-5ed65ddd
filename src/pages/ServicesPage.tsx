import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Camera, Film, Heart, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Our expert photographers capture every precious moment — from the bride's radiant smile to the groom's nervous excitement. We use natural light, candid techniques, and artistic composition to create stunning images.",
    features: ["Candid & Traditional Shots", "Drone Photography", "Same-Day Edits", "Premium Albums"],
  },
  {
    icon: Film,
    title: "Wedding Films & Cinematic Videos",
    description: "We craft cinematic wedding films that feel like a Bollywood romance — complete with dramatic music, slow-motion highlights, and emotional storytelling that brings your day back to life.",
    features: ["4K Cinematic Films", "Highlight Reels", "Full Ceremony Coverage", "Drone Videography"],
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoot",
    description: "Whether it's a palace courtyard or a mountain trail, our pre-wedding sessions are designed to capture your chemistry in the most stunning locations with creative direction.",
    features: ["Location Scouting", "Wardrobe Guidance", "Concept Planning", "Couples Direction"],
  },
  {
    icon: Sparkles,
    title: "Engagement / Haldi / Mehndi Coverage",
    description: "Every ceremony is special. From the vibrant haldi celebrations to the intricate mehndi designs and joyous engagement parties — we cover it all with equal love.",
    features: ["Multi-Day Coverage", "Detail Photography", "Family Portraits", "Event Highlights"],
  },
  {
    icon: MapPin,
    title: "Destination Weddings",
    description: "From Udaipur's Lake Palace to Goa's beaches to international venues — wherever your dream wedding takes you, we're there to capture every breathtaking moment.",
    features: ["Pan-India Coverage", "International Weddings", "Travel & Setup Included", "Local Crew Coordination"],
  },
];

const ServicesPage = () => {
  return (
    <PageLayout>
      <section className="relative h-[50vh] flex items-center justify-center bg-brown overflow-hidden">
        <img src={heroImage} alt="Indian wedding" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative text-center z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-cream">
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <p className="font-display text-lg tracking-[0.3em] text-cream/70 mt-4 uppercase">Crafted For Your Special Day</p>
        </div>
      </section>

      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <service.icon className="w-12 h-12 text-gold mb-4" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown mb-4">{service.title}</h2>
                <p className="font-body text-brown-light leading-relaxed mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="font-body text-sm text-brown-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`h-80 rounded-sm gradient-maroon flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon className="w-24 h-24 text-cream/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brown text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-cream mb-4">Ready to Begin?</h2>
          <p className="font-body text-cream/60 mb-8">Let's craft the perfect package for your dream wedding.</p>
          <Link to="/quote" className="inline-block px-10 py-4 bg-gold hover:bg-gold-dark text-brown font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300">
            Get a Quote
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
