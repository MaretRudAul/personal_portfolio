import React from 'react'

const ProjectCard = ({ title, description, link }) => (
  <div className="border border-gray-300 p-6 rounded-lg hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent font-medium hover:underline"
    >
      View on GitHub
    </a>
  </div>
)

export default ProjectCard