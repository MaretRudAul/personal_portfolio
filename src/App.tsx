import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('projects'); // Changed to 'projects' as default
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {activePage === 'about' && <About />}
        {activePage === 'projects' && <Projects />}
      </main>
      <Footer />
    </div>
  );
};

export default App;