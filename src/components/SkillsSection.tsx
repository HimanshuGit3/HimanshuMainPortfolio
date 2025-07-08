import React from 'react';
import { Terminal, Code, Container, GitBranch, Github, Diameter as Kubernetes, Cloud, Settings, Wrench, Zap, Database, BarChart3, Activity } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Linux', icon: Terminal, color: 'text-orange-400' },
    { name: 'Python', icon: Code, color: 'text-blue-400' },
    { name: 'Docker', icon: Container, color: 'text-blue-500' },
    { name: 'Git', icon: GitBranch, color: 'text-red-400' },
    { name: 'GitHub', icon: Github, color: 'text-gray-400' },
    { name: 'Kubernetes', icon: Kubernetes, color: 'text-blue-600' },
    { name: 'AWS Cloud', icon: Cloud, color: 'text-yellow-400' },
    { name: 'Ansible', icon: Settings, color: 'text-red-500' },
    { name: 'Jenkins', icon: Wrench, color: 'text-blue-300' },
    { name: 'CI/CD', icon: Zap, color: 'text-green-400' },
    { name: 'Terraform', icon: Database, color: 'text-purple-400' },
    { name: 'Grafana', icon: BarChart3, color: 'text-orange-500' },
    { name: 'Prometheus', icon: Activity, color: 'text-red-600' },
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
              className="tech-card text-center cursor-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <skill.icon className={`w-12 h-12 mx-auto mb-3 ${skill.color}`} />
              <h3 className="font-roboto-mono font-medium text-white text-sm md:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;