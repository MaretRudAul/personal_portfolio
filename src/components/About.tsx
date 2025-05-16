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
      <div className="mt-6">
        <button
          onClick={() => window.open('mailto:mrudinaulenbach@gmail.com')}
          className="bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 transition"
        >
          Contact Me
        </button>
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