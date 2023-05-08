import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import VideosPage from "./components/pages/VideosPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        
        <Route path="/videos" element={<VideosPage />}/>


      </Routes>
        
      
    </>
  )
}

export default App
