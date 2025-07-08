import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Linux with GenAI',
      platform: 'Udemy',
      icon: '🐧',
      description: 'Advanced Linux administration with AI integration',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Kubernetes Foundation',
      platform: 'Linux World',
      icon: '☸️',
      description: 'Container orchestration and cluster management',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'PromptOps AI DevOps',
      platform: 'Udemy',
      icon: '🤖',
      description: 'AI-powered DevOps automation and practices',
      color: 'from-green-500 to-cyan-500'
    },
    {
      title: 'Mastering Git & GitHub',
      platform: 'Udemy',
      icon: '🔧',
      description: 'Version control and collaborative development',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 glow-text" data-aos="fade-up">
          🏅 Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="cert-card cursor-hover"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="cert-card-inner">
                {/* Front */}
                <div className="cert-card-front">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{cert.icon}</div>
                    <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 font-roboto-mono text-sm">
                      {cert.platform}
                    </p>
                  </div>
                </div>
                
                {/* Back */}
                <div className="cert-card-back">
                  <div className="text-center text-white">
                    <Award className="w-8 h-8 mx-auto mb-3" />
                    <p className="font-roboto-mono text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;