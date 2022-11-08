import React from "react"
import Globe from "./Globe"
import { useScrollContext } from "./utils/scrollContext"

const BackgroundScene = () => {

  const scrollPos = useScrollContext()

  return(
    <div className="back-scene">
      <div style={scrollPos < 800 ? {backgroundSize : 320 - scrollPos/16+"%"} : {backgroundSize : 270+'%'} } className="landing-bg"></div>
      <div className="globe">
        <Globe />
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}
export default BackgroundScene
