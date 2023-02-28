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
                ? { transform:`scale(${1-scrollPos/550})` } 
                : { display:`none` } } 
              className="landing"> 
                    {/* { transform:`scale(.0)` } */}

          {/* <h1 className="title-3">&</h1> */}
          <div className='title-container'>
            <h1 className="title-1">OUT OF THIS WORLD</h1>
            <h1 className="title-1b">OUT OF THIS WORLD</h1>
            <h1 className="title-1c">OUT OF THIS WORLD</h1>
            <h1 className="title-1d">OUT OF THIS WORLD</h1>

            {/* <h1 className="title-2">..experiences on the web.</h1> */}

          </div>

          {/* change to inside of container ? make relative to titles-1bcd*/}
          <div className="title-2-container">
            <h1 className="title-2">..experiences on the web.</h1>
          </div>
      
          {/* unique user experiences for brands on the web. </h3> */}
          {/* & compelling stories */}

        </div>
  )
}
