import { Award, Briefcase, Code, Download, Github, GraduationCap, Linkedin, Mail, Menu, Phone, Star, TrendingUp, X } from 'lucide-react'; // Import Sun and Moon icons
import { useEffect, useState } from 'react';
import image from "../../assets/profile.jpeg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Effect to apply/remove 'dark' class on <html> element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const experiences = [
    {
      title: "Software Engineer L2",
      company: "Gemini Solutions Pvt. Ltd.",
      location: "Haryana, India",
      period: "2024 – Present",
      highlights: [
        "Architected and developed a CRM tool using Micro-Frontend Architecture with Module Federation, reducing feature delivery time by 30% across teams",
        "Created and maintained a shared UI component library, improving reusability and reducing redundant code by 40%",
        "Integrated RESTful APIs in a real estate portal managing tickets, approvals, and assets, improving operational response time by 25%",
        "Spearheaded frontend optimization using code-splitting and lazy loading, decreasing initial load time by 45%",
        "Collaborated with backend and QA teams to deliver scalable and maintainable features, reducing post-deployment bugs by 35%"
      ]
    },
    {
      title: "Software Engineer L1",
      company: "Gemini Solutions Pvt. Ltd.",
      location: "Haryana, India",
      period: "Apr 2023 – Apr 2024",
      highlights: [
        "Developed an internal ticketing portal using React, Redux, and MUI, improving service request tracking and reducing resolution time by 20%",
        "Built a microsite for an insurance product using Vite and React Redux with payment integration and form validation, leading to a 15% increase in conversion rates",
        "Designed reusable, responsive UI components with Material-UI and Tailwind CSS, reducing UI development time by 30%",
        "Implemented business-driven UI enhancements and collaborated with stakeholders to ensure delivery within sprint timelines",
        "Contributed to improved DX by adopting Vite, cutting build time by over 50%"
      ]
    }
  ];

  const projects = [
    {
      title: "Enterprise Resource Management Portal",
      year: "2024",
      description: "Developed a comprehensive web portal for a large enterprise, streamlining operations across various departments. This system centralized crucial management functions, including ticket handling, approval workflows, and asset tracking, significantly improving organizational efficiency.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Material UI", "HTML5", "CSS"],
      highlights: [
        "Engineered a highly modular architecture by building reusable shared components, enhancing maintainability and speeding up future development cycles.",
        "Successfully optimized the application for peak performance and resolved critical bugs, leading to a more stable and reliable system for end-users."
      ]
    },
    {
      title: "Custom Relationship Management System",
      year: "2023",
      description: "Designed and implemented an internal CRM solution to manage client interactions, meeting schedules, and audit processes. This system was vital for tracking complex policy information and various business logics for a major client, enhancing internal data management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Material-UI", "Node.js", "Module Federation"],
      highlights: [
        "Pioneered the adoption of a Micro-Frontend Architecture using module federation, significantly improving development scalability and team collaboration.",
        "Established a centralized shared component repository, providing consistent and reusable UI elements across multiple associated projects."
      ]
    },
    {
      title: "Specialized E-commerce Platform",
      year: "2022",
      description: "Created an e-commerce platform tailored for a niche market, incorporating advanced features beyond standard shopping functionalities. The platform included unique capabilities such as media broadcasting and integrated messaging services, providing a richer user experience.",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      highlights: [
        "Developed highly responsive UI components, ensuring seamless user experience across devices, while implementing performance optimizations through code splitting, lazy loading and efficient API integrations."
      ]
    }
  ];

  const skills = {
    primary: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "Redux Toolkit", "React Query", "Context API", "Tailwind CSS", "HTML5", "CSS3"],
    secondary: ["Node.js", "Firebase", "SQL", "Material UI", "React Router", "Git", "Webpack", "Agile/Scrum"]
  };

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Decreased initial application load time by 45% using code-splitting and lazy loading.",
      metric: "45% faster load time",
      icon: TrendingUp
    },
    {
      title: "Architecture & Reusability",
      description: "Implemented Micro-Frontend Architecture and created a shared UI component library, reducing feature delivery time by 30% and code redundancy by 40%.",
      metric: "Modular & efficient code",
      icon: Award
    },
    {
      title: "Build Process Improvement",
      description: "Contributed to improved Developer Experience (DX) by adopting Vite, cutting build time by over 50%.",
      metric: "50% faster builds",
      icon: Code
    },
    {
      title: "Operational Efficiency",
      description: "Integrated RESTful APIs in a real estate portal, improving operational response time by 25%.",
      metric: "25% faster operations",
      icon: Star
    }
  ];

  return (
    // Apply dark mode background and text colors to the main container
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-800/90 dark:shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JC
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              {['about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 text-sm ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
              {/* Theme Toggle Button for Desktop */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {/* {theme === 'light' ? <Moon size={20} className="text-gray-700 dark:text-gray-300" /> : <Sun size={20} className="text-yellow-500" />} */}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {/* {theme === 'light' ? <Moon size={24} className="text-gray-700 dark:text-gray-300" /> : <Sun size={24} className="text-yellow-500" />} */}
              </button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-white dark:bg-gray-800"> {/* Added bg-white dark:bg-gray-800 here */}
              {['about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 !rounded-full overflow-hidden flex items-center justify-center">
                <img src={image} alt="" />
                {/* <User size={48} className="text-white" /> */}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                Jaish Chimnani
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Senior React Developer & Frontend Engineer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Frontend Engineer with over 3 years of experience building performant, scalable web applications. Proficient in modern technologies including React, TypeScript, Redux Toolkit, and Tailwind CSS. Experienced in developing reusable component libraries, integrating APIs, and working in Agile environments. Proven track record of improving performance, enhancing UI/UX, and reducing technical debt across enterprise-scale projects.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:jaishchimnani9@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Mail size={20} />
                Get In Touch
              </a>
              {/* Assuming you'll have a resume.pdf in your public folder or a specific path */}
              <a 
              target='_blank'
                href="https://drive.google.com/file/d/1CvQQyzlUI_U9v2J_exHBy6kB1qzrrLYb/view?usp=drive_link" 
                download="Jaish_Chimnani_Resume.pdf" 
                className="flex hover:bg-gray-50 dark:text-gray-400  items-center gap-2 px-6 py-3 border border-gray-300 rounded-full dark:hover:bg-gray-700 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jaish-chimnani/" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a target='_blank' rel='noopener noreferrer' href="https://github.com/jaish-chimnani" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
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
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow dark:from-gray-700 dark:to-gray-700/80 dark:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold dark:text-blue-400">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.location}</p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-200 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-800 dark:text-blue-100">
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
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 dark:from-gray-700 dark:to-gray-700/80">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
                Primary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.primary.map((skill, index) => (
                  <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium dark:bg-blue-800 dark:text-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 dark:from-gray-700 dark:to-gray-700/80">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
                <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
                Secondary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.secondary.map((skill, index) => (
                  <span key={index} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium dark:bg-purple-800 dark:text-purple-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 dark:from-gray-700 dark:to-gray-700/80">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
              <GraduationCap className="text-gray-600 dark:text-gray-400" size={24} />
              Education
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Bachelor of Technology, Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-300">GLA University, Mathura, UP, India</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{achievement.description}</p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg inline-block dark:from-gray-700/60 dark:to-gray-700/60">
                        <span className="text-blue-700 font-semibold text-sm dark:text-blue-300">{achievement.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
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
              target='_blank'
              rel='noopener noreferrer'
              href="https://www.linkedin.com/in/jaish-chimnani/"
              className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>

            <a
              target='_blank'
              rel='noopener noreferrer'
              href="https://github.com/jaish-chimnani"
              className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-all transform hover:scale-105 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Jaish Chimnani. Built with React and passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;