import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  GlitchText,
  SignatureOrbit,
} from "@/components/animations";
import { BTL_SERVICES, SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";

function BTLHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scatteredWords = [
    "Ad Bike", "Auto Stickers", "Bus Shelter", "Club Activities",
    "Flute Board", "Mall Activities", "Hoardings", "Lookwalkers",
    "Banners", "Paper Inserts", "Airport", "Toll",
    "Bus Stickers", "Events", "Activations", "LED Van",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[50vh] lg:min-h-[65vh] bg-[#F8F8F8] overflow-hidden flex items-center"
      data-testid="section-btl-hero"
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

      {/* Mosaic of service words as background texture — hidden on small screens */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden sm:block">
        {scatteredWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.8 }}
            className="absolute font-heading font-extrabold text-foreground/[0.04] whitespace-nowrap"
            style={{
              top: `${8 + (i * 37) % 85}%`,
              left: `${5 + (i * 53) % 90}%`,
              fontSize: `${1 + (i % 3) * 0.8}rem`,
              transform: `rotate(${-5 + (i % 7) * 2}deg)`,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-foreground/[0.04]" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 right-[15%] w-[1px] h-full bg-foreground/[0.04]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 sm:pt-36 lg:pt-28">
        {/* BTL label — left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-[1px] bg-primary" />
          <GlitchText text="BTL" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
        </motion.div>

        {/* Centered hero content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(2rem,6vw,5.5rem)] font-extrabold text-foreground leading-[0.9] tracking-[-0.03em]"
            data-testid="text-btl-headline"
          >
            Execution that <span className="font-display italic text-primary">reaches</span>
            <br />
            <span className="text-foreground/20">the ground.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md mx-auto"
          >
            Structured BTL initiatives designed to engage audiences directly —
            with planning, logistics, permissions and coordination handled end-to-end.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
}

function BTLServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFAFA]" data-testid="section-btl-services">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-8 lg:mb-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <GlitchText text="Core BTL Services" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
            </div>
          </FadeIn>
          <SplitTextReveal
            text="6 core services for ground-level impact."
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em] max-w-3xl"
          />
        </div>

        {/* Main BTL Services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {["Outdoor Hoardings", "Bus Branding", "Bus Shelters", "LED Screening", "Digital Truck", "Vehicle Branding"].map((service, i) => (
            <FadeIn key={service} delay={i * 0.05}>
              <motion.div
                className="px-4 py-6 bg-white rounded-xl border border-border/40 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-default text-center"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-foreground text-sm lg:text-base font-bold">{service}</span>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function BusShelterSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white" data-testid="section-bus-shelter">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-[#0A0C14]">
              <img
                src="/media-assets/tata-value-homes-bus-shelter.jpg"
                alt="Tata Value Homes bus shelter branding campaign"
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
              <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/20 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                <span className="text-white text-[11px] font-mono uppercase tracking-[0.16em]">
                  Live Bus Shelter Campaign
                </span>
              </div>
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Bus Shelter Advertising" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="High-visibility placements where your audience lives and commutes."
              className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 text-muted-foreground text-base leading-[1.8]">
                Bus shelter ads offer 24/7 visibility at eye-level, reaching commuters and pedestrians
                in high-traffic areas. We handle everything from design to permit coordination and installation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

const MALL_IMAGES = [
  "/Gemini Generated Image.png",
];

function MallCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % MALL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-[#0A0C14] aspect-[16/10]">
      {MALL_IMAGES.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`Mall Activity ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/20 px-3 py-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-white text-[11px] font-mono uppercase tracking-[0.16em]">
          Live Mall Activation
        </span>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
        {MALL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function MallActivitySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-mall-activity">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Mall Activities" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="On-ground activations that engage shoppers where they spend."
              className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 text-muted-foreground text-base leading-[1.8]">
                Mall activations place your brand directly in front of high-footfall audiences.
                From kiosks and experiential setups to product sampling and live demonstrations —
                we manage end-to-end coordination including mall permissions, logistics and staffing.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <MallCarousel />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || userPaused) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [userPaused]);

  return (
    <div ref={containerRef} className="relative bg-black rounded-2xl overflow-hidden aspect-[16/9] border border-border/50 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <video
        ref={videoRef}
        className="w-full h-full object-contain bg-black"
        controls={isPlaying}
        preload="metadata"
        playsInline
        loop
        onPause={() => { setIsPlaying(false); setUserPaused(true); }}
        onPlay={() => setIsPlaying(true)}
        data-testid="video-led-van-campaign"
      >
        <source src="/media-assets/iconcepts-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          onClick={() => {
            setUserPaused(false);
            videoRef.current?.play();
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Play className="w-7 h-7 text-white ml-1" fill="white" />
          </div>
        </button>
      )}
    </div>
  );
}

function TruckVideoSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-truck-video">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Digital Truck" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Digital Truck Advertising that brings your message to the streets."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 text-muted-foreground text-base leading-[1.8]">
                Our LED digital trucks deliver high-impact mobile advertising, taking your brand message directly to your target audience across key locations.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <VideoPlayer />
            <p className="mt-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Digital Truck Campaign Film
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function BTLEvents() {
  return (
    <main>
      <BTLHero />
      <BTLServicesSection />
      <TruckVideoSection />
      <BusShelterSection />
      <MallActivitySection />
    </main>
  );
}
