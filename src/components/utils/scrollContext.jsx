import React , { useContext, createContext } from 'react'

import { useScrollListener } from './useScrollListener'

const ScrollContext = createContext(0)

export function ScrollContextProvider({children}) {
  
  const scrollPos = useScrollListener()
  
  console.log(`scrollPos scrollContext: ${scrollPos}`)
  return (
    <ScrollContext.Provider value={scrollPos}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => useContext(ScrollContext)

