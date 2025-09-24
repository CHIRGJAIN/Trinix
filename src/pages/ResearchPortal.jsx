import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Code, 
  Users, 
  Star, 
  Download, 
  ExternalLink,
  ArrowRight,
  Calendar,
  FileText,
  Github,
  Search,
  Eye,
  Clock,
  Tag
} from 'lucide-react'
import { useStore } from '../store/store'

const ResearchPortal = () => {
  const { openModal } = useStore()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Machine Learning', 'Healthcare Tech', 'Operations Research', 'Open Source', 'Publications']

  const defaultResearchItems = [
    {
      id: 1,
      title: "AI-Powered Event Recommendation System",
      description: "Advanced machine learning algorithms for personalized event recommendations based on user preferences and behavior patterns.",
      category: "Machine Learning",
      type: "Research Project",
      date: "March 2024",
      author: "Dr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      views: "1.2K",
      featured: true
    },
    {
      id: 2,
      title: "Real-time Emergency Response Optimization",
      description: "Optimization algorithms for emergency response systems to reduce response times and improve resource allocation.",
      category: "Operations Research",
      type: "Research Project",
      date: "February 2024",
      author: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
      views: "856"
    },
    {
      id: 3,
      title: "Healthcare Appointment Scheduling Algorithm",
      description: "Intelligent scheduling system that optimizes doctor-patient appointments while considering urgency and resource constraints.",
      category: "Healthcare Tech",
      type: "Research Project",
      date: "January 2024",
      author: "Dr. Neha Gupta",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
      views: "723"
    },
    {
      id: 4,
      title: "Eventify API: Open Source Event Management",
      description: "Comprehensive API framework for building scalable event management and venue booking systems.",
      category: "Open Source",
      type: "Open Source Tool",
      date: "December 2023",
      author: "Trinix Team",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
      views: "2.1K",
      stars: 245,
      downloads: "1.2K"
    },
    {
      id: 5,
      title: "Optimizing Emergency Response Systems Using Machine Learning",
      description: "Published research paper on implementing ML algorithms to enhance emergency response efficiency and accuracy.",
      category: "Publications",
      type: "Research Paper",
      date: "November 2023",
      author: "Dr. Rajesh Kumar, Priya Sharma",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "15 min read",
      views: "1.8K",
      journal: "IEEE Transactions"
    },
    {
      id: 6,
      title: "SOS Emergency Kit: Safety Application Framework",
      description: "Open-source toolkit for developing emergency response and safety applications with real-time capabilities.",
      category: "Open Source",
      type: "Open Source Tool",
      date: "October 2023",
      author: "Trinix Team",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      views: "945",
      stars: 189,
      downloads: "856"
    },
    {
      id: 7,
      title: "AI-Driven Event Recommendation Systems: A Comprehensive Study",
      description: "Comprehensive analysis of AI-powered recommendation systems in event management and user engagement.",
      category: "Publications",
      type: "Research Paper",
      date: "September 2023",
      author: "Amit Patel, Sarah Johnson",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "18 min read",
      views: "1.5K",
      journal: "ACM Digital Library"
    },
    {
      id: 8,
      title: "MedGo SDK: Healthcare Integration Framework",
      description: "Software development kit for building healthcare appointment and patient management systems.",
      category: "Open Source",
      type: "Open Source Tool",
      date: "August 2023",
      author: "Trinix Team",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
      views: "1.1K",
      stars: 156,
      downloads: "723"
    }
  ]

  // Load saved research items from localStorage (admin dashboard writes to this key).
  let researchItems = defaultResearchItems
  try {
    const raw = localStorage.getItem('trinix_research_items')
    if (raw) {
      const saved = JSON.parse(raw)
      if (Array.isArray(saved) && saved.length > 0) {
        // prepend saved items so admin-added appear first
        researchItems = [...saved, ...defaultResearchItems.filter(d => !saved.some(s => s.id === d.id))]
      }
    }
  } catch (e) {
    // ignore parse errors
    console.error('Failed to load saved research items', e)
  }

  const filteredItems = researchItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category) => {
    const colors = {
      'Machine Learning': 'from-electric-500 to-neon-500',
      'Healthcare Tech': 'from-electric-400 to-electric-600',
      'Operations Research': 'from-neon-500 to-electric-600',
      'Open Source': 'from-electric-500 to-accent-500',
      'Publications': 'from-electric-600 to-neon-400'
    }
    return colors[category] || 'from-electric-500 to-electric-600'
  }

  const getTypeIcon = (type) => {
    const icons = {
      'Research Project': BookOpen,
      'Open Source Tool': Code,
      'Research Paper': FileText
    }
    return icons[type] || BookOpen
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom section-padding">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center electric-glow">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Research <span className="gradient-text">Portal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge research projects, open-source tools, and academic publications. 
            Discover innovative solutions that are shaping the future of technology.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search research projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            {/* Category Filters - Always Visible */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing {filteredItems.length} of {researchItems.length} research items
          </p>
        </motion.div>

        {/* Research Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="glass rounded-2xl overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 h-full">
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          Featured
                        </span>
                      </div>
                    )}

                                         {/* Type Icon */}
                     <div className="absolute bottom-4 right-4">
                       <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                         {(() => {
                           const IconComponent = getTypeIcon(item.type)
                           return <IconComponent className="w-5 h-5 text-gray-600" />
                         })()}
                       </div>
                     </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{item.author}</span>
                      </div>
                      <span>{item.date}</span>
                    </div>

                    {/* Additional Info for Open Source */}
                    {item.stars && (
                      <div className="flex items-center space-x-4 text-xs text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{item.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{item.downloads}</span>
                        </div>
                      </div>
                    )}

                    {/* Journal Info for Publications */}
                    {item.journal && (
                      <div className="flex items-center space-x-1 text-xs text-gray-600 mb-4">
                        <Tag className="w-3 h-3" />
                        <span>{item.journal}</span>
                      </div>
                    )}

                    {/* Read More Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-medium">Read More</span>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredItems.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <button className="button-primary inline-flex items-center space-x-2">
              <span>Load More Research</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 border border-gray-200/50">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Contribute to Research
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a research idea or want to collaborate? We're always looking for 
              talented researchers and innovative projects to advance technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('research')}
                className="button-primary flex items-center space-x-2"
              >
                <span>Submit Research Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="button-secondary flex items-center space-x-2">
                <span>Join Research Team</span>
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResearchPortal
