import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          Sreshtha Dutta
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 mb-8">
          Developer • Designer • Technical Writer
        </div>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I create digital experiences through code, design, and clear communication.
        </p>
        <button
          onClick={() => onNavigate('about')}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;