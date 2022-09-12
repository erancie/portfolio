//gatsby uses folder and file names to declare routes and url patterns
//this file name denotes a dynamic path/param as part of the url using [param] (not :param)
//the param value is made available through the default component's props.params.[filename]

import React, { useEffect, useState, useRef } from 'react'
import Layout from '../../components/Layout'
import projects from '../../../content/projectsData'
import { Link } from 'gatsby'
import TrickCards from '../../components/TrickCards'
import { gsap } from 'gsap'

export default function Project(props) {
  
  const layoverRef = useRef(null)

  const [proj, setProj] = useState({})

  useEffect(()=>{
    const [ project ] = projects.filter((proj)=>proj.name === props.params.projectId)
    setProj(project)
  }, [])

  useEffect(()=> {
    layoverRef.current.addEventListener("mouseenter", () => {
      gsap.to(layoverRef.current, {
          opacity: 1, duration: .18, ease:'none', 
      })
    });
    layoverRef.current.addEventListener("mouseleave", () => {
      gsap.to(layoverRef.current, {
          opacity: 0, duration: .18, ease:'none' 
      })
    });
  },[])

  return (
    <Layout>
      <div className='project-container row'>
        <div className='project col-10 col-md-8 col-lg-7 col-xxl-6'>
          <div className='project-header'>
            <h1>{proj.title}</h1>
          </div>
          <div className='project-icons'>
            {proj.tools}
          </div>
          <div className='layout-img'>
            <div ref={layoverRef} className='layout-img-layover'>
              {/* <div className='link-wrapper'> */}
                <Link className='overlay-link' target="_blank" to={`${proj.link}`}>Visit</Link>
              {/* </div> */}
            </div>
            <img className='' src={proj.img}></img>
          </div>
          <div className='project-desc col-9'>
            {proj.desc}
          </div>
          {/* <Link className='project-link no-right' to={`${proj.link}`}>Visit</Link> */}
        </div>
        <TrickCards />
      </div>
    </Layout>
  )
}


//define routes --> link with components
//            Gatsby --> via folder and file names
//         React App --> via react router

//listing of items page --> access collection data, 
//                      --> provide navigation option for each item 
//                          by passing in id as param to dynamic path 

//item page --> access collection data 
//          --> access id from dynamic param 
//          --> find item in data with id