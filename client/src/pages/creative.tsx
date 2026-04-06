import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Expand, ExternalLink } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  FadeIn,
  SplitTextReveal,
  StaggerContainer,
  StaggerItem,
  MagneticElement,
  GlitchText,
  SignatureOrbit,
  TiltCard,
} from "@/components/animations";
import { SIGNATURE_ORBIT_TEXT, MEDIA_ASSET_SHOWCASE } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";
import { SEO } from "@/components/seo";
import { HeroGridLines } from "@/components/decorative-shapes";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function CreativeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const capabilities = ["Brand Strategy", "Campaign Ideation", "Visual Identity", "Marketing Collateral Design", "Print Ad Design", "Packaging Design & many more"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen bg-[#F8F8F8] overflow-hidden"
      data-testid="section-creative-hero"
    >
      <HeroGridLines />

      {/* Giant background word */}
      <div className="absolute top-[10%] -right-[5%] pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(10rem,22vw,20rem)] font-extrabold text-foreground/[0.04] leading-none block"
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
          minOpacity={0.06}
          maxOpacity={0.18}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-24">
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
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.5rem,7vw,8rem)] font-extrabold text-foreground leading-[0.88] tracking-[-0.03em]"
              data-testid="text-creative-headline"
            >
              Where <span className="font-display italic text-primary">brand</span>
              <br />
              thinking
              <br />
              <span className="text-foreground/20">begins.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-muted-foreground text-sm leading-relaxed max-w-md"
            >
              Communication built for mass media platforms. Every idea
              shaped by brand context, audience behaviour and medium.
            </motion.p>
          </div>

          {/* Right — vertical capabilities list */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l border-border/30 pl-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  className="py-3 border-b border-border/20 last:border-0 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary/30 text-xs font-mono font-bold group-hover:text-primary/60 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors duration-300">
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
    { num: "01", title: "Brand Strategy", desc: "Developing clear brand positioning that differentiates in crowded markets and resonates with target audiences." },
    { num: "02", title: "Campaign Ideation", desc: "ATL and integrated campaign concepts designed for maximum recall across print, outdoor and large-format media." },
    { num: "03", title: "Visual Identity", desc: "Creating distinctive visual systems that maintain coherence across all brand touchpoints and media formats." },
    { num: "04", title: "Marketing Collateral Design", desc: "Designing impactful marketing materials that communicate brand value consistently across every touchpoint." },
    { num: "05", title: "Print Ad Design", desc: "Newspaper, outdoor and large-format creative designed to communicate quickly and retain recall at scale." },
    { num: "06", title: "Packaging Design & many more", desc: "Crafting packaging and a wide range of brand communication materials that stand out on shelf and in market." },
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

const BRAND_LOGOS = [
  { src: "/logos/ARPUDHAM Logo.jpg", name: "Arpudham" },
  { src: "/logos/Athulya.jpg", name: "Athulya" },
  { src: "/logos/Bloom Logo Open file-01.jpg", name: "Bloom" },
  { src: "/logos/Breeze logo final-01.jpg", name: "Breeze" },
  { src: "/logos/Gagan logo-01.jpg", name: "Gagan" },
  { src: "/logos/Jewel logo-01.jpg", name: "Jewel" },
  { src: "/logos/Radha.jpg", name: "Radha" },
  { src: "/logos/S logo Final_v1.jpg (1).jpeg", name: "S Logo" },
  { src: "/logos/Silversky logo.jpg", name: "Silversky" },
];

function BrandIdentitySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-brand-identity">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Brand Identity"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <SplitTextReveal
              text="Logos crafted from brand essence."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />
          </div>
          <div className="lg:col-span-4 flex lg:items-end lg:justify-end">
            <FadeIn delay={0.3}>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Every logo we design is rooted in the brand's core themes, audience
                and market positioning — not just aesthetics.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Logos: 2-col on mobile (last one centered), 5-col row + 4-col centered row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {BRAND_LOGOS.map((logo, i) => {
            const isLast = i === BRAND_LOGOS.length - 1;
            const isOddTotal = BRAND_LOGOS.length % 2 !== 0;
            return (
              <FadeIn
                key={logo.name}
                delay={i * 0.06}
                className={isLast && isOddTotal ? "col-span-2 sm:col-span-1 flex justify-center" : ""}
              >
                <motion.div
                  className={`group relative bg-white rounded-xl border border-white/10 overflow-hidden h-[120px] sm:h-[140px] flex items-center justify-center p-4 sm:p-6 ${
                    isLast && isOddTotal ? "w-[calc(50%-6px)] sm:w-full" : "w-full"
                  }`}
                  whileHover={{ y: -3, borderColor: "hsl(0 78% 48% / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={logo.src} alt={`${logo.name} brand logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em]">{logo.name}</span>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CampaignAssetShowcaseSection() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const autoScrollPluginRef = useRef(
    AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const activeAsset = viewerIndex !== null ? MEDIA_ASSET_SHOWCASE[viewerIndex] : null;

  const showPrev = useCallback(() => {
    setViewerIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? MEDIA_ASSET_SHOWCASE.length - 1 : prev - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setViewerIndex((prev) => {
      if (prev === null) return null;
      return prev === MEDIA_ASSET_SHOWCASE.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Resume auto-scroll after manual button interaction
  const handleManualScroll = useCallback((direction: "prev" | "next") => {
    if (direction === "prev") carouselApi?.scrollPrev();
    else carouselApi?.scrollNext();
    setTimeout(() => autoScrollPluginRef.current.play(), 500);
  }, [carouselApi]);

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA]" data-testid="section-campaign-asset-showcase">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-primary" />
            <GlitchText text="Campaign Asset Showcase" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
          </div>
        </FadeIn>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-5">
        <div className="relative px-6 lg:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoScrollPluginRef.current]}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="pb-2">
              {MEDIA_ASSET_SHOWCASE.map((asset, i) => (
                <CarouselItem
                  key={asset.title}
                  className="basis-[85%] sm:basis-[58%] lg:basis-[34%] xl:basis-[28%]"
                >
                  <TiltCard tiltStrength={6} className="h-full">
                    <motion.div
                      className="h-full bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -3, borderColor: "hsl(0 78% 48% / 0.2)" }}
                      onClick={() => setViewerIndex(i)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setViewerIndex(i);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <img
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-[250px] sm:h-[270px] object-cover"
                        loading="lazy"
                      />
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-[0.08em]">
                              {asset.format}
                            </span>
                            <span className="text-muted-foreground text-xs font-mono uppercase tracking-[0.1em]">
                              {asset.channel}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold uppercase tracking-[0.08em]">
                            <Expand className="w-3 h-3" />
                            View
                          </span>
                        </div>
                        <p className="text-foreground text-xl font-heading font-bold leading-[1.35] mb-2">
                          {asset.title}
                        </p>
                        <p className="text-muted-foreground text-xs font-mono uppercase tracking-[0.12em]">
                          {asset.client}
                        </p>
                        {asset.proofPdf ? (
                          <a
                            href={asset.proofPdf}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-2 mt-4 text-primary text-xs font-mono font-bold uppercase tracking-[0.14em] hover:underline"
                          >
                            Open PDF Proof
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : null}
                      </div>
                    </motion.div>
                  </TiltCard>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <button
            type="button"
            onClick={() => handleManualScroll("prev")}
            aria-label="Previous campaign asset"
            className="absolute left-5 lg:left-12 top-[42%] -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-border/60 bg-white text-foreground flex items-center justify-center hover:bg-white/95 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => handleManualScroll("next")}
            aria-label="Next campaign asset"
            className="absolute right-5 lg:right-12 top-[42%] -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-border/60 bg-white text-foreground flex items-center justify-center hover:bg-white/95 transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Dialog open={viewerIndex !== null} onOpenChange={(open) => !open && setViewerIndex(null)}>
        <DialogContent className="w-screen max-w-none h-[100dvh] max-h-[100dvh] p-0 gap-0 bg-[#0A0C14] border-0 overflow-hidden rounded-none sm:rounded-none">
          {activeAsset ? (
            <div className="relative flex h-full min-h-0 flex-col">
              <div
                className="relative flex-1 min-h-0 flex items-center justify-center bg-black/30 px-6 sm:px-10 py-4 sm:py-6 cursor-zoom-out"
                onClick={(event) => {
                  if (event.target === event.currentTarget) {
                    setViewerIndex(null);
                  }
                }}
              >
                <img
                  src={activeAsset.image}
                  alt={activeAsset.title}
                  className="max-h-full max-w-full h-auto w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Previous asset"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Next asset"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="shrink-0 p-4 sm:p-5 border-t border-white/10 bg-[#11141f]">
                <p className="text-white text-xl font-heading font-bold mb-2">{activeAsset.title}</p>
                <div className="flex flex-wrap items-center gap-4 text-white/60 text-xs font-mono uppercase tracking-[0.1em]">
                  <span>{activeAsset.client}</span>
                  <span>{activeAsset.channel}</span>
                  <span>{activeAsset.format}</span>
                  {activeAsset.proofPdf ? (
                    <a
                      href={activeAsset.proofPdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      Open PDF Proof
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
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
              text="Creative for newspapers, outdoor and large-format media requires clarity, restraint and precision."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.4}>
              <p className="mt-10 text-white/40 text-base leading-[1.8] max-w-2xl">
                Our work is designed to communicate quickly, retain recall and remain consistent
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
      <SEO
        title="Creative Department"
        path="/creative"
        description="Brand strategy, campaign ideation, print design, visual identity, and packaging design. iConcepts creative team delivers impactful communication for India's top brands."
      />
      <CreativeHero />
      <CapabilitiesSection />
      <BrandIdentitySection />
      <CampaignAssetShowcaseSection />
      <MassVisibilitySection />
    </main>
  );
}
