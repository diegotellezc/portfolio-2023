import About from "./components/About"
import Home from "./components/Home"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <>
      <ParticlesBackground />
      
      <div id="App">
        <Navbar />

        <main>
          <Home />
          <SocialLinks />
          <About />
          <MyProjects />
        </main>
      </div>
    </>
  )
}

export default App
