import { portfolioContent } from '../config/content';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: 'about', label: portfolioContent.about.title },
    { id: 'experience', label: portfolioContent.experience.title },
    { id: 'portfolio', label: portfolioContent.portfolio.title },
    { id: 'projects', label: portfolioContent.projects.title }
  ];

  return (
    <nav className="space-y-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`group flex items-center text-left transition-all duration-200 ${
            activeSection === section.id
              ? 'text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <div
            className={`h-px bg-current transition-all duration-200 mr-4 ${
              activeSection === section.id ? 'w-16' : 'w-8 group-hover:w-12'
            }`}
          />
          <span className="tracking-wider uppercase text-sm font-medium">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
}