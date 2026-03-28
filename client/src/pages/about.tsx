import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Trophy3D } from "@/components/trophy3d";
import { ArrowRight } from "lucide-react";
import {
  FadeIn,
  SplitTextReveal,
  StaggerContainer,
  StaggerItem,
  MagneticElement,
  Parallax,
  GlitchText,
  FilmGrain,
  TiltCard,
  SignatureOrbit,
} from "@/components/animations";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";
import { scrollToContact } from "@/lib/utils";

function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:h-screen flex flex-col justify-end bg-[#F8F8F8] overflow-hidden"
      data-testid="section-about-hero"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div className="absolute top-[12%] right-[3%] z-[2] scale-[0.6] md:scale-[0.73] lg:scale-100 origin-top-right">
        <SignatureOrbit
          text={SIGNATURE_ORBIT_TEXT}
          size={120}
          progress={scrollYProgress}
          minOpacity={0.06}
          maxOpacity={0.18}
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-[15%] left-[25%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full border border-foreground/[0.04]"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-24 pt-32 sm:pt-36 lg:pt-0">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Headline + para */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.5rem,7vw,8rem)] font-extrabold text-foreground leading-[0.88] tracking-[-0.03em] max-w-5xl"
              data-testid="text-about-headline"
            >
              Built on
              <br />
              <span className="font-display italic text-primary">experience.</span>
              <br />
              Driven by
              <br />
              <span className="text-foreground/20">discipline.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-muted-foreground text-sm leading-relaxed max-w-md"
            >
              Founded with a clear focus: to serve brands that require structured and result oriented advertising solutions.
            </motion.p>
          </div>

          {/* Right: 3D rotating award trophy */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Trophy3D className="w-[280px] lg:w-[340px] h-[480px] lg:h-[560px] -translate-y-16" />
            <p className="text-center text-foreground text-sm leading-relaxed max-w-sm -mt-10">
              Received the <span className="font-bold text-primary">2025 Gold Award</span> from the <span className="font-semibold">Public Relations Society of India</span> under the <span className="font-semibold italic">Best Corporate Brochure</span> category.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-story">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Our Story" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn delay={0.1}>
              <p className="font-display italic text-3xl md:text-4xl lg:text-[2.5rem] text-foreground leading-[1.25] tracking-[-0.01em]">
                <span className="text-primary">From print-led advertising to fully integrated 360° campaigns.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-10 text-muted-foreground text-base leading-[1.8]">
                Our growth has been shaped by years of managing large media spends,
                multi-market campaigns and complex execution requirements. We operate
                with the understanding that advertising at scale demands systems,
                compliance and accountability.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="mt-6 text-muted-foreground text-base leading-[1.8]">
                iConcepts has evolved alongside the advertising landscape - <strong>serving 40+ satisfied clients over 19+ years.</strong> Our strength lies in combining proven fundamentals with cost-effective planning and a focused, results-driven approach...
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-4">
            <StaggerContainer staggerDelay={0.12} className="space-y-0">
              {[
                { phase: "01", title: "Agency Established", desc: "Built with a focus on structured advertising solutions, since 2007" },
                { phase: "02", title: "INS Accreditation", desc: "Through consistent hard work and structured growth, we earned INS accreditation in 2010" },
                { phase: "03", title: "DIPR Empanelment", desc: "Rather than resting on our laurels, we strengthened our efforts and successfully obtained DIPR empanelment in 2022" },
                { phase: "04", title: "40+ Clients", desc: "Serving India's leading brands across industries" },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="group py-6 border-b border-border/30 last:border-0" data-testid={`timeline-item-${i}`}>
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-2xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors mt-1">
                        {item.phase}
                      </span>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

const TEAM_MEMBERS = [
  {
    name: "Prakash",
    designation: "Founder",
    about: "Prakash holds a Postgraduate Degree in Public Administration from the University of Madras and a Law Degree from Tamil Nadu Dr. Ambedkar Law University, with over three decades of experience in advertising. He spent 10 years working with leading advertising agencies in New Delhi, gaining extensive industry exposure. Since 1992, he headed Chaya Advertising Private Limited, and later founded I Concepts in 2007. A versatile leader with a keen eye for creativity and detail, Prakash is a seasoned professional with wide exposure in handling clients across various industries, including cement, steel, retail, real estate, banking, and government organisations. Prakash currently leads I Concepts as its Founder and Director, driving the company's vision and creative excellence.",
    isFounder: true,
    initials: "P",
    image: "/team/WhatsApp Image 2026-03-24 at 14.16.23.jpeg",
  },
  {
    name: "Geetha Prakash",
    designation: "Finance Head",
    about: "Geetha Prakash is a Postgraduate with a Law Degree. She has extensive experience in Retail, Management, Administration, and Accounts and has been leading I Concepts since its inception. She oversees administration and accounts operations for the company. Thanks to her meticulous accounts and cash management practices, I Concepts has maintained a strong financial position with zero borrowings and a healthy surplus cash flow.",
    isFounder: false,
    initials: "GP",
    image: "/team/geetha.png",
  },
  {
    name: "Parvatham",
    designation: "Media Manager",
    about: "Parvatham is a Postgraduate in Mass Communication. An advertising professional with over 3 decades of experience in the advertising industry and in Newspaper Industry, specializing in media operations and media planning. Parvatham has extensive experience in handling Government and PSU clients such as TNPL, TIDEL, Powerfin, Railways, ICF, NLC, and NHAI, as well as clients from the banking sector including Indian Bank and City Union Bank. Currently Parvatham heads the Media Department of IConcepts independently managing Real Estate clients and maintaining strong professional relationships with publications, radio stations, and television channels. Known for effective media strategy, campaign planning, and strong public relations within the media industry.",
    isFounder: false,
    initials: "PA",
    image: "/team/parvatham.jpg",
  },
  {
    name: "P. Umamaheswari",
    designation: "Client Service Manager",
    about: "P. Umamaheswari brings 15+ years of experience in Print, Radio, Television, Outdoor & Digital advertising. She possesses extensive expertise in end-to-end client servicing and multi-platform campaign execution. With a deep understanding of the media landscape, she ensures seamless coordination between clients, creative teams, and media partners. Focused on delivering value-driven advertising solutions while building and sustaining long-term client relationships.",
    isFounder: false,
    initials: "PU",
    image: "/team/umamaheswari.jpg",
  },
  {
    name: "Venkatesh",
    designation: "Senior Executive",
    about: "Venkatesh is a marketing professional with over 5 years of experience in the print media industry, handling clients across retail, education, banking, and real estate sectors. His expertise includes ATL and BTL campaigns, client servicing, and event activations, with a strong track record of delivering measurable impact. He has a proven ability to coordinate seamlessly with vendors and internal teams, combining strategic planning with creative execution to enhance brand visibility and drive successful marketing outcomes.",
    isFounder: false,
    initials: "VK",
    image: "/team/venkatesh.jpg",
  },
  {
    name: "Suresh",
    designation: "Accounts Head",
    about: "A seasoned accounting professional with over 20 years of comprehensive experience across all facets of accounting, auditing, and financial management. Possesses strong expertise in Tally and a proven track record in finalising complete books of accounts with precision and compliance. Known for his unwavering integrity, meticulous approach, and high standards of accuracy, Suresh brings discipline and clarity to financial processes. A dedicated and dependable professional, he consistently ensures efficiency, transparency, and reliability in all accounting functions.",
    isFounder: false,
    initials: "S",
    image: "/team/suresh.png",
  },
];

function FounderBorder() {
  // SVG traveling red line — viewBox matches 3:4 aspect ratio (300×400)
  // Rect perimeter ≈ 2 × (296 + 396) = 1384 units
  return (
    <motion.svg
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    >
      <motion.rect
        x="2" y="2"
        width="296" height="396"
        rx="14" ry="14"
        fill="none"
        stroke="#C21818"
        strokeWidth="2.5"
        strokeDasharray="90 1294"
        animate={{ strokeDashoffset: [0, -1384] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}

function TeamCard({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      {/* Perspective wrapper */}
      <motion.div
        whileHover="hovered"
        initial="rest"
        className="relative aspect-[3/4] max-h-[420px] cursor-default select-none"
        style={{ perspective: 1000 }}
      >
        {/* Founder border sits outside the flipping card */}
        {member.isFounder && (
          <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none overflow-hidden">
            <FounderBorder />
          </div>
        )}

        {/* Flipping card */}
        <motion.div
          variants={{ rest: { rotateY: 0 }, hovered: { rotateY: 180 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}
          className="relative w-full h-full"
        >
          {/* FRONT — image + name */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 rounded-2xl overflow-hidden bg-zinc-900"
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                <span className="text-white/10 font-heading text-7xl font-extrabold">{member.initials}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 px-4 pb-4 pt-10">
              <p className="font-heading text-white text-sm font-bold leading-tight">{member.name}</p>
              <p className="text-white/40 text-[10px] font-mono mt-0.5">{member.designation}</p>
            </div>
          </div>

          {/* BACK — info panel */}
          <div
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            className="absolute inset-0 rounded-2xl overflow-y-auto bg-[#0A0C14] flex flex-col justify-end p-6 border border-white/[0.07]"
          >
            <p className="text-primary text-[9px] font-mono font-bold uppercase tracking-[0.22em] mb-1.5">
              {member.designation}
            </p>
            <h3 className="font-heading text-white text-base font-extrabold leading-tight mb-3">
              {member.name}
            </h3>
            <p className="text-white/90 text-[11px] leading-relaxed">{member.about}</p>
            {member.isFounder && (
              <div className="mt-4 flex items-center gap-2">
                <div className="w-4 h-[1px] bg-primary" />
                <span className="text-primary text-[9px] font-mono uppercase tracking-[0.2em]">Founder</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
}

function TeamSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-team">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <GlitchText text="Our Team" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
          </div>
        </FadeIn>
        <SplitTextReveal
          text="The people behind the work."
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-3xl mb-14"
        />
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {TEAM_MEMBERS.slice(0, 3).map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
        {/* Row 2 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.slice(3).map((member, i) => (
            <TeamCard key={i + 3} member={member} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-awards">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Recognition" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="PRSI State Award 2025 — Gold."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 text-muted-foreground text-base leading-[1.8]">
                iConcepts was honoured with the Gold Award at the PRSI State Awards 2025,
                organised by the Public Relations Society of India, Chennai Chapter. The ceremony,
                held at MMA Hall, Anna Salai, Chennai, recognised outstanding achievements in
                public relations, corporate communication and advertising across 40+ categories.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="mt-4 text-muted-foreground text-base leading-[1.8]">
                Presided over by Dr. Ajit Pathak (National President, PRSI) and attended by over
                250 industry professionals, the event presented nearly 115 awards. This recognition
                affirms iConcepts' commitment to structured, result-oriented advertising and
                creative excellence across every medium we operate in.
              </p>
            </FadeIn>
            <FadeIn delay={0.9}>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary text-sm font-mono font-bold uppercase tracking-[0.2em]">Gold Award — Advertising Excellence</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-lg">
              <img
                src="/team/award.jpeg"
                alt="iConcepts team receiving the PRSI State Gold Award 2025"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/20 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                <span className="text-white text-[11px] font-mono uppercase tracking-[0.16em]">
                  PRSI State Awards 2025
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-certification">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Why It Matters" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
            <SplitTextReveal
              text="What certification means for our clients."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em]"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 text-white/40 text-base leading-[1.8] font-display italic text-xl">
                "Simply put, certification assures accountability."
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 lg:pl-16">
            <StaggerContainer staggerDelay={0.15} className="space-y-6">
              {[
                { num: "01", title: "Financial Stability", desc: "INS accreditation reflects verified financial standing and operational credibility within the advertising ecosystem." },
                { num: "02", title: "Regional Dominance", desc: "DIPR empanelment enables us to handle advertising for the Tamil Nadu Government and its subsidiaries." },
                { num: "03", title: "Transparent Operations", desc: "The strength of IConcepts lies in its integrity-driven and transparent approach, ensuring every rupee is stretched to deliver maximum mileage." },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <TiltCard tiltStrength={6}>
                  <motion.div
                    className="group flex gap-6 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-all duration-500"
                    whileHover={{ x: 8 }}
                    data-testid={`cert-card-${i}`}
                  >
                    <span className="font-mono text-3xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors flex-shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const steps = [
    { title: "Understand", desc: "Deep dive into your brand, market and objectives" },
    { title: "Strategise", desc: "Develop a comprehensive plan aligned with your goals" },
    { title: "Create", desc: "Craft compelling creative that resonates at scale" },
    { title: "Execute", desc: "Implement across media with precision and accountability" },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFAFA]" data-testid="section-how-we-work">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-primary" />
                <GlitchText text="Process" className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]" />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <SplitTextReveal
              text="An established process from briefing to execution - a seamless integration."
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-[-0.02em]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border/30">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group py-12 lg:py-16 pr-8 border-b sm:border-b-0 sm:border-r border-border/30 last:border-0" data-testid={`step-${i}`}>
                <span className="text-primary/20 font-mono text-5xl lg:text-6xl font-bold block mb-6 group-hover:text-primary/40 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0C14]" data-testid="section-about-cta">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Parallax speed={-0.15}>
          <FadeIn>
            <p className="font-display italic text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-[-0.02em]">
              Let's build something together.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-12 flex items-center gap-6">
              <MagneticElement strength={0.2}>
                <motion.button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full cursor-pointer"
                  whileHover={{ scale: 1.05, gap: "16px" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="button-about-contact"
                >
                  Start a Conversation
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </MagneticElement>
            </div>
          </FadeIn>
        </Parallax>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <TeamSection />
      <AwardsSection />
      <CertificationSection />
      <HowWeWorkSection />
      <AboutCTA />
    </main>
  );
}
