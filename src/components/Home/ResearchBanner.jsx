import { motion } from 'framer-motion'
import { FileText, Upload } from 'lucide-react'
import { useStore } from '../../store/store'

const ResearchBanner = () => {
  const { openModal } = useStore()

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-12 border border-gray-200/50"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Submit Your Research
                  </h3>
                  <p className="text-gray-600">Share your innovations with the world</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                We're always looking for groundbreaking research and innovative projects. 
                Submit your work to be featured in our research portal and connect with 
                like-minded professionals worldwide.
              </p>
              
              <button
                onClick={() => openModal('research')}
                className="button-primary inline-flex items-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Submit Research</span>
              </button>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <div className="text-gray-600">
                Join our community of researchers and innovators
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchBanner



