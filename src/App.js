import React from 'react'
import Footer from './Components/Footer'
import AboutUs from './Sections/AboutUs'
import HeroSection from './Sections/HeroSection'
import Portfolio from './Sections/Portfolio'
import Steps from './Sections/Steps'
const App = () => {
  return (
    <div>
     <HeroSection/>
     <AboutUs/>
     <Portfolio/>
     <Steps/>
      <Footer/>
    </div>
  )
}

export default App