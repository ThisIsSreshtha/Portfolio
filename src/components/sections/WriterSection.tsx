import React from 'react';
import { ExternalLink, BookOpen, Users, TrendingUp, Award } from 'lucide-react';

const WriterSection: React.FC = () => {
  const writingProjects = [
    {
      title: 'Complete React Development Guide',
      description: 'Comprehensive 50-chapter guide covering React fundamentals to advanced patterns. Over 100,000 views and 500+ positive reviews.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technical Tutorial',
      stats: { views: '100K+', engagement: '95%' },
      link: '#'
    },
    {
      title: 'API Documentation Redesign',
      description: 'Rewrote API documentation for fintech startup, improving developer adoption by 200% and reducing support requests by 60%.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Documentation',
      stats: { adoption: '200%', support: '-60%' },
      link: '#'
    },
    {
      title: 'UX Writing for Mobile Apps',
      description: 'Microcopy and UX writing for 15+ mobile applications. Focus on clarity, accessibility, and user-friendly language.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UX Writing',
      stats: { apps: '15+', satisfaction: '4.8/5' },
      link: '#'
    },
    {
      title: 'Tech Blog Content Strategy',
      description: 'Content strategy and writing for SaaS company blog. Increased organic traffic by 300% and generated 500+ qualified leads.',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Content Marketing',
      stats: { traffic: '300%', leads: '500+' },
      link: '#'
    },
    {
      title: 'Developer Onboarding Guide',
      description: 'Complete onboarding documentation for open-source project. Contributed to 40% faster developer setup and increased contributions.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Open Source',
      stats: { setup: '40% faster', contributors: '+150%' },
      link: '#'
    },
    {
      title: 'Technical White Papers',
      description: 'Series of white papers on blockchain technology, AI ethics, and cybersecurity for enterprise clients and industry publications.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'White Paper',
      stats: { downloads: '10K+', citations: '50+' },
      link: '#'
    }
  ];

  const writingServices = [
    {
      icon: BookOpen,
      title: 'Technical Documentation',
      description: 'API docs, user guides, and developer resources that make complex topics accessible.',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'UX Writing',
      description: 'Microcopy, error messages, and interface text that guides users naturally.',
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Blog posts, tutorials, and marketing content that drives engagement and growth.',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Technical Editing',
      description: 'Editing and proofreading technical content for clarity, accuracy, and consistency.',
      color: 'text-orange-400'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Writing Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming complex technical concepts into clear, engaging content. 
            I help companies communicate better with developers, users, and stakeholders.
          </p>
        </div>

        {/* Writing Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Writing Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {writingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className={`mx-auto mb-4 ${service.color}`} size={32} />
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Writing Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writingProjects.map((project, index) => (
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
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-sm font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Read More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-12 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-6">Need Help with Technical Content?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to make your technical content clear, engaging, and effective.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriterSection;