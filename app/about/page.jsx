"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiTerminalLine,
  RiFileCodeLine,
  RiHashtag,
} from "react-icons/ri";

const aboutCode = [
  { text: "class", color: "text-[#C678DD]" },
  { text: " Developer ", color: "text-[#E5C07B]" },
  { text: "{" },
  { indent: 2, text: "constructor", color: "text-[#61AFEF]" },
  { text: "() {" },
  { indent: 4, text: "this", color: "text-[#E06C75]" },
  { text: ".name = " },
  { text: "'Supriyo Maity'", color: "text-[#98C379]" },
  { text: ";" },
  { indent: 4, text: "this", color: "text-[#E06C75]" },
  { text: ".stack = [" },
  { text: "'C'", color: "text-[#98C379]" },
  { text: ", " },
  { text: "'Next.js'", color: "text-[#98C379]" },
  { text: "];" },
  { indent: 2, text: "}" },
  { indent: 2, text: "getSkills", color: "text-[#61AFEF]" },
  { text: "() {" },
  { indent: 4, text: "return", color: "text-[#C678DD]" },
  { text: " [" },
  { text: "'OpenCV'", color: "text-[#98C379]" },
  { text: ", " },
  { text: "'Dart'", color: "text-[#98C379]" },
  { text: ", " },
  { text: "'Python'", color: "text-[#98C379]" },
  { text: "];" },
  { indent: 2, text: "}" },
  { text: "}" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: RiInstagramLine,
    url: "https://instagram.com/supriyomaity10",
    color: "#E4405F",
  },
  {
    label: "X / Twitter",
    icon: RiTwitterXLine,
    url: "https://x.com/riyo369",
    color: "#ffffff",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Code Editor Shell */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 bg-[#0B0B0B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Editor Header */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RiFileCodeLine className="text-[#FF6B2D]" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                profile.js
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
          </div>

          <div className="flex">
            {/* Line Numbers */}
            <div className="hidden sm:block p-6 bg-black/20 text-right font-mono text-xs text-gray-700 select-none border-r border-white/5">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code Area */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto w-full leading-relaxed">
              <div className="mb-4 text-gray-600 italic">
                //Core Identity Module
              </div>
              {/* Manual parsing of code logic for better styling than dangerouslySetInnerHTML */}
              <div className="space-y-1">
                <p>
                  <span className="text-[#C678DD]">const</span>{" "}
                  <span className="text-[#E06C75]">developer</span> = {"{"}
                </p>
                <p className="pl-6">
                  <span className="text-[#D19A66]">name</span>:{" "}
                  <span className="text-[#98C379]">'Supriyo Maity'</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#D19A66]">focus</span>:{" "}
                  <span className="text-[#98C379]">
                    'making my <span className="text-orange-500">bharat</span>{" "}
                    dominating the tech'
                  </span>
                  ,
                </p>
                <p className="pl-6">
                  <span className="text-[#D19A66]">languages</span>: [
                  <span className="text-[#98C379]">'C'</span>,{" "}
                  <span className="text-[#98C379]">'Dart'</span>,{" "}
                  <span className="text-[#98C379]">'TypeScript'</span>,{" "}
                  <span className="text-[#98C379]">'Python'</span>],
                </p>
                <p className="pl-6">
                  <span className="text-[#D19A66]">location</span>:{" "}
                  <span className="text-[#98C379]">'India'</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#D19A66]">status</span>:{" "}
                  <span className="text-[#98C379]">'Building the Future'</span>
                </p>
                <p>{"}"};</p>
                <br />
                <p>
                  <span className="text-[#C678DD]">function</span>{" "}
                  <span className="text-[#61AFEF]">init</span>() {"{"}
                </p>
                <p className="pl-6 text-[#ABB2BF]">
                  <span className="text-[#C678DD]">return</span> console.
                  <span className="text-[#61AFEF]">log</span>(
                  <span className="text-[#98C379]">
                    'Welcome to my terminal.'
                  </span>
                  );
                </p>
                <p>{"}"}</p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-[#FF6B2D] to-transparent mt-8"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Connect & Bio Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 bg-neutral-900/50 border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-xl"
          >
            <RiTerminalLine className="text-3xl text-[#FF6B2D] mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Bio</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Most of my best work is born at 3 AM. Some of it lives on GitHub,
              some is hidden in local drives, and the rest has ascended into the
              digital afterlife. If I can’t find the source code, it was
              probably a masterpiece.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#30c512]" />
                <span className="text-gray-300 font-bold uppercase tracking-tighter">
                  Online
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-[#FF6B2D] rounded-[2.5rem] text-black"
          >
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
              <RiHashtag /> Networks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="flex flex-col items-center justify-center p-4 bg-black/10 rounded-2xl border border-black/5 hover:bg-black hover:text-white transition-all group"
                >
                  <social.icon size={24} className="mb-2" />
                  <span className="text-[10px] font-bold uppercase">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
