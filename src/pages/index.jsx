import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/scrollContext"
import LandingHeaders from "../components/LandingHeaders"
import { IKImage, IKContext} from 'imagekitio-react'

export default function Home() {
 
  return (
    <ScrollContextProvider>
      <IKContext publicKey={process.env.GATSBY_IK_PUBLIC_KEY}
                 urlEndpoint='https://ik.imagekit.io/kv4ohthhz'>

        <Layout>
          <BackgroundScene />
          <LandingHeaders />
          <ProjectsList /> 
        </Layout> 

      </IKContext>
    </ScrollContextProvider>
  )
}


{/* <IKImage style={{margin: 'auto', width: '200px'}} path="/mern1-1280_qH3SRTAhB" 
transformation={[{
  // "height": "200",
  // "width": "200"
}]}
loading="lazy" /> */}