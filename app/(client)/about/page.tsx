"use client";

import { ArrowRight, Award, Briefcase, Building, Calendar, CheckCircle, Clock, Code, Coffee, Compass, ExternalLink, Eye, Flame, Github, Globe, GraduationCap, Heart, Lightbulb, Linkedin, Mail, MapPin, Palette, Phone, Rocket, Shield, Smartphone, Star, Target, TrendingUp, Twitter, Users, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Hero Section
const AboutHero = ({ isVisible }) => {
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
          <span className="text-white">ABOUT</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DREAMGEN LABS</span>
        </h1>

        <p className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          We are a team of passionate innovators, designers, and developers dedicated to transforming ideas into extraordinary digital experiences. Our journey began with a simple belief: technology should empower businesses to achieve their dreams.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Calendar className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-semibold">2019</span>
            <span className="text-gray-300">Founded</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">25+</span>
            <span className="text-gray-300">Team Members</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Globe className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold">15+</span>
            <span className="text-gray-300">Countries Served</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Company Story Section
const CompanyStory = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to bridge the gap between creativity and technology",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise-level solution, setting the standard for excellence",
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 15+ talented professionals across multiple disciplines",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Expanded operations to serve clients across 10+ countries worldwide",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received industry recognition for innovative design and development solutions",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our innovation lab focusing on AI and emerging technologies",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-gray-300 text-lg">From a small startup to a global digital agency</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center`}>
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                      <div>
                        <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black relative z-10"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Values Section
const ValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Quality",
      description: "We deliver excellence in every project, ensuring the highest standards of craftsmanship.",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, fostering partnerships built on trust and transparency.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients achieve sustainable growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-4 mx-auto`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">{value.title}</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Section
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "from-blue-600 to-purple-600",
      bio: "Visionary leader with 10+ years in tech industry, passionate about innovation.",
      skills: ["Leadership", "Strategy", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@dreamgenlabs.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "from-green-600 to-teal-600",
      bio: "Full-stack architect with expertise in scalable systems and modern frameworks.",
      skills: ["Architecture", "Full-stack", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@dreamgenlabs.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "from-purple-600 to-pink-600",
      bio: "Award-winning designer focused on creating memorable user experiences.",
      skills: ["UI/UX", "Branding", "Creative Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@dreamgenlabs.com"
      }
    },
    {
      name: "David Kim",
      role: "Head of Development",
      image: "from-orange-600 to-red-600",
      bio: "Senior developer with a passion for clean code and innovative solutions.",
      skills: ["React", "Node.js", "Mobile Dev"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@dreamgenlabs.com"
      }
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: "from-cyan-600 to-blue-600",
      bio: "Agile expert ensuring projects are delivered on time and exceed expectations.",
      skills: ["Agile", "Scrum", "Team Leadership"],
      social: {
        linkedin: "#",
        email: "lisa@dreamgenlabs.com"
      }
    },
    {
      name: "Alex Thompson",
      role: "UX Researcher",
      image: "from-indigo-600 to-purple-600",
      bio: "User advocate with deep expertise in research and behavioral psychology.",
      skills: ["User Research", "Psychology", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@dreamgenlabs.com"
      }
    }
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-300 text-lg">The talented individuals behind our success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              {/* Member Image */}
              <div className={`h-48 bg-gradient-to-br ${member.image} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mission & Vision Section
const MissionVision = () => {
  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology when combined with human creativity and insight.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Innovation First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Client Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To become the leading global digital agency known for creating extraordinary experiences that shape the future of business. We envision a world where technology serves humanity's greatest aspirations and dreams.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Global Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Future Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "300+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "15+",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Clock className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-300 text-lg">Numbers that speak to our commitment and success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
              <span>Meet Our Team</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AboutHero isVisible={isVisible} />
      <CompanyStory />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
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