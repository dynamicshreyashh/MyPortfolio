export default function Projects() {
  const projects = [
    {
      title: "Inventra – Inventory Management",
      description: "Full-stack inventory management platform using Next.js, React, and TypeScript with Node.js/Express.js backend and PostgreSQL database.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
      features: [
        "Automated product tracking and restocking",
        "Responsive admin dashboards",
        "Secure backend APIs",
        "Web scraping integration"
      ],
      githubUrl: "https://github.com/dynamicshreyashh/Inventra",
      demoUrl: "#"
    },
    {
      title: "Wanderlust Travel Hub",
      description: "Travel discovery web app with Google Maps API integration and secure authentication system.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Google Maps API"],
      features: [
        "Interactive destination exploration",
        "Real-time location insights",
        "Secure JWT authentication",
        "Responsive EJS templates"
      ],
      githubUrl: "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform",
      demoUrl: "#"
    },
    {
      title: "AI Virtual Mouse",
      description: "Hand gesture-controlled virtual mouse using computer vision and machine learning.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
      features: [
        "Real-time hand detection",
        "Gesture recognition",
        "Customizable cursor controls",
        "User-friendly interface"
      ],
      githubUrl: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.demoUrl} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}