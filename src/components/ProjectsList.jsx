import React, { useEffect, useRef, useCallback, useState } from 'react'
import projects, { thisSite } from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollContext } from "./utils/useScrollContext"
import { IKImage } from 'imagekitio-react'
import Stars from "../components/Stars"

gsap.registerPlugin(ScrollTrigger)

export function ProjectThumb({project, hatchIsOpen}) {

  const cardRef = useRef(null)

  const [inView, setInView] = useState('')

  const scrollPos = useScrollContext()

  //make this a custom hook?
  const checkInView = useCallback(() => {
    const projectElements = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(entries => { 
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 1 })
    projectElements.forEach(project => {
      observer.observe(project) 
    })
  }, [])

  useEffect(() => {
    checkInView() 
  }, [])

  return (
    <div className='project-thumb-container'>
      
      <div className="project-thumb-bg-wrapper" style={hatchIsOpen ? { 
                                                            boxShadow: 'none', 
                                                            // overflow: 'hidden' 
                                                          } 
                                                                  : null} >
        <div className="project-thumb-bg" 
             style={{
                    // transform: hatchIsOpen && 'translateX(-100%)',
                    opacity: hatchIsOpen && '0'
                  }}>
        </div>
        {/* <div className="project-thumb-bg-fore" 
             style={{
                    // transform: hatchIsOpen && 'translateX(-100%)',
                    opacity: hatchIsOpen ? '1' : '0'
                  }}>
        </div> */}

        <div ref={cardRef} id={`${project.name}`} key={project.name} className='project-thumb side-viewing col-12 col-lg-10 col-xl-10 '>
          
          <div className='project-titles-wrapper' style={{
              // background: hatchIsOpen && 'rgb(3,10,21)' 
          }}>
            <h1 className='project-title fade-in'>{project.title}</h1>
            <p className='project-desc fade-in'>{project.desc}</p>
          </div>

          <div className="titles-svg"></div>

          <div className="project-imgs-wrapper">

          <div className="wrapper-desktop wrapper fade-in">
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
                      <stop stop-color="rgba(38,38,59)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134)"/>
                      <stop offset="1" stop-color="rgba(38,38,59)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="wrapper-tablet wrapper fade-in">
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
                      <stop stop-color="rgba(38,38,59)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134)"/>
                      <stop offset="1" stop-color="rgba(38,38,59)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="wrapper-mobile wrapper fade-in">
              <img className='img-mobile card-img' src={`${project.imgRoot}/tr:w-150,tr:q-100${project.imgSrc.mobile}`} />
              <svg className='svg-mobile' viewBox="3 7 75 133" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58173 3.58172 0 8 0H73C77.4183 0 81 3.58172 81 8V138C81 142.418 77.4183 146 73 146H8C3.58172 146 0 142.418 0 138V8ZM3 7.94558H78V135.041C78 137.802 75.7614 140.041 73 140.041H8C5.23858 140.041 3 137.802 3 135.041V7.94558ZM34.9932 2.97959C34.4447 2.97959 34 3.42426 34 3.97279C34 4.52132 34.4447 4.96599 34.9932 4.96599H47.0068C47.5553 4.96599 48 4.52132 48 3.97279C48 3.42426 47.5553 2.97959 47.0068 2.97959H34.9932Z" 
                      fill="url(#mobile-gradient)" />
                <defs>
                  <linearGradient id="mobile-gradient" 
                    x1="0" y1="84.5" x2="95.5" y2="118.5" 
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="rgba(38,38,59)"/>
                    <stop offset="0.328855" stop-color="rgba(110,110,134)"/>
                    <stop offset="1" stop-color="rgba(38,38,59)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="wrapper-laptop wrapper fade-in">
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
                      <stop stop-color="rgba(38,38,59)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134)"/>
                      <stop offset="1" stop-color="rgba(38,38,59)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div> 


            <div className="project-imgs-shadow"
                         style={{
                          // transform: hatchIsOpen && 'translateX(-100%)',
                          opacity: hatchIsOpen && '0'
                        }}>
            </div>

          </div>


          <div className='project-tools fade-in'>
            {project.tools.map((t)=>(
              <div className="tool-container">
                <img src={t.icon} className='tool-icon' />
                <p className="tool-label">{t.label}</p>
              </div>
            ))} 
          </div>

          <a className='project-link fade-in' target="_blank" href={`${project.link}`}>Visit</a>


          <div className="case-svg"></div>

          <div className="tools-svg"></div>

        </div>
      </div>

      <div className="thumb-svg-window-wrapper" 
           style={{
                    // transform: hatchIsOpen && 'translateX(-50%) perspective(2400px) rotateY(90deg)', 
                    // transform: hatchIsOpen && 'translateX(-100%)',
                    opacity: hatchIsOpen && '0'
                    // background: hatchIsOpen && 'none' 
                  }}>
        <div className='thumb-svg-window' 
            //  style={{background: hatchIsOpen && 'none' }}
        >
        </div>

      </div>
    </div>

  ) 
}


