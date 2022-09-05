import React from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'

export function ProjectThumb(props) {
  return (
    <div className='project-thumb2'>
      <h1 className='project-title2'>{props.title}</h1>
      <div className="project-img-wrapper">
        {/* <div style={{backgroundImage: `url("../../static/${props.name}1.png")`}} className='project-img2'></div> */}
        {/* <div style={{backgroundImage:` url('../../static/mern1.png')`}} className='project-img2'></div> */}
        <img className='project-img2' alt='meaningful alt' src={props.img}></img>
      </div>
      <p className='project-desc2'>{props.desc}</p>

      <div className='project-tools2'>{props.tools.map((t)=>t+' ')}</div>
      <div className='project-links'>
        <Link className='project-link' to={`/projects/${props.name}`}>Info</Link>
        <Link className='project-link' to={`/projects/${props.name}`}>Visit</Link>
        <Link className='project-link' to={`/projects/${props.name}`}>More</Link>
      </div>
    </div>
  ) 
}

export default function ProjectsList2() {

  return (
    <div  className='projects-container2'>
      <div className='projects-list2'>
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