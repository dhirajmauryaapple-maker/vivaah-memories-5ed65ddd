import { motion } from "framer-motion";
import { Award, Clapperboard, MonitorCheck, Clock, Users } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Team", description: "Years of expertise capturing 500+ Indian weddings across the country." },
  { icon: Clapperboard, title: "Cinematic Storytelling", description: "Every frame is crafted to tell your unique love story beautifully." },
  { icon: MonitorCheck, title: "Premium Equipment", description: "We use industry-leading cameras, lenses, and drones for flawless results." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect your timeline. Albums and films delivered as promised." },
  { icon: Users, title: "Personalized Coverage", description: "Tailored packages that match your vision, culture, and budget." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
            The Vivaah Promise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown gold-underline inline-block">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-maroon group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-brown mb-2">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-brown-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
