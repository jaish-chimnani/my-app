import { ArrowRight, Award, BookOpen, Briefcase, Calendar, Code, Download, Github, GraduationCap, Linkedin, Mail, Menu, Phone, Star, TrendingUp, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Software Engineer L2",
      company: "Gemini Solutions Pvt. Ltd.",
      location: "Haryana, India",
      period: "2024 – Present",
      highlights: [
        "Leading backend development for various Small Medium Enterprise Insurance solutions",
        "Led strategic business discussions and project planning, ensuring quality assurance",
        "Developed user-friendly interfaces and optimized application performance"
      ]
    },
    {
      title: "Software Engineer L1",
      company: "Gemini Solutions Pvt. Ltd.",
      location: "Haryana, India",
      period: "04/2023 – 04/2024",
      highlights: [
        "Built customizable admin dashboard with role-based access control (RBAC)",
        "Reduced initial load time by 45% using lazy loading and code-splitting",
        "Transitioned to monorepo architecture, reducing build time by 50%",
        "Improved API response times, reducing latency by 50ms per request"
      ]
    }
  ];

  const projects = [
    {
      title: "Emaar (Real Estate Development)",
      year: "2024",
      description: "Connect Now 2.0 - A comprehensive portal managing ticket systems, approval workflows, and asset management",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Material UI", "HTML5", "CSS"],
      highlights: [
        "Built reusable shared components for improved modularity",
        "Optimized performance and enhanced system stability"
      ]
    },
    {
      title: "TATA AIG ONECRM",
      year: "2023",
      description: "Internal CRM system for managing meetings, audits, and policy tracking",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Material-UI", "Node.js"],
      highlights: [
        "Implemented Micro-Frontend Architecture using module federation",
        "Created shared component repository for mono repos"
      ]
    },
    {
      title: "Sharemeister (Athletic Estate)",
      year: "2022",
      description: "E-commerce platform for sportswear with media broadcasting and messaging features",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      highlights: [
        "Implemented responsive UI with performance optimization",
        "Integrated efficient API solutions"
      ]
    }
  ];

  const skills = {
    primary: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "Redux Toolkit", "React Query", "Context API", "Tailwind CSS", "HTML5", "CSS3"],
    secondary: ["Node.js", "Firebase", "SQL", "Material UI", "React Router", "Git", "Webpack", "Agile/Scrum"]
  };

  const achievements = [
    {
      title: "Performance Optimization Expert",
      description: "Reduced application load time by 45% through lazy loading and code-splitting techniques",
      metric: "45% improvement",
      icon: TrendingUp
    },
    {
      title: "Build Process Enhancement",
      description: "Transitioned to monorepo architecture, cutting build time in half",
      metric: "50% faster builds",
      icon: Award
    },
    {
      title: "API Performance Specialist",
      description: "Optimized API response times, improving user experience significantly",
      metric: "50ms latency reduction",
      icon: Star
    },
    {
      title: "Team Leadership",
      description: "Leading strategic business discussions and end-to-end project planning",
      metric: "Cross-functional collaboration",
      icon: User
    }
  ];

  const testimonials = [
    {
      name: "Senior Project Manager",
      role: "Gemini Solutions",
      content: "Jaish consistently delivers high-quality solutions and has been instrumental in leading our frontend architecture decisions. His expertise in React and TypeScript has significantly improved our development velocity.",
      rating: 5
    },
    {
      name: "Technical Lead",
      role: "Development Team",
      content: "Working with Jaish on the TATA AIG project was exceptional. His implementation of micro-frontend architecture and shared component systems showed deep technical understanding and forward-thinking approach.",
      rating: 5
    },
    {
      name: "Product Owner",
      role: "Emaar Project",
      content: "Jaish's ability to translate business requirements into technical solutions is remarkable. The Connect Now 2.0 portal exceeded our expectations in terms of both functionality and user experience.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Micro-Frontend Architecture: A Practical Guide",
      excerpt: "Deep dive into implementing micro-frontend architecture using module federation, based on real-world experience with enterprise applications.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Micro-frontends"]
    },
    {
      title: "Performance Optimization in React Applications",
      excerpt: "Comprehensive guide to reducing load times and improving user experience through lazy loading, code splitting, and efficient state management.",
      date: "2024-02-28",
      readTime: "12 min read",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      title: "Building Scalable Component Libraries",
      excerpt: "Best practices for creating reusable component libraries that scale across multiple projects and teams in large organizations.",
      date: "2024-01-20",
      readTime: "10 min read",
      tags: ["React", "Components", "TypeScript"]
    },
    {
      title: "Modern State Management Patterns",
      excerpt: "Exploring different state management approaches from Context API to Redux Toolkit, and when to use each pattern effectively.",
      date: "2024-01-05",
      readTime: "15 min read",
      tags: ["React", "State Management", "Redux"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JC
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {['about', 'experience', 'projects', 'skills', 'achievements', 'testimonials', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 text-sm ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['about', 'experience', 'projects', 'skills', 'achievements', 'testimonials', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Jaish Chimnani
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Senior React Developer & Frontend Engineer
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Passionate Software Engineer with 3+ years of experience crafting exceptional user experiences. 
                Specialized in React.js, TypeScript, and modern frontend technologies. Leading backend development 
                and strategic business discussions while maintaining a focus on quality and performance optimization.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:jaishchimnani9@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Mail size={20} />
                Get In Touch
              </a>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Download size={20} />
                Download Resume
              </button>
              <a href="https://www.linkedin.com/in/jaish-chimnani/" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/jaish-chimnani" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail size={16} />
                jaishchimnani9@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                +91-7505119336
              </div>
              <div>📍 Gurugram, Haryana, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <div className="text-gray-500 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Code className="text-blue-600" size={24} />
                Primary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.primary.map((skill, index) => (
                  <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-purple-600" size={24} />
                Secondary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.secondary.map((skill, index) => (
                  <span key={index} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-gray-600" size={24} />
              Education
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Bachelor of Technology, Computer Science</h4>
                <p className="text-gray-600">GLA University, Mathura, UP, India</p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                <p>2019 – 2023</p>
                <p className="font-semibold">CPI: 8.3/10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{achievement.description}</p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg inline-block">
                        <span className="text-blue-700 font-semibold text-sm">{achievement.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Colleagues Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles & Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sharing knowledge and insights about React development, architecture patterns, and modern frontend practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                  <BookOpen size={16} />
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              <BookOpen size={20} />
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm always excited to work on innovative projects and collaborate with talented teams. 
            Whether you're looking for a frontend developer, need consultation on React architecture, 
            or want to discuss opportunities, I'd love to hear from you!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:jaishchimnani9@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jaish-chimnani/" 
              className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
            
            <a 
              href="https://github.com/jaish-chimnani" 
              className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-all transform hover:scale-105"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Jaish Chimnani. Built with React and passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;