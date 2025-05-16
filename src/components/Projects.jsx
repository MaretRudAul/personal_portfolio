import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Project One',
    description: 'A short description of project one.',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A short description of project two.',
    link: 'https://github.com/yourusername/project-two'
  }
]

const Projects = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
)

export default Projects