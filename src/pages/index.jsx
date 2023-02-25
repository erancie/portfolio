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



          <div className="overlay"></div>

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
              <path d="M0.998822 280.5C0.998822 280.5 0.998473 100.337 0.999765 0.500061C111.5 0.50005 144.724 127.17 268 186.697C348.528 225.581 443 123.799 552 208.162C659.904 291.676 699.5 25.9585 800.999 25.9585C800.999 101.336 800.999 280.5 800.999 280.5H0.998822Z" 
                    transform="scale(0.00125, 0.00357)"
              />
              </clipPath>
            </defs>
          </svg>

          
          <div className="overlay-fore"></div>

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
          </svg>

          

          <LandingHeaders />
          <Stars />
          <ProjectsList /> 
        </Layout> 

      </IKContext>

    </ScrollContextProvider>
  )
}


