'use client';

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const aboutLines = [
  "const aboutMe = {",
  '  name: "Supriyo Maity",',
  '  role: "Full Stack Developer",',
  '  loves: ["JavaScript", "Open Source", "Clean Code"],',
  '  currentlyLearning: ["TypeScript", "System Design"],',
  "};",
  "",
  "function skills() {",
  "  return [",
  '    "React", "Next.js", "Node.js", "Express",',
  '    "MongoDB", "TypeScript", "JavaScript", "Git"',
  "  ];",
  "}",
  "",
  "class Experience {",
  "  constructor() {",
  '    this.companies = ["Freelance", "Open Source Contributions"];',
  "  }",
  "",
  "  getYears() {",
  "    return 4; // years of experience",
  "  }",
  "}",
  "",
  "const sayHi = () => console.log('Hello, world! 👋');",
  "",
  "sayHi();",
];

const highlightWords = (line) => {
  const highlights = [
    "Supriyo Maity",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Git",
    "sayHi",
    "Experience",
  ];
  let modified = line;
  highlights.forEach((word) => {
    const regex = new RegExp(`(${word})`, "g");
    modified = modified.replace(
      regex,
      `<span class="text-[#FF6B2D] hover:underline">${word}</span>`
    );
  });
  return modified;
};

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.3 },
  }),
};

const socialLinks = [
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/supriyomaity10",
  },
  {
    label: "Insta Page",
    icon: FaInstagram,
    url: "https://instagram.com/thejsbro",
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/supriyo369",
  },
  {
    label: "X (Twitter)",
    icon: FaTwitter,
    url: "https://x.com/riyo369",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCOCngKh1YMfBzpmJcLkftuw",
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* About (code style) */}
      <section className="bg-black text-gray-300 min-h-screen pt-24 md:pt-32 px-6 md:px-12 font-mono max-w-screen overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold mb-10 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            // about.js
          </motion.h1>
          {aboutLines.map((line, index) => (
            <motion.pre
              key={index}
              custom={index}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg leading-relaxed break-words whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: highlightWords(line) }}
            />
          ))}
          <motion.p
            className="mt-10 text-sm text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: aboutLines.length * 0.07 + 0.3 }}
          >
            // Built with passion, coffee & a lot of console.logs ☕💻
          </motion.p>
        </div>
      </section>

      {/* Social Section (stylish card) */}
      <section className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/10 max-w-screen overflow-hidden">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-10 shadow-xl border border-white/10">
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Connect with Me
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-black border border-[#FF6B2D] hover:bg-[#FF6B2D] hover:text-black transition-all px-4 py-3 rounded-lg group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-md font-medium">{item.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
