import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Delhi",
    text: "Vivaah By Ramta captured our wedding so beautifully that every time we watch our film, we relive those magical moments. Their team was professional, warm, and truly understood the emotions of an Indian wedding.",
  },
  {
    name: "Ananya & Vikram",
    location: "Jaipur",
    text: "From our mehndi to the vidaai, every single moment was captured with such perfection. The cinematic quality of our wedding film left our entire family in tears of joy. Absolutely world-class!",
  },
  {
    name: "Sneha & Arjun",
    location: "Mumbai",
    text: "We chose Vivaah for our destination wedding in Udaipur and it was the best decision we made. The photos look like they belong in a magazine. Pure artistry and elegance in every frame.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-brown">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Love Notes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream gold-underline inline-block">
            What Our Couples Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 border border-gold/20 rounded-sm relative"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="font-body text-cream/70 leading-relaxed text-sm mb-6">
                {testimonial.text}
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-lg font-semibold text-gold">
                {testimonial.name}
              </p>
              <p className="font-body text-xs text-cream/50 tracking-wider uppercase">
                {testimonial.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
