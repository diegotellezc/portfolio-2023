import Home from "./components/Home"
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

          <Home />
        </main>
      </div>
    </>
  )
}

export default App
