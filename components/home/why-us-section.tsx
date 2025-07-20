"use client"

import {
  Diamond,
  Heart,
  Zap
} from 'lucide-react';

// Why Us Hero Section
interface WhyUsSectionProps {
  isVisible: boolean;
}

const WhyUsSection = ({ isVisible }: WhyUsSectionProps) => {
  return (
    <div className="relative px-8 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-white">WHY US</span>
          {/* <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DREAMGEN LABS</span> */}
        </h1>

        <p className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          In a competitive software development landscape, we deliver cutting-edge solutions that drive business growth. Here's what makes us the preferred choice for software development.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
            <Diamond className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">Enterprise-Grade</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-500/30">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold">Scalable Solutions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-white font-semibold">Agile Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;