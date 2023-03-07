import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import { useScrollContext } from './utils/useScrollContext'

export default function Nav() {

  const scrollPos = useScrollContext()
  const hide = useRef(false)
  const lastPosition = useRef(0)

  useEffect(()=>{
    if( scrollPos > lastPosition.current ) hide.current = true
    else hide.current = false
    lastPosition.current = scrollPos  
  }, [scrollPos])

  return ( 
    <>
    <nav className={`nav ${hide.current && 'hide'} ${scrollPos > 80 && 'bgColor'}`}>
      <div className='logo'><Link to='/'>ER</Link></div>
      <div className='nav-links'>
        {/* <div><Link to='/#projects'>Work</Link></div> */}
        <div>
          <a className='link-contact' href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86">
              <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/>
            </svg>
          </a>
        </div>
        {/* <div><a href='/'>Resume</a></div> */}
        <div >
          <a className='link-git' href='https://github.com/erancie' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a className='link-li' href='https://www.linkedin.com/in/elliot-rancie' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536" >
              <path d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
                      C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
                      h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
                      C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
                      c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
                      c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
                      c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
                      c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
                      c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
                      c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
                      H370.873z"/>  
            </svg>
          </a>
            </div>
      </div>
      {/* <Toggle /> */}
      
    </nav>

    <div className="to-top" style={{right: (hide.current || scrollPos < 1200) && '-5rem'}}>
      <a href='#top'>
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0711 0L54.0887 13.7868L54.0886 13.7869L78.5591 37.8544C80.5279 39.7908 80.5279 42.9302 78.5591 44.8666L71.671 51.6412C69.7022 53.5776 66.5102 53.5776 64.5415 51.6412L40.071 27.5737L12.0358 55.1472L1.58299 44.8664C-0.385776 42.9301 -0.385776 39.7907 1.58299 37.8543L40.0711 0ZM59.588 62.5552C61.5568 60.6189 61.5568 57.4794 59.588 55.5431L43.354 39.5764C41.3853 37.64 38.1933 37.64 36.2245 39.5764L16.4258 59.0491L36.2245 78.5219C38.1933 80.4582 41.3853 80.4582 43.354 78.5219L59.588 62.5552Z" />
        </svg>
      </a>
    </div>

    {/* <div className="space-walk" style={{right: (hide.current || scrollPos < 1200) && '-5rem'}}>
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0711 0L54.0887 13.7868L54.0886 13.7869L78.5591 37.8544C80.5279 39.7908 80.5279 42.9302 78.5591 44.8666L71.671 51.6412C69.7022 53.5776 66.5102 53.5776 64.5415 51.6412L40.071 27.5737L12.0358 55.1472L1.58299 44.8664C-0.385776 42.9301 -0.385776 39.7907 1.58299 37.8543L40.0711 0ZM59.588 62.5552C61.5568 60.6189 61.5568 57.4794 59.588 55.5431L43.354 39.5764C41.3853 37.64 38.1933 37.64 36.2245 39.5764L16.4258 59.0491L36.2245 78.5219C38.1933 80.4582 41.3853 80.4582 43.354 78.5219L59.588 62.5552Z" />
        </svg>
    </div> */}
  </>
  )
}


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// <button className={classNames('this is always applied', 
//         isTruthy && 'this only when the isTruthy is truthy', 
//         active ? 'active classes' : 'inactive classes')}>Text</button>

//pretty cool - && and turnary expressions can be used to coniditonally include arguments in a function call
