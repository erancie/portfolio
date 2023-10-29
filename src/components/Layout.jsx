import React, { useLayoutEffect } from 'react'
import Nav from './Nav'
// import LocomotiveScroll from 'locomotive-scroll';


function Layout(props) {

  // useLayoutEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const scroll = new LocomotiveScroll({
  //       el: document.querySelector('#scroll-wrapper'),
  //       smooth: true,
  //       smoothMobile: true,
  //       inertia: 0.75
  //     });
    
  //     return () => {
  //       if (scroll) scroll.destroy();
  //     }
  //   }
  // }, []);
  
  return (
    // <div id='scroll-wrapper'>
    <div className='container'>
      <Nav />
      {props.children}
      <footer>
        Copywright &#169; 2023, Elliot Rancie. All rights reserved.
      </footer>
    </div>
    // </div>
  )
}
export default React.memo(Layout)
