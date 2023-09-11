import React, { Suspense, useState, useEffect} from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import LandingHeaders from "../components/LandingHeaders"
import Intro from "../components/Intro"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    setTimeout(()=>{
      setIsLoaded(true)
    }, [3000])
  },[])

  return (
    <ScrollContextProvider>

        {/* {isLoaded ? <> */}

        <Suspense fallback={<div className="loading-state"><h1>Loading..</h1></div>}>

          <Layout >
            <BackgroundScene />
            <LandingHeaders />
            <Intro />
            <ProjectsList /> 
          </Layout> 
        
        </Suspense>        

        {/* </> 
        : <div className="loading-state"><h1>Loading..</h1></div> */}
        
    </ScrollContextProvider>
  )
}

