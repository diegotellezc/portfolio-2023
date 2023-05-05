import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import Videos from "./components/Videos"
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
          {/* <Videos /> */}
          <Contact />

          <SocialLinks />
        </main>
      </div>
    </>
  )
}

export default App
