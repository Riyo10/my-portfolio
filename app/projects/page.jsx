'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiExternalLinkLine, RiGithubLine, RiFolderInfoLine, RiTimeLine } from 'react-icons/ri';
import { projectList } from '../../lib/projects';

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="bg-[#050505] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with System Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#FF6B2D] font-mono text-xs tracking-[0.3em] uppercase"
            >
              <RiFolderInfoLine /> C:/Users/Supriyo/Desktop/Projects
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2D] to-[#ff9d73]">APPS</span>
            </h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:block text-right font-mono text-[10px] text-gray-500"
          >
            [SYSTEM STATUS: OPTIMIZED]<br />
            [TOTAL_REPOS: {projectList.length + " + 3AM_GHOSTS"}]
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {projectList.map((project, idx) => {
            // Making every 3rd or 4th card larger for the "Bento" look
            const isLarge = idx === 0 || idx === 3; 

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 transition-all hover:border-[#FF6B2D]/50 ${
                  isLarge ? 'md:col-span-8' : 'md:col-span-4'
                }`}
              >
                {/* Image Background with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    {project.is3am && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FF6B2D]/20 text-[#FF6B2D] text-[8px] font-bold border border-[#FF6B2D]/30 flex items-center gap-1 uppercase tracking-widest">
                        <RiTimeLine /> 3 AM Build
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-2 text-white group-hover:text-[#FF6B2D] transition-colors uppercase italic">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base line-clamp-2 max-w-lg mb-6 group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 bg-white text-black text-xs font-bold py-3 px-6 rounded-xl hover:bg-[#FF6B2D] hover:text-white transition-all"
                    >
                      LIVE <RiExternalLinkLine />
                    </a>
                    <a
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-bold py-3 px-6 rounded-xl backdrop-blur-md hover:bg-white/10 transition-all"
                    >
                      DETAILS
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3AM Project Graveyard Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center text-center space-y-6"
        >
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="text-gray-500 font-mono text-sm italic">
            "Searching for lost repositories in Drive D:..."
          </p>
          <a
            href="https://github.com/Riyo10/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#FF6B2D] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,107,45,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RiGithubLine size={20} /> Browse GitHub Graveyard
            </span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}