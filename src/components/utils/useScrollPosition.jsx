import { useEffect, useState } from 'react'

export const useScrollPosition = () =>{

  const [scrollPos, setScrollPos] = useState(0)

  const handler = () => {
    const scrollY = window.scrollY
    setScrollPos(scrollY)
  }

  useEffect(() => { 
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, []);
  
  return scrollPos 
} 