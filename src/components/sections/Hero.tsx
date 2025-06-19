
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-left">
          {/* Greeting with dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-500 text-lg">Hey! I am</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Shreyash Bhosale,
            <br />
            <span className="text-gray-700">a Backend Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-gray-500 text-xl mb-8 max-w-2xl"
          >
            I dream in and eat <span className="text-blue-500">APIs</span> for breakfast!
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-gray-700 mb-10 max-w-2xl space-y-4"
          >
            <p>
              I specialize in crafting high-performance, scalable backend systems. With expertise in
            </p>
            <p>
              <span className="font-medium text-gray-900">Node.js, Express.js, MongoDB,</span> and{" "}
              <span className="font-medium text-gray-900">PostgreSQL</span>, I build robust server-side solutions.
            </p>
            <p>
              Whether it's REST APIs, database architecture, or cloud services, I transform ideas into production-ready systems.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="inline-flex items-center text-blue-500 hover:text-blue-700 group transition-colors"
            >
              <span className="mr-2 border-b border-blue-500 group-hover:border-blue-700 transition-colors">
                View my work
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}