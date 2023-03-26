import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"
import LandingHeaders from "../components/LandingHeaders"
import { IKContext } from 'imagekitio-react'
import Contact from "../components/Contact"

export default function Home() {

  return (
    <ScrollContextProvider>
      <IKContext publicKey={process.env.GATSBY_IK_PUBLIC_KEY}
                 urlEndpoint='https://ik.imagekit.io/kv4ohthhz'>
        <Layout >
          <BackgroundScene />
          <LandingHeaders />
          <ProjectsList /> 
          <Contact />
        </Layout> 
      </IKContext>
    </ScrollContextProvider>
  )
}

// MAILCHIMP_ENDPOINT="https://gmail.us5.list-manage.com/subscribe/post?u=82817274083b671def9ba7956&id=5f7ec9e7d7&f_id=009c71ebf0"
// MAILCHIMP_ENDPOINT="https://gmail.us21.list-manage.com/subscribe/post?u=cd80895d46a1bb056f5130051&amp;id=c068134b5e&amp;f_id=006a85e1f0"

