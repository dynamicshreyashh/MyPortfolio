import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiFramer } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export default function TechStack() {
  const techCategories = [
    {
      name: "Frontend",
      items: [
        { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next JS", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "JavaScript", icon: <DiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      ]
    },
    {
      name: "Backend & Tools",
      items: [
        { name: "Node JS", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express JS", icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-black dark:text-white" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        <span className="text-blue-600">#</span> TECH STACK
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="text-2xl">
                      {tech.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}