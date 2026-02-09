import { motion } from "framer-motion";
import portfolio5 from "@/assets/portfolio-5.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={portfolio5}
                alt="Romantic Indian wedding couple on palace rooftop at night"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-sm hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown mb-6 gold-underline inline-block">
              About Vivaah By Ramta
            </h2>
            <div className="mt-10 space-y-5 text-brown-light font-body leading-relaxed">
              <p>
                At Vivaah By Ramta, we believe every love story deserves to be told with
                the grandeur and emotion it carries. Born from a deep passion for Indian
                weddings, we specialize in capturing the sacred rituals, the joyous
                celebrations, and the intimate moments that make your wedding truly yours.
              </p>
              <p>
                Our team of seasoned photographers and filmmakers brings together
                artistry, storytelling, and premium cinematic techniques to create
                timeless memories. From the vibrant colours of the mehndi to the
                emotional pheras, we ensure every frame speaks of love, tradition,
                and elegance.
              </p>
              <p className="font-display text-xl italic text-maroon">
                "We don't just capture weddings — we immortalize emotions."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
