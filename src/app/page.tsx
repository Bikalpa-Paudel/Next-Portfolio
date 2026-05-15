"use client";

import { motion } from "framer-motion";
import {
  Float,
  IDBadge,
  PlaylistCard,
  DesignTicket,
  Plant,
  CoffeeNote,
  PolaroidStack,
  DotMatrix,
  Terminal,
  Archway,
} from "@/components/landing/SceneObjects";
import { Finder } from "@/components/landing/Finder";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Work />
    </main>
  );
}

/* ====================== HERO ====================== */
function Hero() {
  return (
    <section className="relative min-h-screen grid-bg pt-[64px] pb-20 overflow-hidden">
      {/* desk-scatter container */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[calc(100vh-64px)] min-h-[760px]">
        {/* Top row */}
        <Float
          delay={0.1}
          rotate={-3}
          className="absolute left-[8%] top-[18%]"
        >
          <IDBadge />
        </Float>

        <Float
          delay={0.2}
          rotate={2}
          className="absolute left-[28%] top-[4%] z-10"
        >
          <Plant />
        </Float>

        <Float
          delay={0.25}
          rotate={-2}
          className="absolute left-[44%] top-[8%]"
        >
          <CoffeeNote />
        </Float>

        <Float
          delay={0.3}
          rotate={5}
          className="absolute right-[6%] top-[12%]"
        >
          <DesignTicket />
        </Float>

        {/* Middle / centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-hand text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-tight"
          >
            Bikalpa
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] text-inkSoft mt-4"
          >
            I THINK, THEN I BUILD
          </motion.div>
        </div>

        {/* Left middle */}
        <Float
          delay={0.4}
          rotate={-6}
          className="absolute left-[6%] bottom-[8%]"
        >
          <PlaylistCard />
        </Float>

        {/* Center bottom arch */}
        <Float
          delay={0.5}
          rotate={1}
          className="absolute left-[32%] bottom-[20%]"
        >
          <Archway />
        </Float>

        {/* Right side */}
        <Float
          delay={0.35}
          rotate={4}
          className="absolute right-[6%] top-[42%] z-10"
        >
          <PolaroidStack />
        </Float>

        <Float
          delay={0.55}
          rotate={-4}
          className="absolute right-[40%] top-[44%]"
        >
          <DotMatrix />
        </Float>

        {/* Bottom right terminal */}
        <Float
          delay={0.65}
          rotate={2}
          className="absolute right-[20%] bottom-[6%]"
        >
          <Terminal />
        </Float>
      </div>
    </section>
  );
}

/* ====================== ABOUT ====================== */
function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen grid-bg flex flex-col items-center justify-center px-6 py-32"
    >
      {/* corner ticks */}
      <CornerTicks />

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative bg-sticky w-[340px] p-6 shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.04) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.04) 100%)",
        }}
      >
        {/* sticky tape strips */}
        <span className="absolute -top-2 left-4 w-8 h-4 bg-paper/70 border border-ink/10 rotate-[-6deg]" />
        <span className="absolute -top-2 left-16 w-8 h-4 bg-paper/70 border border-ink/10 rotate-[3deg]" />
        <span className="absolute -top-2 right-16 w-8 h-4 bg-paper/70 border border-ink/10 rotate-[-3deg]" />
        <span className="absolute -top-2 right-4 w-8 h-4 bg-paper/70 border border-ink/10 rotate-[5deg]" />
        {/* pin */}
        <span className="absolute right-12 top-12 w-4 h-4 rounded-full bg-accent shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
        <p className="font-hand text-[20px] leading-snug text-ink/90">
          I care about craft, how clearly things communicate, handle edge cases,
          and build trust. Always in &ldquo;let me try this&rdquo; mode &mdash;
          curious, building, and exploring.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-24 max-w-[760px] text-center font-mono text-[15px] md:text-[18px] leading-loose"
      >
        <p>
          I turn ambiguity{" "}
          <SquiggleIcon /> into clear product direction and ship with
          cross-functional teams{" "}
          <span className="border border-ink/40 px-2 py-0.5 rounded mx-1">
            at speed.
          </span>
        </p>
        <p className="mt-6">
          <SparkleIcon />{" "}
          <span className="border border-ink/40 px-2 py-0.5 rounded">
            I build with AI,
          </span>{" "}
          prototyping ideas and exploring the edge of design and technology.
        </p>
      </motion.div>
    </section>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute left-12 top-24 w-6 h-6 border border-dashed border-ink/30 flex items-center justify-center text-inkSoft text-xs">
        +
      </span>
      <span className="absolute right-12 top-24 w-6 h-6 border border-dashed border-ink/30 flex items-center justify-center text-inkSoft text-xs">
        +
      </span>
      <span className="absolute left-12 bottom-24 w-6 h-6 border border-dashed border-ink/30 flex items-center justify-center text-inkSoft text-xs">
        +
      </span>
      <span className="absolute right-12 bottom-24 w-6 h-6 border border-dashed border-ink/30 flex items-center justify-center text-inkSoft text-xs">
        +
      </span>
    </>
  );
}

function SquiggleIcon() {
  return (
    <svg
      viewBox="0 0 30 20"
      className="inline-block w-6 h-4 align-middle"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M2 14 C 6 4, 12 18, 16 8 S 24 18, 28 6" />
      <path d="M14 2 L 15 0" />
      <path d="M19 3 L 21 1" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline-block w-5 h-5 align-middle text-ink"
      fill="currentColor"
    >
      <path d="M12 0 L 14 9 L 24 12 L 14 15 L 12 24 L 10 15 L 0 12 L 10 9 Z" />
    </svg>
  );
}

/* ====================== WORK ====================== */
function Work() {
  return (
    <section
      id="work"
      className="relative min-h-screen grid-bg flex items-center justify-center px-6 py-32"
    >
      <Finder />
    </section>
  );
}
