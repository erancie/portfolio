import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/scrollContext"
import LandingHeaders from "../components/LandingHeaders"
import { useScrollZustand } from "../components/utils/useScrollZustand"

export default function Home() {

  // useScrollZustand()
  
  return (
    <ScrollContextProvider>
      <Layout>
        <BackgroundScene />
        <LandingHeaders />
        <ProjectsList /> 
      </Layout>
    </ScrollContextProvider>
  )
}