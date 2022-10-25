import React from "react"
import Globe from "./Globe"
import { useScrollContext } from "./utils/scrollContext"
import { useScrollStore } from './../store'

const BackgroundScene = () => {

  const scrollPos = useScrollContext()
  // const scrollPos = useScrollStore((s)=>s.scrollPos)
  // const scrollPos = 0

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





     {/* background scene is a sticky element 
          sticky elements share properties of relative and fixed (or is it absolute and fixed? check)
            and will still stay in the document flow / take up their original relative positioning 
              even though they become fixed when scrolling
                consider how fixed positioning alone would be taken out of doc flow like absolute elements are
                  this is why the relatively positioned projects list still appears after the sticky bg scene */}
