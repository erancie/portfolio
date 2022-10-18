import { useEffect } from 'react'
import { useScrollStore } from '../../store'

export const useScrollZustand = () =>{

  const handler = () => {
    const scrollY = window.scrollY
    useScrollStore.setState({ scrollPos: scrollY })
    //causes rerenders? console goes crazy
  }

  useEffect(() => { 
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler)
  }, []);
}
