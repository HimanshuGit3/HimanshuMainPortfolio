import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Multi-Tier Polling Application',
      description: 'Built a scalable polling app using Docker, Kubernetes, and MySQL. Integrated CI/CD pipeline for automated deployment.',
      techStack: ['Docker', 'Kubernetes', 'MySQL', 'CI/CD', 'Python'],
      githubUrl: 'https://github.com/himanshu300/polling-app',
      liveUrl: 'https://github.com/himanshu300/polling-app',
      color: 'from-purple-500 to-pink-500',
      poster: '/multi.jpeg'
    },
    {
      title: 'Web Scraper with SQL and Python',
      description: 'Automated web scraping using Python and stored data in a SQL database.',
      techStack: ['Python', 'SQL', 'BeautifulSoup', 'Pandas', 'SQLite'],
      githubUrl: 'https://github.com/himanshu300/web-scraper',
      liveUrl: 'https://github.com/himanshu300/web-scraper',
      color: 'from-blue-500 to-cyan-500',
      poster: '/webscrap.jpeg'
    },
    {
      title: 'CI/CD Automation with Jenkins',
      description: 'Deployed web apps automatically via Jenkins and custom CI/CD pipelines.',
      techStack: ['Jenkins', 'Docker', 'Git', 'AWS', 'Shell Scripting'],
      githubUrl: 'https://github.com/himanshu300/jenkins-cicd',
      liveUrl: 'https://github.com/himanshu300/jenkins-cicd',
      color: 'from-green-500 to-teal-500',
      poster: '/CICD.jpeg'
    },
    {
      title: 'Voice Assistant with AWS Integration',
      description: 'Voice-controlled assistant for email, WhatsApp, and AWS S3 using Python and Boto3.',
      techStack: ['Python', 'AWS', 'Boto3', 'Speech Recognition', 'NLP'],
      githubUrl: 'https://github.com/himanshu300/voice-assistant',
      liveUrl: 'https://github.com/himanshu300/voice-assistant',
      color: 'from-orange-500 to-red-500',
      poster: '/voiceassistent.jpeg'
    },
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 glow-text" data-aos="fade-up">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group cursor-hover"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Project Poster */}
              <div className="project-poster-container">
                <img 
                  src={project.poster} 
                  alt={project.title}
                  className="project-poster"
                />
              </div>
              
              {/* Project Content */}
              <div className="project-content">
                <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleProjectClick(project.githubUrl)}
                    className="project-btn github-btn cursor-hover"
                  >
                    <Github size={20} />
                    <span className="font-roboto-mono">GitHub</span>
                  </button>
                  
                  <button
                    onClick={() => handleProjectClick(project.liveUrl)}
                    className="project-btn demo-btn cursor-hover"
                  >
                    <ExternalLink size={20} />
                    <span className="font-roboto-mono">Live Demo</span>
                  </button>
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