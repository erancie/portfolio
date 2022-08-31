//gatsby uses folder and file names to declare routes and url patterns
//this file name denotes a dynamic path/param as part of the url using [param] (not :param)
//the param value is made available through the default component's props.params.[filename]

import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import projects from '../../../content/projectsData'


export default function Project(props) {

  const [proj, setProj] = useState(null)

  useEffect(()=>{
    const [ project ] = projects.filter((proj)=>proj.name === props.params.projectId)
    setProj(project)
  }, [])

  return (
    <Layout>
      <div className='project'>
        <div className='project-header'>
          <h1>{proj.title}</h1>
        </div>
        <div className='project-body'>
          {proj.desc}
        </div>

        <div className='project-icons'>
          {proj.tools}
        </div>
      </div>
    </Layout>
  )
}


//define routes --> link with components
//            Gatsby --> via folder and file names
//         React App --> via react router

//listing of items page --> access collection data, 
//                      --> provide navigation option for each item 
//                          by passing in id as param to dynamic path 

//item page --> access collection data 
//          --> access id from dynamic param 
//          --> find item in data with id