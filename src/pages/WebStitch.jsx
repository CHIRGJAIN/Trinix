import { motion } from 'framer-motion'
import { Code, Palette, Zap, Globe, ArrowRight, Check, Star, Users, Award, Clock } from 'lucide-react'

const WebStitch = () => {
  const features = [
    {
      icon: Code,
      title: 'Theme Templates',
      description: 'Pre-built, responsive templates for rapid development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Drag & Drop',
      description: 'Intuitive visual editor for easy customization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Export & Deploy',
      description: 'One-click deployment to your preferred platform',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Tailored solutions for your business needs',
      icon: Code
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces',
      icon: Palette
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development',
      icon: Globe
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform applications',
      icon: Zap
    }
  ]

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '25+', label: 'Happy Clients' },
    { value: '4.9', label: 'Average Rating' },
    { value: '2 Years', label: 'Experience' }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center electric-glow"
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            WebStitch <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
            A lightweight website builder and theme stitching tool for rapid site assembly. 
            We create beautiful, functional websites that grow with your business.
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
            From concept to deployment, WebStitch delivers exceptional web solutions with cutting-edge technology, 
            creative design, and seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="button-primary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="button-secondary text-lg px-8 py-4">
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive web development services powered by modern technology and creative expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-2xl p-8 text-center electric-border"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Development <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Full-stack development solutions tailored to your business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-2xl p-6 electric-border hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="gradient-text">WebStitch</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Focus</h3>
              <p className="text-white/70">Every project is crafted with attention to detail and quality assurance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-white/70">Efficient development process ensuring timely project completion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Support</h3>
              <p className="text-white/70">Dedicated support and maintenance for all our projects</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto electric-border">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with cutting-edge web development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://webstitch.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Visit WebStitch.in</span>
                <ArrowRight className="w-6 h-6" />
              </a>
              <button className="button-secondary text-lg px-8 py-4">
                Schedule Consultation
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WebStitch
