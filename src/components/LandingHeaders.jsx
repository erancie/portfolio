import React from 'react'
import { useScroll } from './utils/scrollContext'
import { useScrollPosition } from './utils/useScrollPosition'

export default function LandingHeaders() {

  const scrollPos = useScroll()
  // OR
  // const scrollPos = useScrollPosition()
  //will using this in many comps create many scroll listeners?
  //where to find amt of listeners
  //would useContext solve that?

  console.log(`scrollPos LandingHeaders: ${scrollPos}`)

  return (
        // <div style={{ transform:`scale(${1-scrollPos/1500})` }} className="landing">
         <div style={ scrollPos < 1280 ? { transform:`scale(${1-scrollPos/1500})` } : { transform:`scale(1)` } } className="landing"> 
         {/* <div style={ show() } className="landing">  */}

          {/* <h1 className="title-3">&</h1> */}

          <h1 className="title-1">Out of this World</h1>
          <h1 className="title-2">Digital Spaces.</h1>
          {/* <h1 className="title-4"></h1> */}
          {/* <h3 className="title-5">I'm Elliot. </h3> */}
          <h3 className="title-5">Elliot Rancie is taking web design & develop to the next level and beyond.</h3>
          {/* unique user experiences for brands on the web. </h3> */}
          {/* & compelling stories */}
          {/* UI Design
          UX Design
          UI Development */}
        </div>
  )
}
