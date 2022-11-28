import React from "react"
import Globe from "./Globe"
import { useScrollContext } from "./utils/useScrollContext"

const BackgroundScene = () => {

  const scrollPos = useScrollContext()

  return(
    <div className="back-scene" >
      {/* <div className="landing-bg"
           style={scrollPos < 800 
                  ? {backgroundSize : 320 - scrollPos/16+"%"} 
                  : {backgroundSize : 270+'%'} } 
      ></div> */}
      <div className="landing-bg"
      style={scrollPos < 800 
            ? { transform: `scale(${1-scrollPos/(800/.1)}) rotate(${scrollPos*(30/800)}deg)`} 
            : { transform: 'scale(.9) rotate(30deg)'} } 
      ></div>
      <div className="globe">
        <Globe />
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}
export default BackgroundScene

