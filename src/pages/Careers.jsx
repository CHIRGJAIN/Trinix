import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  Users, 
  ArrowRight,
  Filter,
  Building
} from 'lucide-react'
import { useStore } from '../store/store'

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterLocation, setFilterLocation] = useState('all')
  const { jobs } = useStore()

  // Get unique locations for filter
  const locations = [...new Set(jobs.map(job => job.location))]

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    if (!job.isActive) return false // Only show active jobs
    
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = filterType === 'all' || job.type === filterType
    const matchesLocation = filterLocation === 'all' || job.location === filterLocation
    
    return matchesSearch && matchesType && matchesLocation
  })

  const activeJobs = jobs.filter(job => job.isActive)

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover exciting opportunities to work with innovative technologies and make a real impact. 
            We're looking for passionate individuals who share our vision of building the future.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{activeJobs.length}</div>
            <div className="text-white/60 text-sm">Open Positions</div>
          </div>
          
          <div className="glass rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{locations.length}</div>
            <div className="text-white/60 text-sm">Locations</div>
          </div>
          
          <div className="glass rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-white/60 text-sm">Team Members</div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 border border-white/10 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title, description, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>

              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-white/60 text-sm mb-3">
                        <Building className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.type === 'Full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      job.type === 'Part-time' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      job.type === 'Internship' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>
                  
                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm border border-white/20"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:flex-shrink-0">
                  <button className="button-primary flex items-center space-x-2 group-hover:scale-105 transition-transform duration-200">
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-white/40" />
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-white/60 mb-6">
                {searchQuery || filterType !== 'all' || filterLocation !== 'all'
                  ? 'Try adjusting your search criteria or filters'
                  : 'We currently don\'t have any open positions. Check back later!'
                }
              </p>
              {(searchQuery || filterType !== 'all' || filterLocation !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setFilterType('all')
                    setFilterLocation('all')
                  }}
                  className="button-secondary"
                >
                  Clear Filters
                </button>
              )}
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see the right fit?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="button-primary inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="button-secondary inline-flex items-center space-x-2"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Careers



