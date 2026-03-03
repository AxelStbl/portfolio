import { getContent, getProjects } from '../portfolioData';

export default function Projects({ language }) {
  const projects = getProjects(language);
  const content = getContent(language, 'projects');

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">{content.title}</h2>
        <p className="text-gray-400 mb-12">{content.subtitle}</p>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="p-8 border border-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-blue-400 text-sm mt-1">{project.company}</p>

              <p className="text-gray-300 mt-4">{project.description}</p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-2">Impact</p>
                  <p className="text-sm">{project.impact}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-gray-500 uppercase mb-2">Metrics</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-900 text-blue-200 px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