function ProjectsList() {  

  const scrollPos = useScrollContext()
  const bgContainer = useRef()
  const landingRef = useRef()

  //move this to a useContext
  const [hatchIsOpen, setHatchIsOpen] = useState(false)

  //passdown if space hatch is open 
  const handleSpaceWalk = () => {
    (!hatchIsOpen) ? setHatchIsOpen(true) : setHatchIsOpen(false)
  }

  return (
    <div className='projects-container'>

      {/* <div className="proj-bg-container" ref={bgContainer}></div> */}
      <div className='projects-list'>

        <div className="svg-window-top-wrapper">

          <div className="svg-window-top-bg-lights"></div>

          {/* <div className="svg-window-top-lights"></div> */}

          {/* try class approach to style all elements affected by theme */}
          {/* //make classes for hatchOpen/closed   */}
          {/* //some for all elements affected? some for each?   */}
          <div className='svg-window-top' style={{ // transform: hatchIsOpen && 'translateX(-100%)',
                                                  opacity: hatchIsOpen && '0' 
                                                  // background: hatchIsOpen && 'none'
                                                 }}></div>
        </div>

        <Stars />

        {projects.map( p=> <ProjectThumb project={p} hatchIsOpen={hatchIsOpen} /> )}
      
      </div>

      <div className="site-tools">
        <div className="site-tools-bg" 
              style={{
                      // transform: hatchIsOpen && 'translateX(-100%)',
                      opacity: hatchIsOpen && '0'
                    }}>
        </div>
        <div className="site-tools-wrapper">
          <div className="site-desc">Tools used for this site..</div>

          {thisSite.tools.map((tool)=>(
            <div className="tool-container">
              <img src={tool.icon} className='tool-icon' />
              <p className="tool-label">{tool.label}</p>
            </div>
          ))}
        </div>


      </div>

      <div className="svg-window-bottom-wrapper">
        <div className="svg-window-bottom-bg-lights"></div>
        <div className='svg-window-bottom' style={{ opacity: hatchIsOpen && '0' }}></div>
      </div>


      {/* clip-path svgs */}


      <svg id="window-top-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-top-clip"    
                    viewBox="0 0 800 500" 
                    clipPathUnits="objectBoundingBox" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 67.7648L394.958 0.426743C398.295 -0.142247 401.705 -0.142248 405.042 0.426743L800 67.7648V82.4228L606 51.8726L672.634 328.318C674.415 335.709 679.261 340.21 685.439 340.209L799.999 340.208V499.997H0V340.208L113.906 340.209C120.083 340.21 124.93 335.709 126.711 328.318L193.345 51.8726L0 82.3196V67.7648ZM585.35 47.5442C590.098 48.3538 593.902 51.924 595.011 56.6113L655.008 310.264C656.791 317.8 651.074 325.026 643.331 325.026H527.536C526.886 325.026 526.277 324.71 525.902 324.179L516.488 310.844C514.614 308.19 511.568 306.612 508.319 306.612H489.363L456.078 155.658L487.656 38.4099L487.531 38.2538L456.002 155.317L454.486 148.44L483.297 41.4178L483.235 41.3397L454.448 148.269L443.267 97.5606L443.197 97.6321L454.401 148.444L411.821 306.612H302.372L357.436 102.045L357.373 101.967L302.288 306.612H299.031L355.625 96.3419L355.5 96.1857L298.864 306.612H291.681C288.432 306.612 285.386 308.19 283.512 310.844L274.098 324.179C273.723 324.71 273.114 325.026 272.464 325.026H157.143C149.407 325.026 143.693 317.815 145.46 310.284L204.999 56.6289C206.101 51.9324 209.909 48.3526 214.664 47.5417L386.554 18.2345C395.454 16.7171 404.546 16.7171 413.446 18.2345L585.35 47.5442ZM411.905 306.612H415.254L455.955 155.492L454.439 148.615L411.905 306.612ZM415.421 306.612H489.277L456.031 155.833L415.421 306.612ZM557.623 169.5L563.431 147.921L563.556 148.077L557.701 169.83L562.272 189.131L562.138 189.279L557.611 170.165L537.245 245.828L537.12 245.672L557.532 169.835L556.016 163.431L533.063 248.707L533 248.629L555.976 163.266L536.933 82.8662L537.068 82.7182L556.067 162.931L559.311 150.878L559.373 150.956L556.106 163.096L557.623 169.5ZM270.566 112.42L289.31 42.7923L289.497 43.0266L270.689 112.894L272.406 119.489L291.97 46.7961L292.095 46.9523L272.488 119.804L287.098 175.944L286.971 176.098L272.403 120.121L265.786 144.706L265.661 144.55L272.321 119.805L270.604 113.21L263.183 140.778L262.996 140.543L270.481 112.737L263.267 85.0157L263.394 84.8616L270.566 112.42ZM752.322 289.835L750.607 283.559L758.781 253.341L758.683 253.218L750.54 283.317L743.319 256.894L756.891 206.092L767.753 245.926L767.877 245.769L756.973 205.783L770.703 154.39L770.452 154.079L756.805 205.165L755.331 199.761L769.924 145.137L769.799 144.982L755.247 199.452L750.347 181.483L750.223 181.64L755.164 199.762L741.591 250.57L726.07 193.782L725.931 193.959L741.498 250.917L737.359 266.409L737.484 266.564L741.582 251.226L743.058 256.625L738.013 275.507L738.263 275.818L743.226 257.241L750.447 283.662L746.211 299.319L746.31 299.443L750.513 283.904L752.228 290.18L748.553 303.765L748.651 303.888L752.294 290.422L760.05 318.798L760.189 318.621L752.388 290.077L761.123 257.787L761.025 257.663L752.322 289.835ZM756.722 205.475L743.15 256.277L741.675 250.879L755.248 200.071L756.722 205.475ZM31.7284 166.946L37.3509 189.091L58.6218 109.529L58.8097 109.762L37.4728 189.571L38.8636 195.049L59.2754 118.635L59.4006 118.79L38.9448 195.369L63.9995 294.048L63.8564 294.216L38.8495 195.725L26.9643 240.219L26.8391 240.064L38.7682 195.406L37.3774 189.928L26.3476 231.183L26.1597 230.95L37.2555 189.448L31.5852 167.115L31.7284 166.946ZM56.2473 168.019L50.1897 190.411L50.337 190.596L56.3429 168.395L57.9656 174.773L52.5317 194.86L52.6299 194.983L58.0294 175.024L71.5375 228.119L71.7318 227.89L58.1597 174.542L65.1014 148.882L65.0032 148.759L58.0959 174.292L56.4732 167.913L62.8084 144.494L62.6611 144.309L56.3775 167.537L55.0979 162.507L54.9035 162.737L56.2473 168.019ZM206.102 202.571L231.306 308.984L231.104 309.206L205.9 202.792L206.102 202.571Z" 
                  transform="scale(0.00125, 0.002)" />
          </clipPath>
        </defs>
      </svg>

      <svg id="window-top-lights-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-top-lights-clip"    
                    viewBox="0 0 800 500" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 68.8484L394.879 0.440286C398.268 -0.146761 401.732 -0.146762 405.121 0.440285L800 68.8484V114.338H799.999V500.002H0V114.338V83.2534V68.8484Z" 
                  transform="scale(0.00125, 0.002)" />
          </clipPath>
        </defs>
      </svg>



      <svg id="window-bottom-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-bottom-clip"    
                    viewBox="0 0 800 660" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M800 500L0 500V353.056L194 353.057L128.063 123.309C125.864 115.647 120.147 110.893 113.131 110.893L0.000610352 110.894L0.000610352 0.000732422L800 0.000732422L800 110.894L687.447 110.893C680.43 110.893 674.713 115.647 672.514 123.31L606.577 353.057L800 353.056V358.699L800 500ZM214.55 357.538C209.849 356.865 205.988 353.483 204.7 348.912L145.796 139.759C143.64 132.103 149.393 124.506 157.346 124.506H283.954C284.609 124.506 285.223 124.827 285.597 125.365L298.42 143.842C300.663 147.073 304.346 149 308.279 149H313.232L336.49 237.589L294.386 368.97L214.55 357.538ZM294.562 368.995L297.788 369.457L338.092 243.692L336.573 237.905L294.562 368.995ZM297.876 369.47L371.65 380.034C390.454 382.727 409.546 382.727 428.35 380.034L493.081 370.765L507.498 325.776L492.895 278.648L493.035 278.506L507.592 325.483L514.202 304.856L514.34 305.001L507.683 325.776L509.384 331.268L516.794 308.147L517.001 308.365L509.52 331.706L516.739 355.002L516.599 355.145L509.427 331.999L497.191 370.176L585.433 357.54C590.142 356.866 594.009 353.473 595.289 348.891L653.744 139.736C655.882 132.085 650.13 124.506 642.186 124.506L519.082 124.506C518.407 124.506 517.777 124.846 517.408 125.412L505.552 143.562C503.811 146.228 501.105 148.061 498.06 148.725L444.506 315.835L444.368 315.69L497.863 148.766C497.094 148.92 496.305 149 495.505 149H494.534L442.627 310.968L442.558 310.895L494.442 149H368.531L338.185 243.69L356.806 314.617L356.73 314.682L338.134 243.85L297.876 369.47ZM368.438 149H365.065L336.624 237.745L338.143 243.532L368.438 149ZM364.88 149H313.325L336.541 237.429L364.88 149ZM496.902 370.218L509.291 331.56L507.589 326.069L493.274 370.737L496.902 370.218ZM242.375 254.269L236.569 272.385L236.432 272.24L242.289 253.963L237.722 237.77L237.869 237.634L242.387 253.656L262.742 190.141L262.88 190.286L242.474 253.962L243.986 259.324L266.931 187.727L267 187.8L244.029 259.477L263.073 327.008L262.927 327.143L243.93 259.785L240.689 269.898L240.62 269.826L243.887 259.632L242.375 254.269ZM47.6763 153.211L49.381 158.45L41.2032 183.838L41.3169 183.958L49.4576 158.685L56.6603 180.819L43.0962 223.463L32.2541 190.07L32.1168 190.216L43.0048 223.75L29.2714 266.927L29.5478 267.215L43.1907 224.323L44.6569 228.839L30.0632 274.719L30.2015 274.863L44.7498 229.125L49.6468 244.207L49.7841 244.061L44.8412 228.838L58.4072 186.187L73.9253 233.875L74.0746 233.716L58.5067 185.875L62.6403 172.879L62.5021 172.735L58.4136 185.589L56.9459 181.078L61.9866 165.231L61.7102 164.943L56.7597 180.506L49.5577 158.374L53.7885 145.24L53.6748 145.12L49.4811 158.139L47.7764 152.9L51.4468 141.506L51.3331 141.386L47.6998 152.665L39.9553 128.866L39.8059 129.025L47.5997 152.976L38.8615 180.104L38.9752 180.224L47.6763 153.211ZM43.2821 224.036L56.8464 181.391L58.3141 185.901L44.7482 228.551L43.2821 224.036ZM768.268 256.397L762.641 237.784L741.378 304.628L741.171 304.412L762.506 237.339L761.136 232.807L740.725 296.98L740.587 296.836L761.047 232.511L735.996 149.649L736.15 149.497L761.149 232.19L773.025 194.851L773.164 194.995L761.238 232.487L762.608 237.018L773.611 202.428L773.819 202.644L762.743 237.463L768.421 256.246L768.268 256.397ZM743.759 255.485L749.811 236.695L749.641 236.515L743.648 255.12L742.04 249.812L747.469 232.956L747.356 232.836L741.966 249.568L728.472 205.022L728.259 205.234L741.823 250.012L734.884 271.555L734.998 271.675L741.897 250.256L743.505 255.564L737.169 275.233L737.34 275.413L743.616 255.929L744.893 260.145L745.106 259.933L743.759 255.485ZM563.89 226.501L538.685 137.127L538.905 136.923L564.11 226.297L563.89 226.501Z"
                    transform="scale(0.00125, 0.002)" />

          </clipPath>
        </defs>
      </svg>

      <svg id="window-clip-wrapper" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-clip"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M276.26 10.0086L254.772 47.056L244.323 28.4235L244.148 28.5214L254.656 47.257L243.753 66.054L244.013 66.2045L254.826 47.561L257.331 52.0274L247.626 68.7594L247.799 68.8597L257.445 52.23L278.665 90.0679L278.839 89.9701L257.561 52.029L281.933 10.0086H398.934H551.446L480.128 132.971L453.046 75.9752L452.956 76.0181L480.067 133.076L400.004 271.116L400.09 271.166L480.119 133.185L482.34 137.859L406.26 269.03L406.433 269.13L482.444 138.078L547.956 275.951L548.046 275.909L482.505 137.973L556.724 10.0086H639.904C647.38 10.0086 654.231 14.1774 657.667 20.8164L674.687 53.7058L521.798 365.49L516.45 372.446C513.61 376.139 509.216 378.303 504.559 378.303H426.344L462.779 315.485L462.606 315.385L426.113 378.303H421.39L456.694 317.435L456.607 317.385L421.274 378.303H399.922H294.832C290.226 378.303 285.876 376.187 283.032 372.564L276.375 364.083L224.663 257.284L253.697 207.228L256.303 212.334L256.57 212.198L253.876 206.919L328.066 79.0072L327.979 78.9571L253.822 206.813L251.595 202.451L325.43 75.1506L325.257 75.0502L251.487 202.239L219.869 140.291L219.602 140.427L251.308 202.548L222.341 252.49L126.405 54.3584L144.831 20.4576C148.332 14.0178 155.074 10.0086 162.403 10.0086H276.26ZM251.416 202.76L222.447 252.707L224.61 257.176L253.642 207.122L251.416 202.76ZM480.18 133.08L482.401 137.754L556.493 10.0086H551.562L480.18 133.08ZM281.702 10.0086H276.607L254.943 47.36L257.447 51.8264L281.702 10.0086ZM282.06 0.00878906H0V113.71L19.4889 70.7456C22.7311 63.598 29.8541 59.0075 37.7026 59.0075H115.688L262.935 359.001H98.4275C91.0796 359.001 84.3234 354.972 80.8309 348.507L0 198.879V400H800V198.604L717.695 348.621C714.183 355.022 707.462 359.001 700.16 359.001H535.115L684.113 59.0075H759.514C767.065 59.0075 773.973 63.2602 777.372 70.0026L800 114.876V0.00878906H282.08L282.065 0L282.06 0.00878906ZM727.838 193.702L730.316 197.91L743 176.152L743.173 176.253L730.432 198.108L741.768 217.356L741.596 217.457L730.317 198.306L725.012 207.405L724.84 207.304L730.201 198.108L727.722 193.9L721.603 204.397L721.43 204.297L727.606 193.703L717.081 175.832L709.84 188.411L709.493 188.211L716.848 175.435L714.691 171.774L708.715 182.156L708.541 182.056L714.574 171.576L691.914 133.099L692.086 132.997L714.689 171.376L734.468 137.018L727.275 124.777L727.448 124.676L734.583 136.818L755.776 100.003L755.95 100.103L734.7 137.017L736.854 140.683L756.728 106.158L757.075 106.358L737.087 141.079L752.974 168.115L752.801 168.216L736.972 141.279L717.196 175.632L727.721 193.505L739.591 173.145L739.764 173.245L727.838 193.702ZM716.962 175.236L736.739 140.882L734.585 137.216L714.806 171.574L716.962 175.236ZM26.525 162.87L18.3228 147.879L18.1473 147.975L26.4081 163.073L10.2661 191.114L10.5261 191.263L26.5768 163.381L28.5986 167.076L11.2179 197.269L11.3912 197.369L28.711 167.282L65.1388 233.861L65.3143 233.765L28.8279 167.079L58.6264 115.315L58.453 115.216L28.7155 166.873L26.6937 163.178L57.7613 109.21L57.5013 109.06L26.525 162.87ZM45.2214 163.72L54.0516 148.573L52.0972 145.008L52.3603 144.863L54.228 148.27L63.382 132.567L63.6412 132.719L54.3963 148.577L56.7303 152.835L66.7919 135.575L66.9647 135.676L56.8425 153.039L76.5812 189.043L76.3181 189.187L56.6662 153.342L48.8041 166.828L48.6313 166.727L56.554 153.137L54.2199 148.88L45.4806 163.871L45.2214 163.72ZM571.09 48.9608L607.791 120.868L607.613 120.959L570.912 49.0517L571.09 48.9608Z" 
               transform="scale(0.00125, 0.0025)" />         

          </clipPath>
        </defs>
      </svg>     
  
      <svg id="window-bottom-lights-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-bottom-lights-clip"    
                    viewBox="0 0 800 500" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 68.8484L394.879 0.440286C398.268 -0.146761 401.732 -0.146762 405.121 0.440285L800 68.8484V114.338H799.999V500.002H0V114.338V83.2534V68.8484Z" 
                  transform="scale(0.00125, 0.002)" />
          </clipPath>
        </defs>
      </svg>

      <svg id="thumb-titles-clip-wrapper"  xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="thumb-titles-clip"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M800.86 200C800.875 199.796 800.885 199.593 800.893 199.389C801.096 196.143 800.506 192.859 799.125 189.834L735.667 50.8956C732.414 43.7735 725.304 39.2046 717.475 39.2046H556.439L535.813 6.92359C533.057 2.6102 528.292 0 523.173 0H399.924H279.081C273.986 0 269.24 2.58553 266.478 6.86572L245.605 39.2046H83.3403C75.4651 39.2046 68.3231 43.826 65.0963 51.0097L2.68762 189.949C1.34739 192.932 0.774346 196.163 0.968487 199.357C0.976467 199.572 0.987899 199.786 1.00278 200H1.01797C0.998019 199.786 0.981523 199.572 0.968487 199.357C0.854624 196.297 1.44332 193.218 2.73456 190.365L65.0742 52.6539C68.3132 45.4989 75.4402 40.9019 83.2943 40.9019H245.603L266.47 8.82127C269.238 4.56672 273.969 2.00017 279.044 2.00017H399.924H523.209C528.309 2.00017 533.06 4.59137 535.821 8.87918L556.442 40.9019H717.521C725.33 40.9019 732.424 45.4463 735.689 52.5394L799.076 190.251C800.408 193.145 801.014 196.277 800.893 199.389C800.881 199.593 800.865 199.796 800.846 200H800.86Z" 
                transform="scale(0.00125, 0.005)" />        
          </clipPath>
        </defs>
      </svg>

      <svg id="case-clip-wrapper" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="case-clip"    
                    viewBox="0 0 800 250" 
                    clipPathUnits="objectBoundingBox" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M800.037 9.76178C799.138 9.50178 798.203 9.36818 797.26 9.36818L673.602 9.36812C671.139 9.36812 668.762 8.45902 666.928 6.81508L660.781 1.30592L665.732 6.59539C667.622 8.61538 670.266 9.76172 673.032 9.76172L800.037 9.76178ZM143.366 0.00244141L137.512 6.47157C135.616 8.56636 132.922 9.76147 130.097 9.76147L0.0379639 9.76141C0.937012 9.50142 1.87201 9.36782 2.81592 9.36782L129.134 9.36787C131.607 9.36787 133.992 8.45156 135.829 6.7959L143.366 0.00244141ZM31.2089 238.411C32.3812 238.878 33.6366 239.121 34.9094 239.121L158.511 239.121C161.193 239.121 163.763 240.198 165.644 242.112L173.395 249.999L166.766 242.021C164.866 239.734 162.047 238.411 159.074 238.411L31.2089 238.411ZM624.924 249.97L631.473 242.042C633.372 239.743 636.2 238.411 639.183 238.411L768.996 238.411C767.824 238.878 766.569 239.121 765.296 239.121L639.735 239.121C637.043 239.121 634.464 240.206 632.583 242.132L624.924 249.97Z"              
                transform="scale(0.00125, 0.004)" />        

          </clipPath>
        </defs>
      </svg>

      <svg id="tools-clip-wrapper" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="tools-clip"    
                    viewBox="0 0 800 250" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.0701 71.9663L0 0L57.8646 70.833C59.7637 73.1579 62.6069 74.5066 65.6089 74.5066H104.468V75.6867H65.8525C62.8294 75.6867 59.9686 74.319 58.0701 71.9663ZM695.889 75.6867V74.5066H734.92C737.934 74.5066 740.788 73.147 742.687 70.8062L799.996 0.154563L742.481 71.9394C740.583 74.3081 737.712 75.6867 734.677 75.6867H695.889ZM114.572 190.683L155.164 240.989C157.063 243.341 159.924 244.709 162.947 244.709H265.483C267.26 244.709 268.876 245.741 269.623 247.354C270.37 248.967 271.986 249.999 273.764 249.999H525.379C527.154 249.999 528.767 248.966 529.51 247.354C530.253 245.742 531.865 244.709 533.641 244.709H637.564C640.599 244.709 643.47 243.33 645.368 240.962L685.569 190.787L645.515 240.166C643.616 242.507 640.763 243.867 637.749 243.867H533.253C531.699 243.867 530.282 244.761 529.614 246.165C528.946 247.569 527.53 248.463 525.975 248.463H273.295C271.738 248.463 270.319 247.569 269.647 246.165C268.974 244.76 267.556 243.867 265.999 243.867H162.762C159.76 243.867 156.917 242.518 155.018 240.193L114.572 190.683Z" 

                  transform="scale(0.00125, 0.004)" />        
          </clipPath>
        </defs>
      </svg>




    </div>
  )
}

