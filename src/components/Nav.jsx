import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'gatsby'
import { useScrollStore } from './../store'
import { useEffect } from 'react'
import { useScrollContext } from './utils/scrollContext'



export default function Nav() {

  const scrollPos = useScrollContext()
  // const scrollPos = useScrollStore((state)=>state.scrollPos)

  const [bgColor, setBgColor] = useState(false) 
  // const bgColor = useRef(false) //why wont work with ref?
  const hide = useRef(false)
  const lastPosition = useRef(0)

  const handleScroll = useCallback(()=>{  
    if( scrollPos > lastPosition.current ) hide.current = true
    else hide.current = false
    if( scrollPos > 80) setBgColor(true)
    else setBgColor(false)
    // if( scrollPos > '80') bgColor.current = true
    // else bgColor.current = false
    lastPosition.current = scrollPos   //why does this work using ref and not state for lastPos?
  }, [scrollPos])

  useEffect(()=>{
    handleScroll()
  }, [scrollPos, handleScroll])

  return ( 
    <nav className={`nav ${hide.current && 'hide'} ${bgColor && 'bgColor'}`}>
      <div className='logo'><Link to='/'>LOGO</Link></div>
      <div className='nav-links'>
        <div><Link to='/#projects'>Work</Link></div>
        <div><a href='/'>Contact</a></div>
        <div><a href='/'>Resume</a></div>
        <div><a href='/'>GitLogo</a></div>
        <div><a href='/'>LiLogo</a></div>
      </div>
      {/* <Toggle /> */}
    </nav>
  )
}

        // if( scrollPos > lastPosition.current ) setHide(true)
        // else setHide(false)
        // if( scrollPos > '80') setBgColor(true)
        // else setBgColor(false)


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// <button className={classNames('this is always applied', 
//         isTruthy && 'this only when the isTruthy is truthy', 
//         active ? 'active classes' : 'inactive classes')}>Text</button>

//pretty cool - && and turnary expressions can be used to coniditonally include arguments in a function call
