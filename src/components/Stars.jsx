import React, {useRef} from 'react'
import { useScrollContext } from './utils/useScrollContext'
import consoleLeft from '../../static/console-left2.png'
import consoleRight from '../../static/console-right.png'


export default function Stars() {
 const scrollPos = useScrollContext()
  // const yPosition = { transform: `translateY(calc(-50px + ${scrollPos/100}px))`}
  const yPosition = { transform: `translateY(calc(70px - ${scrollPos/100}px))`}
  const positionLeft = {left: (scrollPos < 2800) && '-20rem'}
  const positionRight = {right: (scrollPos < 2800) && '-20rem'}
  const landingRef = useRef()
  // useEffect(() => {
  //   const handler = () => landingRef.current.style.transform = `translateY(${-window.scrollY/24}px)`
  //   window.addEventListener('scroll', handler);
  // }, [])
  
  return (
    <>
    <div className="stars-container"
          style={yPosition}
          ref={landingRef}
          >
        <img className='stars-left'
        style={positionLeft}
        src={consoleLeft} alt="" />
        <img className='stars-right' 
        style={positionRight}
        src={consoleRight} alt="" />
    </div>
    </>
  )
}


