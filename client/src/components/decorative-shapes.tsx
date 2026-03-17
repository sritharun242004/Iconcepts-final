import { motion } from "framer-motion";

// Megaphone / bullhorn — advertising & broadcasting
export function MegaphoneShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className}>
      <path
        d="M20 55L20 45C20 42 22 40 25 40L55 40L90 20C93 18 96 20 96 23L96 77C96 80 93 82 90 80L55 60L25 60C22 60 20 58 20 55Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M55 40L55 60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Sound waves */}
      <path d="M102 38C106 42 106 58 102 62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M108 30C116 38 116 62 108 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// Newspaper fold — print media
export function NewspaperShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className}>
      <rect x="15" y="15" width="70" height="70" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Fold corner */}
      <path d="M85 15L85 35L105 35" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M85 15L105 35" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Text lines */}
      <line x1="25" y1="30" x2="55" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="25" y1="38" x2="45" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="56" x2="75" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="62" x2="75" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="68" x2="55" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

// Light bulb — ideas / creative thinking
export function LightbulbShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 110" fill="none" className={className}>
      <path
        d="M40 10C25 10 14 21 14 36C14 46 20 54 28 58L28 72C28 74 30 76 32 76L48 76C50 76 52 74 52 72L52 58C60 54 66 46 66 36C66 21 55 10 40 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Filament */}
      <path d="M34 45C37 40 43 40 46 45" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Base ridges */}
      <line x1="30" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="32" y1="84" x2="48" y2="84" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M35 88C35 92 45 92 45 88" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      {/* Glow rays */}
      <line x1="40" y1="2" x2="40" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="60" y1="8" x2="57" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="20" y1="8" x2="23" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="24" x2="66" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="10" y1="24" x2="14" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

// Billboard / hoarding — outdoor advertising
export function BillboardShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 100" fill="none" className={className}>
      {/* Board */}
      <rect x="10" y="10" width="110" height="55" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Poles */}
      <line x1="35" y1="65" x2="35" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="95" y1="65" x2="95" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {/* Content suggestion */}
      <rect x="18" y="18" width="40" height="38" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <line x1="66" y1="24" x2="110" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <line x1="66" y1="32" x2="100" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <line x1="66" y1="38" x2="105" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <line x1="66" y1="44" x2="90" y2="44" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      {/* Spotlight */}
      <line x1="55" y1="65" x2="45" y2="75" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
      <line x1="75" y1="65" x2="85" y2="75" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
    </svg>
  );
}

// Pen nib — creative design
export function PenNibShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" fill="none" className={className}>
      <path
        d="M30 110L18 60L12 30C12 18 20 10 30 10C40 10 48 18 48 30L42 60L30 110Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Slit */}
      <line x1="30" y1="55" x2="30" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Hole */}
      <circle cx="30" cy="48" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Ink splash dots */}
      <circle cx="30" cy="114" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="26" cy="116" r="0.8" fill="currentColor" opacity="0.2" />
      <circle cx="34" cy="115" r="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// Signal / broadcast waves — media reach
export function BroadcastShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Tower */}
      <line x1="50" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="40" y1="90" x2="60" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="50" cy="48" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      {/* Waves */}
      <path d="M38 38C42 32 58 32 62 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M30 28C38 18 62 18 70 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M22 18C34 4 66 4 78 18" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

// Target / bullseye — strategy & precision
export function TargetShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
      {/* Arrow */}
      <line x1="75" y1="25" x2="54" y2="46" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M75 25L68 27L73 32Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// Organic blob shape — ting.in style
export function BlobShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path
        d="M45 65C30 45 50 15 80 20C110 25 130 10 155 30C180 50 185 80 170 110C155 140 170 165 145 180C120 195 85 185 60 170C35 155 60 85 45 65Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  );
}

// Small sparkle/doodle burst
export function SparkleShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M40 12L44 28L60 32L44 36L40 52L36 36L20 32L36 28L40 12Z" stroke="currentColor" strokeWidth="1.4" />
      <line x1="40" y1="2" x2="40" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="56" x2="40" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="62" y1="32" x2="68" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

