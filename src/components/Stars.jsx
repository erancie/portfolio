import React, {useRef} from 'react'
import { useScrollContext } from './utils/useScrollContext'


export default function Stars() {

  const scrollRate = {transform: `translateY(-${useScrollContext()/24}px)`}
  const landingRef = useRef()
  // useEffect(() => {
  //   const handler = () => landingRef.current.style.transform = `translateY(${-window.scrollY/24}px)`
  //   window.addEventListener('scroll', handler);
  // }, [])
  
  return (
    <svg id="svg-proj-back" 
      style={scrollRate}
      ref={landingRef}
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

  )
}
