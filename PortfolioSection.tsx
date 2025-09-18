import { portfolioContent } from '../../config/content';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import engineImage from 'figma:asset/d0c65f3691417d4687700b744a4b0acad0c33157.png';

interface PortfolioItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const getPortfolioImage = (index: number): string => {
  const images = [
    "https://images.unsplash.com/photo-1752774579270-523a9e91e6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZW5naW5lJTIwcGFydHN8ZW58MXx8fHwxNzU4MDcyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhhbmNlJTIwcG9ydGZvbGlvJTIwZGVzaWdufGVufDF8fHx8MTc1ODA3MzcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1587287720754-94bac45f0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZXN1bWUlMjBkb2N1bWVudHxlbnwxfHx8fDE3NTgwNzI3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];
  return images[index] || images[0];
};

export function PortfolioSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl lg:text-3xl text-white mb-8">
        {portfolioContent.portfolio.title}
      </h2>
      
      <div className="space-y-12">
        {portfolioContent.portfolio.items.map((item: PortfolioItem, index: number) => (
          <div key={index} className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              
              {/* Portfolio Item Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                {item.link !== "#" && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              {/* Portfolio Image or Embedded 3D Model */}
              <div className="mb-4 bg-white/5 rounded-md overflow-hidden">
                {index === 1 ? (
                  // Embedded Sketchfab 3D Model for Behance Portfolio
                  <div className="sketchfab-embed-wrapper w-full h-64">
                    <iframe 
                      title="Assembly 1" 
                      frameBorder="0" 
                      allowFullScreen 
                      mozallowfullscreen="true" 
                      webkitallowfullscreen="true" 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      src="https://sketchfab.com/models/df8619af0cda42649555c0ee8af9b2c9/embed?autospin=1&autostart=1&preload=1&transparent=1"
                      className="w-full h-full"
                    />
                    <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                      <a 
                        href="https://sketchfab.com/3d-models/assembly-1-df8619af0cda42649555c0ee8af9b2c9?utm_medium=embed&utm_campaign=share-popup&utm_content=df8619af0cda42649555c0ee8af9b2c9" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        Assembly 1
                      </a>
                      {" by "}
                      <a 
                        href="https://sketchfab.com/voltemf?utm_medium=embed&utm_campaign=share-popup&utm_content=df8619af0cda42649555c0ee8af9b2c9" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        voltemf
                      </a>
                      {" on "}
                      <a 
                        href="https://sketchfab.com/voltemf?utm_medium=embed&utm_campaign=share-popup&utm_content=df8619af0cda42649555c0ee8af9b2c9" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        Sketchfab
                      </a>
                    </p>
                  </div>
                ) : index === 2 ? (
                  // Embedded Sketchfab 3D Model for Professional Resume
                  <div className="sketchfab-embed-wrapper w-full h-64">
                    <iframe 
                      title="Thruster" 
                      frameBorder="0" 
                      allowFullScreen 
                      mozallowfullscreen="true" 
                      webkitallowfullscreen="true" 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      src="https://sketchfab.com/models/f3c96d79aac04d1cb889c31c11cb6a44/embed?autospin=1&autostart=1&preload=1&transparent=1"
                      className="w-full h-full"
                    />
                    <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                      <a 
                        href="https://sketchfab.com/3d-models/thruster-f3c96d79aac04d1cb889c31c11cb6a44?utm_medium=embed&utm_campaign=share-popup&utm_content=f3c96d79aac04d1cb889c31c11cb6a44" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        Thruster
                      </a>
                      {" by "}
                      <a 
                        href="https://sketchfab.com/voltemf?utm_medium=embed&utm_campaign=share-popup&utm_content=f3c96d79aac04d1cb889c31c11cb6a44" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        voltemf
                      </a>
                      {" on "}
                      <a 
                        href="https://sketchfab.com/voltemf?utm_medium=embed&utm_campaign=share-popup&utm_content=f3c96d79aac04d1cb889c31c11cb6a44" 
                        target="_blank" 
                        rel="nofollow" 
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                      >
                        Sketchfab
                      </a>
                    </p>
                  </div>
                ) : (
                  // Regular images for other portfolio items
                  <ImageWithFallback 
                    src={index === 0 ? engineImage : getPortfolioImage(index)}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}