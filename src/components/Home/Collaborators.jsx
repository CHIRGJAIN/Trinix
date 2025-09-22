import { motion } from 'framer-motion'

const collaborators = [
  {
    name: 'VVES',
    // If real logo URLs are available, replace placeholder with logo src
    logo: null,
    initials: 'V',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Yorker Holidays Pvt Ltd',
    logo: null,
    initials: 'YH',
    color: 'from-amber-500 to-orange-500'
  }
]

const Collaborators = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-black/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
            Our Collaborators
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            We proudly work with organizations that share our passion for innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborators.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-4"
            >
              {c.logo ? (
                <img src={c.logo} alt={`${c.name} logo`} className="w-14 h-14 rounded-xl object-contain bg-white/10 p-2" />
              ) : (
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-xl`}> 
                  {c.initials}
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                <p className="text-white/60 text-sm">Strategic Partner</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collaborators
