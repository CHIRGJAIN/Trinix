import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Shield, Heart, Activity } from 'lucide-react'

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
    }
    ,
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
      path: 'https://webstitch.in/',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      external: true
    }
  ]

  const [index, setIndex] = useState(0)
  const length = projects.length
  const autoPlayRef = useRef(null)

  useEffect(() => {
    autoPlayRef.current = () => {
      setIndex((prev) => (prev + 1) % length)
    }
  }, [length])

  useEffect(() => {
    const play = () => autoPlayRef.current()
    const interval = setInterval(play, 4500)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + length) % length)
  const next = () => setIndex((i) => (i + 1) % length)

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Our <span className="gradient-text">Innovative</span> Solutions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of platforms designed to revolutionize how we handle events, emergencies, and healthcare.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-6">
            <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ArrowRight className="w-5 h-5 transform rotate-180 text-white" />
            </button>

            <div className="w-full max-w-5xl overflow-visible">
              <div className="relative h-[44rem] flex items-center justify-center">
                {/* compute left, center, right indices */}
                {(() => {
                  const center = index
                  const left = (index - 1 + length) % length
                  const right = (index + 1) % length

                  const leftProject = projects[left]
                  const centerProject = projects[center]
                  const rightProject = projects[right]

                  const Card = ({ project, pos }) => {
                    // pos: 'left' | 'center' | 'right'
                    const isCenter = pos === 'center'
                    const translateX = pos === 'left' ? -60 : pos === 'right' ? 60 : 0
                    const rotateY = pos === 'left' ? 10 : pos === 'right' ? -10 : 0
                    // keep side cards same visual length as center; use slight scale tweak for depth
                    const scale = isCenter ? 1.03 : 0.995
                    const z = isCenter ? 50 : 8
                    const opacity = isCenter ? 1 : 0.9
                    // fixed card size: wider and shorter per request
                    const cardWidth = '70rem'
                    const cardHeight = '40rem'

                    return (
                      <motion.div
                        key={project.name + pos}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                            zIndex: z,
                            opacity,
                            width: cardWidth,
                            maxWidth: '95vw'
                          }}
                          className={`inline-block mx-8 p-4`}
                      >
                          <div style={{ height: cardHeight }} className={`relative glass rounded-2xl overflow-hidden bg-gradient-to-br ${project.bgColor} border border-white/10 hover:border-white/20 transition-all duration-300`}>
                          <div className="absolute inset-0">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-20" />
                          </div>
                          <div className="relative p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-6">
                              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                {React.createElement(project.icon, { className: 'w-8 h-8 text-white' })}
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                              <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>
                              <div className="space-y-2 mb-6">
                                {project.features.map((feature, fi) => (
                                  <div key={fi} className="flex items-center space-x-2">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                                    <span className="text-white/80 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-white/60 text-sm">Learn More</span>
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                                <ArrowRight className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    )
                  }

                  return (
                    <>
                      {/* left behind */}
                      <Card project={leftProject} pos="left" />
                      {/* center on top */}
                      <Card project={centerProject} pos="center" />
                      {/* right behind */}
                      <Card project={rightProject} pos="right" />
                    </>
                  )
                })()}
              </div>
            </div>

            <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
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



