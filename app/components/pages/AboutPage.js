"use client"
import { useEffect } from "react";
import "./AboutPage.css";

export default function About() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-white mb-12">My Journey</h1>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="border-l-4 border-white h-full"></div> */}
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 - School Journey */}
            <div className="timeline-item school-journey">
              {/* <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-lg"></div> */}
              <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white">
                <h3 className="text-2xl font-semibold text-white">School Journey</h3>
                <p className="text-lg text-white mt-2">My coding journey began in school, where I got introduced to basic programming concepts and learned my first language.</p>
                <span className="block text-sm text-white mt-4">2021 - 2022</span>
              </div>
            </div>

            {/* Timeline Item 2 - College Journey */}
            <div className="timeline-item college-journey">
              {/* <div className="w-10 h-10 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div> */}
              <div className="flex-1 text-right bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white">
                <h3 className="text-2xl font-semibold text-white">College Journey</h3>
                <p className="text-lg text-white mt-2">While in college, I started focusing on full-stack development and building real-world applications as part of my curriculum.</p>
                <span className="block text-sm text-white mt-4">2023 - 2026 (Expected)</span>
              </div>
            </div>

            {/* Timeline Item 3 - Freelancing */}
            <div className="timeline-item freelancing">
              {/* <div className="w-10 h-10 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div> */}
              <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white">
                <h3 className="text-2xl font-semibold text-white">Freelancing</h3>
                <p className="text-lg text-white mt-2">After gaining some experience, I started freelancing and working on projects for clients, building responsive and scalable web applications.</p>
                <span className="block text-sm text-white mt-4">2022 - Present</span>
              </div>
            </div>

            {/* Timeline Item 4 - Full-Stack Developer */}
            <div className="timeline-item full-stack-developer">
              {/* <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-lg"></div> */}
              <div className="flex-1 text-right bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white">
                <h3 className="text-2xl font-semibold text-white">Full-Stack Developer</h3>
                <p className="text-lg text-white mt-2">Currently, I'm focused on improving my skills as a full-stack developer, exploring new technologies, and working on advanced web applications.</p>
                <span className="block text-sm text-white mt-4">2024 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
