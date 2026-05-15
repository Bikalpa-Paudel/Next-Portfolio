"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
  duration?: number;
  y?: number;
};

export function Float({
  children,
  className = "",
  delay = 0,
  rotate = 0,
  duration = 6,
  y = 8,
}: FloatProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, rotate }}
      animate={{
        opacity: 1,
        y: [0, -y, 0],
        rotate,
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: {
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: { duration: 0.8, delay },
      }}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </motion.div>
  );
}

/* ------------ ID Badge with Lanyard ------------ */
export function IDBadge() {
  return (
    <div className="relative w-[180px]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[18px] h-24 bg-gradient-to-b from-ink/80 to-ink rounded-sm">
        <div className="absolute inset-x-0 top-2 h-1 bg-paper/30" />
        <div className="absolute inset-x-0 top-6 h-1 bg-paper/30" />
        <div className="absolute inset-x-0 top-10 h-1 bg-paper/30" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-paper border border-ink/30" />
      <div className="relative bg-[#1a1a1a] text-paper rounded-xl p-4 pt-6 shadow-xl border border-ink/40">
        <div className="text-[11px] tracking-[0.2em] font-mono text-paper/60 mb-2">
          BIKALPA · DESIGN
        </div>
        <div className="text-3xl font-hand leading-none">Bikalpa</div>
        <div className="text-[10px] font-mono leading-snug text-paper/70 mt-3">
          Love crafting interfaces, prototyping, and building with code.
        </div>
        <div className="mt-4 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-folderBlue via-folderPurple to-folderRed border-2 border-paper/80 flex items-center justify-center text-paper font-hand text-3xl">
          BP
        </div>
      </div>
    </div>
  );
}

/* ------------ Playlist / Vinyl Card ------------ */
export function PlaylistCard() {
  return (
    <div className="w-[180px] bg-paper rounded-xl shadow-lg border border-ink/10 p-4 pt-5">
      <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-ink animate-spinSlow flex items-center justify-center">
          <div className="absolute inset-2 rounded-full border border-paper/10" />
          <div className="absolute inset-5 rounded-full border border-paper/10" />
          <div className="absolute inset-8 rounded-full border border-paper/10" />
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-ink" />
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="text-[10px] tracking-[0.25em] font-mono text-inkSoft">
          PLAYLIST
        </div>
        <div className="font-semibold mt-1">Vibe Coding</div>
        <div className="text-[11px] text-inkSoft mt-1 font-mono">
          20+ projects and counting
        </div>
        <div className="text-[11px] text-inkSoft/70 mt-2 font-hand">
          Learning by building
        </div>
      </div>
    </div>
  );
}

/* ------------ Design Ticket ------------ */
export function DesignTicket() {
  return (
    <div className="relative flex items-stretch w-[300px] font-mono">
      <div className="bg-[#1a1a1a] text-paper p-3 rounded-l-md border-2 border-ink/20 w-[60px] flex flex-col justify-between">
        <div className="text-[8px] tracking-widest rotate-180 [writing-mode:vertical-rl]">
          TICKET 012345678
        </div>
      </div>
      <div className="relative flex-1 bg-paper border-2 border-l-0 border-ink/20 px-4 py-3 rounded-r-md">
        <div className="absolute -left-1 inset-y-2 flex flex-col justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-paper border border-ink/20" />
          ))}
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[9px] tracking-[0.2em] text-inkSoft">DESIGN X</div>
            <div className="text-[13px] font-bold leading-tight">TECHNOLOGY</div>
          </div>
          <div className="text-[8px] text-inkSoft border border-ink/30 px-1 rounded">
            ● Design tour
          </div>
        </div>
        <div className="border-t border-dashed border-ink/20 my-2" />
        <div className="grid grid-cols-2 gap-1 text-[8px]">
          <div>
            <div className="text-inkSoft">Time</div>
            <div className="font-semibold">Anytime</div>
          </div>
          <div>
            <div className="text-inkSoft">Price</div>
            <div className="font-semibold">Free</div>
          </div>
        </div>
        <div className="text-[8px] mt-1">
          <div className="text-inkSoft">Address</div>
          <div className="font-semibold leading-tight">Nepal · Online</div>
          <div className="font-semibold leading-tight">Open worldwide</div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-4 border-l border-dashed border-ink/30 flex items-center justify-center">
          <div className="text-[7px] tracking-widest rotate-90 whitespace-nowrap text-inkSoft">
            EST. 2022 · PRESENT
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------ Plant in Pot ------------ */
export function Plant() {
  return (
    <svg viewBox="0 0 240 280" className="w-[200px] h-auto">
      <defs>
        <linearGradient id="leaf" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3f7d4f" />
          <stop offset="100%" stopColor="#1f4a2c" />
        </linearGradient>
        <linearGradient id="pot" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e8e2d4" />
          <stop offset="100%" stopColor="#c4bba6" />
        </linearGradient>
      </defs>
      {/* leaves */}
      <g>
        <path d="M120 160 C 60 140, 50 80, 80 40 C 100 60, 120 110, 120 160 Z" fill="url(#leaf)" />
        <path d="M120 160 C 180 140, 200 80, 170 30 C 150 60, 130 110, 120 160 Z" fill="url(#leaf)" opacity="0.92" />
        <path d="M120 160 C 70 170, 30 130, 30 80 C 60 110, 100 140, 120 160 Z" fill="url(#leaf)" opacity="0.85" />
        <path d="M120 160 C 170 170, 210 130, 210 80 C 180 110, 140 140, 120 160 Z" fill="url(#leaf)" opacity="0.88" />
        <path d="M120 160 C 110 110, 90 60, 110 10 C 120 50, 130 110, 120 160 Z" fill="url(#leaf)" opacity="0.95" />
        {/* veins */}
        <path d="M120 160 L 80 60" stroke="#1f4a2c" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M120 160 L 165 50" stroke="#1f4a2c" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M120 160 L 50 90" stroke="#1f4a2c" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M120 160 L 195 95" stroke="#1f4a2c" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M120 160 L 115 25" stroke="#1f4a2c" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>
      {/* pot */}
      <path d="M75 160 L 95 270 L 175 270 L 195 160 Z" fill="url(#pot)" stroke="#8e8567" strokeWidth="1.5" />
      <ellipse cx="135" cy="160" rx="60" ry="8" fill="#a59c80" />
    </svg>
  );
}

