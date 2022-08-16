import React from 'react'
import { Link } from 'gatsby'

export const projects = [
  {
    name:'mern',
    title: 'MERN Platform',
    img: null,
    desc: 'A full stack project bringing experts and clients together.',
    tools: ['Mongo', 'Express', 'React', 'Node'],
  },
  {
    name: 'gpt',
    title: 'GPT-3 App',
    img: null,
    desc: 'A front end implementation using the GPT-3 API',
    tools: ['React', 'GPT-3', 'Speech Recognition']
  },
]

export function ProjectThumb(props) {
  return (
    <div className='project-thumb' style={{padding: '20px'}}>
      <h1>{props.title}</h1>
      <img src={props.img}></img>
      <p>{props.desc}</p>
      <div>{props.tools.map((t)=>t+' ')}</div>
      <Link to={`/projects/${props.name}`}>Link</Link>
    </div>
  )
}


export default function ProjectsList() {

  return (
    <div className='projects-list'>
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