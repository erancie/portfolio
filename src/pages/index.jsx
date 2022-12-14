import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"
import LandingHeaders from "../components/LandingHeaders"
import { IKContext } from 'imagekitio-react'

export default function Home() {
 
  return (
    <ScrollContextProvider>
      <IKContext publicKey={process.env.GATSBY_IK_PUBLIC_KEY}
                 urlEndpoint='https://ik.imagekit.io/kv4ohthhz'>

        <Layout>
          <BackgroundScene />
          <div className="overlay"></div>
          <LandingHeaders />
          <ProjectsList /> 
        </Layout> 

      </IKContext>
    </ScrollContextProvider>
  )
}


