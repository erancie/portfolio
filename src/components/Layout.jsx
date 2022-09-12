import React from 'react'
import Nav from './Nav'

export default function Layout(props) {

  return (
    <div className='container'>
      <Nav />

      {props.children}
      {/* {props.children?.map((child)=><div>{child}</div>)} */}

      <footer>
        Copywright Vangaurd Creative 2022
      </footer>
    </div>
  )
}
