import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [activePage, setActivePage] = useState('home')
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <About />}
        {activePage === 'projects' && <Projects />}
      </main>
      <Footer />
    </div>
  )
}

export default App