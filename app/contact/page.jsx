'use client';
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Animate container with stagger children
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Animate each word/letter
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(255,107,45,0.4)",
    transition: { type: "spring", stiffness: 300 },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } },
  };

  // Split header text into words or letters (I'll do words here)
  const headerWords = ["Get", "In", "Touch"];

  return (
    <motion.section
      className="bg-black text-white py-24 px-6 md:px-12 pt-24 md:pt-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header with individual word animations */}
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 flex justify-center gap-4">
          {headerWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              className={word === "Touch" ? "text-[#FF6B2D]" : ""}
              whileHover={word === "Touch" ? { scale: 1.1, color: "#e55a1e" } : {}}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ cursor: word === "Touch" ? "pointer" : "default" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-12"
          variants={itemVariants}
        >
          I’d love to hear from you. Let's connect and discuss your ideas!
        </motion.p>

        {/* Contact Box */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-4 text-white"
            variants={itemVariants}
          >
            Schedule a Meeting
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-6 text-base md:text-lg"
            variants={itemVariants}
          >
            You can directly book a time slot via Calendly and we’ll take it from there.
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              onClick={openModal}
              whileHover={buttonHover}
              className="bg-[#FF6B2D] hover:bg-[#e55a1e] transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-orange-500/30 w-full sm:w-64"
            >
              Schedule a Meeting
            </motion.button>
          </div>

          {/* Email */}
          <motion.div
            className="mt-8"
            variants={itemVariants}
          >
            <p className="text-gray-300 text-sm">
              <FaEnvelope className="inline-block mr-2 text-[#FF6B2D]" />
              <motion.a
                href="mailto:maitysupriyo10@gmail.com"
                className="text-[#FF6B2D] hover:underline"
                whileHover={{ scale: 1.1, color: "#e55a1e" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                maitysupriyo10@gmail.com
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-11/12 max-w-xl p-6 relative"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-black"
                aria-label="Close modal"
                whileHover={{ scale: 1.2, color: "#FF6B2D" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                &times;
              </motion.button>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Schedule a Meeting
              </h3>
              <iframe
                src="https://calendly.com/supriyomaity1082004/let-s-discuss-your-project"
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
