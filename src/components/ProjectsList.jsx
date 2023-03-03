import React, { useEffect, useRef, useCallback } from 'react'
import projects from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollContext } from "./utils/useScrollContext"
import { IKImage } from 'imagekitio-react'
import Stars from "../components/Stars"


gsap.registerPlugin(ScrollTrigger)


export function ProjectThumb({project}) {

  const exclaimRef = useRef(null) 

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
  const scrollPos = useScrollContext()

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



    //options
    //bounding
    //intersection
    //gsap

  //on scroll get space b/w element and window-bottom
  //As exclamation element enters window
  //change position up from bottom to top of window
  //as space between element and window-bottom increases 

  //if space > 0 && < 1200?
    //position -= space * 0.2 (posIncrement)


  //Get working and then move to - use state? - use scroll listener? - use context?


  // get top of exclaim 
  // console.log('rect().top: ', exclaimRef.current.getBoundingClientRect().top)
  // get top of window
  // console.log('window height ', window.innerHeight)
  // get height of window
  // get scroll position from top of body

  // You can calculate the space between your element and bottom of the page by
  
  // const space = window.innerHeight - exclaimRef.current.offsetTop
  // console.log(space)
  // const top = window.innerHeight - exclaimRef.current.getBoundingClientRect().top
  // console.log(top)
  // console.log(exclaimRef)
  // console.log(exclaimRef.current)
  // console.log(exclaimRef.current.offsetTop)
      
  return (
    <div className='project-thumb-container'>

      <div className="project-thumb-wrapper">
        <div ref={cardRef} key={project.name} className='project-thumb col-12 col-lg-10 col-xl-10 '>
          <h1 className='project-title'>{project.title}</h1>

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
                      <stop stop-color="rgba(38,38,59,0.91)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134,0.85)"/>
                      <stop offset="1" stop-color="rgba(38,38,59,0.91)"/>
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
                      <stop stop-color="rgba(38,38,59,0.91)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134,0.85)"/>
                      <stop offset="1" stop-color="rgba(38,38,59,0.91)"/>
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
                    <stop stop-color="rgba(38,38,59,0.91)"/>
                    <stop offset="0.328855" stop-color="rgba(110,110,134,0.85)"/>
                    <stop offset="1" stop-color="rgba(38,38,59,0.91)"/>
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
                      <stop stop-color="rgba(38,38,59,0.91)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134,0.85)"/>
                      <stop offset="1" stop-color="rgba(38,38,59,0.91)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

          </div>

          <div className='desc-container' >
            {/* <div className='exclaim'
            ref={exclaimRef}
            // style={ 
            //   space > 0
            //   ? { top:`(-${space/50})` } 
            //   : { display:`none` } } 
              > ! </div> */}
            <p className='project-desc'>{project.desc}</p>
          </div>

          <div className='project-links'>
            <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>
          </div>    

          <div className='project-tools'>{project.tools.map((t)=>t+' ')}</div>

          <hr className='ruling'/>
          {/* get rid of this and fix bottom - margi/padding? */}

        </div>
      </div>

      <div className="thumb-svg-window-wrapper">
        <div className='thumb-svg-window'></div>
      </div>

      <svg style={{position: 'absolute'}} 
      id="clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
            {/* referencing custom SVG path from HTML id in CSS   
              - need to include 1.- object bounding box 2.- and scale */}
            {/* https://stackoverflow.com/questions/40099553/clip-path-width-doesnt-100-width */}
          <clipPath id="clip-2"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox"
          >
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H800V400H0V0ZM102.074 71.2313C105.198 63.8191 112.46 59 120.503 59H216.756L311.659 359H120.503C112.46 359 105.198 354.181 102.074 346.769L47.2747 216.769C45.1808 211.801 45.1808 206.199 47.2747 201.231L102.074 71.2313ZM478.501 365.491L476.284 369.963C473.753 375.071 468.545 378.302 462.844 378.302H399.949H336.737C331.081 378.302 325.906 375.121 323.353 370.074L320.322 364.082L224.884 58.2619L254.249 10.5211C256.979 6.08336 261.815 3.37988 267.025 3.37988H398.956H533.506C538.74 3.37988 543.596 6.1081 546.318 10.5785L575.515 58.527L478.501 365.491ZM487.084 359H678.52C686.52 359 693.751 354.232 696.903 346.879L752.623 216.879C754.779 211.848 754.779 206.152 752.623 201.121L696.903 71.1209C693.751 63.7676 686.52 59 678.52 59H583.116L487.084 359Z" 

                  transform="scale(0.00125, 0.0025)"
          />        
          </clipPath>
        </defs>
      </svg>


    </div>

  ) 
}


function ProjectsList() {  

  const scrollPos = useScrollContext()
  const bgContainer = useRef()
  const landingRef = useRef()
        
  return (
    <div  className='projects-container'>
      <div className="svg-window-top-wrapper">
        <div className='svg-window-top'></div>
        <svg style={{position: 'absolute'}} id="clip-wrapper" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="window-top"    
                      viewBox="0 0 800 80" 
                      clipPathUnits="objectBoundingBox"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M100.811 36.2227C98.4381 36.2227 96.288 34.8239 95.3262 32.6543L82.4318 3.56832C81.47 1.39878 79.3198 0 76.9466 0H6C2.68629 0 0 2.68629 0 6V68.8889V74V80H6H794H800V74V68.8889V6C800 2.68629 797.314 0 794 0H717.198C714.833 0 712.689 1.3893 711.722 3.54777L698.679 32.6749C697.712 34.8334 695.568 36.2227 693.203 36.2227H564.699C562.334 36.2227 560.189 37.6124 559.223 39.7713L553.832 51.8151C552.865 53.9741 550.721 55.3638 548.355 55.3638H401.187H251.166C248.792 55.3638 246.642 53.9646 245.68 51.7946L240.362 39.7919C239.4 37.6218 237.25 36.2227 234.876 36.2227H100.811Z" 
                    transform="scale(0.00125, 0.0125)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* <div className="proj-bg-container" ref={bgContainer}></div> */}
      <div className='projects-list'>
        <Stars />
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

// image kit sdk
{/* <IKImage style={{margin: 'auto', width: '200px'}} path="/mern1-1280_qH3SRTAhB" 
transformation={[{
  // "height": "200",
  // "width": "200"
}]}
loading="lazy" /> */}