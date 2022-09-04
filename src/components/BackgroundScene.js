import React, { useCallback, useRef } from "react"
import Globe from "../components/Globe"
import useScrollListener from "./utils/useScrollListener"

const BackgroundScene = () => {

  const bgRef = useRef()

  const handleScroll = useCallback(()=>{  
    let scrollY = window.scrollY  
    if(scrollY < 1280){
      bgRef.current.style.backgroundSize = 320 - scrollY/16+"%"
    }
  }, [bgRef])

  useScrollListener(bgRef, handleScroll)

  return(
    <div className="back-scene">
      <div ref={bgRef} className="landing-bg"></div>
      <div className="globe">
        <Globe />
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}

export default BackgroundScene