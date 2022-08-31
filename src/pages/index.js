import React, { useEffect, useRef, useState } from "react"
import Globe from "../components/Globe"
import '../styles/global.sass'
import Layout from "../components/Layout"
import Story from "../components/Story"
import ProjectsList from "../components/ProjectsList"



export default function Home() {

  const landingRef = useRef()

  const BackgroundScene = () => {

    const bgRef = useRef()

    useEffect(() => { 
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
  
    const handleScroll = () => {    
      if(window.scrollY < 1280){
        bgRef.current.style.backgroundSize = 320 - window.scrollY/16+"%"
        console.log(`scale(${1-window.scrollY/10})`)
        // landingRef.current.style.top = '-'+(window.scrollY/15)+'px'
        landingRef.current.style.transform = `scale(${1-window.scrollY/1500})`
        // landingRef.current.style.transform = `translateY(${-window.scrollY/1500})`
      }
    }

    return(
      <>
        <div ref={bgRef} className="landing-bg"></div>
        <div className="globe">
          <Globe />
        </div>
        <div className="bg-overlay"></div>
      </>
    )
  }
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

    </ Layout>
  )
}
