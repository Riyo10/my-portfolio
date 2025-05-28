import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Import LeetCode icon
import "./HomePage.css";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/homebg.jpg')" }}>
      <div className="flex items-center justify-center h-full px-4">
        <div className="flex justify-center items-center max-w-screen-xl w-full text-center">
          <div className="text-white max-w-lg">
            {/* Heading with Pop-up Animation applied to "Supriyo" only */}
            <h1 className="text-4xl font-semibold mb-4 pop-up-animation">
              Hi, I'm Supriyo,
            </h1>

            {/* Paragraph */}
            <p className="text-lg mb-6 paragraph-animation">
              A Passionate Developer specializing in building scalable web applications, mobile apps, and software solutions, with a focus on delivering high-quality, user-centric products.
            </p>

            {/* Resume Button */}
            <a href="/supriyomaitycv.pdf" download="Supriyo_Resume.pdf">
              <button className="text-white border-2 border-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#006605] transition duration-300 button-animation">
                Download Resume
              </button>
            </a>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/maitysupriyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin-animation"
              >
                <FaLinkedin className="text-white text-2xl hover:text-blue-600 transition duration-300" />
              </a>

              <a
                href="https://github.com/Riyo10"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github-animation"
              >
                <FaGithub className="text-white text-2xl hover:text-gray-800 transition duration-300" />
              </a>

              <a
                href="https://leetcode.com/u/supriyomaity10/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon leetcode-animation"
              >
                <SiLeetcode className="text-white text-2xl hover:text-yellow-500 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
