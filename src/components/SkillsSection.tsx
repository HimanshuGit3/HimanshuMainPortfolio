import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Linux', color: 'text-orange-400' },
    { name: 'Python', color: 'text-blue-400' },
    { name: 'Docker', color: 'text-blue-500' },
    { name: 'Git', color: 'text-red-400' },
    { name: 'GitHub', color: 'text-gray-400' },
    { name: 'Kubernetes', color: 'text-blue-600' },
    { name: 'AWS Cloud', color: 'text-yellow-400' },
    { name: 'Ansible', color: 'text-red-500' },
    { name: 'Jenkins', color: 'text-blue-300' },
    { name: 'CI/CD', color: 'text-green-400' },
    { name: 'Terraform', color: 'text-purple-400' },
    { name: 'Grafana', color: 'text-orange-500' },
    { name: 'Prometheus', color: 'text-red-600' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 glow-text" data-aos="fade-up">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card text-center cursor-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`skill-name-display ${skill.color}`}>
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;