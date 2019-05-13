import React from 'react'

const Project = ({ project }) => (
  <div style={{ display: 'inline-block', width: '31%', margin: 10 }}>
    <h3>{ project.title }</h3>
    <img src={ project.image } alt={ `project-${ project.id }` } style={{ width: 200, height: 120 }} />
    <p>{ project.description }</p>
    <a href={ project.link } target='_blank' rel='noopener noreferrer'>Visit the Project</a>
  </div>  
)

export default Project