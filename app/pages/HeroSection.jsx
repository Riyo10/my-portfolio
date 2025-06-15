"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {
  SiLeetcode,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiVercel,
} from "react-icons/si";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring", stiffness: 100 },
  }),
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.6 },
  },
};

const typingVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.02, duration: 0.03 },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 1 + i * 0.15, type: "spring", stiffness: 150 },
  }),
};

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const introText = "Hi, I'm Supriyo";
  const passionText = "A Passionate Developer 🧑‍💻";
  const paragraphText =
    "Specializing in building scalable web applications, mobile apps, and software solutions, with a focus on delivering high-quality, user-centric products.";

  const codeIcons = [
    { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
    { icon: <SiReact />, name: "React", color: "#61dafb" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#3c873a" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiGit />, name: "Git", color: "#f34f29" },
    { icon: <SiCss3 />, name: "CSS3", color: "#2965f1" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#e34c26" },
  ];

  return (
    <section className="relative bg-black text-white w-full pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-24 gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            initial="hidden"
            animate="visible"
            aria-label={introText}
          >
            {introText.split("").map((char, i) => {
              const highlightStart = introText.indexOf("Supriyo");
              const highlightEnd = highlightStart + "Supriyo".length;
              const isHighlight = i >= highlightStart && i < highlightEnd;

              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className={isHighlight ? "text-[#FF6B2D]" : ""}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl text-[#F6F5F3] font-light mb-8"
            initial="hidden"
            animate="visible"
            variants={scaleVariants}
          >
            {passionText}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-md mx-auto md:mx-0 mb-6"
            initial="hidden"
            animate="visible"
            aria-label={paragraphText}
          >
            {paragraphText.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={typingVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-6 mb-10"
            initial="hidden"
            animate="visible"
          >
            {codeIcons.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={iconVariants}
                whileHover={{ scale: 1.3, rotate: 10, color: item.color }}
                className="text-3xl cursor-pointer transition-colors"
                title={item.name}
                style={{ color: "white" }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons Row: Play Games + Download CV */}
          <motion.div
            className="flex flex-col md:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Link
              href="/games"
              className="bg-[#FF6B2D] hover:bg-[#e55a1e] transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-lg text-center"
            >
              You Can Play My Games 🎮
            </Link>

            <a
              href="/supriyomaitycv.pdf"
              download
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors font-semibold py-3 px-6 rounded-md shadow-lg text-center"
            >
              Download my CV 📄
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image & Social Icons */}
        <motion.div
          className="flex-1 flex flex-col items-center md:flex-row md:items-center md:justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <Image
              src="/assets/bg1.png"
              alt="Hero image"
              width={520}
              height={520}
              className="object-contain drop-shadow-2xl transform transition-transform duration-500 hover:rotate-3"
              priority
            />
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex flex-col gap-4 ml-6 mt-4">
            {[
              {
                href: "https://github.com/Riyo10",
                icon: <FaGithub />,
              },
              {
                href: "https://leetcode.com/u/supriyomaity10/",
                icon: <SiLeetcode />,
              },
              {
                href: "https://www.linkedin.com/in/maitysupriyo/",
                icon: <FaLinkedin />,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-white text-2xl hover:text-[#FF6B2D] transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex md:hidden flex-row gap-6 mt-6">
            {[
              {
                href: "https://github.com/Riyo10",
                icon: <FaGithub />,
              },
              {
                href: "https://leetcode.com/u/supriyomaity10/",
                icon: <SiLeetcode />,
              },
              {
                href: "https://www.linkedin.com/in/maitysupriyo/",
                icon: <FaLinkedin />,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-white text-2xl hover:text-[#FF6B2D] transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
