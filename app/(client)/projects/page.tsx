"use client";

import { ArrowRight, Calendar, Code, ExternalLink, Eye, Github, Globe, Heart, Palette, Search, Smartphone, Star, TrendingUp, Users, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Hero Section
const ProjectsHero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className="relative px-8 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-white">OUR</span>
          <br />
          <span className="bg-gradient-to-r from-[#1145be] to-[#00c6ff] bg-clip-text text-transparent">MASTERPIECES</span>
        </h1>

        <p className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Discover our portfolio of innovative digital solutions. From cutting-edge web applications to revolutionary mobile experiences, each project tells a story of creativity and technical excellence.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-semibold">50+</span>
            <span className="text-gray-300">Projects Completed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">30+</span>
            <span className="text-gray-300">Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold">95%</span>
            <span className="text-gray-300">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Filter Section
type ProjectFilterProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const ProjectFilter = ({ activeFilter, setActiveFilter, searchTerm, setSearchTerm }: ProjectFilterProps) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web', label: 'Web Development', icon: <Code className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'design', label: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <div className="py-12 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
type Project = {
  id: number;
  title: string;
  client: string;
  description: string;
  category: string;
  categoryColor: string;
  gradient: string;
  icon: React.ReactNode;
  iconColor: string;
  technologies: string[];
  year: string;
  likes: number;
  rating: number;
  featured: boolean;
  type: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {project.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </span>
            )}
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.categoryColor}`}>
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Eye className="w-6 h-6" />
          </button>
          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <ExternalLink className="w-6 h-6" />
          </button>
          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Github className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.iconColor} flex items-center justify-center`}>
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.client}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {project.likes}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{project.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Project Section
const FeaturedProject = () => {
  const featuredProject = {
    title: "FinTech Revolution",
    client: "Global Banking Solutions",
    description: "A comprehensive digital banking platform that revolutionizes how users interact with their finances. Built with cutting-edge security, real-time analytics, and an intuitive interface that serves millions of users worldwide.",
    image: "from-blue-600 to-purple-600",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    metrics: [
      { label: "Users", value: "2.5M+", icon: <Users className="w-5 h-5" /> },
      { label: "Transactions", value: "$50M+", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Uptime", value: "99.9%", icon: <Zap className="w-5 h-5" /> },
      { label: "Rating", value: "4.8/5", icon: <Star className="w-5 h-5" /> }
    ]
  };

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Project</h2>
          <p className="text-gray-300 text-lg">Our most impactful project that's transforming industries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative">
            <div className={`h-96 rounded-2xl bg-gradient-to-br ${featuredProject.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full">
                  Award Winner 2024
                </span>
              </div>
            </div>
            
            {/* Floating Metrics */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              {featuredProject.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-blue-400">{metric.icon}</div>
                    <span className="text-white font-bold">{metric.value}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{featuredProject.title}</h3>
            <p className="text-blue-400 text-lg mb-4">{featuredProject.client}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredProject.description}</p>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>View Case Study</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Grid
const ProjectsGrid = ({ activeFilter, searchTerm }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "Fashion Forward Inc.",
      description: "Modern e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
      category: "E-commerce",
      categoryColor: "bg-green-500 text-white",
      gradient: "from-green-600 to-teal-600",
      icon: <TrendingUp className="w-4 h-4" />,
      iconColor: "from-green-500 to-teal-500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      likes: 156,
      rating: 4.9,
      featured: true,
      type: "ecommerce"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      client: "MediCare Solutions",
      description: "Comprehensive healthcare management system with patient tracking, appointment scheduling, and telemedicine features.",
      category: "Web App",
      categoryColor: "bg-blue-500 text-white",
      gradient: "from-blue-600 to-indigo-600",
      icon: <Code className="w-4 h-4" />,
      iconColor: "from-blue-500 to-indigo-500",
      technologies: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      year: "2024",
      likes: 203,
      rating: 4.8,
      featured: false,
      type: "web"
    },
    {
      id: 3,
      title: "Travel Mobile App",
      client: "Wanderlust Adventures",
      description: "Feature-rich mobile application for travel planning, booking, and real-time travel assistance.",
      category: "Mobile",
      categoryColor: "bg-purple-500 text-white",
      gradient: "from-purple-600 to-pink-600",
      icon: <Smartphone className="w-4 h-4" />,
      iconColor: "from-purple-500 to-pink-500",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      year: "2023",
      likes: 189,
      rating: 4.7,
      featured: true,
      type: "mobile"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      client: "Tech Startup Co.",
      description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      category: "Design",
      categoryColor: "bg-orange-500 text-white",
      gradient: "from-orange-600 to-red-600",
      icon: <Palette className="w-4 h-4" />,
      iconColor: "from-orange-500 to-red-500",
      technologies: ["Figma", "Adobe Creative Suite", "Principle"],
      year: "2023",
      likes: 142,
      rating: 4.9,
      featured: false,
      type: "design"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      client: "Property Pro",
      description: "Modern real estate platform with virtual tours, advanced search filters, and mortgage calculator.",
      category: "Web App",
      categoryColor: "bg-blue-500 text-white",
      gradient: "from-cyan-600 to-blue-600",
      icon: <Globe className="w-4 h-4" />,
      iconColor: "from-cyan-500 to-blue-500",
      technologies: ["Next.js", "GraphQL", "Prisma", "AWS"],
      year: "2023",
      likes: 167,
      rating: 4.6,
      featured: false,
      type: "web"
    },
    {
      id: 6,
      title: "Food Delivery App",
      client: "QuickBite",
      description: "Fast and reliable food delivery application with real-time tracking and multiple payment options.",
      category: "Mobile",
      categoryColor: "bg-purple-500 text-white",
      gradient: "from-yellow-600 to-orange-600",
      icon: <Smartphone className="w-4 h-4" />,
      iconColor: "from-yellow-500 to-orange-500",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
      year: "2023",
      likes: 234,
      rating: 4.8,
      featured: true,
      type: "mobile"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.type === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Call to Action Section
const CallToAction = () => {
  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Our team is ready to transform your ideas into exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
              <span>View Our Process</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Projects Page Component
export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ProjectsHero isVisible={isVisible} />
      <ProjectFilter 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <FeaturedProject />
      <ProjectsGrid activeFilter={activeFilter} searchTerm={searchTerm} />
      <CallToAction />
      
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}