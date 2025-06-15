'use client';

import { useEffect, useRef, useState } from 'react';
import { projectList } from '../../lib/projects';

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState({});
  const visibleRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = { ...visibleRef.current };
        let changed = false;

        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !updated[id]) {
            updated[id] = true;
            changed = true;
          }
        });

        if (changed) {
          visibleRef.current = updated;
          setVisibleCards(updated);
        }
      },
      { threshold: 0.4 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-tight">
          My <span className="text-[#FF6B2D]">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectList.map((project, idx) => {
            const isVisible = visibleCards[`project-${idx}`];

            return (
              <div
                key={project.slug}
                id={`project-${idx}`}
                className={`project-card transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:scale-[1.03] hover:shadow-xl bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col`}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105 rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-4 text-white">{project.title}</h3>
                <p className="text-gray-300 text-base mt-2 flex-1">{project.description}</p>

                <div className="mt-6 flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    View live 🎥
                  </a>
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-[#FF6B2D] mt-4 font-medium hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 👉 GitHub Small Projects Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Riyo10/thejsbro_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B2D] text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:bg-[#e65a1f] transition duration-300"
          >
            View My Small Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
