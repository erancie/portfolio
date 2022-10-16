import React from 'react'
import { useScroll } from './utils/scrollContext'

export default function LandingHeaders() {

  const scrollPos = useScroll()
  console.log(`scrollPos LandingHeaders: ${scrollPos}`)

  return (
        <div style={{ transform:`scale(${1-scrollPos/1500})` }} className="landing">
        {/* <div style={ inView ? { transform:`scale(${1-scrollPos/1500})` } : null } className="landing"> */}

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
