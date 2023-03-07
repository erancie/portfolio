import React from "react"
import Globe from "./Globe"
import { useScrollContext } from "./utils/useScrollContext"
import styled from 'styled-components'
import { useMemo } from "react"


const LandingBg = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: transform 300ms ease-out;
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 240vw;
    height: 200vh;
    left: -70vw;
    top: -50vh;
    z-index: -1;
    background: radial-gradient(circle, #00d5ff45 0%, #1c1cc345 38%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/tr:q-92/milkyway-square-8k_rdtI2Ci4c'), rgb(0, 0, 0);
    // background: radial-gradient(circle, #00d5ff25 0%, #1c1cc325 24%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/tr:q-92/milky-way-8k_BjWQB2UAv.jpg'), rgb(0, 0, 0);
    background-position: center center;
    background-repeat: no-repeat;
    transform: scale(${props => props.scale}) rotate(${props =>props.rotate}deg);
    transition: transform 300ms ease-out;
    @media (min-width: 992px){
      width: 200vw;
      height: 220vh;
      left: -50vw;
      top: -55vh;
      background: radial-gradient(circle, #00d5ff25 0%, #1c1cc325 24%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/tr:q-92/milky-way-8k_BjWQB2UAv.jpg'), rgb(0, 0, 0);
      background-position: center center;
      background-repeat: no-repeat;

    }
  }
`

const BackgroundScene = React.memo(() => {

  const scrollPos = useScrollContext()

  return(
    <div className="back-scene" >
      <LandingBg scale={ scrollPos < 800 
                         ? 1-scrollPos/(800/.1) 
                         : .9} 
                 rotate={scrollPos < 800 
                         ? scrollPos*(30/800) 
                         : 30}>
      </LandingBg>
      {/* <div className="landing-bg" 
           style={{transform: `scale(${scrollPos < 800 ? 1-scrollPos/(800/.1) : .9}) rotate(${scrollPos < 800 ? scrollPos*(30/800) : 30}})`}} ></div> */}
      <div className="globe">
        <Globe />
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
})

export default BackgroundScene
