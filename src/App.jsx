import { useRef } from 'react'
import Navigation from './components/Navigation'
import Cursor from './components/Cursor'
import Intro from './components/sections/Intro'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Stack from './components/sections/Stack'
import Contact from './components/sections/Contact'
import { useScrub } from './hooks/useScrub'

function App() {
  const mainRef = useRef(null)
  useScrub(mainRef)

  return (
    <>
      <Navigation />
      <Cursor />
      <main ref={mainRef}>
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