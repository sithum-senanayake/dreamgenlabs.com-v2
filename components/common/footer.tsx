"use client";

import {
  BookOpen,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
  ShoppingCart,
  TrendingUp,
  Twitter,
  Youtube
} from "lucide-react";
import { JSX, useState } from "react";
import FloatingParticlesEffects from "./effects/floating-particles-effects";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  type FooterLink = {
    name: string;
    href: string;
    icon?: JSX.Element;
  };

  type FooterSection = {
    title: string;
    links: FooterLink[];
  };

  const footerSections: FooterSection[] = [
    {
      title: "Industries",
      links: [
        {
          name: "Agriculture",
          href: "#",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          name: "Healthcare",
          href: "#",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          name: "Finance",
          href: "#",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          name: "Retail",
          href: "#",
          icon: <ShoppingCart className="w-5 h-5" />,
        },
        {
          name: "Education",
          href: "#",
          icon: <BookOpen className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "/careers" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Status Page", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Refund Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61558384975264&mibextid=LQQJ4d",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/dreamgenlabs",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/dreamgenlabs/",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/dreamgen-labs/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/DreamGen-Labs",
      color: "hover:text-gray-400",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "info@dreamgenlabs.com",
      href: "mailto:info@dreamgenlabs.com",
      color: "text-blue-400",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+94 75 876 7262",
      href: "tel:+94758767262",
      color: "text-green-400",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "191/2A, Godallawatta Thalangama South, Battaramulla, 10120, Sri Lanka",
      href: "#",
      color: "text-purple-400",
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 px-8 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our
                <span className="bg-gradient-to-r from-[#1145be] to-[#00c6ff] bg-clip-text text-transparent">
                  {" "}
                  Newsletter
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get the latest updates on our services, industry insights, and
                exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {isSubscribed ? (
                <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full py-4 px-6 border border-green-500/20">
                  <p className="text-green-400 font-semibold">
                    ✓ Successfully subscribed!
                  </p>
                </div>
              ) : (
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1145be] to-[#00c6ff] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#1145be] to-[#00c6ff] bg-clip-text text-transparent">
                      DreamGen Labs
                    </span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We&apos;re a digital agency that specializes in creating
                    innovative solutions for modern businesses. From web
                    development to digital marketing, we help you achieve your
                    goals.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div
                        className={`${item.color} group-hover:scale-110 transition-transform`}
                      >
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700 hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <div key={index} className="lg:col-span-1">
                  <h4 className="text-white font-semibold mb-6 text-lg">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                        >
                          {link.icon && (
                            <span className="text-blue-400 group-hover:scale-110 transition-transform">
                              {link.icon}
                            </span>
                          )}
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span>© 2024 All Rights Reserved, DreamGenLabs</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Sitemap</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <FloatingParticlesEffects />
    </footer>
  );
};

export default Footer;
