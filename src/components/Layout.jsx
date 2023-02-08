import React from 'react'
import { useState } from 'react'
import Nav from './Nav'

function Layout(props) {

  const [state, setState] = useState('hey')

  return (
    <div className='container'>
      <Nav />
      {/* any prop can have data passed in that can then be accessed using render props*/}
      {/* {props.whoa(state)} */}
      {/* {props.children(state)} */}
      {props.children}
      {/* {props.children?.map((child)=><div>{child}</div>)} */}

      <footer>
        Copywright Vangaurd Creative 2022
      </footer>


    </div>
  )
}

export default React.memo(Layout)