export default React.memo(ProjectsList)

{/* <path fill-rule="evenodd" clip-rule="evenodd" d="M745.495 0.000276954C748.994 0.000276648 752.239 1.82964 754.051 4.82379L799.385 79.7546C799.914 80.6289 800.297 81.5623 800.535 82.5218C800.296 81.7909 799.97 81.0805 799.557 80.4058L754.272 6.47347C752.454 3.50591 749.224 1.69673 745.744 1.69673L707.923 1.69674C706.116 1.69674 704.632 1.03116 703.554 0.000280621L745.495 0.000276954ZM97.7741 0.000348839L51.9927 0.000352841C48.3513 0.000353159 44.9978 1.97969 43.238 5.16759L1.46088 80.8479C1.05011 81.592 0.741761 82.3735 0.534607 83.1734C0.729249 82.5957 0.978455 82.0308 1.28278 81.4862L43.0123 6.81829C44.7796 3.65599 48.119 1.69679 51.7416 1.69679L93.4062 1.69679C95.2134 1.69679 96.6962 1.03117 97.7741 0.000348839ZM58.6229 170.218L107.824 238.72C109.703 241.336 112.726 242.886 115.947 242.886L238.929 242.886C241.257 242.886 243.356 244.291 244.244 246.443C245.131 248.596 247.23 250 249.558 250L550.055 250C552.381 250 554.476 248.595 555.358 246.443C556.241 244.292 558.336 242.886 560.661 242.886L685.31 242.886C688.542 242.886 691.574 241.324 693.451 238.693L742.164 170.39L693.631 237.607C691.751 240.211 688.735 241.754 685.523 241.754L560.15 241.754C558.115 241.754 556.277 242.971 555.483 244.844C554.69 246.718 552.852 247.935 550.817 247.935L248.948 247.935C246.911 247.935 245.07 246.719 244.272 244.844C243.473 242.97 241.633 241.754 239.595 241.754L115.733 241.754C112.534 241.754 109.527 240.222 107.645 237.635L58.6229 170.218Z" */}

