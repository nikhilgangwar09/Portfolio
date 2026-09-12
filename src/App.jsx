import Navigation from './components/Navigation'
import Intro from './components/sections/Intro'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Stack from './components/sections/Stack'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navigation />
      <main>
        {/* Exactly 5 main sections */}
        <Intro />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  )
}

export default App