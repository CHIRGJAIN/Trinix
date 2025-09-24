import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut } from 'lucide-react'
import { useStore } from '../../store/store'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useStore()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-200/50">
      <div className="container-custom px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="w-16 h-16 rounded-lg flex items-center justify-center sky-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img 
              src="/trinix-logo.png" 
              alt="Trinix Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <span className="text-sky-800 font-display font-bold text-xl gradient-text">
            Trinix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sky-600 hover:text-sky-500 transition-colors duration-200 ${
                location.pathname === item.path ? 'text-sky-500 font-semibold sky-glow' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}



          {/* Auth Controls (only show when authenticated; no Login button for guests) */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-sky-600 hover:text-sky-500 transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span>{user?.name || 'Dashboard'}</span>
              </Link>
              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="flex items-center space-x-2 text-sky-600 hover:text-sky-500 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-sky-600 p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-white/80 backdrop-blur-md border border-sky-200/50 rounded-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sky-600 hover:text-sky-500 transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-sky-500 font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              


              <div className="border-t border-white/20 pt-4">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      className="flex items-center justify-center space-x-2 text-white/80 hover:text-electric-400 transition-colors duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span>{user?.name || 'Dashboard'}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        navigate('/')
                      }}
                      className="flex items-center justify-center space-x-2 w-full text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
