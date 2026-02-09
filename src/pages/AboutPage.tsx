import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-brown overflow-hidden">
        <img src={portfolio6} alt="Wedding reception" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-cream"
          >
            About <span className="text-gold">Us</span>
          </motion.h1>
          <p className="font-display text-lg tracking-[0.3em] text-cream/70 mt-4 uppercase">Our Story & Passion</p>
        </div>
      </section>

      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-brown mb-6 gold-underline inline-block">The Vivaah Story</h2>
              <div className="mt-10 space-y-5 font-body text-brown-light leading-relaxed">
                <p>
                  Vivaah By Ramta was born out of a deep love for Indian weddings — the colours, the rituals, the
                  emotions, and the unspoken moments that make each celebration unique. We are a team of passionate
                  photographers and filmmakers who believe that a wedding is not just an event; it's the most
                  beautiful chapter of a love story.
                </p>
                <p>
                  With years of experience capturing weddings across India — from the royal palaces of Rajasthan
                  to the serene backwaters of Kerala — we bring together technical mastery and heartfelt
                  storytelling to create memories that last forever.
                </p>
                <p>
                  Our philosophy is simple: every couple is unique, and their wedding deserves to be documented
                  with the same love and care that went into planning it. We don't just take photos — we capture
                  the laughter, the tears, the stolen glances, and the dancing feet.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden"
            >
              <img src={portfolio5} alt="Romantic wedding moment" className="w-full h-[400px] object-cover" loading="lazy" />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-gold pl-6 py-4"
            >
              <p className="font-display text-2xl italic text-maroon">
                "We don't capture weddings — we immortalize the emotions, the traditions, and the love."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-2 block not-italic">— Team Vivaah By Ramta</cite>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
