import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import { useScrollContext } from './utils/useScrollContext'
import toTop from '/static/svg/to-top.svg'


export default function Nav() {

  const scrollPos = useScrollContext()
  const hide = useRef(false)
  const lastPosition = useRef(0)

  useEffect(()=>{
    if( scrollPos > lastPosition.current ) hide.current = true
    else hide.current = false
    lastPosition.current = scrollPos  
  }, [scrollPos])

  return ( 
    <>
    <nav className={`nav ${hide.current && 'hide'} ${scrollPos > 80 && 'bgColor'}`}>
      <div className='logo'>
        <Link to='/'>

        <svg  className='logo-icon' width="320" height="292" viewBox="0 0 320 292"  xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M60.4058 266.453C69.0728 281.878 85.3804 291.433 103.073 291.452L213.332 291.571C230.744 291.59 246.859 282.366 255.662 267.343L312.441 170.436C321.244 155.411 321.412 136.844 312.882 121.663L258.876 25.5371C250.21 10.1123 233.901 0.557645 216.21 0.538114L105.951 0.418973C88.5377 0.400419 72.4224 9.62405 63.6197 24.6485L6.84039 121.556C-1.96235 136.579 -2.13032 155.147 6.39898 170.327L60.4058 266.453ZM186.917 168.988L179.318 161.628C178.53 161.065 177.718 160.537 176.883 160.041L177.314 159.688L98.6197 83.461L104.678 78.9658L123.477 83.043C124.198 76.8321 126.244 70.9619 129.615 65.4336C132.931 59.8526 137.343 55.0186 142.851 50.9317L164.976 34.5186L187.543 56.377L165.418 72.7901C162.786 74.7422 160.75 77.0098 159.309 79.5918C157.868 82.1748 157.065 84.8516 156.9 87.6231C156.735 90.3946 157.213 93.1612 158.336 95.9239C159.459 98.6856 161.21 101.219 163.587 103.522L201.264 140.017L201.378 139.923C202.356 140.772 203.307 141.647 204.232 142.544C205.654 143.922 207.014 145.355 208.313 146.845L212.537 150.936L211.947 151.373L212.215 151.74C215.383 156.01 218.03 160.56 220.155 165.39C222.284 170.143 223.817 175.088 224.755 180.225C225.775 185.295 226.166 190.436 225.927 195.647C225.526 204.435 223.516 212.493 219.897 219.823C216.282 227.075 211.426 233.218 205.332 238.251C199.241 243.207 192.117 246.808 183.961 249.054C175.726 251.29 166.792 251.747 157.156 250.425C147.287 249.071 138.349 246.163 130.342 241.699C122.336 237.235 115.588 231.732 110.101 225.189C104.618 218.566 100.459 211.188 97.6236 203.051C94.7935 194.837 93.5787 186.335 93.98 177.547C94.2183 172.336 95.0718 167.327 96.5425 162.521C98.0132 157.714 100.016 153.254 102.549 149.141C105.086 144.949 108.154 141.145 111.751 137.725C115.269 134.294 119.195 131.389 123.526 129.01L192.716 198.604C193.162 197.413 193.49 196.206 193.703 194.982C193.837 193.749 193.933 192.51 193.99 191.266C194.131 188.154 193.841 185.102 193.118 182.106C192.394 179.112 191.312 176.264 189.872 173.562C189.233 172.385 188.536 171.256 187.781 170.174C187.501 169.772 187.212 169.377 186.917 168.988ZM127.838 173.27C127.226 174.673 126.809 176.103 126.586 177.559C126.367 178.938 126.222 180.404 126.151 181.96C125.952 186.315 126.58 190.549 128.034 194.661C129.414 198.686 131.514 202.339 134.336 205.621C137.161 208.826 140.634 211.533 144.756 213.742C148.799 215.94 153.425 217.397 158.631 218.11C159.797 218.271 161.12 218.413 162.6 218.537C163.243 218.558 163.893 218.572 164.551 218.58C165.412 218.59 166.286 218.589 167.172 218.578C168.663 218.469 170.117 218.316 171.533 218.119C172.95 217.923 174.216 217.588 175.333 217.114L127.838 173.27ZM186.213 81.7041C179.63 85.1709 177.672 92.8272 181.839 98.8037L184.111 102.06C188.278 108.036 196.994 110.071 203.577 106.604C210.161 103.137 212.119 95.4815 207.952 89.5049L205.68 86.2481C201.513 80.2715 192.797 78.2373 186.213 81.7041Z" />
        </svg>

        </Link></div>
      <div className='nav-links'>

        <div>
          <a className='link-contact' href='mailto: elliotrancie@gmail.com' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86">
              <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/>
            </svg>
          </a>
        </div>
        <div >
          <a className='link-git' href='https://github.com/erancie' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a className='link-li' href='https://www.linkedin.com/in/elliot-rancie' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536" >
              <path d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
                      C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
                      h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
                      C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
                      c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
                      c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
                      c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
                      c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
                      c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
                      c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
                      H370.873z"/>  
            </svg>
          </a>
            </div>
      </div>
      
    </nav>

    {/* <svg className='go-down' style={{right: `${scrollPos > 1100 ? '-5rem' : '4%'}`, animation: `${scrollPos > 1100 ? 'none' : '3s go-down 4s infinite ease-in-out'}`}} viewBox="0 0 51 31"  xmlns="http://www.w3.org/2000/svg"> */}

    <svg className='go-down' style={{opacity: `${scrollPos > 1100 ? '0' : 1}`, animation: `${scrollPos > 1100 ? 'none' : '3s go-down 4s infinite ease-in-out'}`}} viewBox="0 0 51 31"  xmlns="http://www.w3.org/2000/svg">
      <path d="M0.00488281 0.434526L24.8534 30.4199L28.8746 25.5817L50.0047 0.419922L35.5774 2.34127C35.2057 2.39077 34.8559 2.57773 34.5762 2.8764L24.8087 13.3065L14.9803 2.87069C14.7024 2.57561 14.3558 2.39043 13.9875 2.34024L0.00488281 0.434526Z" />
    </svg>

    <div className="to-top" style={{right: (hide.current || scrollPos < 1300) && '-5rem'}}>
      <a href='#top'>
      <svg  viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.9999 29.9854L25.1514 0L21.1301 4.8382L0 30L14.4274 28.0786C14.7991 28.0292 15.1489 27.8422 15.4286 27.5435L25.1961 17.1134L35.0244 27.5492C35.3023 27.8443 35.6489 28.0295 36.0172 28.0797L49.9999 29.9854Z" fill="#727272"/>
      </svg>

      </a>
    </div>

  </>
  )
}


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// <button className={classNames('this is always applied', 
//         isTruthy && 'this only when the isTruthy is truthy', 
//         active ? 'active classes' : 'inactive classes')}>Text</button>

//pretty cool - && and turnary expressions can be used to coniditonally include arguments in a function call
