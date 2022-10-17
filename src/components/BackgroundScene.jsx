import React from "react"
// import { useCallback, useRef, useContext, useState, useEffect } from "react"
import Globe from "./Globe"
import { useScroll } from "./utils/scrollContext"
import { useScrollPosition } from "./utils/useScrollPosition"

const BackgroundScene = () => {

  // const bgRef = useRef()
  // const [bgStyle, setBgStyle] = useState({backgroundSize: '320%'}) 

  const scrollPos = useScroll()
  // OR
  // const scrollPos = useScrollPosition()


  return(
    <div className="back-scene">
      <div style={scrollPos < 1280 ? {backgroundSize : 320 - scrollPos/16+"%"} : {backgroundSize : 320} } className="landing-bg"></div>
      {/* style={bgStyle} */}
      {/* ref={bgRef}  */}
      <div className="globe">
        <Globe />
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}

export default BackgroundScene





     {/* background scene is a sticky element 
          sticky elements share properties of relative and fixed
            and will still stay in the document flow / take up their original relative positioning 
              even though they become fixed when scrolling
                consider how fixed positioning alone would be taken out of doc flow like absolute elements are
                  this is why the relatively positioned projects list still appears after the sticky bg scene */}
