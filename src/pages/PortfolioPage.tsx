import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

const allImages = [
  { src: heroImage, alt: "Cinematic Indian wedding couple", category: "Wedding" },
  { src: portfolio1, alt: "Bride getting ready", category: "Bridal" },
  { src: portfolio2, alt: "Jaimala ceremony", category: "Ceremony" },
  { src: portfolio3, alt: "Pre-wedding at palace", category: "Pre-Wedding" },
  { src: portfolio4, alt: "Haldi celebration", category: "Haldi" },
  { src: portfolio5, alt: "Destination wedding night", category: "Destination" },
  { src: portfolio6, alt: "Reception first dance", category: "Reception" },
  { src: portfolio1, alt: "Bridal portrait", category: "Bridal" },
  { src: portfolio3, alt: "Sunset couple shoot", category: "Pre-Wedding" },
];

const PortfolioPage = () => {
  return (
    <PageLayout>
      <section className="relative h-[50vh] flex items-center justify-center bg-brown overflow-hidden">
        <img src={portfolio2} alt="Wedding ceremony" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative text-center z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-cream">
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          <p className="font-display text-lg tracking-[0.3em] text-cream/70 mt-4 uppercase">Stories We've Told</p>
        </div>
      </section>

      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative break-inside-avoid overflow-hidden rounded-sm group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/50 transition-all duration-500 flex flex-col items-center justify-center">
                  <span className="text-cream font-heading text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
