"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ====================== Icon set ====================== */
/* 15 little burst shapes. Each receives only `size` — color is applied
   by the parent via currentColor. Keep them all on a 24x24 viewBox so
   the random size/rotation animations stay consistent. */

type IconProps = { size: number };
const Box = ({ children, size }: { children: React.ReactNode; size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

function Heart({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Box>
  );
}
function Star({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </Box>
  );
}
function Sparkle({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M12 0 L 14 9 L 24 12 L 14 15 L 12 24 L 10 15 L 0 12 L 10 9 Z" />
    </Box>
  );
}
function Flower({ size }: IconProps) {
  return (
    <Box size={size}>
      <g strokeWidth="0">
        <circle cx="12" cy="6" r="3.5" />
        <circle cx="18" cy="12" r="3.5" />
        <circle cx="12" cy="18" r="3.5" />
        <circle cx="6" cy="12" r="3.5" />
        <circle cx="12" cy="12" r="2.5" fill="white" />
      </g>
    </Box>
  );
}
function Smiley({ size }: IconProps) {
  return (
    <Box size={size}>
      <circle cx="12" cy="12" r="10" strokeWidth="0" />
      <circle cx="9" cy="10" r="1.2" fill="white" strokeWidth="0" />
      <circle cx="15" cy="10" r="1.2" fill="white" strokeWidth="0" />
      <path d="M8 14 q 4 4 8 0" fill="none" stroke="white" strokeWidth="1.6" />
    </Box>
  );
}
function MusicNote({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M9 18 a 3 2.5 0 1 0 2 -2.5 V 5 l 9 -2 v 11.5 a 3 2.5 0 1 0 2 -2.5 V 2 L 9 4 Z" />
    </Box>
  );
}
function Bolt({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M13 1 L 4 14 H 11 L 9 23 L 20 9 H 13 Z" />
    </Box>
  );
}
function Sun({ size }: IconProps) {
  return (
    <Box size={size}>
      <circle cx="12" cy="12" r="4" strokeWidth="0" />
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M12 2 v 3" />
        <path d="M12 19 v 3" />
        <path d="M2 12 h 3" />
        <path d="M19 12 h 3" />
        <path d="M4.9 4.9 l 2.1 2.1" />
        <path d="M17 17 l 2.1 2.1" />
        <path d="M4.9 19.1 l 2.1 -2.1" />
        <path d="M17 7 l 2.1 -2.1" />
      </g>
    </Box>
  );
}
function Moon({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M21 14 A 9 9 0 1 1 10 3 A 7 7 0 0 0 21 14 Z" />
    </Box>
  );
}
function Leaf({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M20 4 C 9 4 4 13 4 20 c 7 0 16 -5 16 -16 z" />
      <path d="M4 20 L 13 11" stroke="white" strokeWidth="1.4" fill="none" />
    </Box>
  );
}
function Cloud({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M6 19 a 5 5 0 0 1 1 -9.9 a 6 6 0 0 1 11.4 1 A 4 4 0 0 1 18 19 Z" />
    </Box>
  );
}
function Diamond({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M12 2 L 22 9 L 12 22 L 2 9 Z" />
      <path d="M2 9 H 22 M 8 9 L 12 22 M 16 9 L 12 22" stroke="white" strokeWidth="1" fill="none" />
    </Box>
  );
}
function Crown({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M2 8 L 7 14 L 12 6 L 17 14 L 22 8 L 20 20 H 4 Z" />
      <circle cx="2" cy="8" r="1.6" strokeWidth="0" />
      <circle cx="22" cy="8" r="1.6" strokeWidth="0" />
      <circle cx="12" cy="6" r="1.6" strokeWidth="0" />
    </Box>
  );
}
function Peace({ size }: IconProps) {
  return (
    <Box size={size}>
      <circle cx="12" cy="12" r="10" strokeWidth="0" />
      <g stroke="white" strokeWidth="1.6" fill="none">
        <path d="M12 2 V 22" />
        <path d="M12 12 L 4.5 19" />
        <path d="M12 12 L 19.5 19" />
      </g>
    </Box>
  );
}
function HandWave({ size }: IconProps) {
  return (
    <Box size={size}>
      <path strokeWidth="0" d="M7 13 V 6 a 1.5 1.5 0 0 1 3 0 V 11 V 4 a 1.5 1.5 0 0 1 3 0 V 11 V 5 a 1.5 1.5 0 0 1 3 0 V 12 V 8 a 1.5 1.5 0 0 1 3 0 V 15 a 6 6 0 0 1 -12 0 Z" />
    </Box>
  );
}

const ICONS: { Comp: React.FC<IconProps>; hue: number; spread: number }[] = [
  { Comp: Heart,     hue: 345, spread: 20 }, // rose
  { Comp: Star,      hue: 45,  spread: 15 }, // gold
  { Comp: Sparkle,   hue: 280, spread: 30 }, // violet
  { Comp: Flower,    hue: 320, spread: 25 }, // pink
  { Comp: Smiley,    hue: 50,  spread: 10 }, // yellow
  { Comp: MusicNote, hue: 200, spread: 30 }, // blue
  { Comp: Bolt,      hue: 50,  spread: 10 }, // electric yellow
  { Comp: Sun,       hue: 35,  spread: 10 }, // orange
  { Comp: Moon,      hue: 230, spread: 20 }, // indigo
  { Comp: Leaf,      hue: 140, spread: 25 }, // green
  { Comp: Cloud,     hue: 210, spread: 15 }, // sky
  { Comp: Diamond,   hue: 180, spread: 25 }, // cyan
  { Comp: Crown,     hue: 40,  spread: 8  }, // gold
  { Comp: Peace,     hue: 160, spread: 30 }, // teal-green
  { Comp: HandWave,  hue: 25,  spread: 15 }, // peach
];

/* ====================== Burst ====================== */

type Particle = {
  iconIdx: number;
  angle: number;
  distance: number;
  size: number;
  hue: number;
  delay: number;
  rotEnd: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
};

const PARTICLE_COUNT = 15;

function makeBurst(id: number, x: number, y: number): Burst {
  // shuffle icon indices so each burst uses each icon exactly once → 15 different things
  const indices = ICONS.map((_, i) => i).sort(() => Math.random() - 0.5);
  const particles: Particle[] = indices.map((iconIdx, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + Math.random() * 0.25;
    const distance = 70 + Math.random() * 70;
    const size = 14 + Math.random() * 12;
    const meta = ICONS[iconIdx];
    const hue = meta.hue + (Math.random() - 0.5) * meta.spread;
    const delay = Math.random() * 0.08;
    const rotEnd = (Math.random() - 0.5) * 160;
    return { iconIdx, angle, distance, size, hue, delay, rotEnd };
  });
  return { id, x, y, particles };
}

/* ====================== Main component ====================== */

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-on");
    return () => {
      document.documentElement.classList.remove("custom-cursor-on");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!interactive);
    };
    const onDown = (e: PointerEvent) => {
      setPressed(true);
      if (e.button !== 0) return;
      const id = ++idRef.current;
      setBursts((b) => [...b, makeBurst(id, e.clientX, e.clientY)]);
      setTimeout(() => {
        setBursts((b) => b.filter((x) => x.id !== id));
      }, 1400);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => setPos({ x: -100, y: -100 });

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{ left: 0, top: 0, translateX: pos.x, translateY: pos.y }}
      >
        <motion.div
          animate={{
            scale: pressed ? 0.7 : hovering ? 1.6 : 1,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-paper"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{ left: 0, top: 0, translateX: pos.x, translateY: pos.y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-paper" />
      </motion.div>

      <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
        <AnimatePresence>
          {bursts.map((b) => (
            <BurstView key={b.id} burst={b} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function BurstView({ burst }: { burst: Burst }) {
  return (
    <>
      {burst.particles.map((p, i) => {
        const Icon = ICONS[p.iconIdx].Comp;
        const dx = Math.cos(p.angle) * p.distance;
        const dy = Math.sin(p.angle) * p.distance - 20;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: burst.x,
              top: burst.y,
              color: `hsl(${p.hue}, 78%, 60%)`,
              filter: `drop-shadow(0 1px 3px hsla(${p.hue}, 80%, 50%, 0.4))`,
            }}
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.3, 1.1, 1, 0.85],
              x: dx,
              y: dy,
              rotate: p.rotEnd,
            }}
            transition={{
              duration: 1.05,
              delay: p.delay,
              ease: "easeOut",
              times: [0, 0.15, 0.7, 1],
            }}
          >
            <Icon size={p.size} />
          </motion.div>
        );
      })}
    </>
  );
}
