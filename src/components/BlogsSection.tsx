import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const blogs = [
    {
      title: 'How to build an Online polling app with Docker & K8s',
      topic: 'DevOps & Containerization',
      url: 'https://www.linkedin.com/posts/himanshusingh300_devops-python-docker-activity-7325560770585411586-iyev?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/pollingblog.jpeg'
    },
    {
      title: 'Case Study: How Hotstar uses Kubernetes',
      topic: 'Cloud Architecture',
      url: 'https://www.linkedin.com/posts/himanshusingh300_kubernetes-hotstar-techcasestudy-activity-7294721180362534912-Pu73?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/jio-hotstar-blog.jpeg'
    },
    {
      title: 'How Docker saves time & money for companies',
      topic: 'Business & Technology',
      url: 'https://www.linkedin.com/posts/himanshusingh300_devops-docker-devopsjourney-activity-7290293655406350336-_HHS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/dockerblog.jpeg'
    },
    {
      title: 'Post a LinkedIn message with Python',
      topic: 'Automation & Python',
      url: 'https://www.linkedin.com/posts/himanshusingh300_arthlearner-tech-linuxworld-activity-7262092199763267585-KLoC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/linkedinautomationblog.jpeg'
    },
    {
      title: 'How to read RAM using Linux',
      topic: 'System Administration',
      url: 'https://www.linkedin.com/posts/himanshusingh300_arthlearner-linuxworld-ram-activity-7256948678496579584-jg9b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/Ramblog.jpeg'
    },
    {
      title: 'Send Email using Python',
      topic: 'Python Programming',
      url: 'https://www.linkedin.com/posts/himanshusingh300_arthlearner-linuxworld-python-activity-7259919612459319297-779H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADejyhQBzkeWsTwvNt7hM-cA-rX8PN7Abrs',
      poster: '/email.jpeg'
    },
  ];

  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blogs" className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-12 glow-text" data-aos="fade-up">
          Technical Blogs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.title}
              className="blog-card group cursor-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Blog Poster */}
              <div className="blog-poster-container">
                <img 
                  src={blog.poster} 
                  alt={blog.title}
                  className="blog-poster"
                />
                <div className="blog-overlay">
                  <div className="blog-icon">{blog.icon}</div>
                  <div className={`blog-gradient bg-gradient-to-r ${blog.color}`}></div>
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="blog-content">
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-cyan-400 font-roboto-mono text-sm mb-4">
                  {blog.topic}
                </p>
                
                <button
                  onClick={() => handleBlogClick(blog.url)}
                  className="blog-btn cursor-hover"
                >
                  <BookOpen size={16} />
                  <span className="font-roboto-mono text-sm">Read Article</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
