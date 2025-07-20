"use client";

import {
  CheckCircle,
  Code,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

import React, {  } from "react";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      title: "Expert Development Team",
      subtitle: "Full-Stack Specialists",
      description:
        "Our team of senior developers brings 5+ years of experience in modern frameworks like React, Node.js, Python, and cloud technologies.",
      icon: <Code className="w-12 h-12" />,
      gradient: "from-blue-500 to-purple-500",
      stats: [
        "Senior Developers Only",
        "Modern Tech Stack",
        "Code Quality Guarantee",
      ],
      bgEffect: "bg-blue-500/10",
    },
    {
      title: "Scalable Architecture",
      subtitle: "Built for Growth",
      description:
        "We design software solutions that scale with your business, from MVP to enterprise-level applications handling millions of users.",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-green-500 to-teal-500",
      stats: [
        "Microservices Architecture",
        "Cloud-Native Solutions",
        "Auto-Scaling Infrastructure",
      ],
      bgEffect: "bg-green-500/10",
    },
    {
      title: "Agile Development",
      subtitle: "Rapid Iteration & Delivery",
      description:
        "Our agile methodology ensures faster time-to-market with regular sprints, continuous integration, and frequent client feedback loops.",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-yellow-500 to-orange-500",
      stats: ["2-Week Sprints", "Continuous Deployment", "Real-time Updates"],
      bgEffect: "bg-yellow-500/10",
    },
    {
      title: "DevOps Excellence",
      subtitle: "Automated & Secure",
      description:
        "Complete DevOps pipeline with automated testing, deployment, monitoring, and security measures to ensure reliable software delivery.",
      icon: <Shield className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500",
      stats: ["CI/CD Pipeline", "Automated Testing", "24/7 Monitoring"],
      bgEffect: "bg-purple-500/10",
    },
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re not just another software company. We&apos;re your
            technology partner in building scalable, robust solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 ${item.bgEffect}`}
            >
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorsSection;