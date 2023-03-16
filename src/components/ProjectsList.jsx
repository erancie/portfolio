import React, { useEffect, useRef, useCallback, useState } from 'react'
import projects, { thisSite } from '../../content/projectsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollContext } from "./utils/useScrollContext"
import { IKImage } from 'imagekitio-react'
import Stars from "../components/Stars"

gsap.registerPlugin(ScrollTrigger)

export function ProjectThumb({project, hatchIsOpen}) {

  // const exclaimRef = useRef(null) 

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

        <div ref={cardRef} key={project.name} className='project-thumb col-12 col-lg-10 col-xl-10 '>
          
          <div className='project-titles-wrapper' style={{
              // background: hatchIsOpen && 'rgb(3,10,21)' 
          }}>
            <h1 className='project-title'>{project.title}</h1>
            <p className='project-desc'>{project.desc}</p>
          </div>

          {/* <div className="titles-svg"></div> */}

          <div className="project-imgs-wrapper">

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


            <div className="project-imgs-shadow"
                         style={{
                          // transform: hatchIsOpen && 'translateX(-100%)',
                          opacity: hatchIsOpen && '0'
                        }}>
            </div>

          </div>


          <div className='project-tools'>
            {project.tools.map((t)=>(
              <div className="tool-container">
                <img src={t.icon} className='tool-icon' />
                <p className="tool-label">{t.label}</p>
              </div>
            ))} 
          </div>

          <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>


          {/* <div className="tools-svg"></div> */}

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
    <div  className='projects-container'>

      {/* <div className="proj-bg-container" ref={bgContainer}></div> */}
      <div className='projects-list'>
        <div className="svg-window-top-wrapper">

          {/* try class approach to style all elements affected by theme */}
          {/* //make classes for hatchOpen/closed   */}
          {/* //some for all elements affected? some for each?   */}
          <div className='svg-window-top' style={{
                                                  // transform: hatchIsOpen && 'translateX(-100%)',
                                                  opacity: hatchIsOpen && '0' 
                                                // background: hatchIsOpen && 'none'
                                                 }}></div>

        </div>
        {/* <Stars /> */}
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


      {/* move this to layout/menu when hatchIsOpen context is created */}
      {/* <div className="space-walk" style={{right: (hide.current || scrollPos < 1200) && '-5rem'}}> */}
      <div onClick={handleSpaceWalk} className="space-walk" style={{right: ( scrollPos < 1200) && '-5rem'}}>
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0711 0L54.0887 13.7868L54.0886 13.7869L78.5591 37.8544C80.5279 39.7908 80.5279 42.9302 78.5591 44.8666L71.671 51.6412C69.7022 53.5776 66.5102 53.5776 64.5415 51.6412L40.071 27.5737L12.0358 55.1472L1.58299 44.8664C-0.385776 42.9301 -0.385776 39.7907 1.58299 37.8543L40.0711 0ZM59.588 62.5552C61.5568 60.6189 61.5568 57.4794 59.588 55.5431L43.354 39.5764C41.3853 37.64 38.1933 37.64 36.2245 39.5764L16.4258 59.0491L36.2245 78.5219C38.1933 80.4582 41.3853 80.4582 43.354 78.5219L59.588 62.5552Z" />
        </svg>
      </div>


      {/* clip-path svgs */}
      <svg id="window-top-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-top-clip"    
                    viewBox="0 0 800 80" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.811 31.2227C98.4381 31.2227 96.288 29.8239 95.3262 27.6543L84.6484 3.56833C83.6866 1.39879 81.5364 0 79.1632 0H6C2.68629 0 0 2.68629 0 6V68.8889V74V80H6H794H800V74V68.8889V6C800 2.68629 797.314 0 794 0H714.959C712.594 0 710.45 1.3893 709.483 3.54777L698.679 27.6749C697.712 29.8334 695.568 31.2227 693.203 31.2227H610.052C607.686 31.2227 605.541 32.6129 604.575 34.7725L600.693 43.4502C599.727 45.6098 597.582 47 595.216 47H401H203.038C200.664 47 198.514 45.6003 197.552 43.4297L193.727 34.793C192.766 32.6224 190.615 31.2227 188.241 31.2227H100.811Z"
                  transform="scale(0.00125, 0.0125)"
            />
          </clipPath>
        </defs>
      </svg>

      <svg id="window-clip-wrapper" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="window-clip"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000976562 -0.000488281H799.999V59.1057C799.32 59.0357 798.634 59 797.943 59H764.758L753.096 79.1085L755.144 82.873L768.41 60L768.843 60.2509L755.424 83.3872L786.176 139.904L785.824 140.096L755.189 83.7922L750.751 91.4435L750.318 91.1927L754.909 83.278L752.861 79.5136L747.594 88.594L746.902 88.1927L752.413 78.6909L748.824 72.0956L749.176 71.9044L752.648 78.2858L763.834 59H684.112L535.113 359H732.499C739.5 359 745.992 355.339 749.614 349.348L799.999 266.011V400H-0.000976562V267.505L48.651 349.231C52.2572 355.288 58.7864 359 65.8363 359H262.935L115.687 59H-0.000976562V-0.000488281ZM126.404 54.3505L228.489 265.184L331.401 87.7491L332.266 88.2509L229.015 266.271L230.969 270.307L334.47 91.8569L334.902 92.1078L231.232 270.85L276.374 364.082L283.031 372.563C285.875 376.186 290.225 378.302 294.831 378.302H399.921H479.918L504.768 335.458L461.44 250.429L412.741 334.393L412.309 334.142L461.17 249.899L458.443 244.547L408.865 330.026L408 329.525L457.902 243.486L410.822 151.091L411.178 150.91L458.141 243.074L593.324 9.99961H398.933H243.312L217.068 55.2471L245.176 106.904L244.824 107.096L216.833 55.6521L205.434 75.3064L205.001 75.0555L216.553 55.138L215.527 53.2513L203.779 73.5066L203 73.055L215.023 52.3257L207.824 39.0956L208.176 38.9044L215.258 51.9206L239.572 9.99961H162.403C155.073 9.99961 148.331 14.0089 144.831 20.4487L126.404 54.3505ZM461.679 250.017L505.007 335.046L514.313 319L514.745 319.251L505.277 335.577L507.148 339.249L518.312 320L519.091 320.452L507.634 340.203L515.507 355.653L515.15 355.834L507.395 340.615L485.537 378.302H504.557C509.215 378.302 513.609 376.138 516.448 372.445L521.797 365.49L674.686 53.6976L657.666 20.8076C654.23 14.1685 647.379 9.99961 639.903 9.99961H600.89L461.679 250.017ZM600.312 9.99961L461.409 249.487L458.682 244.135L594.48 9.99961H600.312ZM505.038 335.989L480.496 378.302H484.497L506.909 339.661L505.038 335.989ZM240.613 9.99961H242.734L216.788 54.7329L215.762 52.8462L240.613 9.99961ZM76.9633 322.325L75.0074 318.73L81.5783 307.401L80.8862 307L74.5598 317.908L45.1757 263.904L44.8243 264.096L74.3248 318.313L62.0001 339.562L62.6922 339.964L74.7725 319.135L76.7283 322.73L64.9718 343L65.4043 343.251L77.0081 323.244L81.8243 332.096L82.1757 331.904L77.243 322.839L84.2904 310.688L83.8579 310.438L76.9633 322.325Z"
                  transform="scale(0.00125, 0.0025)" />        
          </clipPath>
        </defs>
      </svg>


      

      <svg id="thumb-titles-clip-wrapper"  xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="thumb-titles-clip"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox" >

<path fill-rule="evenodd" clip-rule="evenodd" d="M56.8921 8.08254C53.6683 8.08254 50.6422 9.63676 48.7641 12.2571L0.0134888 80.277L44.3486 21.9879C46.2397 19.5016 49.1841 18.0418 52.3079 18.0418L206.111 18.0419C208.507 18.0419 210.678 16.6263 211.644 14.433C212.61 12.2398 214.78 10.8242 217.177 10.8242L583.852 10.8243C586.252 10.8243 588.426 12.2391 589.398 14.4332C590.37 16.6272 592.544 18.042 594.944 18.042L746.564 18.0421C749.676 18.0421 752.611 19.4907 754.503 21.961L800.011 81.3703L750.106 12.2302C748.226 9.62573 745.209 8.08283 741.997 8.08283L593.329 8.08277C590.671 8.08277 588.271 6.49073 587.238 4.04158C586.204 1.59244 583.804 0.000398864 581.146 0.000397734L220.048 0.000244141C217.393 0.000243011 214.997 1.59318 213.97 4.04143C212.943 6.48967 210.547 8.08261 207.892 8.08261L56.8921 8.08254ZM729.707 390.241C733.294 390.241 736.607 388.319 738.388 385.205L775.864 319.659L743.2 373.408C741.386 376.392 738.147 378.214 734.654 378.214H587.924C585.156 378.214 582.689 379.961 581.77 382.572C580.851 385.183 578.385 386.93 575.617 386.93L223.481 386.93C220.711 386.93 218.241 385.184 217.316 382.572C216.392 379.96 213.922 378.214 211.151 378.214H66.525C63.0437 378.214 59.813 376.404 57.9957 373.435L24.2905 318.364L62.7939 385.231C64.5787 388.331 67.8831 390.241 71.4599 390.241H212.893C215.97 390.241 218.703 392.205 219.684 395.121C220.666 398.037 223.399 400 226.475 400L572.471 400C575.544 400 578.274 398.036 579.249 395.121C580.225 392.206 582.955 390.241 586.028 390.241L729.707 390.241Z" 

                  transform="scale(0.00125, 0.0025)" />        
          </clipPath>
        </defs>
      </svg>

      <svg id="tools-clip-wrapper" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="tools-clip"    
                    viewBox="0 0 800 400" 
                    clipPathUnits="objectBoundingBox" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M691.843 145.536C695.066 145.536 698.091 143.983 699.969 141.364L800.432 1.28159C800.502 1.18396 800.57 1.08577 800.636 0.987061C800.419 1.4317 800.166 1.86958 799.874 2.29767L699.058 150.063C697.195 152.794 694.103 154.427 690.797 154.427H672.63L675.484 150.063C677.331 147.239 680.479 145.536 683.853 145.536H691.843ZM1.53531 3.33957C1.17929 2.8214 0.879974 2.28862 0.634613 1.74668C0.747589 1.92475 0.867157 2.10122 0.993256 2.27584L101.471 141.392C103.351 143.995 106.367 145.536 109.578 145.536H115.883C119.248 145.536 122.388 147.229 124.237 150.041L127.122 154.427H110.612C107.318 154.427 104.236 152.805 102.37 150.091L1.53531 3.33957ZM562.206 246.641C565.61 246.641 568.781 244.909 570.62 242.044L622.695 160.948C623.356 159.92 623.8 158.842 624.05 157.754C623.766 158.663 623.342 159.557 622.764 160.412L571.151 236.878C569.292 239.633 566.186 241.283 562.862 241.283H492.605C491.348 241.283 490.219 242.054 489.762 243.224C489.304 244.395 488.176 245.165 486.919 245.165H312.313C311.054 245.165 309.924 244.395 309.464 243.224C309.004 242.053 307.874 241.283 306.615 241.283H237.388C234.077 241.283 230.98 239.644 229.118 236.905L177.52 161.002C176.891 160.077 176.443 159.107 176.158 158.122C176.398 159.295 176.863 160.46 177.578 161.566L229.641 242.071C231.484 244.921 234.645 246.641 238.038 246.641H306.49C307.888 246.641 309.141 247.506 309.635 248.814C310.13 250.122 311.382 250.988 312.78 250.988H486.364C487.76 250.988 489.011 250.122 489.502 248.814C489.994 247.507 491.245 246.641 492.641 246.641H562.206Z" 

                  transform="scale(0.00125, 0.0025)" />        
          </clipPath>
        </defs>
      </svg>


    </div>
  )
}

