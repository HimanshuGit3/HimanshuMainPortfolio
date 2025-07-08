import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const blogs = [
    {
      title: 'How to build an Online polling app with Docker & K8s',
      topic: 'DevOps & Containerization',
      url: 'https://medium.com/@himanshu300/how-to-build-an-online-polling-app-with-docker-k8s-f7b5c5e8a9c2',
      icon: '🗳️',
      color: 'from-blue-500 to-purple-500',
      poster: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Case Study: How Hotstar uses Kubernetes',
      topic: 'Cloud Architecture',
      url: 'https://medium.com/@himanshu300/case-study-how-hotstar-uses-kubernetes-b8c3d4e7f9a1',
      icon: '📺',
      color: 'from-green-500 to-blue-500',
      poster: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'How Docker saves time & money for companies',
      topic: 'Business & Technology',
      url: 'https://medium.com/@himanshu300/how-docker-saves-time-money-for-companies-c5d8e9f2a3b4',
      icon: '🐳',
      color: 'from-cyan-500 to-blue-500',
      poster: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Post a LinkedIn message with Python',
      topic: 'Automation & Python',
      url: 'https://medium.com/@himanshu300/post-a-linkedin-message-with-python-d7e8f9a1b2c3',
      icon: '💼',
      color: 'from-purple-500 to-pink-500',
      poster: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'How to read RAM using Linux',
      topic: 'System Administration',
      url: 'https://medium.com/@himanshu300/how-to-read-ram-using-linux-e9f1a2b3c4d5',
      icon: '🖥️',
      color: 'from-orange-500 to-red-500',
      poster: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Send Email using Python',
      topic: 'Python Programming',
      url: 'https://medium.com/@himanshu300/send-email-using-python-f2a3b4c5d6e7',
      icon: '📧',
      color: 'from-teal-500 to-green-500',
      poster: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=600'
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