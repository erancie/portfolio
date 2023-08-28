import React, {useCallback, useEffect} from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import LandingHeaders from "../components/LandingHeaders"
import Intro from "../components/Intro"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
    {isLoading ?
    <div>Loading..</div>  
    :
    <ScrollContextProvider>
      <Layout >
        <BackgroundScene />
        <LandingHeaders />
        <Intro />
        <ProjectsList /> 
      </Layout> 
    </ScrollContextProvider>
    }
    </>

  )
}

