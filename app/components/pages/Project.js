"use client"

import { useEffect } from 'react';
// import Link from 'next/link';
import './Project.css';

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');  // Add 'show' class when card is in view
        }
      });
    }, { threshold: 0.5 });  // Trigger when 50% of the card is in view

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      observer.observe(card); // Observe each project card
    });

    return () => {
      // Cleanup the observer when the component is unmounted
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-cover bg-center py-16" style={{ backgroundImage: "url('/projectbg.jpg')" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-white mb-12">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project Card 1 */}
          <div className="project-card bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white flex flex-col">
            <img src="/project1_1.png" alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-white mt-4">Metal Bengal</h3>
            <p className="text-base text-white mt-2 flex-1">Premium stainless steel, iron, and aluminum products for residential and commercial use.</p>
            <div className="mt-auto flex justify-center w-full">
              <a href="https://www.metalbengal.com" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-40 text-center">
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="project-card bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white flex flex-col">
            <img src="/project2_1.png" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-white mt-4">Lynren</h3>
            <p className="text-base text-white mt-2 flex-1">AI-driven automation solutions, enhancing business efficiency with machine learning and innovation.</p>
            <div className="mt-auto flex justify-center w-full">
              <a href="https://www.lynren.com" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-40 text-center">
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="project-card bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white flex flex-col">
            <img src="/project3_1.png" alt="Project 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-white mt-4">VNO</h3>
            <p className="text-base text-white mt-2 flex-1">An Ngo Empowering communities through sustainable development, education, and social justice initiatives worldwide.</p>
            <div className="mt-auto flex justify-center w-full">
              <a href="/" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-40 text-center">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Show More Projects Button */}
        {/* <div className="flex justify-center mt-12">
          <Link href="/AllProjects" className="show-more-btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Show More Projects
          </Link>
        </div> */}
      </div>
    </div>
  );
}
