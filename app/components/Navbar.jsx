"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMenu4Line,
  RiCloseLine,
  RiCompass3Line,
  RiCodeSSlashLine,
  RiUser6Line,
  RiMailSendLine,
  RiUserSmileLine,
} from "react-icons/ri";

const navLinks = [
  { href: "/", label: "Home", icon: RiCompass3Line },
  { href: "/about", label: "Profile", icon: RiCodeSSlashLine },
  { href: "/projects", label: "Work", icon: RiUser6Line },
  { href: "/contact", label: "Connect", icon: RiMailSendLine },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          pointer-events-auto flex items-center justify-between 
          w-full max-w-5xl px-6 transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "h-14 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "h-20 bg-transparent"
          }
        `}
      >
        {/* Identity Group: Logo + Name */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 bg-[#FF6B2D] rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,45,0.3)]">
              <span className="text-black font-black text-xl">S</span>
            </div>
            {/* Pulsing online status dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tighter text-white uppercase group-hover:text-[#FF6B2D] transition-colors">
              Supriyo Maity
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      relative flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                      ${
                        isActive
                          ? "text-[#FF6B2D]"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    <Icon className="text-lg" />
                    <span className="hidden lg:block">{label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-[#FF6B2D]/10 rounded-full -z-10 border border-[#FF6B2D]/20"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* 90s Version Button */}
          <a href="/app/90s-version/index.html" target="_blank" rel="noopener noreferrer">
            <button
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Go to 90s Version
            </button>
          </a>
        </div>

        {/* Mobile Toggle with Name Preview */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[#FF6B2D] hover:bg-white/10 rounded-full transition-colors"
          >
            {menuOpen ? <RiCloseLine size={28} /> : <RiMenu4Line size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[150] md:hidden flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Identity header in mobile menu */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6B2D] rounded-xl flex items-center justify-center">
                <span className="text-black font-black text-2xl font-mono">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white uppercase tracking-tighter">
                  Supriyo Maity
                </span>
                <span className="text-[10px] text-[#FF6B2D] font-mono tracking-widest uppercase">
                  System Administrator
                </span>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-[#FF6B2D] p-2 bg-white/5 rounded-full"
            >
              <RiCloseLine size={32} />
            </button>

            <ul className="space-y-10 text-center">
              {navLinks.map(({ href, label, icon: Icon }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-active:scale-90 transition-transform shadow-xl">
                      <Icon className="text-4xl text-[#FF6B2D]" />
                    </div>
                    <span className="text-4xl font-black text-white tracking-tighter uppercase italic">
                      {label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Footer for Mobile */}
            <div className="absolute bottom-10 text-gray-600 font-mono text-[10px] uppercase tracking-[0.4em]">
              Verified Profile © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
