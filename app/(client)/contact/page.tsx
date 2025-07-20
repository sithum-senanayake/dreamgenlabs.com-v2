"use client";

import {
  BookOpen,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Send,
  Shield,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";

// Hero Section
const ContactHero = ({ isVisible }: { isVisible: boolean }) => {
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
          <span className="text-white">GET IN</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TOUCH
          </span>
        </h1>

        <p
          className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ready to start your next project? We&apos;re here to help. Get in touch
          with our team and let&apos;s turn your vision into reality with innovative
          digital solutions.
        </p>

        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-semibold">24h</span>
            <span className="text-gray-300">Response Time</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">10+</span>
            <span className="text-gray-300">Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold">100%</span>
            <span className="text-gray-300">Confidential</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Methods
const ContactMethods = () => {
  const methods = [
    {
      id: "email",
      title: "Email Us",
      icon: <Mail className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      contact: "info@dreamgenlabs.com",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      id: "phone",
      title: "Call Us",
      icon: <Phone className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      contact: "+94 75 876 7262",
      description: "Speak directly with our team 24/7",
    },
  {
    id: "help",
    title: "Help Center",
    icon: <BookOpen className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    contact: "Browse Articles",
    description: "Find answers to common questions in our knowledge base",
  },
  {
    id: "demo",
    title: "Request a Demo",
    icon: <PlayCircle className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-400",
    contact: "Schedule Now",
    description: "See our product in action with a personalized demo session",
  }
  ];

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Methods
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the best way to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method) => (
            <div
              key={method.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-4 mx-auto`}
              >
                <div className="text-white">{method.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {method.title}
              </h3>
              <p className="text-blue-400 text-center font-semibold mb-2">
                {method.contact}
              </p>
              <p className="text-gray-400 text-center text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-12 border border-green-500/20">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-300 text-lg">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Send us a Message
          </h2>
          <p className="text-gray-300 text-lg">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Project Description *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </div>

          <div className="flex items-center gap-3 mb-8">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="w-5 h-5 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <label htmlFor="newsletter" className="text-gray-300">
              Subscribe to our newsletter for updates and industry insights
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full shadow-lg transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:scale-105"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        "We respond to all inquiries within 24 hours during business days. For urgent matters, we aim to respond within 2-4 hours.",
    },
    {
      question: "Do you provide free consultations?",
      answer:
        "Yes, we offer free 30-minute consultations to discuss your project requirements and how we can help achieve your goals.",
    },
    {
      question: "What information should I include in my project inquiry?",
      answer:
        "Please include your project goals, timeline, budget range, and any specific requirements or features you need. The more details you provide, the better we can assist you.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! We work with clients worldwide and have experience collaborating across different time zones and cultures.",
    },
    {
      question: "What's your project process like?",
      answer:
        "We follow a structured 6-step process: Discovery, Planning, Design, Development, Testing, and Launch. Each phase includes regular communication and feedback loops.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support packages including maintenance, updates, and technical support to ensure your project continues to perform optimally.",
    },
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full cursor-pointer px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <div
                  className={`transform transition-transform duration-200 ${
                    openFAQ === index ? "rotate-45" : ""
                  }`}
                >
                  <div className="w-6 h-6 text-blue-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Office Locations
const OfficeLocations = () => {
  const offices = [
    {
      city: "Colombo",
      country: "Sri Lanka",
      address: "191/2A, Godallawatta Thalangama South, Battaramulla, 10120",
      phone: "+94 75 876 7262",
      email: "info@dreamgenlabs.com",
      hours: "Mon-Fri: 9AM-6PM IST",
      gradient: "from-blue-600 to-purple-600",
      isHQ: true,
    },
  ];

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Offices
          </h2>
          <p className="text-gray-300 text-lg">
            Our headquarters is in Sri Lanka, providing excellent support to clients across the region.
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            offices.length === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {offices.map((office, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${offices.length === 1 ? "md:w-1/3 " : "w-full md:w-auto"}`}
            >
              <div
                className={`h-32 rounded-xl bg-gradient-to-br ${office.gradient} relative overflow-hidden mb-4`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-white/60" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
  {office.city} {office.isHQ && <span className="text-sm font-medium text-blue-400">(Headquarters)</span>}
</h3>

              <p className="text-blue-400 text-sm font-semibold mb-3">
                {office.country}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{office.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ContactHero isVisible={isVisible} />
      <ContactMethods />
      <ContactForm />
      <FAQSection />
      <OfficeLocations />

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
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
