import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Development'
    },
    {
      title: 'Mobile App Design',
      description: 'Complete UI/UX design for a fintech mobile application.',
      tech: ['Figma', 'Principle', 'Prototyping'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Design'
    },
    {
      title: 'Technical Documentation',
      description: 'Comprehensive API documentation that improved developer adoption by 200%.',
      tech: ['Technical Writing', 'Documentation', 'API'],
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Writing'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates.',
      tech: ['React', 'Socket.io', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Development'
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand identity for tech startup including guidelines.',
      tech: ['Illustrator', 'Branding', 'Design System'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Design'
    },
    {
      title: 'Developer Blog',
      description: 'Technical blog content that increased organic traffic by 300%.',
      tech: ['Content Strategy', 'SEO', 'Technical Writing'],
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Writing'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my work across development, design, and technical writing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;