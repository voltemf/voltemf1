import { portfolioContent } from '../../config/content';

export function AboutSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white mb-6">About</h2>
      <div className="text-gray-300 leading-relaxed space-y-4">
        {portfolioContent.about.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}