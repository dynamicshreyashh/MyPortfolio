import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with dot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h2 className="text-gray-500 dark:text-gray-300 text-lg uppercase tracking-[0.05em]">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.25]"
          >
            Hey! I am <span className="text-blue-500">Shreyash Bhosale</span>,
            <br />
            a <span className="text-gray-700 dark:text-gray-300">Backend Developer</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 dark:text-gray-400 italic"
          >
            I dream in and eat <span className="text-blue-500">APIs</span> for breakfast!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 dark:text-gray-300 space-y-4"
          >
            <p>
              I specialize in building secure, scalable backend systems with expertise in
            </p>
            <p>
              <span className="font-medium text-gray-900 dark:text-white">Node.js</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">Express.js</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">MongoDB</span>, and{" "}
              <span className="font-medium text-gray-900 dark:text-white">PostgreSQL</span>.
            </p>
            <p>
              Whether it's REST APIs, microservices, or database optimization, I transform 
              requirements into high-performance solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}