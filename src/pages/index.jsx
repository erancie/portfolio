import React, {useCallback, useEffect} from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import LandingHeaders from "../components/LandingHeaders"
import Intro from "../components/Intro"
import ProjectsList from "../components/ProjectsList"
import Contact from "../components/Contact"
import { ScrollContextProvider } from "../components/utils/useScrollContext"
import { IKContext } from 'imagekitio-react'


export default function Home() {

  // const checkInView = useCallback(() => {
  //   const projectElements = document.querySelectorAll('.fade-in')
  //   const observer = new IntersectionObserver(entries => { 
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show')
  //       }
  //     })
  //   }, { threshold: 1 })
  //   projectElements.forEach(project => {
  //     observer.observe(project) 
  //   })
  // }, [])

  // useEffect(() => {
  //   checkInView() 
  // }, [])

  return (
    <ScrollContextProvider>
      <IKContext publicKey={process.env.GATSBY_IK_PUBLIC_KEY}
                 urlEndpoint='https://ik.imagekit.io/kv4ohthhz'>
        <Layout >
          <BackgroundScene />
          <LandingHeaders />
          <Intro />
          <ProjectsList /> 
          {/* <Contact /> */}
        </Layout> 
      </IKContext>
    </ScrollContextProvider>
  )
}

