import React from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'

export function ProjectThumb(props) {
  return (
    <div className='project-thumb'>
      <h1 className='project-title'>{props.title}</h1>
      <img className='project-img' alt='meaningful alt' src={props.img}></img>
      <p className='project-desc'>{props.desc}</p>
      <div className='project-tools'>{props.tools.map((t)=>t+' ')}</div>
      <Link className='project-link' to={`/projects/${props.name}`}>Info</Link>
      <Link className='project-link' to={`/projects/${props.name}`}>Visit</Link>
      <Link className='project-link' to={`/projects/${props.name}`}>More</Link>
      {/* <Link to={`/projects/${props.name}`}>Link</Link> */}
    </div>
  )
}

export default function ProjectsList() {

  return (
    <div id='projects' className='projects-container'>
      <div className='projects-list'>
        {projects.map((p)=>(
          // <div className='thumb-wrapper'>
          <ProjectThumb name={p.name}
                        title={p.title}
                        img={p.img}
                        desc={p.desc}
                        tools={p.tools}    
          />
          // </div>
        ))}
      </div>
    </div>
  )
}

//


// //for in loop for an object data structure
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