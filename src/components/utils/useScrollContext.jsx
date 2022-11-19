import React , { useContext, createContext } from 'react'
import { useScrollPosition } from './useScrollPosition'

const ScrollContext = createContext(0)

//this provider wrapper uses event listener w/ state
//and passes in scroll to Context's Provider to be distributed to all child comps 
export function ScrollContextProvider({children}) {
  const scrollPos = useScrollPosition()
    //react comp as one value?
    //how does this return value ^^ auto update other comps? (can update not just context)
    //doesn't run useScrollPosition() again..?

  return (
    <ScrollContext.Provider value={scrollPos}>
      {children}
    </ScrollContext.Provider>
  )
}

//give access to just provider of context - for canvas bridge to avoid creating another scroll listener
export const {Provider: ScrollProvider, Consumer: ScrollConsumer} = ScrollContext

export const useScrollContext = () => useContext(ScrollContext)
