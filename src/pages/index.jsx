import React, {useCallback, useEffect} from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import LandingHeaders from "../components/LandingHeaders"
import Intro from "../components/Intro"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"

export default function Home() {
  return (
    <ScrollContextProvider>
        <Layout >
          <BackgroundScene />
          <LandingHeaders />
          <Intro />
          <ProjectsList /> 
        </Layout> 
    </ScrollContextProvider>
  )
}

