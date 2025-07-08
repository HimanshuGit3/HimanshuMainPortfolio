import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'himanshusingh300',
      url: 'https://www.linkedin.com/in/himanshusingh300/',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'himanshu300.singh@gmail.com',
      url: 'mailto:himanshu300.singh@gmail.com',
      color: 'text-purple-400 hover:text-purple-300'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7488113558',
      url: 'tel:+917488113558',
      color: 'text-cyan-400 hover:text-cyan-300'
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 glow-text" data-aos="fade-up">
          Connect with Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-gray-300 text-lg md:text-xl">
              Ready to collaborate on your next DevOps project? Let's connect and build something amazing together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.label}
                className="tech-card text-center group cursor-hover"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <a
                  href={contact.url}
                  target={contact.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <contact.icon className={`w-12 h-12 mx-auto mb-4 ${contact.color} transition-colors`} />
                  <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300 font-roboto-mono text-sm group-hover:text-white transition-colors">
                    {contact.value}
                  </p>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-gray-400 font-roboto-mono">
              © 2024 Himanshu Kumar Singh. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;