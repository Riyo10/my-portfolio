import { CiInstagram } from 'react-icons/ci';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-3xl font-semibold">About Me</h3>
          <p className="text-lg text-gray-400">
            Passionate developer creating innovative solutions. Open to new opportunities and collaborations.
          </p>
          <p className="text-lg text-gray-400">
            Let's connect and build something great!
          </p>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/riyo369" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-4xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/supriyomaity10/" target="_blank" rel="noopener noreferrer">
              <CiInstagram className="text-4xl hover:text-pink-300 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} supriyo maity. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
