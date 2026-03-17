import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform, type MotionStyle, type MotionValue } from "framer-motion";
import { useRef, useEffect, useState, useCallback, type ReactNode } from "react";
import { SIGNATURE_ORBIT_TEXT } from "@/lib/constants";

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();

  const offsets = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsets[direction].y, x: offsets[direction].x, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  tag: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <div ref={ref}><Tag className={className}>{text}</Tag></div>;
  }

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

export function SplitTextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div ref={ref} className={className}>{text}</div>;
  }

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const wordChars = word.split("");
        const wordElement = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {wordChars.map((char, ci) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90, filter: "blur(4px)" }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
                  transition={{
                    duration: 0.7,
                    delay: delay + i * 0.018,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charIndex++; // account for the space
        return wi < words.length - 1 ? (
          <span key={`w${wi}`}>{wordElement}{" "}</span>
        ) : (
          wordElement
        );
      })}
    </div>
  );
}

export function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      setCount(end);
      return;
    }
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function MagneticElement({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 12, mass: 0.5 });

  const handleMouse = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function RevealOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={isInView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`h-[1px] bg-border ${className}`}
      initial={{ scaleX: 0 }}
      animate={isInView && !reduced ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
    />
  );
}

export function TextScramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = useCallback(() => {
    if (reduced) {
      setDisplayText(text);
      return;
    }
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return text[i];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [text, reduced, chars]);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(scramble, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, scramble, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const animClass = reduced
    ? ""
    : direction === "left"
      ? speed === "slow"
        ? "animate-marquee-left-slow"
        : "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div className={`flex shrink-0 gap-0 ${animClass}`}>
        {children}
        {!reduced && children}
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))",
        boxShadow: "0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.2)",
      }}
    />
  );
}

export function MouseFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 30, damping: 18 });
  const springY = useSpring(y, { stiffness: 30, damping: 18 });

  const dotX = useSpring(x, { stiffness: 160, damping: 16, mass: 0.5 });
  const dotY = useSpring(y, { stiffness: 160, damping: 16, mass: 0.5 });

  const [onRed, setOnRed] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      // Detect red background under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      let node: HTMLElement | null = el;
      let found = false;
      while (node && node !== document.body) {
        const bg = getComputedStyle(node).backgroundColor;
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (m && +m[1] > 140 && +m[2] < 60 && +m[3] < 60) { found = true; break; }
        node = node.parentElement;
      }
      setOnRed(found);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y, reduced]);

  if (reduced) return null;

  return (
    <>
      {/* Ambient glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] w-[500px] h-[500px] rounded-full hidden lg:block mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, hsl(var(--primary) / 0.02) 35%, transparent 65%)",
        }}
      />

      {/* Dot — red default, white on red backgrounds */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            backgroundColor: onRed ? "#ffffff" : "#C21818",
            boxShadow: onRed ? "0 0 8px rgba(255,255,255,0.5)" : "0 0 8px rgba(194,24,24,0.5)",
          }}
          transition={{ duration: 0.15 }}
          style={{ width: 12, height: 12, borderRadius: "50%" }}
        />
      </motion.div>
    </>
  );
}

