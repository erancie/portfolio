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

        <div ref={cardRef} id={`${project.name}`} key={project.name} className='project-thumb side-viewing col-12 col-lg-10 col-xl-10 '>
          
          <div className='project-titles-wrapper' style={{
              // background: hatchIsOpen && 'rgb(3,10,21)' 
          }}>
            <h1 className='project-title'>{project.title}</h1>
            <p className='project-desc'>{project.desc}</p>
          </div>

          <div className="titles-svg"></div>

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
                      <stop stop-color="rgba(38,38,59)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134)"/>
                      <stop offset="1" stop-color="rgba(38,38,59)"/>
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
                      <stop stop-color="rgba(38,38,59)"/>
                      <stop offset="0.49541" stop-color="rgba(110,110,134)"/>
                      <stop offset="1" stop-color="rgba(38,38,59)"/>
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
                    <stop stop-color="rgba(38,38,59)"/>
                    <stop offset="0.328855" stop-color="rgba(110,110,134)"/>
                    <stop offset="1" stop-color="rgba(38,38,59)"/>
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


          <div className='project-tools'>
            {project.tools.map((t)=>(
              <div className="tool-container">
                <img src={t.icon} className='tool-icon' />
                <p className="tool-label">{t.label}</p>
              </div>
            ))} 
          </div>

          <a className='project-link' target="_blank" href={`${project.link}`}>Visit</a>


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
      {/* <div onClick={handleSpaceWalk} className="space-walk" style={{right: ( scrollPos < 1300) && '-5rem'}}>
        <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.9999 29.9854L25.1514 0L21.1301 4.8382L0 30L14.4274 28.0786C14.7991 28.0292 15.1489 27.8422 15.4286 27.5435L25.1961 17.1134L35.0244 27.5492C35.3023 27.8443 35.6489 28.0295 36.0172 28.0797L49.9999 29.9854Z" fill="#727272"/>
        </svg>

      </div> */}


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

            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.3949 53.0736C67.5507 45.729 74.7767 40.969 82.7706 40.969H244.732L265.63 7.11999C268.363 2.69435 273.193 0 278.394 0H398.99H521.991C527.216 0 532.065 2.71909 534.79 7.17747L555.443 40.969H716.174C724.124 40.969 731.319 45.6772 734.502 52.962L798.327 199.053C800.558 204.158 800.558 209.962 798.327 215.067L734.502 361.158C731.319 368.443 724.124 373.151 716.175 373.151H495.34L486.687 391.421C484.205 396.66 478.927 400 473.13 400H399.836H326.284C320.482 400 315.201 396.654 312.722 391.408L304.095 373.151H82.7705C74.7767 373.151 67.5507 368.391 64.3949 361.047L1.6244 214.955C-0.541468 209.915 -0.541464 204.206 1.6244 199.165L64.3949 53.0736ZM64.3665 55.5967C67.5386 48.2881 74.7459 43.5593 82.7131 43.5593H244.73L265.62 10.0625C268.36 5.66965 273.171 3 278.348 3H398.99H522.037C527.239 3 532.068 5.69439 534.801 10.1201L555.445 43.5593H716.232C724.155 43.5593 731.331 48.2362 734.529 55.4845L798.268 199.915C800.538 205.059 800.538 210.92 798.268 216.064L734.529 360.495C731.331 367.743 724.155 372.42 716.232 372.42H495.341L486.704 390.474C484.211 395.684 478.949 399 473.173 399H399.836H326.243C320.462 399 315.196 395.678 312.706 390.461L304.094 372.42H82.7131C74.7459 372.42 67.5386 367.691 64.3665 360.382L1.68188 215.952C-0.522705 210.873 -0.522705 205.106 1.68188 200.027L64.3665 55.5967Z"

                  transform="scale(0.00125, 0.0025)" />        
          
          </clipPath>
        </defs>
      </svg>

      <svg id="case-clip-wrapper" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="case-clip"    
                    viewBox="0 0 800 250" 
                    clipPathUnits="objectBoundingBox" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599854 15.2338C0.856689 15.2138 1.11475 15.2038 1.37347 15.2038L132.411 15.2039C135.158 15.2039 137.783 14.0743 139.672 12.0801L150.567 0.575684L137.977 11.4195C136.162 12.9827 133.846 13.8426 131.451 13.8426L5.69659 13.8425C4.00415 13.8425 2.33929 14.2721 0.858093 15.091L0.599854 15.2338ZM800.599 15.2042L800.367 15.0769C798.893 14.2673 797.237 13.8428 795.555 13.8428L672.446 13.8428C670.06 13.8428 667.753 12.9899 665.941 11.4381L653.805 1.04449L664.733 12.2017C666.614 14.1219 669.189 15.2041 671.877 15.2041L800.599 15.2042ZM769.768 230.146C769.325 230.206 768.877 230.237 768.427 230.237L637.841 230.237C634.924 230.237 632.152 231.511 630.253 233.724L615.825 250.537L631.787 234.926C633.656 233.099 636.166 232.075 638.779 232.075L763.788 232.075C765.609 232.075 767.395 231.578 768.954 230.638L769.768 230.146ZM31.6014 230.142L32.4553 230.654C34.008 231.584 35.784 232.075 37.594 232.075L160.655 232.075C163.259 232.075 165.76 233.091 167.626 234.906L183.741 250.576L169.178 233.703C167.279 231.502 164.515 230.237 161.608 230.237L32.9713 230.237C32.5115 230.237 32.0538 230.205 31.6014 230.142Z" 

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
