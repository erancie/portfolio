import { useEffect } from 'react' 

const useScrollListener = (ref, handler) =>{
  useEffect(() => { 
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, [...ref, handler]);
}

export default useScrollListener


