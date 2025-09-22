import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Eventify from './pages/Eventify'
import SOS from './pages/SOS'
import MedGo from './pages/MedGo'
import Contact from './pages/Contact'
import VenueDetails from './pages/VenueDetails'
import ListVenue from './pages/ListVenue'
import HousePartyHub from './pages/HousePartyHub'
import ResearchPortal from './pages/ResearchPortal'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import PropGo from './pages/PropGo'
import VedicAI from './pages/VedicAI'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/eventify" element={<Eventify />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/medgo" element={<MedGo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/venue/:id" element={<VenueDetails />} />
            <Route path="/list-venue" element={<ListVenue />} />
            <Route path="/house-party-hub" element={<HousePartyHub />} />
            <Route path="/research" element={<ResearchPortal />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/propgo" element={<PropGo />} />
            <Route path="/vedic-ai" element={<VedicAI />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default App
