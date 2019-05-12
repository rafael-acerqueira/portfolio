import React, { Component } from 'react'
import PROJECTS from './data/projects'

class Projects extends Component {
  render() {
    return(
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(project => 
              <div key={project.id}>
                <a href={project.link} target='_blank'>
                  <p>{project.title}</p>
                  <img src={project.image} alt={`Image Project ${project.id}`} />
                  <p>{project.description}</p>
                </a>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Projects