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

          {/* <div className="overlay-container"> */}
            {/* <div className="overlay"></div> */}

            <svg style={{position: 'absolute'}} 
            id="clip-wrapper" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  {/* referencing custom SVG path from HTML id in CSS   
                    - need to include 1.- object bounding box 2.- and scale */}
                  {/* https://stackoverflow.com/questions/40099553/clip-path-width-doesnt-100-width */}
                <clipPath id="clip"    
                          viewBox="0 0 800 427" 
                          clipPathUnits="objectBoundingBox"
                >
                    <path d="M0.000573982 40C0.000573982 40 -0.000717477 40.0313 0.000573982 27.7199C263.433 27.7199 536.5 5.89545e-05 800 0C800 9.29506 800 40 800 40H0.000573982Z" 
                      transform="scale(0.00125, 0.025)"
                />
                </clipPath>
              </defs>
            </svg>

            <svg style={{position: 'absolute'}} 
            id="clip-wrapper" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  {/* referencing custom SVG path from HTML id in CSS   
                    - need to include 1.- object bounding box 2.- and scale */}
                  {/* https://stackoverflow.com/questions/40099553/clip-path-width-doesnt-100-width */}
                <clipPath id="clip-2"    
                          viewBox="0 0 800 427" 
                          clipPathUnits="objectBoundingBox"
                >
                <path d="M799.999 -2.81507e-07C799.999 -2.81507e-07 800.001 -0.0312762 799.999 12.2801C536.567 12.2801 263.5 39.9999 -1.33514e-05 40C-1.33514e-05 30.7049 -1.33514e-05 -2.81507e-07 -1.33514e-05 -2.81507e-07H799.999Z" 
                      transform="scale(0.00125, 0.025)"
                />
                </clipPath>
              </defs>
            </svg>



            {/* <div className="overlay-fore"></div>

            <svg tyle={{position: 'absolute'}} 
            id="clip-wrapper" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="clip-fore"    
                          viewBox="0 0 800 427" 
                          clipPathUnits="objectBoundingBox"
                >
                  <path d="M4.30254e-05 180C4.30254e-05 180 -0.000306205 64.1811 0.000985255 0C110.501 -7.34495e-06 143.725 81.4309 267.001 119.698C347.529 144.695 442.001 79.2637 551.001 133.497C658.905 187.185 698.501 16.3662 800 16.3662C800 64.8229 800 180 800 180H4.30254e-05Z" 
                        transform="scale(0.00125, 0.00555)"
                  />
                </clipPath>
              </defs>
            </svg> */}

          {/* </div> */}



          

          <LandingHeaders />
          <Stars />
          <ProjectsList /> 
        </Layout> 

      </IKContext>

    </ScrollContextProvider>
  )
}


