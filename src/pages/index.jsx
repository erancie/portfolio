import React from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/scrollContext"
import LandingHeaders from "../components/LandingHeaders"

export default function Home() {
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