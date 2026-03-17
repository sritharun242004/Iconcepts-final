import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logoPath from "@assets/logo.jpg";
import { MagneticElement } from "./animations";
import { scrollToContact } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/creative", label: "Creative" },
  { href: "/media", label: "Media" },
  { href: "/btl-events", label: "BTL" },
  { href: "/events", label: "Events" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" data-testid="link-home">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={logoPath}
                  alt="iConcepts"
                  className="h-20 w-20 object-contain transition-all duration-500"
                  data-testid="img-logo"
                />
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center gap-0 lg:gap-1" data-testid="nav-desktop">
              {navLinks.map((link) => (
                <MagneticElement key={link.href} strength={0.1}>
                  <Link href={link.href}>
                    <span
                      className={`animated-underline relative px-2.5 lg:px-4 py-2 text-[11px] lg:text-xs font-mono font-medium uppercase tracking-[0.12em] lg:tracking-[0.18em] cursor-pointer transition-colors duration-300 whitespace-nowrap ${
                        location === link.href
                          ? "text-primary"
                          : isScrolled
                          ? "text-foreground/50 hover:text-foreground"
                          : "text-white/50 hover:text-white"
                      }`}
                      data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                      {location === link.href && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </span>
                  </Link>
                </MagneticElement>
              ))}
              <motion.button
                onClick={scrollToContact}
                className="micro-cta ml-2 lg:ml-4 inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-primary text-white text-[11px] lg:text-xs font-mono font-bold uppercase tracking-[0.1em] lg:tracking-[0.15em] rounded-full cursor-pointer whitespace-nowrap"
                whileHover={{ scale: 1.05, gap: "10px" }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-get-in-touch-nav"
              >
                Get in Touch
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </nav>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              className={`md:hidden relative z-[110] p-2 transition-colors ${
                isMobileOpen
                  ? "text-white"
                  : isScrolled
                  ? "text-foreground"
                  : "text-white"
              }`}
              data-testid="button-mobile-menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[105] bg-[#0A0C14]/95 flex flex-col justify-center px-6 pb-16"
          >
            <nav className="flex flex-col gap-0 mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={link.href}>
                    <span
                      className={`block font-heading text-3xl sm:text-4xl font-bold py-3 cursor-pointer transition-colors border-b border-white/[0.04] ${
                        location === link.href ? "text-primary" : "text-white/60 hover:text-white"
                      }`}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    scrollToContact();
                  }}
                  className="block font-heading text-3xl sm:text-4xl font-bold py-3 text-primary cursor-pointer border-b border-white/[0.04] w-full text-left"
                >
                  Get in Touch
                </button>
              </motion.div>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-lime pulse-dot" />
              <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-mono">
                INS Accredited · DIPR Empanelled
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
