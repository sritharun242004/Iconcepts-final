import { Link } from "wouter";
import { motion } from "framer-motion";
import { FadeIn } from "./animations";
import { ArrowUpRight } from "lucide-react";
import logoPath from "@assets/logo.jpg";
import { scrollToContact } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-[#0A0C14] text-white overflow-hidden">

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden translate-y-[5%]">
        <p
          className="font-heading font-extrabold leading-none tracking-[-0.04em] whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 20vw, 20rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(194,24,24,0.4)",
            textShadow: "0 0 80px rgba(194,24,24,0.12)",
          }}
        >
          iConcepts
        </p>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-t border-white/[0.06] pt-12 sm:pt-16 lg:pt-20 pb-8" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          {/* Main grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 pb-12 lg:pb-20">

            {/* Brand */}
            <div className="col-span-2 lg:col-span-4">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logoPath} alt="iConcepts" className="h-9 w-9 object-contain rounded-lg" />
                  <span className="font-heading text-lg font-extrabold">iConcepts</span>
                </div>
                <p className="text-white/50 text-xs leading-[1.8] max-w-xs">
                  A full-service advertising and brand-building agency.
                  INS Accredited & DIPR Empanelled.
                </p>
              </FadeIn>
            </div>

            {/* Navigation */}
            <div className="col-span-1 lg:col-span-3">
              <FadeIn delay={0.1}>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold font-mono">Navigation</h4>
                <nav className="flex flex-col">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/creative", label: "Creative" },
                    { href: "/media", label: "Media" },
                    { href: "/btl-events", label: "BTL" },
                    { href: "/events", label: "Events" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href}>
                      <motion.span
                        className="text-white/70 hover:text-white transition-colors text-xs cursor-pointer flex items-center gap-1.5 group py-1.5 w-fit"
                        whileHover={{ x: 3 }}
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                        <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.span>
                    </Link>
                  ))}
                  <motion.button
                    onClick={scrollToContact}
                    className="text-primary/80 hover:text-primary transition-colors text-xs cursor-pointer flex items-center gap-1.5 group py-1.5 text-left w-fit"
                    whileHover={{ x: 3 }}
                    data-testid="link-footer-contact"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </nav>
              </FadeIn>
            </div>

            {/* Reach Us */}
            <div className="col-span-1 lg:col-span-2">
              <FadeIn delay={0.2}>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold font-mono">Reach Us</h4>
                <div className="space-y-2 text-xs text-white/60">
                  <p>Chennai, Tamil Nadu</p>
                  <a href="mailto:info@iconcepts.in" className="block hover:text-white transition-colors" data-testid="link-footer-email">
                    info@iconcepts.in
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Certifications */}
            <div className="col-span-2 lg:col-span-3 flex lg:justify-end lg:items-start">
              <FadeIn delay={0.3}>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold font-mono">Certified</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/[0.1]">
                    <img src="/logos/ins-badge.png" alt="INS Accredited" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/[0.1]">
                    <img src="/logos/dipr-badge.png" alt="DIPR Empanelled" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/50 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue pulse-dot" />
                    INS Accredited
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/50 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime pulse-dot" />
                    DIPR Empanelled
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/30 text-[10px] tracking-wider font-mono">
              &copy; {new Date().getFullYear()} iConcepts. All rights reserved.
            </p>
            <p className="text-white/30 text-[10px] tracking-wider font-mono">
              360° Advertising & Brand Building
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
