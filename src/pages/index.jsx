import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"
import LandingHeaders from "../components/LandingHeaders"
import { IKContext } from 'imagekitio-react'
import Stars from "../components/Stars"

export default function Home() {
 
  return (
    <ScrollContextProvider>

      <IKContext publicKey={process.env.GATSBY_IK_PUBLIC_KEY}
                 urlEndpoint='https://ik.imagekit.io/kv4ohthhz'>

        <Layout >
        
          <BackgroundScene />


          <svg id="clip-wrapper" xmlns="http://www.w3.org/2000/svg"
              //  viewBox="0 0 900 600" 
              //  width="900" 
              //  height="600" 
              //  width="0" 
              //  height="0" 
          >

            <defs>
              <clipPath id="clip"              
                        viewBox="0 0 800 427" 
                        clipPathUnits="objectBoundingBox"
                        // width="900" 
                        // height="600" 
                        // fill="#0066FF"
              >
                {/* <path 
                      transform="scale(0.001111, 0.001666)"
                      d="M0 134L37.5 125.5C75 117 150 100 225 161.8C300 223.7 375 364.3 450 416.7C525 469 600 433 675 401.3C750 369.7 825 342.3 862.5 328.7L900 315L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" /> 
              */}
              {/* <path     
                    transform="scale(0.00124)"
                    d="M0 246.634L194.668 303.226L377.061 246.634L626.5 0.5L800 246.634V427H0V246.634Z" fill="#D9D9D9"
                  /> */}

<path xmlns="http://www.w3.org/2000/svg" 
                              transform="scale(0.001111, 0.001666)"

        d="M0 543L30 543C60 543 120 543 180 482.3C240 421.7 300 300.3 360 287C420 273.7 480 368.3 540 397.3C600 426.3 660 389.7 720 324C780 258.3 840 163.7 870 116.3L900 69L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z" 
// fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"
/>

              </clipPath>
            </defs>
          </svg>

{/* 
          <svg width="800" height="427" viewBox="0 0 800 427" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 246.634L194.668 303.226L377.061 246.634L626.5 0.5L800 246.634V427H0V246.634Z" fill="#D9D9D9"/>
</svg>
 */}

          <div className="overlay"></div>
          

          <LandingHeaders />
          <Stars />
          <ProjectsList /> 
        </Layout> 

      </IKContext>

    </ScrollContextProvider>
  )
}


