import React, { useEffect, useRef, useCallback } from 'react'
import { Link } from 'gatsby'
import projects from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollContext } from "./utils/scrollContext"
import { IKImage } from 'imagekitio-react'

gsap.registerPlugin(ScrollTrigger)


export function ProjectThumb({project}) {

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
        start: "70% bottom", // 70% of .panel2 enters the bottom of the viewport
        // end: "botttom bottom",
        // markers: true
      }
    });
  }, [cardRef])

  return (
    <div ref={cardRef} key={project.name} className='project-thumb col-12 col-lg-10 col-xl-9 col-xxl-8'>
      <h1 className='project-title'>{project.title}</h1>

      <div className="project-imgs-wrapper">

        <div className="wrapper-desktop">
          <img className='img-desktop card-img' src={`${project.imgRoot}/tr:w-800${project.imgSrc.desktop}`}
              //  srcSet={}
              //  sizes={}
          />
          <svg className='svg-desktop'
              viewBox="0 0 428 261" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V238C0 240.209 1.79086 242 4 242H201V250C201 251.105 201.895 252 203 252H151C149.895 252 149 252.895 149 254V259C149 260.105 149.895 261 151 261H277C278.105 261 279 260.105 279 259V254C279 252.895 278.105 252 277 252H225C226.105 252 227 251.105 227 250V242H424C426.209 242 428 240.209 428 238V4C428 1.79086 426.209 0 424 0H4ZM225 234H414V8H14V234H203H225Z" fill="#D9D9D9"/>
          </svg>
        </div>

        <div className="wrapper-laptop">
          <img className='img-laptop card-img' src={`${project.imgRoot}/tr:w-560${project.imgSrc.laptop}`} />
          <svg className='svg-laptop'
              viewBox="0 0 316 182" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9 1.34314 10.3431 0 12 0H304C305.657 0 307 1.34314 307 3V170C307 171.657 305.657 173 304 173H314C315.105 173 316 173.895 316 175V180C316 181.105 315.105 182 314 182H2C0.895447 182 0 181.105 0 180V175C0 173.895 0.895447 173 2 173H12C10.3431 173 9 171.657 9 170V3ZM16 6H300V167H16V6Z" fill="#D9D9D9"/>
          </svg>
        </div>

        <div className="wrapper-tablet">
          <img className='img-tablet card-img' src={`${project.imgRoot}/tr:w-320${project.imgSrc.tablet}`} />
          <svg className='svg-tablet'
                viewBox="0 0 170 232" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79083 1.79086 0 4 0H166C168.209 0 170 1.79083 170 4V228C170 230.209 168.209 232 166 232H4C1.79086 232 0 230.209 0 228V4ZM5 5H164V218H5V5ZM85 229C87.2091 229 89 227.209 89 225C89 222.791 87.2091 221 85 221C82.7909 221 81 222.791 81 225C81 227.209 82.7909 229 85 229Z" fill="#D9D9D9"/>
          </svg>
        </div>

        <div className="wrapper-mobile">
          <img className='img-mobile card-img' src={`${project.imgRoot}/tr:w-150${project.imgSrc.mobile}`} />
          <svg className='svg-mobile'
              viewBox="0 0 81 146" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58173 3.58173 0 8 0H73C77.4183 0 81 3.58173 81 8V138C81 142.418 77.4183 146 73 146H8C3.58173 146 0 142.418 0 138V8ZM3 6H78V139H3V6ZM35 2C34.4477 2 34 2.44769 34 3C34 3.55231 34.4477 4 35 4H47C47.5523 4 48 3.55231 48 3C48 2.44769 47.5523 2 47 2H35Z" fill="#D9D9D9"/>
          </svg>
        </div>

      </div>

      <p className='project-desc'>{project.desc}</p>
      <div className='project-tools'>{project.tools.map((t)=>t+' ')}</div>
      <div className='project-links'>
        <Link className='project-link' to={`/projects/${project.name}`}>Info</Link>
        <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>
      </div>     
    </div>
  ) 
}

{/* <img className='layout-img2'
srcset="https://ik.imagekit.io/kv4ohthhz/tr:w-480/mern1_Fju_qVyiC.png 480w, 
       https://ik.imagekit.io/kv4ohthhz/tr:w-800/mern1_Fju_qVyiC.png 800w"
sizes="(min-width: 800px) 800px,
      480px"
src="https://ik.imagekit.io/kv4ohthhz/mern1_Fju_qVyiC.png"
alt="mern stack site" 
/> */}

//TODO: 
//finish svg designs 
//new cards

//GATHER ASSETS
  //take screen shots - host images w/ IK 
  //generate svg markup code


//DESIGN different responsive LAYOUTS 
    //use svgs and images over all devices w/ css widths & breakpoints
      //can just use scale for this?

//OPTIMIZE with srcset and sizes in markup
    //list urls according to each width/breakpoint


{/* <IKImage style={{margin: 'auto', width: '200px'}} path="/mern1-1280_qH3SRTAhB" 
transformation={[{
  // "height": "200",
  // "width": "200"
}]}
loading="lazy" /> */}

export default function ProjectsList() {  

  const scrollPos = useScrollContext()
  const bgContainer = useRef()
  const landingRef = useRef()

  const handleScroll = useCallback(()=>{    
    let scrollY = window.scrollY  
    // if(scrollY > 1600) 
      landingRef.current.style.top = `${800-scrollY/8}px` //500 offset for window.scrollY
  }, [landingRef])

          
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
        {projects.map( p=> <ProjectThumb project={p}/> )}
      </div>
    </div>
  )
}





//old card

// return (
//   <div ref={cardRef} key={project.name} className='project-thumb col-12 col-lg-10 col-xl-9 col-xxl-8'>
//     <h1 className='project-title'>{project.title}</h1>
//     <div className="project-img-wrapper">
//       <img className='project-img' alt='meaningful alt' src={project.img}></img>
//     </div>
//     <p className='project-desc'>{project.desc}</p>

//     <div className='project-tools'>{project.tools.map((t)=>t+' ')}</div>
//     <div className='project-links'>
//       <Link className='project-link' to={`/projects/${project.name}`}>Info</Link>
//       <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>
//     </div>     
//   </div>
// ) 