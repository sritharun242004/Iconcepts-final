import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  StaggerContainer,
  StaggerItem,
  MagneticElement,
  GlitchText,
  SignatureOrbit,
  Marquee,
} from "@/components/animations";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";

const PROPFAIR_CITIES = [
  { city: "Chennai", editions: "7 Editions", color: "bg-primary" },
  { city: "Pune", editions: "4 Editions", color: "bg-brand-blue" },
  { city: "Navi Mumbai", editions: "1 Edition", color: "bg-brand-lime" },
  { city: "Bangalore", editions: "1 Edition", color: "bg-primary/70" },
  { city: "Hyderabad", editions: "1 Edition", color: "bg-brand-blue/70" },
];

function EventsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const marqueeWords = [
    "Product Launches", "Corporate Events", "Brand Activations",
    "Conferences", "Exhibitions", "Public Engagements",
    "Live Experiences", "Community Events", "Roadshows",
    "Brand Unveilings", "Expos", "Sponsorships",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#F8F8F8] overflow-hidden flex items-center"
      data-testid="section-events-hero"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div className="absolute top-[11%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
        <SignatureOrbit
          text={SIGNATURE_ORBIT_TEXT}
          size={120}
          progress={scrollYProgress}
          minOpacity={0.06}
          maxOpacity={0.18}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 right-[15%] w-[1px] h-full bg-foreground/[0.04]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(2rem,6vw,5.5rem)] font-extrabold text-foreground leading-[0.9] tracking-[-0.03em]"
            data-testid="text-events-headline"
          >
            Experiences that <span className="font-display italic text-primary">move</span>
            <br />
            <span className="text-foreground/20">people.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md mx-auto"
          >
            From product launches to large-scale public engagements — we conceptualise
            and execute events that build lasting brand presence with full accountability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex justify-center"
          >
            <img src="/propfair-logo.png" alt="Propfair" className="h-10 object-contain" />
          </motion.div>
        </div>
      </div>

      {/* Marquee strip pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-border/30 py-4 bg-[#F8F8F8]/90 backdrop-blur-sm">
        <Marquee speed="slow">
          <div className="flex items-center gap-0 whitespace-nowrap">
            {marqueeWords.map((word, i) => (
              <span key={i} className="text-foreground/20 font-mono text-xs font-bold tracking-[0.25em] uppercase px-6 flex items-center gap-6">
                {word}
                <span className="w-1 h-1 rounded-full bg-primary/30" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

function PropfairSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#080A11]" data-testid="section-propfair">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left: Map image large */}
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Pan-India Presence</span>
                    </div>
                    <p className="text-white/60 text-xs font-mono">14+ Events · 5 Cities · 1 Vision</p>
                  </div>
                  <img src="/propfair-logo.png" alt="Propfair" className="h-[60px] object-contain" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
                  <img
                    src="/propfair-map.jpg"
                    alt="Propfair — India presence"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 lg:pl-8">
            <SplitTextReveal
              text="Property expos that connect buyers to their dream homes."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />

            <FadeIn delay={0.3}>
              <p className="mt-8 text-white/40 text-base leading-[1.8]">
                Our dedicated property expo vertical{" "}
                <span className="font-heading font-extrabold text-red-500">Propfair</span>{" "}
                — a platform that bridges real estate developers with serious
                home buyers. Since inception, we have successfully hosted over
                14 editions across India's most dynamic real estate markets,
                generating thousands of qualified leads and closing hundreds of
                deals per event.
              </p>
            </FadeIn>

            {/* City stats */}
            <StaggerContainer className="mt-10 space-y-0 border-t border-white/[0.06]" staggerDelay={0.08}>
              {PROPFAIR_CITIES.map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="group flex items-center justify-between py-4 border-b border-white/[0.06] cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-primary/30 text-xs font-mono font-bold group-hover:text-primary/60 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-white/20 group-hover:text-primary/50 transition-colors" />
                        <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">{item.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      <span className="text-white/30 text-xs font-mono">{item.editions}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5}>
              <div className="mt-10">
                <MagneticElement strength={0.2}>
                  <motion.button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    data-testid="button-propfair-contact"
                  >
                    Host a Propfair
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </MagneticElement>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsExperiencesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-events-experiences">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Events & Experiences" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Events that strengthen brand presence."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-10 text-white/40 text-base leading-[1.8]">
                We conceptualise and execute events that strengthen brand presence —
                including launches, corporate events and public engagements — ensuring
                alignment with overall brand and media strategy.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 space-y-0 border-t border-white/[0.06]" staggerDelay={0.1}>
              {[
                "Product Launches & Unveilings",
                "Corporate Events & Conferences",
                "Public Engagements & Community Events",
                "Brand Experience Activations",
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="group flex items-center gap-4 py-5 border-b border-white/[0.06] cursor-default"
                    whileHover={{ x: 6 }}
                  >
                    <span className="text-primary/30 text-xs font-mono font-bold group-hover:text-primary/60 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">{item}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="lg:col-span-6 lg:pl-16">
            <FadeIn delay={0.2}>
              <div className="bg-white/[0.03] rounded-2xl p-10 lg:p-14 border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-primary" />
                  <GlitchText text="Discipline" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-6">
                  Execution with
                  <br />
                  <span className="font-display italic text-primary">full accountability</span>
                </h3>
                <p className="text-white/40 text-sm leading-[1.8] mb-10">
                  Every on-ground activity is supported by clear timelines, coordination
                  frameworks and execution oversight — ensuring consistency, safety
                  and accountability across all environments.
                </p>

                <div className="space-y-0 border-t border-white/[0.06]">
                  {["Clear Timelines", "Coordination Frameworks", "Execution Oversight"].map((label, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/[0.06]">
                      <span className="text-primary/40 text-xs font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-white/70 text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8">
                <MagneticElement strength={0.2}>
                  <motion.button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                    whileHover={{ scale: 1.05, gap: "16px" }}
                    whileTap={{ scale: 0.97 }}
                    data-testid="button-events-contact"
                  >
                    Plan an Event
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </MagneticElement>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Events() {
  return (
    <main>
      <EventsHero />
      <PropfairSection />
      <EventsExperiencesSection />
    </main>
  );
}
