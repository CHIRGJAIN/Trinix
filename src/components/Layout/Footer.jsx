import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sky-50 text-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-sky-600">Trinix</h3>
              <p className="text-sky-600 mt-2">
                Empowering innovation through technology. We create cutting-edge solutions 
                that transform businesses and enhance user experiences.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-sky-600">Quick Links</h4>
              <ul className="space-y-2 mt-4">
                <li><a href="/" className="text-sky-600 hover:text-sky-500 transition-colors">Home</a></li>
                <li><a href="/about" className="text-sky-600 hover:text-sky-500 transition-colors">About</a></li>
                <li><a href="/projects" className="text-sky-600 hover:text-sky-500 transition-colors">Projects</a></li>
                <li><a href="/contact" className="text-sky-600 hover:text-sky-500 transition-colors">Contact</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-sky-600">Services</h4>
              <ul className="space-y-2 mt-4">
                <li><a href="/eventify" className="text-sky-600 hover:text-sky-500 transition-colors">Eventify</a></li>
                <li><a href="/housepartyhub" className="text-sky-600 hover:text-sky-500 transition-colors">HousePartyHub</a></li>
                <li><a href="/medgo" className="text-sky-600 hover:text-sky-500 transition-colors">MedGo</a></li>
                <li><a href="/research" className="text-sky-600 hover:text-sky-500 transition-colors">Research Portal</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-sky-600">Contact</h4>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-sky-500" />
                  <span className="text-sky-600">info@trinix.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-sky-500" />
                  <span className="text-sky-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  <span className="text-sky-600">123 Tech Street, Digital City</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-sky-200 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sky-600 hover:text-sky-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Admin Login Button */}
              <a href="/admin/login" className="ml-4 px-3 py-1 bg-sky-100 hover:bg-sky-200 text-sm rounded text-sky-700 border border-sky-200">Admin Login</a>
            </div>
            <p className="text-sky-600 text-sm">
              © {currentYear} Trinix. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer



