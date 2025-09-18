import { Github, Linkedin, Dribbble, Instagram, Music } from 'lucide-react';
import { portfolioContent } from '../config/content';

export function SocialLinks() {
  const socialIcons = [
    { href: portfolioContent.social.github, icon: Github, label: 'GitHub' },
    { href: portfolioContent.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: portfolioContent.social.dribbble, icon: Dribbble, label: 'Dribbble' },
    { href: portfolioContent.social.instagram, icon: Instagram, label: 'Instagram' },
    { href: portfolioContent.social.spotify, icon: Music, label: 'Spotify' },
  ];

  return (
    <div className="flex gap-6 mt-8">
      {socialIcons.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}