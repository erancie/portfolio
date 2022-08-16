import React, { useEffect, useState } from "react"
import Box from "../components/Box"
import '../styles/global.sass'
import Layout from "../components/Layout"
import Story from "../components/Story"
import ProjectsList from "../components/ProjectsList"


export default function Home({data}) {
  console.log(`data: ${data}`)
  return (
    <Layout>
      
      <div className="landing">
        <div className="landing-bg"></div>

        
        <div className="landing-left">
          <div className="">
            <h1 className="">Design & Develop</h1>
            <h1 className="">Vanguard Creative</h1>
          </div>
          <div className="">
            <h1>Hi! I'm Elliot.. </h1>
          </div>
        </div>
        
        <div className="landing-right">
          <Box />
        </div>
      </div>

      <Story />

      <ProjectsList />

    </ Layout>
  )
}
