import About from "./components/About"
import Home from "./components/Home"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import SocialLinks from "./components/SocialLinks"
import Techs from "./components/Techs"

function App() {

  return (
    <>
      <ParticlesBackground />
      
      <div id="App">
        <Navbar />

        <main>
          <Home />
          <About />
          <MyProjects />
          <Techs />

          <SocialLinks />
        </main>
      </div>
    </>
  )
}

export default App
