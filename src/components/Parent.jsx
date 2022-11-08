//Mixing up component composition
// by sourcing comps from different scopes

import React, { useState } from 'react'

// 2 Examples:
// A tale of two scopes - 
  //comps sourced from own scope or parent scope through props.children

//Sourcing all comps from the Parent scope 
  //parent passing in several nested {children} comps
  //parent passing in normal props to all child levels

const Child = ({children, greet}) => {
  return (
    <div className='outside'>
      Child
      {/* can source child comps from own scope */}
      {/* <GrandChild /> */}
      {/* can source child comps from Parent scope through passed in children */}
      {children}
    </div>
  )
}

const GrandChild =(props)=> {
  console.log(props.children)
  return (
    <div style={{color: 'green'}} >
      GrandChild
      {props.children}
    </div>
  )
}


const Great =({greet})=><p>great grandchild - {greet}</p>


export default function Parent() {
  
  const [myState, setMyState] = useState(111)

  return (
    <div>

      {/* {prop from Parent to Child} */}
      <Child greet={'Parent to Child'}>

        
        {/* {prop from Parent to GrandChild} */}
        <GrandChild greet={'Parent to GrandChild'}>
        {/* {GrandChild comp passed as prop to Child from Parent} */}
          
          <Great greet={'Parent to GreatGC'}></Great>

        </ GrandChild>
        {/* source comps from grand parent through children prop */}

        {/* {how to write an anonymous comp (& as grandchild?} */}
        {()=> (
            <div style={{color: 'red'}} >
              Im an anonymous component ASWELL
              {/* {???} */}
            </div>
          )
        }
    
      </Child>
    </div>
  )
}

// List all different ways a Comp can return JSX??

//Places declared - own file, parent, inline/anonymous?



