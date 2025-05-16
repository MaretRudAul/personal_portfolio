import React from 'react'

const Home = () => (
  <section className="text-center">
    <h1 className="text-4xl font-bold mb-4">Hi, I'm Maret Rudin-Aulenbach</h1>
    <p className="text-lg mb-6">
      
    </p>
    <button
      onClick={() => window.open('mailto:mrudinaulenbach@gmail.com')}
      className="bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 transition"
    >
      Contact Me
    </button>
  </section>
)

export default Home