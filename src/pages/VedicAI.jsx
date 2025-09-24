import { motion } from 'framer-motion'
import { Brain, Clock, Bell, Sparkles, BookOpen, Lightbulb } from 'lucide-react'

const VedicAI = () => {
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
            className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center electric-glow"
          >
            <Brain className="w-12 h-12 text-white" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Vedic AI <span className="gradient-text">Coming Soon</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              AI-driven insights blending classical knowledge with modern techniques.
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              We're creating the future of AI by integrating ancient wisdom with cutting-edge technology. 
              Experience the power of classical knowledge enhanced by modern artificial intelligence.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Generative Models</h3>
              <p className="text-white/70">Advanced AI models trained on classical knowledge and modern data</p>
            </div>
            
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge Graphs</h3>
              <p className="text-white/70">Interconnected knowledge systems bridging ancient wisdom and modern insights</p>
            </div>
            
            <div className="glass rounded-2xl p-6 electric-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-electric-500 to-neon-500 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Integrations</h3>
              <p className="text-white/70">Seamless integration with business systems and workflows</p>
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
              <Sparkles className="w-16 h-16 text-electric-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Get Early Access</h2>
              <p className="text-xl text-white/80 mb-8">
                Be among the first to experience the fusion of ancient wisdom and modern AI. 
                Get exclusive access to Vedic AI's revolutionary capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 input-field"
                />
                <button className="button-primary flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Get Access</span>
                </button>
              </div>
              
              <p className="text-white/60 text-sm mt-4">
                We'll notify you when Vedic AI is ready for early testing
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default VedicAI
