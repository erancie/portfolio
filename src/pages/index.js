import React, { useEffect, useState } from "react"
import TopNav from "../components/TopNav"
import Layout from "../components/Layout"
import Box from "../components/Box"
import '../styles/global.sass'
import * as styles from '../styles/home.module.sass'
import Nav from "../components/Nav"
import Story from "../components/Story"
import ProjectsList from "../components/ProjectsList"


export default function Home() {



  return (
    <div className="wrapper">
      
      <div className="landing">
        <div className="landing-bg"></div>

        <Nav />
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

    </div>
  )
}