/* ------------ Coffee Note (torn paper + glass) ------------ */
export function CoffeeNote() {
  return (
    <div className="relative w-[280px]">
      {/* torn paper backdrop */}
      <svg viewBox="0 0 280 120" className="w-full h-auto">
        <defs>
          <filter id="paperShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        <path
          d="M5 30 L 30 18 L 60 28 L 95 15 L 130 25 L 165 12 L 200 22 L 235 14 L 270 26 L 275 95 L 250 110 L 215 100 L 180 112 L 145 102 L 110 113 L 75 101 L 40 110 L 10 100 Z"
          fill="#fafaf6"
          stroke="#d8d2c0"
          strokeWidth="0.5"
          filter="url(#paperShadow)"
        />
      </svg>
      {/* glass overlay */}
      <div className="absolute left-6 top-2 w-16 h-20">
        <svg viewBox="0 0 80 100">
          <defs>
            <linearGradient id="coffee" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#c69566" />
              <stop offset="100%" stopColor="#6b3f1e" />
            </linearGradient>
            <pattern id="check" patternUnits="userSpaceOnUse" width="6" height="6">
              <rect width="6" height="6" fill="#f0e8d8" />
              <rect width="3" height="3" fill="#d8c8a8" />
              <rect x="3" y="3" width="3" height="3" fill="#d8c8a8" />
            </pattern>
          </defs>
          <path d="M14 24 L 18 84 Q 18 92 26 92 L 54 92 Q 62 92 62 84 L 66 24 Z" fill="url(#check)" stroke="#a09478" strokeWidth="1" />
          <path d="M22 36 L 24 80 Q 24 86 30 86 L 50 86 Q 56 86 56 80 L 58 36 Z" fill="url(#coffee)" />
          <ellipse cx="40" cy="24" rx="26" ry="6" fill="#fafaf6" stroke="#a09478" strokeWidth="1" />
          <ellipse cx="40" cy="24" rx="22" ry="4" fill="#3a2a18" />
          <ellipse cx="35" cy="22" rx="6" ry="1.5" fill="#fff" opacity="0.4" />
        </svg>
      </div>
      {/* pencil */}
      <div className="absolute right-4 top-6 w-32 h-3 rotate-[-8deg]">
        <div className="flex items-center h-full">
          <div className="w-3 h-3 bg-pink-300 rounded-l" />
          <div className="w-1 h-3 bg-gray-300" />
          <div className="flex-1 h-3 bg-yellow-400" />
          <div className="w-2 h-3 bg-yellow-600" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          <div className="w-2 h-1 bg-ink" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
        </div>
      </div>
    </div>
  );
}

