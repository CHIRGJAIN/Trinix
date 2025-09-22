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
    <nav className="container-custom px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-white font-bold text-xl">T</span>
          </motion.div>
          <span className="text-white font-display font-bold text-xl gradient-text">
            Trinix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white/80 hover:text-white transition-colors duration-200 ${
                location.pathname === item.path ? 'text-white font-semibold' : ''
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
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span>{user?.name || 'Dashboard'}</span>
              </Link>
              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
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
          className="lg:hidden text-white p-2"
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
            className="lg:hidden mt-4 glass rounded-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-white/80 hover:text-white transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-white font-semibold' : ''
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
                      className="flex items-center justify-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
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
    </nav>
  )
}

export default Navbar
