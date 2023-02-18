import React from 'react'
import Nav from './Nav'

function Layout(props) {
  return (
    <div className='container'>
      <Nav />
      {props.children}
      <footer>
        Copywright Vangaurd Creative 2022
      </footer>
    </div>
  )
}

export default React.memo(Layout)
