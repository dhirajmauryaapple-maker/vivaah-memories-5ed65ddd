import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown py-16 border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-gold">Vivaah</span>
              <span className="font-display text-xs tracking-[0.3em] text-cream/60 block -mt-1">BY RAMTA</span>
            </Link>
            <p className="font-body text-cream/50 text-sm leading-relaxed">
              Luxury Indian wedding photography & films. Capturing love stories across India with cinematic elegance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
                { name: "Get a Quote", path: "/quote" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-cream/50 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/40 tracking-wider">
            © {new Date().getFullYear()} Vivaah By Ramta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
