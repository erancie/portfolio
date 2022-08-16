import React from 'react'
import Project from '../../components/Project'
import { projects } from '../../components/ProjectsList'



export default function Mern(props) {

  const [ mern ] = projects.filter((proj)=>proj.name === 'mern')

  return (
    <div className='mern'>
      <Project 
        projects={mern}
          />

    </div>
  )
}