import { EDUCATION } from '../../config/constants';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <span className="text-blue-600">#</span>Education
        </h2>
        
        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {edu.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.degree}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}