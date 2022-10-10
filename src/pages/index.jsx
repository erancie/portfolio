import React, { useCallback, useRef } from "react"
import BackgroundScene from "../components/BackgroundScene"
import '../styles/global.sass'
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"
import useScrollListener from '../components/utils/useScrollListener'
import Clip from "../components/Clip"

export default function Home() {

  const landingRef = useRef()

  const handleScroll = useCallback(()=>{    
    let scrollY = window.scrollY  
    if(scrollY < 1280) 
      landingRef.current.style.transform = `scale(${1-scrollY/1500})`
  }, [landingRef])

  useScrollListener([landingRef], handleScroll)

  return (
    <Layout>
      <BackgroundScene />
   
      <div ref={landingRef} className="landing">

        {/* <h1 className="title-3">&</h1> */}

        <h1 className="title-1">Out of this World</h1>
        <h1 className="title-2">Digital Spaces.</h1>
        {/* <h1 className="title-4"></h1> */}
        {/* <h3 className="title-5">I'm Elliot. </h3> */}
        <h3 className="title-5">Elliot Rancie is taking web design & develop to the next level and beyond.</h3>
        {/* unique user experiences for brands on the web. </h3> */}
        {/* & compelling stories */}
        {/* UI Design
        UX Design
        UI Development */}

      </div>

      <ProjectsList /> 
      
      
    </Layout>
  )
}


     {/* background scene is a sticky element 
          sticky elements share properties of relative and fixed
            and will still stay in the document flow / take up their original relative positioning 
              even though they become fixed when scrolling
                consider how fixed positioning alone would be taken out of doc flow like absolute elements are
                  this is why the relatively positioned projects list still appears after the sticky bg scene */}
