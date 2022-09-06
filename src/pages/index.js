import React, { useCallback, useRef } from "react"
import BackgroundScene from "../components/BackgroundScene"
import '../styles/global.sass'
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import useScrollListener from '../components/utils/useScrollListener'
import TrickCards from "../components/TrickCards"

export default function Home() {

  const landingRef = useRef()

  const handleScroll = useCallback(()=>{    
    let scrollY = window.scrollY  
    if(scrollY < 1280){
      landingRef.current.style.transform = `scale(${1-scrollY/1500})`
    }
  }, [landingRef])

  useScrollListener(landingRef, handleScroll)

  return (
    <Layout>

      <BackgroundScene />
      
      <div ref={landingRef} className="landing">

        {/* <h1 className="title-6">||</h1>
        <h1 className="title-7">|</h1> */}
        <h1 className="title-1">Web</h1>
        <h1 className="title-3">&</h1>
        <h1 className="title-2">Design</h1>
        <h1 className="title-4">Development</h1>
        <h3 className="title-5">by Elliot Rancie</h3>

      </div>

      <ProjectsList />

      <TrickCards />

    </ Layout>
  )
}
