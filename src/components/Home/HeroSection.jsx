import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star } from 'lucide-react'

const HeroSection = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const projects = [
    {
      name: 'Eventify',
      description: 'Revolutionary event management platform',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      path: '/eventify',
      stats: { venues: '1,250+', events: '3,400+', users: '12,500+' }
    },
    {
      name: 'SOS',
      description: 'Emergency response and safety network',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      path: '/sos',
      stats: { response: '< 2min', coverage: '95%', users: '50,000+' }
    },
    {
      name: 'MedGo',
      description: 'Healthcare provider network and booking',
      color: 'from-green-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      path: '/medgo',
      stats: { doctors: '850+', patients: '25,000+', rating: '4.8' }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight"
              >
                Innovating
                <span className="block gradient-text">Tomorrow</span>
                <span className="block text-white">Today</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-white/80 leading-relaxed"
              >
                Discover Trinix's cutting-edge solutions for emergency services, 
                healthcare, and event management. We're building the future, one innovation at a time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/about"
                className="button-primary flex items-center justify-center space-x-2"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="button-secondary flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats removed as per requirements */}
          </motion.div>

          {/* Project Tiles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${projects[activeProject].color}`}>
                    <img
                      src={projects[activeProject].image}
                      alt={projects[activeProject].name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {projects[activeProject].name}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {projects[activeProject].description}
                      </p>
                      <Link
                        to={projects[activeProject].path}
                        className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Tabs */}
            <div className="flex justify-center space-x-4 mt-6">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? `bg-gradient-to-r ${project.color} scale-125`
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Video Demo Coming Soon</p>
                  <p className="text-sm text-white/60 mt-2">
                    Our interactive demo is being prepared
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HeroSection



