// import React from 'react'
import create from 'zustand'

export const useScrollStore = create((set) => ({
  scrollPos: 0,
  greeting: 'Greetings!'
}))







//my zustand implementaton

// let bearStore = myCreate((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   setBears: (newBears) => set({ bears: newBears }),
// }))

// function myCreate (cb){
//   let state = {};
//   function set(setCb){
//     if(typeof setCb == 'function'){
//       let res = setCb(state)
//       state = {...state, ...res}
//       console.log(state)
//     }
//     if(typeof setCb == 'object'){
//       state = {...state, ...setCb}
//       console.log(state)
//     }
//   }
//   state = cb(set)
//   return function (stateCb){
//     const returnState = stateCb(state)
//     return returnState
//   }
// }

// console.log('bear store')
// // console.log(bearStore)
// let bears = bearStore((state)=>state.bears)
// console.log('bears: ', bears)
// const increase = bearStore((state)=>state.increasePopulation)
// increase()
// console.log('bears after increase: ', bears)




// const increasePopulation = useBearStore((state) => state.increasePopulation)
// console.log(increasePopulation)