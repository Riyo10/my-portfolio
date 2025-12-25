'use client';

import { useState } from "react";
import { RiMailSendLine, RiCalendarEventLine, RiCloseLine, RiChatSmile2Line, RiTerminalBoxLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-32 px-6 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF6B2D]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            <RiChatSmile2Line className="text-[#FF6B2D]" /> Communication Portal v2.6
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2D] to-[#ff9d73]">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-xl mx-auto">
            Ready to initialize a new project or just want to talk shop? My terminal is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Calendly Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl group transition-all"
          >
            <div className="w-12 h-12 bg-[#FF6B2D] rounded-2xl flex items-center justify-center text-black mb-6 shadow-[0_0_20px_rgba(255,107,45,0.3)]">
              <RiCalendarEventLine size={24} />
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase">Sync Schedules</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Skip the email back-and-forth. Grab a spot directly on my calendar for a high-bandwidth sync.
            </p>
            <button 
              onClick={openModal}
              className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-[#FF6B2D] hover:text-white transition-all uppercase text-xs tracking-widest"
            >
              Initialize Meet
            </button>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl group transition-all"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#FF6B2D] mb-6">
              <RiMailSendLine size={24} />
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase">Direct Message</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Prefer the classic way? Drop a detailed brief or a quick "Hello" into my inbox anytime.
            </p>
            <a 
              href="mailto:maitysupriyo10@gmail.com"
              className="flex items-center justify-center w-full py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest"
            >
              Send Message
            </a>
          </motion.div>
        </div>
      </div>

      {/* OS-Style Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[200] p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] shadow-2xl w-full max-w-4xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40 cursor-pointer hover:bg-red-500" onClick={closeModal} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/10 border border-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/10 border border-green-500/20" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center gap-2">
                  <RiTerminalBoxLine /> session_scheduler.exe
                </div>
                <button onClick={closeModal} className="text-gray-500 hover:text-white transition-colors">
                  <RiCloseLine size={24} />
                </button>
              </div>

              {/* Calendly Iframe */}
              <div className="p-2">
                <iframe
                  src="https://calendly.com/supriyomaity1082004/let-s-discuss-your-project"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-[2rem] grayscale invert contrast-[1.1] opacity-90"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}