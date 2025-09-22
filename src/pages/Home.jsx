import { useEffect } from 'react'
import HeroSection from '../components/Home/HeroSection'
import CompanyIntro from '../components/Home/CompanyIntro'
import ProjectCards from '../components/Home/ProjectCards'
import ResearchSection from '../components/Home/ResearchSection'
import ResearchBanner from '../components/Home/ResearchBanner'
// import Collaborators from '../components/Home/Collaborators'
import { useStore } from '../store/store'

const Home = () => {
  const { updateStats } = useStore()

  useEffect(() => {
    // Initialize stats with realistic data
    updateStats({
      venuesListed: 1250,
      partiesOrganized: 3400,
      doctorsRegistered: 850,
      usersActive: 12500,
    })
  }, [updateStats])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Trinix */}
      <CompanyIntro />

      {/* Innovative Solutions */}
      <ProjectCards />

      {/* Research */}
      <ResearchSection />

      {/* Research Banner */}
      <ResearchBanner />

  {/* Our Collaborators */}
  {/** Collaborators section commented out as requested
  <Collaborators />
  */}
    </div>
  )
}

export default Home
