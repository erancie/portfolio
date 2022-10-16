import { useEffect, useMemo, useRef, useState } from 'react'
import throttle from 'lodash/throttle'

// const getScrollPosition = () => {
//   if (typeof window === 'undefined') {
//     return 0
//   }
//   return (
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0
//   )
// }

// export const useScrollListener = (timeout = 250) => {
//   const defaultScrollTop = useMemo(() => getScrollPosition(), [])
//   const previousScrollTop = useRef(defaultScrollTop)
//   const [currentScrollTop, setCurrentScrollTop] = useState(defaultScrollTop)

//   useEffect(() => {
//     const handleDocumentScroll = () => {
//       const scrollTop = getScrollPosition()
//       setCurrentScrollTop(scrollTop)
//       previousScrollTop.current = scrollTop
//     }

//     const handleDocumentScrollThrottled = throttle(handleDocumentScroll, timeout)
//     window.addEventListener('scroll', handleDocumentScrollThrottled)

//     return () => {
//       window.removeEventListener('scroll', handleDocumentScrollThrottled)
//     }
//   }, [timeout])

//   return {
//     scrollTop: currentScrollTop,
//     previousScrollTop: previousScrollTop.current,
//     time: timeout,
//   }
// }



export const useScrollListener = () =>{

  // const initialScrollPos = window.scrollY
  const initialScrollPos = 0

  // const [scrollPos, setScrollPos] = useState(initialScrollPos)
  const scrollPos = useRef(initialScrollPos)

  const handler = () => {
    const scrollY = window.scrollY
    // setScrollPos(scrollY)
    scrollPos.current = scrollY
    console.log('scrollPos: ', scrollPos)
    console.log('scrollY: ', scrollY)
  }
  useEffect(() => { 
    // window.addEventListener('scroll', throttle(handler));
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, []);

  return scrollPos
}

// const useScrollListener = (ref, handler) =>{
//   useEffect(() => { 
//     // window.addEventListener('scroll', throttle(handler, 50));
//     window.addEventListener('scroll', handler);
//     return () => window.removeEventListener('scroll', handler)
//   }, [...ref, handler]);
// }

// export default useScrollListener

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