// Ribbon squiggle — editorial micro illustration
export function RibbonShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 70" fill="none" className={className}>
      <path
        d="M8 36C24 12 48 12 64 36C80 60 104 60 120 36C136 12 160 12 172 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <circle cx="8" cy="36" r="2" fill="currentColor" opacity="0.45" />
      <circle cx="172" cy="30" r="2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

// Animated hero background with advertising-themed shapes
export function HeroBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Megaphone — top right, main accent */}
      <motion.div
        className="absolute top-[8%] right-[6%] w-24 sm:w-40 lg:w-56 text-brand-blue/10 sm:text-brand-blue/15"
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <MegaphoneShape />
      </motion.div>

      {/* Newspaper — top left area */}
      <motion.div
        className="absolute top-[18%] left-[5%] w-20 sm:w-28 lg:w-36 text-brand-violet/10 sm:text-brand-violet/15"
        animate={{ y: [5, -10, 5], rotate: [3, -1, 3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <NewspaperShape />
      </motion.div>

      {/* Light bulb — center right, ideas */}
      <motion.div
        className="absolute top-[35%] right-[22%] w-12 sm:w-16 lg:w-24 text-brand-lime/15 sm:text-brand-lime/20"
        animate={{ y: [-12, 4, -12], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <LightbulbShape />
      </motion.div>

      {/* Broadcast waves — right side middle */}
      <motion.div
        className="absolute top-[55%] right-[8%] w-20 lg:w-28 text-brand-violet/20 hidden md:block"
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <BroadcastShape />
      </motion.div>

      {/* Pen nib — left lower area, creative */}
      <motion.div
        className="absolute bottom-[35%] left-[25%] w-12 lg:w-16 text-brand-blue/15 hidden lg:block"
        animate={{ rotate: [-5, 5, -5], y: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <PenNibShape />
      </motion.div>

      {/* Large organic blob background — ting.in style */}
      <motion.div
        className="absolute -top-[10%] -right-[5%] w-[50vw] h-[50vw] text-brand-blue/15"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <BlobShape />
      </motion.div>

      {/* Sparkle burst */}
      <motion.div
        className="absolute top-[24%] left-[42%] w-10 lg:w-14 text-brand-lime/45 hidden md:block"
        animate={{ rotate: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleShape />
      </motion.div>

      {/* Ribbon doodle */}
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-40 lg:w-52 text-brand-violet/25 hidden lg:block"
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <RibbonShape />
      </motion.div>

      {/* Subtle gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      {/* Vertical accent line */}
      <div className="absolute top-[25%] left-[8%] w-[1px] h-[25vh] bg-gradient-to-b from-transparent via-brand-lime/30 to-transparent" />
    </div>
  );
}

// Decorative shapes for the Services section
export function ServicesBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[10%] right-[5%] w-20 text-brand-blue/20"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <TargetShape />
      </motion.div>
      <motion.div
        className="absolute top-[32%] left-[8%] w-12 text-brand-lime/30 hidden md:block"
        animate={{ rotate: [0, 24, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleShape />
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] left-[3%] w-32 text-brand-violet/15"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <BlobShape />
      </motion.div>
    </div>
  );
}

// Decorative shapes for Testimonials section
export function TestimonialsBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[15%] right-[8%] w-24 text-brand-blue/15 hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <MegaphoneShape />
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-20 text-brand-lime/20 hidden lg:block"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <BroadcastShape />
      </motion.div>
    </div>
  );
}

// Decorative shapes for Accreditation section
export function AccreditationBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />
      <motion.div
        className="absolute top-[20%] right-[5%] w-36 text-brand-blue/15"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <BlobShape />
      </motion.div>
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-16 text-brand-lime/20 hidden lg:block"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <NewspaperShape />
      </motion.div>
    </div>
  );
}
