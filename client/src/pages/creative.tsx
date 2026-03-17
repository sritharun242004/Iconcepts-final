import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  StaggerContainer,
  StaggerItem,
  MagneticElement,
  GlitchText,
  FilmGrain,
  SignatureOrbit,
} from "@/components/animations";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";

function CreativeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const capabilities = ["Brand Strategy", "Campaign Ideation", "Print Design", "Visual Identity", "Communication"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen bg-[#0A0C14] overflow-hidden"
      data-testid="section-creative-hero"
    >
      <FilmGrain opacity={0.05} />

      {/* Giant background word */}
      <div className="absolute top-[10%] -right-[5%] pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(10rem,22vw,20rem)] font-extrabold text-white/[0.02] leading-none block"
        >
          CREATE
        </motion.span>
      </div>

      {/* Diagonal accent line */}
      <motion.div
        className="absolute top-0 left-[30%] w-[1px] h-[120%] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "rotate(15deg)" }}
      />

      {/* Signature accreditation orbit */}
      <div className="absolute top-[11%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
        <SignatureOrbit
          text={SIGNATURE_ORBIT_TEXT}
          size={120}
          progress={scrollYProgress}
          minOpacity={0.05}
          maxOpacity={0.12}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:min-h-[75vh] items-end">
          {/* Left — main headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <GlitchText text="Creative Department" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              <span className="text-white/20 text-sm font-mono tracking-[0.3em]">— 01</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.5rem,7vw,8rem)] font-extrabold text-white leading-[0.88] tracking-[-0.03em]"
              data-testid="text-creative-headline"
            >
              Where <span className="font-display italic text-primary">brand</span>
              <br />
              thinking
              <br />
              <span className="text-white/30">begins.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-white/40 text-sm leading-relaxed max-w-md"
            >
              Communication built for mass media platforms. Every idea
              shaped by brand context, audience behaviour, and medium.
            </motion.p>
          </div>

          {/* Right — vertical capabilities list */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l border-white/[0.06] pl-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  className="py-3 border-b border-white/[0.04] last:border-0 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary/30 text-xs font-mono font-bold group-hover:text-primary/60 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/40 text-sm font-medium group-hover:text-white/80 transition-colors duration-300">
                      {cap}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    { num: "01", title: "Brand Positioning & Strategy", desc: "Developing clear brand positioning that differentiates in crowded markets and resonates with target audiences." },
    { num: "02", title: "Campaign Ideation", desc: "ATL and integrated campaign concepts designed for maximum recall across print, outdoor, and large-format media." },
    { num: "03", title: "Print & Mass-Media Creative", desc: "Newspaper, outdoor, and large-format creative designed to communicate quickly and retain recall at scale." },
    { num: "04", title: "Long-term Brand Narratives", desc: "Building cohesive brand stories that maintain consistency across platforms over extended time periods." },
    { num: "05", title: "Visual Identity Design", desc: "Creating distinctive visual systems that maintain coherence across all brand touchpoints and media formats." },
    { num: "06", title: "Communication Design", desc: "Crafting messages optimized for clarity and impact in high-reach, fast-consumption media environments." },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-capabilities">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Capabilities"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <SplitTextReveal
              text="Creative capabilities built for mass visibility."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
          </div>
          <div className="lg:col-span-4 flex lg:items-end lg:justify-end">
            <FadeIn delay={0.3}>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We do not create in isolation. Creative is developed with a clear
                understanding of media scale and execution realities.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border/30">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className="group flex gap-6 py-10 pr-8 border-b border-border/30 md:odd:border-r md:odd:pr-12 md:even:pl-12 cursor-default"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                data-testid={`capability-${i}`}
              >
                <span className="font-mono text-3xl font-bold text-primary/15 group-hover:text-primary/40 transition-colors flex-shrink-0 w-12">
                  {cap.num}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MassVisibilitySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-mass-visibility">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Mass Visibility"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Creative for newspapers, outdoor, and large-format media requires clarity, restraint, and precision."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.4}>
              <p className="mt-10 text-white/40 text-base leading-[1.8] max-w-2xl">
                Our work is designed to communicate quickly, retain recall, and remain consistent
                across high-reach platforms. Every piece of creative goes through a rigorous
                evaluation process to ensure it performs at scale.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 flex lg:items-end lg:justify-end">
            <FadeIn delay={0.5}>
              <MagneticElement strength={0.2}>
                <motion.button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                  whileHover={{ scale: 1.05, gap: "16px" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-creative-contact"
                >
                  Discuss a Campaign
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </MagneticElement>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Creative() {
  return (
    <main>
      <CreativeHero />
      <CapabilitiesSection />
      <MassVisibilitySection />
    </main>
  );
}
