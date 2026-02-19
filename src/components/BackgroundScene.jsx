import React from "react"
import Scene from "./Scene"
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
    //background: radial-gradient(circle, #00d5ff45 0%, #1c1cc345 38%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/milkyway-square-8k_rdtI2Ci4c?updatedAt=1667922959249'), rgb(0, 0, 0);
    // background: radial-gradient(circle, #00d5ff25 0%, #1c1cc325 24%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/tr:q-92/milky-way-8k_BjWQB2UAv.jpg'), rgb(0, 0, 0);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(${props => props.scale}) rotate(${props =>props.rotate}deg);
    transition: transform 300ms ease-out;
    @media (min-width: 992px){
      width: 140vw;
      height: 220vh;
      left: -20vw;
      top: -55vh;
      //background: radial-gradient(circle, #00d5ff25 0%, #1c1cc325 24%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/tr:q-92/milky-way-8k_BjWQB2UAv.jpg'), rgb(0, 0, 0);
      //background: radial-gradient(circle, #00d5ff25 0%, #1c1cc325 24%, #02002414 60%), url('https://ik.imagekit.io/kv4ohthhz/milkyway-rect_jszdXI-s8.png'), rgb(0, 0, 0);
      //background-position: center center;
      //background-repeat: no-repeat;
      //background-size: cover;
    }
  }
`
const BackgroundScene = () => {

  const scrollPos = useScrollContext()

  return(
    <div className="back-scene" >
      <LandingBg scale={ scrollPos < 1200 
                         ? 1-scrollPos/(1200/.1) 
                         : .9} 
                 rotate={scrollPos < 1200 
                         ? scrollPos*(30/1200) 
                         : 30}>
      </LandingBg>
      
      <div className="bg-overlay"></div>

      <div className="globe">
        <Scene />
      </div>
    </div>
  )
}

export default BackgroundScene
