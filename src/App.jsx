import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about-me" element={<AboutPage />}/>

      </Routes>

      <GeneralFooter />
        
      
    </>
  )
}

export default App
