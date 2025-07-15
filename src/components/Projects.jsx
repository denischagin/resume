import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

const Projects = ({ items }) => {
  return (
    <div className="projects">
      {items.map((project, index) => (
        <div
          key={index}
          className="projects__item"
        >
          <div className="projects__header">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="projects__icon"
            />
            <h4 className="projects__title">{project.title}</h4>
          </div>
          <div className="projects__tech">{project.tech}</div>
          <p className="projects__description">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects
