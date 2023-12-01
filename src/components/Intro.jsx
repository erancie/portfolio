import React, { useCallback, useEffect } from 'react'
// import { useScrollContext } from './utils/useScrollContext'

import medallion from '../../static/svg/medallion.svg'

export default function Intro() {

  const fadeInObserver = useCallback(() => {
    const projectElements = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(entries => { 
      entries.forEach(entry => {
        //check if in view/intersecting 
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
    fadeInObserver() 
  }, [])

  return (
    <div id='intro' className='introduction'>


      <svg className='intro-icon' viewBox="0 0 101 166" xmlns="http://www.w3.org/2000/svg">
        <path d="M77.9963 39.7322C77.683 52.9144 79.8427 63.2601 79.8427 63.2601C79.8427 63.2601 63.7386 50.1241 62.1369 46.1802C60.5353 42.2364 62.7872 37.5958 67.1666 35.8152C71.5461 34.0346 76.3947 35.7883 77.9963 39.7322Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3083 0.903367L43.9696 12.2752C39.5991 15.1416 36.029 18.6263 33.2593 22.7294C30.8477 26.2143 29.1675 29.9343 28.2186 33.8894L28.2207 33.8906C28.2207 33.8906 27.1549 39.1805 26.8702 42.5837C26.6461 45.2618 26.8824 50.9006 26.8824 50.9006C26.4656 52.4093 25.865 52.5682 25.0729 52.7777C24.5325 52.9207 23.9028 53.0872 23.1815 53.7223L67.3697 98.8475L72.2292 104.146C72.9972 105.288 73.6785 106.493 74.2731 107.761C75.2483 109.883 75.9444 112.1 76.3613 114.413C76.7782 116.726 76.8634 119.064 76.617 121.427C76.5185 122.372 76.3906 123.311 76.2334 124.245C76.0176 125.167 75.7139 126.071 75.3223 126.959L26.2522 71.3849C24.2705 68.7966 19.2454 63.6351 19.2454 63.6351C19.2454 63.6351 22.0267 68.5623 18.3981 73.7415C16.8121 76.0054 15.6294 77.5001 14.8006 78.4654C12.6031 80.5289 10.6544 82.7973 8.95472 85.2704C6.84504 88.29 5.12414 91.5974 3.792 95.1925C2.45986 98.7877 1.58744 102.564 1.17472 106.522C0.478645 113.197 1.02429 119.725 2.81167 126.107C4.6052 132.43 7.43986 138.235 11.3157 143.522C15.1976 148.75 20.0836 153.242 25.9737 156.998C31.8638 160.754 38.5311 163.368 45.9757 164.839C53.2444 166.275 60.0594 166.325 66.4206 164.989C72.7232 163.642 78.3007 161.217 83.1529 157.715C88.0113 154.153 91.9764 149.692 95.0482 144.33C98.1262 138.909 100.013 132.862 100.709 126.187C101.122 122.229 101.053 118.297 100.504 114.39C100.019 110.436 99.0724 106.602 97.6649 102.887C96.2636 99.1137 94.4536 95.5308 92.2349 92.1383L92.1603 92.0224L83.9322 82.1817L57.3998 53.2503C55.6937 51.3899 54.4752 49.3829 53.7444 47.2292C53.0137 45.0756 52.7726 42.9471 53.0214 40.8439C53.2701 38.7407 53.9997 36.7379 55.2101 34.8354C56.4206 32.9329 58.0699 31.2969 60.158 29.9274L62.9382 28.104C62.2608 24.3804 60.9389 16.4688 60.8162 10.8175C60.7515 7.83657 60.9927 4.20615 61.3083 0.903367ZM25.9698 107.984C26.2041 106.885 26.5849 105.815 27.1123 104.774L61.2797 140.281C60.4097 140.591 59.4318 140.79 58.3459 140.877C57.2599 140.964 56.1478 141.015 55.0094 141.032C53.8185 140.977 52.66 140.899 51.534 140.797C50.4141 140.636 49.4145 140.469 48.5352 140.295C44.6077 139.519 41.1553 138.204 38.1778 136.35C35.1418 134.484 32.6209 132.268 30.6151 129.701C28.6155 127.075 27.1805 124.199 26.3099 121.073C25.3869 117.877 25.0979 114.624 25.4429 111.316C25.5661 110.135 25.7417 109.024 25.9698 107.984Z" />
      </svg>

      <p className='intro-paras fade-in intro-heading'>
      Hi, I'm <span className="">Elliot</span>.
      </p>
      <br/>
      <p className='intro-paras fade-in'>
       I design and develop compelling <span className='highlight'> User Experiences </span> for digital products. 
      </p>
      <br/>
      <p className='intro-paras fade-in'>
        I also build <span className='highlight'> Full Stack </span>
         web apps.  
      </p>

      <br/>      
      <br/>      
      <hr className='intro-hr'></hr>


      <div className='design-process'>

        <p className='intro-paras fade-in process-heading'>
          Process:
        </p>
        <p className='intro-paras fade-in'>
          Listen and understand the <span className='highlight'>Product Vision</span>.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
        <span className='highlight'>Define</span> the product.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Research the market and profile <span className='highlight'>Ideal Users</span>. 
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Creative <span className='highlight'>Ideation</span> and mockups. 
        </p>
        <br/>
        <p className='intro-paras fade-in'>
        <span className='highlight'>Wireframe</span> the user experience.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Produce a <span className='highlight'>Prototype</span>.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Preliminary <span className='highlight'> User Testing</span>.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          High fidelity <span className='highlight'>UI</span> design.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Technical team <span className='highlight'>Handover</span>
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Aid techincal <span className='highlight'>Development</span>.
        </p>
        <br/>      
        <p className='intro-paras fade-in'>
          Analyse <span className='highlight'>User Behavior</span> and improve the experience.
        </p>
        <br/>
      </div>


      <hr className='intro-hr'></hr>
      <br/>
      <br/>

      <div className='call-to-action'>   
        <p className='reach-out'>Reach out.</p>

        <p className="intro-actions-text col-12 fade-in"> 
          <a className='intro-message' href='#contact'>
            Message <svg viewBox="0 0 42 37" xmlns="http://www.w3.org/2000/svg">                           
              <path d="M39.2489 0.712402H2.75109C1.23166 0.712402 0 2.00201 0 3.59292V27.7892C0 29.3801 1.23176 30.6698 2.75109 30.6698H14.8651L18.8947 35.686C19.4174 36.3367 20.188 36.7124 21.0001 36.7124C21.8122 36.7124 22.5827 36.3368 23.1055 35.686L27.1351 30.6698H39.2489C40.7682 30.6698 42 29.3801 42 27.7892V3.59292C42 2.00201 40.7682 0.712402 39.2489 0.712402ZM29.7041 23.7565H7.59796C6.8383 23.7565 6.22242 23.1117 6.22242 22.3163C6.22242 21.5209 6.8383 20.876 7.59796 20.876H29.7041C30.4638 20.876 31.0796 21.5209 31.0796 22.3163C31.0796 23.1117 30.4638 23.7565 29.7041 23.7565ZM6.22242 15.8083C6.22242 15.0129 6.8383 14.3681 7.59796 14.3681H24.5725C25.3321 14.3681 25.948 15.0129 25.948 15.8083C25.948 16.6037 25.3321 17.2486 24.5725 17.2486H7.59796C6.8383 17.2486 6.22242 16.6037 6.22242 15.8083ZM34.402 10.7404H7.59796C6.8383 10.7404 6.22242 10.0956 6.22242 9.30018C6.22242 8.50477 6.8383 7.85992 7.59796 7.85992H34.4019C35.1616 7.85992 35.7775 8.50477 35.7775 9.30018C35.7776 10.0956 35.1617 10.7404 34.402 10.7404Z" />
            </svg>
          </a>
          or <a className='intro-email' href='mailto: elliotrancie@gmail.com' target="_blank">
            email <svg viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 11.3558V29.9644C42 30.9972 41.6314 31.8801 40.8986 32.6129C40.1657 33.3458 39.2829 33.7144 38.25 33.7144H3.75C2.71714 33.7144 1.83429 33.3458 1.10143 32.6129C0.368571 31.8801 0 30.9972 0 29.9644V11.3558C0.685714 12.1229 1.47857 12.8001 2.36571 13.3958C8.02286 17.24 11.9057 19.9358 14.0143 21.4829C14.9057 22.1386 15.6257 22.6529 16.1829 23.0172C16.7357 23.3858 17.4771 23.7586 18.3986 24.1401C19.32 24.5215 20.1814 24.7144 20.9786 24.7144H21.0257C21.8229 24.7144 22.68 24.5215 23.6057 24.1401C24.5271 23.7586 25.2643 23.3815 25.8214 23.0172C26.3743 22.6486 27.0986 22.1386 27.99 21.4829C30.6471 19.5629 34.5386 16.8672 39.66 13.3958C40.5471 12.7829 41.3271 12.1058 42 11.3558ZM42 4.46436C42 5.69863 41.6186 6.87722 40.8514 8.00436C40.0843 9.13149 39.1329 10.0915 37.9929 10.8886C32.1171 14.9686 28.4614 17.5058 27.0257 18.5044C26.8714 18.6115 26.5371 18.8515 26.0314 19.2201C25.5257 19.5886 25.1014 19.8844 24.7671 20.1115C24.4329 20.3386 24.0257 20.5915 23.55 20.8744C23.0743 21.1572 22.6243 21.3672 22.2043 21.5086C21.7843 21.6501 21.39 21.7186 21.0343 21.7186H20.9871C20.6271 21.7186 20.2371 21.6501 19.8171 21.5086C19.3971 21.3672 18.9471 21.1572 18.4714 20.8744C17.9957 20.5915 17.5886 20.3386 17.2543 20.1115C16.92 19.8844 16.4957 19.5886 15.99 19.2201C15.48 18.8515 15.15 18.6158 14.9957 18.5044C13.5729 17.5058 11.5286 16.0786 8.85429 14.2272C6.18429 12.3758 4.58143 11.2615 4.05 10.8886C3.08143 10.2329 2.16857 9.32863 1.30714 8.18007C0.428571 7.03151 0 5.96435 0 4.97864C0 3.76151 0.325714 2.74578 0.972857 1.9315C1.62 1.11722 2.54571 0.714355 3.75 0.714355H38.25C39.2657 0.714355 40.1443 1.08293 40.8857 1.81578C41.6271 2.54864 42 3.4315 42 4.46436Z" />
            </svg>
          </a>
          me.
        </p>

      </div>

      <br/>
      <br/>

      <div className='call-to-action'>  
        <p className="intro-actions-text col-12 fade-in">
          Check out my <a className='intro-git' href='https://github.com/erancie' target="_blank">
            GutHub <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z"></path>
            </svg>
          </a> 
          and <a className='intro-li' href='https://www.linkedin.com/in/elliot-rancie' target="_blank">
            LinkedIn <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536" >
              <path d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
                      C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
                      h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
                      C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
                      c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
                      c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
                      c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
                      c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
                      c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
                      c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
                      H370.873z"/>  .
            </svg>
          </a>
          
        </p>

      </div>

      <br/>
      <br/>

      <p className="keep-scrolling intro-paras fade-in">See development projects below..</p>


      <div className="go-down-intro" >
        <svg viewBox="0 0 51 31" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.00488281 0.434526L24.8534 30.4199L28.8746 25.5817L50.0047 0.419922L35.5774 2.34127C35.2057 2.39077 34.8559 2.57773 34.5762 2.8764L24.8087 13.3065L14.9803 2.87069C14.7024 2.57561 14.3558 2.39043 13.9875 2.34024L0.00488281 0.434526Z" />
        </svg>
      </div>

      <svg id="intro-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="intro-clip" viewBox="0 0 800 800" clipPathUnits="objectBoundingBox" >
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00007 4.86482e-10C2.23862 -3.81056e-05 -4.01558e-06 2.23856 1.64626e-07 5.00001L0.000117591 132.625H0.000240125V660.895H2.32369e-07L0 664.227H0.0952452L0.0952413 719.573C0.0952413 721.461 1.1589 723.188 2.84506 724.038L89.2562 767.585C90.6521 768.289 92.1934 768.655 93.7566 768.655L449.815 768.655C452.995 768.655 456.129 769.413 458.957 770.867L498.106 790.986C500.934 792.44 504.068 793.198 507.248 793.198H720.548L718.076 794.639C716.547 795.531 714.809 796 713.04 796H496.196C492.989 796 489.828 795.229 486.982 793.751L482.128 791.231L493.484 797.509C496.446 799.146 499.775 800.005 503.16 800.005H717.649C719.512 800.005 721.339 799.484 722.923 798.501L795.274 753.589C798.213 751.765 800 748.552 800 745.093L800 661.693V132.155L800 51.926C800 49.1646 797.762 46.926 795 46.926H671.33C667.917 46.926 664.561 46.0525 661.58 44.3884L633.359 28.631H214.269C210.929 28.631 207.642 27.7946 204.709 26.1981L201.195 24.2857C203.156 24.9137 205.213 25.2379 207.292 25.2379H627.282L626.045 24.5473C623.065 22.8833 619.708 22.0097 616.295 22.0097H200.583C197.247 22.0097 193.965 21.1754 191.034 19.5828L167.526 6.80875C166.068 6.47502 164.571 6.30467 163.064 6.30469L6.29396 6.30695C6.98775 4.37874 8.83292 2.99997 11.0001 3L160.129 3.00202C160.262 3.00202 160.395 3.00335 160.528 3.006L159.466 2.42892C156.535 0.836332 153.253 0.00204586 149.917 0.00199983L5.00007 4.86482e-10ZM88.2706 772.625L85.6582 771.209L438.677 771.209C441.885 771.209 445.045 771.981 447.892 773.458L449.329 774.205C448.071 773.959 446.787 773.834 445.495 773.834L93.0359 773.833C91.3716 773.833 89.7337 773.418 88.2706 772.625Z" 
                       transform="scale(0.00125, 0.00125)" /> 
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}
