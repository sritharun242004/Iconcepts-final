import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowDown, Quote } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  Counter,
  MagneticElement,
  Marquee,
  SignatureOrbit,
  TiltCard,
  GlitchText,
  TypewriterText,
  FilmGrain,
  HorizontalScrollText,
  GradientText,
} from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import { Interactive3DShowcase } from "@/components/interactive-3d-showcase";
import {
  TESTIMONIALS,
  ATL_SERVICES,
  BTL_SERVICES,
  CREATIVE_SERVICES,
  CLIENT_PARTNER_SEGMENTS,
  STATS,
  SIGNATURE_ORBIT_TEXT,
} from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";
import {
  ServicesBackgroundShapes,
  TestimonialsBackgroundShapes,
  AccreditationBackgroundShapes,
} from "@/components/decorative-shapes";
import logoPath from "@assets/logo.jpg";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative lg:h-screen flex flex-col justify-end overflow-hidden bg-[#F8F8F8]"
      data-testid="section-hero"
    >

      {/* Signature accreditation orbit */}
      <div className="absolute top-[12%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
        <SignatureOrbit
          text={SIGNATURE_ORBIT_TEXT}
          size={120}
          progress={scrollYProgress}
          minOpacity={0.06}
          maxOpacity={0.18}
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-24 pt-44 sm:pt-52 lg:pt-32"
      >
        <div className="flex items-end justify-between gap-8 max-w-[1400px] mx-auto">
          <div className="flex-1">
            <h1
              className="font-heading text-[clamp(2.5rem,8vw,8rem)] font-extrabold text-foreground leading-[0.88] tracking-[-0.03em]"
              data-testid="text-hero-headline"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >We build</motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              ><span className="font-display italic text-primary">brands</span> that</motion.span>
              <motion.span
                className="block text-foreground/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >command</motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >attention<span className="text-primary">.</span></motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex flex-col items-end gap-7 pb-4 max-w-[300px] lg:max-w-[340px]"
          >
            {/* Quick stats */}
            <div className="flex items-center gap-5">
              {[{ val: "19+", label: "Years" }, { val: "40+", label: "Clients" }, { val: "360°", label: "Integrated" }].map(({ val, label }, i) => (
                <div key={i} className="flex flex-col items-end">
                  <span className="font-heading text-xl lg:text-2xl font-extrabold text-foreground leading-none">{val}</span>
                  <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.18em] mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-border/30" />

            <p className="text-muted-foreground text-sm leading-relaxed text-right" data-testid="text-hero-description">
              A 360° advertising and brand-building agency offering creative services, media releases, BTL and outdoor activities, and event execution — all integrated under one roof.
            </p>

            <MagneticElement strength={0.2}>
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                whileHover={{ scale: 1.05, gap: "16px" }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-hero-view-work"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </MagneticElement>

            <div className="w-full h-[1px] bg-border/30" />

            {/* Accreditation badges — uniform size with labels */}
            <div className="flex flex-col items-end gap-2.5">
              <span className="text-foreground/30 text-[10px] font-mono uppercase tracking-[0.2em]">
                Certified &amp; Empanelled
              </span>
              <div className="flex items-center gap-3">
                {[
                  { src: "/logos/ins-badge.png",       alt: "INS",       label: "INS",       bg: "bg-white" },
                  { src: "/logos/dipr-badge.png",      alt: "DIPR",      label: "DIPR",      bg: "bg-white" },
                  { src: "/logos/Gulf News logo.png",  alt: "Gulf News", label: "Gulf News", bg: "bg-black" },
                ].map(({ src, alt, label, bg }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <div className={`w-[60px] h-[60px] lg:w-[68px] lg:h-[68px] rounded-xl border border-border/40 hover:border-border/70 transition-all duration-300 shadow-sm bg-white p-[2px] flex items-center justify-center overflow-hidden`}>
                      <div className={`w-full h-full rounded-lg overflow-hidden ${bg}`}>
                        <img src={src} alt={alt} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-foreground/30">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="md:hidden mt-6 sm:mt-8"
        >
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
          A 360° advertising and brand-building agency offering creative services, media releases, BTL and outdoor activities, and event execution — all integrated under one roof.
          </p>
          <div className="flex items-center gap-4">
            <MagneticElement strength={0.2}>
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-hero-view-work-mobile"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </MagneticElement>

            {/* Accreditation badges — mobile */}
            <div className="flex items-center gap-2">
              {[
                { src: "/logos/ins-badge.png",      alt: "INS",       inner: "bg-white" },
                { src: "/logos/dipr-badge.png",     alt: "DIPR",      inner: "bg-white" },
                { src: "/logos/Gulf News logo.png", alt: "Gulf News", inner: "bg-black" },
              ].map(({ src, alt, inner }) => (
                <div key={alt} className="w-11 h-11 rounded-lg border border-border/40 shadow-sm bg-white p-[2px] flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full rounded-md overflow-hidden ${inner}`}>
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeBand() {
  const items = ["CREATIVE", "MEDIA", "BTL", "EVENTS", "STRATEGY", "BRAND BUILDING", "360°"];
  return (
    <div className="bg-primary py-5 overflow-hidden relative z-20">
      <Marquee speed="normal">
        <div className="flex items-center gap-0 whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="text-white/90 font-mono text-sm sm:text-base font-bold tracking-[0.35em] px-8 flex items-center gap-8 uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-white/30" />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

function ServicesCluster() {
  const clusters = [
    {
      title: "ATL",
      subtitle: "Above the Line",
      accent: "bg-white/20 border-white/30 text-white",
      cardBg: "bg-primary",
      titleColor: "text-white",
      services: ATL_SERVICES,
    },
    {
      title: "BTL",
      subtitle: "Below the Line",
      accent: "bg-white border-border/40 text-foreground/70",
      cardBg: "bg-[#EFEFEF]",
      titleColor: "text-foreground",
      services: BTL_SERVICES,
    },
    {
      title: "Creatives",
      subtitle: "Brand & Design",
      accent: "bg-gray-100 border-gray-300/40 text-foreground/60",
      cardBg: "bg-[#2A2A2A]",
      titleColor: "text-white",
      services: CREATIVE_SERVICES,
    },
  ];

  return (
    <section className="relative pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 bg-[#FAFAFA] overflow-hidden" data-testid="section-services">
      <ServicesBackgroundShapes />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <GlitchText
                text="What We Do"
                className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
              />
            </div>
          </FadeIn>
          <SplitTextReveal
            text="Integrated solutions across every touchpoint."
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em] max-w-3xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clusters.map((cluster, i) => (
            <FadeIn key={cluster.title} delay={i * 0.12}>
              <TiltCard tiltStrength={6} className="h-full">
                <motion.div
                  className={`${cluster.cardBg} rounded-2xl p-8 lg:p-10 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-500 h-full`}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-heading text-2xl font-extrabold ${cluster.titleColor}`}>
                      {cluster.title}
                    </span>
                  </div>
                  <p className={`text-xs font-mono uppercase tracking-[0.15em] mb-6 ${cluster.cardBg === "bg-primary" || cluster.cardBg === "bg-[#2A2A2A]" ? "text-white/50" : "text-muted-foreground"}`}>
                    {cluster.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cluster.services.map((service) => (
                      <motion.span
                        key={service}
                        className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium border ${cluster.accent} cursor-default`}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden" data-testid="section-manifesto">
      <div className="absolute top-0 right-0 font-display text-[20vw] font-bold text-black/[0.015] leading-none select-none pointer-events-none italic">
        360°
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Who We Are"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="font-display italic text-3xl md:text-4xl lg:text-[2.8rem] text-foreground leading-[1.25] tracking-[-0.01em]">
                iConcepts is a full-service advertising agency delivering integrated solutions across <span className="text-primary">creative, media and on-ground execution.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-10 text-muted-foreground text-base lg:text-lg leading-[1.8] max-w-2xl" data-testid="text-intro-paragraph">
                With a strong foundation in ATL advertising and national-level media planning,
                we help brands achieve visibility at scale — with clarity, compliance and control.
                Over 19 years, iConcepts has worked with 40+ satisfied clients across industries.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end lg:items-end">
            <FadeIn delay={0.3} direction="left">
              <div className="flex items-center gap-4">
                <img src={logoPath} alt="iConcepts" className="w-14 h-14 rounded-xl object-contain border border-border/30" />
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">Est.</p>
                  <p className="font-heading text-3xl font-extrabold text-foreground">19+ yrs</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function BigScrollStatement() {
  return (
    <div className="py-8 lg:py-12 bg-[#0A0C14] overflow-hidden border-b border-white/[0.04]">
      <HorizontalScrollText
        text="CREATIVITY — STRATEGY — EXECUTION — IMPACT —"
        className="text-white/20 select-none"
      />
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="bg-[#0A0C14] overflow-hidden" data-testid="section-stats">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
          {STATS.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="py-10 sm:py-14 lg:py-20 text-center group cursor-default" data-testid={`stat-${i}`}>
                <span className="font-mono text-3xl sm:text-5xl lg:text-7xl font-bold text-white/90 block leading-none group-hover:text-primary transition-colors duration-500">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/30 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-3 block">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DepartmentsSection() {
  const departments = [
    {
      num: "01",
      title: "Creative",
      subtitle: "Where Brand Thinking Begins",
      description: "Brand strategy, campaign ideation and communication design built for mass media and long-term brand recall.",
      href: "/creative",
    },
    {
      num: "02",
      title: "Media",
      subtitle: "Planned Visibility, Not Guesswork",
      description: "National-level media planning and buying, supported by INS accreditation and regulatory compliance.",
      href: "/media",
    },
    {
      num: "03",
      title: "BTL",
      subtitle: "Execution That Reaches the Ground",
      description: "On-ground activations and events executed with operational discipline and coordination.",
      href: "/btl-events",
    },
    {
      num: "04",
      title: "Events",
      subtitle: "Experiences That Move People",
      description: "Product launches, corporate events and public engagements conceptualised and executed with full accountability.",
      href: "/events",
    },
  ];

  return (
    <section className="bg-[#FAFAFA]" data-testid="section-departments">
      {departments.map((dept, i) => (
        <Link key={dept.num} href={dept.href}>
          <motion.div
            className="group cursor-pointer border-b border-border/30 last:border-0"
            whileHover={{ backgroundColor: "rgba(194, 24, 24, 0.02)", x: 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`card-department-${dept.num}`}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 sm:py-14 lg:py-18">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-center gap-4 sm:gap-6 sm:flex-shrink-0">
                  <FadeIn delay={i * 0.1}>
                    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors duration-500">
                      {dept.num}
                    </span>
                  </FadeIn>
                  <FadeIn delay={i * 0.1 + 0.05}>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-500 sm:w-48 lg:w-56" data-testid={`text-dept-title-${dept.num}`}>
                      {dept.title}
                    </h3>
                  </FadeIn>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-8">
                  <FadeIn delay={i * 0.1 + 0.1}>
                    <p className="text-primary/70 text-sm font-medium sm:w-44 lg:w-52 flex-shrink-0">{dept.subtitle}</p>
                  </FadeIn>
                  <FadeIn delay={i * 0.1 + 0.15}>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{dept.description}</p>
                  </FadeIn>
                </div>
                <div className="hidden sm:flex flex-shrink-0 sm:justify-end">
                  <FadeIn delay={i * 0.1 + 0.2}>
                    <motion.div
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0C14] overflow-hidden" data-testid="section-testimonials">
      <TestimonialsBackgroundShapes />
      <FilmGrain opacity={0.03} />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-[1px] bg-primary" />
            <GlitchText
              text="Testimonials"
              className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <TiltCard tiltStrength={18} className="h-full">
                <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.06] h-full flex flex-col hover:border-primary/20 transition-colors duration-500">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-4 sm:mb-6 flex-shrink-0" />
                  <p className="font-display italic text-white/70 text-base sm:text-lg leading-[1.6] mb-6 sm:mb-8 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/[0.06] pt-6">
                    <p className="text-white/90 text-sm font-heading font-bold">{testimonial.author}</p>
                    <p className="text-white/30 text-xs font-mono mt-1">
                      {testimonial.title ? `${testimonial.title}, ` : ""}
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA] overflow-hidden" data-testid="section-clients">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-14 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Trusted Partners"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="40+ satisfied clients across real estate, healthcare, FMCG and infrastructure."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeIn delay={0.3}>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:text-right">
                Partnerships built on trust, transparency and consistent
                delivery across print, outdoor and digital campaigns.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-8">
        {CLIENT_PARTNER_SEGMENTS.map((segment, rowIndex) => {
          const isStaticSegment = segment.title === "Banking" || segment.logos.length === 1;

          const logoCards = segment.logos.map((logo, logoIndex) => {
            const isTextEntry = logo.startsWith("text:");
            const isXsLogo = logo.startsWith("xs:");
            const isSmallLogo = logo.startsWith("sm:");
            const isMedLogo = logo.startsWith("md:");
            const prefixLen = isXsLogo || isSmallLogo || isMedLogo ? 3 : 0;
            const textLabel = isTextEntry ? logo.slice(5) : null;
            const src = prefixLen ? logo.slice(prefixLen) : logo;
            const isRealEstate = segment.title === "Real Estate";
            const logoSize = isXsLogo
              ? "max-h-10 sm:max-h-12"
              : isSmallLogo
              ? "max-h-14 sm:max-h-16"
              : isMedLogo
              ? "max-h-20 sm:max-h-24"
              : isRealEstate
              ? "max-h-28 sm:max-h-32"
              : "max-h-20 sm:max-h-24";
            const cardHeight = isRealEstate ? "h-[140px]" : "h-[110px]";
            return (
              <div
                key={`${segment.title}-${logoIndex}`}
                className={`mx-2 w-[220px] sm:w-[250px] ${cardHeight} rounded-xl bg-white border border-border/50 flex items-center justify-center px-5 flex-shrink-0`}
                data-testid={`client-logo-${rowIndex}-${logoIndex}`}
              >
                {isTextEntry ? (
                  <span className="font-heading text-xl font-extrabold text-foreground tracking-tight">
                    {textLabel}
                  </span>
                ) : (
                  <img
                    src={src}
                    alt={`${segment.title} partner logo ${logoIndex + 1}`}
                    className={`max-w-full object-contain ${logoSize}`}
                    loading="lazy"
                  />
                )}
              </div>
            );
          });

          return (
            <FadeIn key={segment.title} delay={rowIndex * 0.08}>
              <div className="space-y-4">
                <GlitchText text={segment.title} className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
                <div className="rounded-2xl border border-border/40 bg-white px-2 py-4 shadow-sm overflow-hidden">
                  {isStaticSegment ? (
                    <div className="flex items-center justify-center w-full">{logoCards}</div>
                  ) : (
                    <Marquee
                      direction={rowIndex % 2 === 0 ? "left" : "right"}
                      speed="slow"
                      className="w-full"
                    >
                      {logoCards}
                    </Marquee>
                  )}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function AccreditationSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0C14] overflow-hidden" data-testid="section-accreditation">
      <AccreditationBackgroundShapes />
      <FilmGrain opacity={0.03} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText
                  text="Authority & Trust"
                  className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="Certified to operate at the highest level"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em]"
            />
            <FadeIn delay={0.4}>
              <p className="mt-10 text-white/40 text-base leading-[1.8] max-w-lg" data-testid="text-accreditation-description">
                iConcepts holds INS Accreditation, DIPR Empanelment (Tamil Nadu) and is the exclusively authorized agency for Gulf News in Tamil Nadu —
                granted only to agencies meeting stringent financial, operational
                and compliance standards.
              </p>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TiltCard tiltStrength={12}>
                  <motion.div
                    className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/[0.06]"
                    whileHover={{ y: -6, borderColor: "rgba(194, 24, 24, 0.2)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Desktop: image on top */}
                    <div className="hidden sm:block w-full h-20 lg:h-24 rounded-xl overflow-hidden border border-white/[0.14] mb-6">
                      <img src="/logos/ins-badge.png" alt="INS Accredited Advertising Agency" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {/* Mobile: text left, square image right */}
                    <div className="flex sm:block items-center gap-4">
                      <div className="flex-1">
                        <GlitchText text="Accredited" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em] mb-4" />
                        <h4 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-2">INS</h4>
                        <p className="text-white/30 text-xs leading-relaxed">Indian Newspaper Society verified agency status</p>
                      </div>
                      <div className="sm:hidden w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/[0.14]">
                        <img src="/logos/ins-badge.png" alt="INS" className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
                <TiltCard tiltStrength={12} className="sm:mt-8">
                  <motion.div
                    className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/[0.06]"
                    whileHover={{ y: -6, borderColor: "rgba(194, 24, 24, 0.2)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Desktop: image on top */}
                    <div className="hidden sm:block w-full h-20 lg:h-24 rounded-xl overflow-hidden border border-white/[0.14] mb-6">
                      <img src="/logos/dipr-badge.png" alt="DIPR Government of Tamil Nadu" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {/* Mobile: text left, square image right */}
                    <div className="flex sm:block items-center gap-4">
                      <div className="flex-1">
                        <GlitchText text="Empanelled" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em] mb-4" />
                        <h4 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-2">DIPR</h4>
                        <p className="text-white/30 text-xs leading-relaxed">Tamil Nadu government empanelled agency</p>
                      </div>
                      <div className="sm:hidden w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/[0.14]">
                        <img src="/logos/dipr-badge.png" alt="DIPR" className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
                <TiltCard tiltStrength={12}>
                  <motion.div
                    className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/[0.06]"
                    whileHover={{ y: -6, borderColor: "rgba(194, 24, 24, 0.2)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Desktop: image on top */}
                    <div className="hidden sm:block w-full h-20 lg:h-24 rounded-xl overflow-hidden border border-white/[0.14] mb-6">
                      <img src="/logos/Gulf News logo.png" alt="Gulf News Certified" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {/* Mobile: text left, square image right */}
                    <div className="flex sm:block items-center gap-4">
                      <div className="flex-1">
                        <GlitchText text="Certified" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em] mb-4" />
                        <h4 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-2">Gulf News</h4>
                        <p className="text-white/30 text-xs leading-relaxed">Exclusively authorized agency for Gulf News in Tamil Nadu</p>
                      </div>
                      <div className="sm:hidden w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/[0.14] bg-black">
                        <img src="/logos/Gulf News logo.png" alt="Gulf News" className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact-form" className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-contact">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="sticky top-28">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-primary" />
                  <GlitchText
                    text="Contact"
                    className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
                  />
                </div>
                <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-[-0.02em] mb-6 sm:mb-8">
                  <TypewriterText text="Let's" speed={80} cursor={false} />
                  <br />
                  <TypewriterText text="talk" speed={80} delay={400} /><span className="text-primary">.</span>
                </h2>
                <p className="text-muted-foreground text-base leading-[1.8] max-w-md mb-10">
                  Whether it's a large-scale campaign or a strategic brand initiative,
                  we're ready to bring your vision to life.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
                    <p className="text-foreground text-sm">Chennai, Tamil Nadu, India</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
                    <a href="mailto:connect@iconcepts.in" className="text-primary text-sm hover:underline">
                      connect@iconcepts.in
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeBand />
      <ServicesCluster />
      <ManifestoSection />
      <BigScrollStatement />
      <StatsStrip />
      <DepartmentsSection />
      <TestimonialsSection />
      <ClientsSection />
      <AccreditationSection />
      <ContactSection />
    </main>
  );
}
