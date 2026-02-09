import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brown/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-heading text-2xl font-bold text-gold tracking-wide">
              Vivaah
            </span>
            <span className="font-display text-xs tracking-[0.3em] text-cream/70 -mt-1">
              BY RAMTA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="ml-4 px-6 py-2.5 bg-gold/90 hover:bg-gold text-brown font-body text-sm font-bold tracking-wider uppercase rounded-sm transition-all duration-300 hover:shadow-gold"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown/95 backdrop-blur-md border-t border-gold/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm tracking-wider uppercase py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-gold/90 text-brown font-body text-sm font-bold tracking-wider uppercase rounded-sm text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