export default React.memo(ProjectsList)

{/* <path fill-rule="evenodd" clip-rule="evenodd" d="M697.516 89.5016C699.95 89.5016 702.301 88.6137 704.127 87.0043L797.951 4.32957C799.132 3.28912 799.985 2.09374 800.543 0.82666C800.037 2.30684 799.151 3.71728 797.837 4.93472L703.259 92.5376C701.41 94.2499 698.983 95.2011 696.463 95.2011H676.585L679.576 92.3103C681.441 90.5086 683.932 89.5016 686.525 89.5016H697.516ZM3.37647 5.5991C1.95496 4.2917 1.03076 2.75853 0.543762 1.15402C1.09967 2.53582 1.9989 3.84052 3.28119 4.96246L97.0747 87.0275C98.8975 88.6225 101.237 89.5016 103.659 89.5016H112.938C115.521 89.5016 118.004 90.501 119.866 92.2905L122.896 95.2011H104.7C102.192 95.2011 99.7763 94.259 97.9306 92.5615L3.37647 5.5991ZM573.655 187.441C571.784 189.282 569.265 190.313 566.641 190.313H493.849C492.844 190.313 491.912 190.843 491.398 191.707C490.884 192.572 489.953 193.101 488.947 193.101H311.294C310.286 193.101 309.353 192.572 308.836 191.707C308.318 190.843 307.385 190.313 306.377 190.313H234.717C232.105 190.313 229.596 189.291 227.728 187.465L182.218 142.994C178.96 139.81 178.503 135.432 180.019 131.896C178.717 135.416 179.326 139.646 182.592 142.682L227.254 184.202C229.104 185.922 231.537 186.878 234.063 186.878H306.421C307.333 186.878 308.18 187.348 308.662 188.123C309.143 188.897 309.991 189.368 310.903 189.368H489.427C490.338 189.368 491.183 188.897 491.662 188.123C492.14 187.349 492.986 186.878 493.896 186.878H567.302C569.84 186.878 572.283 185.912 574.136 184.178L618.857 142.308C622.075 139.295 622.693 135.125 621.437 131.634C622.894 135.14 622.422 139.448 619.218 142.601L573.655 187.441ZM255.536 228.413C257.378 225.561 260.541 223.839 263.936 223.839L322.076 223.839C323.254 223.839 324.309 223.11 324.725 222.008C325.142 220.907 326.197 220.178 327.374 220.178L474.481 220.178C475.66 220.178 476.717 220.906 477.136 222.008C477.555 223.11 478.611 223.839 479.79 223.839L536.99 223.839C540.374 223.839 543.528 225.55 545.373 228.386L559.968 250.823L547.414 232.665C545.546 229.964 542.472 228.352 539.188 228.352L480.554 228.352C479.491 228.352 478.534 227.705 478.14 226.717C477.745 225.73 476.788 225.082 475.725 225.082L326.066 225.082C325.004 225.082 324.049 225.73 323.656 226.717C323.264 227.704 322.309 228.352 321.247 228.352L261.733 228.352C258.437 228.352 255.353 229.976 253.488 232.692L241.382 250.327L255.536 228.413ZM612.076 83.0146C610.199 84.901 607.648 85.9617 604.987 85.9617H600.525C597.704 85.9617 595.015 87.1531 593.119 89.2423L592.002 90.4742H604.208C606.956 90.4742 609.582 89.3437 611.471 87.3482L673.121 22.2124C674.878 20.3556 675.74 18.1489 675.862 15.9538C675.618 18.0198 674.706 20.063 673 21.7781L612.076 83.0146ZM125.256 16.193C125.323 18.4836 126.19 20.8014 128.033 22.7345L189.647 87.3738C191.534 89.3538 194.15 90.4742 196.886 90.4742H207.931L206.788 89.2214C204.893 87.1448 202.212 85.9617 199.401 85.9617H196.116C193.467 85.9617 190.926 84.9108 189.052 83.0396L128.168 22.2754C126.382 20.4922 125.458 18.3491 125.256 16.193ZM583.208 197.685C581.374 199.329 578.998 200.238 576.535 200.238H525.209C525.386 200.058 525.555 199.867 525.715 199.667C527.101 197.929 529.203 196.917 531.426 196.917H577.223C579.601 196.917 581.901 196.069 583.711 194.527L630.378 154.742C634.275 151.42 634.731 146.417 632.803 142.591C634.968 146.397 634.689 151.553 630.807 155.031L583.208 197.685ZM167.087 142.885C164.878 146.706 165.147 151.917 169.073 155.41L216.611 197.709C218.442 199.338 220.807 200.238 223.258 200.238H273.402C273.223 200.058 273.053 199.867 272.893 199.667C271.498 197.928 269.39 196.917 267.161 196.917H222.576C220.211 196.917 217.921 196.078 216.115 194.549L169.516 155.103C165.581 151.772 165.128 146.727 167.087 142.885ZM299.292 202.418C299.849 202.913 300.345 203.485 300.765 204.123C302.357 206.547 305.064 208.007 307.965 208.007H490.647C493.542 208.007 496.241 206.546 497.824 204.123C498.241 203.485 498.735 202.913 499.29 202.418H299.292ZM615.512 211.017C614.005 211.873 612.303 212.323 610.57 212.323H602.77C600.901 212.323 599.068 212.847 597.481 213.836L595.734 214.925H609.81C611.616 214.925 613.388 214.436 614.939 213.51L663.618 184.427C670.979 180.029 669.489 169.803 662.733 166.731C668.95 170.206 670.011 180.041 662.725 184.182L615.512 211.017ZM138.359 167.021C131.623 170.119 130.164 180.342 137.538 184.716L186.103 213.526C187.648 214.442 189.41 214.925 191.205 214.925L204.093 214.925L202.314 213.822C200.732 212.842 198.908 212.323 197.047 212.323H190.454C188.732 212.323 187.039 211.878 185.539 211.031L138.449 184.456C131.159 180.342 132.18 170.529 138.359 167.021Z"  */}


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


  //parallax up screen according to space from bottom 
          {/* <div className='desc-container' > */}
            {/* <div className='exclaim'
            ref={exclaimRef}
            // style={ 
            //   space > 0
            //   ? { top:`(-${space/50})` } 
            //   : { display:`none` } } 
              > ! </div> */}
          {/* </div> */}
