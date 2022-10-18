import React from 'react'
import { useScrollContext } from './utils/scrollContext'
import { useScrollStore } from '../store'

export default function LandingHeaders() {

  // const scrollPos = 0
  const scrollPos = useScrollContext()
  // const scrollPos = useScrollStore((s)=>s.scrollPos)
  
  return (
        // <div style={{ transform:`scale(${1-scrollPos/1500})` }} className="landing">
         <div style={ scrollPos < 1580 ? { transform:`scale(${1-scrollPos/1000}) `} : { transform:`scale(.05)` } } className="landing"> 
         {/* translateY(${scrollPos/25}) */}
          {/* <h1 className="title-3">&</h1> */}
          <h1 className="title-1">Out of this World</h1>
          <h1 className="title-2">Digital Spaces.</h1>
          {/* <h1 className="title-4">{zustand}</h1> */}
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
