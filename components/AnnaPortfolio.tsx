"use client"

import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  image: string;
}

interface Skill {
  name: string;
  category: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

// Spline Viewer Component
const SplineViewer: React.FC<{ url: string; style?: React.CSSProperties }> = ({ url, style }) => {
  const splineRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const loadSpline = () => {
      try {
        if (typeof window === 'undefined') return;

        if (window.customElements && !window.customElements.get('spline-viewer')) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js';
          
          script.onload = () => {
            setIsLoaded(true);
          };
          
          script.onerror = () => {
            console.warn('Failed to load Spline viewer');
            setIsLoaded(false);
          };
          
          document.head.appendChild(script);
        } else {
          setIsLoaded(true);
        }
      } catch (error) {
        console.warn('Spline viewer loading error:', error);
        setIsLoaded(false);
      }
    };

    loadSpline();
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div style={style} className="w-full h-full bg-gray-50/80 flex items-center justify-center rounded-lg border border-gray-100">
        <div className="flex items-center gap-2 text-gray-500">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={style} className="w-full h-full bg-gray-50/80 flex items-center justify-center rounded-lg border border-gray-100">
        <div className="flex items-center gap-2 text-gray-500">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-sm">Loading 3D Animation...</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={splineRef} style={style} className="rounded-lg overflow-hidden" suppressHydrationWarning>
      {React.createElement('spline-viewer', { 
        url, 
        style: { width: '100%', height: '100%' },
        loading: 'lazy'
      })}
    </div>
  );
};

