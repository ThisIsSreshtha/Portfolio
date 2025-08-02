import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';

const DeveloperSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team communication features.',
      tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Web App'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation platform using OpenAI API. Generates blog posts, social media content, and marketing copy.',
      tech: ['Next.js', 'OpenAI API', 'Tailwind', 'Prisma'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'AI/ML'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.',
      tech: ['React Native', 'Express', 'JWT', 'Charts.js'],
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Mobile'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization, custom reports, and predictive analytics.',
      tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Data Viz'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform ensuring transparency and security using smart contracts and blockchain technology.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: 'https://images.pexels.com/photos/8350928/pexels-photo-8350928.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      category: 'Blockchain'
    }
  ];

  const technologies = [
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'Node.js', icon: Database, color: 'text-green-400' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-300' },
    { name: 'Python', icon: Code, color: 'text-yellow-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'Next.js', icon: Globe, color: 'text-gray-300' },
    { name: 'React Native', icon: Smartphone, color: 'text-cyan-400' }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building scalable, performant applications with modern technologies. 
            From concept to deployment, I create solutions that solve real-world problems.
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technologies I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className={`mx-auto mb-3 ${tech.color}`} size={32} />
                  <div className="text-white text-sm font-medium">{tech.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs"
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
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
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

export default DeveloperSection;