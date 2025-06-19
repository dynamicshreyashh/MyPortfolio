import { SOCIAL_LINKS } from "../../config/constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialIcons = {
    GitHub: <FaGithub className="w-5 h-5" />,
    LinkedIn: <FaLinkedin className="w-5 h-5" />,
    //Twitter: <FaTwitter className="w-5 h-5" />,
    Email: <FaEnvelope className="w-5 h-5" />
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-medium">
              © {new Date().getFullYear()} Shreyash Bhosale. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                {socialIcons[social.name as keyof typeof socialIcons] || social.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            Open to new opportunities and collaborations. Let's build something amazing!
          </p>
        </div>
      </div>
    </footer>
  );
}