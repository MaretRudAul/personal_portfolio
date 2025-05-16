import React from 'react';
import TypeWriter from './animations/TypeWriter';

const About: React.FC = () => (
  <section>
    <div className="text-center mb-12">
      <TypeWriter
        text="Hi, I'm Maret Rudin-Aulenbach"
        className="text-4xl font-bold mb-4 inline-block"
        speed={80}
      />
      
      {/* Profile Photo */}
      <div className="my-6 flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img 
            src="/src/assets/images/profile.png" 
            alt="Maret Rudin-Aulenbach" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Contact and Social Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => window.open('mailto:mrudinaulenbach@gmail.com')}
          className="bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Me
        </button>
        
        <a 
          href="https://github.com/MaretRudAul" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        
        <a 
          href="https://www.linkedin.com/in/maret-ra" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
          LinkedIn
        </a>
        
        <a 
          href="/src/assets/files/Maret_Rudin_Aulenbach_Resume.pdf" 
          download
          className="bg-highlight text-white py-2 px-4 rounded hover:bg-highlight/90 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
    </div>

    <div className="mt-16">
      <h2 className="text-3xl font-semibold mb-4">
        <TypeWriter 
          text="About Me" 
          speed={100} 
          delay={1500}
        />
      </h2>
      <p className="mb-4 animate-fadeIn">
        Vanderbilt University Master's student and Stuyvesant High School graduate with a passion for computer science, math, and strategy. 
        Systems development intern at Sapeon and Technical Co-Founder of Career Clarifier LLC. 
        Self-motivated, collaborative team player, and quick learner with meticulous attention to 
        detail ensures that projects are of the highest quality and accuracy.
      </p>
      <p className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
        TODO: Add more detail from your resume and other stuff
      </p>
    </div>
  </section>
);

export default About;