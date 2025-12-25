'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from '../../../lib/projects';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiArrowLeftLine, RiExternalLinkLine, RiGithubLine, 
  RiStackLine, RiInformationLine, RiPulseLine 
} from 'react-icons/ri';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const proj = getProjectBySlug(slug);
    if (!proj) {
      router.replace('/404');
      return;
    }
    setProject(proj);
  }, [slug, router]);

  if (!project) return (
    <div className="min-h-screen bg-black flex items-center justify-center font-mono text-[#FF6B2D]">
      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        {'>'} INITIALIZING_DATA_STREAM...
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.button 
            whileHover={{ x: -5 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 hover:text-[#FF6B2D] transition-colors font-mono text-sm uppercase tracking-widest"
          >
            <RiArrowLeftLine size={20} /> Close Inspector
          </motion.button>
          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] hidden md:block">
            Project_UID: {project.slug?.toUpperCase()}_2026
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Project Intel (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic">
                {project.title}<span className="text-[#FF6B2D]">.</span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.skills?.map((skill, i) => (
                  <span key={i} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-[#FF6B2D] pl-6 py-2">
                {project.description}
              </p>
            </motion.div>

            {/* Immersive Image Viewer */}
            <div className="grid grid-cols-1 gap-6">
              {project.images?.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl"
                >
                  <Image
                    src={img}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-xs font-mono text-white/50 tracking-widest uppercase">Capture_{idx + 1}.png</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: System Meta (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Action Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32 p-8 bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#FF6B2D]">
                   <RiPulseLine className="animate-pulse" />
                   <span className="text-xs font-black uppercase tracking-widest">Live Deployment</span>
                </div>

                <div className="flex flex-col gap-3">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" className="flex items-center justify-between group bg-[#FF6B2D] text-black font-black p-5 rounded-2xl hover:shadow-[0_0_30px_rgba(255,107,45,0.4)] transition-all">
                      OPEN_LIVE_DEMO <RiExternalLinkLine size={20} className="group-hover:rotate-45 transition-transform" />
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" className="flex items-center justify-between group bg-white/5 border border-white/10 text-white font-bold p-5 rounded-2xl hover:bg-white/10 transition-all">
                      SOURCE_CODE <RiGithubLine size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Technical Specifications Section */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-gray-500 font-bold text-[10px] uppercase tracking-widest">
                  <RiStackLine /> Tech Specifications
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-[10px] text-gray-600 mb-1 uppercase">Frontend</div>
                    <div className="text-sm font-bold text-gray-300">After Tea</div>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-[10px] text-gray-600 mb-1 uppercase">Backend</div>
                    <div className="text-sm font-bold text-gray-300">After Coffee</div>
                  </div>
                </div>
              </div>

              {/* 3 AM Build Note */}
              <div className="p-6 bg-[#FF6B2D]/5 border border-[#FF6B2D]/20 rounded-2xl">
                <div className="flex items-center gap-2 text-[#FF6B2D] text-[10px] font-black uppercase mb-2">
                  <RiInformationLine /> Engineering Note
                </div>
                <p className="text-xs text-gray-400 italic leading-relaxed">
                  "This project reached stability during a 3 AM focus session. Most of the logic here was built when my coffee-to-blood ratio was dangerously high."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}