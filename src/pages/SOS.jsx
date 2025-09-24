import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Bell, Shield, Phone, MapPin } from 'lucide-react'

const SOS = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center electric-glow"
          >
            <AlertTriangle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              SOS <span className="gradient-text">Coming Soon</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Emergency response and safety network ensuring rapid assistance and safety for communities worldwide.
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              We're building a comprehensive emergency response platform that will revolutionize how communities 
              handle emergencies and ensure rapid assistance when it matters most.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Emergency Alerts</h3>
              <p className="text-white/70">Instant emergency notifications and alerts</p>
            </div>
            
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">GPS Tracking</h3>
              <p className="text-white/70">Real-time location tracking for emergency response</p>
            </div>
            
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">First Responder Network</h3>
              <p className="text-white/70">Connected network of emergency responders</p>
            </div>
            
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Safety Check-ins</h3>
              <p className="text-white/70">Regular safety check-ins and status updates</p>
            </div>
          </motion.div>

          {/* Notify Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-2xl p-12 max-w-2xl mx-auto electric-border"
          >
            <div className="text-center">
              <Clock className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Get Notified</h2>
              <p className="text-xl text-white/80 mb-8">
                Be the first to know when SOS launches. Get early access to our emergency response platform 
                and help us build a safer community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 input-field"
                />
                <button className="button-primary flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notify Me</span>
                </button>
              </div>
              
              <p className="text-white/60 text-sm mt-4">
                We'll send you updates about SOS development and launch
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SOS