export function SignatureOrbit({
  text = SIGNATURE_ORBIT_TEXT,
  size = 120,
  className = "",
  progress,
  minOpacity = 0.06,
  maxOpacity = 0.14,
}: {
  text?: string;
  size?: number;
  className?: string;
  progress?: MotionValue<number>;
  minOpacity?: number;
  maxOpacity?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const chars = text.toUpperCase().split("");
  const degreesPerChar = 360 / Math.max(chars.length, 1);
  const fallbackProgress = useMotionValue(0);
  const progressValue = progress ?? fallbackProgress;
  const rotate = useTransform(progressValue, [0, 1], reduced ? [0, 0] : [0, 72]);
  const orbitOpacity = useTransform(
    progressValue,
    [0, 0.5, 1],
    reduced ? [maxOpacity, maxOpacity, maxOpacity] : [minOpacity, maxOpacity, minOpacity]
  );
  const orbitScale = useTransform(progressValue, [0, 1], reduced ? [1, 1] : [0.98, 1.02]);
  const orbitPalette = [
    "hsl(var(--primary) / 0.42)",
    "hsl(var(--primary) / 0.3)",
    "hsl(var(--primary) / 0.24)",
    "hsl(0 0% 100% / 0.18)",
  ];
  const bubbles = [
    { x: "22%", y: "30%", size: 8, delay: 0 },
    { x: "74%", y: "28%", size: 10, delay: 0.4 },
    { x: "78%", y: "62%", size: 7, delay: 0.8 },
    { x: "38%", y: "78%", size: 9, delay: 0.2 },
    { x: "18%", y: "58%", size: 6, delay: 0.65 },
  ];

  return (
    <motion.div
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="relative w-full h-full"
        style={reduced ? {} : { opacity: orbitOpacity, scale: orbitScale }}
      >
        {/* Flexible red bubble core */}
        <motion.div
          className="absolute inset-[24%] rounded-[42%] blur-[0.2px]"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, hsl(var(--primary) / 0.75) 0%, hsl(var(--primary) / 0.52) 42%, hsl(var(--primary) / 0.3) 76%, transparent 100%)",
            boxShadow:
              "0 0 0 1px hsl(var(--primary) / 0.25) inset, 0 0 34px hsl(var(--primary) / 0.28)",
          }}
          animate={
            reduced
              ? {}
              : {
                  borderRadius: ["46% 54% 40% 60% / 56% 42% 58% 44%", "58% 42% 54% 46% / 48% 56% 44% 52%", "50% 50% 42% 58% / 54% 48% 52% 46%", "46% 54% 40% 60% / 56% 42% 58% 44%"],
                  scale: [1, 1.05, 0.98, 1],
                  rotate: [0, -6, 5, 0],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bubble particles */}
        {bubbles.map((bubble, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
              background:
                "radial-gradient(circle at 35% 35%, hsl(var(--primary) / 0.65) 0%, hsl(var(--primary) / 0.3) 72%, transparent 100%)",
              boxShadow: "0 0 10px hsl(var(--primary) / 0.2)",
            }}
            animate={
              reduced
                ? {}
                : {
                    y: [0, -6, 0],
                    x: [0, 2, 0],
                    scale: [0.95, 1.12, 0.95],
                    opacity: [0.35, 0.7, 0.35],
                  }
            }
            transition={{
              duration: 3.2 + (i % 3) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}

        <motion.div className="absolute inset-0" style={reduced ? {} : { rotate }}>
        {chars.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="absolute left-1/2 top-0 select-none font-mono font-bold uppercase leading-none tracking-[0.18em] text-[9px]"
            style={{
              transform: `rotate(${i * degreesPerChar}deg)`,
              transformOrigin: `0 ${size / 2}px`,
              color: orbitPalette[i % orbitPalette.length],
            }}
          >
            {char}
          </span>
        ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Rotating circular text badge — very creative agency feel
export function RotatingTextBadge({
  text,
  size = 120,
  className = "",
}: {
  text: string;
  size?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const chars = text.split("");
  const degreesPerChar = 360 / chars.length;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={reduced ? {} : { rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-0 text-[10px] font-mono font-bold uppercase tracking-widest origin-[0_60px]"
          style={{
            transform: `rotate(${i * degreesPerChar}deg)`,
            transformOrigin: `0 ${size / 2}px`,
          }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
}

// 3D tilt card that tracks cursor position
export function TiltCard({
  children,
  className = "",
  tiltStrength = 10,
}: {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(-percentY * tiltStrength);
    rotateY.set(percentX * tiltStrength);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      } as MotionStyle}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glitch text effect — creative agency energy
export function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <span
      ref={ref}
      className={`glitch-text ${isInView ? "glitch-active" : ""} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
}

// Typewriter text effect
export function TypewriterText({
  text,
  className = "",
  speed = 40,
  delay = 0,
  cursor = true,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(cursor);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      setDisplayText(text);
      setShowCursor(false);
      return;
    }

    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1500);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay, reduced]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {showCursor && isInView && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

// Film grain overlay — editorial/print feel
export function FilmGrain({ opacity = 0.03 }: { opacity?: number }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// Animated gradient text
export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--brand-blue)), hsl(var(--brand-lime)), hsl(var(--primary)))",
      }}
    >
      {children}
    </span>
  );
}

// Draw SVG path on scroll
export function DrawOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ "--draw-progress": pathLength } as MotionStyle}>
        {children}
      </motion.div>
    </div>
  );
}

// Horizontal scroll text — creative agencies love this
export function HorizontalScrollText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-65%"]);
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={reduced ? {} : { x }} className="whitespace-nowrap">
        <span className="font-heading text-[clamp(1.75rem,5.2vw,6rem)] font-extrabold leading-none tracking-[-0.02em]">
          {text}
        </span>
      </motion.div>
    </div>
  );
}

// Staggered text where each line slides in from alternating directions
export function SlideInText({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
