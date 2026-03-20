import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Expand } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  Counter,
  StaggerContainer,
  StaggerItem,
  MagneticElement,
  GlitchText,
  TiltCard,
  SignatureOrbit,
} from "@/components/animations";
import { NEWSPAPER_PARTNERS, MEDIA_ASSET_SHOWCASE, SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { scrollToContact } from "@/lib/utils";

function MediaHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen bg-[#F8F8F8] overflow-hidden"
      data-testid="section-media-hero"
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

      {/* Newspaper-style column rules */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-foreground/[0.04]" />
      </div>

      {/* Large background "02" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-[5%] right-[5%] pointer-events-none select-none"
      >
        <span className="font-mono text-[clamp(8rem,20vw,18rem)] font-bold text-foreground/[0.03] leading-none">02</span>
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        {/* Top bar — newspaper masthead style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between border-b border-border/30 pb-4 mb-12 lg:mb-20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            <GlitchText text="Media Department" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
          </div>
          <span className="text-foreground/20 text-xs font-mono tracking-[0.3em] hidden sm:block">INS ACCREDITED · EST. 2012</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Main headline — spans 8 cols */}
          <div className="lg:col-span-8 lg:pr-12 lg:border-r lg:border-border/30">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.5rem,7vw,7rem)] font-extrabold text-foreground leading-[0.9] tracking-[-0.03em]"
              data-testid="text-media-headline"
            >
              Planned
              <br />
              <span className="font-display italic text-primary">visibility,</span>
              <br />
              not <span className="text-foreground/20">guesswork.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-muted-foreground text-sm leading-relaxed max-w-lg"
            >
              National-level media planning and buying with strong emphasis
              on reach efficiency, cost optimisation and compliance.
            </motion.p>

            {/* Horizontal stat bar */}
          </div>

          {/* Right sidebar — newspaper excerpt style */}
          <div className="lg:col-span-4 lg:pl-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-display italic text-muted-foreground text-lg lg:text-xl leading-[1.5] mb-8">
                "Every rupee of media spend is tracked, verified and optimised for maximum reach."
              </p>
              <div className="space-y-4">
                {["Print & Newspaper", "Outdoor & Hoardings", "TV & Radio", "Digital Planning"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-center gap-3 py-2 border-b border-border/20 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="text-muted-foreground text-xs font-mono uppercase tracking-[0.1em]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}

function NewspaperPartnersSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-newspaper-partners">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <GlitchText text="Media Partners" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
          </div>
        </FadeIn>
        <SplitTextReveal
          text="We work with India's most reputed media companies."
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em] max-w-3xl mb-16"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {NEWSPAPER_PARTNERS.map((partner, i) => {
            const isEconomicTimes = partner.name === "The Economic Times";
            return (
              <FadeIn key={partner.name} delay={i * 0.05}>
                <TiltCard tiltStrength={8} className="w-[240px] max-w-full">
                  <motion.div
                    className="bg-white rounded-xl p-5 border border-border/40 flex flex-col items-center justify-center gap-3 group cursor-default shadow-sm hover:shadow-lg transition-all duration-300 min-h-[154px]"
                    whileHover={{ y: -4, borderColor: "hsl(0 78% 48% / 0.2)" }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={
                        isEconomicTimes
                          ? "h-9 w-full max-w-[170px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                          : "h-8 max-w-[126px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      }
                    />
                    <span className="text-muted-foreground/60 text-[11px] font-mono uppercase tracking-[0.1em] group-hover:text-foreground/80 transition-colors text-center leading-[1.5] min-h-[36px] flex items-center justify-center">
                      {partner.name}
                    </span>
                  </motion.div>
                </TiltCard>
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
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const activeAsset = viewerIndex !== null ? MEDIA_ASSET_SHOWCASE[viewerIndex] : null;

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  const showPrev = () => {
    setViewerIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? MEDIA_ASSET_SHOWCASE.length - 1 : prev - 1;
    });
  };

  const showNext = () => {
    setViewerIndex((prev) => {
      if (prev === null) return null;
      return prev === MEDIA_ASSET_SHOWCASE.length - 1 ? 0 : prev + 1;
    });
  };

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
          <Carousel opts={{ align: "start" }} setApi={setCarouselApi} className="w-full">
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
                      data-testid={`media-proof-${i}`}
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
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous campaign asset"
            className="absolute left-5 lg:left-12 top-[42%] -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-border/60 bg-white text-foreground flex items-center justify-center hover:bg-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next campaign asset"
            className="absolute right-5 lg:right-12 top-[42%] -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-border/60 bg-white text-foreground flex items-center justify-center hover:bg-white/95 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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

function MediaServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white" data-testid="section-media-services">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Newspaper & Print" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Owning premium media spaces across India."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-10 text-muted-foreground text-base leading-[1.8]">
                iConcepts has executed numerous high-visibility newspaper campaigns,
                including full front-page advertisements. These placements demand
                certified access, negotiation capability and precise coordination.
                Newspaper advertising remains our core specialization.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 space-y-0 border-t border-border/30" staggerDelay={0.1}>
              {[
                "Front-page newspaper placements",
                "National & regional media coverage",
                "Data-driven media planning",
                "Audience-specific targeting",
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="group flex items-center gap-4 py-5 border-b border-border/30 cursor-default"
                    whileHover={{ x: 6 }}
                    data-testid={`media-service-${i}`}
                  >
                    <span className="text-primary/30 text-xs font-mono font-bold group-hover:text-primary/60 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors duration-300">{item}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>

          <div className="lg:col-span-6 lg:pl-16">
            <FadeIn delay={0.2}>
              <div className="bg-[#0A0C14] rounded-2xl p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-[1px] bg-primary" />
                  <GlitchText text="Buying & Compliance" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-6">
                  Media Buying with
                  <br />
                  <span className="font-display italic text-primary">Full Accountability</span>
                </h3>
                <p className="text-white/40 text-sm leading-[1.8] mb-10">
                  As an INS Accredited agency, we ensure transparent billing, verified
                  placements and adherence to industry regulations. This protects brand
                  investments while maintaining trust across all stakeholders.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.04] rounded-xl p-6 text-center border border-white/[0.06]">
                    <span className="font-mono text-4xl font-bold text-white block">
                      <Counter end={100} suffix="%" />
                    </span>
                    <span className="text-white/30 text-xs font-mono uppercase tracking-[0.2em] mt-2 block">Transparent</span>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-6 text-center border border-white/[0.06]">
                    <span className="font-heading text-4xl font-extrabold text-primary block">INS</span>
                    <span className="text-white/30 text-xs font-mono uppercase tracking-[0.2em] mt-2 block">Accredited</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaApproachSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-media-approach">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Our Approach" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Each plan is built on market insight, experience and structured evaluation."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.4}>
              <p className="mt-10 text-white/40 text-base leading-[1.8] max-w-2xl">
                Every media plan is custom-built to maximize your brand's visibility while
                ensuring every rupee works harder. We combine market data with years of
                on-ground experience to deliver measurable outcomes.
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
                  data-testid="button-media-contact"
                >
                  Plan Your Campaign
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

export default function MediaDept() {
  return (
    <main>
      <MediaHero />
      <NewspaperPartnersSection />
      <MediaServicesSection />
      <CampaignAssetShowcaseSection />
      <MediaApproachSection />
    </main>
  );
}
