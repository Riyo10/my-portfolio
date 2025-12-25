"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiDownloadCloud2Line,
  RiGamepadLine,
  RiTerminalBoxLine,
} from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiC,
  SiDart,
  SiPython,
  SiPostgresql,
  SiOpencv,
} from "react-icons/si";

const techStack = [
  { icon: <SiC />, color: "#A8B9CC", label: "C" },
  { icon: <SiDart />, color: "#0175C2", label: "Dart" },
  { icon: <SiPython />, color: "#3776AB", label: "Python" },
  { icon: <SiJavascript />, color: "#f7df1e", label: "JS" },
  { icon: <SiTypescript />, color: "#3178c6", label: "TS" },
  { icon: <SiReact />, color: "#61dafb", label: "React" },
  { icon: <SiNextdotjs />, color: "#ffffff", label: "Next" },
  { icon: <SiTailwindcss />, color: "#38bdf8", label: "CSS" },
  { icon: <SiNodedotjs />, color: "#3c873a", label: "Node" },
  { icon: <SiPostgresql />, color: "#4169E1", label: "SQL" },
  { icon: <SiOpencv />, color: "#5C3EE8", label: "OpenCV" },
  { icon: <SiMongodb />, color: "#47a248", label: "MongoDB" },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Background glow for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B2D]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Branding & CTA */}
        <div className="z-10 space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6B2D]/30 bg-[#FF6B2D]/5 text-[#FF6B2D] text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2D] animate-pulse" />
              hi i'm midnight coder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2D] to-[#ff9d73]">
                SUPRIYO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed"
            >
              Architecting my mind for{" "}
              <span className="text-white">high-performance</span> and scalable
              in future. Expert in computer vision and modern stacks.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/games"
              className="group flex items-center justify-center gap-3 bg-[#FF6B2D] text-black font-black py-4 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95"
            >
              <RiGamepadLine size={24} />
              <span>LAUNCH ARCADE</span>
            </Link>

            <a
              href="/supriyomaitycv.pdf"
              download
              className="group flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 hover:border-[#FF6B2D]/50 text-white font-bold py-4 px-10 rounded-2xl transition-all"
            >
              <RiDownloadCloud2Line size={20} />
              <span>GET RESUME</span>
            </a>
          </motion.div>

          {/* Socials */}
          <div className="flex gap-6 pt-4 items-center">
            <a
              href="https://github.com/Riyo10"
              target="_blank"
              className="text-gray-500 hover:text-white text-3xl transition-colors"
            >
              <RiGithubLine />
            </a>
            <a
              href="https://www.linkedin.com/in/maitysupriyo/"
              target="_blank"
              className="text-gray-500 hover:text-white text-3xl transition-colors"
            >
              <RiLinkedinLine />
            </a>
            <div className="h-px w-20 bg-white/10" />
          </div>
        </div>

        {/* RIGHT: Floating Icon Sandbox */}
        <div className="relative order-1 lg:order-2 w-full aspect-square lg:aspect-auto lg:h-[600px]">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-full bg-[#0A0A0A] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Box Header */}
            <div className="absolute top-0 inset-x-0 h-14 border-b border-white/5 bg-white/5 backdrop-blur-md z-20 flex items-center justify-between px-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center gap-2">
                <RiTerminalBoxLine /> tech_sandbox.sh
              </div>
            </div>

            {/* Sandbox Content */}
            <div className="relative w-full h-full p-10 flex flex-wrap gap-4 items-center justify-center">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  drag
                  dragConstraints={containerRef}
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }}
                  animate={{
                    x: [
                      Math.random() * 20,
                      Math.random() * -20,
                      Math.random() * 20,
                    ],
                    y: [
                      Math.random() * 20,
                      Math.random() * -20,
                      Math.random() * 20,
                    ],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.2, zIndex: 30 }}
                  whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                  className="group relative cursor-grab w-16 h-16 md:w-20 md:h-20 bg-neutral-900 border border-white/10 rounded-3xl flex items-center justify-center text-3xl md:text-4xl shadow-2xl transition-colors hover:border-[#FF6B2D]/50"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Subtle Overlay Grid */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 pointer-events-none border-[40px] border-black/10 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
