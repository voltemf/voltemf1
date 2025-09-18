import { portfolioContent } from '../../config/content';

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {portfolioContent.experience.jobs.map((job, index) => (
          <div key={index} className="group">
            <div className="flex flex-col lg:flex-row lg:gap-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 lg:mb-0 lg:w-32 flex-shrink-0">
                {job.period}
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">
                  {job.title} · {job.company}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}