import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Globe, Zap } from 'lucide-react'

const CompanyIntro = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology to solve real-world problems.',
      icon: '🚀'
    },
    {
      title: 'User-Centric Design',
      description: 'Every feature is crafted with our users in mind, ensuring intuitive and powerful experiences.',
      icon: '❤️'
    },
    {
      title: 'Reliability & Trust',
      description: 'Our platforms are built for mission-critical operations with enterprise-grade security.',
      icon: '🛡️'
    },
    {
      title: 'Global Impact',
      description: 'We\'re committed to making a positive difference in communities worldwide.',
      icon: '🌍'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                  About <span className="gradient-text">Trinix</span>
                </h2>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-white/80 leading-relaxed"
              >
                Founded in 2008, Trinix Pvt. Ltd. has been at the forefront of digital innovation, 
                creating solutions that bridge the gap between technology and human needs.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 leading-relaxed"
              >
                Our mission is to empower communities through technology, whether it's connecting 
                people during emergencies, streamlining healthcare access, or creating unforgettable events.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="button-primary inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

  {/* Bottom call-to-action card removed as requested */}
      </div>
    </section>
  )
}

export default CompanyIntro