/* ------------ Polaroid Stack ------------ */
function Polaroid({
  rotate,
  className = "",
  gradient,
  caption,
}: {
  rotate: number;
  className?: string;
  gradient: string;
  caption?: string;
}) {
  return (
    <div
      className={`absolute bg-paper p-2 pb-7 shadow-xl border border-ink/5 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`w-28 h-28 ${gradient}`} />
      {caption && (
        <div className="text-center text-[10px] font-hand text-inkSoft mt-1">
          {caption}
        </div>
      )}
    </div>
  );
}

export function PolaroidStack() {
  return (
    <div className="relative w-[340px] h-[300px]">
      <Polaroid rotate={-12} className="left-0 top-4" gradient="bg-gradient-to-br from-cyan-200 via-blue-300 to-blue-500" />
      <Polaroid rotate={6} className="left-32 top-0" gradient="bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400" />
      <Polaroid rotate={-4} className="left-16 top-32" gradient="bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300" />
      <Polaroid rotate={14} className="left-44 top-28" gradient="bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-400" caption="capture" />
      <Polaroid rotate={-8} className="left-2 top-44" gradient="bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400" caption="moments" />
      <Polaroid rotate={4} className="left-48 top-56" gradient="bg-gradient-to-br from-fuchsia-200 via-pink-300 to-rose-400" />
    </div>
  );
}

/* ------------ Dot Matrix LED Display ------------ */
export function DotMatrix() {
  // simple 7x7 grid showing initials BP
  const pattern = [
    "1111100",
    "1000010",
    "1111100",
    "1000010",
    "1111100",
    "0000000",
    "0000000",
  ];
  return (
    <div className="bg-[#1a1a1a] p-3 rounded-md shadow-xl border border-ink/40">
      <div className="grid grid-cols-7 gap-[3px]">
        {pattern.flatMap((row, r) =>
          row.split("").map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className={`w-1.5 h-1.5 rounded-full ${
                cell === "1" ? "bg-amber-300 shadow-[0_0_4px_rgba(252,211,77,0.8)]" : "bg-paper/10"
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
}

/* ------------ Terminal Window ------------ */
export function Terminal() {
  return (
    <div className="w-[340px] bg-paper rounded-lg shadow-2xl border border-ink/15 overflow-hidden font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink/10 bg-paperDark">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="flex-1 text-center text-[11px] text-inkSoft">
          bikalpa — zsh
        </span>
      </div>
      <div className="p-3 text-[12px] leading-relaxed">
        <div>
          <span className="text-inkSoft">~ $</span>{" "}
          <span className="text-emerald-700">whoami</span>
        </div>
        <div className="text-inkSoft">
          Frontend Developer · building with Next.js
        </div>
        <div className="mt-1">
          <span className="text-inkSoft">~ $</span>{" "}
          <span className="text-emerald-700">ls interests/</span>
        </div>
        <div className="text-inkSoft">
          web/ design/ open-source/ photography/
          <span className="ml-1 inline-block w-1.5 h-3.5 bg-ink align-middle animate-blink" />
        </div>
      </div>
    </div>
  );
}

/* ------------ Archway with Vase ------------ */
export function Archway() {
  return (
    <svg viewBox="0 0 160 200" className="w-[120px] h-auto">
      <defs>
        <linearGradient id="arch" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f0e8d8" />
          <stop offset="100%" stopColor="#d8cdb4" />
        </linearGradient>
      </defs>
      <path d="M20 200 L 20 80 Q 20 20 80 20 Q 140 20 140 80 L 140 200 Z" fill="url(#arch)" stroke="#a09478" strokeWidth="1" />
      <path d="M30 200 L 30 80 Q 30 30 80 30 Q 130 30 130 80 L 130 200 Z" fill="#fafaf6" />
      {/* vase */}
      <ellipse cx="80" cy="170" rx="20" ry="4" fill="#c4bba6" />
      <path d="M65 170 Q 60 150 70 130 Q 90 130 95 150 Q 95 165 95 170 Z" fill="#fafaf6" stroke="#c4bba6" strokeWidth="1" />
      {/* flower */}
      <line x1="80" y1="130" x2="80" y2="100" stroke="#3f7d4f" strokeWidth="1.5" />
      <circle cx="80" cy="95" r="10" fill="#f4a4b8" />
      <circle cx="74" cy="91" r="6" fill="#f8c0cf" />
      <circle cx="86" cy="91" r="6" fill="#f8c0cf" />
      <circle cx="80" cy="86" r="6" fill="#f8c0cf" />
      <circle cx="74" cy="99" r="6" fill="#f8c0cf" />
      <circle cx="86" cy="99" r="6" fill="#f8c0cf" />
      <circle cx="80" cy="95" r="3" fill="#f6d265" />
    </svg>
  );
}
