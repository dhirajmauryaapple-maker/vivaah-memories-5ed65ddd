import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, alt: "Beautiful bride getting ready with mehendi", span: "row-span-2" },
  { src: portfolio2, alt: "Indian wedding ceremony jaimala", span: "" },
  { src: portfolio3, alt: "Pre-wedding couple at palace sunset", span: "" },
  { src: portfolio4, alt: "Haldi ceremony celebration", span: "" },
  { src: portfolio5, alt: "Destination wedding at palace rooftop", span: "row-span-2" },
  { src: portfolio6, alt: "Wedding reception first dance", span: "" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-cream-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown gold-underline inline-block">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-cream font-display text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-block px-10 py-4 border-2 border-maroon/30 hover:border-maroon text-maroon font-body text-sm font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:bg-maroon hover:text-cream"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
