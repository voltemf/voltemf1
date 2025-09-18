import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioContent } from './config/content';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SocialLinks } from './components/SocialLinks';
import { LoadingScreen } from './components/LoadingScreen';
import { BearModal } from './components/BearModal';
// Bear mascot image - Custom bear from Imgur
const bearImage = "https://i.imgur.com/DuvwmDi.png";

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);
  const [isBearModalOpen, setIsBearModalOpen] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Application */}
      <motion.div 
        className="min-h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
      {/* Layer 1: Midnight Blue Background (Base) */}
      <div className="absolute inset-0 bg-slate-900" style={{backgroundColor: '#191970'}}></div>
      
      {/* Layer 2: Engine Exploded View 3D Model (Middle) - Seamless Midnight Blue Integration */}
      {portfolioContent.background.showBackground && portfolioContent.background.backgroundFile && !modelError && (
        <motion.div 
          className="absolute inset-0 z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: isLoading ? 0 : 0.5 }}
        >
          <iframe 
            src={portfolioContent.background.backgroundFile}
            title="engine-exploded-view"
            className="w-full h-full border-0"
            style={{backgroundColor: '#191970'}}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              setModelLoaded(true);
              console.log('3D model loaded successfully');
            }}
            onError={() => {
              setModelError(true);
              console.log('3D model failed to load - using fallback');
            }}
          />
        </motion.div>
      )}
      
      {/* Fallback Background Pattern when 3D model fails */}
      {(modelError || !portfolioContent.background.showBackground) && (
        <div className="absolute inset-0 z-5" style={{backgroundColor: '#191970'}}>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 70%),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 70%),
                linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)
              `
            }}
          />
        </div>
      )}
      
      {/* Layer 3: Darker Blue Overlay */}
      <div className="absolute inset-0 z-8" style={{backgroundColor: 'rgba(25, 25, 112, 0.7)'}}></div>
      
      {/* Layer 4: Text Content (Top) */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 min-h-screen">
            
            {/* Left Column - Header & Navigation */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl text-white mb-4 tracking-tight">
                  {portfolioContent.name}
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-300 mb-6">
                  {portfolioContent.title}
                </h2>
                <p className="text-gray-400 max-w-xs leading-relaxed">
                  {portfolioContent.description}
                </p>
              </header>
              
              <Navigation 
                activeSection={activeSection} 
                onSectionChange={setActiveSection} 
              />
              
              <SocialLinks />
            </div>
            
            {/* Right Column - Content Sections */}
            <div className="lg:pt-24">
              <main className="text-gray-300">
                {renderActiveSection()}
              </main>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Layer 5: Bear Image - Bottom Right Corner - Interactive */}
      <motion.div 
        className="fixed bottom-6 right-6 z-20 cursor-pointer"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: {
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.2, ease: "easeOut" }
          }
        }}
        whileTap={{ 
          scale: 0.9,
          rotate: 360,
          transition: { 
            duration: 0.6,
            ease: "easeInOut"
          }
        }}
        onClick={() => {
          setIsBearModalOpen(true);
          console.log('🐻 Bear clicked! Opening modal...');
        }}
        title="Click me to meet your portfolio bear! 🐻"
      >
        <motion.img 
          src={bearImage} 
          alt="Bear mascot - Click to meet me!"
          className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-lg"
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-blue-400/20 rounded-full blur-md -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
      
      {/* Bear Modal */}
      <BearModal 
        isOpen={isBearModalOpen} 
        onClose={() => setIsBearModalOpen(false)} 
      />
      </motion.div>
    </>
  );
}