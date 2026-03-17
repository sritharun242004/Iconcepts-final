import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { FadeIn, GlitchText } from "@/components/animations";

type ShowcaseAsset = {
  id: string;
  title: string;
  image: string;
  accent: string;
};

const SHOWCASE_ASSETS: ShowcaseAsset[] = [
  {
    id: "own-this-stop",
    title: "Own This Stop",
    image: "/focus-assets/own-this-stop.png",
    accent: "hsl(43 69% 58%)",
  },
  {
    id: "ads-on-wheels",
    title: "Ads On Wheels",
    image: "/focus-assets/ads-on-wheels.png",
    accent: "hsl(49 86% 62%)",
  },
  {
    id: "city-coverage",
    title: "Let's Cover The Entire City",
    image: "/focus-assets/city-coverage.png",
    accent: "hsl(151 61% 45%)",
  },
];

const FACE_COUNT = SHOWCASE_ASSETS.length;
const FACE_ANGLE = 360 / FACE_COUNT;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Interactive3DShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const dragRef = useRef<{ active: boolean; x: number; y: number; pointerId: number | null }>({
    active: false,
    x: 0,
    y: 0,
    pointerId: null,
  });

  const rawRotateX = useMotionValue(-9);
  const rawRotateY = useMotionValue(15);
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 24, mass: 0.32 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 24, mass: 0.32 });

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || dragRef.current.active) return;
    rawRotateY.set(rawRotateY.get() + delta * 0.009);
  });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    event.preventDefault();
    dragRef.current.active = true;
    dragRef.current.pointerId = event.pointerId;
    dragRef.current.x = event.clientX;
    dragRef.current.y = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return;

    const dx = event.clientX - dragRef.current.x;
    const dy = event.clientY - dragRef.current.y;

    rawRotateY.set(rawRotateY.get() + dx * 0.42);
    rawRotateX.set(clamp(rawRotateX.get() - dy * 0.26, -24, 24));

    dragRef.current.x = event.clientX;
    dragRef.current.y = event.clientY;
  };

  const endPointerDrag = (event?: React.PointerEvent<HTMLDivElement>) => {
    if (event && dragRef.current.pointerId !== null && dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragRef.current.active = false;
    dragRef.current.pointerId = null;
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0C14] py-16 sm:py-20 lg:py-24" data-testid="section-interactive-3d-showcase">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[16%] top-[24%] h-[360px] w-[360px] rounded-full bg-primary/11 blur-[120px]" />
        <div className="absolute -right-[14%] bottom-[16%] h-[360px] w-[360px] rounded-full bg-brand-blue/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <GlitchText
              text="Why This View"
              className="text-primary text-sm font-mono font-bold uppercase tracking-[0.3em]"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-[-0.02em] max-w-4xl">
            Great transit-led ideas should hold attention from every angle.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/45">
            Real audiences do not see campaign assets as flat mockups. They pass by in motion, from different viewpoints and distances. This view helps you evaluate clarity, brand recall, and visual impact before rollout.
          </p>
        </FadeIn>

        {prefersReducedMotion ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {SHOWCASE_ASSETS.map((asset, i) => (
              <FadeIn key={asset.id} delay={i * 0.08}>
                <article className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-3">
                  <div className="rounded-xl border border-white/[0.08] bg-[#0E1422] overflow-hidden">
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="aspect-[16/11] w-full object-contain p-4 pointer-events-none select-none"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <p className="mt-3 text-white/80 text-sm font-heading font-bold">{asset.title}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="mt-12 lg:mt-16">
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-[980px]">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[470px] [perspective:1500px]">
                  <motion.div
                    className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none select-none"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endPointerDrag}
                    onPointerCancel={endPointerDrag}
                    onLostPointerCapture={endPointerDrag}
                  >
                    <motion.div
                      style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                      className="relative h-full w-full pointer-events-none"
                    >
                      {SHOWCASE_ASSETS.map((asset, index) => (
                        <div
                          key={asset.id}
                          className="absolute left-1/2 top-1/2 h-[250px] w-[280px] sm:h-[290px] sm:w-[340px] lg:h-[330px] lg:w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.16] bg-[#0B111E]/95 shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                          style={{
                            transform: `translate(-50%, -50%) rotateY(${index * FACE_ANGLE}deg) translateZ(180px)`,
                          }}
                        >
                          <div className="h-full w-full rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-transparent p-4 lg:p-5">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-2.5 py-1">
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ backgroundColor: asset.accent }}
                              />
                              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-white/75">
                                {asset.title}
                              </span>
                            </div>
                            <img
                              src={asset.image}
                              alt={asset.title}
                              className="h-[calc(100%-28px)] w-full object-contain pointer-events-none select-none"
                              loading="lazy"
                              draggable={false}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <div className="pointer-events-none absolute inset-x-[10%] bottom-6 h-10 rounded-full bg-black/40 blur-2xl" />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4">
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-white/45">
                    Rotate to test clarity from every perspective
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      rawRotateX.set(-9);
                      rawRotateY.set(15);
                    }}
                    className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-white/70 hover:border-primary/35 hover:text-white transition-colors"
                  >
                    Reset View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
