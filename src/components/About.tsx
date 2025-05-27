import React from 'react';
import Image from 'next/image';
import TypeWriter from './animations/TypeWriter';

const About: React.FC = () => (
  <section className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <TypeWriter
        text="Hi, I'm Maret Rudin-Aulenbach"
        className="text-4xl font-bold mb-4 inline-block"
        speed={80}
      />
      
      {/* Profile Photo */}
      <div className="my-6 flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg relative">
          <Image
            src="/images/profile-clean.png"
            alt='Maret Rudin-Aulenbach'
            width={160}
            height={160}
            unoptimized
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
          href="/files/Maret_Rudin_Aulenbach_Resume.pdf" 
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
      <h2 className="text-3xl font-semibold mb-6">
        <TypeWriter 
          text="About Me" 
          speed={100} 
          delay={1500}
        />
      </h2>

      {/* Introduction */}
      <div className="space-y-4 animate-fadeIn">
        <p className="text-lg">
          Vanderbilt University Master’s student and Stuyvesant High School graduate with a passion for computer science, math, 
          and strategy. Systems development intern at Sapeon and Technical Co-Founder of Career Clarifier LLC. 
          Self-motivated, collaborative team player, and quick learner with meticulous attention to detail that ensures 
          projects are of the highest quality and accuracy.
        </p>
        <p  className="text-lg">
          I have academic and work experience in many subjects, including software engineering, machine and deep learning, 
          autonomous vehicles, cybersecurity, systems development, and web development. I pride myself on my eagerness to learn and
          thorough passion for computer science. 
        </p>
      </div>

      {/* Education */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '200ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg> */}
          Educational Journey
        </h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-4 pb-2">
            <h4 className="font-semibold">Vanderbilt University</h4>
            <p className="text-sm text-gray-600">MS in Computer Science (2025-2026) • BS in Computer Science & Mathematics (2023-2026)</p>
            <p className="mt-1">
              At Vanderbilt, I'm proud to be a graduate student pursuing a Master's in Computer Science while simulataneously pursuing
              my Bachelor's in Computer Science as an undergraduate student, thanks to the university's prestigious Accelerated Master's program.
              I currently maintain a 4.0 graduate GPA and 3.73 undergraduate GPA. I've been selected by Dr. Yuankai Huo to begin deep learning research expanding on CircleSnake for medical imaging in Fall 2025.
            </p>
            <p className="mt-1 text-sm">
              Beyond academics, I'm actively involved as a board member of the Math Club, Chess Club, and Gamecraft, while also writing for 
              Vanderbilt's satire paper, the Slant. I have previously served as a tutor for the athletic department and an undergraduate TA
              for Programming Languages, as well as being a member of Vanderbilt Zeta Chapter of Pi Mu Epsilon.
            </p>
          </div>
          
          <div className="border-l-4 border-gray-300 pl-4 pb-2">
            <h4 className="font-semibold">Binghamton University</h4>
            <p className="text-sm text-gray-600">BS Computer Science & BS Mathematics (2022-2023)</p>
            <p className="mt-1">
              During my time at Binghamton, I maintained a 3.92 GPA in computer science and math. Prior to leaving, I was approved
              to enroll in graduate math. 
            </p>
            <p className="mt-1 text-sm">
              For extracurriculars, I tutored computer science, was a board member of Bing ACM, 
              researched environmental impact of local battery plants, was a contact point for high school applicants, and volunteered
              at the local high school.  
            </p>
          </div>
          
          <div className="border-l-4 border-gray-300 pl-4">
            <h4 className="font-semibold">Stuyvesant High School</h4>
            <p className="text-sm text-gray-600">2018-2022</p>
            <p className="mt-1">
              At one of the nation's top public high schools (currently ranked #2!), I maintained a 4.0 GPA while completing 10 AP courses. 
              I absolutely loved my time at Stuyvesant and was heavily inspired to always pursue the greatest and most interesting
              intellectual pursuits available to me, regardless of the obstacles in my way. 
            </p>
          </div>
        </div>
      </div>
      
      {/* Professional Experience */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '400ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg> */}
          Professional Experience
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Software Engineering Intern | Sapeon Inc</h4>
            <p className="text-sm text-gray-600">June 2024 - August 2024</p>
            <p className="mt-1">
              At Sapeon, the AI accelerator division of South Korea's largest wireless carrier SK Telecomm, 
              I implemented the Collective Communications Library enabling multiple X330 AI accelerators to share machine learning tasks. 
              I also enhanced the X330 functional simulator to support multiple virtual devices and debugged kernel and userspace drivers 
              for data transport between accelerators.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">Technical Co-Founder | Career Clarifier LLC</h4>
            <p className="text-sm text-gray-600">October 2020 - Present</p>
            <p className="mt-1">
              As a founding partner of Career Clarifier, I've built and maintained a comprehensive web platform that helps college students 
              and graduates identify their optimal career paths. My responsibilities span the entire technical stack, including database 
              design, API development, security implementation, PDF generation, asynchronous task management, and scaling infrastructure 
              to accommodate growing user demand.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">Junior Consultant | Mesh Digital, LLC</h4>
            <p className="text-sm text-gray-600">Summer 2022</p>
            <p className="mt-1">
              At Mesh Digital, I assisted in developing their Content Management System, integrating ExpressJS, 
              Selenium, and SonarQube while implementing automated CI/CD pipelines for seamless deployment.
              I also attended professional meetings with consultants and took minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Subjects of Interest */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '500ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg> */}
          Subjects of Interest
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Software Engineering</h4>
            <p className="text-sm text-gray-600">
              {/* Building scalable, maintainable software systems with an emphasis on clean architecture and best practices. */}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Machine & Deep Learning</h4>
            <p className="text-sm text-gray-600">
              {/* Exploring neural networks, computer vision applications, and ML algorithms for solving complex problems. */}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Autonomous Vehicles</h4>
            <p className="text-sm text-gray-600">
              {/* Developing perception, planning, and control systems for self-driving vehicles and related technologies. */}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Cybersecurity</h4>
            <p className="text-sm text-gray-600">
              {/* Studying threat models, secure system design, and defensive programming techniques to build robust applications. */}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Systems Development</h4>
            <p className="text-sm text-gray-600">
              {/* Working with low-level drivers, SDKs, and hardware interfaces to build efficient computing systems. */}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-center">Web Development</h4>
            <p className="text-sm text-gray-600">
              {/* Creating responsive, accessible, and performant web applications with modern frameworks and tools. */}
            </p>
          </div>
        </div>
      </div>
      
      {/* Technical Skills */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '600ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg> */}
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "C", "TypeScript", "Julia", "Java", "MATLAB"].map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2">Web & Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Django", "Angular", "Flask",  "Tailwind", "Next.js", "Redis", "NGINX", "SQL"].map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2">AI & Data Science</h4>
            <div className="flex flex-wrap gap-2">
              {["Deep Learning", "PyTorch", "scikit-learn"].map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "Virtual Machines"].map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2">Miscellaneous</h4>
            <div className="flex flex-wrap gap-2">
              {["Device Drivers", "SDK development", "Device Drivers", "Selenium", "Autonomous Vehicles", "Simulink"].map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Personal Interests */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '800ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> */}
          Beyond Coding
        </h3>
        
        <p>
          When I'm not immersed in code or mathematical theories, you'll find me playing board games, reading Dune, 
          and watching college sports (Go Dores!!). For all you board gamers out there, my favorite game is Inis, a
          strategic game of area control, drafting cards, and tactics. My second favorite is Dune, a game of economics,
          warfare, and diplomacy that can last up to ten hours. My favorite sports game I've attended was when Vanderbilt
          beat #1 Alabama, our first ever win over a #1 team (and yes, I did travel with the goal post to the river!). 
        </p>
        
        <p className="mt-4">
          I'm also passionate about participating in my community. As a writer for Vanderbilt's satire paper, 
          The Slant, I blend humor with insights about technology, campus life, politics, sports, and more. 
          Check out my articles{' '}
          <a 
            href="https://vanderbiltslant.com/author/maret/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700"
          >
            here
          </a>. I also help plan events, such as a tv screen "portal"
          between the Vanderbilt and Belmont campuses (still working on making that happen!). 
        </p>
        
        <p className="mt-4">
          I'm a fairly avid bowler despite playing recreationally, with a high score of 205. I also have a track record of volunteering
          at various schools and organizations. I love helping people and explaining math and computer science because 
          I find that to explain something well, I must first deeply understand it, and that pushes me to be better.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '900ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> */}
          Hobbies & Activities
        </h3>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {[
              "Board Games", 
              "History", 
              "Bowling", 
              "College Football", 
              "Billiards"
            ].map(hobby => (
              <span key={hobby} className="bg-gray-100 px-3 py-2 rounded-full text-sm flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteering Section */}
      <div className="mt-12 animate-fadeIn" style={{ animationDelay: '1000ms' }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg> */}
          Volunteering
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
            <div>
              <h4 className="font-medium">FGCU STEM Academy</h4>
              <p className="text-sm text-gray-600">2021</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
            <div>
              <h4 className="font-medium">Union Endicott HS</h4>
              <p className="text-sm text-gray-600">2023</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
            <div>
              <h4 className="font-medium">Tutor Nashville</h4>
              <p className="text-sm text-gray-600">2024</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
            <div>
              <h4 className="font-medium">Perennial Prep</h4>
              <p className="text-sm text-gray-600">2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;