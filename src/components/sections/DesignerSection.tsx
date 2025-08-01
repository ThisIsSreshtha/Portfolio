import React from 'react';
import { ExternalLink, Figma, Palette, Users, Award } from 'lucide-react';

const DesignerSection: React.FC = () => {
  const designProjects = [
    {
      title: 'FinTech Mobile App',
      description: 'Complete UI/UX design for a cryptocurrency trading platform. Focused on simplifying complex financial data into intuitive interfaces.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Design',
      tools: ['Figma', 'Principle', 'After Effects'],
      link: '#'
    },
    {
      title: 'SaaS Dashboard Redesign',
      description: 'Redesigned analytics dashboard for B2B SaaS platform, improving user engagement by 40% and reducing support tickets by 25%.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Design',
      tools: ['Figma', 'Sketch', 'Zeplin'],
      link: '#'
    },
    {
      title: 'E-learning Platform',
      description: 'Educational platform design focusing on accessibility and engagement. Created design system used across 50+ course modules.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UX Design',
      tools: ['Figma', 'Miro', 'UsabilityHub'],
      link: '#'
    },
    {
      title: 'Healthcare App Interface',
      description: 'Patient management system design with emphasis on clarity and efficiency. Streamlined workflow for medical professionals.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare',
      tools: ['Adobe XD', 'Illustrator', 'InVision'],
      link: '#'
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand identity for tech startup including logo, guidelines, and marketing materials. Modern, scalable design approach.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      link: '#'
    },
    {
      title: 'AR Shopping Experience',
      description: 'Augmented reality interface design for furniture shopping app. Innovative approach to product visualization and interaction.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AR/VR',
      tools: ['Figma', 'Reality Composer', 'Blender'],
      link: '#'
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'User interviews, competitive analysis, and stakeholder workshops to understand problems and opportunities.',
      icon: Users
    },
    {
      step: '02',
      title: 'Ideation & Wireframing',
      description: 'Brainstorming solutions, creating user flows, and developing low-fidelity wireframes.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'High-fidelity designs, interactive prototypes, and comprehensive design systems.',
      icon: Figma
    },
    {
      step: '04',
      title: 'Testing & Iteration',
      description: 'User testing, feedback collection, and iterative improvements to optimize the experience.',
      icon: Award
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Design Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Creating intuitive, beautiful interfaces that solve real problems. 
            My design philosophy centers on user empathy, accessibility, and meaningful interactions.
          </p>
        </div>

        {/* Design Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">My Design Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div
                  key={process.step}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-4">{process.step}</div>
                  <IconComponent className="mx-auto mb-4 text-pink-400" size={32} />
                  <h4 className="text-xl font-bold text-white mb-4">{process.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Design Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View Project</span>
                  </a>
                  <Figma className="text-gray-500" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;