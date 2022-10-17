import React , { useContext, createContext } from 'react'
import { useScrollPosition } from './useScrollPosition'

const ScrollContext = createContext(0)

//this provider wrapper uses event listener w/ state
//and passes in scroll to Context
export function ScrollContextProvider({children}) {
  const scrollPos = useScrollPosition()
    //how does this return value ^^ auto update other comps?
  console.log(`scrollPos scrollContext: ${scrollPos}`)
  return (
    <ScrollContext.Provider value={scrollPos}>
      {children}
    </ScrollContext.Provider>
  )
}

//give access to just provider of context
export const {Provider: ScrollProvider, Consumer: ScrollConsumer} = ScrollContext

export const useScroll = () => useContext(ScrollContext)
