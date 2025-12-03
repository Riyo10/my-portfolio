'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from '../../../lib/projects';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Motion components dynamically imported for client side only
const MotionSection = dynamic(() => import('framer-motion').then(mod => mod.motion.section), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionA = dynamic(() => import('framer-motion').then(mod => mod.motion.a), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const proj = getProjectBySlug(slug);
    if (!proj) {
      router.replace('/404'); // redirect to 404 page
      return;
    }
    setProject(proj);
  }, [slug, router]);

  if (!project) return <div>Loading...</div>;

  return (
    <MotionSection
      className="bg-black text-white py-24 px-6 md:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header Row: Back Button + Title */}
        <MotionDiv
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FF6B2D] tracking-tight">
            {project.title}
          </h1>

          <MotionDiv
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => router.back()}
            className="cursor-pointer bg-[#FF6B2D] hover:bg-[#e55a1e] px-6 py-2 text-white text-sm rounded-md font-semibold shadow-md"
          >
            ← Back to Previous Page
          </MotionDiv>
        </MotionDiv>

        {/* Description */}
        <MotionDiv className="text-gray-300 text-lg max-w-3xl" variants={itemVariants}>
          {project.description}
        </MotionDiv>

        {/* Image Gallery - FIXED SECTION */}
        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" variants={itemVariants}>
          {/* Added optional chaining (?.) and validation check inside map */}
          {project.images?.map((img, idx) => {
            
            // SECURITY CHECK: If image url is missing or empty, skip rendering it
            if (!img || typeof img !== 'string') return null;

            return (
              <MotionDiv
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(255,107,45,0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[250px] md:h-[200px]"
                  priority={idx === 0}
                />
              </MotionDiv>
            );
          })}
        </MotionDiv>

        {/* Skills Used */}
        {project.skills && project.skills.length > 0 && (
          <MotionDiv className="flex flex-wrap gap-4" variants={itemVariants}>
            <MotionDiv
              className="text-xl font-semibold text-[#FF6B2D] w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills Used
            </MotionDiv>

            {project.skills.map((skill, idx) => (
              <MotionDiv
                key={idx}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255,107,45,0.3)',
                  boxShadow: '0px 4px 14px rgba(255,107,45,0.3)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#FF6B2D]/20 text-[#FF6B2D] px-4 py-2 rounded-full text-sm font-medium cursor-default"
              >
                {skill}
              </MotionDiv>
            ))}
          </MotionDiv>
        )}

        {/* Links */}
        <MotionDiv className="flex flex-wrap gap-6" variants={itemVariants}>
          {project.demoLink && (
            <MotionA
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#FF6B2D] hover:bg-[#e55a1e] px-8 py-3 text-white rounded-md font-semibold shadow-md"
            >
              Visit Live Site
            </MotionA>
          )}
          {project.repoLink && (
            <MotionA
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,107,45,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="border border-[#FF6B2D] px-8 py-3 text-[#FF6B2D] rounded-md font-semibold hover:bg-[#FF6B2D]/20 shadow-md"
            >
              View Code
            </MotionA>
          )}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}