const AnnaPortfolio: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dashboard Website - Timur Adi Raya",
      description: "I designed and developed a web-based dashboard system for PT TAR to replace their manual Excel-based data management, aiming to digitalize processes, enhance efficiency, and improve data accuracy.",
      tech: "React JS, Node JS, PostgreSQL",
      image: "/dashboard web.png"
    },
    {
      id: 2,
      title: "MEdC Tutoring Website Analysis",
      description: "Analysis and design of MEdC tutoring website using the RUP method to address students' difficulties in accessing tutoring information and learning activities.",
      tech: "HTML, CSS, PHP, MySQL",
      image: "/Bagian Depan Medc.png"
    },
    {
      id: 3,
      title: "OCTA TECH's Home Page UI/UX",
      description: "PT. Octa Technologies UI/UX design case study using Figma and Canva to support their digital transformation mission aligned with Industry 4.0.",
      tech: "Figma, Canva, UI/UX Design",
      image: "/octa dec.png"
    }
  ];

  const skills: Skill[] = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "GSAP", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Python", category: "Data Analysis" },
    { name: "SQL", category: "Data Analysis" }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2019-2023",
      title: "S1 Informatics | Universitas AMIKOM Yogyakarta",
      description: "Bachelor's degree in Informatics Engineering",
      type: "education"
    },
    {
      year: "2023-Present",
      title: "Freelance Web & App Designer",
      description: "Working on diverse projects across various industries, strengthening design, writing, and research skills.",
      type: "work"
    },
    {
      year: "2025",
      title: "IT Support (Jan - Jun 2025)",
      description: "Technical support and full-stack web development, focused on delivering innovative solutions.",
      type: "work"
    }
  ];

  const hobbies = [
    { icon: "fa-music", name: "Singing", description: "Expressing emotions through music" },
    { icon: "fa-pen", name: "Writing", description: "Random thoughts and creative ideas" },
    { icon: "fa-film", name: "Movies", description: "Exploring different stories and perspectives" },
    { icon: "fa-birthday-cake", name: "Sweet Foods", description: "Life's too short for bitter tastes" },
    { icon: "fa-camera", name: "Photography", description: "Capturing beautiful moments" },
    { icon: "fa-comments", name: "Storytelling", description: "Sharing experiences and ideas" }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Load Font Awesome CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(link);

    // Dynamic import for GSAP to avoid SSR issues
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animations
        gsap.fromTo(".hero-content", 
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out", stagger: 0.2 }
        );

        // Enhanced floating animation for the fixed 3D background
        gsap.to(".fixed-3d-bg", {
          y: -20,
          duration: 6,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });

        // Subtle rotation for 3D elements
        gsap.to(".fixed-3d-bg", {
          rotationY: 3,
          duration: 8,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });

        // Scroll-triggered animations
        const fadeElements = gsap.utils.toArray(".fade-in") as Element[];
        fadeElements.forEach((element: Element, index: number) => {
          gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Project cards animation
        gsap.fromTo(".project-card", 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".projects-grid",
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Cleanup function
        return () => {
          try {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          } catch (error) {
            console.warn('ScrollTrigger cleanup error:', error);
          }
        };
      } catch (error) {
        console.warn('GSAP loading error:', error);
      }
    };

    loadGSAP();
  }, [isMounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="flex items-center gap-3 text-white">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading Portfolio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased relative" suppressHydrationWarning>
      {/* Fixed 3D Background - Full Screen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed-3d-bg w-full h-full">
          <SplineViewer 
            url="https://prod.spline.design/OxyaXtlOKL5DlDlq/scene.splinecode"
            style={{width: '100%', height: '100%'}}
          />
        </div>
        {/* Dimming Overlay */}
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-xl font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    Anna Caroline
                  </button>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {[
                    { name: 'Home', id: 'hero', icon: 'fa-home' },
                    { name: 'About', id: 'about', icon: 'fa-user' },
                    { name: 'Skills', id: 'skills', icon: 'fa-code' },
                    { name: 'Projects', id: 'projects', icon: 'fa-briefcase' },
                    { name: 'Contact', id: 'contact', icon: 'fa-envelope' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <i className={`fas ${item.icon} text-xs`}></i>
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-white hover:text-cyan-300 hover:bg-white/10"
                >
                  <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-lg">
                  <div className="py-4 space-y-2">
                    {[
                      { name: 'Home', id: 'hero', icon: 'fa-home' },
                      { name: 'About', id: 'about', icon: 'fa-user' },
                      { name: 'Skills', id: 'skills', icon: 'fa-code' },
                      { name: 'Projects', id: 'projects', icon: 'fa-briefcase' },
                      { name: 'Contact', id: 'contact', icon: 'fa-envelope' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-cyan-300 hover:bg-white/10 transition-colors flex items-center gap-3 rounded-lg"
                      >
                        <i className={`fas ${item.icon} text-xs`}></i>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="hero-content space-y-6 lg:space-y-8">
                {/* Liquid Glass Container */}
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl shadow-cyan-500/10">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-cyan-400/20 text-cyan-100 rounded-full text-sm font-medium border border-cyan-400/30 backdrop-blur-sm">
                    <i className="fas fa-hand-paper mr-2"></i>
                    Welcome to my portfolio
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mt-6">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Anna Caroline</span>
                  </h1>
                  
                  <h2 className="text-lg lg:text-xl text-cyan-100 font-medium">
                    Frontend Developer & UI/UX Designer
                  </h2>
                  
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                    "Hai, aku Anna! Ini gambaran diriku. Setiap langkah ada maknanya. 
                    Dengan bimbingan-Nya, saya berusaha memberikan yang terbaik dengan hati yang tulus."
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 mt-6">
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="relative group inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative text-white flex items-center gap-2">
                        <i className="fas fa-briefcase"></i>
                        View My Work
                      </span>
                    </button>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      <i className="fas fa-user mr-2"></i>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="hero-content space-y-6 lg:space-y-8">
                {/* Liquid Glass Container */}
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl shadow-purple-500/10">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 blur-xl -z-10"></div>
                  
                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Key Highlights</h3>
                    <div className="space-y-3">
                      {[
                        { icon: 'fa-graduation-cap', text: 'Bachelor Informatics', color: 'text-cyan-400' },
                        { icon: 'fa-code', text: 'Frontend Expert', color: 'text-green-400' },
                        { icon: 'fa-palette', text: 'UI/UX Designer', color: 'text-purple-400' },
                        { icon: 'fa-chart-bar', text: 'Data Analyst', color: 'text-orange-400' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20`}>
                            <i className={`fas ${item.icon} ${item.color} text-sm`}></i>
                          </div>
                          <span className="text-white/90 text-sm lg:text-base">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold text-white">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Experience Professional</span>
                        <span className="text-cyan-400 font-bold">6 Months</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Projects</span>
                        <span className="text-cyan-400 font-bold">Successful Completed +++ </span>
                      </div>
                      {/* <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Technologies</span>
                        <span className="text-cyan-400 font-bold">8+ </span>
                      </div> */}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'].map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-200 rounded-full text-xs font-medium border border-cyan-400/30 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                About Me
              </h2>
              <p className="fade-in text-lg text-white/70 max-w-2xl mx-auto">
                Passionate about creating digital experiences that make a difference
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Content - Philosophy */}
              <div className="fade-in">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl shadow-emerald-500/10">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-cyan-400/20 blur-xl -z-10"></div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-lightbulb text-yellow-400"></i>
                        My Philosophy
                      </h3>
                      <div className="space-y-3 text-white/80 leading-relaxed text-sm lg:text-base">
                        <p>"Filosofi hidup saya sederhana: berusaha maksimal, dan kalau tidak tahu ya bertanya."</p>
                        <p>"Saya percaya keseimbangan itu penting - bisa adaptasi tapi tetap berprinsip."</p>
                        <p>"Kerja keras + ketulusan + mau belajar = resep berkembang yang selalu work buat saya."</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-star text-cyan-400"></i>
                        Core Values
                      </h4>
                      <div className="space-y-2">
                        {[
                          { icon: 'fa-heart', text: 'Passion-driven', color: 'text-red-400' },
                          { icon: 'fa-users', text: 'User-focused', color: 'text-blue-400' },
                          { icon: 'fa-rocket', text: 'Innovation-minded', color: 'text-purple-400' },
                          { icon: 'fa-handshake', text: 'Collaborative', color: 'text-green-400' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <i className={`fas ${item.icon} ${item.color} text-sm`}></i>
                            <span className="text-white/90 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Skills & Education */}
              <div className="fade-in">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl shadow-violet-500/10">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-400/20 via-purple-500/20 to-pink-400/20 blur-xl -z-10"></div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-graduation-cap text-cyan-400"></i>
                        Education & Skills
                      </h3>
                      <div className="space-y-3">
                        {[
                          { icon: 'fa-university', text: 'Bachelor in Informatics Engineering', desc: 'AMIKOM Yogyakarta (2019-2023)' },
                          { icon: 'fa-code', text: 'Frontend Development', desc: 'React, JavaScript, Next.js, TypeScript' },
                          { icon: 'fa-palette', text: 'UI/UX Design', desc: 'Figma, Canva' },
                          { icon: 'fa-database', text: 'Backend & Database', desc: 'Node.js, PostgreSQL' }
                        ].map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                                <i className={`fas ${item.icon} text-cyan-400 text-xs`}></i>
                              </div>
                              <span className="text-white font-medium text-sm">{item.text}</span>
                            </div>
                            <p className="text-white/70 text-xs ml-9">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-trophy text-yellow-400"></i>
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        {[
                          '+++ Successful Projects',
                          '6 Months Experience Professional',
                          'Full-Stack Capabilities',
                          'UI/UX Design Specialist'
                        ].map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <i className="fas fa-check-circle text-green-400 text-xs"></i>
                            <span className="text-white/90 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                When I'm Off the Keyboard
              </h2>
              <p className="fade-in text-lg text-white/70">
                Life beyond code - my passions and interests
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="fade-in group">
                  <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                    
                    <div className="mb-4">
                      <i className={`fas ${hobby.icon} text-2xl text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300`}></i>
                    </div>
                    <h3 className="font-medium text-white mb-2">{hobby.name}</h3>
                    <p className="text-sm text-white/70">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                What I Do
              </h2>
              <p className="fade-in text-lg text-white/70">
                Technologies and tools I work with
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {['Frontend', 'Backend', 'Data Analysis'].map((category, categoryIndex) => (
                <div key={category} className="fade-in">
                  <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl h-full">
                    {/* Glowing border effect */}
                    <div className={`absolute inset-0 rounded-3xl blur-xl -z-10 ${
                      categoryIndex === 0 ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' :
                      categoryIndex === 1 ? 'bg-gradient-to-r from-emerald-400/20 to-teal-500/20' :
                      'bg-gradient-to-r from-purple-400/20 to-pink-500/20'
                    }`}></div>
                    
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${
                        categoryIndex === 0 ? 'bg-cyan-400/20 border-cyan-400/30' :
                        categoryIndex === 1 ? 'bg-emerald-400/20 border-emerald-400/30' :
                        'bg-purple-400/20 border-purple-400/30'
                      }`}>
                        <i className={`fas ${categoryIndex === 0 ? 'fa-laptop-code' : categoryIndex === 1 ? 'fa-server' : 'fa-chart-line'} text-2xl ${
                          categoryIndex === 0 ? 'text-cyan-400' :
                          categoryIndex === 1 ? 'text-emerald-400' :
                          'text-purple-400'
                        }`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === category).map((skill, index) => (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm ${
                          categoryIndex === 0 ? 'hover:bg-cyan-400/10 hover:border-cyan-400/20' :
                          categoryIndex === 1 ? 'hover:bg-emerald-400/10 hover:border-emerald-400/20' :
                          'hover:bg-purple-400/10 hover:border-purple-400/20'
                        } transition-all duration-200`}>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                            categoryIndex === 0 ? 'bg-cyan-400/20 border-cyan-400/30' :
                            categoryIndex === 1 ? 'bg-emerald-400/20 border-emerald-400/30' :
                            'bg-purple-400/20 border-purple-400/30'
                          }`}>
                            <i className={`fas fa-code text-sm ${
                              categoryIndex === 0 ? 'text-cyan-400' :
                              categoryIndex === 1 ? 'text-emerald-400' :
                              'text-purple-400'
                            }`}></i>
                          </div>
                          <span className="text-sm font-medium text-white/90 flex-1">{skill.name}</span>
                          <i className={`fas fa-check-circle text-xs ${
                            categoryIndex === 0 ? 'text-cyan-400' :
                            categoryIndex === 1 ? 'text-emerald-400' :
                            'text-purple-400'
                          }`}></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="fade-in text-lg text-white/70">
                A showcase of my recent work and achievements
              </p>
            </div>
            
            <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card group">
                  <div className="relative rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden h-full">
                    {/* Glowing border effect */}
                    <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-cyan-400/30 to-blue-500/30' :
                      index % 3 === 1 ? 'bg-gradient-to-r from-purple-400/30 to-pink-500/30' :
                      'bg-gradient-to-r from-emerald-400/30 to-teal-500/30'
                    }`}></div>
                    
                    <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border-b border-white/20 backdrop-blur-sm overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallbackElement) {
                            fallbackElement.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center">
                        <i className={`fas fa-laptop-code text-4xl group-hover:scale-110 transition-transform ${
                          index % 3 === 0 ? 'text-cyan-400' :
                          index % 3 === 1 ? 'text-purple-400' :
                          'text-emerald-400'
                        }`}></i>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${
                          index % 3 === 0 ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30' :
                          index % 3 === 1 ? 'bg-purple-400/20 text-purple-300 border-purple-400/30' :
                          'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
                        }`}>
                          {project.tech.split(',')[0]}
                        </span>
                        <button
                          onClick={() => openModal(project)}
                          className="text-sm text-white/70 hover:text-cyan-300 transition-colors flex items-center gap-1 group/btn"
                        >
                          View Details
                          <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                Experience Timeline
              </h2>
              <p className="fade-in text-lg text-white/70">
                My journey in technology and design
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-500/50 to-pink-400/50"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="fade-in relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 rounded-full flex items-center justify-center relative z-10 shadow-xl">
                    <i className={`fas ${item.type === 'education' ? 'fa-graduation-cap' : 'fa-briefcase'} ${
                      index % 2 === 0 ? 'text-cyan-400' : 'text-purple-400'
                    }`}></i>
                  </div>
                  <div className="ml-6 w-full">
                    <div className="relative p-6 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 rounded-3xl blur-xl opacity-50 -z-10 ${
                        index % 2 === 0 ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' :
                        'bg-gradient-to-r from-purple-400/20 to-pink-500/20'
                      }`}></div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${
                          index % 2 === 0 ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30' :
                          'bg-purple-400/20 text-purple-300 border-purple-400/30'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dream Workplace */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-8">
              Dream Workplace
            </h2>
            <div className="fade-in">
              <div className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 via-red-500/20 to-pink-400/20 blur-xl -z-10"></div>
                
                <div className="w-40 h-40   rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl p-3">
                  <img 
                    src="/cretivox.png" 
                    alt="Cretivox Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <i className="fas fa-rocket text-2xl text-white"></i>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4"></h3>
                <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Semoga jadi bagian Cretivox untuk awal karir yang cemerlang. 
                  Bergabung dengan tim yang inovatif dan berkembang bersama teknologi terdepan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-in text-3xl lg:text-4xl font-bold text-white mb-4">
                Let's Work Together
              </h2>
              <p className="fade-in text-lg text-white/70">
                Ready to bring your ideas to life? Let's connect!
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                  
                  <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors backdrop-blur-sm text-white placeholder-white/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors backdrop-blur-sm text-white placeholder-white/50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors resize-none backdrop-blur-sm text-white placeholder-white/50"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert('Message sent! (Demo only)')}
                      className="relative group w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative text-white flex items-center justify-center gap-2">
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contact Info & Social */}
              <div className="fade-in space-y-8">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 blur-xl -z-10"></div>
                  
                  <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {[
                      { icon: 'fa-linkedin', name: 'LinkedIn', desc: 'Professional network', link: 'https://www.linkedin.com/in/annacarolineab/', color: 'text-blue-400' },
                      { icon: 'fa-github', name: 'GitHub', desc: 'Code repositories', link: 'https://github.com/ancarolll', color: 'text-gray-300' },
                      { icon: 'fa-instagram', name: 'Instagram', desc: 'Creative inspiration', link: 'https://www.instagram.com/ancarol05/', color: 'text-pink-400' },
                      { icon: 'fa-envelope', name: 'Email', desc: 'Direct contact', link: 'mailto:ancarolineab.com', color: 'text-cyan-400' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="group block p-4 rounded-2xl hover:bg-white/10 transition-all duration-200 border border-white/20 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                            <i className={`fab ${social.icon} ${social.color} group-hover:scale-110 transition-transform`}></i>
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                              {social.name}
                            </div>
                            <div className="text-sm text-white/70">{social.desc}</div>
                          </div>
                          <i className="fas fa-arrow-right text-white/50 group-hover:text-cyan-300 transition-colors ml-auto group-hover:translate-x-1 transform duration-200"></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-400/10 blur-lg -z-10"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/80 text-sm">
                  © 2025 Anna Caroline A. Banga. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm">Made with lope</span>
                  <i className="fas fa-heart text-red-400 text-sm"></i>
                  <span className="text-white/60 text-sm">and lots of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-400/30 blur-xl -z-10"></div>
              
              <div className="p-6 border-b border-white/20">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/20"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-6 flex items-center justify-center border border-white/20 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <i className="fas fa-laptop-code text-4xl text-cyan-400"></i>
                  </div>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">{selectedProject.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fas fa-code text-cyan-400"></i>
                  <span className="font-medium text-white/90">Tech Stack:</span>
                  <span className="text-cyan-300">{selectedProject.tech}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnaPortfolio;