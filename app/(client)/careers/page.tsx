"use client";

import {
  ArrowRight,
  Briefcase,
  Clock,
  Code,
  Coffee,
  Heart,
  Laptop,
  MapPin,
  Palette,
  Phone,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

// Hero Section
interface CareersHeroProps {
  isVisible: boolean;
}

const CareersHero = ({ isVisible }: CareersHeroProps) => {
  return (
    <div className="relative px-8 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-white">JOIN OUR</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DREAM TEAM
          </span>
        </h1>

        <p
          className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Be part of something extraordinary. We're building the future of
          digital innovation, and we want passionate individuals who dream big
          and deliver bigger.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>View Open Positions</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
            <span>Learn Our Culture</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Company Values Section
const CompanyValues = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion First",
      description: "We believe in doing what you love and loving what you do.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We push boundaries and challenge the status quo every day.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Together we achieve more than we ever could alone.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We set high standards and consistently deliver exceptional results.",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            These principles guide everything we do and shape the culture
            we&apos;ve built together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Job Listings Section
const JobListings = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3+ years",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      experience: "2+ years",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      featured: false,
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote / London",
      type: "Full-time",
      experience: "3+ years",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      featured: true,
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Berlin",
      type: "Full-time",
      experience: "4+ years",
      icon: <Code className="w-6 h-6" />,
      skills: ["Node.js", "React", "Python", "PostgreSQL"],
      featured: false,
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Tokyo",
      type: "Full-time",
      experience: "5+ years",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
      featured: true,
    },
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open Positions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find your next adventure. We&apos;re always looking for talented
            individuals to join our growing team.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-[1.02] ${
                job.featured
                  ? "border-blue-500/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {job.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Benefits Section
const Benefits = () => {
  const benefits = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Modern Tools & Equipment",
      description:
        "Access to the latest technology to support peak performance.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Flexible Work Environment",
      description:
        "Remote-first culture with adaptable schedules and work-life balance.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Development",
      description: "Ongoing learning programs and professional growth support.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description:
        "Join a team of talented professionals who value innovation and impact.",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We believe in taking care of our team so they can do their best
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
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
            Ready to Make Your Mark?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always interested in hearing from
            talented individuals who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Send Us Your Resume</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300">
              <span>Schedule a Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Careers Page Component
export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CareersHero isVisible={isVisible} />
      <CompanyValues />
      <JobListings />
      <Benefits />
      <CallToAction />

      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
