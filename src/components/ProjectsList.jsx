import React, { useEffect, useRef, useCallback } from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollStore } from './../store'
import { useScrollContext } from "./utils/scrollContext"



gsap.registerPlugin(ScrollTrigger)


export function ProjectThumb(props) {

  const scrollRef = useRef()

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
    <div ref={cardRef} key={props.name} className='project-thumb col-12 col-lg-10 col-xl-9 col-xxl-8'>
      <h1 className='project-title'>{props.title}</h1>
      <div className="project-img-wrapper">
        <img className='project-img' alt='meaningful alt' src={props.img}></img>
      </div>
      <p className='project-desc'>{props.desc}</p>

      <div className='project-tools'>{props.tools.map((t)=>t+' ')}</div>
      <div className='project-links'>
        <Link className='project-link' to={`/projects/${props.name}`}>Info</Link>
        <a className='project-link' target="_blank" href={`${props.link}`}>Visit</a>
      </div>
    </div>
  ) 
}

export default function ProjectsList() {  

  // const scrollPos = useScrollStore((s)=>s.scrollPos)
  const scrollPos = useScrollContext()

  const bgContainer = useRef()
  const landingRef = useRef()

  const handleScroll = useCallback(()=>{    
    let scrollY = window.scrollY  
    // if(scrollY > 1600) 
      landingRef.current.style.top = `${800-scrollY/8}px` //500 offset for window.scrollY
  }, [landingRef])

  // useScrollListener([landingRef], handleScroll)

  return (
    <div  className='projects-container'>

      <div className="proj-bg-container" ref={bgContainer}>

        <svg id="svg-proj-back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4415 2223.58"
        >
          <polygon
            id="_YOUR_IMAGE_HERE_-3"
            class="landing-svg-back"
            points="907 437.73 746.5 345.07 586 437.73 586 623.06 746.5 715.72 907 623.06 907 437.73"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-4"
            class="landing-svg-back"
            points="214 2036.52 110 1976.47 6 2036.52 6 2156.61 110 2216.65 214 2156.61 214 2036.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-5"
            class="landing-svg-back"
            points="2296 958.52 2192 898.47 2088 958.52 2088 1078.61 2192 1138.65 2296 1078.61 2296 958.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-6"
            class="landing-svg-back"
            points="4354 1086.99 4196 995.77 4038 1086.99 4038 1269.43 4196 1360.65 4354 1269.43 4354 1086.99"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-7"
            class="landing-svg-back"
            points="4409 1774.26 4302.5 1712.77 4196 1774.26 4196 1897.24 4302.5 1958.72 4409 1897.24 4409 1774.26"
          />
        </svg>
        
        <svg id="svg-proj-back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4415 2223.58"
        >
          <polygon
            id="_YOUR_IMAGE_HERE_-3"
            class="landing-svg-back"
            points="907 437.73 746.5 345.07 586 437.73 586 623.06 746.5 715.72 907 623.06 907 437.73"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-4"
            class="landing-svg-back"
            points="214 2036.52 110 1976.47 6 2036.52 6 2156.61 110 2216.65 214 2156.61 214 2036.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-5"
            class="landing-svg-back"
            points="2296 958.52 2192 898.47 2088 958.52 2088 1078.61 2192 1138.65 2296 1078.61 2296 958.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-6"
            class="landing-svg-back"
            points="4354 1086.99 4196 995.77 4038 1086.99 4038 1269.43 4196 1360.65 4354 1269.43 4354 1086.99"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-7"
            class="landing-svg-back"
            points="4409 1774.26 4302.5 1712.77 4196 1774.26 4196 1897.24 4302.5 1958.72 4409 1897.24 4409 1774.26"
          />
        </svg>

        <svg id="svg-proj-fore" style={{top: `${800-scrollPos/8}px`}}
          ref={landingRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4415 2223.58"
        >
          <polygon
            id="_YOUR_IMAGE_HERE_-3"
            class="landing-svg-back-bot"
            points="907 437.73 746.5 345.07 586 437.73 586 623.06 746.5 715.72 907 623.06 907 437.73"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-4"
            class="landing-svg-back-bot"
            points="214 2036.52 110 1976.47 6 2036.52 6 2156.61 110 2216.65 214 2156.61 214 2036.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-5"
            class="landing-svg-back-bot"
            points="2296 958.52 2192 898.47 2088 958.52 2088 1078.61 2192 1138.65 2296 1078.61 2296 958.52"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-6"
            class="landing-svg-back-bot"
            points="4354 1086.99 4196 995.77 4038 1086.99 4038 1269.43 4196 1360.65 4354 1269.43 4354 1086.99"
          />
          <polygon
            id="_YOUR_IMAGE_HERE_-7"
            class="landing-svg-back-bot"
            points="4409 1774.26 4302.5 1712.77 4196 1774.26 4196 1897.24 4302.5 1958.72 4409 1897.24 4409 1774.26"
          />
        </svg>

      </div>

      <div className='projects-list'>
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