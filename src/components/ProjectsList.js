import React from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'

export function ProjectThumb(props) {
  return (
    <div className='project-thumb'>
      <h1>{props.title}</h1>
      <img alt='meaningful alt' src={props.img}></img>
      <p>{props.desc}</p>
      <div>{props.tools.map((t)=>t+' ')}</div>
      <Link to={`/projects/${props.name}`}>Link</Link>
      {/* <Link to={`/projects/${props.name}`}>Link</Link> */}
    </div>
  )
}


export default function ProjectsList() {

  return (
    <div id='projects' className='projects-list'>
      {projects.map((p)=>(
        <ProjectThumb name={p.name}
                      title={p.title}
                      img={p.img}
                      desc={p.desc}
                      tools={p.tools}    
        />
      ))}
    </div>
  )
}

//


// //for loop for an object data structure
// const list =()=> {
//   let projs = []
//   for (const project in projects) {
//     const proj = projects[project];
//     projs.push(<ProjectThumb title={proj.title}
//                             img={proj.img}
//                             desc={proj.desc}
//                             tools={proj.tools}
//               />)
//   }
//   return projs
// }