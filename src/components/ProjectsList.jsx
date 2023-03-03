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
{/* <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.00146484H800V114.872L777.372 69.9967C773.973 63.2543 767.065 59.0015 759.514 59.0015H684.113L535.115 359.001H700.16C707.462 359.001 714.183 355.023 717.695 348.621L800 198.601V400.001H0V198.876L80.8309 348.507C84.3233 354.972 91.0796 359.001 98.4275 359.001H262.935L115.688 59.0015H37.7027C29.8541 59.0015 22.731 63.5921 19.4889 70.7397L0 113.705V0.00146484ZM126.405 54.3525L276.375 364.084L283.032 372.565C285.876 376.188 290.226 378.304 294.832 378.304H399.921H500.844L513.616 315.455L514.106 315.555L501.354 378.304H504.558C504.668 378.304 504.777 378.303 504.886 378.3L517.725 315.125L518.215 315.225L505.401 378.28C509.742 378.036 513.782 375.916 516.449 372.447L521.797 365.492L674.687 53.6995L657.667 20.8096C654.231 14.1704 647.38 10.0016 639.904 10.0016H398.934H162.404C155.074 10.0016 148.332 14.0109 144.831 20.4507L126.405 54.3525ZM569.561 266.335L465.317 227.478L506.202 26.2866L505.712 26.187L464.843 227.301L462.21 226.32L502.824 26.4614L502.334 26.3619L461.736 226.143L362.142 189.02L361.967 189.488L461.635 226.639L440.838 328.98L441.328 329.08L462.109 226.816L464.742 227.797L444.215 328.806L444.705 328.905L465.216 227.974L569.386 266.803L569.561 266.335ZM247.295 90.47L235.447 148.772L213.696 140.775L213.523 141.245L235.347 149.268L232.088 165.302L232.578 165.402L235.821 149.442L239.816 150.911L236.622 166.629L237.112 166.728L240.291 151.085L279.755 165.594L279.927 165.124L240.392 150.59L252.319 91.8963L251.829 91.7967L239.917 150.415L235.922 148.946L247.785 90.5696L247.295 90.47ZM272.538 318.796L268.649 337.932L269.139 338.031L273.015 318.959L276.8 320.249L272.624 340.795L273.114 340.894L277.277 320.411L345.707 343.731L345.868 343.258L277.377 319.917L315.122 134.177L314.632 134.078L276.9 319.755L273.115 318.465L311.147 131.314L310.657 131.215L272.638 318.302L269.451 317.216L269.289 317.689L272.538 318.796ZM731.831 203.121L735.588 204.512L738.739 189.178L739.229 189.279L736.062 204.687L759.647 213.42L759.473 213.889L735.96 205.183L731.97 224.6L731.48 224.5L735.486 205.007L731.729 203.616L727.778 222.839L727.288 222.739L731.254 203.44L714.183 197.119L711.328 211.406L710.838 211.308L713.708 196.944L710.484 195.75L708.46 205.878L707.97 205.78L710.009 195.574L667.662 179.894L667.836 179.425L710.109 195.078L717.363 158.773L702.854 153.325L703.03 152.857L717.463 158.277L726.523 112.936L727.013 113.034L717.937 158.455L721.158 159.664L729.391 118.465L729.881 118.563L721.632 159.842L750.198 170.568L750.022 171.037L721.533 160.339L714.282 196.623L731.356 202.945L734.547 187.417L735.037 187.518L731.831 203.121ZM713.808 196.447L721.059 160.161L717.838 158.951L710.583 195.253L713.808 196.447ZM63.0268 235.217L42.9365 227.778L42.7629 228.247L62.9276 235.713L59.0154 255.291L59.5057 255.389L63.4023 235.889L66.6266 237.083L61.8833 260.82L62.3736 260.918L67.1013 237.259L134.574 262.242L134.748 261.773L67.2005 236.762L72.5785 209.85L84.2024 214.215L83.3902 218.167L83.88 218.267L84.6763 214.393L88.4299 215.802L87.5821 219.927L88.0719 220.028L88.9038 215.98L101.068 220.547L101.243 220.079L89.0057 215.484L95.331 184.707L94.8413 184.606L88.5318 215.306L84.7782 213.897L91.1392 182.946L90.6494 182.845L84.3043 213.719L72.6777 209.354L80.9268 168.074L80.4365 167.976L72.2034 209.175L68.9823 207.966L78.0589 162.545L77.5686 162.447L68.508 207.788L54.0751 202.369L53.8993 202.837L68.4087 208.285L63.0268 235.217ZM63.5015 235.393L66.7258 236.587L72.1042 209.672L68.883 208.463L63.5015 235.393ZM555.537 34.0564L631.955 60.0982L631.794 60.5715L555.376 34.5297L555.537 34.0564Z"  */}
<path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000976562 -0.000488281H799.999V114.87L777.371 69.9947C775.381 66.0478 772.189 62.954 768.369 61.067L755.424 83.3872L786.176 139.904L785.824 140.096L755.189 83.7922L750.751 91.4435L750.318 91.1927L754.909 83.278L752.861 79.5136L747.594 88.594L746.902 88.1927L752.413 78.6909L748.824 72.0956L749.176 71.9044L752.648 78.2858L763.591 59.4189C762.265 59.143 760.9 58.9995 759.513 58.9995H684.112L535.114 359H700.159C707.461 359 714.182 355.021 717.694 348.619L799.999 198.599V400H-0.000976562V198.874L80.8299 348.505C84.3223 354.97 91.0786 359 98.4266 359H103.712L113.728 341.73L111.772 338.135L99.6922 358.964L99.0001 358.562L111.325 337.313L81.8243 283.096L82.1757 282.904L111.56 336.908L117.886 326L118.578 326.401L112.007 337.73L113.963 341.325L120.858 329.438L121.29 329.688L114.243 341.839L119.176 350.904L118.824 351.096L114.008 342.244L104.29 359H262.934L115.687 58.9995H37.7017C29.8532 58.9995 22.73 63.5901 19.4879 70.7378L-0.000976562 113.703V-0.000488281ZM764.407 59.6067C765.618 59.9125 766.793 60.33 767.917 60.8505L755.144 82.873L753.096 79.1085L764.407 59.6067ZM126.404 54.3505L228.489 265.184L331.401 87.7491L332.266 88.2509L229.015 266.271L230.969 270.307L334.47 91.8569L334.902 92.1078L231.232 270.85L276.374 364.082L283.031 372.563C285.875 376.186 290.225 378.302 294.831 378.302H399.921H479.918L504.768 335.458L461.44 250.429L412.741 334.393L412.309 334.142L461.17 249.899L458.443 244.547L408.865 330.026L408 329.525L457.902 243.486L410.822 151.091L411.178 150.91L458.141 243.074L593.324 9.99961H398.933H243.312L217.068 55.2471L245.176 106.904L244.824 107.096L216.833 55.6521L205.434 75.3064L205.001 75.0555L216.553 55.138L215.527 53.2513L203.779 73.5066L203 73.055L215.023 52.3257L207.824 39.0956L208.176 38.9044L215.258 51.9206L239.572 9.99961H162.403C155.073 9.99961 148.331 14.0089 144.831 20.4487L126.404 54.3505ZM461.679 250.017L505.007 335.046L514.313 319L514.745 319.251L505.277 335.577L507.148 339.249L518.312 320L519.091 320.452L507.634 340.203L515.507 355.653L515.15 355.834L507.395 340.615L485.537 378.302H504.557C509.215 378.302 513.609 376.138 516.448 372.445L521.797 365.49L674.686 53.6976L657.666 20.8076C654.23 14.1685 647.379 9.99961 639.903 9.99961H600.89L461.679 250.017ZM600.312 9.99961L461.409 249.487L458.682 244.135L594.48 9.99961H600.312ZM505.038 335.989L480.496 378.302H484.497L506.909 339.661L505.038 335.989ZM240.613 9.99961H242.734L216.788 54.7329L215.762 52.8462L240.613 9.99961Z" 

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