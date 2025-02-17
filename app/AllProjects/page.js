// pages/projects.js
"use client"
// pages/projects.js
import { useState } from "react";
import Slider from "react-slick";

// Sample projects data
const projectsData = [
  {
    title: "Project 1",
    description: "This is a description of Project 2.",
    images: ["/iy.jpg", "/iy.jpg", "/iy.jpg"],
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2.",
    images: ["/iy.jpg", "/iy.jpg", "/iy.jpg"],
  },
  {
    title: "Project 3",
    description: "This is a description of Project 2.",
    images: ["/iy.jpg", "/iy.jpg", "/iy.jpg"],
  },
  {
    title: "Project 4",
    description: "This is a description of Project 2.",
    images: ["/iy.jpg", "/iy.jpg", "/iy.jpg"],
  },
  {
    title: "Project 5",
    description: "This is a description of Project 2.",
    images: ["/iy.jpg", "/iy.jpg", "/iy.jpg"],
  }
  // More projects can be added here
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpenModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-12">Here is my all Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%]">
              <img
                src={project.images[0]}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <button
                onClick={() => handleOpenModal(project)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Project Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal without react-modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">{currentProject.title}</h2>
            <p className="text-gray-700 mb-6">{currentProject.description}</p>

            <Slider {...carouselSettings}>
              {currentProject.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${currentProject.title} - ${index + 1}`} className="w-full rounded-lg" />
                </div>
              ))}
            </Slider>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Project Link
            </a>

            <button
              onClick={handleCloseModal}
              className="mt-4 ml-4 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
