import React, { useCallback, useRef, useState } from "react"
import BackgroundScene from "../components/BackgroundScene"
import '../styles/global.sass'
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import useScrollListener from '../components/utils/useScrollListener'
import { useEffect } from "react"
import { ScrollContextProvider, useScroll } from "../components/utils/scrollContext"
import LandingHeaders from "../components/LandingHeaders"

export default function Home() {

  // const [inView, setInView] = useState(null)


  // const scrollRef = useRef() 
  // const landingRef = useRef() 

  // const handleScroll = useCallback(()=>{ 
  //   let scrollY = window.scrollY  
  //   if(scrollY < 1280) 
  //     landingRef.current.style.transform = `scale(${1-scrollY/1500})`
  // }, [landingRef])

  // useScrollListener([landingRef], handleScroll)

  // useEffect(()=> {
  //   if (scrollPos < 1280) setInView(true)
  // }, [scrollPos])

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


     {/* background scene is a sticky element 
          sticky elements share properties of relative and fixed
            and will still stay in the document flow / take up their original relative positioning 
              even though they become fixed when scrolling
                consider how fixed positioning alone would be taken out of doc flow like absolute elements are
                  this is why the relatively positioned projects list still appears after the sticky bg scene */}


  // function unknown (...params) {
  //   let result
  //   params.forEach(element => {
  //     result += element
  //   });
  //   return result
  // }