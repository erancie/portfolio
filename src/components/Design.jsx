import React, { useEffect, useState, useRef, useCallback } from 'react'

var designs = [
  { 
    name: '4shots',
    src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/4shots-panel_bamBv0ygn.PNG?updatedAt=1698475443621'
  },
  { 
    name: 'cb',
    src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle-blue-panel_yJ6zoqywg.PNG?updatedAt=1698502843019'
  },
  { 
    name: 'circles',
    src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle2-panel_sDuLFglqe.PNG?updatedAt=1698503075084'
  },
  { 
    name: 'cb2',
    src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle1-panel_XLEfzN80d.PNG?updatedAt=1698502842445'
  },
  // { 
  //   name: 'cb3',
  //   src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/ucd-clear_ES34Ejcu2.png?updatedAt=1698503834346'
  // },
]



export default function Design() {

  const currdeg = useRef(0)
  const carouselRef = useRef('')
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = document.querySelectorAll('.item');
    itemsRef.current = Array.from(items);
    rotate('n');

  }, []);
  
  const rotate = useCallback((e)=>{
    e=="n" ? currdeg.current -= 90 : currdeg.current += 90
    carouselRef.current.style.transform = "rotateY("+currdeg.current+"deg)"
    itemsRef.current.forEach((item)=> {
      item.style.transform = "rotateY("+(-currdeg.current)+"deg)"
    });
    // Remove the 'centered' class from all images
    itemsRef.current.forEach((item)=> {
      item.classList.remove('centered');
    });
    // Add the 'centered' class to the currently centered image
    let centeredIndex = [0, 3, 2, 1][((currdeg.current / 90) % 4 + 4) % 4];
    itemsRef.current[centeredIndex].classList.add('centered')
  },[currdeg])

  const centerImage = useCallback((index) => {
    let currentIndex = [0, 3, 2, 1][((currdeg.current / 90) % 4 + 4) % 4];
    let targetIndex = index;
    let diff = (targetIndex - currentIndex + 4) % 4;
    rotate(diff * 90);
   }, [rotate]);

  return (
    <div id='design' className="design side-viewing dc">

      <h1 className='design-header main-color fade-in'>&nbsp;UI&nbsp;&nbsp;UX</h1>

      <div className="carousel-container">
        <div ref={carouselRef} className="carousel">

          <div className="a">
            <img id={designs[0].name} className='item design-img' onClick={() => centerImage(0)} src={designs[0].src} ></img>
          </div>

          <div className="b">
            <img id={designs[1].name} className='item design-img' onClick={() => centerImage(1)} src={designs[1].src} ></img>
          </div>

          <div className="c">
            <img id={designs[2].name} className='item design-img' onClick={() => centerImage(2)} src={designs[2].src} ></img>
          </div>

          <div className="d">
            <img id={designs[3].name} className='item design-img' onClick={() => centerImage(3)} src={designs[3].src} ></img>
          </div>

        </div>
      </div>

      <div className='prev-next-cont'>
        <div onClick={()=>rotate("n")} class="next">
          <svg viewBox="0 0 51 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00488281 0.434526L24.8534 30.4199L28.8746 25.5817L50.0047 0.419922L35.5774 2.34127C35.2057 2.39077 34.8559 2.57773 34.5762 2.8764L24.8087 13.3065L14.9803 2.87069C14.7024 2.57561 14.3558 2.39043 13.9875 2.34024L0.00488281 0.434526Z" />
          </svg>
        </div>
        <div onClick={()=>rotate("p")} class="prev">        
          <svg viewBox="0 0 51 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00488281 0.434526L24.8534 30.4199L28.8746 25.5817L50.0047 0.419922L35.5774 2.34127C35.2057 2.39077 34.8559 2.57773 34.5762 2.8764L24.8087 13.3065L14.9803 2.87069C14.7024 2.57561 14.3558 2.39043 13.9875 2.34024L0.00488281 0.434526Z" />
          </svg>
        </div>
      </div>


      <svg id="design-clip-wrapper" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="design-clip" viewBox="0 0 800 400" clipPathUnits="objectBoundingBox" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.395 53.0736C67.5507 45.729 74.7767 40.969 82.7705 40.969H244.732L265.63 7.11999C268.363 2.69435 273.193 0 278.394 0H398.99H521.991C527.216 0 532.065 2.71909 534.79 7.17747L555.443 40.969H716.174C724.124 40.969 731.319 45.6772 734.502 52.962L798.327 199.053C800.558 204.158 800.558 209.962 798.327 215.067L734.502 361.158C731.319 368.443 724.124 373.151 716.174 373.151H495.34L486.687 391.421C484.205 396.66 478.927 400 473.13 400H399.836H326.284C320.482 400 315.201 396.654 312.722 391.408L304.095 373.151H82.7705C74.7767 373.151 67.5507 368.391 64.395 361.047L1.6244 214.955C-0.541468 209.915 -0.541464 204.206 1.6244 199.165L64.395 53.0736Z" 
                      transform="scale(0.00125, 0.0025)" /> 
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}


