import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ProjectThumb(props) {

  const cardRef = useRef(null)

  // useEffect(()=> {
  //   cardRef.current.addEventListener("mouseenter", () => {
  //     gsap.to(cardRef.current, {
  //         translateY: -10, duration: .18, ease:'none', 
  //     })
  //   });
  //   cardRef.current.addEventListener("mouseleave", () => {
  //     gsap.to(cardRef.current, {
  //         translateY: 0, duration: .18, ease:'none' 
  //     })
  //   });
  // },[])

  useEffect(()=> {
    gsap.to(cardRef.current, { 
      translateY: 0,
      opacity: 1,
      ease: 'none',
      duration: .8,
      scrollTrigger: {
        trigger: cardRef.current, // make .panel2 the trigger
        start: "70% bottom", // 10% of .panel2 enters the bottom of the viewport
        // end: "botttom bottom",
        // markers: true
      }
    });
  }, [cardRef])

  return (
    <div ref={cardRef} key={props.name} className='project-thumb2'>
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
        <Link className='project-link' target="_blank" to={`${props.link}`}>Visit</Link>
        {/* <Link className='project-link' to={`/projects/${props.name}`}>More</Link> */}
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
                        link={p.link}    
          />
          // </div>
        ))}
      </div>
    </div>
  )
}