import React from 'react'


export default function Project({projects}) {

  return (
    <div className='project'>
      <div className='project-header'>
        <h1>{projects.title}</h1>
      </div>
      <div className='project-body'>
        {projects.desc}
      </div>

      <div className='project-icons'>
        {projects.tools}
      </div>
    </div>
  )
}