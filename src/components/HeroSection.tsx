import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian wedding couple in traditional attire with marigold decorations"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-lg md:text-xl tracking-[0.4em] uppercase text-gold mb-6"
        >
          Luxury Wedding Photography & Films
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream-light max-w-4xl leading-tight"
        >
          Turning Your Wedding Moments Into{" "}
          <span className="text-gold italic">Timeless Memories</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/quote"
            className="px-10 py-4 bg-gold hover:bg-gold-dark text-brown font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-gold"
          >
            Get a Quote
          </Link>
          <Link
            to="/portfolio"
            className="px-10 py-4 border-2 border-gold/50 hover:border-gold text-cream font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:bg-gold/10"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
