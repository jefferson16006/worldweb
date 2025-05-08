import React from 'react'
import AboutNavbar from '../components/AboutNavbar'
import AboutHero from '../components/AboutHero'
import HowItWorks from '../components/HowItWorks'
import OurTechnology from '../components/OurTechnology'
import AboutFooter from '../components/AboutFooter'


const GuestAboutPage = () => {
  return (
    <div>
      <AboutNavbar />
      <AboutHero />
      <HowItWorks />
      <OurTechnology />
      <AboutFooter />
    </div>
  )
}

export default GuestAboutPage