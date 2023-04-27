import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"

function App() {

  return (
    <>
      <ParticlesBackground />
      
      <div id="App">
        <Navbar />

        <main>
          <Home />

        </main>
      </div>
    </>
  )
}

export default App
