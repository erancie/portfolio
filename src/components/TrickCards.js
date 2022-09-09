import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'

// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

export function ProjectThumb(props) {
  // const cardRef = useRef(null)

  // useEffect(()=> {

  //   gsap.to(cardRef.current, { 
  //     translateY: -20,
  //     opacity: 1,
  //     ease: 'none',
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: cardRef.current, // make .panel2 the trigger
  //       start: "center bottom", // 10% of .panel2 enters the bottom of the viewport
  //       // end: "botttom bottom",
  //       markers: true
  //     }
  //   });
  // }, [])

  return (
    // ref={cardRef} 
    <div key={props.name} className='trick-card'>
      {/* <h1 className='trick-title'>{props.title}</h1> */}
      <div className="trick-img-wrapper">
        <img className='trick-img' alt='meaningful alt' src={props.img}></img>
      </div>
      {/* <p className='trick-desc'>{props.desc}</p>

      <div className='trick-tools'>{props.tools.map((t)=>t+' ')}</div>
      <div className='project-links'>
        <Link className='trick-link' to={`/projects/${props.name}`}>Info</Link>
        <Link className='trick-link' to={`${props.link}`}>Visit</Link>
        <Link className='trick-link' to={`/projects/${props.name}`}>More</Link> 
      </div> */}
    </div>
  ) 
}

export default function TrickCards() {

  return (
    <div  className='tricks-container'>
      <div className='tricks-list'>
    
        {projects.map((p)=>(
          // <div className='thumb-wrapper'>
          <ProjectThumb name={p.name}
                        title={p.title}
                        img={p.img}
                        desc={p.desc}
                        tools={p.tools}
                        link={p.link}    
          />
          // </div>
        ))}
      </div>
    </div>
  )
}