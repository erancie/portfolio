import React , {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { Link } from 'gatsby'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../../content/projectsData'

gsap.registerPlugin(ScrollTrigger)

export function ProjectThumb(props) {
  const cardRef = useRef(null)
  useEffect(()=> {
    gsap.defaults({ease: "power3"});
    gsap.set(cardRef.current, {y: 50});    
    ScrollTrigger.batch(cardRef.current, {
      start: "top bottom-=100px",
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, backgroundSize:"100%", stagger: 0.15}),
      onLeaveBack:batch => gsap.to(batch, {opacity: 0, y: 50, backgroundSize:"0%", stagger: 0.1})
    });
    // gsap.fromTo(cardRef.current,{
    //   y: 0,
    //   opacity: 0
    // }, {
    //   y: '-20',
    //   opacity: 1,
    //   duration: .6,
    //   ease: 'in',
    //   scrollTrigger: {
    //     trigger: cardRef.current,
    //     markers: true
    //   }
    // })
  }, [])
  return (
    <div ref={cardRef} className='project-thumb2'>
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
        <Link className='project-link' to={`${props.link}`}>Visit</Link>
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
                        link={p.link}    
          />
          // </div>
        ))}
      </div>
    </div>
  )
}