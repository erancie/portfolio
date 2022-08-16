import React from 'react'


export default function Project(props) {

  return (
    <div className='project'>
      <div className='project-header'>
        <h1>Project</h1>
      </div>
      <div className='project-body'>
        {props.details}
      </div>

      <div className='project-icons'>

      </div>
    </div>
  )
}
