import { useEffect } from 'react' 

const useScrollListener = (ref, handler) =>{
  useEffect(() => { 
    // window.addEventListener('scroll', throttle(handler, 50));
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, [...ref, handler]);
}

export default useScrollListener

function throttle (callback, limit) {
  var wait = false;                 // Initially, we're not waiting
  return function () {              // We return a throttled function
      if (!wait) {                  // If we're not waiting
          callback.call();          // Execute users function
          wait = true;              // Prevent future invocations
          setTimeout(function () {  // After a period of time
              wait = false;         // And allow future invocations
          }, limit);
      }
  }
}
