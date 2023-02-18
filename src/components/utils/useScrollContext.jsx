import React , { useContext, createContext } from 'react'
import { useScrollPosition } from './useScrollPosition'

const ScrollContext = createContext(0)

//this provider wrapper uses state from custom hook
export function ScrollContextProvider({children}) {
  const scrollPos = useScrollPosition()

          //A: components will incorporate the state used in a custom hook as if it was its own state
          // a new instance of that custom hook state will be created every time it is called
          // a context using a custom hook allows the hook to be created once and used in many comps
          // instead of importing a custom hook state in many components and creating new state each time

  return (
    <ScrollContext.Provider value={scrollPos}>
      {children}
    </ScrollContext.Provider>
  )
}

//give access to just provider of context - for canvas bridge to avoid creating another scroll listener
export const {Provider: ScrollProvider, Consumer: ScrollConsumer} = ScrollContext

//expose usage 
export const useScrollContext = () => useContext(ScrollContext)
