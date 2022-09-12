import React, { useCallback, useRef } from "react"
import BackgroundScene from "../components/BackgroundScene"
import '../styles/global.sass'
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import useScrollListener from '../components/utils/useScrollListener'
import Clip from "../components/Clip"

export default function Home() {

  const landingRef = useRef()
  const svgRef = useRef()
  // const botSvgRef = useRef()

  const handleScroll = useCallback(()=>{    
    let scrollY = window.scrollY  
    if(scrollY < 1280) 
      landingRef.current.style.transform = `scale(${1-scrollY/1500})`
    svgRef.current.style.top = `${100+scrollY/42}vh`
    // botSvgRef.current.style.bottom = `${120-scrollY/40}vh`
  }, [landingRef, svgRef])

  useScrollListener([landingRef, svgRef], handleScroll)

  return (
    <Layout>
      <BackgroundScene />

      <svg
        id="svg-back"
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

      <svg
        id="svg-back-bot"
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

      <svg
        ref={svgRef}
        id="svg-fore"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2883.5 2200"
      >
        <polygon
          id="_YOUR_IMAGE_HERE_"
          class="landing-svg-fore"
          points="613.89 1501.37 309.94 1325.89 6 1501.37 6 1852.33 309.94 2027.81 613.89 1852.33 613.89 1501.37"
        />
        <polygon
          id="_YOUR_IMAGE_HERE_-2"
          class="landing-svg-fore"
          points="1005 282.12 784.63 154.89 564.26 282.12 564.26 536.58 784.63 663.81 1005 536.58 1005 282.12"
        />
        <polygon
          id="_YOUR_IMAGE_HERE_-3"
          class="landing-svg-fore"
          points="2877.5 1415.14 2568.77 1236.89 2260.03 1415.14 2260.03 1771.64 2568.77 1949.89 2877.5 1771.64 2877.5 1415.14"
        />
        <polygon
          id="_YOUR_IMAGE_HERE_-4"
          class="landing-svg-fore"
          points="2337.63 162.42 2068.32 6.93 1799 162.42 1799 473.4 2068.32 628.89 2337.63 473.4 2337.63 162.42"
        />
      </svg>


      <div ref={landingRef} className="landing">
        {/* <h1 className="title-6">||</h1>
        <h1 className="title-7">|</h1> */}
        <h1 className="title-1">Web</h1>
        <h1 className="title-3">&</h1>
        <h1 className="title-2">Design</h1>
        <h1 className="title-4">Development</h1>
        <h3 className="title-5">by Elliot Rancie</h3>
      </div>

      <ProjectsList />

      {/* <Clip /> */}
      
    </Layout>
  )
}
