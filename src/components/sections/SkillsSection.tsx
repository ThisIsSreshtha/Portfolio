import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'React/TypeScript', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Technical Writing', level: 92 },
    { name: 'Three.js', level: 80 },
    { name: 'Python', level: 88 },
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
            Skills
          </h2>
          
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;