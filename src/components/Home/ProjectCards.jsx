import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Shield, Heart, Activity, ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectCards = () => {
  const projects = [
    {
      name: 'Eventify',
      description: 'Revolutionary event management platform connecting venues, organizers, and attendees seamlessly.',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      features: ['Venue Booking', 'Event Planning', 'Real-time Updates', 'Payment Integration'],
      path: '/eventify',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'SOS',
      description: 'Emergency response network ensuring rapid assistance and safety for communities worldwide.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10',
      features: ['Emergency Alerts', 'GPS Tracking', 'First Responder Network', 'Safety Check-ins'],
      path: '/sos',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'MedGo',
      description: 'Healthcare provider network streamlining medical appointments and patient care.',
      icon: Heart,
      color: 'from-green-500 to-blue-500',
      bgColor: 'from-green-500/10 to-blue-500/10',
      features: ['Doctor Booking', 'Health Records', 'Telemedicine', 'Prescription Management'],
      path: '/medgo',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'PropGo',
      description: 'Property discovery and management platform for rentals and listings.',
      icon: ArrowRight,
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'from-indigo-500/10 to-violet-500/10',
      features: ['Property Listings', 'Search & Filters', 'Owner Dashboard'],
      path: '/propgo',
      image: 'https://images.unsplash.com/photo-1505691723518-36a0f4a2e6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Vedic AI',
      description: 'AI-driven insights blending classical knowledge with modern techniques.',
      icon: Activity,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      features: ['Generative Models', 'Knowledge Graphs', 'Enterprise Integrations'],
      path: '/vedic-ai',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'WebStitch',
      description: 'A lightweight website builder and theme stitching tool for rapid site assembly.',
      icon: ArrowRight,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      features: ['Theme Templates', 'Drag & Drop', 'Export & Deploy'],
      path: '/webstitch',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      external: false
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 3000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, projects.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [isAutoPlaying])

  // Get visible cards based on screen size
  const getVisibleCards = () => {
    const cards = []
    const totalCards = projects.length
    
    for (let i = 0; i < 3; i++) {
      const cardIndex = (currentIndex + i) % totalCards
      cards.push({
        ...projects[cardIndex],
        position: i,
        isCenter: i === 1
      })
    }
    return cards
  }

  const visibleCards = getVisibleCards()

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-sky-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-sky-800 mb-6">
            Our <span className="gradient-text">Innovative</span> Solutions
          </h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of platforms designed to revolutionize how we handle events, emergencies, and healthcare.
          </p>
        </motion.div>

        {/* Responsive Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={goToPrevious}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(255,255,255,0.25)",
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              className="group p-3 rounded-full bg-sky-100/50 hover:bg-sky-200/50 transition-all duration-700 sky-border"
            >
              <ChevronLeft className="w-6 h-6 text-sky-600 group-hover:text-sky-500 transition-colors duration-300" />
            </motion.button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ 
                    scale: 1.3,
                    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.8,
                    transition: { duration: 0.1, ease: "easeOut" }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-700 ${
                    index === currentIndex
                      ? 'bg-sky-500 scale-125'
                      : 'bg-sky-300 hover:bg-sky-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(255,255,255,0.25)",
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              className="group p-3 rounded-full bg-sky-100/50 hover:bg-sky-200/50 transition-all duration-700 sky-border"
            >
              <ChevronRight className="w-6 h-6 text-sky-600 group-hover:text-sky-500 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`
              }}
              transition={{
                type: "tween",
                ease: [0.25, 0.1, 0.25, 1],
                duration: 1.2
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {/* Show 3 cards on desktop, 2 on tablet, 1 on mobile */}
                    {getVisibleCards().map((card, cardIndex) => (
                      <motion.div
                        key={`${index}-${cardIndex}`}
                        initial={{ opacity: 0, y: 40, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          delay: cardIndex * 0.15,
                          duration: 0.8,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className={`${
                          card.isCenter 
                            ? 'md:col-span-2 lg:col-span-2' 
                            : cardIndex === 0 
                              ? 'md:col-span-1 lg:col-span-1' 
                              : 'md:col-span-1 lg:col-span-1'
                        }`}
                      >
                        <motion.div
                          whileHover={{ 
                            y: -10,
                            scale: card.isCenter ? 1.1 : 1.02,
                            transition: { 
                              duration: 0.4, 
                              ease: [0.25, 0.1, 0.25, 1],
                              type: "tween"
                            }
                          }}
                          whileTap={{ 
                            scale: 0.96,
                            transition: { duration: 0.15, ease: "easeOut" }
                          }}
                          className={`relative glass rounded-2xl overflow-hidden bg-gradient-to-br ${card.bgColor} border border-sky-200/50 hover:border-sky-300/50 transition-all duration-700 ${
                            card.isCenter ? 'h-80 scale-105 shadow-2xl' : 'h-72 scale-95'
                          }`}
                        style={{
                            boxShadow: card.isCenter 
                              ? '0 25px 50px -12px rgba(0, 191, 255, 0.25)' 
                              : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img
                              src={card.image}
                              alt={card.name}
                              className="w-full h-full object-cover opacity-20"
                            />
                          </div>

                          {/* Content */}
                          <div className={`relative h-full flex flex-col ${
                            card.isCenter ? 'p-6' : 'p-5'
                          }`}>
                            {/* Icon */}
                            <div className="flex items-start justify-between mb-4">
                              <div className={`rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center ${
                                card.isCenter ? 'w-14 h-14' : 'w-12 h-12'
                              }`}>
                                {React.createElement(card.icon, { 
                                  className: `text-white ${
                                    card.isCenter ? 'w-7 h-7' : 'w-6 h-6'
                                  }` 
                                })}
                              </div>
                              {card.isCenter && (
                                <div className="px-3 py-1 rounded-full bg-electric-500/20 text-electric-400 text-sm font-medium">
                                  Featured
                                </div>
                              )}
                            </div>

                            {/* Title and Description */}
                            <div className="flex-1">
                              <h3 className={`font-bold text-sky-800 mb-2 ${
                                card.isCenter ? 'text-xl' : 'text-lg'
                              }`}>
                                {card.name}
                              </h3>
                              <p className={`text-sky-600 leading-relaxed mb-4 ${
                                card.isCenter ? 'text-sm' : 'text-xs'
                              }`}>
                                {card.description}
                              </p>

                              {/* Features */}
                              <div className={`space-y-1 mb-4 ${
                                card.isCenter ? 'grid grid-cols-2 gap-1' : 'space-y-1'
                              }`}>
                                {card.features.slice(0, card.isCenter ? 4 : 2).map((feature, fi) => (
                                  <div key={fi} className="flex items-center space-x-2">
                                    <div className={`rounded-full bg-gradient-to-r ${card.color} ${
                                      card.isCenter ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5'
                                    }`} />
                                    <span className={`text-sky-700 ${
                                      card.isCenter ? 'text-xs' : 'text-xs'
                                    }`}>
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Button */}
                            <div className="flex items-center justify-between">
                              <span className={`text-sky-500 font-medium ${
                                card.isCenter ? 'text-sm' : 'text-xs'
                              }`}>
                                Learn More
                              </span>
                              <motion.div
                                className={`rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center ${
                                  card.isCenter ? 'w-10 h-10' : 'w-8 h-8'
                                }`}
                                whileHover={{ 
                                  scale: 1.2,
                                  transition: { 
                                    duration: 0.3, 
                                    ease: [0.25, 0.1, 0.25, 1],
                                    type: "tween"
                                  }
                                }}
                                whileTap={{ 
                                  scale: 0.8,
                                  transition: { 
                                    duration: 0.1, 
                                    ease: "easeOut"
                                  }
                                }}
                                transition={{ 
                                  duration: 0.4, 
                                  ease: [0.25, 0.1, 0.25, 1],
                                  type: "tween"
                                }}
                              >
                                <ArrowRight className={`text-white ${
                                  card.isCenter ? 'w-4 h-4' : 'w-4 h-4'
                                }`} />
                              </motion.div>
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </motion.div>
                    ))}
              </div>
            </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/about"
            className="button-primary inline-flex items-center space-x-2"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectCards