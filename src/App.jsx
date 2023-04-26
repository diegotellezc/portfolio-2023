import About from "./components/About"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"

function App() {

  return (
    <>
      <ParticlesBackground />
      
      <div id="App">
        <Navbar />

        <main>
          <About />

        </main>
      </div>
    </>
  )
}

export default App
