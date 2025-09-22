import { motion } from 'framer-motion'
import { useStore } from '../../store/store'

const StatsSection = () => {
  const { stats } = useStore()

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
            Our <span className="gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real metrics that demonstrate our commitment to innovation and user satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { key: 'venuesListed', label: 'Venues Listed', suffix: '+' },
            { key: 'partiesOrganized', label: 'Parties Organized', suffix: '+' },
            { key: 'doctorsRegistered', label: 'Doctors Registered', suffix: '+' },
            { key: 'usersActive', label: 'Active Users', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stats[stat.key].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection



