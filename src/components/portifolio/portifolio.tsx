import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { projects, techStack } from './data';

import me from '/kalebmokua.jpg'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  // Detect scroll direction for navigation visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;

      // Update active section
      const sections = ['hero', 'about', 'projects', 'tech-stack', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isVisible ? 'top-0' : '-top-20'} 
        ${activeSection === 'hero' ? ' bg-black/10 text-white' : 'dark:bg-black/90 bg-white/90  backdrop-blur-md dark:text-gray-300 text-gray-800 shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-semibold font-mono">mokuakaleb</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Tech Stack', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`transition-all duration-300  relative after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:bg-teal-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
                    ${activeSection === item.toLowerCase().replace(' ', '-') ? 'after:w-full' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/90 dark:bg-black/90 dark:text-gray-300 backdrop-blur-md rounded-xl my-1">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Projects', 'Tech Stack', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden 
        dark:from-gray-900 dark:via-green-900 dark:to-blue-900
        bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            I Am Kaleb, A Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-delay">
            Crafting Web2 & Web3 Experiences
          </p>
          <div className="flex justify-center space-y-2 md:space-y-0 md:space-x-6 flex-col md:flex-row">
            <a href={`#tech-stack`} className="border-2 border-white text-white px-8 py-3 rounded-full 
              font-medium hover:bg-white/10 transition-all transform hover:scale-105 md:w-1/4">
              My Tech Stack
            </a>
            <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-full 
              font-medium hover:bg-white/10 transition-all transform hover:scale-105 md:w-1/4">
              View Projects
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 text-white animate-bounce w-8 h-8" />
      </section>

      {/* About Section */}
      <section id="about" className="h-auto flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold text-center mb-12 relative dark:text-teal-600 p-1">
            Who Am I?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-center">
              I am passionate software developer with a knack for building innovative solutions that merge technology with real-world impact. With a solid foundation in IT and software development, I specialize in Web2 and Web3 in decentralized applications (dApps).
              Over the years, I have honed my skills in blockchain development, smart contract programming using Solidity, and front-end frameworks like ReactJS, NextJS and TypeScript. My expertise extends to working with tools like Hardhat and platforms like Supabase, allowing me to create scalable and user-friendly applications.
              </p>
              <p className="text-lg text-center">
              When I’m not building software, you’ll often find me exploring new tech frameworks, participating in developer bootcamps, or brainstorming ways to solve real-world challenges with code.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border border-teal-700">
                <img 
                  src={me} 
                  alt="" 
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-auto flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold text-center mb-16 relative dark:text-teal-600 p-1">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="dark:bg-gray-800 shadow-xl rounded-lg p-6 transform hover:scale-105 
                transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" className="flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="h-auto flex items-center justify-center">
        <div className=" mx-auto px-4 py-10 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 relative dark:text-teal-600 p-1">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="dark:bg-gray-800 shadow-xl p-6 rounded-lg transform hover:scale-105 
                transition-all duration-300 hover:shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
                <ul className="space-x-3 flex justify-center flex-wrap">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center text-blue-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-auto flex items-center justify-center 
        dark:from-green-900 dark:to-blue-900
        bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Get in Touch</h2>
          <p className="text-xl text-white/90 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:kalebmokua@gmail.com" 
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 
                rounded-full font-medium hover:bg-blue-50 transition-all transform hover:scale-105">
              <Mail className="mr-2" size={20} />
              Send me an email
            </a>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/calebomondi" className="bg-white/10 p-3 rounded-full hover:bg-white/20 
                transition-all transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mokuakaleb/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 
                transition-all transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/mokuakaleb" className="bg-white/10 p-3 rounded-full hover:bg-white/20 
                transition-all transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;