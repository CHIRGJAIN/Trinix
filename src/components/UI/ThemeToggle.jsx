import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useStore } from '../../store/store'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-40 w-12 h-12 glass rounded-full shadow-lg flex items-center justify-center text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle



