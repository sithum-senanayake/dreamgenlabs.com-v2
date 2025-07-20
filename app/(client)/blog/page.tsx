"use client";

import { ArrowRight, Bookmark, Calendar, ChevronDown, ChevronLeft, ChevronRight, Clock, ExternalLink, Eye, Filter, Heart, MessageCircle, Search, Share2, Star, Tag, TrendingUp, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Blog Hero Section
const BlogHero = ({ isVisible }) => {
  return (
    <div className="relative px-8 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-white">OUR</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BLOG</span>
        </h1>

        <p className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Insights, tutorials, and industry trends from our team of experts. Stay updated with the latest in technology and digital innovation.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-white font-semibold">120+</span>
            <span className="text-gray-300">Articles Published</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">50K+</span>
            <span className="text-gray-300">Monthly Readers</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-semibold">4.9</span>
            <span className="text-gray-300">Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Search and Filter Section
const SearchAndFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "All Categories", count: 120 },
    { id: "web-dev", name: "Web Development", count: 45 },
    { id: "mobile", name: "Mobile Apps", count: 32 },
    { id: "design", name: "UI/UX Design", count: 28 },
    { id: "marketing", name: "Digital Marketing", count: 15 }
  ];

  return (
    <div className="px-8 py-12 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="hidden md:flex items-center gap-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showFilters && (
          <div className="mt-6 md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Featured Article Component
const FeaturedArticle = () => {
  const featuredArticle = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and methodologies that will shape web development in the coming year. From AI integration to advanced frameworks, discover what's next.",
    author: {
      name: "Sarah Johnson",
      avatar: "SJ",
      role: "Senior Developer"
    },
    publishDate: "Jan 15, 2025",
    readTime: "12 min read",
    views: "2.3K",
    likes: "89",
    comments: "24",
    tags: ["Web Development", "AI", "Future Tech", "Trends"],
    featured: true
  };

  return (
    <div className="px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Article</h2>
          <p className="text-gray-300 text-lg">Our most popular read this month</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Article Image */}
            <div className="relative h-80 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/30 text-6xl">📱</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                {featuredArticle.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{featuredArticle.author.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{featuredArticle.author.name}</h4>
                  <p className="text-gray-400 text-sm">{featuredArticle.author.role}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-6 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {featuredArticle.views}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
                  <Bookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Article Image */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-90`}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {article.trending && (
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending
              </span>
            )}
          </div>
        </div>
        
        {/* Article Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/30 text-4xl">
            {article.icon}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3">
          {article.tags.slice(0, 2).map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

        {/* Author */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{article.author.avatar}</span>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm">{article.author.name}</h4>
            <p className="text-gray-400 text-xs">{article.author.role}</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.publishDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {article.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {article.likes}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Share2 className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Bookmark className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Grid
const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Learn how to structure large React applications using modern patterns and best practices for maintainability and performance.",
      icon: "⚛️",
      gradient: "from-blue-600 to-cyan-600",
      tags: ["React", "Architecture", "Performance"],
      author: { name: "John Doe", avatar: "JD", role: "Frontend Lead" },
      publishDate: "Jan 10, 2025",
      readTime: "8 min read",
      views: "1.2K",
      likes: "45",
      comments: "12",
      trending: true
    },
    {
      id: 2,
      title: "The Complete Guide to Node.js Performance Optimization",
      excerpt: "Discover advanced techniques for optimizing Node.js applications, from memory management to database queries.",
      icon: "🚀",
      gradient: "from-green-600 to-teal-600",
      tags: ["Node.js", "Performance", "Backend"],
      author: { name: "Jane Smith", avatar: "JS", role: "Backend Engineer" },
      publishDate: "Jan 8, 2025",
      readTime: "12 min read",
      views: "987",
      likes: "38",
      comments: "8",
      trending: false
    },
    {
      id: 3,
      title: "Modern UI/UX Design Principles for Web Applications",
      excerpt: "Explore the latest design trends and principles that create engaging and intuitive user experiences.",
      icon: "🎨",
      gradient: "from-purple-600 to-pink-600",
      tags: ["UI/UX", "Design", "User Experience"],
      author: { name: "Mike Chen", avatar: "MC", role: "UX Designer" },
      publishDate: "Jan 5, 2025",
      readTime: "6 min read",
      views: "756",
      likes: "29",
      comments: "15",
      trending: true
    },
    {
      id: 4,
      title: "Implementing Authentication in Next.js Applications",
      excerpt: "Step-by-step guide to adding secure authentication to your Next.js apps using modern auth patterns.",
      icon: "🔐",
      gradient: "from-orange-600 to-red-600",
      tags: ["Next.js", "Authentication", "Security"],
      author: { name: "Sarah Wilson", avatar: "SW", role: "Full Stack Developer" },
      publishDate: "Jan 3, 2025",
      readTime: "10 min read",
      views: "634",
      likes: "22",
      comments: "6",
      trending: false
    },
    {
      id: 5,
      title: "Database Design Best Practices for Modern Applications",
      excerpt: "Learn how to design efficient database schemas that scale with your application's growth.",
      icon: "🗄️",
      gradient: "from-indigo-600 to-blue-600",
      tags: ["Database", "PostgreSQL", "Architecture"],
      author: { name: "David Brown", avatar: "DB", role: "Database Engineer" },
      publishDate: "Dec 30, 2024",
      readTime: "14 min read",
      views: "892",
      likes: "34",
      comments: "9",
      trending: false
    },
    {
      id: 6,
      title: "Mobile-First Development Strategy for 2025",
      excerpt: "Why mobile-first approach is crucial for modern web development and how to implement it effectively.",
      icon: "📱",
      gradient: "from-yellow-600 to-orange-600",
      tags: ["Mobile", "Responsive", "Strategy"],
      author: { name: "Lisa Garcia", avatar: "LG", role: "Mobile Developer" },
      publishDate: "Dec 28, 2024",
      readTime: "7 min read",
      views: "543",
      likes: "18",
      comments: "4",
      trending: true
    }
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-gray-300 text-lg">Discover insights from our expert team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                currentPage === index + 1
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="py-20 px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and industry insights delivered directly to your inbox. Join our community of developers and designers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <BlogHero isVisible={isVisible} />
      <SearchAndFilters />
      <FeaturedArticle />
      <BlogGrid />
      <NewsletterSection />
      
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
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