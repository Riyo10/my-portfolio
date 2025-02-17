"use client"
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
// import "./Contact.css";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Intersection Observer to detect scroll and trigger modal visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsModalVisible(true); // Show modal when it comes into view
        }
      },
      { threshold: 0.5 }
    );

    const modalElement = document.querySelector('.contact-section');
    if (modalElement) {
      observer.observe(modalElement);
    }

    return () => {
      if (modalElement) {
        observer.unobserve(modalElement);
      }
    };
  }, []);

  return (
    <div
      className="contact-section py-16 bg-cover bg-center fade-in"
      style={{ backgroundImage: 'url(/contactbg.jpg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-white mb-6">Get In Touch</h1>
        <p className="text-lg text-white mb-12">
          I’d love to hear from you! You can reach out to me for inquiries or
          schedule a meeting using the link below.
        </p>

        {/* Contact Information */}
        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to book a meeting directly via Calendly. Let's talk about
            your ideas or projects!
          </p>

          {/* Calendly Button */}
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-64 text-center"
            >
              Schedule a Meeting
            </button>
          </div>

          {/* Optional Contact Info */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Other Ways to Contact Me:
            </h3>
            <p className="text-gray-700">
              <FaEnvelope className="text-blue-400 inline-block mr-2" />{" "}
              <a
                href="mailto:supriyomaity@example.com"
                className="text-blue-400"
              >
                maitysupriyo10@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Modal (Popup) */}
      {isModalOpen && (
        <div
          className={`modal-bg ${isModalVisible ? "visible" : ""} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
        >
          <div className={`modal bg-white p-8 rounded-lg shadow-xl w-11/12 sm:w-96 relative`}>
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="close-modal-btn absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Schedule a Meeting
            </h3>
            <iframe
              src="https://calendly.com/supriyomaity1082004/let-s-discuss-your-project"
              width="100%"
              height="500"
              frameBorder="0"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
