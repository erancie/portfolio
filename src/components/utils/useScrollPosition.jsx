import { useEffect, useMemo, useRef, useState } from 'react'
// import throttle from 'lodash/throttle'

export const useScrollPosition = () =>{
  const [scrollPos, setScrollPos] = useState(0)
  // const scrollPos = useRef(0) //why cant use ref?
  const handler = () => {
    const scrollY = window.scrollY
    setScrollPos(scrollY)
    // scrollPos.current = scrollY
  }
  useEffect(() => { 
    // window.addEventListener('scroll', throttle(handler, 250));
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, []);
  
  return scrollPos //pushes state to importing comps
  // return scrollPos.current
}



// function throttle (callback, limit) {
//   var wait = false;                 // Initially, we're not waiting
//   return function () {              // We return a throttled function
//       if (!wait) {                  // If we're not waiting
//           callback.call();          // Execute users function
//           wait = true;              // Prevent future invocations
//           setTimeout(function () {  // After a period of time
//               wait = false;         // And allow future invocations
//           }, limit);
//       }
//   }
// }
