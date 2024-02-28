import React, { useEffect, useState, useRef, useCallback } from 'react'

var designs = [
  { 
    name: 'datakey-nn1',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn1_a6AxIEhKZ.PNG?updatedAt=1709099968755'
  },
  { 
    name: 'datakey-nn2',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn4_zC3UJnBaom.PNG?updatedAt=1709099966615'
  },
  { 
    name: 'datakey-nn3',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn7_gvFBoLQnf.PNG?updatedAt=1709099966526'
  },
  { 
    name: 'datakey-nn4',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn5_blfRprsrl.PNG?updatedAt=1709099966509'
  },
  { 
    name: 'datakey-nn5',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn2_FFJyGt5SiQ.PNG?updatedAt=1709099966417'
  },
  { 
    name: 'datakey-nn6',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn3_bA_uaUyZ3.PNG?updatedAt=1709099966348'
  },
  { 
    name: 'datakey-nn7',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn6_BKzAY3MBm.PNG?updatedAt=1709099966350'
  },
  { 
    name: 'datakey-nn8',
    src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn5_blfRprsrl.PNG?updatedAt=1709099966509'
  },

]



export default function WebDesign() {

  const currdeg = useRef(0)
  const carouselRef = useRef('')
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = document.querySelectorAll('.web-item');
    itemsRef.current = Array.from(items);
    rotate('n');

  }, []);
  

  const rotate = useCallback((deg) => {
    // Convert e to a number if it's not already
    let rotationAngle = typeof deg === 'string' ? (deg === "n" ? -45 : 45) : deg;
   
    // Adjust the current degree based on the rotation angle
    currdeg.current += rotationAngle;
   
    // Apply the rotation to the carousel and items
    carouselRef.current.style.transform = `rotateY(${currdeg.current}deg)`;
    itemsRef.current.forEach((item) => {
       item.style.transform = `rotateY(${-currdeg.current}deg)`;
    });
   
    // Remove the 'centered' class from all images
    itemsRef.current.forEach((item) => {
       item.classList.remove('centered');
    });
   
    // Calculate the centered index for 4 images
    let centeredIndex = [0, 7, 6, 5, 4, 3, 2, 1][((currdeg.current / 45) % 8 + 8) % 8];
    itemsRef.current[centeredIndex].classList.add('centered');
   }, [currdeg]);


   const centerImage = useCallback((targetIndex) => {
    // let currentIndex = ((currdeg.current / 90) % 4 + 4) % 4;
    let currentIndex = [0, 7, 6, 5, 4, 3, 2, 1][((currdeg.current / 45) % 8 + 8) % 8];

    let diff = (targetIndex - currentIndex + 8) % 8;
    let rotationAngle = diff * 45;
    rotate(rotationAngle);
   }, [rotate]);

  return (
    <div id='web-design' className="design side-viewing dc">

      <h1 className='design-header main-color fade-in'>&nbsp;UI&nbsp;&nbsp;UX</h1>

      <div className="web-carousel-container">
        <div ref={carouselRef} className="web-carousel">

          <div className="web-a">
            <img id={designs[0].name} className='web-item web-design-img' onClick={() => centerImage(0)} src={designs[0].src} ></img>
          </div>

          <div className="web-b">
            <img id={designs[1].name} className='web-item web-design-img' onClick={() => centerImage(1)} src={designs[1].src} ></img>
          </div>

          <div className="web-c">
            <img id={designs[2].name} className='web-item web-design-img' onClick={() => centerImage(2)} src={designs[2].src} ></img>
          </div>

          <div className="web-d">
            <img id={designs[3].name} className='web-item web-design-img' onClick={() => centerImage(3)} src={designs[3].src} ></img>
          </div>

          <div className="web-e">
            <img id={designs[4].name} className='web-item web-design-img' onClick={() => centerImage(4)} src={designs[4].src} ></img>
          </div>

          <div className="web-f">
            <img id={designs[5].name} className='web-item web-design-img' onClick={() => centerImage(5)} src={designs[5].src} ></img>
          </div>

          <div className="web-g">
            <img id={designs[6].name} className='web-item web-design-img' onClick={() => centerImage(6)} src={designs[6].src} ></img>
          </div>

          <div className="web-h">
            <img id={designs[7].name} className='web-item web-design-img' onClick={() => centerImage(7)} src={designs[7].src} ></img>
          </div>

        </div>
      </div>

      <div className='prev-next-cont-web'>
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


