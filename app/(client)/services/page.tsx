"use client";

import { ArrowRight, CheckCircle, Clock, Cloud, Code, Globe, Headphones, Layers, Lightbulb, Palette, Rocket, Search, Shield, Smartphone, Star, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

// Hero Section
const ServicesHero = ({ isVisible }: { isVisible: boolean }) => {
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
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SERVICES</span>
        </h1>

        <p className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          From concept to launch, we deliver comprehensive digital solutions that drive growth and innovation. Our expert team combines cutting-edge technology with creative excellence to transform your business.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Rocket className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-semibold">10+</span>
            <span className="text-gray-300">Services Offered</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">500+</span>
            <span className="text-gray-300">Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold">100%</span>
            <span className="text-gray-300">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Categories
const ServiceCategories = () => {
  const categories = [
    {
      id: 'development',
      title: 'Development',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      count: 6
    },
    {
      id: 'design',
      title: 'Design',
      icon: <Palette className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      count: 4
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      count: 3
    },
    {
      id: 'consulting',
      title: 'Consulting',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      count: 2
    }
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Categories</h2>
          <p className="text-gray-300 text-lg">Comprehensive solutions across all digital domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 mx-auto`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{category.title}</h3>
              <p className="text-gray-400 text-center text-sm">{category.count} Services Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Service Card Component
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  duration: string;
  teamSize: string;
  startingPrice: string;
  popular: boolean;
};

const ServiceCard = ({
  service,
}: {
  service: Service;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Header */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {service.popular && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Popular
              </span>
            )}
          </div>
        </div>
        
        {/* Service Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="text-white text-2xl">
              {service.icon}
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {service.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {service.teamSize}
            </span>
          </div>
          <div className="text-blue-400 font-semibold">
            {service.startingPrice}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 font-semibold rounded-full hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

// Featured Service Section
const FeaturedService = () => {
  const featuredService = {
    title: "Custom Web Development",
    subtitle: "Enterprise-Grade Solutions",
    description: "Transform your business with our comprehensive web development services. From responsive websites to complex web applications, we deliver scalable, secure, and high-performance solutions that drive results.",
    image: "from-blue-600 to-purple-600",
    benefits: [
      { title: "Custom Solutions", description: "Tailored to your specific business needs", icon: <Target className="w-5 h-5" /> },
      { title: "Scalable Architecture", description: "Built to grow with your business", icon: <Layers className="w-5 h-5" /> },
      { title: "Modern Technologies", description: "Latest frameworks and best practices", icon: <Zap className="w-5 h-5" /> },
      { title: "24/7 Support", description: "Ongoing maintenance and support", icon: <Headphones className="w-5 h-5" /> }
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"],
    stats: [
      { label: "Projects", value: "200+", icon: <Globe className="w-5 h-5" /> },
      { label: "Clients", value: "150+", icon: <Users className="w-5 h-5" /> },
      { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Avg. Timeline", value: "8 weeks", icon: <Clock className="w-5 h-5" /> }
    ]
  };

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Service</h2>
          <p className="text-gray-300 text-lg">Our most comprehensive and popular service offering</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Image */}
          <div className="relative">
            <div className={`h-96 rounded-2xl bg-gradient-to-br ${featuredService.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-24 h-24 text-white/30" />
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              {featuredService.stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-blue-400">{stat.icon}</div>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{featuredService.title}</h3>
            <p className="text-blue-400 text-lg mb-4">{featuredService.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredService.description}</p>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-4">Key Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-400">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{benefit.title}</h5>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Technologies We Use</h4>
              <div className="flex flex-wrap gap-2">
                {featuredService.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Grid
const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies. From simple websites to complex enterprise solutions.",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-600 to-indigo-600",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Cross-browser Compatible"],
      duration: "6-12 weeks",
      teamSize: "3-5 devs",
      startingPrice: "From $5,000",
      popular: true
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-600",
      features: ["Native Performance", "Cross-platform", "App Store Optimization", "Push Notifications"],
      duration: "8-16 weeks",
      teamSize: "2-4 devs",
      startingPrice: "From $8,000",
      popular: true
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive engagement across all platforms.",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-orange-600 to-red-600",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      duration: "4-8 weeks",
      teamSize: "2-3 designers",
      startingPrice: "From $3,000",
      popular: false
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-green-600 to-teal-600",
      features: ["Payment Gateway", "Inventory Management", "Analytics", "Multi-vendor Support"],
      duration: "10-20 weeks",
      teamSize: "4-6 devs",
      startingPrice: "From $10,000",
      popular: true
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-cyan-600 to-blue-600",
      features: ["AWS/Azure Setup", "Auto Scaling", "Security", "Monitoring"],
      duration: "4-12 weeks",
      teamSize: "2-3 devs",
      startingPrice: "From $4,000",
      popular: false
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      icon: <Search className="w-6 h-6" />,
      gradient: "from-yellow-600 to-orange-600",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"],
      duration: "Ongoing",
      teamSize: "2-4 marketers",
      startingPrice: "From $2,000/mo",
      popular: false
    }
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Services</h2>
          <p className="text-gray-300 text-lg">Comprehensive solutions for your digital needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Process Section
const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your business goals and requirements",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Planning",
      description: "Strategic planning and project roadmap creation",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Design",
      description: "Creative design and user experience optimization",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Development",
      description: "Clean code development with best practices",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing and quality assurance",
      icon: <Shield className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "06",
      title: "Launch",
      description: "Deployment and ongoing support",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-300 text-lg">A proven methodology that delivers exceptional results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div>
                    <span className="text-blue-400 font-bold text-sm">STEP {step.step}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Call to Action Section
const CallToAction = () => {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and explore how our services can help you achieve your goals. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
              <span>View Our Work</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ServicesHero isVisible={isVisible} />
      <ServiceCategories />
      <FeaturedService />
      <ServicesGrid />
      <ProcessSection />
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