{/* <svg id="case-clip-wrapper" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
<defs>
  <clipPath id="case-clip"    
            viewBox="0 0 800 250" 
            clipPathUnits="objectBoundingBox" >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0901489 27.2047C0.355347 27.1835 0.621826 27.1728 0.888916 27.1728L188.117 27.1729C191.055 27.1729 193.844 25.8811 195.744 23.6406L214.599 1.40621C214.896 1.05632 215.215 0.729559 215.552 0.427246C214.864 0.835134 214.222 1.32733 213.642 1.89722L192.575 22.6004C190.705 24.4383 188.188 25.4681 185.566 25.4681L5.91614 25.468C4.35541 25.468 2.81641 25.8333 1.42224 26.5346L0.0901489 27.2047ZM800.091 27.2077L798.719 26.5222C797.331 25.8291 795.801 25.4683 794.25 25.4683L617.014 25.4682C614.402 25.4682 611.893 24.4461 610.025 22.6205L588.797 1.87742C588.224 1.3174 587.59 0.832994 586.912 0.430503C587.241 0.725755 587.552 1.0443 587.843 1.38494L606.843 23.6622C608.743 25.8899 611.524 27.173 614.451 27.173L799.259 27.1731C799.538 27.1731 799.815 27.1847 800.091 27.2077ZM768.38 223.641C767.989 223.688 767.594 223.711 767.198 223.711L595.876 223.711C592.788 223.711 589.874 225.137 587.98 227.575L571.117 249.272C570.795 249.686 570.444 250.071 570.067 250.425C570.783 249.972 571.444 249.426 572.033 248.795L590.864 228.602C592.755 226.574 595.404 225.422 598.177 225.422L762.571 225.422C764.253 225.422 765.908 224.998 767.383 224.189L768.38 223.641ZM31.9002 223.637L32.9377 224.203C34.4059 225.003 36.0513 225.422 37.7234 225.422L199.899 225.422C202.662 225.422 205.302 226.566 207.193 228.581L226.17 248.816C226.752 249.436 227.405 249.974 228.111 250.421C227.742 250.075 227.398 249.698 227.082 249.294L210.088 227.553C208.193 225.128 205.287 223.711 202.209 223.711L33.112 223.711C32.7058 223.711 32.3011 223.686 31.9002 223.637Z" 

          transform="scale(0.00125, 0.004)" />        
  </clipPath>
</defs>
</svg> */}
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




    //options
    //bounding
    //intersection
    //gsap

