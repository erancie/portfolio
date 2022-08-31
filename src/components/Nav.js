import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'

export default function Nav() {

  const [hide, setHide] = useState(false)
  const [lastPosition, setLastPosition] = useState(0)

  const handleScroll = useCallback(()=>{    
    if( window.scrollY > lastPosition ) setHide(true)
    else setHide(false)
    setLastPosition(window.scrollY)
  }, [lastPosition])

  useEffect(() => { //scroll listeners have to be bound after component mounts (not JSX event attr)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  return (
    <nav className={`nav ${hide && 'hide'}`}>
      <div><Link to='/'>LOGO</Link></div>
      <div className='nav-links'>
        <div><Link to='/#projects'>PROJECTS</Link></div>
        <div><a href='/'>BLOG</a></div>
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
