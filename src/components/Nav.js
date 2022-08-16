import React, { useState, useEffect } from 'react'
import Toggle from './Toggle'
import { Link } from 'gatsby'

export default function Nav() {

  const [hide, setHide] = useState(false)
  const [lastPosition, setLastPosition] = useState(0)

  useEffect(() => { //scroll listeners have to be bound after component mounts (not JSX event attr)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleScroll = () => {
    if( window.scrollY > lastPosition ) setHide(true)
    else setHide(false)
    setLastPosition(window.scrollY)
  };

  return (
    <nav className={`nav ${hide && 'hide'}`}>
      <div><Link to='/'>LOGO</Link></div>
      <div className='nav-links'>
        <div><Link to='/#projects'>PROJECTS</Link></div>
        <div><a>BLOG</a></div>
        <div><a>RESUME</a></div>
      </div>
      <Toggle />
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
