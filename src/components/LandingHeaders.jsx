import React from 'react'
import { useScrollContext } from './utils/useScrollContext'
import { useScrollStore } from '../store'

export default function LandingHeaders() {

  const scrollPos = useScrollContext()
    // console.log(scrollPos)
    // console.log(scrollPos/100)
  return (
         <div style={ 
                scrollPos < 550 
                ? { transform:`scale(${1-scrollPos/550})`,
                    // top: -scrollPos/5 
                  } 
                : { display:`none` } } 
              className="landing"> 
                    {/* { transform:`scale(.0)` } */}

          {/* <h1 className="title-3">&</h1> */}
          <h1 className="title-1">OUT OF THIS WORLD</h1>
          <h1 className="title-2">..experiences on the web.</h1>
      
          {/* unique user experiences for brands on the web. </h3> */}
          {/* & compelling stories */}

        </div>
  )
}
