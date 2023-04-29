import React from 'react'
import Nav from './Nav'

function Layout(props) {
  return (
    <div className='container'>
      <Nav />
      {props.children}
      <footer>
        Copywright &#169; 2023, Elliot Rancie. All rights reserved.
      </footer>
    </div>
  )
}

export default React.memo(Layout)
