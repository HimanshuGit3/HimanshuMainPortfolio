import React, { useEffect, useState } from 'react';
import { Download, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Aspiring DevOps Engineer';
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=18n8PVbzhFGwFIYy3nHv9AASgRweWcqNl';
    link.download = 'Himanshu_Kumar_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    window.location.href = 'mailto:himanshu300.singh@gmail.com?subject=Job Opportunity&body=Hello Himanshu, I would like to discuss a job opportunity with you.';
  };

  return (
    <section id="home" className="section min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              <span className="rainbow-text">Himanshu Kumar</span>
              <br />
              <span className="text-purple-400">Singh</span>
            </h1>
            
            <h2 className="font-orbitron font-semibold text-xl md:text-2xl text-cyan-400 min-h-[2rem]">
              {displayedText}
              <span className="typing-cursor">|</span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              A passionate DevOps Engineer skilled in automation, cloud, containers, and CI/CD pipelines. 
              Eager to build scalable, reliable systems that drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleDownloadResume}
                className="neon-button flex items-center gap-2 cursor-hover"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <button
                onClick={handleHireMe}
                className="neon-button flex items-center gap-2 cursor-hover"
                style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)' }}
              >
                <Mail size={20} />
                Hire Me
              </button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="profile-container-wrapper">
              {/* Neural Network Background */}
              <div className="neural-network-bg">
                {/* Neural Nodes */}
                <div className="neural-node node-1"></div>
                <div className="neural-node node-2"></div>
                <div className="neural-node node-3"></div>
                <div className="neural-node node-4"></div>
                <div className="neural-node node-5"></div>
                <div className="neural-node node-6"></div>
                <div className="neural-node node-7"></div>
                <div className="neural-node node-8"></div>
                
                {/* Neural Connections */}
                <div className="neural-connection connection-1"></div>
                <div className="neural-connection connection-2"></div>
                <div className="neural-connection connection-3"></div>
                <div className="neural-connection connection-4"></div>
                <div className="neural-connection connection-5"></div>
                
                {/* Quantum Particles */}
                <div className="quantum-particles">
                  <div className="quantum-particle particle-1"></div>
                  <div className="quantum-particle particle-2"></div>
                  <div className="quantum-particle particle-3"></div>
                  <div className="quantum-particle particle-4"></div>
                </div>
              </div>
              
              {/* Energy Waves */}
              <div className="energy-waves">
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
                <div className="wave wave-4"></div>
              </div>
              
              <div className="profile-container">
                <div className="profile-hologram-effect"></div>
                <div className="profile-img">
                  <img
                    src="/Himanshu.png"
                    alt="Himanshu Kumar Singh"
                    className="w-full h-full object-cover rounded-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;