import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'gatsby'
import useScrollListener from './utils/useScrollListener'

export default function Nav() {

  const [bgColor, setBgColor] = useState(false)//change to ref? b/c dont need rerender when changes?
  const [hide, setHide] = useState(false)
  let lastPosition = useRef(0)

  const handleScroll = useCallback(()=>{    
    if( window.scrollY > lastPosition.current ) setHide(true)
    else setHide(false)
    if( window.scrollY > '150') setBgColor(true)
    else setBgColor(false)
    lastPosition.current = window.scrollY   //why does this work using ref and not state for lastPos?
  }, [lastPosition])

  useScrollListener(lastPosition, handleScroll)

  return (
    <nav className={`nav ${hide && 'hide'} ${bgColor && 'bgColor'}`}>
      <div><Link to='/'>LOGO</Link></div>
      <div className='nav-links'>
        <div><Link to='/#projects'>PROJECTS</Link></div>
        <div><a href='/'>CONTACT</a></div>
        <div><a href='/'>RESUME</a></div>
      </div>
      {/* <Toggle /> */}
    </nav>
  )
}


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// <button className={classNames('this is always applied', 
//         isTruthy && 'this only when the isTruthy is truthy', 
//         active ? 'active classes' : 'inactive classes')}>Text</button>

//pretty cool - && and turnary expressions can be used to coniditonally include arguments in a function call
