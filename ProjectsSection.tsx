import { portfolioContent } from '../../config/content';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-white mb-6">Projects</h2>
      <div className="space-y-8">
        {portfolioContent.projects.items.map((project, index) => (
          <div key={index} className="group">
            <a 
              href={project.link}
              className="block p-4 rounded-lg transition-all duration-200 hover:bg-white/5 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white group-hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}