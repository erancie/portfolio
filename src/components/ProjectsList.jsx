import React, { useEffect, useRef, useCallback } from 'react'
import projects from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollContext } from "./utils/useScrollContext"
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
        start: "30% bottom", // 70% of .panel2 enters the bottom of the viewport
        // end: "botttom bottom",
        // markers: true
      }
    });
  }, [cardRef])

  return (
    <div ref={cardRef} key={project.name} className='project-thumb col-12 col-lg-10 col-xl-9 col-xxl-8'>
      <h1 className='project-title'>{project.title}</h1>
      <p className='project-desc'>{project.desc}</p>

      <div className="project-imgs-wrapper">

        <div className="wrapper-laptop wrapper">
          <img className='img-laptop card-img' src={`${project.imgRoot}/tr:w-560,tr:q-100${project.imgSrc.laptop}`} />
          <svg className='svg-laptop' viewBox="16 6 284 160" xmlns="http://www.w3.org/2000/svg">
            <path 
                fill='url(#laptop-gradient)' 
                fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9 1.34315 10.3431 0 12 0H304C305.657 0 307 1.34315 307 3V168.099C307 169.753 305.662 171.094 304.01 171.099H314C315.105 171.099 316 171.994 316 173.099V178C316 179.105 315.105 180 314 180H2C0.895432 180 0 179.105 0 178V173.099C0 171.994 0.895431 171.099 2 171.099H11.9903C10.3379 171.094 9 169.753 9 168.099V3ZM16 5.93406H300V165.165H16V5.93406Z" 
            />
            <defs>
              <linearGradient id="laptop-gradient" 
                            x1="5.5" y1="95" x2="253.5" y2="195" 
                            gradientUnits="userSpaceOnUse">
                  <stop stop-color="#424456"/>
                  <stop offset="0.49541" stop-color="#EFF2FF"/>
                  <stop offset="1" stop-color="#424456"/>
              </linearGradient>
            </defs>
          </svg>
        </div> 

        <div className="wrapper-tablet wrapper">
          <img className='img-tablet card-img' src={`${project.imgRoot}/tr:w-320,tr:q-100${project.imgSrc.tablet}`} 
            //  srcSet={} //furthey optimize images by providing different resolutions for different screen sizes
            //  sizes={}
          />
          <svg className='svg-tablet' viewBox="5 5 160 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#tablet-gradient)"
              fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H166C168.209 0 170 1.79086 170 4V228C170 230.209 168.209 232 166 232H4C1.79086 232 0 230.209 0 228V4ZM5 5H164V218H5V5ZM85 229C87.2091 229 89 227.209 89 225C89 222.791 87.2091 221 85 221C82.7909 221 81 222.791 81 225C81 227.209 82.7909 229 85 229Z" />
            <defs>
              <linearGradient id="tablet-gradient" 
                            x1="10.5" y1="75" x2="183.5" y2="146" 
                            gradientUnits="userSpaceOnUse">
                  <stop stop-color="#424456"/>
                  <stop offset="0.49541" stop-color="#EFF2FF"/>
                  <stop offset="1" stop-color="#424456"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="wrapper-mobile wrapper">
          <img className='img-mobile card-img' src={`${project.imgRoot}/tr:w-150,tr:q-100${project.imgSrc.mobile}`} />
          <svg className='svg-mobile' viewBox="3 7 75 133" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58173 3.58172 0 8 0H73C77.4183 0 81 3.58172 81 8V138C81 142.418 77.4183 146 73 146H8C3.58172 146 0 142.418 0 138V8ZM3 7.94558H78V135.041C78 137.802 75.7614 140.041 73 140.041H8C5.23858 140.041 3 137.802 3 135.041V7.94558ZM34.9932 2.97959C34.4447 2.97959 34 3.42426 34 3.97279C34 4.52132 34.4447 4.96599 34.9932 4.96599H47.0068C47.5553 4.96599 48 4.52132 48 3.97279C48 3.42426 47.5553 2.97959 47.0068 2.97959H34.9932Z" 
                  fill="url(#mobile-gradient)" />
            <defs>
              <linearGradient id="mobile-gradient" 
                 x1="0" y1="84.5" x2="95.5" y2="118.5" 
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#424456"/>
                <stop offset="0.328855" stop-color="#EFF2FF"/>
                <stop offset="1" stop-color="#424456"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="wrapper-desktop wrapper">
          <img className='img-desktop card-img' src={`${project.imgRoot}/tr:w-800,tr:q-100${project.imgSrc.desktop}`} />
          <svg className='svg-desktop' viewBox="14 8 400 225" xmlns="http://www.w3.org/2000/svg">
              <path 
              // fill={`url(#${gradient})`}
              fill="url(#desktop-gradient)" 
              fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V237.073C0 239.282 1.79085 241.073 3.99999 241.073H201V249.034C201 250.139 201.895 251.034 203 251.034H151C149.895 251.034 149 251.93 149 253.034V258C149 259.105 149.895 260 151 260H277C278.105 260 279 259.105 279 258V253.034C279 251.93 278.105 251.034 277 251.034H225C226.105 251.034 227 250.139 227 249.034V241.073H424C426.209 241.073 428 239.282 428 237.073V4C428 1.79086 426.209 0 424 0H4ZM225 233.103L414 233.103V7.96935H14V233.103L203 233.103H225Z" />
              <defs>
              <linearGradient id="desktop-gradient" 
                  x1="184" y1="165.5" x2="378" y2="236"               
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#424456"/>
                  <stop offset="0.49541" stop-color="#EFF2FF"/>
                  <stop offset="1" stop-color="#424456"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      {/* <div class="project-mosaic">
        <div id="mosaic-0"></div>
        <div id="mosaic-1"></div>
        <div id="mosaic-2"></div>
        <div id="mosaic-3"></div>
      </div>  */}

      <div className='project-tools'>{project.tools.map((t)=>t+' ')}</div>

      <div className='project-links'>
        {/* <Link className='project-link' to={`/projects/${project.name}`}>Info</Link> */}
        <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>
      </div>    

      <hr className='ruling'/>
    </div>
  ) 
}


function ProjectsList() {  

  const scrollPos = useScrollContext()
  const bgContainer = useRef()
  const landingRef = useRef()
        
  return (
    <div  className='projects-container'>

      <div className="proj-bg-container" ref={bgContainer}>

    {/* try moving these outside to scroll with thumbs / whole page */}
        <svg id="svg-proj-back"
                  ref={landingRef}

          style={{top: `${800-scrollPos/8}px`}}
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
                          ref={landingRef}

                          style={{top: `${200-scrollPos/8}px`}}
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

export default React.memo(ProjectsList)

//SRCSET & SIZES

{/* <img className='layout-img2'
srcset="https://ik.imagekit.io/kv4ohthhz/tr:w-480/mern1_Fju_qVyiC.png 480w, 
       https://ik.imagekit.io/kv4ohthhz/tr:w-800/mern1_Fju_qVyiC.png 800w"
sizes="(min-width: 800px) 800px,
      480px"
src="https://ik.imagekit.io/kv4ohthhz/mern1_Fju_qVyiC.png"
alt="mern stack site" 
/> */}


//GATHER ASSETS
//DESIGN different responsive LAYOUTS 
//OPTIMIZE with srcset and sizes in markup


{/* <IKImage style={{margin: 'auto', width: '200px'}} path="/mern1-1280_qH3SRTAhB" 
transformation={[{
  // "height": "200",
  // "width": "200"
}]}
loading="lazy" /> */}