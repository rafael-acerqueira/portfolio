import React, { Component } from 'react'
import PROJECTS from './data/projects'
import Project from './Project'

class Projects extends Component {
  render() {
    return(
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(project => 
              <Project key={project.id} project={project} />
            )
          }
        </div>
      </div>
    )
  }
}

export default Projects